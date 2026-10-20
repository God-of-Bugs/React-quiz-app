import React, { useState, useEffect, useCallback, useMemo } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ProgressBar from './components/ProgressBar';
import QuizCard from './components/QuizCard';
import ScoreScreen from './components/ScoreScreen';
import { quizQuestions } from './data/quizData';
import { Sparkles, Code2, Shuffle, Layers, ShieldCheck } from 'lucide-react';

/**
 * Robust Fisher-Yates shuffle that permutes both questions
 * and options while accurately maintaining the correct answer index.
 */
function prepareShuffledQuiz(questionsList) {
  const cloned = questionsList.map((q) => {
    // Pair each option with its original index
    const indexedOptions = q.options.map((opt, idx) => ({
      opt,
      isCorrect: idx === q.correctAnswer,
    }));

    // Shuffle options
    for (let i = indexedOptions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indexedOptions[i], indexedOptions[j]] = [indexedOptions[j], indexedOptions[i]];
    }

    const newCorrectAnswer = indexedOptions.findIndex((item) => item.isCorrect);

    return {
      ...q,
      options: indexedOptions.map((item) => item.opt),
      correctAnswer: newCorrectAnswer,
    };
  });

  // Shuffle question order
  for (let i = cloned.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cloned[i], cloned[j]] = [cloned[j], cloned[i]];
  }

  return cloned;
}

export default function App() {
  const [selectedDifficulty, setSelectedDifficulty] = useState('all'); // 'all' | 'easy' | 'medium' | 'hard'
  const [activeQuestions, setActiveQuestions] = useState(() => prepareShuffledQuiz(quizQuestions));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [userAnswersHistory, setUserAnswersHistory] = useState([]);

  // Filter and shuffle questions whenever difficulty changes or reset is called
  const initQuizForDifficulty = useCallback((difficulty) => {
    let pool = quizQuestions;
    if (difficulty !== 'all') {
      pool = quizQuestions.filter((q) => q.difficulty === difficulty);
    }
    const shuffled = prepareShuffledQuiz(pool);
    setActiveQuestions(shuffled);
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setQuizCompleted(false);
    setUserAnswersHistory([]);
  }, []);

  const handleDifficultyChange = (difficulty) => {
    setSelectedDifficulty(difficulty);
    initQuizForDifficulty(difficulty);
  };

  const handleShuffleCurrent = () => {
    initQuizForDifficulty(selectedDifficulty);
  };

  const currentQuestion = activeQuestions[currentQuestionIndex];
  const totalQuestions = activeQuestions.length;

  const handleSelectOption = useCallback((optionIndex) => {
    if (isAnswered) return;

    setSelectedOption(optionIndex);
    setIsAnswered(true);

    const isCorrect = optionIndex === currentQuestion.correctAnswer;
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    setUserAnswersHistory((prev) => {
      const updated = [...prev];
      updated[currentQuestionIndex] = optionIndex;
      return updated;
    });
  }, [isAnswered, currentQuestion, currentQuestionIndex]);

  const handleNextQuestion = useCallback(() => {
    if (!isAnswered) return;

    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setQuizCompleted(true);
    }
  }, [isAnswered, currentQuestionIndex, totalQuestions]);

  const handleRestartQuiz = useCallback(() => {
    initQuizForDifficulty(selectedDifficulty);
  }, [initQuizForDifficulty, selectedDifficulty]);

  // Global keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

      if (!quizCompleted) {
        if (!isAnswered) {
          if (e.key === '1') handleSelectOption(0);
          if (e.key === '2') handleSelectOption(1);
          if (e.key === '3') handleSelectOption(2);
          if (e.key === '4') handleSelectOption(3);
        } else {
          if (e.key === 'Enter') {
            handleNextQuestion();
          }
        }
      } else {
        if (e.key === 'Enter') {
          handleRestartQuiz();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [quizCompleted, isAnswered, handleSelectOption, handleNextQuestion, handleRestartQuiz]);

  const difficultyStats = useMemo(() => {
    const easyCount = quizQuestions.filter((q) => q.difficulty === 'easy').length;
    const mediumCount = quizQuestions.filter((q) => q.difficulty === 'medium').length;
    const hardCount = quizQuestions.filter((q) => q.difficulty === 'hard').length;
    return {
      all: quizQuestions.length,
      easy: easyCount,
      medium: mediumCount,
      hard: hardCount,
    };
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Top Clean Navigation */}
      <Navbar
        score={score}
        currentCategory={!quizCompleted ? currentQuestion?.category : 'Completed'}
        currentDifficulty={!quizCompleted ? currentQuestion?.difficulty : null}
        totalQuestions={totalQuestions}
        onReset={handleRestartQuiz}
      />

      {/* Main Content Area */}
      <main
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem 1.25rem',
          maxWidth: '880px',
          margin: '0 auto',
          width: '100%',
        }}
      >
        {/* Difficulty Controls & Shuffler (Shown when in-quiz) */}
        {!quizCompleted && (
          <div
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '1.25rem',
              flexWrap: 'wrap',
              gap: '0.75rem',
            }}
          >
            {/* Difficulty Tabs */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.78rem', color: '#6b7280', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Layers size={14} />
                Difficulty:
              </span>
              <button
                className={`filter-btn ${selectedDifficulty === 'all' ? 'active' : ''}`}
                onClick={() => handleDifficultyChange('all')}
              >
                All ({difficultyStats.all})
              </button>
              <button
                className={`filter-btn ${selectedDifficulty === 'easy' ? 'active' : ''}`}
                onClick={() => handleDifficultyChange('easy')}
              >
                Easy ({difficultyStats.easy})
              </button>
              <button
                className={`filter-btn ${selectedDifficulty === 'medium' ? 'active' : ''}`}
                onClick={() => handleDifficultyChange('medium')}
              >
                Medium ({difficultyStats.medium})
              </button>
              <button
                className={`filter-btn ${selectedDifficulty === 'hard' ? 'active' : ''}`}
                onClick={() => handleDifficultyChange('hard')}
              >
                Hard ({difficultyStats.hard})
              </button>
            </div>

            {/* Quick Shuffle Button */}
            <button
              onClick={handleShuffleCurrent}
              className="filter-btn"
              title="Reshuffle questions and choices"
              style={{ padding: '0.4rem 0.75rem' }}
            >
              <Shuffle size={13} color="#38bdf8" />
              <span>Shuffle</span>
            </button>
          </div>
        )}

        {!quizCompleted ? (
          <div style={{ width: '100%' }}>
            {/* Top Progress Bar */}
            <ProgressBar
              current={currentQuestionIndex + 1}
              total={totalQuestions}
            />

            {/* Interactive Question Card */}
            {currentQuestion && (
              <QuizCard
                questionData={currentQuestion}
                selectedOption={selectedOption}
                isAnswered={isAnswered}
                onSelectOption={handleSelectOption}
                onNextQuestion={handleNextQuestion}
                isLastQuestion={currentQuestionIndex === totalQuestions - 1}
              />
            )}
          </div>
        ) : (
          <ScoreScreen
            score={score}
            totalQuestions={totalQuestions}
            userAnswersHistory={userAnswersHistory}
            questions={activeQuestions}
            onRestart={handleRestartQuiz}
          />
        )}
      </main>

      {/* Modern Developer Footer */}
      <footer
        style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          padding: '1.25rem',
          textAlign: 'center',
          fontSize: '0.8rem',
          color: '#6b7280',
          background: 'rgba(10, 14, 23, 0.5)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
            <Code2 size={14} color="#38bdf8" />
            DevSprint
          </span>
          <span>•</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
            <Sparkles size={14} color="#8b5cf6" />
            CS & Web Engineering Assessment
          </span>
          <span>•</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
            <ShieldCheck size={14} color="#10b981" />
            React 19 & Vite 8
          </span>
        </div>
      </footer>
    </div>
  );
}
