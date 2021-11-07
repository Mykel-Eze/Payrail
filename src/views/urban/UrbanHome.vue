<template>
    <div class="contents" id="urban-contents">
        <!--==== Home Section  ====-->
        <section id="home" class="scrollspy rel">
            <div class="lottie-bg">
                <lottie-vue-player :src="`https://assets10.lottiefiles.com/packages/lf20_wfzj5a5q.json`"
                    style="width:100%; height:100vh"
                >
                </lottie-vue-player>
            </div>
            <div class="row rel">
                <div class="container home-container">
                    <div class="col s12 l6" id="home-txt-side">
                        <div class="home-minor-title">Bank for everyone</div>
                        <h1 class="home-title"> 
                            Accelerating financial ease-on the go
                        </h1>
                        <div class="subscribe-form-wrapper">
                            <form action="#" id="subscribe-form" onSubmit="SaveEmails">
                                <div class="flex-div input-field">
                                    <input id="subscriber-email" placeholder="Your Email..." type="email" required />
                                    <!-- <InputHints id="subscriber-email" placeholders={[
                                            'Your Email...',
                                            'aishat@yahoo.com',
                                            'mykel@gmail.com',
                                            'tobi@yahoo.com',
                                            'amaka@live.com'
                                    ]} type="email" required 
                                    /> -->

                                    <button class="btn subscribe-submit pry-bg">
                                        <span class="visible-text-m-l">Get Started</span>
                                        <!-- {/* <img src="../../assets/images/right-arrow.png" alt="right-arrow" class="hidden-text-m-l" /> */} -->
                                    </button>
                                </div>
                            </form>
                            <div id="subscribe-message" class="hidden">
                                <div class="dummy-positioning d-flex">
                                    <div class="success-icon">
                                        <div class="success-icon__tip"></div>
                                        <div class="success-icon__long"></div>
                                    </div>
                                </div>
                                <h5 class="pry-color">Email Submitted Successfully</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col s12 m8 offset-m2 l6 offset-l0 rel" id="home-img-side">
                        <!-- <div class="phone-hand-img-div">
                            <img src="../../assets/images/hand-phone-2a.png" alt="phone and hand" class="phone-hand" />
                            <img src="../../assets/images/bg-strokes.png" alt="strokes" class="bg-strokes" />
                        </div> -->
                        <div>
                            <lottie-vue-player :src="`https://assets10.lottiefiles.com/packages/lf20_l0galv9r.json`"
                                style="width:100%; height:600px"
                                :background= "options.backgroundColor"
                                :speed="options.speed"
                            >
                            </lottie-vue-player>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--==== end of Home Section  ====-->

        <!--==== Middle-section-1  ====-->
        <section id="mid-sect-1" class="mid-sects">
            <div class="row">
                <div class="container">
                    <div class="mid-sect-wrapper center col s12 m10 offset-m1 l6 offset-l3">
                        <h3 class="sect-title">When you <br/> Choose Payrail</h3>
                        <p class="mid-sect-p rel">
                            You are confident of a better grip of your day-to-day transactions, savings and investments.  
                            We help you manage every bit of your finances on the go - following the best money management 
                            practices.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <!--==== end of Middle-section-1  ====-->

        <!--==== Section-content-1  ====-->
        <section id="sect-1" class="scrollspy">
            <div class="row">
                <div class="container">
                    <div class="col s12 m10 offset-m1 l6 offset-l3 center hidden-xs-sm pad0-xs rel benefits-img-container">
                        <img src="../../assets/images/benefits-1.png" alt="benefits-images" class="benefits-img n-img-1" id="benefits-1"  data-aos="fade-right" />
                        <img src="../../assets/images/benefits-1a.png" alt="benefits-images" class="benefits-img n-img-2" id="benefits-1a"  data-aos="fade-right" />
                        <img src="../../assets/images/benefits-2.png" alt="benefits-images" class="benefits-img n-img-1" id="benefits-2"  data-aos="fade-left" />
                        <img src="../../assets/images/benefits-2a.png" alt="benefits-images" class="benefits-img n-img-2" id="benefits-2a"  data-aos="fade-left" />
                        <img src="../../assets/images/benefits-3.png" alt="benefits-images" class="benefits-img n-img-1" id="benefits-3"  data-aos="fade-up-right" />
                        <img src="../../assets/images/benefits-3a.png" alt="benefits-images" class="benefits-img n-img-2" id="benefits-3a"  data-aos="fade-up-right" />
                        <img src="../../assets/images/benefits-4.png" alt="benefits-images" class="benefits-img n-img-1" id="benefits-4"  data-aos="fade-up-left" />
                        <img src="../../assets/images/benefits-4a.png" alt="benefits-images" class="benefits-img n-img-2" id="benefits-4a"  data-aos="fade-up-left" />
                        <!-- <img src="../../assets/images/mobile-phone-a.png" alt="phone" class="center-phone"  data-aos="fade-up" /> -->
                        <div class="center-phone-div"  data-aos="fade-up">
                            <img src="../../assets/images/mobile-phone-a.png" alt="phone" class="center-phone" style="opacity: 0 !important" />
                            <lottie-vue-player :src="`https://assets10.lottiefiles.com/packages/lf20_fkz6avbc.json`"
                                style="width:100%; height:600px"
                                :background= "options.backgroundColor"
                                :speed="options.speed"
                                id="lottie-benefit-1"
                                class="lottie-benefit"
                            >
                            </lottie-vue-player>
                            <lottie-vue-player :src="`https://assets10.lottiefiles.com/packages/lf20_1sty8jtu.json`"
                                style="width:100%; height:600px"
                                :background= "options.backgroundColor"
                                :speed="options.speed"
                                id="lottie-benefit-2"
                                class="lottie-benefit"
                            >
                            </lottie-vue-player>
                            <lottie-vue-player :src="`https://assets10.lottiefiles.com/packages/lf20_vcp9lcll.json`"
                                style="width:100%; height:600px"
                                :background= "options.backgroundColor"
                                :speed="options.speed"
                                id="lottie-benefit-3"
                                class="lottie-benefit"
                            >
                            </lottie-vue-player>
                            <lottie-vue-player :src="`https://assets10.lottiefiles.com/packages/lf20_r0u55xa5.json`"
                                style="width:100%; height:600px"
                                :background= "options.backgroundColor"
                                :speed="options.speed"
                                id="lottie-benefit-4"
                                class="lottie-benefit"
                            >
                            </lottie-vue-player>
                        </div>
                    </div>
                    <div class="col s12 visible-xs-sm pad0-xs benefits-img-container center">
                        <img src="../../assets/images/full-benefits-img.png" alt="section-img" class="sect-img n-img-1" data-aos="fade-up" />
                        <img src="../../assets/images/full-benefits-img-2.png" alt="section-img" class="sect-img n-img-2" data-aos="fade-up" />
                    </div>
                </div>
            </div>
        </section>
        <!--==== end of Section-content-1  ====-->

        <!--==== Section-content-2  ====-->
        <section id="sect-2">
            <div class="row rel">
                <div class="container">
                    <div class="col s12 m8 offset-m2 l6 offset-l3 center sect-title-holder">
                        <h3 class="sect-title">Thrift Savings <br class="visible-xs"/> 
                            ( <span id="changing-text">
                                àjo
                            </span> ) 
                            <!-- <TextLoop>
                                    <span>àjo</span>
                                    <span>isusu</span>
                                    <span>adashe</span>
                                </TextLoop> -->
                        </h3>
                        <p class="sect-desc">
                            An easy, stress free way to save alongside people you trust. Amp up your savings and achieve 
                            your financial goals while saving with friends.
                        </p>
                    </div>
                    <div class="col s12 pad0 flex-tab-view">
                        <div class="col s12 l8 hidden-xs-sm">
                            <img src="../../assets/images/phone-and-people-2.png" alt="phone and people" class="full-width sect-img" data-aos="fade-up" />
                        </div>
                        <div class="col s12 l8 visible-xs-sm tab-small-img-wrapper">
                            <img src="../../assets/images/phone-and-people.png" alt="phone and people" class="full-width sect-img" data-aos="fade-up" />
                        </div>
                        <div class="col s12 l4">
                            <div class="sect1-list">
                                <div class="sect1-list-block">
                                    <h4 class="slb-title">Convenient</h4>
                                    <p class="slb-content">
                                        You will never have to chase another uncooperative group member, worry about late 
                                        payments or deal with complicated paperwork. We do all the heavy lifting for you. 
                                    </p>
                                </div>
                                <div class="sect1-list-block">
                                    <h4 class="slb-title">Time saving</h4>
                                    <p class="slb-content">
                                        Time is free but your time is priceless. Once you've lost it, you can never get it back. 
                                        Payrail will handle all savings payments  and divisions while you maximise your time 
                                        doing other productive things.
                                    </p>
                                </div>
                                <div class="sect1-list-block">
                                    <h4 class="slb-title">Secure</h4>
                                    <p class="slb-content">
                                    We are committed to keeping your money safe and protecting your account. Our word is our bond 
                                    and with Payroll, you will never have to worry about the status of your funds.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--==== end of Section-content-2  ====-->

        <!--==== Section-content-2  ====-->
        <section id="sect-2-a">
            <div class="row rel">
                <div class="container flex-div-coloumn-xs">
                        <div class="col s12 l6">
                        <div class="col s12 l8 offset-l2 pad0">
                            <div class="sect1-list">
                                <div class="sect1-list-block">
                                    <h3 class="sect-title">Optimized Functionality</h3>
                                    <p class="slb-content">
                                    Payrail helps you automate your subscription bills enabling 
                                    you to have a stress free and functional life.
                                    </p>
                                </div>
                                <div class="sect1-list-block">
                                    <h3 class="sect-title">Personalized Notifications</h3>
                                    <p class="slb-content">
                                    The days you got cut off from services you enjoy are long gone - 
                                    because we are here to prompt you - always. Each user gets a personalized reminder 
                                    about recurring bills like;  Dstv subscriptions, electricity bills, and every other 
                                    utility bills. 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col s12 l6 tab-small-img-wrapper">
                        <img src="../../assets/images/phone-notification.png" alt="phone notification" class="full-width sect-img" data-aos="fade-up" />
                    </div>
                </div>
            </div>
        </section>
        <!--==== end of Section-content-2  ====-->

        <!--==== Section-content-3  ====-->
        <section id="sect-3">
            <div class="row">
                <div class="container">
                    <div class="col s12 l6 tab-small-img-wrapper">
                        <img src="../../assets/images/lady-with-phone.png" alt="lady-with-phone" class="sect-img n-img-1" data-aos="fade-up" />
                        <img src="../../assets/images/lady-with-phone-a.png" alt="lady-with-phone" class="sect-img n-img-2" data-aos="fade-up" />
                    </div>
                    <div class="col s12 l6 sec-mag-down">
                        <h3 class="sect-title">Maintenance fees are no business of yours</h3>
                        <p class="mid-sect-p rel text-justify-xs">
                        We would house your account and ensure that your data and funds are well protected at all times. 
                        But at no cost whatsoever.
                        </p>
                        <ul class="sect-list sec-list-grid">
                            <li>
                                <img src="../../assets/images/tick-box.svg" alt="tick-box" class="tick-box" />
                                <span>No Minimum balance</span>
                            </li>
                            <li>
                                <img src="../../assets/images/tick-box.svg" alt="tick-box" class="tick-box" />
                                <span>No Monthly subscription</span>
                            </li>
                            <li>
                                <img src="../../assets/images/tick-box.svg" alt="tick-box" class="tick-box" />
                                <span>No Transaction fees</span>
                            </li>
                            <li>
                                <img src="../../assets/images/tick-box.svg" alt="tick-box" class="tick-box" />
                                <span>No Account opening fees</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <!--==== end of Section-content-3  ====-->

        <!--==== Section-content-4  ====-->
        <section id="sect-4">
            <div class="row">
                <div class="container sect-flex-align">
                    <div class="col s12 l8 sec-mag-down">
                        <h3 class="sect-title">Safety of your money our priority.</h3>
                        <ul class="sect-list sec-list-grid">
                            <li>
                                <div class="sect-list-title-div">
                                    <img src="../../assets/images/check-red.svg" alt="check" />
                                    <span>Bank-grade Security</span>
                                </div>
                                <p class="slb-content text-justify">
                                    All cards and bank data are encrypted to prevent unauthorised access to sensitive 
                                    data and our payment processors are PCI-DSS compliant to ensure security of all your 
                                    electronic information. 
                                </p>
                            </li>
                            <li>
                                <div class="sect-list-title-div">
                                    <img src="../../assets/images/check-red.svg" alt="check" />
                                    <span>Regulatory Compliance</span>
                                </div>
                                <p class="slb-content text-justify">
                                    We are a duly registered fund managing company with the Securities and Exchange Commission 
                                    (SEC) of Nigeria and our financial activities are in full compliance with regulatory 
                                    requirements.
                                </p>
                            </li>
                            <li>
                                <div class="sect-list-title-div">
                                    <img src="../../assets/images/check-red.svg" alt="check" />
                                    <span>Two-Factor Authentication</span>
                                </div>
                                <p class="slb-content text-justify">
                                    You are more than just a username and password to us which is key transactions pass through 
                                    the 2FA verification process on Payrail. 
                                </p>
                            </li>
                            <li>
                                <div class="sect-list-title-div">
                                    <img src="../../assets/images/check-red.svg" alt="check" />
                                    <span>Best Insurance Product</span>
                                </div>
                                <p class="slb-content text-justify">
                                All the insurance options listed on Payrail, are carefully screened, managed by Angala Insurtech, 
                                registered with the SEC, and has a standard third-party custodian structure.
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div class="col s12 l4 safe-img-wrapper tab-small-img-wrapper">
                        <img src="../../assets/images/safe-img.png" alt="safe-img" class="sect-img n-img-1" data-aos="fade-up" />
                        <img src="../../assets/images/safe-img-2.png" alt="safe-img" class="sect-img n-img-2" data-aos="fade-up" />
                    </div>
                </div>
            </div>
        </section>
        <!--==== end of Section-content-4  ====-->

        <!--==== Debit Card ====-->
        <section id="debit-cards">
            <div class="row">
                <div class="container">
                    <div class="col s12 m10 offset-m1 pad0">
                        <div class="col s12 m6 hidden-xs">
                            <img src="../../assets/images/urban-card-hand2.png" alt="payrail debit card" class="full-width payrail-card-hand" data-aos="fade-up" />
                        </div>
                        <div class="col s12 m6">
                            <div class="debit-cards-txt-div">
                                <div class="debit-card-title">DEBIT CARD</div>
                                <div class="debit-card-txt">
                                    Instantly create virtual and physical naira cards to handle your all your payments
                                </div>
                            </div>
                        </div>
                        <div class="col s12 m6 visible-xs">
                            <img src="../../assets/images/urban-card-hand2.png" alt="payrail debit card" class="full-width payrail-card-hand" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--==== end of Debit Card ====-->

        <!--==== Join-Section ====-->
        <section id="join-payrail">
            <div class="row">
                <div class="container">
                    <div class="black-bg black-wrapper rel">
                        <div class="col s12 m10 offset-m1 pad0-xs join-sub-wrapper rel">
                            <div class="col s12 m7">
                                <h4 class="sect-title white-txt">
                                    Sign up to experience financial ease
                                </h4> 
                            </div>
                            <div class="col s12 m5">
                                <div class="app-stores-wrapper flex-div">
                                    <div class="">
                                        <button class="app-store google-store hover-scale">
                                            <img src="../../assets/images/playstore-red.svg" alt="google store" />
                                        </button>
                                    </div>
                                    <div class="">
                                        <button class="app-store apple-store hover-scale">
                                            <img src="../../assets/images/appstore-red.svg" alt="apple store" />
                                        </button>
                                    </div>
                                </div>
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--==== end of Join-Section  ====-->
    </div>
</template>

<script>
    // import M from 'materialize-css';
    import AOS from 'aos';
    import 'aos/dist/aos.css';
    import $ from 'jquery'

    export default {
        name: "UrbanHome",
        components: {},
        mounted() {
            AOS.init();

            // var elemScrollspy = document.querySelectorAll('.scrollspy');
            // M.Scrollspy.init(elemScrollspy);

            $('#benefits-1, #benefits-1a').hover(function(){
                $('.lottie-benefit').hide();
                $('#lottie-benefit-1').show();
            });
            $('#benefits-2, #benefits-2a').hover(function(){
                $('.lottie-benefit').hide();
                $('#lottie-benefit-2').show();
            });
            $('#benefits-3, #benefits-3a').hover(function(){
                $('.lottie-benefit').hide();
                $('#lottie-benefit-3').show();
            });
            $('#benefits-4, #benefits-4a').hover(function(){
                $('.lottie-benefit').hide();
                $('#lottie-benefit-4').show();
            });

            // array with texts to type in typewriter
            const dataText = [ "àjo", "isusu", "adashe"];
            
            // type one text in the typwriter
            // keeps calling itself until the text is finished
            function typeWriter(text, i, fnCallback) {
                // chekc if text isn't finished yet
                if (i < (text.length)) {
                // add next character to h1
                document.querySelector("#changing-text").innerHTML = text.substring(0, i+1);

                // wait for a while and call this function again for next character
                setTimeout(function() {
                    typeWriter(text, i + 1, fnCallback)
                }, 100);
                }
                // text finished, call callback if there is a callback function
                else if (typeof fnCallback == 'function') {
                // call callback after timeout
                setTimeout(fnCallback, 1000);
                }
            }
            // start a typewriter animation for a text in the dataText array
            function StartTextAnimation(i) {
                if (typeof dataText[i] == 'undefined'){
                    setTimeout(function() {
                    StartTextAnimation(0);
                    }, 500);
                }
                // check if dataText[i] exists
                if (i < dataText[i].length) {
                    // text exists! start typewriter animation
                    typeWriter(dataText[i], 0, function(){
                    // after callback (and whole text has been animated), start next text
                    StartTextAnimation(i + 1);
                });
                }
            }
            // start the text animation
            StartTextAnimation(0);
        },
        data() {
            return {
                options: {
                    minimizable: false,
                    playerSize: "standard",
                    backgroundColor: 'transparent',
                    speed: 1,
                    backgroundStyle: 'color',
                    theme: {
                        controlsView: "standard",
                        active: "light",
                        light: {
                            color: '#3D4852',
                            backgroundColor: '#fff',
                            opacity: '0.7',
                        },
                        dark: {
                            color: '#fff',
                            backgroundColor: '#202020',
                            opacity: '0.7',
                        }
                    }
                }
            }
        }
    }
</script>

<style>
.center-phone-div .w-full.relative {
    opacity: 1 !important;
    position: absolute;
}
/* #lottie-benefit-1 {
    display: block;
} */
.lottie-benefit {
    display: none;
}
</style>

