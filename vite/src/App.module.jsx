import React from 'react';
import NavBar from './components/NavBar/NavBar.module.jsx';
import HeroSection from './components/HeroSection/HeroSection.module.jsx';
import FeaturesSection from './components/FeaturesSection/FeaturesSection.module.jsx';
import BannerSection from './components/BannerSection/BannerSection.module.jsx';
import FAQSection from './components/FAQSection/FAQSection.module.jsx';
import Footer from './components/Footer/Footer.module.jsx';
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