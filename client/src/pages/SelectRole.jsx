import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Shield, ArrowRight } from 'lucide-react';

export default function SelectRole() {
  const navigate = useNavigate();

  return (
    <div style={{ flex: 1, padding: '80px 0', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '12px' }}>Welcome to FoodIQ</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Please select your portal to continue</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
          {/* USER PORTAL */}
          <div style={{
            backgroundColor: 'var(--bg-card)',
            borderRadius: 'var(--radius-xl)',
            padding: '40px',
            border: '1px solid var(--border-color)',
            boxShadow: 'var(--shadow-md)',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <div style={{ width: '72px', height: '72px', borderRadius: '50%', backgroundColor: 'var(--primary-light)', color: 'var(--primary-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
              <User size={36} />
            </div>

            <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '8px' }}>Standard User</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '28px' }}>
              Explore foods, check health scores, save favorites, compare items, and suggest new foods.
            </p>

            <button onClick={() => navigate('/login?role=user')} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: 'auto' }}>
              Continue as User
              <ArrowRight size={18} />
            </button>
          </div>

          {/* ADMIN PORTAL */}
          <div style={{
            backgroundColor: 'var(--bg-card)',
            borderRadius: 'var(--radius-xl)',
            padding: '40px',
            border: '1px solid var(--border-color)',
            boxShadow: 'var(--shadow-md)',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <div style={{ width: '72px', height: '72px', borderRadius: '50%', backgroundColor: '#FEF3C7', color: '#D97706', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
              <Shield size={36} />
            </div>

            <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '8px' }}>Admin Control Panel</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '28px' }}>
              Manage food database, edit nutrition facts, approve user submissions, and view metrics.
            </p>

            <button onClick={() => navigate('/login?role=admin')} className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center', marginTop: 'auto' }}>
              Admin Login
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
