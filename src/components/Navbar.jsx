import React from 'react';
import { Zap, Award, RotateCcw, Flame, Shield, CheckCircle2 } from 'lucide-react';

export default function Navbar({
  score,
  currentCategory,
  currentDifficulty,
  totalQuestions,
  onReset,
}) {
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

  const getDifficultyBadge = (diff) => {
    switch (diff?.toLowerCase()) {
      case 'easy':
        return {
          className: 'badge-easy',
          icon: <CheckCircle2 size={12} />,
          label: 'Easy',
        };
      case 'medium':
        return {
          className: 'badge-medium',
          icon: <Zap size={12} />,
          label: 'Medium',
        };
      case 'hard':
        return {
          className: 'badge-hard',
          icon: <Flame size={12} />,
          label: 'Hard',
        };
      default:
        return null;
    }
  };

  const diffBadge = getDifficultyBadge(currentDifficulty);

  return (
    <header className="glass-nav" style={{ position: 'sticky', top: 0, zIndex: 50, width: '100%' }}>
      <div
        style={{
          maxWidth: '1080px',
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
              width: '2.4rem',
              height: '2.4rem',
              borderRadius: '0.625rem',
              background: 'linear-gradient(135deg, #4f46e5, #06b6d4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 16px rgba(79, 70, 229, 0.45)',
            }}
          >
            <Zap size={19} color="#ffffff" fill="#ffffff" />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '1.2rem', fontWeight: 800, letterSpacing: '-0.02em', color: '#ffffff' }}>
              DevSprint
            </span>
            <span
              style={{
                fontSize: '0.68rem',
                fontWeight: 700,
                color: '#38bdf8',
                background: 'rgba(56, 189, 248, 0.12)',
                border: '1px solid rgba(56, 189, 248, 0.28)',
                padding: '0.18rem 0.5rem',
                borderRadius: '9999px',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}
            >
              Core CS & Web
            </span>
          </div>
        </div>

        {/* Center Indicators: Topic & Difficulty Badges */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
          {diffBadge && (
            <span className={`badge ${diffBadge.className}`}>
              {diffBadge.icon}
              {diffBadge.label}
            </span>
          )}

          {currentCategory && currentCategory !== 'Completed' && (
            <span className={`badge ${getCategoryClass(currentCategory)}`}>
              <Shield size={12} />
              {currentCategory}
            </span>
          )}
        </div>

        {/* Right Status: Score & Action */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.45rem',
              background: 'rgba(255, 255, 255, 0.05)',
              padding: '0.35rem 0.85rem',
              borderRadius: '9999px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <Award size={15} color="#fbbf24" />
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
