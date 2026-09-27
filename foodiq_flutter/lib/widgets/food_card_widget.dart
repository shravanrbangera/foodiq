import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../models/food_model.dart';
import '../providers/auth_provider.dart';
import '../theme/app_theme.dart';

class FoodCardWidget extends StatelessWidget {
  final FoodModel food;
  const FoodCardWidget({super.key, required this.food});

  @override
  Widget build(BuildContext context) {
    final auth = Provider.of<AuthProvider>(context);
    final bool favorited = auth.isFavorite(food);

    return Card(
      clipBehavior: Clip.antiAlias,
      child: InkWell(
        onTap: () => Navigator.pushNamed(context, '/food-detail', arguments: food),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Stack(
              children: [
                Image.network(
                  food.image,
                  height: 160,
                  width: double.infinity,
                  fit: BoxFit.cover,
                  errorBuilder: (_, __, ___) => Container(
                    height: 160,
                    color: AppTheme.primaryLight,
                    child: const Center(child: Icon(Icons.fastfood, size: 40, color: AppTheme.primary)),
                  ),
                ),
                Positioned(
                  top: 10,
                  left: 10,
                  child: Container(
                    padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                    decoration: BoxDecoration(
                      color: food.type == 'Non-Vegetarian' ? const Color(0xFFFCE8E6) : const Color(0xFFE6F4EA),
                      borderRadius: BorderRadius.circular(20),
                    ),
                    child: Text(
                      food.type,
                      style: TextStyle(
                        fontSize: 11,
                        fontWeight: FontWeight.bold,
                        color: food.type == 'Non-Vegetarian' ? const Color(0xFFC5221F) : const Color(0xFF137333),
                      ),
                    ),
                  ),
                ),
                Positioned(
                  top: 8,
                  right: 8,
                  child: IconButton(
                    icon: Icon(
                      favorited ? Icons.favorite : Icons.favorite_border,
                      color: favorited ? Colors.red : Colors.grey[700],
                    ),
                    onPressed: () => auth.toggleFavorite(food),
                  ),
                ),
              ],
            ),
            Padding(
              padding: const EdgeInsets.all(14.0),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    food.name,
                    style: const TextStyle(fontSize: 16, fontWeight: FontWeight.bold, color: AppTheme.textMain),
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                  ),
                  const SizedBox(height: 4),
                  Text(
                    '${food.category} • Per ${food.servingSize.toInt()}${food.servingUnit}',
                    style: const TextStyle(fontSize: 12, color: AppTheme.textMuted),
                  ),
                  const SizedBox(height: 12),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      _statCol('${food.nutrition['protein']}g', 'Protein'),
                      _statCol('${food.nutrition['calories']}', 'Calories'),
                      _statCol('${food.healthScore}', 'Score', Color(int.parse(food.badgeColorHex.replaceAll('#', '0xFF')))),
                    ],
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _statCol(String val, String lbl, [Color color = AppTheme.textMain]) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(val, style: TextStyle(fontSize: 14, fontWeight: FontWeight.bold, color: color)),
        Text(lbl, style: const TextStyle(fontSize: 10, color: AppTheme.textMuted)),
      ],
    );
  }
}
