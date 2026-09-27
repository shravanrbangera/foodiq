import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  ArrowLeft, 
  Heart, 
  CheckCircle2, 
  Flame, 
  Activity, 
  ShieldCheck, 
  AlertCircle, 
  Info, 
  ChevronDown, 
  ChevronUp 
} from 'lucide-react';
import { fetchFoodById } from '../services/api';
import { useAuth } from '../context/AuthContext';

export default function FoodDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { toggleFavorite, isFavorite } = useAuth();

  const [foodData, setFoodData] = useState(null);
  const [servingGrams, setServingGrams] = useState(100);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showMicros, setShowMicros] = useState(true);

  useEffect(() => {
    setLoading(true);
    setError(null);

    // 1. If detected food object was passed from ImageScanner with matching ID, use it
    if (location.state && location.state.detectedFood && (location.state.detectedFood.food_id === id || location.state.detectedFood._id === id)) {
      const d = location.state.detectedFood;
      setFoodData(d);
      setServingGrams(d.servingSize || 100);
      setLoading(false);
    } else {
      // 2. Fetch authoritative food record from backend by canonical food_id
      fetchFoodById(id)
        .then((res) => {
          if (res && res.food) {
            setFoodData(res.food);
            setServingGrams(res.food.servingSize || 100);
          } else {
            setError(`Food record for '${id}' is not in the FoodIQ database.`);
          }
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message || 'Failed to fetch food details');
          setLoading(false);
        });
    }
  }, [id, location.state]);

  if (loading) {
    return (
      <div className="container" style={{ padding: '80px 0', textAlign: 'center', flex: 1 }}>
        <div className="spin" style={{ width: '36px', height: '36px', border: '3px solid #E2E8F0', borderTopColor: 'var(--primary)', borderRadius: '50%', margin: '0 auto 16px' }} />
        <h3 style={{ fontWeight: '700' }}>Loading FoodIQ Verified Nutrition Data...</h3>
      </div>
    );
  }

  if (error || !foodData) {
    return (
      <div className="container" style={{ padding: '80px 0', textAlign: 'center', flex: 1, maxWidth: '600px' }}>
        <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#FEE2E2', color: '#DC2626', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
          <AlertCircle size={32} />
        </div>
        <h2 style={{ fontSize: '1.75rem', fontWeight: '800', marginBottom: '12px' }}>Food Not Found</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '24px' }}>
          {error || `No authoritative food record exists for ID: "${id}".`}
        </p>
        <Link to="/explore" className="btn btn-primary">Back to Food Catalog</Link>
      </div>
    );
  }

  const favorited = isFavorite ? isFavorite(foodData) : false;
  const base100g = foodData.nutrition;
  const multiplier = (servingGrams || 100) / 100;

  // Dynamic scaled nutrition math based on serving size (per 100g multiplier)
  const scaledNutrition = base100g ? {
    calories: Math.round(base100g.calories * multiplier),
    protein: Math.round(base100g.protein * multiplier * 10) / 10,
    carbohydrates: Math.round(base100g.carbohydrates * multiplier * 10) / 10,
    fat: Math.round(base100g.fat * multiplier * 10) / 10,
    saturatedFat: base100g.saturatedFat !== undefined ? Math.round(base100g.saturatedFat * multiplier * 10) / 10 : null,
    fiber: base100g.fiber !== undefined ? Math.round(base100g.fiber * multiplier * 10) / 10 : null,
    sugar: base100g.sugar !== undefined ? Math.round(base100g.sugar * multiplier * 10) / 10 : null,
    sodium: base100g.sodium !== undefined ? Math.round(base100g.sodium * multiplier) : null,
    cholesterol: base100g.cholesterol !== undefined ? Math.round(base100g.cholesterol * multiplier) : null
  } : null;

  const vitamins = foodData.vitamins || {};
  const minerals = foodData.minerals || {};

  return (
    <div style={{ flex: 1, padding: '40px 0', minHeight: 'calc(100vh - 160px)' }}>
      <div className="container" style={{ maxWidth: '860px' }}>
        
        {/* Back Navigation */}
        <button 
          onClick={() => navigate(-1)} 
          style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontWeight: '600', marginBottom: '24px', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
        >
          <ArrowLeft size={18} /> Back to Scanner / Catalog
        </button>

        {/* HERO FOOD HEADER */}
        <div style={{
          backgroundColor: 'var(--bg-card)',
          borderRadius: 'var(--radius-xl)',
          padding: '32px',
          border: '1px solid var(--border-color)',
          boxShadow: 'var(--shadow-sm)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '32px',
          alignItems: 'center',
          marginBottom: '28px'
        }}>
          {/* Verified Representative Image */}
          <div style={{
            height: '280px',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            backgroundColor: '#F8FAFC',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #E2E8F0',
            position: 'relative'
          }}>
            <img 
              src={foodData.representative_image || foodData.image} 
              alt={foodData.name || foodData.canonical_name} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80';
              }}
            />
            <span className="badge" style={{ position: 'absolute', top: '14px', left: '14px', backgroundColor: foodData.type === 'Vegetarian' || foodData.type === 'Vegan' ? '#DCFCE7' : '#FEE2E2', color: foodData.type === 'Vegetarian' || foodData.type === 'Vegan' ? '#166534' : '#991B1B' }}>
              {foodData.type || (foodData.vegetarian ? 'Vegetarian' : 'Non-Vegetarian')}
            </span>
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span className="badge badge-green">{foodData.category || "Prepared Food"}</span>
              {toggleFavorite && (
                <button 
                  onClick={() => toggleFavorite(foodData)}
                  className="btn btn-outline" 
                  style={{ padding: '6px 14px', color: favorited ? '#EF4444' : 'inherit', borderColor: favorited ? '#FCA5A5' : 'var(--border-color)' }}
                >
                  <Heart size={16} fill={favorited ? "#EF4444" : "none"} />
                  {favorited ? "Saved" : "Favorite"}
                </button>
              )}
            </div>

            <h1 style={{ fontSize: '2.2rem', fontWeight: '800', margin: '0 0 8px' }}>
              {foodData.name || foodData.canonical_name}
            </h1>

            {foodData.aliases && foodData.aliases.length > 0 && (
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: '0 0 14px' }}>
                <strong>Known Aliases:</strong> {foodData.aliases.join(', ')}
              </p>
            )}

            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', margin: '0 0 20px' }}>
              {foodData.description || `Verified food record for ${foodData.name || foodData.canonical_name}.`}
            </p>

            {/* Health Score Pill */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                borderRadius: 'var(--radius-lg)',
                backgroundColor: '#F8FAFC',
                border: '1px solid #E2E8F0'
              }}>
                <Activity size={18} color={foodData.healthScore ? foodData.badgeColorHex || "var(--primary)" : "#94A3B8"} />
                <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>FoodIQ Health Score:</span>
                <span style={{ fontWeight: '800', color: foodData.healthScore ? foodData.badgeColorHex || "var(--primary)" : "#94A3B8" }}>
                  {foodData.healthScore ? `${foodData.healthScore}/100 (${foodData.rating || 'GOOD'})` : 'Unavailable'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* SERVING SIZE SCALER & NUTRITION DATA */}
        {scaledNutrition ? (
          <div style={{
            backgroundColor: 'var(--bg-card)',
            borderRadius: 'var(--radius-xl)',
            padding: '28px',
            border: '1px solid var(--border-color)',
            boxShadow: 'var(--shadow-sm)',
            marginBottom: '28px'
          }}>
            {/* Serving Scaler Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '22px', flexWrap: 'wrap', gap: '14px' }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '800', margin: 0, display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  <Flame size={20} color="#EA580C" />
                  Macronutrient Breakdown
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: '4px 0 0' }}>
                  Source: {foodData.nutrition_id || 'USDA FoodData Central Analytical Profile'}
                </p>
              </div>

              {/* Quantity Controls */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '0.9rem', fontWeight: '600' }}>Serving Size:</span>
                {[50, 100, 150, 200, 250].map((g) => (
                  <button
                    key={g}
                    onClick={() => setServingGrams(g)}
                    className={servingGrams === g ? "btn btn-primary" : "btn btn-outline"}
                    style={{ padding: '6px 12px', fontSize: '0.85rem', borderRadius: 'var(--radius-md)' }}
                  >
                    {g}g
                  </button>
                ))}
              </div>
            </div>

            {/* Macro Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '14px', marginBottom: '24px' }}>
              <div style={{ backgroundColor: '#F8FAFC', padding: '16px', borderRadius: 'var(--radius-lg)', textAlign: 'center', border: '1px solid #E2E8F0' }}>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Calories</div>
                <div style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--text-main)' }}>{scaledNutrition.calories} kcal</div>
              </div>
              <div style={{ backgroundColor: '#F8FAFC', padding: '16px', borderRadius: 'var(--radius-lg)', textAlign: 'center', border: '1px solid #E2E8F0' }}>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Protein</div>
                <div style={{ fontSize: '1.4rem', fontWeight: '800', color: '#16A34A' }}>{scaledNutrition.protein}g</div>
              </div>
              <div style={{ backgroundColor: '#F8FAFC', padding: '16px', borderRadius: 'var(--radius-lg)', textAlign: 'center', border: '1px solid #E2E8F0' }}>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Carbs</div>
                <div style={{ fontSize: '1.4rem', fontWeight: '800', color: '#2563EB' }}>{scaledNutrition.carbohydrates}g</div>
              </div>
              <div style={{ backgroundColor: '#F8FAFC', padding: '16px', borderRadius: 'var(--radius-lg)', textAlign: 'center', border: '1px solid #E2E8F0' }}>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Fat</div>
                <div style={{ fontSize: '1.4rem', fontWeight: '800', color: '#D97706' }}>{scaledNutrition.fat}g</div>
              </div>
              <div style={{ backgroundColor: '#F8FAFC', padding: '16px', borderRadius: 'var(--radius-lg)', textAlign: 'center', border: '1px solid #E2E8F0' }}>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Fiber</div>
                <div style={{ fontSize: '1.4rem', fontWeight: '800', color: '#9333EA' }}>{scaledNutrition.fiber || 0}g</div>
              </div>
              <div style={{ backgroundColor: '#F8FAFC', padding: '16px', borderRadius: 'var(--radius-lg)', textAlign: 'center', border: '1px solid #E2E8F0' }}>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Sodium</div>
                <div style={{ fontSize: '1.4rem', fontWeight: '800', color: '#64748B' }}>{scaledNutrition.sodium || 0}mg</div>
              </div>
            </div>

            {/* Micro Nutrients Expandable Section */}
            <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '18px' }}>
              <button
                onClick={() => setShowMicros(!showMicros)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: '700',
                  fontSize: '1rem',
                  color: 'var(--text-main)',
                  padding: 0
                }}
              >
                <span>Vitamins & Minerals Panel (Per {servingGrams}g)</span>
                {showMicros ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>

              {showMicros && (
                <div style={{ marginTop: '16px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  {/* Vitamins Panel */}
                  <div style={{ backgroundColor: '#F8FAFC', padding: '16px', borderRadius: 'var(--radius-lg)', border: '1px solid #E2E8F0' }}>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: '700', margin: '0 0 12px', color: '#166534' }}>Vitamins</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.85rem' }}>
                      {Object.keys(vitamins).length > 0 ? (
                        Object.entries(vitamins).map(([k, v]) => (
                          <div key={k} style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span style={{ textTransform: 'capitalize' }}>{k.replace(/_/g, ' ')}</span>
                            <span style={{ fontWeight: '700' }}>{typeof v === 'number' ? `${v}` : v}</span>
                          </div>
                        ))
                      ) : (
                        <span style={{ color: 'var(--text-muted)' }}>Exact vitamin panel not analyzed</span>
                      )}
                    </div>
                  </div>

                  {/* Minerals Panel */}
                  <div style={{ backgroundColor: '#F8FAFC', padding: '16px', borderRadius: 'var(--radius-lg)', border: '1px solid #E2E8F0' }}>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: '700', margin: '0 0 12px', color: '#1E40AF' }}>Minerals</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.85rem' }}>
                      {Object.keys(minerals).length > 0 ? (
                        Object.entries(minerals).map(([k, v]) => (
                          <div key={k} style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span style={{ textTransform: 'capitalize' }}>{k.replace(/_/g, ' ')}</span>
                            <span style={{ fontWeight: '700' }}>{typeof v === 'number' ? `${v}` : v}</span>
                          </div>
                        ))
                      ) : (
                        <span style={{ color: 'var(--text-muted)' }}>Exact mineral panel not analyzed</span>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-xl)',
            padding: '28px',
            border: '1px solid #E2E8F0',
            borderLeft: '6px solid #F59E0B',
            boxShadow: 'var(--shadow-sm)',
            marginBottom: '28px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <Info size={22} color="#D97706" />
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', margin: 0 }}>Exact nutrition data unavailable for this food.</h3>
            </div>
            <p style={{ color: 'var(--text-muted)', margin: 0, fontSize: '0.95rem' }}>
              FoodIQ does not display fabricated zeros or estimated health scores when exact USDA laboratory data is unavailable.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
