import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Camera, QrCode, ArrowRight, ShieldCheck, Zap, Activity, Sparkles, CheckCircle2, SlidersHorizontal } from 'lucide-react';
import SearchBar from '../components/SearchBar';
import FoodCard from '../components/FoodCard';
import { fetchFoods, fetchCategoriesApi } from '../services/api';

export default function Home() {
  const [featuredFoods, setFeaturedFoods] = useState([]);
  const [categories, setCategories] = useState([
    { name: "South Indian Specialties", icon: "🥞", count: "13 foods" },
    { name: "Indian Cuisines & Curries", icon: "🍲", count: "17 foods" },
    { name: "Street Food & Chaat", icon: "🥣", count: "18 foods" },
    { name: "Desserts & Sweets", icon: "🍬", count: "21 foods" },
    { name: "Fresh Fruits", icon: "🍎", count: "14 foods" },
    { name: "Fast Food & Global", icon: "🍕", count: "19 foods" }
  ]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchFoods().then(data => {
      setFeaturedFoods(data.slice(0, 4));
    });
    fetchCategoriesApi().then(data => {
      if (Array.isArray(data) && data.length > 0) {
        const mapped = data.slice(0, 6).map(c => ({
          name: typeof c === 'string' ? c : c.name,
          icon: c.icon || "🥗",
          count: typeof c.count === 'number' ? `${c.count} foods` : "Available"
        }));
        setCategories(mapped);
      }
    });
  }, []);

  return (
    <div style={{ flex: 1 }}>
      {/* SECTION 1: HERO & SEARCH ENGINE */}
      <section className="hero-section">
        <div className="container hero-grid">
          <div>
            <div className="hero-tag">
              <Sparkles size={16} />
              NUTRITION INFORMATION FOR STUDENTS
            </div>

            <h1 className="hero-title">
              KNOW YOUR FOOD.<br />
              <span>KNOW YOUR NUTRITION.</span>
            </h1>

            <p className="hero-subtitle">
              Search, scan, or upload what you're eating right now and understand your nutrients within 10 seconds.
            </p>

            <SearchBar />

            <div style={{ marginTop: '20px', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
              Try searching: <strong style={{ color: 'var(--primary)' }}>Egg, Chicken Breast, Apple, Paneer, Oats, Rice...</strong>
            </div>
          </div>

          <div className="hero-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80" 
              alt="Healthy Nourish Bowl" 
              className="hero-img"
            />
            {/* Dynamic Floating Nutrition Tags */}
            <div className="floating-tag floating-tag-1">
              <span style={{ color: '#059669' }}>💪 31g Protein</span>
            </div>
            <div className="floating-tag floating-tag-2">
              <span style={{ color: '#10B981' }}>🌿 8g Fiber</span>
            </div>
            <div className="floating-tag floating-tag-3">
              <span style={{ color: '#EF4444' }}>🔥 420 kcal</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: HOW FOODIQ WORKS (3-STEP TIMELINE) */}
      <section style={{ padding: '80px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">How FoodIQ Works</h2>
            <p className="section-subtitle">Zero complicated diaries. Just immediate nutrition intelligence.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            <div style={{ padding: '32px', borderRadius: 'var(--radius-lg)', backgroundColor: 'var(--bg-main)', border: '1px solid var(--border-color)', textAlign: 'center' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'var(--primary-light)', color: 'var(--primary-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', fontWeight: '800', margin: '0 auto 20px' }}>
                01
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '12px' }}>Search or Scan Food</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Search by name, upload a food photo, or scan a barcode from your meal package.</p>
            </div>

            <div style={{ padding: '32px', borderRadius: 'var(--radius-lg)', backgroundColor: 'var(--bg-main)', border: '1px solid var(--border-color)', textAlign: 'center' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'var(--primary-light)', color: 'var(--primary-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', fontWeight: '800', margin: '0 auto 20px' }}>
                02
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '12px' }}>Select Portion Quantity</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Adjust serving size in grams (e.g. 250g) and watch all macros and micronutrients calculate live.</p>
            </div>

            <div style={{ padding: '32px', borderRadius: 'var(--radius-lg)', backgroundColor: 'var(--bg-main)', border: '1px solid var(--border-color)', textAlign: 'center' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'var(--primary-light)', color: 'var(--primary-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', fontWeight: '800', margin: '0 auto 20px' }}>
                03
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '12px' }}>Understand & Compare</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Get the FoodIQ Health Score, plain-English nutrient explanations, and healthier alternatives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: EXPLORE CATEGORIES */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="section-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'left' }}>
              <h2 className="section-title">Explore Categories</h2>
              <p className="section-subtitle">Browse nutrition by food group</p>
            </div>
            <Link to="/categories" className="btn btn-secondary">
              View All Categories
              <ArrowRight size={16} />
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '20px' }}>
            {categories.map((c, idx) => (
              <div 
                key={idx} 
                onClick={() => navigate(`/explore?category=${encodeURIComponent(c.name)}`)}
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '20px',
                  textAlign: 'center',
                  border: '1px solid var(--border-color)',
                  boxShadow: 'var(--shadow-sm)',
                  cursor: 'pointer',
                  transition: 'var(--transition)'
                }}
                className="category-card"
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>{c.icon}</div>
                <h4 style={{ fontWeight: '700', fontSize: '1.05rem' }}>{c.name}</h4>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{c.count}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: FEATURED FOODS */}
      <section style={{ padding: '80px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Staple Foods & Nutrition</h2>
            <p className="section-subtitle">Popular items checked by college students</p>
          </div>

          <div className="food-grid">
            {featuredFoods.map(f => (
              <FoodCard key={f.food_id || f._id} food={f} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/explore" className="btn btn-primary" style={{ padding: '14px 32px' }}>
              Explore Full Food Database
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5: FOOD COMPARISON TEASER */}
      <section style={{ padding: '80px 0', backgroundColor: 'var(--primary-light)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="badge badge-green" style={{ marginBottom: '16px' }}>COMPARISON ENGINE</div>
          <h2 style={{ fontSize: '2.4rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '16px' }}>
            Compare Foods Side-by-Side
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-main)', maxWidth: '640px', margin: '0 auto 32px' }}>
            Chicken Breast vs Paneer? Rice vs Roti? Compare protein density, calories, and health scores to make smart food choices.
          </p>
          <Link to="/compare" className="btn btn-primary" style={{ padding: '14px 32px' }}>
            Try FoodIQ Comparison Engine
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* SECTION 6: "WHAT SHOULD I EAT?" FILTER LAUNCHER */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{
            backgroundColor: 'var(--bg-card)',
            borderRadius: 'var(--radius-xl)',
            padding: '48px',
            border: '1px solid var(--border-color)',
            boxShadow: 'var(--shadow-md)',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '40px',
            alignItems: 'center'
          }}>
            <div>
              <div className="badge badge-green" style={{ marginBottom: '16px' }}>GOAL FILTER</div>
              <h2 style={{ fontSize: '2.2rem', fontWeight: '800', marginBottom: '16px' }}>
                "What Should I Eat?"
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '24px' }}>
                Filter food items directly by your immediate nutritional goals: High Protein, High Fiber, Low Calorie, or Vegetarian options.
              </p>
              <Link to="/filter" className="btn btn-primary">
                <SlidersHorizontal size={18} />
                Find Foods Matching My Goals
              </Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div style={{ padding: '20px', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--primary-light)', color: 'var(--primary-dark)', fontWeight: '700' }}>
                💪 High Protein
              </div>
              <div style={{ padding: '20px', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--primary-light)', color: 'var(--primary-dark)', fontWeight: '700' }}>
                🌿 High Fiber
              </div>
              <div style={{ padding: '20px', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--primary-light)', color: 'var(--primary-dark)', fontWeight: '700' }}>
                🔥 Low Calorie
              </div>
              <div style={{ padding: '20px', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--primary-light)', color: 'var(--primary-dark)', fontWeight: '700' }}>
                🥑 Nutrient Dense
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
