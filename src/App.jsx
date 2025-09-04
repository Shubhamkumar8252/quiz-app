import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Quiz from './components/Quiz';
import Results from './components/Results';
import Home from './components/Home';

function App() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]); // { questionIndex, selectedOption, isCorrect }
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchQuestions() {
      setLoading(true);
      setError(null);
      try {
        // Use local questions fallback to avoid API rate limit issues
        const localQuestions = [
          {
            question: "What is the capital of France?",
            options: ["Berlin", "London", "Paris", "Madrid"],
            correctAnswerIndex: 2
          },
          {
            question: "Which planet is known as the Red Planet?",
            options: ["Earth", "Mars", "Jupiter", "Saturn"],
            correctAnswerIndex: 1
          },
          {
            question: "Who wrote 'To Kill a Mockingbird'?",
            options: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "F. Scott Fitzgerald"],
            correctAnswerIndex: 0
          },
          {
            question: "What is the largest ocean on Earth?",
            options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
            correctAnswerIndex: 3
          },
          {
            question: "What is the chemical symbol for gold?",
            options: ["Au", "Ag", "Fe", "Pb"],
            correctAnswerIndex: 0
          }
        ];
        setQuestions(localQuestions);
        setAnswers([]);
        setCurrentQuestionIndex(0);
        setLoading(false);
      } catch (err) {
        setError(err.message || 'Error fetching questions');
        setLoading(false);
      }
    }
    fetchQuestions();
  }, []);

  function handleAnswer(selectedIndex) {
    const isCorrect = selectedIndex === questions[currentQuestionIndex].correctAnswerIndex;
    setAnswers((prev) => {
      const newAnswers = [...prev];
      newAnswers[currentQuestionIndex] = { selectedIndex, isCorrect };
      return newAnswers;
    });
    // Automatically move to next question after answer selection
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((i) => i + 1);
    } else {
      navigate('/results');
    }
  }

  function handleNext() {
    // Remove manual next button functionality since auto-advance is implemented
  }

  function handleRestart() {
    setAnswers([]);
    setCurrentQuestionIndex(0);
    navigate('/quiz');
  }

  if (loading) return <div className="loading">Loading questions...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/quiz"
        element={
          <Quiz
            question={questions[currentQuestionIndex]}
            questionIndex={currentQuestionIndex}
            totalQuestions={questions.length}
            selectedAnswer={answers[currentQuestionIndex]?.selectedIndex}
            onAnswer={handleAnswer}
            onNext={handleNext}
          />
        }
      />
      <Route
        path="/results"
        element={
          <Results
            questions={questions}
            answers={answers}
            onRestart={handleRestart}
          />
        }
      />
      <Route
        path="*"
        element={<Home />}
      />
    </Routes>
  );
}

export default App;
