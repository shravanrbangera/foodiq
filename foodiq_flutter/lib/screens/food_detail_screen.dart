import 'package:flutter/material.dart';
import '../models/food_model.dart';
import '../theme/app_theme.dart';
import '../widgets/health_score_widget.dart';
import '../widgets/navbar_widget.dart';
import '../widgets/nutrition_card_widget.dart';
import '../widgets/quantity_selector_widget.dart';

class FoodDetailScreen extends StatefulWidget {
  final FoodModel food;
  const FoodDetailScreen({super.key, required this.food});

  @override
  State<FoodDetailScreen> createState() => _FoodDetailScreenState();
}

class _FoodDetailScreenState extends State<FoodDetailScreen> {
  late double _quantity;

  @override
  void initState() {
    super.initState();
    _quantity = widget.food.servingSize;
  }

  @override
  Widget build(BuildContext context) {
    final FoodModel scaled = widget.food.scalePortion(_quantity);

    return Scaffold(
      appBar: const NavbarWidget(),
      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.all(24.0),
          child: Center(
            child: Container(
              constraints: const BoxConstraints(maxWidth: 1000),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  IconButton(
                    icon: const Row(
                      mainAxisSize: MainAxisSize.min,
                      children: [Icon(Icons.arrow_back), SizedBox(width: 4), Text('Back')],
                    ),
                    onPressed: () => Navigator.pop(context),
                  ),
                  const SizedBox(height: 12),

                  // HERO FOOD BANNER
                  Card(
                    child: Padding(
                      padding: const EdgeInsets.all(20.0),
                      child: Row(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          ClipRRect(
                            borderRadius: BorderRadius.circular(12),
                            child: Image.network(
                              scaled.image,
                              width: 160,
                              height: 160,
                              fit: BoxFit.cover,
                              errorBuilder: (_, __, ___) => Container(width: 160, height: 160, color: AppTheme.primaryLight),
                            ),
                          ),
                          const SizedBox(width: 20),
                          Expanded(
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Row(
                                  children: [
                                    Chip(
                                      label: Text(scaled.category),
                                      backgroundColor: AppTheme.primaryLight,
                                      labelStyle: const TextStyle(color: AppTheme.primaryDark, fontWeight: FontWeight.bold, fontSize: 11),
                                    ),
                                    const SizedBox(width: 8),
                                    Chip(
                                      label: Text(scaled.type),
                                      backgroundColor: scaled.type == 'Non-Vegetarian' ? const Color(0xFFFCE8E6) : const Color(0xFFE6F4EA),
                                      labelStyle: TextStyle(color: scaled.type == 'Non-Vegetarian' ? const Color(0xFFC5221F) : const Color(0xFF137333), fontWeight: FontWeight.bold, fontSize: 11),
                                    ),
                                  ],
                                ),
                                const SizedBox(height: 8),
                                Text(scaled.name, style: const TextStyle(fontSize: 24, fontWeight: FontWeight.bold)),
                                const SizedBox(height: 4),
                                Text(scaled.description, style: const TextStyle(fontSize: 13, color: AppTheme.textMuted)),
                                const SizedBox(height: 12),
                                Wrap(
                                  spacing: 6,
                                  children: scaled.goodFor.map((g) => Chip(avatar: const Icon(Icons.check_circle, size: 14, color: AppTheme.primary), label: Text(g, style: const TextStyle(fontSize: 10)))).toList(),
                                ),
                              ],
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                  const SizedBox(height: 24),

                  // DYNAMIC PORTION SELECTOR
                  QuantitySelectorWidget(
                    quantity: _quantity,
                    onChanged: (val) => setState(() => _quantity = val),
                    unit: scaled.servingUnit,
                  ),
                  const SizedBox(height: 24),

                  // NUTRITION & HEALTH SCORE
                  LayoutBuilder(
                    builder: (context, constraints) {
                      bool isWide = constraints.maxWidth > 700;
                      return isWide
                          ? Row(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Expanded(flex: 3, child: NutritionCardWidget(nutrition: scaled.nutrition)),
                                const SizedBox(width: 16),
                                Expanded(flex: 2, child: HealthScoreWidget(score: scaled.healthScore, rating: scaled.rating, badgeColorHex: scaled.badgeColorHex)),
                              ],
                            )
                          : Column(
                              children: [
                                NutritionCardWidget(nutrition: scaled.nutrition),
                                const SizedBox(height: 16),
                                HealthScoreWidget(score: scaled.healthScore, rating: scaled.rating, badgeColorHex: scaled.badgeColorHex),
                              ],
                            );
                    },
                  ),
                  const SizedBox(height: 24),

                  // WHAT DOES THIS MEAN? EDUCATIONAL CARD
                  Card(
                    child: Padding(
                      padding: const EdgeInsets.all(20.0),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          const Row(
                            children: [
                              Icon(Icons.help_outline, color: AppTheme.primaryDark),
                              SizedBox(width: 8),
                              Text('What Does This Mean for You?', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold, color: AppTheme.primaryDark)),
                            ],
                          ),
                          const SizedBox(height: 12),
                          _infoRow('💪 Protein (${scaled.nutrition['protein']}g)', scaled.nutrition['protein'] > 15 ? 'High protein amount for this serving size! Contributes to muscle growth and repair.' : 'Provides protein contributing to daily tissue maintenance.'),
                          const SizedBox(height: 8),
                          _infoRow('🌿 Fiber (${scaled.nutrition['fiber']}g)', scaled.nutrition['fiber'] >= 3 ? 'Excellent fiber content supporting digestion and steady blood sugar.' : 'Contains dietary fiber supporting normal digestion.'),
                          const SizedBox(height: 8),
                          _infoRow('🔥 Calories (${scaled.nutrition['calories']} kcal)', 'Provides ${scaled.nutrition['calories']} kcal for this portion.'),
                        ],
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }

  Widget _infoRow(String title, String desc) {
    return Container(
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(color: AppTheme.bgMain, borderRadius: BorderRadius.circular(10)),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(title, style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 14)),
          const SizedBox(height: 2),
          Text(desc, style: const TextStyle(fontSize: 12, color: AppTheme.textMuted)),
        ],
      ),
    );
  }
}
