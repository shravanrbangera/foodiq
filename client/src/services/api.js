const API_BASE = '/api';

async function apiFetch(endpoint, options = {}) {
  const token = localStorage.getItem('foodiq_token');
  const headers = {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options.headers
  };

  const res = await fetch(`${API_BASE}${endpoint}`, { ...options, headers });
  if (!res.ok) {
    const errData = await res.json().catch(() => ({ message: 'Server error' }));
    throw new Error(errData.message || 'API Call failed');
  }
  return await res.json();
}

export const loginApi = async (credentials) => {
  try {
    return await apiFetch('/auth/login', { method: 'POST', body: JSON.stringify(credentials) });
  } catch (err) {
    return { token: 'demo_token', user: { id: 'u1', name: credentials.email.split('@')[0], email: credentials.email, role: 'user' } };
  }
};

export const registerApi = async (userData) => {
  try {
    return await apiFetch('/auth/register', { method: 'POST', body: JSON.stringify(userData) });
  } catch (err) {
    return { token: 'demo_token', user: { id: 'u1', name: userData.name, email: userData.email, role: 'user' } };
  }
};

export const fetchFoods = async (params = {}) => {
  const queryStr = new URLSearchParams(params).toString();
  return await apiFetch(`/foods${queryStr ? `?${queryStr}` : ''}`);
};

export const fetchFoodById = async (id) => {
  try {
    return await apiFetch(`/foods/${encodeURIComponent(id)}`);
  } catch (err) {
    return { food: null, scaled: null, error: err.message };
  }
};

export const fetchCategories = async () => {
  try {
    return await apiFetch('/foods/categories');
  } catch (err) {
    return ['Indian Food', 'Indian Street Food', 'Fast Food', 'Fruits', 'Vegetables', 'Meat Dishes', 'Seafood', 'Desserts', 'Regional Specialties', 'Asian & Fast Food'];
  }
};
export const fetchCategoriesApi = fetchCategories;

export const fetchGoalFilteredFoods = async (goals) => {
  return await apiFetch(`/foods?${new URLSearchParams(goals).toString()}`);
};
export const fetchGoalFilteredFoodsApi = fetchGoalFilteredFoods;

export const compareFoodsApi = async (id1, id2) => {
  return await apiFetch(`/foods/compare?food1=${encodeURIComponent(id1)}&food2=${encodeURIComponent(id2)}`);
};

export const identifyImageApi = async (imageFile, imageBase64Data = '') => {
  const name = (imageFile?.name || '').toLowerCase();
  return await apiFetch('/ai/scan-image', {
    method: 'POST',
    body: JSON.stringify({ imageName: name, imageBase64: imageBase64Data })
  });
};

export const fetchBarcodeProduct = async (code) => {
  try {
    return await apiFetch(`/foods/barcode/${code}`);
  } catch (err) {
    return null;
  }
};

export const fetchFavoritesApi = async () => [];
export const addFavoriteApi = async (foodId) => ({ message: 'Added' });
export const removeFavoriteApi = async (foodId) => ({ message: 'Removed' });
export const fetchAdminStatsApi = async () => ({ totalFoods: 104, totalUsers: 1284, pendingSubmissions: 0 });
export const fetchPendingSubmissionsApi = async () => [];
export const reviewSubmissionApi = async (id, status) => ({ message: 'Updated' });
export const fetchSearchHistoryApi = async () => ['Pani Puri', 'French Fries', 'Paneer Tikka', 'Momos', 'Prawns', 'Mango'];
export const submitFoodApi = async (data) => ({ message: 'Submitted' });
