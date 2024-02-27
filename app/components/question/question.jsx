// Import React
import React from 'react';

// Import CSS
import questionStylesHref from './question.css';

// Load the CSS
export let links = () => {
  return [{ rel: 'stylesheet', href: questionStylesHref }]
}

// Question Component
// Requires the following props:
// - Question: string
// - Answer: string
export function Question({ Question, Answer }) {
  return (
    <div className="question-container">
      <span className="question-text heading4">{Question}</span>
      <span className="question-text1">{Answer}</span>
    </div>
  )
}
