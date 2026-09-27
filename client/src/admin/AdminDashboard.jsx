import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Shield, Database, Users, Clock, Plus, Trash2, Check, X } from 'lucide-react';
import { fetchFoods } from '../services/api';

export default function AdminDashboard() {
  const { user, isAdmin } = useAuth();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('foods');
  const [foodsList, setFoodsList] = useState([]);
  const [submissionsList, setSubmissionsList] = useState([
    { _id: 'sub_1', foodName: 'Masala Dosa', category: 'Indian Food', type: 'Vegetarian', userName: 'Student Shravan', suggestedNutrition: { calories: 220, protein: 4 }, status: 'pending' },
    { _id: 'sub_2', foodName: 'Chicken Biryani', category: 'Indian Food', type: 'Non-Vegetarian', userName: 'Student Rahul', suggestedNutrition: { calories: 350, protein: 22 }, status: 'pending' }
  ]);

  useEffect(() => {
    fetchFoods().then(data => setFoodsList(data));
  }, []);

  const handleApprove = (subId) => {
    setSubmissionsList(prev => prev.filter(s => s._id !== subId));
    alert('Submission approved and promoted to FoodIQ Public Database!');
  };

  const handleReject = (subId) => {
    setSubmissionsList(prev => prev.filter(s => s._id !== subId));
  };

  const handleDeleteFood = (foodId) => {
    setFoodsList(prev => prev.filter(f => f._id !== foodId && f.name !== foodId));
  };

  return (
    <div style={{ flex: 1, padding: '40px 0' }}>
      <div className="container">
        {/* ADMIN HEADER */}
        <div style={{
          backgroundColor: '#072B21',
          color: '#FFFFFF',
          borderRadius: 'var(--radius-xl)',
          padding: '32px',
          marginBottom: '32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <div>
            <span className="badge" style={{ backgroundColor: '#FEF3C7', color: '#D97706', marginBottom: '12px' }}>
              FOODIQ CONTROL CENTER
            </span>
            <h1 style={{ fontSize: '2.2rem', fontWeight: '800' }}>Admin Management Panel</h1>
            <p style={{ color: '#B8C7C2' }}>Logged in as {user?.email || 'admin@foodiq.com'}</p>
          </div>
        </div>

        {/* METRICS CARDS */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '32px' }}>
          <div style={{ backgroundColor: '#FFFFFF', padding: '24px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'var(--text-muted)', marginBottom: '8px' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: '700' }}>TOTAL FOOD ITEMS</span>
              <Database size={20} color="var(--primary)" />
            </div>
            <div style={{ fontSize: '2.2rem', fontWeight: '800', color: 'var(--text-main)' }}>{foodsList.length}</div>
          </div>

          <div style={{ backgroundColor: '#FFFFFF', padding: '24px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'var(--text-muted)', marginBottom: '8px' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: '700' }}>REGISTERED USERS</span>
              <Users size={20} color="#3B82F6" />
            </div>
            <div style={{ fontSize: '2.2rem', fontWeight: '800', color: 'var(--text-main)' }}>1,284</div>
          </div>

          <div style={{ backgroundColor: '#FFFFFF', padding: '24px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'var(--text-muted)', marginBottom: '8px' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: '700' }}>PENDING SUBMISSIONS</span>
              <Clock size={20} color="#F59E0B" />
            </div>
            <div style={{ fontSize: '2.2rem', fontWeight: '800', color: 'var(--text-main)' }}>{submissionsList.length}</div>
          </div>
        </div>

        {/* ADMIN NAVIGATION TABS */}
        <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
          <button 
            onClick={() => setActiveTab('foods')}
            className={`btn ${activeTab === 'foods' ? 'btn-primary' : 'btn-outline'}`}
          >
            <Database size={16} /> Food Management ({foodsList.length})
          </button>
          <button 
            onClick={() => setActiveTab('submissions')}
            className={`btn ${activeTab === 'submissions' ? 'btn-primary' : 'btn-outline'}`}
          >
            <Clock size={16} /> Review Submissions Queue ({submissionsList.length})
          </button>
        </div>

        {/* TAB 1: FOOD MANAGEMENT TABLE */}
        {activeTab === 'foods' && (
          <div style={{ backgroundColor: '#FFFFFF', borderRadius: 'var(--radius-xl)', padding: '24px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '700' }}>Food Items Catalog</h3>
              <button onClick={() => alert('Add Food Modal opened')} className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>
                <Plus size={16} /> Add New Food
              </button>
            </div>

            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--bg-subtle)', borderBottom: '2px solid var(--border-color)' }}>
                  <th style={{ padding: '12px' }}>Food Name</th>
                  <th style={{ padding: '12px' }}>Category</th>
                  <th style={{ padding: '12px' }}>Type</th>
                  <th style={{ padding: '12px' }}>Protein</th>
                  <th style={{ padding: '12px' }}>Calories</th>
                  <th style={{ padding: '12px' }}>Health Score</th>
                  <th style={{ padding: '12px', textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {foodsList.map(item => (
                  <tr key={item._id || item.name} style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: '12px', fontWeight: '700' }}>{item.name}</td>
                    <td style={{ padding: '12px' }}>{item.category}</td>
                    <td style={{ padding: '12px' }}>{item.type}</td>
                    <td style={{ padding: '12px' }}>{item.nutrition?.protein}g</td>
                    <td style={{ padding: '12px' }}>{item.nutrition?.calories} kcal</td>
                    <td style={{ padding: '12px', fontWeight: '700', color: item.badgeColor || '#087F5B' }}>{item.healthScore}</td>
                    <td style={{ padding: '12px', textAlign: 'right' }}>
                      <button 
                        onClick={() => handleDeleteFood(item._id || item.name)} 
                        style={{ color: '#EF4444', padding: '6px', border: 'none', background: 'none' }}
                        title="Delete Food"
                      >
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* TAB 2: PENDING SUBMISSIONS QUEUE */}
        {activeTab === 'submissions' && (
          <div style={{ backgroundColor: '#FFFFFF', borderRadius: 'var(--radius-xl)', padding: '24px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '20px' }}>User Food Submissions Queue</h3>

            {submissionsList.length === 0 ? (
              <p style={{ color: 'var(--text-muted)' }}>No pending user submissions.</p>
            ) : (
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--bg-subtle)', borderBottom: '2px solid var(--border-color)' }}>
                    <th style={{ padding: '12px' }}>Submitted Food</th>
                    <th style={{ padding: '12px' }}>Submitted By</th>
                    <th style={{ padding: '12px' }}>Category</th>
                    <th style={{ padding: '12px' }}>Suggested Macros</th>
                    <th style={{ padding: '12px', textAlign: 'right' }}>Approval Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {submissionsList.map(sub => (
                    <tr key={sub._id} style={{ borderBottom: '1px solid var(--border-color)' }}>
                      <td style={{ padding: '12px', fontWeight: '700' }}>{sub.foodName}</td>
                      <td style={{ padding: '12px' }}>{sub.userName}</td>
                      <td style={{ padding: '12px' }}>{sub.category}</td>
                      <td style={{ padding: '12px' }}>{sub.suggestedNutrition?.protein}g Protein, {sub.suggestedNutrition?.calories} kcal</td>
                      <td style={{ padding: '12px', textAlign: 'right' }}>
                        <button 
                          onClick={() => handleApprove(sub._id)}
                          className="btn btn-primary" 
                          style={{ padding: '6px 12px', fontSize: '0.8rem', marginRight: '8px' }}
                        >
                          <Check size={14} /> Approve
                        </button>
                        <button 
                          onClick={() => handleReject(sub._id)}
                          className="btn btn-outline" 
                          style={{ padding: '6px 12px', fontSize: '0.8rem', color: '#EF4444' }}
                        >
                          <X size={14} /> Reject
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
