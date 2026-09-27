import React, { useState, useEffect } from 'react';
import { fetchFoods, compareFoodsApi } from '../services/api';
import { Sparkles, ArrowRightLeft, Award, CheckCircle2 } from 'lucide-react';

export default function Compare() {
  const [allFoods, setAllFoods] = useState([]);
  const [food1Id, setFood1Id] = useState('');
  const [food2Id, setFood2Id] = useState('');
  const [comparisonData, setComparisonData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchFoods().then(data => {
      setAllFoods(data);
      if (data.length >= 2) {
        setFood1Id(data[0]._id || data[0].name);
        setFood2Id(data[2]?._id || data[2]?.name || data[1]._id || data[1].name);
      }
    });
  }, []);

  useEffect(() => {
    if (food1Id && food2Id) {
      setLoading(true);
      compareFoodsApi(food1Id, food2Id).then(res => {
        setComparisonData(res);
        setLoading(false);
      });
    }
  }, [food1Id, food2Id]);

  const f1 = comparisonData?.food1;
  const f2 = comparisonData?.food2;

  return (
    <div style={{ flex: 1, padding: '40px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="badge badge-green" style={{ marginBottom: '12px' }}>COMPARISON ENGINE</div>
          <h1 style={{ fontSize: '2.4rem', fontWeight: '800', marginBottom: '12px' }}>Compare Food Items Side-by-Side</h1>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
            Understand the exact nutritional differences between your favorite foods to make healthier decisions.
          </p>
        </div>

        {/* FOOD SELECTORS */}
        <div style={{
          backgroundColor: 'var(--bg-card)',
          borderRadius: 'var(--radius-xl)',
          padding: '32px',
          border: '1px solid var(--border-color)',
          boxShadow: 'var(--shadow-sm)',
          display: 'grid',
          gridTemplateColumns: '1fr 60px 1fr',
          gap: '24px',
          alignItems: 'center',
          marginBottom: '40px'
        }}>
          <div>
            <label style={{ display: 'block', fontWeight: '700', marginBottom: '8px', color: 'var(--text-main)' }}>Select First Food (Food A)</label>
            <select 
              value={food1Id} 
              onChange={(e) => setFood1Id(e.target.value)}
              style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-md)', border: '2px solid var(--border-color)', outline: 'none', fontSize: '1rem', fontWeight: '600' }}
            >
              {allFoods.map(item => (
                <option key={item._id || item.name} value={item._id || item.name}>{item.name} ({item.category})</option>
              ))}
            </select>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--primary-light)', color: 'var(--primary-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ArrowRightLeft size={22} />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontWeight: '700', marginBottom: '8px', color: 'var(--text-main)' }}>Select Second Food (Food B)</label>
            <select 
              value={food2Id} 
              onChange={(e) => setFood2Id(e.target.value)}
              style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-md)', border: '2px solid var(--border-color)', outline: 'none', fontSize: '1rem', fontWeight: '600' }}
            >
              {allFoods.map(item => (
                <option key={item._id || item.name} value={item._id || item.name}>{item.name} ({item.category})</option>
              ))}
            </select>
          </div>
        </div>

        {/* COMPARISON RESULTS */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '60px 0' }}>Calculating side-by-side comparison...</div>
        ) : f1 && f2 ? (
          <div>
            {/* INSIGHT BADGES */}
            {comparisonData.insights && comparisonData.insights.length > 0 && (
              <div style={{
                backgroundColor: 'var(--primary-light)',
                borderRadius: 'var(--radius-lg)',
                padding: '24px',
                marginBottom: '32px',
                border: '1px solid var(--primary-hover)'
              }}>
                <h3 style={{ color: 'var(--primary-dark)', fontWeight: '800', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Award size={22} /> FoodIQ Smart Comparison Insights
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
                  {comparisonData.insights.map((ins, idx) => (
                    <div key={idx} style={{ backgroundColor: '#FFFFFF', padding: '12px 16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                      <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-muted)', display: 'block' }}>{ins.metric}</span>
                      <strong style={{ color: 'var(--primary)', fontSize: '1.05rem' }}>{ins.winner}</strong>
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginTop: '2px' }}>({ins.difference})</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* MATRIX COMPARISON TABLE */}
            <div style={{ backgroundColor: '#FFFFFF', borderRadius: 'var(--radius-xl)', padding: '32px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)' }}>
              <table className="compare-matrix-table">
                <thead>
                  <tr>
                    <th style={{ width: '30%' }}>Nutrient (per 100g)</th>
                    <th style={{ width: '35%', textAlign: 'center', fontSize: '1.1rem' }}>
                      <img src={f1.image} alt={f1.name} style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', display: 'block', margin: '0 auto 8px' }} />
                      {f1.name}
                    </th>
                    <th style={{ width: '35%', textAlign: 'center', fontSize: '1.1rem' }}>
                      <img src={f2.image} alt={f2.name} style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', display: 'block', margin: '0 auto 8px' }} />
                      {f2.name}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>FoodIQ Health Score</strong></td>
                    <td className={f1.healthScore >= f2.healthScore ? 'winner-cell' : ''} style={{ textAlign: 'center' }}>
                      <strong>{f1.healthScore} / 100</strong> ({f1.rating})
                    </td>
                    <td className={f2.healthScore >= f1.healthScore ? 'winner-cell' : ''} style={{ textAlign: 'center' }}>
                      <strong>{f2.healthScore} / 100</strong> ({f2.rating})
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Calories</strong></td>
                    <td className={f1.nutrition.calories <= f2.nutrition.calories ? 'winner-cell' : ''} style={{ textAlign: 'center' }}>
                      {f1.nutrition.calories} kcal
                    </td>
                    <td className={f2.nutrition.calories <= f1.nutrition.calories ? 'winner-cell' : ''} style={{ textAlign: 'center' }}>
                      {f2.nutrition.calories} kcal
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Protein</strong></td>
                    <td className={f1.nutrition.protein >= f2.nutrition.protein ? 'winner-cell' : ''} style={{ textAlign: 'center' }}>
                      {f1.nutrition.protein} g
                    </td>
                    <td className={f2.nutrition.protein >= f1.nutrition.protein ? 'winner-cell' : ''} style={{ textAlign: 'center' }}>
                      {f2.nutrition.protein} g
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Carbohydrates</strong></td>
                    <td style={{ textAlign: 'center' }}>{f1.nutrition.carbohydrates} g</td>
                    <td style={{ textAlign: 'center' }}>{f2.nutrition.carbohydrates} g</td>
                  </tr>
                  <tr>
                    <td><strong>Total Fat</strong></td>
                    <td style={{ textAlign: 'center' }}>{f1.nutrition.fat} g</td>
                    <td style={{ textAlign: 'center' }}>{f2.nutrition.fat} g</td>
                  </tr>
                  <tr>
                    <td><strong>Dietary Fiber</strong></td>
                    <td className={f1.nutrition.fiber >= f2.nutrition.fiber ? 'winner-cell' : ''} style={{ textAlign: 'center' }}>
                      {f1.nutrition.fiber} g
                    </td>
                    <td className={f2.nutrition.fiber >= f1.nutrition.fiber ? 'winner-cell' : ''} style={{ textAlign: 'center' }}>
                      {f2.nutrition.fiber} g
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Category & Type</strong></td>
                    <td style={{ textAlign: 'center' }}>{f1.category} ({f1.type})</td>
                    <td style={{ textAlign: 'center' }}>{f2.category} ({f2.type})</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
