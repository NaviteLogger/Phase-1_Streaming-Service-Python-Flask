import React from 'react';
import NavBar from './NavBar.module.jsx';
import HeroSection from './HeroSection.module.jsx';
import FeaturesSection from './FeaturesSection.module.jsx';
import BannerSection from './BannerSection.module.jsx';
import FAQSection from './FAQSection.module.jsx';
import Footer from './Footer.module.jsx';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles['app-container']}>
      <NavBar />
      <HeroSection />
      <FeaturesSection />
      <BannerSection />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;