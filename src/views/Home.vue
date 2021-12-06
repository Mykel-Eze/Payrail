<template>
  <div id="home-page-wrapper" class="rel">
    <div class="scroll-wheel-wrapper">
      <ul class="scroll-wheel wheel-item menu" id="menu-wheel">
        <li data-menuanchor="urban" class="scrolled-point urban-point">
          <a href="#urban">
            <img src="../assets/images/urban-disabled.svg" alt="urban-icon" class="disabled-icon">
            <img src="../assets/images/urban-active.svg" alt="urban-icon" class="active-icon">
          </a>
        </li>
        <li data-menuanchor="agency" class="scrolled-point agency-point">
          <a href="#agency">
            <img src="../assets/images/agency-disabled.svg" alt="agency-icon" class="disabled-icon">
            <img src="../assets/images/agency-active.svg" alt="agency-icon" class="active-icon">
          </a>
        </li>
        <li data-menuanchor="business" class="scrolled-point business-point">
          <a href="#business">
            <img src="../assets/images/business-disabled.svg" alt="business-icon" class="disabled-icon">
            <img src="../assets/images/business-active.svg" alt="business-icon" class="active-icon">
          </a>
        </li>
        <img data-menuanchor="urban" src="../assets/images/urban-circle.svg" alt="scroll-circle" class="scroll-wheel-circle urban-circle">
        <img data-menuanchor="agency" src="../assets/images/agency-circle.svg" alt="scroll-circle" class="scroll-wheel-circle agency-circle">
        <img data-menuanchor="business" src="../assets/images/business-circle.svg" alt="scroll-circle" class="scroll-wheel-circle business-circle">
        <!-- <img src="../assets/images/wheel-ring-2.svg" alt="scroll-circle" class="scroll-wheel-ring"> -->
      </ul>
      <div class="outer-dotted-wheel wheel-item">
        <img src="../assets/images/wheel-ring.png" alt="ring">
      </div>
      <div class="inner-dotted-wheel wheel-item">
        <img src="../assets/images/wheel-ring.png" alt="ring">
      </div>
      <div class="wheel-shadow wheel-item"></div>
      <div class="inner-wheel-shadow wheel-item"></div>
    </div>

    <section class="menu-indicator-wrapper">
      <div class="container">
        <ul class="menu menu-indicator">
          <li class="page-indicator urban-indicator" data-menuanchor="urban">
            <span class="indicator-bullet"></span>
            <span class="indicator-title">Payrail Urban</span>
          </li>
          <hr />
          <li class="page-indicator agency-indicator" data-menuanchor="agency">
            <span class="indicator-bullet"></span>
            <span class="indicator-title">Payrail Agency</span>
          </li>
          <hr />
          <li class="page-indicator business-indicator" data-menuanchor="business">
            <span class="indicator-bullet"></span>
            <span class="indicator-title">Payrail Business</span>
          </li>
        </ul>
      </div>
    </section>

    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section rel" id="urban-section">
        <section class="section-nav">
          <div class="container">
            <div class="flex-div justify-content-btw">
              <router-link to="/#" class="section-logo-link">
                <img src="../assets/images/urban-white.svg" alt="payrail urban" class="section-logo">
              </router-link>
              <div class="sound-and-signin flex-div">
                <button class="audio-trigger">
                  <img src="../assets/images/audio-icon-black.svg" alt="audio icon" class="audio-icon">
                </button>
                <router-link to="/#" class="flex-div">
                  <span>Sign in</span>
                  <img src="../assets/images/right-arr-white.svg" alt="right arrow" class="right-arr">
                </router-link>
              </div>
            </div>
          </div>
        </section>

        <section class="text-desc-block-wrapper">
          <div class="container">
            <router-link to="/urban" tag="div" class="text-desc-block">
              <h4 class="section-block-title">Payrail Urban</h4>
              <div class="section-desc-txt">
                Accelerating financial ease-on the go. You are confident of a better grip of your day-to-day transactions
              </div>
              <button class="visit-site-btn">Visit Site</button>
            </router-link>
          </div>
        </section>

        <div class="scroll-line flex-div">
          <span>Scroll</span>
          <img src="../assets/images/line.svg" alt="line">
        </div>

        <section class="home-footer">
          <div class="container">
            <p>
              This website uses <a href="/#" target="_blank" rel="noopener noreferrer"><u>Cookies ↗</u></a>  
              We use cookies to personalise content and ads, to provide social media features and to analyse our traffic. 
              The content on this website does not constitute a complete description of Payrail or Angala Fintech services. 
              By using this website, you accept our <a href="/#" target="_blank" rel="noopener noreferrer">Terms of Use</a> 
              and <a href="/#">Privacy Policy</a>.
            </p>
            <p class="copyright-p">
              © Angala Financial Technologies Limited. All Rights Reserved.
            </p>
          </div>
        </section>
      </div>

      <div class="section rel" id="agency-section">
        <section class="section-nav">
          <div class="container">
            <div class="flex-div justify-content-btw">
              <router-link to="/#" class="section-logo-link">
                <img src="../assets/images/agency-white.svg" alt="payrail agency" class="section-logo">
              </router-link>
              <div class="sound-and-signin flex-div">
                <button class="audio-trigger">
                  <img src="../assets/images/audio-icon-black.svg" alt="audio icon" class="audio-icon">
                </button>
                <router-link to="/#" class="flex-div">
                  <span>Sign in</span>
                  <img src="../assets/images/right-arr-white.svg" alt="right arrow" class="right-arr">
                </router-link>
              </div>
            </div>
          </div>
        </section>

        <section class="text-desc-block-wrapper">
          <div class="container">
            <router-link to="/agency" tag="div" class="text-desc-block">
              <h4 class="section-block-title">Payrail Agency</h4>
              <div class="section-desc-txt">
                Accelerating financial ease-on the go. You are confident of a better grip of your day-to-day transactions
              </div>
              <button class="visit-site-btn">Visit Site</button>
            </router-link>
          </div>
        </section>

        <div class="scroll-line flex-div">
          <span>Scroll</span>
          <img src="../assets/images/line.svg" alt="line">
        </div>

        <section class="home-footer">
          <div class="container">
            <p>
              This website uses <a href="/#" target="_blank" rel="noopener noreferrer"><u>Cookies ↗</u></a>  
              We use cookies to personalise content and ads, to provide social media features and to analyse our traffic. 
              The content on this website does not constitute a complete description of Payrail or Angala Fintech services. 
              By using this website, you accept our <a href="/#" target="_blank" rel="noopener noreferrer">Terms of Use</a> 
              and <a href="/#">Privacy Policy</a>.
            </p>
            <p class="copyright-p">
              © Angala Financial Technologies Limited. All Rights Reserved.
            </p>
          </div>
        </section>
      </div>

      <div class="section rel" id="business-section">
        <section class="section-nav">
          <div class="container">
            <div class="flex-div justify-content-btw">
              <router-link to="/#" class="section-logo-link">
                <img src="../assets/images/agency-white.svg" alt="payrail agency" class="section-logo">
              </router-link>
              <div class="sound-and-signin flex-div">
                <button class="audio-trigger">
                  <img src="../assets/images/audio-icon-black.svg" alt="audio icon" class="audio-icon">
                </button>
                <router-link to="/#" class="flex-div">
                  <span>Sign in</span>
                  <img src="../assets/images/right-arr-white.svg" alt="right arrow" class="right-arr">
                </router-link>
              </div>
            </div>
          </div>
        </section>

        <section class="text-desc-block-wrapper">
          <div class="container">
            <router-link to="/business" tag="div" class="text-desc-block">
              <h4 class="section-block-title">Payrail Business</h4>
              <div class="section-desc-txt">
                Accelerating financial ease-on the go. You are confident of a better grip of your day-to-day transactions
              </div>
              <button class="visit-site-btn">Visit Site</button>
            </router-link>
          </div>
        </section>

        <div class="scroll-line flex-div">
          <span>Scroll</span>
          <img src="../assets/images/line.svg" alt="line">
        </div>

        <section class="home-footer">
          <div class="container">
            <p>
              This website uses <a href="/#" target="_blank" rel="noopener noreferrer"><u>Cookies ↗</u></a>  
              We use cookies to personalise content and ads, to provide social media features and to analyse our traffic. 
              The content on this website does not constitute a complete description of Payrail or Angala Fintech services. 
              By using this website, you accept our <a href="/#" target="_blank" rel="noopener noreferrer">Terms of Use</a> 
              and <a href="/#">Privacy Policy</a>.
            </p>
            <p class="copyright-p">
              © Angala Financial Technologies Limited. All Rights Reserved.
            </p>
          </div>
        </section>
      </div>
    </full-page>
  </div>
</template>

<script>
// import $ from 'jquery';
export default {
  name: 'Home',
  components: {},
    data() {
      return {
        options: {
          scrollOverflow: true,
          scrollBar: false,
          menu: '.menu',
          navigation: false,
          anchors: ['urban', 'agency', 'business'],
          sectionsColor: ['#1c1c1c']
        },
      }
    },
  mounted() {
  }
}
</script>

<style src="../assets/css/home.css" scoped></style>

