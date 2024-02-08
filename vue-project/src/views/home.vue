<template>
  <div class="home-container">
    <div class="home-header">
      <header
        data-thq="thq-navbar"
        class="navbarContainer home-navbar-interactive"
      >
        <span class="logo">STREAMIFY</span>
        <div data-thq="thq-navbar-nav" class="home-desktop-menu">
          <nav class="home-links">
            <span class="bodySmall">Home</span>
            <span class="home-nav22 bodySmall">Features</span>
            <span class="home-nav32 bodySmall">Pricing</span>
            <span class="home-nav42 bodySmall">About</span>
            <span class="home-nav52 bodySmall">Contact</span>
          </nav>
          <div class="home-buttons">
            <button class="home-login buttonFlat">Login</button>
            <button class="buttonFilled">Register</button>
          </div>
        </div>
        <div data-thq="thq-burger-menu" class="home-burger-menu">
          <svg viewBox="0 0 1024 1024" class="home-icon socialIcons">
            <path
              d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
            ></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" class="home-mobile-menu1 mobileMenu">
          <div class="home-nav">
            <div class="home-top">
              <span class="logo">STREAMIFY</span>
              <div data-thq="thq-close-menu" class="home-close-menu">
                <svg viewBox="0 0 1024 1024" class="home-icon02 socialIcons">
                  <path
                    d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                  ></path>
                </svg>
              </div>
            </div>
            <nav class="home-links1">
              <span class="home-nav121 bodySmall">Home</span>
              <span class="home-nav221 bodySmall">Features</span>
              <span class="home-nav321 bodySmall">Pricing</span>
              <span class="home-nav421 bodySmall">About</span>
              <span class="home-nav521 bodySmall">Contact</span>
            </nav>
            <div class="home-buttons1">
              <button class="buttonFlat">Login</button>
              <button class="buttonFilled">Register</button>
            </div>
          </div>
          <div>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              class="home-icon04 socialIcons"
            >
              <path
                d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
              ></path></svg
            ><svg
              viewBox="0 0 877.7142857142857 1024"
              class="home-icon06 socialIcons"
            >
              <path
                d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
              ></path></svg
            ><svg
              viewBox="0 0 602.2582857142856 1024"
              class="home-icon08 socialIcons"
            >
              <path
                d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
              ></path>
            </svg>
          </div>
        </div>
      </header>
    </div>
    <div class="home-hero">
      <div class="heroContainer home-hero1">
        <div class="home-container1">
          <h1 class="home-hero-heading heading1">Simple Streaming Platform</h1>
          <span class="home-hero-sub-heading bodyLarge">
            <span>
              <span>
                <span>Stream your favorite content anytime, anywhere</span>
                <span><span v-html="rawxmiw"></span></span>
              </span>
              <span>
                <span><span v-html="raw47xm"></span></span>
                <span><span v-html="rawqybs"></span></span>
              </span>
            </span>
            <span>
              <span>
                <span><span v-html="rawto1k"></span></span>
                <span><span v-html="rawnpq6"></span></span>
              </span>
              <span>
                <span><span v-html="rawny64"></span></span>
                <span><span v-html="raw62mm"></span></span>
              </span>
            </span>
          </span>
          <div class="home-btn-group">
            <button class="buttonFilled">Get Started</button>
            <button class="buttonFlat">Learn More →</button>
          </div>
        </div>
      </div>
    </div>
    <div class="home-features">
      <div class="featuresContainer">
        <div class="home-features1">
          <div class="home-container2">
            <span class="overline">
              <span>features</span>
              <br />
            </span>
            <h2 class="home-features-heading heading2">
              Unleash the Power of Streaming
            </h2>
            <span class="home-features-sub-heading bodyLarge">
              <span>
                <span>
                  <span>
                    Experience the future of entertainment with our cutting-edge
                    features
                  </span>
                  <span><span v-html="rawe4q0"></span></span>
                </span>
                <span>
                  <span><span v-html="rawsmai"></span></span>
                  <span><span v-html="raw5r88"></span></span>
                </span>
              </span>
              <span>
                <span>
                  <span><span v-html="rawrzgx"></span></span>
                  <span><span v-html="rawz6sr"></span></span>
                </span>
                <span>
                  <span><span v-html="rawr64s"></span></span>
                  <span><span v-html="rawl5rl"></span></span>
                </span>
              </span>
            </span>
          </div>
          <div class="home-container3">
            <feature-card
              heading="Easy-to-use Interface"
              subHeading="Intuitive and user-friendly interface for seamless navigation"
            ></feature-card>
            <feature-card
              heading="High-Quality Streaming"
              subHeading="Enjoy your favorite content in stunning HD quality"
            ></feature-card>
            <feature-card
              heading="Personalized Recommendations"
              subHeading="Discover new shows and movies tailored to your interests"
            ></feature-card>
            <feature-card
              heading="Multi-Device Support"
              subHeading="Stream on any device, anytime, anywhere"
            ></feature-card>
          </div>
        </div>
      </div>
    </div>
    <div class="home-banner">
      <div class="bannerContainer home-banner1">
        <h1 class="home-banner-heading heading2">Watch, Stream, Enjoy</h1>
        <span class="home-banner-sub-heading bodySmall">
          <span>
            <span>
              <span>
                Discover a world of entertainment with our simple streaming
                platform. Whether you&apos;re into movies, TV shows, or
                documentaries, we&apos;ve got you covered. With our user-friendly
                interface and vast library of content, you can easily find and
                stream your favorite shows and movies with just a few clicks.
              </span>
              <span><span v-html="raw2gaj"></span></span>
            </span>
            <span>
              <span><span v-html="rawp2xs"></span></span>
              <span><span v-html="rawcjb6"></span></span>
            </span>
          </span>
          <span>
            <span>
              <span><span v-html="rawq8y4"></span></span>
              <span><span v-html="rawtgt0"></span></span>
            </span>
            <span>
              <span><span v-html="rawf6b5"></span></span>
              <span><span v-html="raw4dpp"></span></span>
            </span>
          </span>
        </span>
        <button class="buttonFilled">Learn More</button>
      </div>
    </div>
    <div class="home-faq">
      <div class="faqContainer">
        <div class="home-faq1">
          <div class="home-container4">
            <span class="overline">
              <span>FAQ</span>
              <br />
            </span>
            <h2 class="home-text48 heading2">Common questions</h2>
            <span class="home-text49 bodyLarge">
              <span>Here are some of the most common questions that we get.</span>
              <br />
            </span>
          </div>
          <div class="home-container5">
            <app-question1
              answer="The streaming platform is a simple and user-friendly platform that allows you to stream your favorite movies, TV shows, and videos online."
              question="What is the streaming platform?"
            ></app-question1>
            <app-question1
              answer="You can access the streaming platform by visiting our website and creating an account. Once you have an account, you can log in and start streaming immediately."
              question="How can I access the streaming platform?"
            ></app-question1>
            <app-question1
              answer="The streaming platform is compatible with a wide range of devices, including smartphones, tablets, smart TVs, and computers. You can stream content on any device with an internet connection."
              question="What devices are supported by the streaming platform?"
            ></app-question1>
            <app-question1
              answer="Yes, there is a subscription fee to access the streaming platform. We offer different subscription plans to suit your needs and budget. You can find more information about our pricing on our website."
              question="Is there a cost to use the streaming platform?"
            ></app-question1>
            <app-question1
              answer="Yes, you can download select movies and TV shows to watch offline on supported devices. This feature is available for certain content and is subject to licensing agreements."
              question="Can I download content to watch offline?"
            ></app-question1>
          </div>
        </div>
      </div>
    </div>
    <div class="home-footer">
      <footer class="footerContainer home-footer1">
        <div class="home-container6">
          <span class="logo">STREAMIFY</span>
          <nav class="home-nav1">
            <span class="bodySmall">Home</span>
            <span class="home-nav222 bodySmall">Features</span>
            <span class="home-nav322 bodySmall">Pricing</span>
            <span class="home-nav422 bodySmall">About</span>
            <span class="home-nav522 bodySmall">Contact</span>
          </nav>
        </div>
        <div class="home-separator"></div>
        <div class="home-container7">
          <span class="bodySmall home-text52">
            © 2023 myCompany, All Rights Reserved.
          </span>
          <div class="home-icon-group1">
            <svg
              viewBox="0 0 950.8571428571428 1024"
              class="home-icon10 socialIcons"
            >
              <path
                d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
              ></path></svg
            ><svg
              viewBox="0 0 877.7142857142857 1024"
              class="home-icon12 socialIcons"
            >
              <path
                d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
              ></path></svg
            ><svg
              viewBox="0 0 602.2582857142856 1024"
              class="home-icon14 socialIcons"
            >
              <path
                d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
              ></path>
            </svg>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import FeatureCard from '../components/feature-card'
import AppQuestion1 from '../components/question1'

export default {
  name: 'Home',
  components: {
    FeatureCard,
    AppQuestion1,
  },
  data() {
    return {
      rawxmiw: ' ',
      raw47xm: ' ',
      rawqybs: ' ',
      rawto1k: ' ',
      rawnpq6: ' ',
      rawny64: ' ',
      raw62mm: ' ',
      rawe4q0: ' ',
      rawsmai: ' ',
      raw5r88: ' ',
      rawrzgx: ' ',
      rawz6sr: ' ',
      rawr64s: ' ',
      rawl5rl: ' ',
      raw2gaj: ' ',
      rawp2xs: ' ',
      rawcjb6: ' ',
      rawq8y4: ' ',
      rawtgt0: ' ',
      rawf6b5: ' ',
      raw4dpp: ' ',
    }
  },
  metaInfo: {
    title: 'Spotless Hungry Crocodile',
  },
}
</script>

<style scoped>
.home-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.home-header {
  width: 100%;
  display: flex;
  z-index: 100;
  position: fixed;
  align-items: center;
  flex-direction: column;
  background-color: var(--dl-color-gray-white);
}
.home-desktop-menu {
  flex: 1;
  display: flex;
  justify-content: space-between;
}
.home-links {
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.home-nav22 {
  margin-left: var(--dl-space-space-unit);
}
.home-nav32 {
  margin-left: var(--dl-space-space-unit);
}
.home-nav42 {
  margin-left: var(--dl-space-space-unit);
}
.home-nav52 {
  margin-left: var(--dl-space-space-unit);
}
.home-buttons {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.home-login {
  margin-right: 32px;
}
.home-burger-menu {
  display: none;
}
.home-icon {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}
.home-mobile-menu1 {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  display: none;
  padding: 32px;
  z-index: 100;
  position: absolute;
  flex-direction: column;
  justify-content: space-between;
}
.home-nav {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.home-top {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-threeunits);
  justify-content: space-between;
}
.home-close-menu {
  display: flex;
  align-items: center;
  justify-content: center;
}
.home-icon02 {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}
.home-links1 {
  flex: 0 0 auto;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
}
.home-nav121 {
  margin-bottom: var(--dl-space-space-unit);
}
.home-nav221 {
  margin-bottom: var(--dl-space-space-unit);
}
.home-nav321 {
  margin-bottom: var(--dl-space-space-unit);
}
.home-nav421 {
  margin-bottom: var(--dl-space-space-unit);
}
.home-nav521 {
  margin-bottom: var(--dl-space-space-unit);
}
.home-buttons1 {
  display: flex;
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.home-icon04 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.home-icon06 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.home-icon08 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
.home-hero {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 96px;
  align-items: flex-start;
  justify-content: center;
}
.home-container1 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.home-hero-heading {
  max-width: 800px;
  text-align: center;
}
.home-hero-sub-heading {
  font-size: 18px;
  text-align: center;
}
.home-btn-group {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-items: center;
  flex-direction: row;
}
.home-features {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.home-features1 {
  gap: var(--dl-space-space-threeunits);
  width: 100%;
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  padding-top: var(--dl-space-space-fourunits);
  padding-left: var(--dl-space-space-threeunits);
  padding-right: var(--dl-space-space-threeunits);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-fourunits);
  justify-content: flex-start;
}
.home-container2 {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.home-features-heading {
  margin-bottom: var(--dl-space-space-oneandhalfunits);
}
.home-features-sub-heading {
  font-size: 18px;
  text-align: center;
}
.home-container3 {
  width: 100%;
  display: grid;
  grid-gap: var(--dl-space-space-oneandhalfunits);
  grid-template-columns: 1fr 1fr;
}
.home-banner {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.home-banner-heading {
  text-align: center;
}
.home-banner-sub-heading {
  max-width: var(--dl-size-size-maxwidth);
  margin-top: var(--dl-space-space-twounits);
  text-align: center;
  margin-bottom: var(--dl-space-space-twounits);
}
.home-faq {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.home-faq1 {
  gap: var(--dl-space-space-twounits);
  width: 100%;
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-items: flex-start;
  padding-top: var(--dl-space-space-fourunits);
  padding-left: var(--dl-space-space-threeunits);
  padding-right: var(--dl-space-space-threeunits);
  flex-direction: row;
  padding-bottom: var(--dl-space-space-fourunits);
}
.home-container4 {
  display: flex;
  max-width: 35%;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.home-text48 {
  margin-bottom: var(--dl-space-space-oneandhalfunits);
}
.home-text49 {
  text-align: left;
}
.home-container5 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.home-footer {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.home-container6 {
  gap: var(--dl-space-space-unit);
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.home-nav1 {
  flex: 0 0 auto;
  display: flex;
  margin-top: 0px;
  align-items: center;
  flex-direction: row;
}
.home-nav222 {
  margin-left: var(--dl-space-space-unit);
}
.home-nav322 {
  margin-left: var(--dl-space-space-unit);
}
.home-nav422 {
  margin-left: var(--dl-space-space-unit);
}
.home-nav522 {
  margin-left: var(--dl-space-space-unit);
}
.home-separator {
  flex: 0 0 auto;
  width: 100%;
  height: 0px;
  display: flex;
  margin-top: var(--dl-space-space-twounits);
  align-items: flex-start;
  margin-left: 0px;
  border-color: var(--dl-color-gray-900);
  border-style: solid;
  border-width: 1px;
  margin-right: 0px;
  margin-bottom: var(--dl-space-space-twounits);
  flex-direction: row;
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
}
.home-container7 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.home-icon-group1 {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.home-icon10 {
  width: 24px;
  height: 24px;
  margin-right: var(--dl-space-space-twounits);
}
.home-icon12 {
  width: 24px;
  height: 24px;
  margin-right: var(--dl-space-space-twounits);
}
.home-icon14 {
  width: 24px;
  height: 24px;
}
@media(max-width: 991px) {
  .home-hero1 {
    flex-direction: column;
  }
  .home-container1 {
    align-items: center;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-twounits);
    padding-right: 0px;
  }
  .home-hero-heading {
    text-align: center;
  }
  .home-hero-sub-heading {
    text-align: center;
    padding-left: var(--dl-space-space-threeunits);
    padding-right: var(--dl-space-space-threeunits);
  }
  .home-features-sub-heading {
    text-align: center;
    padding-left: var(--dl-space-space-threeunits);
    padding-right: var(--dl-space-space-threeunits);
  }
  .home-banner-sub-heading {
    max-width: 100%;
  }
  .home-text49 {
    text-align: center;
    padding-left: var(--dl-space-space-threeunits);
    padding-right: var(--dl-space-space-threeunits);
  }
}
@media(max-width: 767px) {
  .home-navbar-interactive {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .home-desktop-menu {
    display: none;
  }
  .home-burger-menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .home-nav121 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .home-nav221 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .home-nav321 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .home-nav421 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .home-nav521 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .home-hero1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .home-hero-sub-heading {
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }
  .home-features1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .home-features-sub-heading {
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }
  .home-container3 {
    grid-template-columns: 1fr;
  }
  .home-banner1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .home-banner-sub-heading {
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }
  .home-faq1 {
    flex-direction: column;
  }
  .home-container4 {
    max-width: 100%;
    align-self: center;
    align-items: center;
    justify-content: center;
  }
  .home-text49 {
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }
  .home-footer1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .home-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .home-container7 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  .home-text52 {
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}
@media(max-width: 479px) {
  .home-navbar-interactive {
    padding: var(--dl-space-space-unit);
  }
  .home-mobile-menu1 {
    padding: 16px;
  }
  .home-hero1 {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .home-container1 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .home-btn-group {
    flex-direction: column;
  }
  .home-features1 {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .home-banner1 {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .home-footer1 {
    padding: var(--dl-space-space-unit);
  }
  .home-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .home-container7 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  .home-text52 {
    text-align: center;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}
</style>
