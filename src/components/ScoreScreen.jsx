import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import {
  Trophy,
  RotateCcw,
  CheckCircle,
  XCircle,
  ChevronDown,
  ChevronUp,
  Award,
  BookOpen,
} from 'lucide-react';

export default function ScoreScreen({ score, totalQuestions, userAnswersHistory, questions, onRestart }) {
  const [showReview, setShowReview] = useState(false);
  const percentage = Math.round((score / totalQuestions) * 100);

  useEffect(() => {
    if (percentage >= 70) {
      const duration = 1.5 * 1000;
      const end = Date.now() + duration;
      const colors = ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899'];

      const frame = () => {
        confetti({
          particleCount: 4,
          angle: 60,
          spread: 60,
          origin: { x: 0, y: 0.7 },
          colors,
        });
        confetti({
          particleCount: 4,
          angle: 120,
          spread: 60,
          origin: { x: 1, y: 0.7 },
          colors,
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      };

      frame();
    }
  }, [percentage]);

  const getTierInfo = () => {
    if (percentage >= 85) {
      return {
        tier: 'Master Engineer',
        color: '#10b981',
        bg: 'rgba(16, 185, 129, 0.15)',
        border: 'rgba(16, 185, 129, 0.35)',
        description: 'Outstanding! Exceptional grasp of Web architecture, React internals, and Core CS principles.',
      };
    }
    if (percentage >= 60) {
      return {
        tier: 'Proficient Developer',
        color: '#38bdf8',
        bg: 'rgba(56, 189, 248, 0.15)',
        border: 'rgba(56, 189, 248, 0.35)',
        description: 'Strong performance! You have a solid foundational understanding. Review minor misses to achieve full mastery.',
      };
    }
    return {
      tier: 'Needs Review',
      color: '#f59e0b',
      bg: 'rgba(245, 158, 11, 0.15)',
      border: 'rgba(245, 158, 11, 0.35)',
      description: 'Valuable practice session! Take time to explore the detailed question review below to cement these core concepts.',
    };
  };

  const tier = getTierInfo();

  return (
    <div className="glass-panel animate-fade-in" style={{ borderRadius: '1.25rem', padding: '2.5rem 2rem', width: '100%', maxWidth: '800px', margin: '0 auto' }}>
      {/* Trophy / Result Header */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <div
          style={{
            width: '4.5rem',
            height: '4.5rem',
            borderRadius: '50%',
            background: tier.bg,
            border: `2px solid ${tier.border}`,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1.25rem',
            boxShadow: `0 0 25px ${tier.bg}`,
          }}
        >
          <Trophy size={36} color={tier.color} />
        </div>

        <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>
          Assessment Completed
        </h2>
        <p style={{ color: '#9ca3af', fontSize: '0.95rem' }}>
          Here is your performance breakdown across CS & Web disciplines
        </p>
      </div>

      {/* Main Score Metrics Card */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          marginBottom: '2rem',
        }}
      >
        {/* Score Card */}
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '1rem',
            padding: '1.25rem',
            textAlign: 'center',
          }}
        >
          <span style={{ fontSize: '0.75rem', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
            Correct Answers
          </span>
          <div style={{ fontSize: '2.25rem', fontWeight: 800, color: '#ffffff', margin: '0.25rem 0' }}>
            <span style={{ color: tier.color }}>{score}</span>
            <span style={{ fontSize: '1.25rem', color: '#6b7280' }}> / {totalQuestions}</span>
          </div>
          <span style={{ fontSize: '0.8rem', color: '#9ca3af' }}>
            {score === totalQuestions ? 'Perfect accuracy!' : `${totalQuestions - score} missed questions`}
          </span>
        </div>

        {/* Percentage Card */}
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '1rem',
            padding: '1.25rem',
            textAlign: 'center',
          }}
        >
          <span style={{ fontSize: '0.75rem', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
            Accuracy Rate
          </span>
          <div style={{ fontSize: '2.25rem', fontWeight: 800, color: '#38bdf8', margin: '0.25rem 0' }}>
            {percentage}%
          </div>
          <span style={{ fontSize: '0.8rem', color: '#9ca3af' }}>Weighted Assessment</span>
        </div>

        {/* Tier Card */}
        <div
          style={{
            background: tier.bg,
            border: `1px solid ${tier.border}`,
            borderRadius: '1rem',
            padding: '1.25rem',
            textAlign: 'center',
          }}
        >
          <span style={{ fontSize: '0.75rem', color: tier.color, textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700 }}>
            Performance Tier
          </span>
          <div style={{ fontSize: '1.25rem', fontWeight: 800, color: tier.color, margin: '0.5rem 0' }}>
            {tier.tier}
          </div>
          <span style={{ fontSize: '0.78rem', color: '#d1d5db', lineHeight: 1.3, display: 'block' }}>
            {tier.description}
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div
        style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: '2rem',
        }}
      >
        <button
          onClick={onRestart}
          className="btn-primary"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.625rem',
            padding: '0.875rem 1.75rem',
            borderRadius: '0.75rem',
            fontSize: '0.95rem',
            minWidth: '180px',
            justifyContent: 'center',
          }}
        >
          <RotateCcw size={18} />
          <span>Restart Quiz</span>
        </button>

        <button
          onClick={() => setShowReview(!showReview)}
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            color: '#f3f4f6',
            borderRadius: '0.75rem',
            padding: '0.875rem 1.5rem',
            fontSize: '0.95rem',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.09)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
          }}
        >
          <BookOpen size={18} color="#38bdf8" />
          <span>{showReview ? 'Hide Review' : 'Review Answers'}</span>
          {showReview ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
      </div>

      {/* Review Answers Accordion / List */}
      {showReview && (
        <div className="animate-fade-in" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '1.75rem' }}>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#f3f4f6', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Award size={18} color="#fbbf24" />
            Detailed Question Breakdown
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {questions.map((q, idx) => {
              const userAnswerIndex = userAnswersHistory[idx];
              const isCorrect = userAnswerIndex === q.correctAnswer;
              const skipped = userAnswerIndex === undefined || userAnswerIndex === null;

              return (
                <div
                  key={q.id}
                  style={{
                    background: 'rgba(15, 23, 42, 0.5)',
                    border: `1px solid ${isCorrect ? 'rgba(16, 185, 129, 0.25)' : 'rgba(244, 63, 94, 0.25)'}`,
                    borderRadius: '0.875rem',
                    padding: '1.25rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ fontWeight: 700, color: '#9ca3af', fontSize: '0.85rem' }}>Q{idx + 1}.</span>
                      <span className="badge badge-js" style={{ fontSize: '0.7rem' }}>{q.category}</span>
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        color: isCorrect ? '#10b981' : '#f43f5e',
                      }}
                    >
                      {isCorrect ? (
                        <>
                          <CheckCircle size={15} />
                          <span>Correct</span>
                        </>
                      ) : (
                        <>
                          <XCircle size={15} />
                          <span>Incorrect</span>
                        </>
                      )}
                    </div>
                  </div>

                  <p style={{ fontSize: '0.95rem', fontWeight: 600, color: '#f9fafb', marginBottom: '0.75rem' }}>
                    {q.question}
                  </p>

                  {/* Options Comparison */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', marginBottom: '0.75rem', fontSize: '0.85rem' }}>
                    <div style={{ color: isCorrect ? '#10b981' : '#f43f5e' }}>
                      <span style={{ fontWeight: 600 }}>Your Answer: </span>
                      <span>{skipped ? 'Not answered' : q.options[userAnswerIndex]}</span>
                    </div>
                    {!isCorrect && (
                      <div style={{ color: '#10b981' }}>
                        <span style={{ fontWeight: 600 }}>Correct Answer: </span>
                        <span>{q.options[q.correctAnswer]}</span>
                      </div>
                    )}
                  </div>

                  {/* Explanation */}
                  <div
                    style={{
                      background: 'rgba(0, 0, 0, 0.25)',
                      padding: '0.65rem 0.85rem',
                      borderRadius: '0.5rem',
                      fontSize: '0.82rem',
                      color: '#9ca3af',
                      borderLeft: '3px solid #38bdf8',
                    }}
                  >
                    <span style={{ color: '#38bdf8', fontWeight: 600 }}>Insight: </span>
                    {q.explanation}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
