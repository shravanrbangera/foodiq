import 'dart:math';

class FoodModel {
  final String id;
  final String name;
  final String category;
  final String type; // Vegetarian, Non-Vegetarian, Vegan
  final String image;
  final double servingSize;
  final String servingUnit;
  final Map<String, dynamic> nutrition;
  final Map<String, dynamic> vitamins;
  final Map<String, dynamic> minerals;
  final List<String> goodFor;
  final String barcode;
  final String description;

  int healthScore;
  String rating;
  String badgeColorHex;

  FoodModel({
    required this.id,
    required this.name,
    required this.category,
    required this.type,
    required this.image,
    required this.servingSize,
    required this.servingUnit,
    required this.nutrition,
    required this.vitamins,
    required this.minerals,
    required this.goodFor,
    required this.barcode,
    required this.description,
    this.healthScore = 80,
    this.rating = 'VERY GOOD',
    this.badgeColorHex = '#10B981',
  }) {
    _calculateHealthScore();
  }

  void _calculateHealthScore() {
    double score = 50.0;
    double protein = (nutrition['protein'] ?? 0.0).toDouble();
    double fiber = (nutrition['fiber'] ?? 0.0).toDouble();
    double sugar = (nutrition['sugar'] ?? 0.0).toDouble();
    double sodium = (nutrition['sodium'] ?? 0.0).toDouble();
    double fat = (nutrition['fat'] ?? 0.0).toDouble();
    double saturatedFat = fat * 0.3;

    // Boosters
    score += min(30.0, protein * 1.5);
    score += min(25.0, fiber * 4.0);

    int microCount = vitamins.length + minerals.length;
    score += min(20.0, microCount * 2.0);

    // Penalties
    if (sugar > 5) score -= (sugar - 5) * 1.5;
    if (sodium > 300) score -= ((sodium - 300) / 100) * 1.0;
    if (saturatedFat > 3) score -= (saturatedFat - 3) * 2.0;

    healthScore = score.clamp(0.0, 100.0).round();

    if (healthScore >= 90) {
      rating = 'EXCELLENT';
      badgeColorHex = '#059669';
    } else if (healthScore >= 75) {
      rating = 'VERY GOOD';
      badgeColorHex = '#10B981';
    } else if (healthScore >= 60) {
      rating = 'GOOD';
      badgeColorHex = '#84CC16';
    } else if (healthScore >= 40) {
      rating = 'FAIR';
      badgeColorHex = '#F59E0B';
    } else {
      rating = 'POOR';
      badgeColorHex = '#EF4444';
    }
  }

  FoodModel scalePortion(double userQuantity) {
    double multiplier = userQuantity / servingSize;

    double roundVal(dynamic val, [int decimals = 1]) {
      if (val == null) return 0.0;
      double n = (val as num).toDouble() * multiplier;
      double fac = pow(10, decimals).toDouble();
      return (n * fac).round() / fac;
    }

    Map<String, dynamic> scaledNutrition = {
      'calories': roundVal(nutrition['calories'], 0),
      'protein': roundVal(nutrition['protein'], 1),
      'carbohydrates': roundVal(nutrition['carbohydrates'], 1),
      'fat': roundVal(nutrition['fat'], 1),
      'fiber': roundVal(nutrition['fiber'], 1),
      'sugar': roundVal(nutrition['sugar'], 1),
      'sodium': roundVal(nutrition['sodium'], 0),
      'cholesterol': roundVal(nutrition['cholesterol'], 0),
    };

    Map<String, dynamic> scaledVitamins = {};
    vitamins.forEach((k, v) => scaledVitamins[k] = roundVal(v, 1));

    Map<String, dynamic> scaledMinerals = {};
    minerals.forEach((k, v) => scaledMinerals[k] = roundVal(v, 1));

    return FoodModel(
      id: id,
      name: name,
      category: category,
      type: type,
      image: image,
      servingSize: userQuantity,
      servingUnit: servingUnit,
      nutrition: scaledNutrition,
      vitamins: scaledVitamins,
      minerals: scaledMinerals,
      goodFor: goodFor,
      barcode: barcode,
      description: description,
    );
  }

  factory FoodModel.fromJson(Map<String, dynamic> json) {
    return FoodModel(
      id: json['_id'] ?? json['id'] ?? '',
      name: json['name'] ?? 'Unknown Food',
      category: json['category'] ?? 'General',
      type: json['type'] ?? 'Vegetarian',
      image: json['image'] ?? 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80',
      servingSize: (json['servingSize'] ?? 100).toDouble(),
      servingUnit: json['servingUnit'] ?? 'g',
      nutrition: Map<String, dynamic>.from(json['nutrition'] ?? {}),
      vitamins: Map<String, dynamic>.from(json['vitamins'] ?? {}),
      minerals: Map<String, dynamic>.from(json['minerals'] ?? {}),
      goodFor: List<String>.from(json['goodFor'] ?? []),
      barcode: json['barcode'] ?? '',
      description: json['description'] ?? '',
    );
  }
}
