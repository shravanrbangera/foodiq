import 'package:flutter_test/flutter_test.dart';
import 'package:foodiq_flutter/main.dart';

void main() {
  testWidgets('FoodIQ Smoke Test', (WidgetTester tester) async {
    await tester.pumpWidget(const FoodIQApp());
    expect(find.text('FOODIQ'), findsOneWidget);
  });
}
