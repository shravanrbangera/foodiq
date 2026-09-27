import 'package:flutter/material.dart';
import '../theme/app_theme.dart';

class NutritionCardWidget extends StatelessWidget {
  final Map<String, dynamic> nutrition;
  const NutritionCardWidget({super.key, required this.nutrition});

  @override
  Widget build(BuildContext context) {
    final List<Map<String, dynamic>> items = [
      {'label': 'Calories', 'val': '${nutrition['calories']}', 'unit': 'kcal', 'color': Colors.red, 'icon': Icons.local_fire_department},
      {'label': 'Protein', 'val': '${nutrition['protein']}', 'unit': 'g', 'color': Colors.green, 'icon': Icons.fitness_center},
      {'label': 'Carbs', 'val': '${nutrition['carbohydrates']}', 'unit': 'g', 'color': Colors.orange, 'icon': Icons.grain},
      {'label': 'Total Fat', 'val': '${nutrition['fat']}', 'unit': 'g', 'color': Colors.blue, 'icon': Icons.water_drop},
      {'label': 'Fiber', 'val': '${nutrition['fiber']}', 'unit': 'g', 'color': Colors.teal, 'icon': Icons.eco},
    ];

    return LayoutBuilder(
      builder: (context, constraints) {
        int crossCount = constraints.maxWidth > 600 ? 5 : 2;
        return GridView.builder(
          shrinkWrap: true,
          physics: const NeverScrollableScrollPhysics(),
          gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
            crossAxisCount: crossCount,
            crossAxisSpacing: 12,
            mainAxisSpacing: 12,
            childAspectRatio: 1.5,
          ),
          itemCount: items.length,
          itemBuilder: (context, idx) {
            final item = items[idx];
            return Container(
              padding: const EdgeInsets.all(12),
              decoration: BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.circular(12),
                border: Border.all(color: AppTheme.borderColor),
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Text(item['label'], style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w600, color: AppTheme.textMuted)),
                      Icon(item['icon'], size: 18, color: item['color']),
                    ],
                  ),
                  const SizedBox(height: 6),
                  RichText(
                    text: TextSpan(
                      text: item['val'],
                      style: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold, color: AppTheme.textMain),
                      children: [
                        TextSpan(
                          text: ' ${item['unit']}',
                          style: const TextStyle(fontSize: 11, fontWeight: FontWeight.normal, color: AppTheme.textMuted),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            );
          },
        );
      },
    );
  }
}
