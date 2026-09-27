import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Camera, 
  Upload, 
  Sparkles, 
  ChevronRight, 
  RotateCcw, 
  Trash2, 
  AlertTriangle, 
  CheckCircle2, 
  HelpCircle, 
  XCircle, 
  Flame, 
  BarChart2,
  Info
} from 'lucide-react';
import { identifyImageApi } from '../services/api';

export default function ImageScanner() {
  const [imagePreview, setImagePreview] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setError(null);
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Data = reader.result;
        setImagePreview(base64Data);
        processImage(file, base64Data);
      };
      reader.readAsDataURL(file);
    }
  };

  const processImage = (file, base64Data) => {
    setAnalyzing(true);
    setResult(null);
    setError(null);

    identifyImageApi(file, base64Data)
      .then((res) => {
        setResult(res);
        setAnalyzing(false);
      })
      .catch((err) => {
        setError(err.message || 'Failed to analyze image');
        setAnalyzing(false);
      });
  };

  const handleReset = () => {
    setImagePreview(null);
    setSelectedFile(null);
    setResult(null);
    setError(null);
    setAnalyzing(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div style={{ flex: 1, padding: '40px 0', minHeight: 'calc(100vh - 160px)' }}>
      <div className="container" style={{ maxWidth: '780px' }}>
        
        {/* Header with Title & Refresh Action */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div className="badge badge-green" style={{ marginBottom: '8px' }}>AI VISION RECOGNITION ENGINE</div>
            <h1 style={{ fontSize: '2.2rem', fontWeight: '800', margin: 0 }}>Identify Food by Image</h1>
            <p style={{ color: 'var(--text-muted)', margin: '6px 0 0' }}>
              Upload any meal photograph to detect food items and dynamic USDA nutrition
            </p>
          </div>

          <button 
            id="refresh-scanner-btn"
            onClick={handleReset}
            className="btn btn-outline"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 18px', borderRadius: 'var(--radius-lg)' }}
            title="Clear all results and reset upload"
          >
            <RotateCcw size={18} />
            ↻ Refresh
          </button>
        </div>

        {/* Upload & Preview Box */}
        <div style={{
          backgroundColor: 'var(--bg-card)',
          borderRadius: 'var(--radius-xl)',
          padding: '28px',
          border: '2px dashed var(--primary)',
          textAlign: 'center',
          boxShadow: 'var(--shadow-sm)',
          marginBottom: '28px',
          position: 'relative'
        }}>
          {imagePreview ? (
            <div>
              <div style={{
                position: 'relative',
                height: '340px',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                backgroundColor: '#0F172A',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img 
                  src={imagePreview} 
                  alt="Uploaded meal" 
                  style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} 
                />

                {analyzing && (
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: 'rgba(7, 92, 67, 0.9)',
                    color: '#FFFFFF',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '14px',
                    backdropFilter: 'blur(4px)'
                  }}>
                    <Sparkles className="spin" size={44} />
                    <h3 style={{ fontWeight: '700', fontSize: '1.25rem', margin: 0 }}>Analyzing Vision Features with AI...</h3>
                    <p style={{ fontSize: '0.9rem', opacity: 0.9, margin: 0 }}>Running ResNet-50 Classifier & Confidence Calibration</p>
                  </div>
                )}
              </div>

              {/* Action Toolbar on Image */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
                <label className="btn btn-outline" style={{ display: 'inline-flex', cursor: 'pointer', gap: '8px' }}>
                  <Upload size={16} />
                  Change Photo
                  <input 
                    ref={fileInputRef}
                    type="file" 
                    accept="image/*" 
                    onChange={handleImageUpload} 
                    style={{ display: 'none' }} 
                  />
                </label>

                <button 
                  onClick={handleReset} 
                  className="btn btn-outline" 
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#EF4444', borderColor: '#FCA5A5' }}
                >
                  <Trash2 size={16} />
                  Remove Image
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                borderRadius: '50%', 
                backgroundColor: 'var(--primary-light)', 
                color: 'var(--primary-dark)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                margin: '0 auto 18px' 
              }}>
                <Camera size={38} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: '700', marginBottom: '8px' }}>Upload Food Photo</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '22px' }}>
                Supports French Fries, Paneer Tikka, Noodles, Kathi Rolls, Pani Puri, Momos, Fruits, Veggies & Regional Dishes
              </p>

              <label className="btn btn-primary" style={{ display: 'inline-flex', cursor: 'pointer', gap: '10px', padding: '12px 24px' }}>
                <Upload size={18} />
                Choose Food Photo
                <input 
                  ref={fileInputRef}
                  type="file" 
                  accept="image/*" 
                  onChange={handleImageUpload} 
                  style={{ display: 'none' }} 
                />
              </label>
            </div>
          )}
        </div>

        {/* Error Notification */}
        {error && (
          <div style={{
            backgroundColor: '#FEF2F2',
            border: '1px solid #F87171',
            borderRadius: 'var(--radius-lg)',
            padding: '18px 24px',
            marginBottom: '28px',
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            color: '#991B1B'
          }}>
            <AlertTriangle size={24} />
            <div>
              <h4 style={{ margin: 0, fontWeight: '700' }}>Inference Error</h4>
              <p style={{ margin: '4px 0 0', fontSize: '0.95rem' }}>{error}</p>
            </div>
          </div>
        )}

        {/* Dynamic Results Display according to 3-State Backend Response */}
        {result && !analyzing && (
          <div>
            {/* Case 1: NON-FOOD OBJECT */}
            {result.status === 'not_food' && (
              <div style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-xl)',
                padding: '32px',
                border: '1px solid #E2E8F0',
                borderLeft: '6px solid #EF4444',
                boxShadow: 'var(--shadow-md)',
                marginBottom: '24px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#FEE2E2', color: '#DC2626', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <XCircle size={28} />
                  </div>
                  <div>
                    <span className="badge" style={{ backgroundColor: '#FEE2E2', color: '#991B1B', marginBottom: '4px' }}>NON-FOOD REJECTION</span>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: '800', margin: 0 }}>No food detected.</h3>
                  </div>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.6', margin: 0 }}>
                  The uploaded image does not contain an edible food item (e.g. vehicle, electronic device, furniture, person, landscape, or non-food object). Please upload a clear photograph of an edible meal or ingredient.
                </p>
              </div>
            )}

            {/* Case 2: UNKNOWN FOOD / OUT-OF-DISTRIBUTION */}
            {result.status === 'unknown_food' && (
              <div style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-xl)',
                padding: '32px',
                border: '1px solid #E2E8F0',
                borderLeft: '6px solid #6366F1',
                boxShadow: 'var(--shadow-md)',
                marginBottom: '24px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#EEF2FF', color: '#4F46E5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <HelpCircle size={28} />
                  </div>
                  <div>
                    <span className="badge" style={{ backgroundColor: '#EEF2FF', color: '#4338CA', marginBottom: '4px' }}>DISH NOT IN DATABASE</span>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: '800', margin: 0 }}>Food detected, but this dish is not currently in the FoodIQ database.</h3>
                  </div>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.6', margin: 0 }}>
                  Food features were detected in the image, but this specific dish is outside FoodIQ's trained corpus. FoodIQ strictly avoids forcing un-modeled dishes into incorrect classes.
                </p>
              </div>
            )}

            {/* Case 3: UNCERTAIN FOOD (Low Confidence < 60% or Close Margin) */}
            {result.status === 'uncertain' && (
              <div style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-xl)',
                padding: '32px',
                border: '1px solid #E2E8F0',
                borderLeft: '6px solid #F59E0B',
                boxShadow: 'var(--shadow-md)',
                marginBottom: '24px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#FEF3C7', color: '#D97706', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <AlertTriangle size={28} />
                  </div>
                  <div>
                    <span className="badge" style={{ backgroundColor: '#FEF3C7', color: '#92400E', marginBottom: '4px' }}>FOOD DETECTED — IDENTIFICATION UNCERTAIN</span>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: '800', margin: 0 }}>Food detected, but FoodIQ cannot confidently identify the exact food.</h3>
                  </div>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', lineHeight: '1.6', marginBottom: '18px' }}>
                  Statistical confidence is below the verified 60% recognition threshold (confidence: {result.confidence ? `${(result.confidence * 100).toFixed(1)}%` : 'low'}). FoodIQ presents candidate possibilities rather than asserting an uncertain guess as fact.
                </p>

                {result.top_predictions?.length > 0 && (
                  <div>
                    <h4 style={{ fontSize: '0.92rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '10px' }}>Closest Visual Candidates:</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {result.top_predictions.slice(0, 3).map((item, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 14px', backgroundColor: '#F8FAFC', borderRadius: 'var(--radius-md)' }}>
                          <span style={{ fontWeight: '600' }}>{item.food_name}</span>
                          <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{(item.confidence * 100).toFixed(1)}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Case 4: RECOGNIZED FOOD (Confidence >= 60% & Margin >= 0.15) */}
            {result.status === 'recognized' && result.detectedFood && (
              <div style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-xl)',
                padding: '32px',
                border: '1px solid #E2E8F0',
                borderLeft: '6px solid var(--primary)',
                boxShadow: 'var(--shadow-md)',
                marginBottom: '24px'
              }}>
                {/* Header Banner */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '10px' }}>
                  <span className="badge badge-green" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem' }}>
                    <CheckCircle2 size={16} />
                    RECOGNIZED FOOD
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Confidence:</span>
                    <span style={{ fontWeight: '800', color: 'var(--primary)', fontSize: '1.15rem' }}>
                      {result.formattedConfidence || `${(result.confidence * 100).toFixed(1)}%`}
                    </span>
                  </div>
                </div>

                {/* Main Food Summary - Uses Representative Canonical Thumbnail */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '24px', flexWrap: 'wrap' }}>
                  <div style={{ 
                    width: '96px', 
                    height: '96px', 
                    borderRadius: 'var(--radius-lg)', 
                    overflow: 'hidden', 
                    backgroundColor: '#F1F5F9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid #E2E8F0',
                    boxShadow: 'var(--shadow-sm)'
                  }}>
                    {/* Canonical Representative Image from Food Ontology */}
                    <img 
                      src={result.detectedFood.representative_image || result.detectedFood.image} 
                      alt={result.detectedFood.name} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                  </div>
                  <div style={{ flex: 1, minWidth: '220px' }}>
                    <h2 style={{ fontSize: '1.8rem', fontWeight: '800', margin: '0 0 6px' }}>
                      {result.detectedFood.name}
                    </h2>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                      <span className="badge" style={{ backgroundColor: '#F1F5F9', color: '#475569' }}>
                        {result.detectedFood.category}
                      </span>
                      {result.detectedFood.subcategory && (
                        <span className="badge" style={{ backgroundColor: '#F1F5F9', color: '#475569' }}>
                          {result.detectedFood.subcategory}
                        </span>
                      )}
                      <span className="badge" style={{ backgroundColor: result.detectedFood.type === 'Vegetarian' ? '#DCFCE7' : '#FEE2E2', color: result.detectedFood.type === 'Vegetarian' ? '#166534' : '#991B1B' }}>
                        {result.detectedFood.type}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Dynamic Nutrition Macro Grid */}
                {result.detectedFood.nutrition ? (
                  <div style={{
                    backgroundColor: '#F8FAFC',
                    borderRadius: 'var(--radius-lg)',
                    padding: '20px',
                    marginBottom: '24px',
                    border: '1px solid #E2E8F0'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                      <span style={{ fontWeight: '700', fontSize: '0.95rem', color: 'var(--text-main)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                        <Flame size={18} color="#EA580C" />
                        USDA Nutrition Profile (Per {result.detectedFood.servingSize || 100}{result.detectedFood.servingUnit || 'g'})
                      </span>
                      {result.detectedFood.healthScore && (
                        <span style={{ 
                          fontWeight: '800', 
                          color: result.detectedFood.badgeColorHex || 'var(--primary)',
                          backgroundColor: '#FFFFFF',
                          padding: '4px 10px',
                          borderRadius: 'var(--radius-md)',
                          border: '1px solid #E2E8F0',
                          fontSize: '0.85rem'
                        }}>
                          Health Score: {result.detectedFood.healthScore}/100
                        </span>
                      )}
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))', gap: '12px' }}>
                      <div style={{ backgroundColor: '#FFFFFF', padding: '12px', borderRadius: 'var(--radius-md)', textAlign: 'center', border: '1px solid #E2E8F0' }}>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Calories</div>
                        <div style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--text-main)' }}>{result.detectedFood.nutrition.calories} kcal</div>
                      </div>
                      <div style={{ backgroundColor: '#FFFFFF', padding: '12px', borderRadius: 'var(--radius-md)', textAlign: 'center', border: '1px solid #E2E8F0' }}>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Protein</div>
                        <div style={{ fontSize: '1.2rem', fontWeight: '800', color: '#16A34A' }}>{result.detectedFood.nutrition.protein}g</div>
                      </div>
                      <div style={{ backgroundColor: '#FFFFFF', padding: '12px', borderRadius: 'var(--radius-md)', textAlign: 'center', border: '1px solid #E2E8F0' }}>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Carbs</div>
                        <div style={{ fontSize: '1.2rem', fontWeight: '800', color: '#2563EB' }}>{result.detectedFood.nutrition.carbohydrates}g</div>
                      </div>
                      <div style={{ backgroundColor: '#FFFFFF', padding: '12px', borderRadius: 'var(--radius-md)', textAlign: 'center', border: '1px solid #E2E8F0' }}>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Fat</div>
                        <div style={{ fontSize: '1.2rem', fontWeight: '800', color: '#D97706' }}>{result.detectedFood.nutrition.fat}g</div>
                      </div>
                      <div style={{ backgroundColor: '#FFFFFF', padding: '12px', borderRadius: 'var(--radius-md)', textAlign: 'center', border: '1px solid #E2E8F0' }}>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Fiber</div>
                        <div style={{ fontSize: '1.2rem', fontWeight: '800', color: '#9333EA' }}>{result.detectedFood.nutrition.fiber || 0}g</div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div style={{ padding: '16px', backgroundColor: '#F8FAFC', borderRadius: 'var(--radius-lg)', marginBottom: '20px', border: '1px solid #E2E8F0' }}>
                    <p style={{ color: 'var(--text-muted)', margin: 0, fontSize: '0.95rem' }}>
                      ℹ️ Nutrition data unavailable for this exact food.
                    </p>
                  </div>
                )}

                {/* Top-5 Predictions Ranking */}
                {result.top_predictions?.length > 1 && (
                  <div style={{ marginBottom: '24px' }}>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <BarChart2 size={16} />
                      Top AI Vision Predictions
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {result.top_predictions.slice(0, 4).map((p, idx) => (
                        <div key={idx}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '4px' }}>
                            <span style={{ fontWeight: idx === 0 ? '700' : '500' }}>{p.food_name}</span>
                            <span style={{ color: 'var(--text-muted)' }}>{(p.confidence * 100).toFixed(1)}%</span>
                          </div>
                          <div style={{ height: '6px', backgroundColor: '#E2E8F0', borderRadius: '3px', overflow: 'hidden' }}>
                            <div style={{
                              height: '100%',
                              width: `${Math.max(4, p.confidence * 100)}%`,
                              backgroundColor: idx === 0 ? 'var(--primary)' : '#94A3B8',
                              borderRadius: '3px'
                            }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Navigation to Full Details Math */}
                <button 
                  id="view-nutrition-math-btn"
                  onClick={() => navigate(`/food/${encodeURIComponent(result.food_id || result.detectedFood?.food_id || result.detectedFood?._id || 'pani_puri')}`, { state: { detectedFood: result.detectedFood } })}
                  className="btn btn-primary" 
                  style={{ width: '100%', justifyContent: 'center', padding: '14px', fontSize: '1rem' }}
                >
                  View Detailed Nutrition Math & Health Breakdown
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
