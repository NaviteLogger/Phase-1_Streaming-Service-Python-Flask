import React from 'react';
import NavBar from './NavBar';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import BannerSection from './BannerSection';
import FAQSection from './FAQSection';
import Footer from './Footer';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.appContainer}>
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
