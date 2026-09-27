import React, { useState } from 'react';
import { ShieldCheck, Info, ChevronDown, ChevronUp } from 'lucide-react';

export default function HealthScoreGauge({ score = 85, rating = "VERY GOOD", badgeColor = "#10B981", breakdown }) {
  const [showFormula, setShowFormula] = useState(false);

  return (
    <div className="score-card">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '16px' }}>
        <ShieldCheck size={24} color="var(--primary-dark)" />
        <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--primary-dark)' }}>
          Overall FoodIQ Health Score
        </h3>
      </div>

      <div className="score-circle" style={{ backgroundColor: badgeColor }}>
        <span className="score-number">{score}</span>
        <span className="score-max">/ 100</span>
      </div>

      <div className="score-rating" style={{ color: badgeColor }}>
        {rating}
      </div>

      <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', maxWidth: '420px', margin: '0 auto 16px' }}>
        Score evaluated on nutrient density (protein & fiber boosters) vs limiter penalties (added sugar, sodium, saturated fat).
      </p>

      <button 
        onClick={() => setShowFormula(!showFormula)} 
        className="btn btn-outline" 
        style={{ padding: '6px 14px', fontSize: '0.8rem', margin: '0 auto' }}
      >
        <Info size={14} />
        {showFormula ? "Hide Formula Breakdown" : "How is this calculated?"}
        {showFormula ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
      </button>

      {showFormula && breakdown && (
        <div style={{ 
          marginTop: '16px', 
          padding: '16px', 
          backgroundColor: '#FFFFFF', 
          borderRadius: 'var(--radius-md)', 
          textAlign: 'left',
          fontSize: '0.85rem',
          border: '1px solid var(--border-color)'
        }}>
          <h5 style={{ fontWeight: '700', marginBottom: '8px', color: 'var(--text-main)' }}>Score Factors Breakdown:</h5>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            <div style={{ color: '#059669' }}>💪 Protein Boost: +{breakdown.proteinBoost} pts</div>
            <div style={{ color: '#059669' }}>🌿 Fiber Boost: +{breakdown.fiberBoost} pts</div>
            <div style={{ color: '#059669' }}>🧪 Micronutrients: +{breakdown.microBoost} pts</div>
            <div style={{ color: '#EF4444' }}>🍬 Sugar Penalty: -{breakdown.sugarPenalty} pts</div>
            <div style={{ color: '#EF4444' }}>🧂 Sodium Penalty: -{breakdown.sodiumPenalty} pts</div>
            <div style={{ color: '#EF4444' }}>🥑 Sat Fat Penalty: -{breakdown.saturatedFatPenalty} pts</div>
          </div>
        </div>
      )}
    </div>
  );
}
