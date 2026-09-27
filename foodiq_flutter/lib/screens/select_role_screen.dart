import 'package:flutter/material.dart';
import '../theme/app_theme.dart';
import '../widgets/navbar_widget.dart';

class SelectRoleScreen extends StatelessWidget {
  const SelectRoleScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: const NavbarWidget(),
      body: Center(
        child: Container(
          constraints: const BoxConstraints(maxWidth: 700),
          padding: const EdgeInsets.all(24),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              const Text('Welcome to FoodIQ', style: TextStyle(fontSize: 28, fontWeight: FontWeight.bold)),
              const Text('Select portal to continue', style: TextStyle(fontSize: 14, color: AppTheme.textMuted)),
              const SizedBox(height: 32),

              Row(
                children: [
                  Expanded(
                    child: Card(
                      child: Padding(
                        padding: const EdgeInsets.all(24),
                        child: Column(
                          children: [
                            const CircleAvatar(
                              radius: 30,
                              backgroundColor: AppTheme.primaryLight,
                              child: Icon(Icons.person, size: 32, color: AppTheme.primaryDark),
                            ),
                            const SizedBox(height: 16),
                            const Text('User Portal', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
                            const SizedBox(height: 8),
                            const Text('Search, compare, save favorites & submit foods', textAlign: TextAlign.center, style: TextStyle(fontSize: 12, color: AppTheme.textMuted)),
                            const SizedBox(height: 20),
                            ElevatedButton(
                              onPressed: () => Navigator.pushNamed(context, '/login', arguments: 'user'),
                              style: ElevatedButton.styleFrom(backgroundColor: AppTheme.primary, foregroundColor: Colors.white),
                              child: const Text('User Login'),
                            ),
                          ],
                        ),
                      ),
                    ),
                  ),
                  const SizedBox(width: 20),
                  Expanded(
                    child: Card(
                      child: Padding(
                        padding: const EdgeInsets.all(24),
                        child: Column(
                          children: [
                            const CircleAvatar(
                              radius: 30,
                              backgroundColor: Color(0xFFFEF3C7),
                              child: Icon(Icons.shield, size: 32, color: Color(0xFFD97706)),
                            ),
                            const SizedBox(height: 16),
                            const Text('Admin Panel', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
                            const SizedBox(height: 8),
                            const Text('Manage food CRUD, approve submissions & view metrics', textAlign: TextAlign.center, style: TextStyle(fontSize: 12, color: AppTheme.textMuted)),
                            const SizedBox(height: 20),
                            OutlinedButton(
                              onPressed: () => Navigator.pushNamed(context, '/login', arguments: 'admin'),
                              child: const Text('Admin Login'),
                            ),
                          ],
                        ),
                      ),
                    ),
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}
