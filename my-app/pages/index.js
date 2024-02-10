// Represents the home (root) page of the application
import React from 'react'
import Head from 'next/head'

import HomeHeader from './HomeHeader.js';
import HomeHero from './HomeHero.js';
import HomeFeatures from './HomeFeatures.js';
import HomeFAQ from './HomeFAQ.js';
import HomeBanner from './HomeBanner.js';
import Footer from './Footer.js';

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Streamify</title>
        </Head>
        <HomeHeader />
        <HomeHero />
        <HomeFeatures />
        <HomeFAQ />
        <HomeBanner />
        <Footer />
      </div>
    </>
  )
}

export default Home
