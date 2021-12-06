<template>
    <div class="section rel" id="landing-section">
        <section class="section-nav">
          <div class="container">
            <div class="flex-div justify-content-btw">
              <router-link to="/#" class="section-logo-link">
                <img src="../assets/images/payrail-main-logo.svg" alt="payrail" class="section-logo">
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

        <div class="scroll-line flex-div">
          <span>Scroll</span>
          <img src="../assets/images/line-2.svg" alt="line">
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
</template>