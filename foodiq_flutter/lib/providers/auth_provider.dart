import 'package:flutter/material.dart';
import '../models/food_model.dart';

class AuthProvider extends ChangeNotifier {
  Map<String, dynamic>? _user;
  final List<FoodModel> _favorites = [];
  final List<String> _recentSearches = ['Chicken Breast', 'Paneer', 'Apple', 'Oats'];

  Map<String, dynamic>? get user => _user;
  bool get isLoggedIn => _user != null;
  bool get isAdmin => _user?['role'] == 'admin';
  List<FoodModel> get favorites => List.unmodifiable(_favorites);
  List<String> get recentSearches => List.unmodifiable(_recentSearches);

  void login(String email, String password, [String role = 'user']) {
    _user = {
      'id': 'user_123',
      'name': email.split('@').first,
      'email': email,
      'role': role,
    };
    notifyListeners();
  }

  void logout() {
    _user = null;
    notifyListeners();
  }

  void toggleFavorite(FoodModel food) {
    int idx = _favorites.indexWhere((f) => f.id == food.id || f.name == food.name);
    if (idx >= 0) {
      _favorites.removeAt(idx);
    } else {
      _favorites.add(food);
    }
    notifyListeners();
  }

  bool isFavorite(FoodModel food) {
    return _favorites.any((f) => f.id == food.id || f.name == food.name);
  }

  void addRecentSearch(String query) {
    if (query.trim().isEmpty) return;
    _recentSearches.removeWhere((item) => item.toLowerCase() == query.trim().toLowerCase());
    _recentSearches.insert(0, query.trim());
    if (_recentSearches.length > 8) _recentSearches.removeLast();
    notifyListeners();
  }
}
