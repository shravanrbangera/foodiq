import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { QrCode, Search, CheckCircle2, ChevronRight, AlertCircle } from 'lucide-react';
import { fetchBarcodeProduct } from '../services/api';

export default function BarcodeScanner() {
  const [barcodeInput, setBarcodeInput] = useState('890123456701');
  const [product, setProduct] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleScan = (codeToScan) => {
    const code = codeToScan || barcodeInput;
    setError('');
    setProduct(null);

    fetchBarcodeProduct(code).then(res => {
      if (res) {
        setProduct(res);
      } else {
        setError(`No product registered for barcode ${code}`);
      }
    }).catch(err => {
      setError(`Product lookup failed for barcode ${code}`);
    });
  };

  const presetBarcodes = [
    { code: '890123456701', name: 'Chicken Breast' },
    { code: '890123456703', name: 'Paneer' },
    { code: '890123456705', name: 'Apple' },
    { code: '890123456706', name: 'Rolled Oats' }
  ];

  return (
    <div style={{ flex: 1, padding: '40px 0' }}>
      <div className="container" style={{ maxWidth: '640px' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div className="badge badge-green" style={{ marginBottom: '12px' }}>BARCODE SCANNER</div>
          <h1 style={{ fontSize: '2.4rem', fontWeight: '800', marginBottom: '8px' }}>Scan Package Barcode</h1>
          <p style={{ color: 'var(--text-muted)' }}>Scan product UPC/EAN barcode to fetch exact food nutrition</p>
        </div>

        <div style={{
          backgroundColor: 'var(--bg-card)',
          borderRadius: 'var(--radius-xl)',
          padding: '32px',
          border: '1px solid var(--border-color)',
          boxShadow: 'var(--shadow-sm)',
          marginBottom: '32px'
        }}>
          {/* CAMERA VIEWFINDER GRAPHIC */}
          <div style={{
            height: '200px',
            backgroundColor: '#072B21',
            borderRadius: 'var(--radius-lg)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            marginBottom: '24px',
            color: '#FFFFFF'
          }}>
            <QrCode size={64} color="var(--accent)" />
            <p style={{ marginTop: '12px', fontSize: '0.85rem', color: '#B8C7C2' }}>Position Barcode inside Viewfinder Box</p>

            {/* Viewfinder Bounding Corners */}
            <div style={{ position: 'absolute', top: '20px', left: '40px', width: '24px', height: '24px', borderTop: '3px solid var(--accent)', borderLeft: '3px solid var(--accent)' }} />
            <div style={{ position: 'absolute', top: '20px', right: '40px', width: '24px', height: '24px', borderTop: '3px solid var(--accent)', borderRight: '3px solid var(--accent)' }} />
            <div style={{ position: 'absolute', bottom: '20px', left: '40px', width: '24px', height: '24px', borderBottom: '3px solid var(--accent)', borderLeft: '3px solid var(--accent)' }} />
            <div style={{ position: 'absolute', bottom: '20px', right: '40px', width: '24px', height: '24px', borderBottom: '3px solid var(--accent)', borderRight: '3px solid var(--accent)' }} />
          </div>

          <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
            <input 
              type="text" 
              value={barcodeInput}
              onChange={(e) => setBarcodeInput(e.target.value)}
              placeholder="Enter EAN/UPC barcode number"
              style={{ flex: 1, padding: '12px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', outline: 'none', fontSize: '1rem', fontWeight: '600' }}
            />
            <button onClick={() => handleScan()} className="btn btn-primary">
              <Search size={18} /> Lookup Barcode
            </button>
          </div>

          <div>
            <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-muted)', display: 'block', marginBottom: '8px' }}>Test Preset Barcodes:</span>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {presetBarcodes.map(p => (
                <button 
                  key={p.code} 
                  onClick={() => { setBarcodeInput(p.code); handleScan(p.code); }}
                  className="btn btn-outline"
                  style={{ padding: '6px 12px', fontSize: '0.8rem' }}
                >
                  {p.name} ({p.code})
                </button>
              ))}
            </div>
          </div>
        </div>

        {error && (
          <div style={{ backgroundColor: '#FCE8E6', color: '#C5221F', padding: '16px', borderRadius: 'var(--radius-lg)', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <AlertCircle size={20} />
            {error}
          </div>
        )}

        {product && (
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-xl)',
            padding: '32px',
            border: '1px solid var(--border-color)',
            boxShadow: 'var(--shadow-md)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
              <span className="badge badge-green">PRODUCT FOUND ✓</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>UPC: {product.barcode}</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '24px' }}>
              <img src={product.image} alt={product.name} style={{ width: '80px', height: '80px', borderRadius: 'var(--radius-md)', objectFit: 'cover' }} />
              <div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: '800' }}>{product.name}</h3>
                <p style={{ color: 'var(--text-muted)' }}>{product.category} • {product.nutrition?.calories} kcal / 100g</p>
              </div>
            </div>

            <button 
              onClick={() => navigate(`/food/${product._id || product.name}`)}
              className="btn btn-primary" 
              style={{ width: '100%', justifyContent: 'center' }}
            >
              View Nutrition Facts & Health Score
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
