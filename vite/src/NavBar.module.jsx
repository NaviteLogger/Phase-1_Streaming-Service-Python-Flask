// NavBar.js
import React from 'react';
import styles from './NavBar.module.css';

const NavBar = () => {
    return (
        <header data-thq="thq-navbar" className={`${projectStyles['navbar-container']} ${styles['navbar-interactive']}`}>
            <span className={projectStyles['logo']}>STREAMIFY</span>
            {/* Rest of the navbar code */}
        </header>
    );
};

export default NavBar;
