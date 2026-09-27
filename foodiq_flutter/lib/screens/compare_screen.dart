import 'package:flutter/material.dart';
import '../models/food_model.dart';
import '../services/api_service.dart';
import '../theme/app_theme.dart';
import '../widgets/navbar_widget.dart';

class CompareScreen extends StatefulWidget {
  const CompareScreen({super.key});

  @override
  State<CompareScreen> createState() => _CompareScreenState();
}

class _CompareScreenState extends State<CompareScreen> {
  List<FoodModel> _allFoods = [];
  FoodModel? _food1;
  FoodModel? _food2;

  @override
  void initState() {
    super.initState();
    _load();
  }

  void _load() async {
    final list = await ApiService.getFoods();
    setState(() {
      _allFoods = list;
      if (list.length >= 2) {
        _food1 = list[0];
        _food2 = list[2 < list.length ? 2 : 1];
      }
    });
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
              constraints: const BoxConstraints(maxWidth: 900),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const Text('Side-by-Side Food Comparison', style: TextStyle(fontSize: 26, fontWeight: FontWeight.bold)),
                  const Text('Compare two food items to see protein density, calories, and health scores', style: TextStyle(fontSize: 13, color: AppTheme.textMuted)),
                  const SizedBox(height: 24),

                  if (_allFoods.length >= 2) ...[
                    Row(
                      children: [
                        Expanded(
                          child: DropdownButtonFormField<FoodModel>(
                            value: _food1,
                            decoration: const InputDecoration(labelText: 'Food A', border: OutlineInputBorder()),
                            items: _allFoods.map((f) => DropdownMenuItem(value: f, child: Text(f.name))).toList(),
                            onChanged: (val) => setState(() => _food1 = val),
                          ),
                        ),
                        const Padding(
                          padding: EdgeInsets.symmetric(horizontal: 12),
                          child: Icon(Icons.compare_arrows, size: 28, color: AppTheme.primary),
                        ),
                        Expanded(
                          child: DropdownButtonFormField<FoodModel>(
                            value: _food2,
                            decoration: const InputDecoration(labelText: 'Food B', border: OutlineInputBorder()),
                            items: _allFoods.map((f) => DropdownMenuItem(value: f, child: Text(f.name))).toList(),
                            onChanged: (val) => setState(() => _food2 = val),
                          ),
                        ),
                      ],
                    ),
                    const SizedBox(height: 32),

                    if (_food1 != null && _food2 != null) ...[
                      Card(
                        child: Padding(
                          padding: const EdgeInsets.all(20),
                          child: Table(
                            border: TableBorder.all(color: AppTheme.borderColor),
                            children: [
                              TableRow(
                                decoration: const BoxDecoration(color: AppTheme.bgMain),
                                children: [
                                  const Padding(padding: EdgeInsets.all(12), child: Text('Nutrient (100g)', style: TextStyle(fontWeight: FontWeight.bold))),
                                  Padding(padding: const EdgeInsets.all(12), child: Text(_food1!.name, textAlign: TextAlign.center, style: const TextStyle(fontWeight: FontWeight.bold))),
                                  Padding(padding: const EdgeInsets.all(12), child: Text(_food2!.name, textAlign: TextAlign.center, style: const TextStyle(fontWeight: FontWeight.bold))),
                                ],
                              ),
                              _row('FoodIQ Health Score', '${_food1!.healthScore}/100', '${_food2!.healthScore}/100', _food1!.healthScore >= _food2!.healthScore),
                              _row('Calories', '${_food1!.nutrition['calories']} kcal', '${_food2!.nutrition['calories']} kcal', _food1!.nutrition['calories'] <= _food2!.nutrition['calories']),
                              _row('Protein', '${_food1!.nutrition['protein']} g', '${_food2!.nutrition['protein']} g', _food1!.nutrition['protein'] >= _food2!.nutrition['protein']),
                              _row('Carbs', '${_food1!.nutrition['carbohydrates']} g', '${_food2!.nutrition['carbohydrates']} g', false),
                              _row('Total Fat', '${_food1!.nutrition['fat']} g', '${_food2!.nutrition['fat']} g', false),
                              _row('Dietary Fiber', '${_food1!.nutrition['fiber']} g', '${_food2!.nutrition['fiber']} g', _food1!.nutrition['fiber'] >= _food2!.nutrition['fiber']),
                            ],
                          ),
                        ),
                      ),
                    ],
                  ],
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }

  TableRow _row(String label, String val1, String val2, bool isF1Winner) {
    return TableRow(
      children: [
        Padding(padding: const EdgeInsets.all(12), child: Text(label, style: const TextStyle(fontSize: 13))),
        Container(
          color: isF1Winner ? AppTheme.primaryLight : Colors.transparent,
          padding: const EdgeInsets.all(12),
          child: Text(val1, textAlign: TextAlign.center, style: TextStyle(fontWeight: isF1Winner ? FontWeight.bold : FontWeight.normal, color: isF1Winner ? AppTheme.primaryDark : AppTheme.textMain)),
        ),
        Container(
          color: (!isF1Winner && val1 != val2) ? AppTheme.primaryLight : Colors.transparent,
          padding: const EdgeInsets.all(12),
          child: Text(val2, textAlign: TextAlign.center, style: TextStyle(fontWeight: (!isF1Winner && val1 != val2) ? FontWeight.bold : FontWeight.normal, color: (!isF1Winner && val1 != val2) ? AppTheme.primaryDark : AppTheme.textMain)),
        ),
      ],
    );
  }
}
