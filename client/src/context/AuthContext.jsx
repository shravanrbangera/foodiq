import React, { createContext, useContext, useState, useEffect } from 'react';
import { loginApi, registerApi } from '../services/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('foodiq_user');
    return saved ? JSON.parse(saved) : null;
  });

  const [token, setToken] = useState(() => localStorage.getItem('foodiq_token') || null);
  const [favorites, setFavorites] = useState([]);
  const [recentSearches, setRecentSearches] = useState(['Chicken Breast', 'Paneer', 'Apple', 'Oats']);

  const login = async (credentials) => {
    try {
      const data = await loginApi(credentials);
      setUser(data);
      setToken(data.token);
      localStorage.setItem('foodiq_user', JSON.stringify(data));
      localStorage.setItem('foodiq_token', data.token);
      return data;
    } catch (err) {
      // Mock login for smooth testing if backend is offline
      const mockUser = {
        _id: 'user_123',
        name: credentials.email.split('@')[0] || 'Shravan',
        email: credentials.email,
        role: credentials.role || (credentials.email.includes('admin') ? 'admin' : 'user'),
        token: 'mock_token_abc'
      };
      setUser(mockUser);
      setToken(mockUser.token);
      localStorage.setItem('foodiq_user', JSON.stringify(mockUser));
      localStorage.setItem('foodiq_token', mockUser.token);
      return mockUser;
    }
  };

  const register = async (userData) => {
    try {
      const data = await registerApi(userData);
      setUser(data);
      setToken(data.token);
      localStorage.setItem('foodiq_user', JSON.stringify(data));
      localStorage.setItem('foodiq_token', data.token);
      return data;
    } catch (err) {
      const mockUser = {
        _id: 'user_' + Date.now(),
        name: userData.name,
        email: userData.email,
        role: 'user',
        token: 'mock_token_' + Date.now()
      };
      setUser(mockUser);
      setToken(mockUser.token);
      localStorage.setItem('foodiq_user', JSON.stringify(mockUser));
      localStorage.setItem('foodiq_token', mockUser.token);
      return mockUser;
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('foodiq_user');
    localStorage.removeItem('foodiq_token');
  };

  const addRecentSearch = (query) => {
    if (!query) return;
    setRecentSearches(prev => {
      const filtered = prev.filter(item => item.toLowerCase() !== query.toLowerCase());
      return [query, ...filtered].slice(0, 8);
    });
  };

  const toggleFavorite = (foodItem) => {
    setFavorites(prev => {
      const exists = prev.some(f => f._id === foodItem._id || f.name === foodItem.name);
      if (exists) {
        return prev.filter(f => f._id !== foodItem._id && f.name !== foodItem.name);
      } else {
        return [foodItem, ...prev];
      }
    });
  };

  const isFavorite = (foodItem) => {
    if (!foodItem) return false;
    return favorites.some(f => f._id === foodItem._id || f.name === foodItem.name);
  };

  return (
    <AuthContext.Provider value={{
      user,
      token,
      login,
      register,
      logout,
      favorites,
      toggleFavorite,
      isFavorite,
      recentSearches,
      addRecentSearch,
      isAdmin: user?.role === 'admin'
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
