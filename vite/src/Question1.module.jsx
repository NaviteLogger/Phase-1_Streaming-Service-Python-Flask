import React from 'react';
import PropTypes from 'prop-types';
import projectStyles from '../styles/projectStyles.module.css';
import styles from './question1.module.css';

const Question1 = ({ question, answer }) => (
    <div className={styles['container']}>
        {/* Question and answer content here */}
    </div>
);

Question1.propTypes = {
    question: PropTypes.string,
    answer: PropTypes.string,
};

export default Question1;
