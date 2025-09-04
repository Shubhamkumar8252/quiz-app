import React from 'react';
import Question from './Question';

function Quiz({ question, questionIndex, totalQuestions, selectedAnswer, onAnswer, onNext }) {
  const progress = ((questionIndex + 1) / totalQuestions) * 100;

  return (
    <div className="quiz-container">
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
        <p>Question {questionIndex + 1} of {totalQuestions}</p>
      </div>
      <Question
        question={question}
        selectedAnswer={selectedAnswer}
        onAnswer={onAnswer}
      />
      <button
        className="next-btn"
        onClick={onNext}
        disabled={selectedAnswer === undefined}
      >
        {questionIndex === totalQuestions - 1 ? 'Finish' : 'Next'}
      </button>
    </div>
  );
}

export default Quiz;
