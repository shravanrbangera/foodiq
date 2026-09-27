import 'package:flutter/material.dart';
import '../theme/app_theme.dart';
import '../widgets/navbar_widget.dart';

class CategoriesScreen extends StatelessWidget {
  const CategoriesScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final categories = [
      {'name': 'Fruits', 'icon': '🍎', 'count': '12 foods'},
      {'name': 'Vegetables', 'icon': '🥦', 'count': '18 foods'},
      {'name': 'Meat', 'icon': '🍗', 'count': '10 foods'},
      {'name': 'Dairy', 'icon': '🥛', 'count': '14 foods'},
      {'name': 'Grains', 'icon': '🌾', 'count': '15 foods'},
      {'name': 'Legumes', 'icon': '🫘', 'count': '11 foods'},
      {'name': 'Eggs', 'icon': '🥚', 'count': '6 foods'},
      {'name': 'Nuts & Seeds', 'icon': '🥜', 'count': '9 foods'},
    ];

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
                  const Text('Food Categories', style: TextStyle(fontSize: 26, fontWeight: FontWeight.bold)),
                  const Text('Browse complete nutritional catalog by category', style: TextStyle(fontSize: 13, color: AppTheme.textMuted)),
                  const SizedBox(height: 24),

                  LayoutBuilder(
                    builder: (context, constraints) {
                      int count = constraints.maxWidth > 800 ? 4 : (constraints.maxWidth > 500 ? 3 : 2);
                      return GridView.builder(
                        shrinkWrap: true,
                        physics: const NeverScrollableScrollPhysics(),
                        gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                          crossAxisCount: count,
                          crossAxisSpacing: 16,
                          mainAxisSpacing: 16,
                          childAspectRatio: 1.2,
                        ),
                        itemCount: categories.length,
                        itemBuilder: (context, idx) {
                          final cat = categories[idx];
                          return Card(
                            child: InkWell(
                              onTap: () => Navigator.pushNamed(context, '/explore'),
                              child: Column(
                                mainAxisAlignment: MainAxisAlignment.center,
                                children: [
                                  Text(cat['icon']!, style: const TextStyle(fontSize: 32)),
                                  const SizedBox(height: 8),
                                  Text(cat['name']!, style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 16)),
                                  Text(cat['count']!, style: const TextStyle(fontSize: 11, color: AppTheme.textMuted)),
                                ],
                              ),
                            ),
                          );
                        },
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
