import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Search, User as UserIcon, Shield, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { user, logout, isAdmin } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="brand">
          <span className="brand-icon">🥗</span>
          <span>FOODIQ</span>
        </Link>

        <ul className="nav-links">
          <li><NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink></li>
          <li><NavLink to="/explore" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Explore</NavLink></li>
          <li><NavLink to="/compare" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Compare</NavLink></li>
          <li><NavLink to="/categories" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Categories</NavLink></li>
          <li><NavLink to="/filter" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>What to Eat?</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>About</NavLink></li>
        </ul>

        <div className="nav-actions">
          <button 
            onClick={() => navigate('/explore')} 
            className="btn btn-outline" 
            style={{ padding: '8px 12px', borderRadius: '50%' }}
            title="Search Foods"
          >
            <Search size={18} />
          </button>

          {user ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              {isAdmin ? (
                <Link to="/admin" className="btn btn-secondary" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>
                  <Shield size={16} />
                  Admin Panel
                </Link>
              ) : (
                <Link to="/dashboard" className="btn btn-secondary" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>
                  <UserIcon size={16} />
                  My FoodIQ
                </Link>
              )}
              <button 
                onClick={logout} 
                className="btn btn-outline" 
                style={{ padding: '8px 12px' }}
                title="Logout"
              >
                <LogOut size={16} />
              </button>
            </div>
          ) : (
            <Link to="/select-role" className="btn btn-primary" style={{ padding: '8px 20px' }}>
              Login / Auth
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
