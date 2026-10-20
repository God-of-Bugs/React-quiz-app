import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function ProgressBar({ current, total }) {
  const percentage = Math.min(Math.round(((current) / total) * 100), 100);

  return (
    <div style={{ width: '100%', marginBottom: '1.5rem' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '0.625rem',
          fontSize: '0.85rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
          <span style={{ color: '#ffffff' }}>Question {current}</span>
          <span style={{ color: '#6b7280' }}>of {total}</span>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            color: '#38bdf8',
            fontFamily: 'var(--font-mono)',
            fontWeight: 600,
            fontSize: '0.8rem',
          }}
        >
          <CheckCircle2 size={14} color="#38bdf8" />
          <span>{percentage}%</span>
        </div>
      </div>

      {/* Progress Track */}
      <div
        style={{
          width: '100%',
          height: '8px',
          background: 'rgba(255, 255, 255, 0.08)',
          borderRadius: '9999px',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${percentage}%`,
            background: 'linear-gradient(90deg, #3b82f6 0%, #8b5cf6 50%, #06b6d4 100%)',
            borderRadius: '9999px',
            transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: '0 0 12px rgba(56, 189, 248, 0.5)',
          }}
        />
      </div>
    </div>
  );
}
