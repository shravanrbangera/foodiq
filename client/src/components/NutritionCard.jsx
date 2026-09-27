import React from 'react';
import { Flame, Activity, Wheat, Droplets, Leaf } from 'lucide-react';

export default function NutritionCard({ nutrition = {}, dv = {} }) {
  const macros = [
    { label: "Calories", val: nutrition.calories, unit: "kcal", icon: <Flame color="#EF4444" size={20} />, dvVal: dv.calories, color: "#EF4444" },
    { label: "Protein", val: nutrition.protein, unit: "g", icon: <Activity color="#059669" size={20} />, dvVal: dv.protein, color: "#059669" },
    { label: "Carbohydrates", val: nutrition.carbohydrates, unit: "g", icon: <Wheat color="#F59E0B" size={20} />, dvVal: dv.carbohydrates, color: "#F59E0B" },
    { label: "Total Fat", val: nutrition.fat, unit: "g", icon: <Droplets color="#3B82F6" size={20} />, dvVal: dv.fat, color: "#3B82F6" },
    { label: "Dietary Fiber", val: nutrition.fiber, unit: "g", icon: <Leaf color="#10B981" size={20} />, dvVal: dv.fiber, color: "#10B981" }
  ];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
      {macros.map((m, idx) => (
        <div key={idx} style={{
          backgroundColor: 'var(--bg-card)',
          padding: '20px',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border-color)',
          boxShadow: 'var(--shadow-sm)',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
            <span style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-muted)' }}>{m.label}</span>
            {m.icon}
          </div>

          <div style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--text-main)', marginBottom: '8px' }}>
            {m.val} <span style={{ fontSize: '1rem', fontWeight: '600', color: 'var(--text-muted)' }}>{m.unit}</span>
          </div>

          {m.dvVal !== undefined && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '4px' }}>
                <span>Daily Value</span>
                <span style={{ fontWeight: '700' }}>{m.dvVal}% DV</span>
              </div>
              <div style={{ height: '6px', backgroundColor: 'var(--bg-subtle)', borderRadius: 'var(--radius-full)', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${Math.min(100, m.dvVal)}%`, backgroundColor: m.color, transition: 'width 0.4s ease' }} />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
