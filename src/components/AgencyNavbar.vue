<template>
    <div>
        <nav class="trans-nav">
            <div class="container">
                <div class="nav-wrapper">
                    <router-link to="/" class="brand-logo" @click="scrollToTop()">
                        <img src="../assets/images/payrail-agency-logo-white-2.png" alt="Payrail Agency" class="logo n-img-2" />
                        <img src="../assets/images/payrail-agency-logo-black.svg" alt="Payrail Agency" class="logo n-img-1" />
                    </router-link>

                    <ul id="nav-mobile" class="hide-on-med-and-down ul-nav">
                        <li>
                            <router-link to="/urban" class="route-link" @click="scrollToTop()">
                                <span>Urban</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/business" class="route-link" @click="scrollToTop()">
                                <span>Business</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/agency" class="route-link active-link" @click="scrollToTop()">
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
                                    <img src="../assets/images/light-switch.svg" alt="switch" class="mode-switch light-switch" />
                                </div>

                                <div
                                    aria-label="Enable dark theme"
                                    aria-pressed="false"
                                    type="button"
                                    id="theme-dark-button"
                                    class="theme-button dark-mode-btn"
                                    onclick="enableTheme('dark', true)"
                                >
                                    <img src="../assets/images/dark-switch.svg" alt="switch" class="mode-switch dark-switch" />
                                </div>
                            </div>
                        </li>
                        <li>
                            <button class="nav-pry-btn black-bg btn pointer">
                                Get the App 
                                <img src="../assets/images/right-chevron.svg" alt="right-chevron" class="n-img-1 right-chevron" />
                                <img src="../assets/images/right-chevron-black.svg" alt="right-chevron" class="n-img-2 right-chevron" />
                            </button>
                        </li>
                    </ul>
                    <ul class="right dn-mobile ul-nav">
                        <li class="menu-img-wrapper">
                            <img src="../assets/images/menu.svg" alt="menu" data-target="slide-out" class="menu-img sidenav-trigger n-img-1" />
                            <img src="../assets/images/menu-2.svg" alt="menu" data-target="slide-out" class="menu-img sidenav-trigger n-img-2" />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <ul id="slide-out" class="sidenav">
            <div class="close-sidenav-div">
                <button class="sidenav-close">
                    <img src="../assets/images/close-black.svg" alt="close side-nav" class="n-img-1" />
                    <img src="../assets/images/close-yellow.svg" alt="close side-nav" class="n-img-2" />
                </button>
            </div>
            <li class="big-navg-link">
                <router-link to="/urban" class="route-link sidenav-close" @click="scrollToTop()">
                    <span>Urban</span>
                </router-link>
            </li>
            <li class="big-navg-link">
                <router-link to="/business" class="route-link sidenav-close" @click="scrollToTop()">
                    <span>Business</span>
                </router-link>
            </li>
            <li class="big-navg-link">
                <router-link to="/agency" class="route-link sidenav-close active-link" @click="scrollToTop()">
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
                    <img src="../assets/images/light-switch.svg" alt="switch" class="mode-switch light-switch" />
                </div>

                <div
                    aria-label="Enable dark theme"
                    aria-pressed="false"
                    type="button"
                    id="theme-dark-button"
                    class="theme-button dark-mode-btn"
                    onclick="enableTheme('dark', true)"
                >
                    <img src="../assets/images/dark-switch.svg" alt="switch" class="mode-switch dark-switch" />
                </div>
            </div>
            <div class="appstore-container-mobile andriod-device">
                <a class="download-link playstore-link" href="/" target="_blank" rel="noopener noreferrer">
                    <img src="../assets/images/playstore-mobile-black.svg" alt="playstore" class="download-link-img n-img-1" />
                    <img src="../assets/images/playstore-mobile-white.svg" alt="playstore" class="download-link-img n-img-2" />
                </a>
            </div>
            <div class="appstore-container-mobile ios-device">
                <a class="download-link appstore-link" href="/" target="_blank" rel="noopener noreferrer">
                    <img src="../assets/images/appstore-mobile-black.svg" alt="appstore" class="download-link-img n-img-1" />
                    <img src="../assets/images/appstore-mobile-white.svg" alt="appstore" class="download-link-img n-img-2" />
                </a>
            </div>
        </ul>
    </div>
</template>

<script>
import $ from 'jquery'
import M from 'materialize-css';
export default {
    name: "AgencyNavbar",
    mounted() {
        var elemSidenav = document.querySelector('#slide-out');
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

<style src="../assets/css/navbar.css"></style>
<style scoped src="../assets/css/navbar.css"></style>

<style scoped>
@media(max-width: 992px) {
    nav.scrolled-nav a.brand-logo img {
        top: -4px;
    }
}
</style>