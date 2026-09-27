import 'package:flutter/material.dart';
import '../models/food_model.dart';
import '../services/api_service.dart';
import '../theme/app_theme.dart';
import '../widgets/food_card_widget.dart';
import '../widgets/navbar_widget.dart';

class GoalFilterScreen extends StatefulWidget {
  const GoalFilterScreen({super.key});

  @override
  State<GoalFilterScreen> createState() => _GoalFilterScreenState();
}

class _GoalFilterScreenState extends State<GoalFilterScreen> {
  bool _highProtein = true;
  bool _highFiber = false;
  bool _lowCalorie = false;
  String _diet = 'All';

  List<FoodModel> _allFoods = [];

  @override
  void initState() {
    super.initState();
    _load();
  }

  void _load() async {
    final list = await ApiService.getFoods();
    setState(() => _allFoods = list);
  }

  List<FoodModel> get _filtered {
    return _allFoods.where((f) {
      if (_diet != 'All' && f.type != _diet) return false;
      if (_highProtein && (f.nutrition['protein'] ?? 0) < 10) return false;
      if (_highFiber && (f.nutrition['fiber'] ?? 0) < 3) return false;
      if (_lowCalorie && (f.nutrition['calories'] ?? 0) > 180) return false;
      return true;
    }).toList();
  }

  @override
  Widget build(BuildContext context) {
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
                  const Text('"What Should I Eat?"', style: TextStyle(fontSize: 26, fontWeight: FontWeight.bold)),
                  const Text('Filter foods according to your target dietary goals', style: TextStyle(fontSize: 13, color: AppTheme.textMuted)),
                  const SizedBox(height: 20),

                  Card(
                    child: Padding(
                      padding: const EdgeInsets.all(20),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          const Text('Nutritional Target Preferences', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16)),
                          const SizedBox(height: 12),
                          Wrap(
                            spacing: 12,
                            runSpacing: 8,
                            children: [
                              FilterChip(
                                label: const Text('💪 High Protein (≥10g)'),
                                selected: _highProtein,
                                onSelected: (val) => setState(() => _highProtein = val),
                              ),
                              FilterChip(
                                label: const Text('🌿 High Fiber (≥3g)'),
                                selected: _highFiber,
                                onSelected: (val) => setState(() => _highFiber = val),
                              ),
                              FilterChip(
                                label: const Text('🔥 Low Calorie (≤180 kcal)'),
                                selected: _lowCalorie,
                                onSelected: (val) => setState(() => _lowCalorie = val),
                              ),
                            ],
                          ),
                          const SizedBox(height: 16),
                          Row(
                            children: [
                              const Text('Diet Type: ', style: TextStyle(fontWeight: FontWeight.bold)),
                              const SizedBox(width: 8),
                              DropdownButton<String>(
                                value: _diet,
                                items: ['All', 'Vegetarian', 'Non-Vegetarian', 'Vegan'].map((d) => DropdownMenuItem(value: d, child: Text(d))).toList(),
                                onChanged: (val) {
                                  if (val != null) setState(() => _diet = val);
                                },
                              ),
                            ],
                          ),
                        ],
                      ),
                    ),
                  ),
                  const SizedBox(height: 24),

                  Text('Matching Foods (${_filtered.length})', style: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
                  const SizedBox(height: 16),

                  _filtered.isEmpty
                      ? const Padding(padding: EdgeInsets.all(40), child: Center(child: Text('No foods match selected filters.')))
                      : LayoutBuilder(
                          builder: (context, constraints) {
                            int count = constraints.maxWidth > 800 ? 3 : (constraints.maxWidth > 500 ? 2 : 1);
                            return GridView.builder(
                              shrinkWrap: true,
                              physics: const NeverScrollableScrollPhysics(),
                              gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                                crossAxisCount: count,
                                crossAxisSpacing: 16,
                                mainAxisSpacing: 16,
                                childAspectRatio: 0.8,
                              ),
                              itemCount: _filtered.length,
                              itemBuilder: (context, idx) => FoodCardWidget(food: _filtered[idx]),
                            );
                          },
                        ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}
