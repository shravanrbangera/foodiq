import 'package:flutter/material.dart';
import '../theme/app_theme.dart';
import '../widgets/navbar_widget.dart';

class AdminDashboardScreen extends StatelessWidget {
  const AdminDashboardScreen({super.key});

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
                  Container(
                    width: double.infinity,
                    padding: const EdgeInsets.all(24),
                    decoration: BoxDecoration(
                      color: const Color(0xFF072B21),
                      borderRadius: BorderRadius.circular(20),
                    ),
                    child: const Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text('ADMIN CONTROL CENTER', style: TextStyle(color: Color(0xFFFEF3C7), fontWeight: FontWeight.bold, fontSize: 12)),
                        SizedBox(height: 6),
                        Text('FoodIQ Admin Panel', style: TextStyle(color: Colors.white, fontSize: 24, fontWeight: FontWeight.bold)),
                        SizedBox(height: 4),
                        Text('Manage catalog, edit nutrition facts & review user food submissions', style: TextStyle(color: Colors.white70, fontSize: 13)),
                      ],
                    ),
                  ),
                  const SizedBox(height: 24),

                  const Row(
                    children: [
                      Expanded(child: _MetricCard(title: 'TOTAL FOODS', val: '20', icon: Icons.fastfood)),
                      SizedBox(width: 12),
                      Expanded(child: _MetricCard(title: 'ACTIVE USERS', val: '1,284', icon: Icons.people)),
                      SizedBox(width: 12),
                      Expanded(child: _MetricCard(title: 'SUBMISSIONS', val: '3', icon: Icons.pending_actions)),
                    ],
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

class _MetricCard extends StatelessWidget {
  final String title;
  final String val;
  final IconData icon;
  const _MetricCard({required this.title, required this.val, required this.icon});

  @override
  Widget build(BuildContext context) {
    return Card(
      child: Padding(
        padding: const EdgeInsets.all(20),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Text(title, style: const TextStyle(fontSize: 11, fontWeight: FontWeight.bold, color: AppTheme.textMuted)),
                Icon(icon, color: AppTheme.primary, size: 20),
              ],
            ),
            const SizedBox(height: 8),
            Text(val, style: const TextStyle(fontSize: 26, fontWeight: FontWeight.bold, color: AppTheme.textMain)),
          ],
        ),
      ),
    );
  }
}
