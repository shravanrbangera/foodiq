import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ChevronRight, Zap, ShieldCheck } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function FoodCard({ food }) {
  const { toggleFavorite, isFavorite } = useAuth();
  if (!food) return null;

  const favorited = isFavorite(food);

  let typeBadge = 'badge-veg';
  if (food.type === 'Non-Vegetarian') typeBadge = 'badge-nonveg';
  if (food.type === 'Vegan') typeBadge = 'badge-vegan';

  return (
    <div className="food-card">
      <div className="food-card-image-wrap">
        <img 
          src={food.image} 
          alt={food.name} 
          className="food-card-img" 
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80';
          }}
        />
        <div className="food-card-badge">
          <span className={`badge ${typeBadge}`}>
            {food.type}
          </span>
        </div>
        <button 
          onClick={() => toggleFavorite(food)}
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 'var(--shadow-sm)',
            color: favorited ? '#EF4444' : '#6B7C76',
            transition: 'var(--transition)'
          }}
          title={favorited ? "Remove Favorite" : "Add Favorite"}
        >
          <Heart size={18} fill={favorited ? "#EF4444" : "none"} />
        </button>
      </div>

      <div className="food-card-body">
        <h3 className="food-card-title">{food.name}</h3>
        <p className="food-card-category">{food.category} • Per {food.servingSize || 100}{food.servingUnit || 'g'}</p>

        <div className="food-card-stats">
          <div className="stat-item">
            <span className="stat-val">{food.nutrition?.protein || 0}g</span>
            <span className="stat-lbl">Protein</span>
          </div>

          <div className="stat-item">
            <span className="stat-val">{food.nutrition?.calories || 0}</span>
            <span className="stat-lbl">Calories</span>
          </div>

          <div className="stat-item" style={{ textAlign: 'right' }}>
            <span className="stat-val" style={{ color: food.healthScore ? (food.badgeColorHex || food.badgeColor || '#087F5B') : '#94A3B8', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <ShieldCheck size={16} />
              {food.healthScore ? food.healthScore : 'N/A'}
            </span>
            <span className="stat-lbl">Health Score</span>
          </div>
        </div>

        <Link to={`/food/${food.food_id || food._id || encodeURIComponent(food.name)}`} className="btn btn-secondary" style={{ width: '100%', marginTop: 'auto', justifyContent: 'center' }}>
          View Details
          <ChevronRight size={16} />
        </Link>
      </div>
    </div>
  );
}
