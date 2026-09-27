import 'package:flutter/material.dart';
import '../models/food_model.dart';
import '../services/api_service.dart';
import '../theme/app_theme.dart';
import '../widgets/food_card_widget.dart';
import '../widgets/navbar_widget.dart';

class ExploreScreen extends StatefulWidget {
  final String? initialSearch;
  const ExploreScreen({super.key, this.initialSearch});

  @override
  State<ExploreScreen> createState() => _ExploreScreenState();
}

class _ExploreScreenState extends State<ExploreScreen> {
  final TextEditingController _searchCtrl = TextEditingController();
  String _category = 'All';
  String _type = 'All';
  List<FoodModel> _foods = [];
  bool _loading = true;

  @override
  void initState() {
    super.initState();
    if (widget.initialSearch != null) {
      _searchCtrl.text = widget.initialSearch!;
    }
    _load();
  }

  void _load() async {
    setState(() => _loading = true);
    final data = await ApiService.getFoods(
      search: _searchCtrl.text.trim(),
      category: _category,
      type: _type,
    );
    setState(() {
      _foods = data;
      _loading = false;
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
              constraints: const BoxConstraints(maxWidth: 1100),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const Text('Explore Foods', style: TextStyle(fontSize: 26, fontWeight: FontWeight.bold)),
                  const SizedBox(height: 16),
                  Row(
                    children: [
                      Expanded(
                        child: TextField(
                          controller: _searchCtrl,
                          onSubmitted: (_) => _load(),
                          decoration: InputDecoration(
                            hintText: 'Search food name...',
                            prefixIcon: const Icon(Icons.search),
                            border: OutlineInputBorder(borderRadius: BorderRadius.circular(12)),
                          ),
                        ),
                      ),
                      const SizedBox(width: 12),
                      DropdownButton<String>(
                        value: _category,
                        items: ['All', 'Fruits', 'Vegetables', 'Meat', 'Dairy', 'Grains', 'Eggs'].map((c) => DropdownMenuItem(value: c, child: Text(c))).toList(),
                        onChanged: (val) {
                          if (val != null) {
                            setState(() => _category = val);
                            _load();
                          }
                        },
                      ),
                      const SizedBox(width: 12),
                      DropdownButton<String>(
                        value: _type,
                        items: ['All', 'Vegetarian', 'Non-Vegetarian', 'Vegan'].map((t) => DropdownMenuItem(value: t, child: Text(t))).toList(),
                        onChanged: (val) {
                          if (val != null) {
                            setState(() => _type = val);
                            _load();
                          }
                        },
                      ),
                    ],
                  ),
                  const SizedBox(height: 24),
                  _loading
                      ? const Center(child: CircularProgressIndicator())
                      : _foods.isEmpty
                          ? const Center(child: Text('No foods found matching criteria.'))
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
                                  itemCount: _foods.length,
                                  itemBuilder: (context, idx) => FoodCardWidget(food: _foods[idx]),
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
