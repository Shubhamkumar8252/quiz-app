import React from 'react';

function decodeHtml(html) {
  const txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
}

function Results({ questions, answers, onRestart }) {
  const score = answers.filter((a) => a?.isCorrect).length;
  const total = questions.length;

  return (
    <div className="results-container">
      <h1>Quiz Results</h1>
      <p>You scored {score}/{total}</p>
      <div className="summary">
        {questions.map((q, i) => {
          const answer = answers[i];
          return (
            <div key={i} className="result-item">
              <h3 dangerouslySetInnerHTML={{ __html: q.question }} />
              <p>
                Your answer: {answer ? decodeHtml(q.options[answer.selectedIndex]) : 'Not answered'}
              </p>
              <p>
                Correct answer: {decodeHtml(q.options[q.correctAnswerIndex])}
              </p>
              <p className={answer?.isCorrect ? 'correct' : 'incorrect'}>
                {answer?.isCorrect ? 'Correct' : 'Incorrect'}
              </p>
            </div>
          );
        })}
      </div>
      <button onClick={onRestart}>Restart Quiz</button>
    </div>
  );
}

export default Results;
