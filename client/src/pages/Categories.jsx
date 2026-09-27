import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchCategoriesApi } from '../services/api';
import { ChevronRight } from 'lucide-react';

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCategoriesApi().then(data => {
      if (Array.isArray(data)) {
        const normalized = data.map(item => {
          if (typeof item === 'string') {
            return {
              name: item,
              icon: '🥗',
              image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80',
              count: 'Available',
              description: `Browse all foods in ${item}`
            };
          }
          return {
            name: item.name || 'Category',
            icon: item.icon || '🥗',
            image: item.image || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80',
            count: item.count || 0,
            description: item.description || `Browse nutrition in ${item.name}`
          };
        });
        setCategories(normalized);
      }
    });
  }, []);

  return (
    <div style={{ flex: 1, padding: '40px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '2.4rem', fontWeight: '800', marginBottom: '12px' }}>Explore Food Categories</h1>
          <p style={{ color: 'var(--text-muted)' }}>Discover nutrition information across all major food categories</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
          {categories.map((c, idx) => (
            <div 
              key={idx} 
              onClick={() => navigate(`/explore?category=${encodeURIComponent(c.name)}`)}
              style={{
                backgroundColor: 'var(--bg-card)',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--shadow-sm)',
                cursor: 'pointer',
                transition: 'var(--transition)'
              }}
              className="food-card"
            >
              <div style={{ height: '160px', overflow: 'hidden', position: 'relative' }}>
                <img 
                  src={c.image} 
                  alt={c.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80';
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.92)',
                  padding: '6px 12px',
                  borderRadius: '20px',
                  fontSize: '1.2rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.12)'
                }}>
                  <span>{c.icon}</span>
                  <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-main)' }}>{c.count} Items</span>
                </div>
              </div>
              <div style={{ padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '4px' }}>{c.name}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>{c.description}</p>
                </div>
                <div style={{ width: '36px', height: '36px', minWidth: '36px', borderRadius: '50%', backgroundColor: 'var(--primary-light)', color: 'var(--primary-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '12px' }}>
                  <ChevronRight size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
