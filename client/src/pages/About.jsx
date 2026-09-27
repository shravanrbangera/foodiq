import React from 'react';
import { ShieldCheck, CheckCircle2, GraduationCap, Code } from 'lucide-react';

export default function About() {
  return (
    <div style={{ flex: 1, padding: '60px 0' }}>
      <div className="container" style={{ maxWidth: '840px' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="badge badge-green" style={{ marginBottom: '12px' }}>PROJECT BLUEPRINT</div>
          <h1 style={{ fontSize: '2.8rem', fontWeight: '800', marginBottom: '16px', color: 'var(--primary-dark)' }}>
            About FoodIQ
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>
            <strong>KNOW YOUR FOOD. KNOW YOUR NUTRITION.</strong>
          </p>
        </div>

        <div style={{ backgroundColor: '#FFFFFF', padding: '40px', borderRadius: 'var(--radius-xl)', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)', lineHeight: '1.8' }}>
          <h3 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '16px', color: 'var(--text-main)' }}>
            Core Mission & Vision
          </h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>
            FoodIQ is not a food blog, calorie tracker, or fitness app. It is a single-purpose nutrition intelligence platform built for college students to search, scan, or upload food and instantly understand their exact nutrients within 10 seconds.
          </p>

          <h3 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '16px', color: 'var(--text-main)' }}>
            Key Architectural Pillars
          </h3>
          <ul style={{ listStyle: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
            <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <CheckCircle2 color="var(--primary)" size={20} style={{ flexShrink: 0, marginTop: '4px' }} />
              <div>
                <strong>10-Second Instant Nutrition:</strong> Instant search engine layout that prioritizes immediate meal clarity.
              </div>
            </li>
            <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <CheckCircle2 color="var(--primary)" size={20} style={{ flexShrink: 0, marginTop: '4px' }} />
              <div>
                <strong>Dynamic Portion Recalculation:</strong> Serving size selector (`250g`) dynamically scales all macros, micronutrients, and % Daily Values without page reloads.
              </div>
            </li>
            <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <CheckCircle2 color="var(--primary)" size={20} style={{ flexShrink: 0, marginTop: '4px' }} />
              <div>
                <strong>FoodIQ Health Score ($0 - 100$):</strong> Transparent algorithm evaluating protein/fiber density against sugar/sodium penalties.
              </div>
            </li>
            <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <CheckCircle2 color="var(--primary)" size={20} style={{ flexShrink: 0, marginTop: '4px' }} />
              <div>
                <strong>Educational Plain-English Explanations:</strong> Clear breakdowns explaining what protein and fiber do for human health instead of raw numbers alone.
              </div>
            </li>
          </ul>

          <div style={{ backgroundColor: 'var(--primary-light)', padding: '24px', borderRadius: 'var(--radius-lg)', color: 'var(--primary-dark)' }}>
            <h4 style={{ fontWeight: '800', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <GraduationCap size={20} /> Academic & Portfolio Excellence
            </h4>
            <p style={{ fontSize: '0.92rem' }}>
              Built using the MERN stack (MongoDB, Express, React, Node.js) with custom responsive CSS styling system.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
