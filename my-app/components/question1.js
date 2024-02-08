import React from 'react'

import PropTypes from 'prop-types'

const Question1 = (props) => {
  return (
    <>
      <div className="question1-container">
        <span className="question1-text heading3">{props.question}</span>
        <span className="bodySmall">{props.answer}</span>
      </div>
      <style jsx>
        {`
          .question1-container {
            gap: var(--dl-space-space-unit);
            flex: 1;
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .question1-text {
            font-weight: 700;
          }
        `}
      </style>
    </>
  )
}

Question1.defaultProps = {
  answer:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus.',
  question: 'What types of cars do you sell?',
}

Question1.propTypes = {
  answer: PropTypes.string,
  question: PropTypes.string,
}

export default Question1
