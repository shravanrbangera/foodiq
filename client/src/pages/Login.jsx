import React, { useState } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Lock, Mail, Shield, User } from 'lucide-react';

export default function Login() {
  const [searchParams] = useSearchParams();
  const roleParam = searchParams.get('role') || 'user';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const user = await login({ email, password, role: roleParam });
      if (user.role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/dashboard');
      }
    } catch (err) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ flex: 1, padding: '60px 0', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ maxWidth: '440px' }}>
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: 'var(--radius-xl)',
          padding: '40px',
          border: '1px solid var(--border-color)',
          boxShadow: 'var(--shadow-md)'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '28px' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: roleParam === 'admin' ? '#FEF3C7' : 'var(--primary-light)', color: roleParam === 'admin' ? '#D97706' : 'var(--primary-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
              {roleParam === 'admin' ? <Shield size={28} /> : <User size={28} />}
            </div>
            <h2 style={{ fontSize: '1.8rem', fontWeight: '800' }}>
              {roleParam === 'admin' ? 'Admin Portal Login' : 'User Login'}
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Welcome back to FoodIQ</p>
          </div>

          {error && (
            <div style={{ backgroundColor: '#FCE8E6', color: '#C5221F', padding: '12px', borderRadius: 'var(--radius-md)', marginBottom: '20px', fontSize: '0.88rem', textAlign: 'center' }}>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '6px' }}>Email Address</label>
              <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '10px 14px', backgroundColor: 'var(--bg-main)' }}>
                <Mail size={18} color="var(--text-muted)" style={{ marginRight: '10px' }} />
                <input 
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={roleParam === 'admin' ? 'admin@foodiq.com' : 'student@college.edu'}
                  style={{ border: 'none', background: 'none', outline: 'none', width: '100%', fontSize: '0.95rem' }}
                />
              </div>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '6px' }}>Password</label>
              <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '10px 14px', backgroundColor: 'var(--bg-main)' }}>
                <Lock size={18} color="var(--text-muted)" style={{ marginRight: '10px' }} />
                <input 
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  style={{ border: 'none', background: 'none', outline: 'none', width: '100%', fontSize: '0.95rem' }}
                />
              </div>
            </div>

            <button type="submit" disabled={loading} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              {loading ? 'Authenticating...' : 'Login'}
            </button>
          </form>

          <div style={{ marginTop: '24px', textAlign: 'center', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
            Don't have an account? <Link to="/register" style={{ color: 'var(--primary)', fontWeight: '700' }}>Create Account</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
