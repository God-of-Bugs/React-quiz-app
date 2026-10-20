import React from 'react';
import { Terminal, Award, Sparkles, RotateCcw } from 'lucide-react';

export default function Navbar({ score, currentCategory, totalQuestions, onReset }) {
  const getCategoryClass = (cat) => {
    switch (cat) {
      case 'JavaScript':
        return 'badge-js';
      case 'React':
        return 'badge-react';
      case 'Core CS':
        return 'badge-cs';
      default:
        return 'badge-react';
    }
  };

  return (
    <header className="glass-nav" style={{ position: 'sticky', top: 0, zIndex: 50, width: '100%' }}>
      <div
        style={{
          maxWidth: '1024px',
          margin: '0 auto',
          padding: '0.85rem 1.25rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.75rem',
        }}
      >
        {/* Brand / Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div
            style={{
              width: '2.5rem',
              height: '2.5rem',
              borderRadius: '0.625rem',
              background: 'linear-gradient(135deg, #4f46e5, #06b6d4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 15px rgba(79, 70, 229, 0.4)',
            }}
          >
            <Terminal size={20} color="#ffffff" />
          </div>
          <div>
            <h1 style={{ fontSize: '1.15rem', fontWeight: 800, letterSpacing: '-0.02em', color: '#ffffff' }}>
              CS & Web Quiz Arena
            </h1>
            <p style={{ fontSize: '0.75rem', color: '#9ca3af', fontWeight: 500 }}>
              Task-4 Interactive Assessment
            </p>
          </div>
        </div>

        {/* Dynamic Center Topic Pill */}
        {currentCategory && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '0.75rem', color: '#9ca3af' }}>Active Module:</span>
            <span className={`badge ${getCategoryClass(currentCategory)}`}>
              <Sparkles size={13} />
              {currentCategory}
            </span>
          </div>
        )}

        {/* Right Score & Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(255, 255, 255, 0.05)',
              padding: '0.35rem 0.85rem',
              borderRadius: '9999px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <Award size={16} color="#fbbf24" />
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f3f4f6' }}>
              Score: <span style={{ color: '#38bdf8' }}>{score}</span>
              <span style={{ color: '#6b7280', fontWeight: 500, fontSize: '0.75rem' }}> / {totalQuestions}</span>
            </span>
          </div>

          {onReset && (
            <button
              onClick={onReset}
              title="Restart Quiz"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '0.5rem',
                padding: '0.45rem',
                cursor: 'pointer',
                color: '#9ca3af',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#9ca3af';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
              }}
            >
              <RotateCcw size={15} />
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
