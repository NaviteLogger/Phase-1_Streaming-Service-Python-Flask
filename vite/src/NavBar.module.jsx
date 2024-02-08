// NavBar.js
import React from 'react';
import styles from './NavBar.module.css';

const NavBar = () => {
    return (
        <header data-thq="thq-navbar" className={`${styles['navbar-container']}`}>
            <span className={styles['logo']}>STREAMIFY</span>
            {/* Rest of the navbar code */}
        </header>
    );
};

export default NavBar;
