import React from 'react';
import PropTypes from 'prop-types';
import projectStyles from './styles/projectStyles.module.css';
import styles from './feature-card.module.css';

const FeatureCard = ({ heading, subHeading }) => (
    <div className={`${projectStyles['features-card']} ${styles['feature-card']}`}>
        {/* SVG and content here */}
    </div>
);

FeatureCard.propTypes = {
    heading: PropTypes.string,
    subHeading: PropTypes.string,
};

export default FeatureCard;
