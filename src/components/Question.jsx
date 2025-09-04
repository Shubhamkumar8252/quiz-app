import React from 'react';

function decodeHtml(html) {
  const txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
}

function Question({ question, selectedAnswer, onAnswer }) {
  return (
    <div className="question-container">
      <h2 dangerouslySetInnerHTML={{ __html: question.question }} />
      <ul>
        {question.options.map((option, index) => (
          <li key={index}>
            <label>
              <input
                type="radio"
                name="answer"
                value={index}
                checked={selectedAnswer === index}
                onChange={() => onAnswer(index)}
              />
              {decodeHtml(option)}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Question;
