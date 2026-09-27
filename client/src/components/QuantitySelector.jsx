import React from 'react';
import { Plus, Minus, Scale } from 'lucide-react';

export default function QuantitySelector({ quantity, onChange, unit = "g" }) {
  const handleIncrement = (amount) => {
    const nextVal = Math.max(10, quantity + amount);
    onChange(nextVal);
  };

  return (
    <div className="quantity-box">
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Scale size={24} color="var(--primary)" />
        <div>
          <h4 style={{ fontWeight: '700', fontSize: '1.05rem', color: 'var(--text-main)' }}>Serving Portion Quantity</h4>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Adjust serving size to recalculate total nutrients instantly</p>
        </div>
      </div>

      <div className="quantity-controls">
        <button onClick={() => handleIncrement(-50)} className="qty-btn" title="Subtract 50g">
          <Minus size={18} />
        </button>

        <input 
          type="number"
          value={quantity}
          onChange={(e) => onChange(Math.max(1, Number(e.target.value) || 100))}
          className="qty-input"
          min="1"
          max="5000"
        />

        <span style={{ fontWeight: '700', fontSize: '1.1rem', color: 'var(--text-muted)' }}>{unit}</span>

        <button onClick={() => handleIncrement(50)} className="qty-btn" title="Add 50g">
          <Plus size={18} />
        </button>
      </div>

      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {[50, 100, 150, 250, 500].map(val => (
          <button 
            key={val} 
            onClick={() => onChange(val)}
            className={`btn ${quantity === val ? 'btn-primary' : 'btn-outline'}`}
            style={{ padding: '6px 14px', fontSize: '0.85rem' }}
          >
            {val}{unit}
          </button>
        ))}
      </div>
    </div>
  );
}
