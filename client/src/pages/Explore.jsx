import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, RefreshCw } from 'lucide-react';
import FoodCard from '../components/FoodCard';
import { fetchFoods, fetchCategoriesApi } from '../services/api';

export default function Explore() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSearch = searchParams.get('search') || '';
  const initialCategory = searchParams.get('category') || 'All';

  const [search, setSearch] = useState(initialSearch);
  const [category, setCategory] = useState(initialCategory);
  const [type, setType] = useState('All');
  const [minProtein, setMinProtein] = useState('');
  const [maxCalories, setMaxCalories] = useState('');
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  const [categoryList, setCategoryList] = useState([
    "All",
    "Indian Cuisines & Curries",
    "South Indian Specialties",
    "Street Food & Chaat",
    "Breads & Roti",
    "Rice, Biryani & Pulao",
    "Lentils & Dal",
    "Desserts & Sweets",
    "Snacks & Appetizers",
    "Fresh Fruits",
    "Vegetables & Greens",
    "Meat, Poultry & Seafood",
    "Healthy Staples & Breakfast"
  ]);

  useEffect(() => {
    fetchCategoriesApi().then(data => {
      if (Array.isArray(data) && data.length > 0) {
        const names = ["All", ...data.map(c => typeof c === 'string' ? c : c.name)];
        setCategoryList(names);
      }
    });
  }, []);

  useEffect(() => {
    const catParam = searchParams.get('category');
    if (catParam) {
      setCategory(catParam);
    }
    const searchParam = searchParams.get('search');
    if (searchParam) {
      setSearch(searchParam);
    }
  }, [searchParams]);

  useEffect(() => {
    setLoading(true);
    fetchFoods({
      search,
      category,
      type,
      minProtein,
      maxCalories
    }).then(data => {
      setFoods(data);
      setLoading(false);
    });
  }, [search, category, type, minProtein, maxCalories]);

  const handleReset = () => {
    setSearch('');
    setCategory('All');
    setType('All');
    setMinProtein('');
    setMaxCalories('');
    setSearchParams({});
  };

  return (
    <div style={{ flex: 1, padding: '40px 0' }}>
      <div className="container">
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ fontSize: '2.4rem', fontWeight: '800', marginBottom: '8px' }}>Explore Food & Nutrition</h1>
          <p style={{ color: 'var(--text-muted)' }}>Search and filter from our comprehensive nutritional database</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '32px' }}>
          {/* FILTER SIDEBAR */}
          <div style={{
            backgroundColor: 'var(--bg-card)',
            padding: '24px',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-color)',
            boxShadow: 'var(--shadow-sm)',
            height: 'fit-content'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Filter size={18} />
                Filters
              </h3>
              <button onClick={handleReset} style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <RefreshCw size={14} /> Reset
              </button>
            </div>

            {/* Search Input */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '6px' }}>Search Food</label>
              <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '8px 12px', backgroundColor: 'var(--bg-main)' }}>
                <Search size={16} color="var(--text-muted)" style={{ marginRight: '8px' }} />
                <input 
                  type="text" 
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="e.g. Chicken, Apple"
                  style={{ border: 'none', background: 'none', outline: 'none', width: '100%', fontSize: '0.9rem' }}
                />
              </div>
            </div>

            {/* Category */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '6px' }}>Category</label>
              <select 
                value={category} 
                onChange={(e) => setCategory(e.target.value)}
                style={{ width: '100%', padding: '10px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', outline: 'none', fontSize: '0.9rem' }}
              >
                {categoryList.map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            {/* Food Type */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '6px' }}>Diet Type</label>
              <select 
                value={type} 
                onChange={(e) => setType(e.target.value)}
                style={{ width: '100%', padding: '10px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', outline: 'none', fontSize: '0.9rem' }}
              >
                <option value="All">All Types</option>
                <option value="Vegetarian">Vegetarian</option>
                <option value="Non-Vegetarian">Non-Vegetarian</option>
                <option value="Vegan">Vegan</option>
              </select>
            </div>

            {/* Min Protein */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '6px' }}>
                Min Protein ({minProtein || 0}g)
              </label>
              <input 
                type="range" 
                min="0" 
                max="40" 
                step="1"
                value={minProtein || 0}
                onChange={(e) => setMinProtein(e.target.value)}
                style={{ width: '100%', accentColor: 'var(--primary)' }}
              />
            </div>

            {/* Max Calories */}
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '6px' }}>Max Calories</label>
              <input 
                type="number"
                placeholder="e.g. 300 kcal"
                value={maxCalories}
                onChange={(e) => setMaxCalories(e.target.value)}
                style={{ width: '100%', padding: '10px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', outline: 'none', fontSize: '0.9rem' }}
              />
            </div>
          </div>

          {/* FOOD RESULTS GRID */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
              <span style={{ fontWeight: '600', color: 'var(--text-muted)' }}>
                Showing <strong>{foods.length}</strong> food items
              </span>
            </div>

            {loading ? (
              <div style={{ textStyle: 'center', padding: '60px 0', textAlign: 'center', color: 'var(--text-muted)' }}>
                Loading FoodIQ dataset...
              </div>
            ) : foods.length === 0 ? (
              <div style={{ backgroundColor: 'var(--bg-card)', padding: '60px 20px', borderRadius: 'var(--radius-lg)', textAlign: 'center', border: '1px solid var(--border-color)' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>No food items found matching your filters</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '20px' }}>Try clearing filters or searching another keyword like 'Chicken' or 'Apple'.</p>
                <button onClick={handleReset} className="btn btn-primary">Reset Filters</button>
              </div>
            ) : (
              <div className="food-grid">
                {foods.map(f => (
                  <FoodCard key={f._id} food={f} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
