import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ProgressBar from './components/ProgressBar';
import QuizCard from './components/QuizCard';
import ScoreScreen from './components/ScoreScreen';
import { quizQuestions } from './data/quizData';
import { ShieldCheck, Sparkles, Code2 } from 'lucide-react';

export default function App() {
  const [questions] = useState(quizQuestions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [userAnswersHistory, setUserAnswersHistory] = useState([]);

  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;

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
    // Optionally re-shuffle questions or reset order
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setQuizCompleted(false);
    setUserAnswersHistory([]);
  }, []);

  // Keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't trigger if focus is inside an input/textarea
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

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Top Navigation */}
      <Navbar
        score={score}
        currentCategory={!quizCompleted ? currentQuestion?.category : 'Completed'}
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
          maxWidth: '860px',
          margin: '0 auto',
          width: '100%',
        }}
      >
        {!quizCompleted ? (
          <div style={{ width: '100%' }}>
            {/* Top Progress Bar */}
            <ProgressBar
              current={currentQuestionIndex + 1}
              total={totalQuestions}
            />

            {/* Interactive Question Card */}
            <QuizCard
              questionData={currentQuestion}
              selectedOption={selectedOption}
              isAnswered={isAnswered}
              onSelectOption={handleSelectOption}
              onNextQuestion={handleNextQuestion}
              isLastQuestion={currentQuestionIndex === totalQuestions - 1}
            />
          </div>
        ) : (
          <ScoreScreen
            score={score}
            totalQuestions={totalQuestions}
            userAnswersHistory={userAnswersHistory}
            questions={questions}
            onRestart={handleRestartQuiz}
          />
        )}
      </main>

      {/* Modern Footer */}
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
            Built with React 19 & Vite
          </span>
          <span>•</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
            <Sparkles size={14} color="#8b5cf6" />
            CS & Web Engineering Assessment
          </span>
          <span>•</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
            <ShieldCheck size={14} color="#10b981" />
            Verified Task-4 Implementation
          </span>
        </div>
      </footer>
    </div>
  );
}
