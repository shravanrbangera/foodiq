import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Camera, QrCode } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function SearchBar({ placeholder = "Search for chicken, apple, rice, paneer...", initialQuery = "" }) {
  const [query, setQuery] = useState(initialQuery);
  const navigate = useNavigate();
  const { addRecentSearch } = useAuth();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      addRecentSearch(query.trim());
      navigate(`/explore?search=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <div style={{ width: '100%' }}>
      <form onSubmit={handleSearch} className="hero-search-box">
        <Search size={22} color="var(--primary)" style={{ marginLeft: '4px' }} />
        <input 
          type="text" 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
        />
        <button type="submit" className="btn btn-primary" style={{ padding: '10px 22px' }}>
          Search
        </button>
      </form>

      <div className="hero-quick-buttons">
        <button onClick={() => navigate('/scan/image')} className="btn btn-secondary" style={{ fontSize: '0.9rem' }}>
          <Camera size={18} />
          Upload Food Image
        </button>
        <button onClick={() => navigate('/scan/barcode')} className="btn btn-secondary" style={{ fontSize: '0.9rem' }}>
          <QrCode size={18} />
          Scan Barcode
        </button>
      </div>
    </div>
  );
}
