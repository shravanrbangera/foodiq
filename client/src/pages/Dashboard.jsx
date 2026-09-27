import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import FoodCard from '../components/FoodCard';
import { submitFoodApi } from '../services/api';
import { Search, Heart, Clock, Plus, CheckCircle2, X } from 'lucide-react';

export default function Dashboard() {
  const { user, favorites, recentSearches } = useAuth();
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [foodName, setFoodName] = useState('');
  const [category, setCategory] = useState('Indian Food');
  const [type, setType] = useState('Vegetarian');
  const [description, setDescription] = useState('');
  const [calories, setCalories] = useState('150');
  const [protein, setProtein] = useState('8');
  const [submittedMessage, setSubmittedMessage] = useState('');

  const handleSubmitFood = async (e) => {
    e.preventDefault();
    try {
      await submitFoodApi({
        foodName,
        category,
        type,
        description,
        suggestedNutrition: {
          calories: Number(calories) || 0,
          protein: Number(protein) || 0
        }
      });
      setSubmittedMessage('Food submitted successfully! It will appear publicly after admin approval.');
      setFoodName('');
      setTimeout(() => {
        setShowModal(false);
        setSubmittedMessage('');
      }, 2500);
    } catch (err) {
      alert('Error submitting food: ' + err.message);
    }
  };

  return (
    <div style={{ flex: 1, padding: '40px 0' }}>
      <div className="container">
        {/* WELCOME BANNER */}
        <div style={{
          backgroundColor: 'var(--primary-dark)',
          color: '#FFFFFF',
          borderRadius: 'var(--radius-xl)',
          padding: '36px',
          marginBottom: '40px',
          boxShadow: 'var(--shadow-md)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <div>
            <span className="badge badge-green" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: '#FFFFFF', marginBottom: '12px' }}>
              MY FOODIQ DASHBOARD
            </span>
            <h1 style={{ fontSize: '2.2rem', fontWeight: '800', marginBottom: '8px' }}>
              Welcome back, {user?.name || 'Student'} 👋
            </h1>
            <p style={{ color: '#B8C7C2', fontSize: '1rem' }}>
              What food would you like to explore today?
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <button onClick={() => navigate('/explore')} className="btn btn-primary" style={{ backgroundColor: '#FFFFFF', color: 'var(--primary-dark)' }}>
              <Search size={18} />
              Search Food
            </button>
            <button onClick={() => setShowModal(true)} className="btn btn-secondary" style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)', color: '#FFFFFF' }}>
              <Plus size={18} />
              Suggest a Food
            </button>
          </div>
        </div>

        {/* FAVORITES GRID */}
        <div style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Heart color="#EF4444" fill="#EF4444" size={22} />
            My Saved Favorites ({favorites.length})
          </h2>

          {favorites.length === 0 ? (
            <div style={{ backgroundColor: 'var(--bg-card)', padding: '40px', borderRadius: 'var(--radius-lg)', textAlign: 'center', border: '1px solid var(--border-color)' }}>
              <p style={{ color: 'var(--text-muted)' }}>You haven't saved any foods to favorites yet.</p>
              <button onClick={() => navigate('/explore')} className="btn btn-outline" style={{ marginTop: '16px' }}>Browse Foods</button>
            </div>
          ) : (
            <div className="food-grid">
              {favorites.map(f => (
                <FoodCard key={f._id} food={f} />
              ))}
            </div>
          )}
        </div>

        {/* RECENT SEARCHES */}
        <div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Clock color="var(--primary)" size={22} />
            Recent Searches
          </h2>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {recentSearches.map((item, idx) => (
              <button 
                key={idx}
                onClick={() => navigate(`/explore?search=${encodeURIComponent(item)}`)}
                className="btn btn-outline"
                style={{ borderRadius: 'var(--radius-full)' }}
              >
                <Search size={14} />
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* SUGGEST A FOOD MODAL */}
        {showModal && (
          <div style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '20px'
          }}>
            <div style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-xl)',
              padding: '32px',
              maxWidth: '500px',
              width: '100%',
              boxShadow: 'var(--shadow-lg)',
              position: 'relative'
            }}>
              <button 
                onClick={() => setShowModal(false)}
                style={{ position: 'absolute', top: '20px', right: '20px', border: 'none', background: 'none' }}
              >
                <X size={20} />
              </button>

              <h3 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '8px' }}>Suggest a Food Item</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '20px' }}>Can't find your food? Submit details for admin approval.</p>

              {submittedMessage ? (
                <div style={{ backgroundColor: 'var(--primary-light)', color: 'var(--primary-dark)', padding: '16px', borderRadius: 'var(--radius-md)', textAlign: 'center', fontWeight: '600' }}>
                  <CheckCircle2 size={24} style={{ display: 'block', margin: '0 auto 8px' }} />
                  {submittedMessage}
                </div>
              ) : (
                <form onSubmit={handleSubmitFood}>
                  <div style={{ marginBottom: '14px' }}>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '4px' }}>Food Name</label>
                    <input 
                      type="text" 
                      required
                      value={foodName} 
                      onChange={(e) => setFoodName(e.target.value)}
                      placeholder="e.g. Masala Dosa"
                      style={{ width: '100%', padding: '10px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', outline: 'none' }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '14px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '4px' }}>Category</label>
                      <select value={category} onChange={(e) => setCategory(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                        <option value="Indian Food">Indian Food</option>
                        <option value="Fruits">Fruits</option>
                        <option value="Vegetables">Vegetables</option>
                        <option value="Meat">Meat</option>
                        <option value="Snacks">Snacks</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '4px' }}>Diet Type</label>
                      <select value={type} onChange={(e) => setType(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                        <option value="Vegetarian">Vegetarian</option>
                        <option value="Non-Vegetarian">Non-Vegetarian</option>
                        <option value="Vegan">Vegan</option>
                      </select>
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '14px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '4px' }}>Calories (kcal)</label>
                      <input type="number" value={calories} onChange={(e) => setCalories(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }} />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '4px' }}>Protein (g)</label>
                      <input type="number" value={protein} onChange={(e) => setProtein(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }} />
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '12px' }}>
                    Submit Food for Review
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
