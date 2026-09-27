import 'package:flutter/material.dart';
import '../theme/app_theme.dart';

class HealthScoreWidget extends StatelessWidget {
  final int score;
  final String rating;
  final String badgeColorHex;

  const HealthScoreWidget({
    super.key,
    required this.score,
    required this.rating,
    required this.badgeColorHex,
  });

  @override
  Widget build(BuildContext context) {
    final Color badgeColor = Color(int.parse(badgeColorHex.replaceAll('#', '0xFF')));

    return Container(
      padding: const EdgeInsets.all(24),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: AppTheme.borderColor),
      ),
      child: Column(
        children: [
          const Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Icon(Icons.verified, color: AppTheme.primaryDark),
              SizedBox(width: 8),
              Text(
                'FoodIQ Health Score',
                style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold, color: AppTheme.primaryDark),
              ),
            ],
          ),
          const SizedBox(height: 16),
          Container(
            width: 110,
            height: 110,
            decoration: BoxDecoration(
              color: badgeColor,
              shape: BoxShape.circle,
              boxShadow: [
                BoxShadow(
                  color: badgeColor.withOpacity(0.3),
                  blurRadius: 12,
                  offset: const Offset(0, 6),
                )
              ],
            ),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Text(
                  '$score',
                  style: const TextStyle(fontSize: 34, fontWeight: FontWeight.w900, color: Colors.white),
                ),
                const Text(
                  '/ 100',
                  style: TextStyle(fontSize: 11, color: Colors.white70),
                ),
              ],
            ),
          ),
          const SizedBox(height: 12),
          Text(
            rating,
            style: TextStyle(fontSize: 18, fontWeight: FontWeight.w800, color: badgeColor),
          ),
          const SizedBox(height: 6),
          const Text(
            'Calibrated algorithm evaluating protein & fiber boosters against sugar, sodium, and fat limiters.',
            textAlign: TextAlign.center,
            style: TextStyle(fontSize: 11, color: AppTheme.textMuted),
          ),
        ],
      ),
    );
  }
}
