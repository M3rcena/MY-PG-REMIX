import React from 'react'

import questionStylesHref from './question.css'

export let links = () => {
  return [{ rel: 'stylesheet', href: questionStylesHref }]
}

export default function Question({ Question, Answer }) {
  return (
    <div className="question-container">
      <span className="question-text heading4">{Question}</span>
      <span className="question-text1">{Answer}</span>
    </div>
  )
}
