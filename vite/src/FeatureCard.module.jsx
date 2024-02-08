import React from 'react';
import PropTypes from 'prop-types';
import projectStyles from './style.module.css'; // Ensure the correct path
import styles from './feature-card.module.css';

const FeatureCard = ({ heading, subHeading }) => {
    return (
        <div className={`${projectStyles['features-card']} ${styles['feature-card']}`}>
            <svg viewBox="0 0 1024 1024" className={projectStyles['features-icon']}>
                {/* SVG path */}
            </svg>
            <div className={styles['container']}>
                <h3 className={`${styles['text']} ${projectStyles['heading3']}`}>
                    {heading}
                </h3>
                <span className={projectStyles['body-small']}>{subHeading}</span>
            </div>
        </div>
    );
};

FeatureCard.defaultProps = {
    heading: 'Lorem ipsum',
    subHeading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
};

FeatureCard.propTypes = {
    heading: PropTypes.string,
    subHeading: PropTypes.string,
};

export default FeatureCard;
