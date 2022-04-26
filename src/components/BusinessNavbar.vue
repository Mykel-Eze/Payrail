<template>
    <div>
        <nav class="trans-nav">
            <div class="container">
                <div class="nav-wrapper">
                    <router-link to="/" class="brand-logo" @click="scrollToTop()">
                        <img src="https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/business-logo-black.svg" alt="Payrail Urban" class="logo n-img-1" />
                        <img src="https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/business-logo-white.svg" alt="Payrail Urban" class="logo n-img-2" />
                    </router-link>

                    <ul id="nav-mobile" class="hide-on-med-and-down ul-nav">
                        <li>
                            <router-link to="/urban" class="route-link" @click="scrollToTop()">
                                <span>Urban</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/business" class="route-link active-link" @click="scrollToTop()">
                                <span>Business</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/agency" class="route-link" @click="scrollToTop()">
                                <span>Agency</span>
                            </router-link>
                        </li>
                    </ul>
        
                    <ul id="nav-mobile-2" class="right hide-on-med-and-down ul-nav">
                        <li>
                            <a href="#sect-1" class="">
                                <span>Features</span>
                            </a>
                        </li>
                        <li>
                            <a href="#sect-2" class="">
                                <span>About</span>
                            </a>
                        </li>
                        <li>
                            <a href="#sect-3" class="">
                                <span>Resources</span>
                            </a>
                        </li>
                        <li>
                            <div class="switch-container">
                                <div
                                    aria-label="Enable light theme"
                                    aria-pressed="false"
                                    type="button"
                                    id="theme-light-button"
                                    class="theme-button enabled light-mode-btn"
                                    onclick="enableTheme('light', true)"
                                >
                                    <img src="https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/light-switch.svg" alt="switch" class="mode-switch light-switch" />
                                </div>

                                <div
                                    aria-label="Enable dark theme"
                                    aria-pressed="false"
                                    type="button"
                                    id="theme-dark-button"
                                    class="theme-button dark-mode-btn"
                                    onclick="enableTheme('dark', true)"
                                >
                                    <img src="https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/dark-switch.svg" alt="switch" class="mode-switch dark-switch" />
                                </div>
                            </div>
                        </li>
                        <li>
                            <a href="https://business.payrail.co/" target="_blank">
                                <button class="nav-pry-btn black-bg btn pointer">
                                    Get Started
                                    <img src="https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/right-chevron-white.svg" alt="right-chevron" class="right-chevron" />
                                </button>
                            </a>
                        </li>
                    </ul>
                    <ul class="right dn-mobile ul-nav">
                        <li class="menu-img-wrapper">
                            <img src="https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/menu.svg" alt="menu" data-target="slide-out-2" class="menu-img sidenav-trigger n-img-1" />
                            <img src="https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/menu-2.svg" alt="menu" data-target="slide-out-2" class="menu-img sidenav-trigger n-img-2" />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <ul id="slide-out-2" class="sidenav">
            <div class="close-sidenav-div">
                <button class="sidenav-close">
                    <img src="https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/close-black.svg" alt="close side-nav" class="n-img-1" />
                    <img src="https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/close-orange.svg" alt="close side-nav" class="n-img-2" />
                </button>
            </div>
            <li class="big-navg-link">
                <router-link to="/urban" class="route-link sidenav-close" @click="scrollToTop()">
                    <span>Urban</span>
                </router-link>
            </li>
            <li class="big-navg-link">
                <router-link to="/business" class="route-link sidenav-close active-link" @click="scrollToTop()">
                    <span>Business</span>
                </router-link>
            </li>
            <li class="big-navg-link">
                <router-link to="/agency" class="route-link sidenav-close" @click="scrollToTop()">
                    <span>Agency</span>
                </router-link>
            </li>
            <li class="divider-li">
                <hr class="divider" />
            </li>
            <li>
                <a href="/" class="sidenav-close">Features</a>
            </li>
            <li>
                <a href="/" class="sidenav-close">About</a>
            </li>
            <li>
                <a href="/" class="sidenav-close">Resources</a>
            </li>
            <li>
                <a href="/" class="sidenav-close">FAQs</a>
            </li>
            <li>
                <a href="/" class="sidenav-close">Blogs</a>
            </li>
            <div class="switch-container-mobile">
                <div
                    aria-label="Enable light theme"
                    aria-pressed="false"
                    type="button"
                    id="theme-light-button"
                    class="theme-button enabled light-mode-btn"
                    onclick="enableTheme('light', true)"
                >
                    <img src="https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/light-switch.svg" alt="switch" class="mode-switch light-switch" />
                </div>

                <div
                    aria-label="Enable dark theme"
                    aria-pressed="false"
                    type="button"
                    id="theme-dark-button"
                    class="theme-button dark-mode-btn"
                    onclick="enableTheme('dark', true)"
                >
                    <img src="https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/dark-switch.svg" alt="switch" class="mode-switch dark-switch" />
                </div>
            </div>
            <div class="appstore-container-mobile andriod-device">
                <a class="download-link playstore-link" href="/" target="_blank" rel="noopener noreferrer">
                    <img src="https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/playstore-mobile-black3.svg" alt="playstore" class="download-link-img n-img-1" />
                    <img src="https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/playstore-mobile-white3.svg" alt="playstore" class="download-link-img n-img-2" />
                </a>
            </div>
            <div class="appstore-container-mobile ios-device">
                <a class="download-link appstore-link" href="/" target="_blank" rel="noopener noreferrer">
                    <img src="https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/appstore-mobile-black3.svg" alt="appstore" class="download-link-img n-img-1" />
                    <img src="https://websites-images-1.s3.us-east-2.amazonaws.com/payrail-images/images/appstore-mobile-white3.svg" alt="appstore" class="download-link-img n-img-2" />
                </a>
            </div>
        </ul>
    </div>
</template>

<script>
import $ from 'jquery'
import M from 'materialize-css';
export default {
    name: "BusinessNavbar",
    mounted() {
        var elemSidenav = document.querySelector('#slide-out-2');
        M.Sidenav.init(elemSidenav);

        if(!$(window).scrollTop()) { //abuse 0 == false :)
            $('nav.trans-nav').removeClass("scrolled-nav");
        } else {
            $('nav.trans-nav').addClass("scrolled-nav");
        }

         /**
         * Determine the mobile operating system.
         * This function returns one of 'iOS', 'Android', 'Windows Phone', or 'unknown'.
         *
         * @returns {String}
         */
            function getMobileOperatingSystem() {
                let userAgent = navigator.userAgent || navigator.vendor || window.opera;

                // Windows Phone must come first because its UA also contains "Android"
                if (/windows phone/i.test(userAgent)) {
                    return "Windows Phone";
                }

                if (/android/i.test(userAgent)) {
                    return "Android";
                }

                // iOS detection from: http://stackoverflow.com/a/9039885/177710
                if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
                    return "iOS";
                }

                return "unknown";
            }

            if((getMobileOperatingSystem() === "unknown") || (getMobileOperatingSystem() === "Windows Phone")) {
                document.querySelectorAll('.unknown-device').forEach(item => {
                    item.style.display = "block"
                })
            }
            else if(getMobileOperatingSystem() === "iOS") {
                document.querySelectorAll('.ios-device').forEach(item => {
                    item.style.display = "block"
                });
            }
            else {  
                document.querySelectorAll('.andriod-device').forEach(item => {
                    item.style.display = "block"
                })
            } 
            // console.log(getMobileOperatingSystem())
    },
    methods:{
        scrollToTop() {
            window.scrollTo(0, 0);
        }
    }
}
</script>

<style scoped src="../assets/css/navbar.css"></style>

<style scoped>
button.nav-pry-btn.black-bg.btn {
    background-color: var(--tert-color) !important;
    color: white !important;
    border-color: var(--tert-color) !important;
}
</style>