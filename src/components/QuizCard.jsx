import React from 'react';
import { Check, X, ArrowRight, Lightbulb, HelpCircle, CornerDownLeft } from 'lucide-react';

export default function QuizCard({
  questionData,
  selectedOption,
  isAnswered,
  onSelectOption,
  onNextQuestion,
  isLastQuestion,
}) {
  const { question, options, correctAnswer, explanation, category, difficulty, codeSnippet } = questionData;
  const optionLetters = ['A', 'B', 'C', 'D'];

  const getOptionStateClass = (index) => {
    if (!isAnswered) {
      return selectedOption === index ? 'selected-default' : '';
    }

    if (index === correctAnswer) {
      return 'correct';
    }

    if (selectedOption === index && index !== correctAnswer) {
      return 'incorrect';
    }

    return '';
  };

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

  const getDifficultyClass = (diff) => {
    switch (diff?.toLowerCase()) {
      case 'easy':
        return 'badge-easy';
      case 'medium':
        return 'badge-medium';
      case 'hard':
        return 'badge-hard';
      default:
        return 'badge-easy';
    }
  };

  return (
    <div className="glass-panel animate-fade-in" style={{ borderRadius: '1.25rem', padding: '2rem', width: '100%' }}>
      {/* Category & Topic Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '1.25rem',
          flexWrap: 'wrap',
          gap: '0.5rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
          <span className={`badge ${getCategoryClass(category)}`}>
            {category}
          </span>
          {difficulty && (
            <span className={`badge ${getDifficultyClass(difficulty)}`}>
              {difficulty.toUpperCase()}
            </span>
          )}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#9ca3af', fontSize: '0.8rem' }}>
          <HelpCircle size={14} />
          <span>Single Choice</span>
        </div>
      </div>

      {/* Question Title */}
      <h2
        style={{
          fontSize: '1.35rem',
          fontWeight: 700,
          lineHeight: 1.45,
          color: '#f9fafb',
          marginBottom: codeSnippet ? '1rem' : '1.75rem',
        }}
      >
        {question}
      </h2>

      {/* Code Snippet if present */}
      {codeSnippet && (
        <div style={{ marginBottom: '1.75rem' }}>
          <div className="code-box">{codeSnippet}</div>
        </div>
      )}

      {/* 4 Interactive Option Buttons */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', marginBottom: '1.75rem' }}>
        {options.map((option, index) => {
          const stateClass = getOptionStateClass(index);
          const isSelected = selectedOption === index;
          const isCorrect = index === correctAnswer;

          return (
            <button
              key={index}
              onClick={() => onSelectOption(index)}
              disabled={isAnswered}
              className={`option-btn ${stateClass}`}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: 1, paddingRight: '0.5rem' }}>
                {/* Option Identifier Badge */}
                <div
                  style={{
                    width: '2rem',
                    height: '2rem',
                    borderRadius: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    flexShrink: 0,
                    background: isAnswered && isCorrect
                      ? '#10b981'
                      : isAnswered && isSelected
                      ? '#f43f5e'
                      : 'rgba(255, 255, 255, 0.08)',
                    color: isAnswered && (isCorrect || isSelected) ? '#ffffff' : '#9ca3af',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {optionLetters[index]}
                </div>

                {/* Option Text */}
                <span
                  style={{
                    fontWeight: 500,
                    lineHeight: 1.4,
                    color: isAnswered && isCorrect ? '#ecfdf5' : '#f3f4f6',
                  }}
                >
                  {option}
                </span>
              </div>

              {/* Status Icons & Keyboard Hints */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
                {!isAnswered && (
                  <span className="kbd-hint">{index + 1}</span>
                )}
                {isAnswered && isCorrect && (
                  <div
                    style={{
                      width: '1.75rem',
                      height: '1.75rem',
                      borderRadius: '50%',
                      background: 'rgba(16, 185, 129, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#10b981',
                    }}
                  >
                    <Check size={18} strokeWidth={3} />
                  </div>
                )}
                {isAnswered && isSelected && !isCorrect && (
                  <div
                    style={{
                      width: '1.75rem',
                      height: '1.75rem',
                      borderRadius: '50%',
                      background: 'rgba(244, 63, 94, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#f43f5e',
                    }}
                  >
                    <X size={18} strokeWidth={3} />
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Explanation Reveal Box */}
      {isAnswered && (
        <div
          className="animate-fade-in"
          style={{
            background: 'rgba(30, 41, 59, 0.6)',
            borderLeft: '4px solid #38bdf8',
            borderRadius: '0.75rem',
            padding: '1.25rem',
            marginBottom: '1.75rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <Lightbulb size={18} color="#38bdf8" />
            <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Concept & Explanation
            </h4>
          </div>
          <p style={{ fontSize: '0.92rem', color: '#d1d5db', lineHeight: 1.6 }}>
            {explanation}
          </p>
        </div>
      )}

      {/* Navigation / Next Trigger */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '0.75rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#6b7280', fontSize: '0.8rem' }}>
          <span>Press</span>
          <span className="kbd-hint">1-4</span>
          <span>to answer,</span>
          <span className="kbd-hint">
            <CornerDownLeft size={10} style={{ display: 'inline', marginRight: '2px' }} />
            Enter
          </span>
          <span>to proceed</span>
        </div>

        <button
          onClick={onNextQuestion}
          disabled={!isAnswered}
          className="btn-primary"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.625rem',
            padding: '0.75rem 1.75rem',
            borderRadius: '0.75rem',
            fontSize: '0.95rem',
          }}
        >
          <span>{isLastQuestion ? 'View Results' : 'Next Question'}</span>
          <ArrowRight size={17} />
        </button>
      </div>
    </div>
  );
}
