import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../providers/auth_provider.dart';
import '../theme/app_theme.dart';

class NavbarWidget extends StatelessWidget implements PreferredSizeWidget {
  const NavbarWidget({super.key});

  @override
  Size get preferredSize => const Size.fromHeight(70);

  @override
  Widget build(BuildContext context) {
    final auth = Provider.of<AuthProvider>(context);

    return Container(
      color: Colors.white,
      padding: const EdgeInsets.symmetric(horizontal: 20.0, vertical: 10.0),
      child: SafeArea(
        child: Row(
          children: [
            GestureDetector(
              onTap: () => Navigator.pushNamed(context, '/'),
              child: const Row(
                children: [
                  Text('🥗 ', style: TextStyle(fontSize: 24)),
                  Text(
                    'FOODIQ',
                    style: TextStyle(
                      fontSize: 22,
                      fontWeight: FontWeight.w800,
                      color: AppTheme.primaryDark,
                      letterSpacing: -0.5,
                    ),
                  ),
                ],
              ),
            ),
            const Spacer(),
            if (MediaQuery.of(context).size.width > 700) ...[
              _navLink(context, 'Home', '/'),
              _navLink(context, 'Explore', '/explore'),
              _navLink(context, 'AI Bot Scan', '/ai-scan'),
              _navLink(context, 'Compare', '/compare'),
              _navLink(context, 'Goal Filter', '/filter'),
              _navLink(context, 'Categories', '/categories'),
              const SizedBox(width: 16),
            ],
            if (auth.isLoggedIn) ...[
              ElevatedButton.icon(
                onPressed: () => Navigator.pushNamed(context, auth.isAdmin ? '/admin' : '/dashboard'),
                icon: const Icon(Icons.person, size: 18),
                label: Text(auth.isAdmin ? 'Admin' : 'Dashboard'),
                style: ElevatedButton.styleFrom(
                  backgroundColor: AppTheme.primaryLight,
                  foregroundColor: AppTheme.primaryDark,
                  elevation: 0,
                ),
              ),
              const SizedBox(width: 8),
              IconButton(
                icon: const Icon(Icons.logout, color: AppTheme.textMuted),
                onPressed: () => auth.logout(),
              ),
            ] else ...[
              ElevatedButton(
                onPressed: () => Navigator.pushNamed(context, '/select-role'),
                style: ElevatedButton.styleFrom(
                  backgroundColor: AppTheme.primary,
                  foregroundColor: Colors.white,
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
                ),
                child: const Text('Login / Auth'),
              ),
            ],
          ],
        ),
      ),
    );
  }

  Widget _navLink(BuildContext context, String title, String route) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 12.0),
      child: InkWell(
        onTap: () => Navigator.pushNamed(context, route),
        child: Text(
          title,
          style: const TextStyle(
            fontSize: 14,
            fontWeight: FontWeight.w600,
            color: AppTheme.textMain,
          ),
        ),
      ),
    );
  }
}
