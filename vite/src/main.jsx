import React from 'react';
import NavBar from './NavBar.module';
import HeroSection from './HeroSection.module';
import FeaturesSection from './FeaturesSection';
import BannerSection from './BannerSection.module';
import FAQSection from './FAQSection.module';
import Footer from './Footer.module';
import styles from './home.module.css';

const Home = () => {
  return (
    <div className={styles['container']}>
      <NavBar />
      <HeroSection />
      <FeaturesSection />
      <BannerSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Home;
