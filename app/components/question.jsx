import React from 'react'

import PropTypes from 'prop-types'

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

// Question.defaultProps = {
//   Question: 'What types of cars do you sell?',
//   Answer:
//     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus.',
// }

// Question.propTypes = {
//   Question: PropTypes.string,
//   Answer: PropTypes.string,
// }
