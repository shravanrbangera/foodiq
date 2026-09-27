import 'package:flutter/material.dart';
import '../models/food_model.dart';
import '../services/api_service.dart';
import '../theme/app_theme.dart';
import '../widgets/food_card_widget.dart';
import '../widgets/navbar_widget.dart';

class BarcodeScannerScreen extends StatefulWidget {
  const BarcodeScannerScreen({super.key});

  @override
  State<BarcodeScannerScreen> createState() => _BarcodeScannerScreenState();
}

class _BarcodeScannerScreenState extends State<BarcodeScannerScreen> {
  final TextEditingController _codeCtrl = TextEditingController(text: '890123456701');
  FoodModel? _foundProduct;

  void _lookupCode([String? code]) async {
    final searchCode = code ?? _codeCtrl.text.trim();
    final list = await ApiService.getFoods();
    final match = list.firstWhere(
      (f) => f.barcode == searchCode,
      orElse: () => list[0],
    );
    setState(() => _foundProduct = match);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: const NavbarWidget(),
      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.all(24.0),
          child: Center(
            child: Container(
              constraints: const BoxConstraints(maxWidth: 600),
              child: Column(
                children: [
                  const Text('Package Barcode Scanner', style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold)),
                  const Text('Scan or enter EAN/UPC product code', style: TextStyle(fontSize: 12, color: AppTheme.textMuted)),
                  const SizedBox(height: 24),

                  Card(
                    child: Padding(
                      padding: const EdgeInsets.all(24),
                      child: Column(
                        children: [
                          Container(
                            height: 180,
                            width: double.infinity,
                            decoration: BoxDecoration(
                              color: const Color(0xFF072B21),
                              borderRadius: BorderRadius.circular(16),
                            ),
                            child: const Column(
                              mainAxisAlignment: MainAxisAlignment.center,
                              children: [
                                Icon(Icons.qr_code_scanner, size: 60, color: Color(0xFF20C997)),
                                SizedBox(height: 8),
                                Text('Position Barcode Inside Viewfinder', style: TextStyle(color: Colors.white70, fontSize: 12)),
                              ],
                            ),
                          ),
                          const SizedBox(height: 20),

                          Row(
                            children: [
                              Expanded(
                                child: TextField(
                                  controller: _codeCtrl,
                                  decoration: const InputDecoration(
                                    labelText: 'UPC / EAN Code',
                                    border: OutlineInputBorder(),
                                  ),
                                ),
                              ),
                              const SizedBox(width: 12),
                              ElevatedButton(
                                onPressed: _lookupCode,
                                style: ElevatedButton.styleFrom(
                                  backgroundColor: AppTheme.primary,
                                  foregroundColor: Colors.white,
                                  padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 18),
                                ),
                                child: const Text('Lookup'),
                              ),
                            ],
                          ),
                          const SizedBox(height: 16),
                          const Align(
                            alignment: Alignment.centerLeft,
                            child: Text('Test Barcode Presets:', style: TextStyle(fontSize: 12, fontWeight: FontWeight.bold)),
                          ),
                          const SizedBox(height: 8),
                          Wrap(
                            spacing: 8,
                            children: [
                              ActionChip(label: const Text('Chicken (890123456701)'), onPressed: () => _lookupCode('890123456701')),
                              ActionChip(label: const Text('Paneer (890123456703)'), onPressed: () => _lookupCode('890123456703')),
                              ActionChip(label: const Text('Oats (890123456706)'), onPressed: () => _lookupCode('890123456706')),
                            ],
                          ),
                        ],
                      ),
                    ),
                  ),
                  const SizedBox(height: 24),

                  if (_foundProduct != null) FoodCardWidget(food: _foundProduct!),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}
