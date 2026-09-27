import 'package:flutter/material.dart';
import '../models/food_model.dart';
import '../services/api_service.dart';
import '../theme/app_theme.dart';
import '../widgets/food_card_widget.dart';
import '../widgets/navbar_widget.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  final TextEditingController _searchCtrl = TextEditingController();
  List<FoodModel> _featured = [];
  bool _loading = true;

  @override
  void initState() {
    super.initState();
    _loadFeatured();
  }

  void _loadFeatured() async {
    final list = await ApiService.getFoods();
    setState(() {
      _featured = list;
      _loading = false;
    });
  }

  void _onSearchSubmitted() {
    if (_searchCtrl.text.trim().isNotEmpty) {
      Navigator.pushNamed(context, '/explore', arguments: _searchCtrl.text.trim());
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: const NavbarWidget(),
      body: SingleChildScrollView(
        child: Column(
          children: [
            // HERO SECTION
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 48),
              color: Colors.white,
              child: Center(
                child: Container(
                  constraints: const BoxConstraints(maxWidth: 1100),
                  child: Column(
                    children: [
                      Container(
                        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 6),
                        decoration: BoxDecoration(
                          color: AppTheme.primaryLight,
                          borderRadius: BorderRadius.circular(20),
                        ),
                        child: const Row(
                          mainAxisSize: MainAxisSize.min,
                          children: [
                            Icon(Icons.auto_awesome, size: 16, color: AppTheme.primaryDark),
                            SizedBox(width: 6),
                            Text(
                              'STUDENT NUTRITION INTELLIGENCE & AI BOT',
                              style: TextStyle(fontSize: 12, fontWeight: FontWeight.bold, color: AppTheme.primaryDark),
                            ),
                          ],
                        ),
                      ),
                      const SizedBox(height: 16),
                      const Text(
                        'KNOW YOUR FOOD.\nKNOW YOUR NUTRITION.',
                        textAlign: TextAlign.center,
                        style: TextStyle(fontSize: 36, fontWeight: FontWeight.w900, height: 1.15, color: AppTheme.textMain),
                      ),
                      const SizedBox(height: 12),
                      const Text(
                        'Search, scan food photo with AI Bot, or scan package barcode within 10 seconds.',
                        textAlign: TextAlign.center,
                        style: TextStyle(fontSize: 15, color: AppTheme.textMuted),
                      ),
                      const SizedBox(height: 32),

                      // SEARCH BAR & QUICK BUTTONS
                      Container(
                        constraints: const BoxConstraints(maxWidth: 600),
                        padding: const EdgeInsets.all(6),
                        decoration: BoxDecoration(
                          color: AppTheme.bgMain,
                          borderRadius: BorderRadius.circular(16),
                          border: Border.all(color: AppTheme.borderColor),
                        ),
                        child: Row(
                          children: [
                            const SizedBox(width: 12),
                            const Icon(Icons.search, color: AppTheme.primary),
                            const SizedBox(width: 8),
                            Expanded(
                              child: TextField(
                                controller: _searchCtrl,
                                onSubmitted: (_) => _onSearchSubmitted(),
                                decoration: const InputDecoration(
                                  hintText: 'Search chicken, apple, rice, paneer...',
                                  border: InputBorder.none,
                                ),
                              ),
                            ),
                            ElevatedButton(
                              onPressed: _onSearchSubmitted,
                              style: ElevatedButton.styleFrom(
                                backgroundColor: AppTheme.primary,
                                foregroundColor: Colors.white,
                                padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 14),
                              ),
                              child: const Text('Search'),
                            ),
                          ],
                        ),
                      ),
                      const SizedBox(height: 16),

                      Wrap(
                        spacing: 12,
                        runSpacing: 12,
                        alignment: WrapAlignment.center,
                        children: [
                          ElevatedButton.icon(
                            onPressed: () => Navigator.pushNamed(context, '/ai-scan'),
                            icon: const Icon(Icons.camera_alt, size: 18),
                            label: const Text('📷 AI Vision Bot Scan'),
                            style: ElevatedButton.styleFrom(backgroundColor: AppTheme.primaryLight, foregroundColor: AppTheme.primaryDark),
                          ),
                          ElevatedButton.icon(
                            onPressed: () => Navigator.pushNamed(context, '/barcode'),
                            icon: const Icon(Icons.qr_code_scanner, size: 18),
                            label: const Text('▣ Scan Barcode'),
                            style: ElevatedButton.styleFrom(backgroundColor: AppTheme.primaryLight, foregroundColor: AppTheme.primaryDark),
                          ),
                          ElevatedButton.icon(
                            onPressed: () => Navigator.pushNamed(context, '/compare'),
                            icon: const Icon(Icons.compare_arrows, size: 18),
                            label: const Text('Compare Foods'),
                            style: ElevatedButton.styleFrom(backgroundColor: AppTheme.primaryLight, foregroundColor: AppTheme.primaryDark),
                          ),
                        ],
                      ),
                    ],
                  ),
                ),
              ),
            ),

            // FEATURED FOODS GRID
            Container(
              padding: const EdgeInsets.all(24),
              child: Container(
                constraints: const BoxConstraints(maxWidth: 1100),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        const Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text('Staple Foods Catalog', style: TextStyle(fontSize: 22, fontWeight: FontWeight.bold, color: AppTheme.textMain)),
                            Text('Explore student meals & nutritional facts', style: TextStyle(fontSize: 13, color: AppTheme.textMuted)),
                          ],
                        ),
                        TextButton(
                          onPressed: () => Navigator.pushNamed(context, '/explore'),
                          child: const Row(
                            children: [
                              Text('View All'),
                              Icon(Icons.arrow_forward, size: 16),
                            ],
                          ),
                        ),
                      ],
                    ),
                    const SizedBox(height: 16),
                    _loading
                        ? const Center(child: CircularProgressIndicator())
                        : LayoutBuilder(
                            builder: (context, constraints) {
                              int count = constraints.maxWidth > 800 ? 3 : (constraints.maxWidth > 500 ? 2 : 1);
                              return GridView.builder(
                                shrinkWrap: true,
                                physics: const NeverScrollableScrollPhysics(),
                                gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                                  crossAxisCount: count,
                                  crossAxisSpacing: 16,
                                  mainAxisSpacing: 16,
                                  childAspectRatio: 0.8,
                                ),
                                itemCount: _featured.take(6).length,
                                itemBuilder: (context, idx) => FoodCardWidget(food: _featured[idx]),
                              );
                            },
                          ),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
