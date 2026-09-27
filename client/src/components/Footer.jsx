import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">🥗 FOODIQ</div>
            <p style={{ maxWidth: '320px', lineHeight: '1.6', fontSize: '0.95rem' }}>
              <strong>KNOW YOUR FOOD. KNOW YOUR NUTRITION.</strong><br />
              Empowering college students to instantly discover complete nutritional facts, portion calculators, and health scores within 10 seconds.
            </p>
          </div>

          <div>
            <h4 className="footer-title">Features</h4>
            <ul className="footer-links">
              <li><Link to="/explore" className="footer-link">Food Search</Link></li>
              <li><Link to="/scan/image" className="footer-link">Image Recognition</Link></li>
              <li><Link to="/scan/barcode" className="footer-link">Barcode Scanner</Link></li>
              <li><Link to="/compare" className="footer-link">Food Comparison</Link></li>
              <li><Link to="/filter" className="footer-link">What Should I Eat?</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-title">Categories</h4>
            <ul className="footer-links">
              <li><Link to="/explore?category=Fruits" className="footer-link">Fresh Fruits</Link></li>
              <li><Link to="/explore?category=Vegetables" className="footer-link">Vegetables</Link></li>
              <li><Link to="/explore?category=Meat" className="footer-link">Meat & Poultry</Link></li>
              <li><Link to="/explore?category=Dairy" className="footer-link">Dairy & Eggs</Link></li>
              <li><Link to="/categories" className="footer-link">View All Categories</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-title">Account & Portals</h4>
            <ul className="footer-links">
              <li><Link to="/select-role" className="footer-link">User Login</Link></li>
              <li><Link to="/register" className="footer-link">Create Account</Link></li>
              <li><Link to="/login?role=admin" className="footer-link">Admin Portal</Link></li>
              <li><Link to="/dashboard" className="footer-link">My FoodIQ Dashboard</Link></li>
              <li><Link to="/about" className="footer-link">About Project</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} FoodIQ — Nutrition Information Platform. Designed for College Students & Portfolio Excellence.</p>
        </div>
      </div>
    </footer>
  );
}
