import React, { useState, useEffect } from 'react';
import { fetchFoods } from '../services/api';
import FoodCard from '../components/FoodCard';
import { SlidersHorizontal, CheckSquare, Square, Sparkles } from 'lucide-react';

export default function GoalFilter() {
  const [goals, setGoals] = useState({
    highProtein: true,
    highFiber: false,
    lowCalorie: false,
    nutrientDense: false
  });

  const [diet, setDiet] = useState('All');
  const [foods, setFoods] = useState([]);
  const [filteredFoods, setFilteredFoods] = useState([]);

  useEffect(() => {
    fetchFoods().then(data => {
      if (Array.isArray(data)) {
        setFoods(data);
      }
    });
  }, []);

  useEffect(() => {
    if (!Array.isArray(foods)) return;
    let result = foods.filter(item => {
      if (!item) return false;
      if (diet !== 'All' && item.type !== diet) return false;
      if (goals.highProtein && (item.nutrition?.protein || 0) < 10) return false;
      if (goals.highFiber && (item.nutrition?.fiber || 0) < 3) return false;
      if (goals.lowCalorie && (item.nutrition?.calories || 0) > 180) return false;
      if (goals.nutrientDense && (item.healthScore || 0) < 80) return false;
      return true;
    });

    setFilteredFoods(result);
  }, [goals, diet, foods]);

  const toggleGoal = (key) => {
    setGoals(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div style={{ flex: 1, padding: '40px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="badge badge-green" style={{ marginBottom: '12px' }}>GOAL FINDER</div>
          <h1 style={{ fontSize: '2.4rem', fontWeight: '800', marginBottom: '12px' }}>"What Should I Eat?"</h1>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
            Select your nutritional target and diet preference to discover foods that fit your meal goals.
          </p>
        </div>

        {/* FILTER SELECTION PANEL */}
        <div style={{
          backgroundColor: 'var(--bg-card)',
          borderRadius: 'var(--radius-xl)',
          padding: '32px',
          border: '1px solid var(--border-color)',
          boxShadow: 'var(--shadow-sm)',
          marginBottom: '40px'
        }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <SlidersHorizontal size={20} /> Select Your Nutritional Targets
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '28px' }}>
            <button 
              onClick={() => toggleGoal('highProtein')}
              style={{
                padding: '16px',
                borderRadius: 'var(--radius-md)',
                border: goals.highProtein ? '2px solid var(--primary)' : '1px solid var(--border-color)',
                backgroundColor: goals.highProtein ? 'var(--primary-light)' : 'var(--bg-main)',
                color: goals.highProtein ? 'var(--primary-dark)' : 'var(--text-main)',
                fontWeight: '700',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              {goals.highProtein ? <CheckSquare size={20} color="var(--primary)" /> : <Square size={20} color="var(--text-muted)" />}
              💪 High Protein (≥10g)
            </button>

            <button 
              onClick={() => toggleGoal('highFiber')}
              style={{
                padding: '16px',
                borderRadius: 'var(--radius-md)',
                border: goals.highFiber ? '2px solid var(--primary)' : '1px solid var(--border-color)',
                backgroundColor: goals.highFiber ? 'var(--primary-light)' : 'var(--bg-main)',
                color: goals.highFiber ? 'var(--primary-dark)' : 'var(--text-main)',
                fontWeight: '700',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              {goals.highFiber ? <CheckSquare size={20} color="var(--primary)" /> : <Square size={20} color="var(--text-muted)" />}
              🌿 High Fiber (≥3g)
            </button>

            <button 
              onClick={() => toggleGoal('lowCalorie')}
              style={{
                padding: '16px',
                borderRadius: 'var(--radius-md)',
                border: goals.lowCalorie ? '2px solid var(--primary)' : '1px solid var(--border-color)',
                backgroundColor: goals.lowCalorie ? 'var(--primary-light)' : 'var(--bg-main)',
                color: goals.lowCalorie ? 'var(--primary-dark)' : 'var(--text-main)',
                fontWeight: '700',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              {goals.lowCalorie ? <CheckSquare size={20} color="var(--primary)" /> : <Square size={20} color="var(--text-muted)" />}
              🔥 Low Calorie (≤180 kcal)
            </button>

            <button 
              onClick={() => toggleGoal('nutrientDense')}
              style={{
                padding: '16px',
                borderRadius: 'var(--radius-md)',
                border: goals.nutrientDense ? '2px solid var(--primary)' : '1px solid var(--border-color)',
                backgroundColor: goals.nutrientDense ? 'var(--primary-light)' : 'var(--bg-main)',
                color: goals.nutrientDense ? 'var(--primary-dark)' : 'var(--text-main)',
                fontWeight: '700',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              {goals.nutrientDense ? <CheckSquare size={20} color="var(--primary)" /> : <Square size={20} color="var(--text-muted)" />}
              ⭐ High Health Score (≥80)
            </button>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <span style={{ fontWeight: '700', fontSize: '0.95rem' }}>Dietary Choice:</span>
            {['All', 'Vegetarian', 'Non-Vegetarian', 'Vegan'].map(dt => (
              <button 
                key={dt}
                onClick={() => setDiet(dt)}
                className={`btn ${diet === dt ? 'btn-primary' : 'btn-outline'}`}
                style={{ padding: '8px 18px', fontSize: '0.88rem' }}
              >
                {dt}
              </button>
            ))}
          </div>
        </div>

        {/* RESULTS */}
        <div>
          <h3 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '20px' }}>
            Foods Matching Your Goal Criteria ({filteredFoods.length})
          </h3>

          {filteredFoods.length === 0 ? (
            <div style={{ backgroundColor: 'var(--bg-card)', padding: '60px', borderRadius: 'var(--radius-xl)', textAlign: 'center', border: '1px solid var(--border-color)' }}>
              <h4>No foods match all selected goal filters simultaneously.</h4>
              <p style={{ color: 'var(--text-muted)', marginTop: '8px' }}>Try unchecking one of the strict filters above.</p>
            </div>
          ) : (
            <div className="food-grid">
              {filteredFoods.map(f => (
                <FoodCard key={f._id} food={f} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
