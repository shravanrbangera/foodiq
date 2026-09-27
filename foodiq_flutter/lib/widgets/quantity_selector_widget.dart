import 'package:flutter/material.dart';
import '../theme/app_theme.dart';

class QuantitySelectorWidget extends StatelessWidget {
  final double quantity;
  final ValueChanged<double> onChanged;
  final String unit;

  const QuantitySelectorWidget({
    super.key,
    required this.quantity,
    required this.onChanged,
    this.unit = 'g',
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: AppTheme.borderColor),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const Row(
            children: [
              Icon(Icons.scale, color: AppTheme.primary),
              SizedBox(width: 8),
              Text(
                'Portion Quantity Calculator',
                style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold, color: AppTheme.textMain),
              ),
            ],
          ),
          const SizedBox(height: 4),
          const Text(
            'Adjust portion to instantly recalculate all nutrients',
            style: TextStyle(fontSize: 12, color: AppTheme.textMuted),
          ),
          const SizedBox(height: 16),
          Row(
            children: [
              IconButton.filledTonal(
                onPressed: () => onChanged((quantity - 50).clamp(10, 5000)),
                icon: const Icon(Icons.remove),
              ),
              const SizedBox(width: 12),
              Expanded(
                child: Center(
                  child: Text(
                    '${quantity.toInt()} $unit',
                    style: const TextStyle(fontSize: 22, fontWeight: FontWeight.bold, color: AppTheme.primaryDark),
                  ),
                ),
              ),
              const SizedBox(width: 12),
              IconButton.filledTonal(
                onPressed: () => onChanged((quantity + 50).clamp(10, 5000)),
                icon: const Icon(Icons.add),
              ),
            ],
          ),
          const SizedBox(height: 12),
          Wrap(
            spacing: 8,
            children: [50.0, 100.0, 150.0, 250.0, 500.0].map((val) {
              final isSel = quantity == val;
              return ChoiceChip(
                label: Text('${val.toInt()}$unit'),
                selected: isSel,
                onSelected: (_) => onChanged(val),
                selectedColor: AppTheme.primary,
                labelStyle: TextStyle(
                  color: isSel ? Colors.white : AppTheme.textMain,
                  fontWeight: FontWeight.bold,
                ),
              );
            }).toList(),
          ),
        ],
      ),
    );
  }
}
