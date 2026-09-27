import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';
import '../models/chat_message.dart';
import '../models/food_model.dart';
import '../services/api_service.dart';
import '../theme/app_theme.dart';
import '../widgets/health_score_widget.dart';
import '../widgets/navbar_widget.dart';
import '../widgets/nutrition_card_widget.dart';

class AiScanScreen extends StatefulWidget {
  const AiScanScreen({super.key});

  @override
  State<AiScanScreen> createState() => _AiScanScreenState();
}

class _AiScanScreenState extends State<AiScanScreen> {
  final ImagePicker _picker = ImagePicker();
  final TextEditingController _chatCtrl = TextEditingController();

  XFile? _selectedImage;
  bool _scanning = false;
  Map<String, dynamic>? _scanResult;
  FoodModel? _detectedFood;

  final List<ChatMessage> _messages = [
    ChatMessage(
      text: '🤖 Hello! I am the FoodIQ AI Vision & Chatbot Bot. Upload or take a photo of your meal plate, and I will scan the plate, categorize every food item, and calculate the total plate nutrition!',
      isUser: false,
      timestamp: DateTime.now(),
    )
  ];

  void _pickAndScanImage(ImageSource source) async {
    final XFile? image = await _picker.pickImage(source: source);
    if (image != null) {
      setState(() {
        _selectedImage = image;
        _scanning = true;
        _scanResult = null;
        _detectedFood = null;
      });

      final bytes = await image.readAsBytes();
      final base64Img = 'data:image/jpeg;base64,${base64Encode(bytes)}';

      final res = await ApiService.scanImageAi(base64Img, image.name);

      setState(() {
        _scanResult = res;
        _scanning = false;
        if (res['detectedFood'] != null) {
          _detectedFood = FoodModel.fromJson(res['detectedFood']);
          _messages.add(ChatMessage(
            text: '🤖 AI Plate Scan Complete! Scanned "${res['plateTitle'] ?? _detectedFood!.name}" with ${res['confidence']} confidence. Total Plate Protein: ${res['totals']?['protein'] ?? _detectedFood!.nutrition['protein']}g.',
            isUser: false,
            timestamp: DateTime.now(),
          ));
        }
      });
    }
  }

  void _sendMessage() async {
    final text = _chatCtrl.text.trim();
    if (text.isEmpty) return;

    _chatCtrl.clear();
    setState(() {
      _messages.add(ChatMessage(text: text, isUser: true, timestamp: DateTime.now()));
    });

    final reply = await ApiService.chatWithAi(text, _detectedFood);

    setState(() {
      _messages.add(ChatMessage(text: reply, isUser: false, timestamp: DateTime.now()));
    });
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
              constraints: const BoxConstraints(maxWidth: 1000),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const Text('AI Meal Plate Vision Scanner & Chatbot', style: TextStyle(fontSize: 26, fontWeight: FontWeight.bold, color: AppTheme.primaryDark)),
                  const Text('Upload a photo of your meal plate for multi-item scanning, categorization & nutrition math', style: TextStyle(fontSize: 13, color: AppTheme.textMuted)),
                  const SizedBox(height: 24),

                  LayoutBuilder(
                    builder: (context, constraints) {
                      bool isDesktop = constraints.maxWidth > 750;
                      return isDesktop
                          ? Row(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Expanded(child: _buildScannerPane()),
                                const SizedBox(width: 24),
                                Expanded(child: _buildChatbotPane()),
                              ],
                            )
                          : Column(
                              children: [
                                _buildScannerPane(),
                                const SizedBox(height: 24),
                                _buildChatbotPane(),
                              ],
                            );
                    },
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }

  Widget _buildScannerPane() {
    return Card(
      child: Padding(
        padding: const EdgeInsets.all(20.0),
        child: Column(
          children: [
            Container(
              height: 220,
              width: double.infinity,
              decoration: BoxDecoration(
                color: AppTheme.primaryLight,
                borderRadius: BorderRadius.circular(16),
                border: Border.all(color: AppTheme.primary, style: BorderStyle.solid, width: 2),
              ),
              child: _scanning
                  ? const Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        CircularProgressIndicator(),
                        SizedBox(height: 12),
                        Text('AI Bot Scanning Meal Plate & Food Items...', style: TextStyle(fontWeight: FontWeight.bold, color: AppTheme.primaryDark)),
                      ],
                    )
                  : _selectedImage != null
                      ? ClipRRect(
                          borderRadius: BorderRadius.circular(14),
                          child: const Center(child: Icon(Icons.restaurant, size: 60, color: AppTheme.primaryDark)),
                        )
                      : Column(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            const Icon(Icons.center_focus_strong, size: 48, color: AppTheme.primary),
                            const SizedBox(height: 8),
                            const Text('Upload Meal Plate Photo', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16)),
                            const SizedBox(height: 4),
                            Text('Scans & categorizes every food item on plate', style: TextStyle(fontSize: 11, color: Colors.grey[600])),
                          ],
                        ),
            ),
            const SizedBox(height: 16),
            Row(
              children: [
                Expanded(
                  child: ElevatedButton.icon(
                    onPressed: () => _pickAndScanImage(ImageSource.gallery),
                    icon: const Icon(Icons.photo_library),
                    label: const Text('Choose Plate Photo'),
                    style: ElevatedButton.styleFrom(backgroundColor: AppTheme.primary, foregroundColor: Colors.white),
                  ),
                ),
                const SizedBox(width: 12),
                Expanded(
                  child: OutlinedButton.icon(
                    onPressed: () => _pickAndScanImage(ImageSource.camera),
                    icon: const Icon(Icons.camera_alt),
                    label: const Text('Take Plate Photo'),
                  ),
                ),
              ],
            ),
            if (_scanResult != null && _detectedFood != null) ...[
              const Divider(height: 32),
              Text(
                'AI Plate Scan: ${_scanResult!['plateTitle'] ?? _detectedFood!.name}',
                style: const TextStyle(fontSize: 16, fontWeight: FontWeight.bold, color: AppTheme.primaryDark),
              ),
              const SizedBox(height: 8),
              if (_scanResult!['items'] != null) ...[
                const Align(
                  alignment: Alignment.centerLeft,
                  child: Text('Categorized Food Components on Plate:', style: TextStyle(fontSize: 12, fontWeight: FontWeight.bold)),
                ),
                const SizedBox(height: 8),
                Column(
                  children: List<Widget>.from((_scanResult!['items'] as List).map((it) {
                    return Container(
                      margin: const EdgeInsets.only(bottom: 6),
                      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
                      decoration: BoxDecoration(color: AppTheme.bgMain, borderRadius: BorderRadius.circular(8)),
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Text('🥗 ${it['name']} (${it['portion']})', style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 13)),
                          Text('${it['protein']}g Protein • ${it['calories']} kcal', style: const TextStyle(fontSize: 12, color: AppTheme.primaryDark, fontWeight: FontWeight.bold)),
                        ],
                      ),
                    );
                  })),
                ),
                const SizedBox(height: 12),
              ],
              const Align(
                alignment: Alignment.centerLeft,
                child: Text('Total Combined Plate Nutrition:', style: TextStyle(fontSize: 12, fontWeight: FontWeight.bold)),
              ),
              const SizedBox(height: 8),
              NutritionCardWidget(nutrition: _detectedFood!.nutrition),
              const SizedBox(height: 12),
              HealthScoreWidget(score: _detectedFood!.healthScore, rating: _detectedFood!.rating, badgeColorHex: _detectedFood!.badgeColorHex),
            ],
          ],
        ),
      ),
    );
  }

  Widget _buildChatbotPane() {
    return Card(
      child: Container(
        height: 580,
        padding: const EdgeInsets.all(16),
        child: Column(
          children: [
            const Row(
              children: [
                CircleAvatar(backgroundColor: AppTheme.primaryLight, child: Icon(Icons.smart_toy, color: AppTheme.primaryDark)),
                SizedBox(width: 12),
                Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text('FoodIQ AI Assistant Bot', style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold)),
                    Text('Ask questions about your scanned plate', style: TextStyle(fontSize: 11, color: AppTheme.textMuted)),
                  ],
                ),
              ],
            ),
            const Divider(),
            Expanded(
              child: ListView.builder(
                itemCount: _messages.length,
                itemBuilder: (context, idx) {
                  final msg = _messages[idx];
                  return Align(
                    alignment: msg.isUser ? Alignment.centerRight : Alignment.centerLeft,
                    child: Container(
                      margin: const EdgeInsets.symmetric(vertical: 4),
                      padding: const EdgeInsets.all(12),
                      decoration: BoxDecoration(
                        color: msg.isUser ? AppTheme.primary : AppTheme.bgMain,
                        borderRadius: BorderRadius.circular(12),
                      ),
                      child: Text(
                        msg.text,
                        style: TextStyle(
                          color: msg.isUser ? Colors.white : AppTheme.textMain,
                          fontSize: 13,
                        ),
                      ),
                    ),
                  );
                },
              ),
            ),
            const Divider(),
            Row(
              children: [
                Expanded(
                  child: TextField(
                    controller: _chatCtrl,
                    onSubmitted: (_) => _sendMessage(),
                    decoration: const InputDecoration(
                      hintText: 'Ask AI Bot about your plate balance...',
                      border: InputBorder.none,
                    ),
                  ),
                ),
                IconButton(
                  icon: const Icon(Icons.send, color: AppTheme.primary),
                  onPressed: _sendMessage,
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
