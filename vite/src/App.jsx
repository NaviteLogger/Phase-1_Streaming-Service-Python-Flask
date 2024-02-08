import React from 'react';
import NavBar from './NavBar.module';
import HeroSection from './HeroSection.module';
import FeaturesSection from './FeaturesSection.module';
import BannerSection from './BannerSection.module';
import FAQSection from './FAQSection.module';
import Footer from './Footer.module';
import styles from './App.css';

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
