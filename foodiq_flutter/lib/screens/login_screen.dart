import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../providers/auth_provider.dart';
import '../theme/app_theme.dart';
import '../widgets/navbar_widget.dart';

class LoginScreen extends StatefulWidget {
  final String role;
  const LoginScreen({super.key, this.role = 'user'});

  @override
  State<LoginScreen> createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  final TextEditingController _emailCtrl = TextEditingController(text: 'student@college.edu');
  final TextEditingController _passCtrl = TextEditingController(text: 'password123');

  void _handleLogin() {
    final auth = Provider.of<AuthProvider>(context, listen: false);
    final email = _emailCtrl.text.trim();
    final pass = _passCtrl.text.trim();

    if (email.isNotEmpty && pass.isNotEmpty) {
      auth.login(email, pass, widget.role);
      Navigator.pushReplacementNamed(context, widget.role == 'admin' ? '/admin' : '/dashboard');
    }
  }

  @override
  Widget build(BuildContext context) {
    bool isAdmin = widget.role == 'admin';

    return Scaffold(
      appBar: const NavbarWidget(),
      body: Center(
        child: Container(
          constraints: const BoxConstraints(maxWidth: 420),
          padding: const EdgeInsets.all(24),
          child: Card(
            child: Padding(
              padding: const EdgeInsets.all(28),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  CircleAvatar(
                    radius: 28,
                    backgroundColor: isAdmin ? const Color(0xFFFEF3C7) : AppTheme.primaryLight,
                    child: Icon(isAdmin ? Icons.shield : Icons.person, color: isAdmin ? const Color(0xFFD97706) : AppTheme.primaryDark),
                  ),
                  const SizedBox(height: 12),
                  Text(isAdmin ? 'Admin Login' : 'User Login', style: const TextStyle(fontSize: 22, fontWeight: FontWeight.bold)),
                  const SizedBox(height: 4),
                  const Text('Enter credentials to continue', style: TextStyle(fontSize: 12, color: AppTheme.textMuted)),
                  const SizedBox(height: 24),

                  TextField(
                    controller: _emailCtrl,
                    decoration: const InputDecoration(labelText: 'Email Address', border: OutlineInputBorder()),
                  ),
                  const SizedBox(height: 16),
                  TextField(
                    controller: _passCtrl,
                    obscureText: true,
                    decoration: const InputDecoration(labelText: 'Password', border: OutlineInputBorder()),
                  ),
                  const SizedBox(height: 24),

                  SizedBox(
                    width: double.infinity,
                    child: ElevatedButton(
                      onPressed: _handleLogin,
                      style: ElevatedButton.styleFrom(backgroundColor: AppTheme.primary, foregroundColor: Colors.white, padding: const EdgeInsets.symmetric(vertical: 14)),
                      child: const Text('Login'),
                    ),
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
