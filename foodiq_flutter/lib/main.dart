import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'models/food_model.dart';
import 'providers/auth_provider.dart';
import 'screens/about_screen.dart';
import 'screens/ai_scan_screen.dart';
import 'screens/admin_dashboard_screen.dart';
import 'screens/barcode_scanner_screen.dart';
import 'screens/categories_screen.dart';
import 'screens/compare_screen.dart';
import 'screens/explore_screen.dart';
import 'screens/food_detail_screen.dart';
import 'screens/goal_filter_screen.dart';
import 'screens/home_screen.dart';
import 'screens/login_screen.dart';
import 'screens/select_role_screen.dart';
import 'screens/user_dashboard_screen.dart';
import 'theme/app_theme.dart';

void main() {
  runApp(
    ChangeNotifierProvider(
      create: (_) => AuthProvider(),
      child: const FoodIQApp(),
    ),
  );
}

class FoodIQApp extends StatelessWidget {
  const FoodIQApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'FoodIQ — Student Nutrition Intelligence & AI Bot',
      debugShowCheckedModeBanner: false,
      theme: AppTheme.lightTheme,
      initialRoute: '/',
      onGenerateRoute: (settings) {
        if (settings.name == '/food-detail') {
          final food = settings.arguments as FoodModel;
          return MaterialPageRoute(builder: (_) => FoodDetailScreen(food: food));
        }
        if (settings.name == '/explore') {
          final String? search = settings.arguments as String?;
          return MaterialPageRoute(builder: (_) => ExploreScreen(initialSearch: search));
        }
        if (settings.name == '/login') {
          final String role = (settings.arguments as String?) ?? 'user';
          return MaterialPageRoute(builder: (_) => LoginScreen(role: role));
        }
        return null;
      },
      routes: {
        '/': (_) => const HomeScreen(),
        '/ai-scan': (_) => const AiScanScreen(),
        '/compare': (_) => const CompareScreen(),
        '/filter': (_) => const GoalFilterScreen(),
        '/categories': (_) => const CategoriesScreen(),
        '/barcode': (_) => const BarcodeScannerScreen(),
        '/about': (_) => const AboutScreen(),
        '/select-role': (_) => const SelectRoleScreen(),
        '/dashboard': (_) => const UserDashboardScreen(),
        '/admin': (_) => const AdminDashboardScreen(),
      },
    );
  }
}
