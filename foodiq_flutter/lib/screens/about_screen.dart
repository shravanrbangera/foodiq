import 'package:flutter/material.dart';
import '../theme/app_theme.dart';
import '../widgets/navbar_widget.dart';

class AboutScreen extends StatelessWidget {
  const AboutScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: const NavbarWidget(),
      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.all(24.0),
          child: Center(
            child: Container(
              constraints: const BoxConstraints(maxWidth: 800),
              child: const Card(
                child: Padding(
                  padding: EdgeInsets.all(32),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text('About FoodIQ', style: TextStyle(fontSize: 28, fontWeight: FontWeight.bold, color: AppTheme.primaryDark)),
                      SizedBox(height: 8),
                      Text('KNOW YOUR FOOD. KNOW YOUR NUTRITION.', style: TextStyle(fontWeight: FontWeight.bold, color: AppTheme.textMuted)),
                      SizedBox(height: 20),
                      Text(
                        'FoodIQ is a nutrition-information platform designed for college students to search, scan, or upload food and immediately understand what nutrients they are getting, how much they are getting, and whether the food is a healthy choice.',
                        style: TextStyle(fontSize: 14, height: 1.6),
                      ),
                      SizedBox(height: 20),
                      Text('Key Platform Capabilities:', style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold)),
                      SizedBox(height: 8),
                      Text('• 10-Second Instant Nutrition Breakdown'),
                      Text('• Interactive Portion Quantity Calculator (100g -> 250g)'),
                      Text('• Calibrated FoodIQ Health Score (0 - 100)'),
                      Text('• AI Vision Photo Recognition & Embedded AI Assistant Bot'),
                      Text('• Side-by-Side Food Comparison Matrix'),
                      Text('• Target Dietary Goal Filtering'),
                    ],
                  ),
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }
}
