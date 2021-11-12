<template>
    <div class="contents" id="business-contents">
        <!--==== Home Section  ====-->
        <section id="home" class="scrollspy">
            <div class="row rel">
                <div class="col s12 l6" id="home-txt-side">
                    <div class="home-minor-title">Simplifying modern commerce</div>
                    <h1 class="home-title"> Helping solopreneurs and small businesses grow   </h1>
                    <p class="home-desc-txt">
                        who want an all-inclusive <span class="pry-color">banking service that works.</span>
                    </p>
                    <div class="subscribe-form-wrapper">
                        <form action="#" id="subscribe-form" onSubmit="SaveEmails">
                            <div class="flex-div input-field">
                                <input id="subscriber-email" placeholder="Your Email..." type="email" required />

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
                <div class="container home-container rel">
                    <!-- <div>
                        <img src="../../assets/images/business-home-banner.png" alt="business-home-banner" class="business-home-banner">
                    </div> -->
                    <!-- <div class="col s12 m8 offset-m2 l6 offset-l0 rel" id="home-img-side">
                        <div class="phone-card-imgs hidden-xs">
                            <img src="../../assets/images/phone-1.png" alt="phone 1" class="full-width pci-img" id="p-img-1" />
                            <img src="../../assets/images/agency-card.png" alt="card" class="full-width pci-img" id="p-img-2" />
                            <img src="../../assets/images/phone-2a.png" alt="phone 2" class="full-width pci-img" id="p-img-3" />
                        </div>
                        <div class="visible-xs">
                            <img src="../../assets/images/landing-section-images-2.png" alt="phone and hand" class="full-width" />
                        </div>
                    </div> -->
                </div>
            </div>
        </section>
        <!--==== end of Home Section  ====-->

        <!--==== Integration-Description-Section  ====-->
        <section id="integration-desc-section" class="section scrollspy">
            <div class="row">
                <div class="container">
                    <div class="mid-sect-wrapper col s12">
                        <div class="col s12 m10 offset-m1 l6 offset-l3 pad0 center sect-heading">
                            <hr class="sect-top-marker" />
                            <h4 class="section-title center">One integration, many possibilities</h4>
                            <span class="sect-title-desc">
                                Create your account with Payrail business and get it running in as little as 10 minutes
                            </span>
                        </div>

                        <div class="col s12 pad0 sect-contents">
                            <div class="col s12 l6 int-img-side text-center-xs" data-aos="fade-up">
                                <img src="../../assets/images/int-img-1.png" alt="dashboard-laptop" class="int-img active-int-img">
                                <img src="../../assets/images/int-img-2.png" alt="dashboard-laptop" class="int-img">
                                <img src="../../assets/images/int-img-3.png" alt="dashboard-laptop" class="int-img">
                                <img src="../../assets/images/int-img-4.png" alt="dashboard-laptop" class="int-img">
                            </div>

                            <div class="col s12 l6 int-txt-side">
                                <ul class="int-txt-indicator">
                                    <li class="txt-indicator-block active-indicator-block">
                                        <h5 class="indicator-title">You want data? You’ll have it</h5>
                                        <span class="indicator-text">
                                            We provide an unrivalled transparent view of your payments data and insights that helps your business strive. 
                                        </span>
                                    </li>
                                    <li class="txt-indicator-block">
                                        <h5 class="indicator-title">Payment gateway</h5>
                                        <span class="indicator-text">
                                            We do not discriminate against credit cards and we accept payments in many currencies.  
                                        </span>
                                    </li>
                                    <li class="txt-indicator-block">
                                        <h5 class="indicator-title">Whatever your business, you need cash</h5>
                                        <span class="indicator-text">
                                            Cash is the fuel that powers your business. Let’s make it easier to keep it flowing.
                                        </span>
                                    </li>
                                    <li class="txt-indicator-block">
                                        <h5 class="indicator-title">Time Wasted = zero </h5>
                                        <span class="indicator-text">
                                            The recurring payments and subscription-based payment plans ensure that you drive revenue and expand effortlessly.  
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--==== end of Integration-Description-Section  ====-->

        <!--==== Protect-Funds-Section  ====-->
        <section id="protect-funds" class="section scrollspy">
            <div class="row">
                <div class="container">
                    <div class="col s12 pad0 pf-flex-div">
                        <div class="col s12 m6" id="pf-txt-side">
                            <h4 class="section-title">We will protect your funds</h4>
                            <p class="sect-title-desc">
                                Every payment made on our platform is 100% secure, far above industry standard. 
                                We also have an advanced fraud protection system in place.
                            </p>
                        </div>
                        <div class="col s12 m6 right-align text-center-xs">
                            <img src="../../assets/images/bizness-safe.png" alt="section-img" class="sect-img pf-safe-img" data-aos="fade-up" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--==== end of Protect-Funds-Section  ====-->

        <!--==== Gallery-Section  ====-->
        <section id="gallery-section" class="section scrollspy">
            <div class="row">
                <div class="container*">
                    <div class="mid-sect-wrapper col s12 pad0">
                        <div class="col s12 m10 offset-m1 l6 offset-l3 center sect-heading">
                            <hr class="sect-top-marker" />
                            <h4 class="section-title center">For today’s forward thinking businesses</h4>
                            <span class="sect-title-desc">
                                Whether you are a startup or the most experienced solopreneur, Payrail business has a solution for you.
                            </span>
                        </div>

                        <div class="col s12 pad0 sect-contents marquee-content">
                            <div class="marquee-item">
                                <img src="../../assets/images/full-img-gallery.png" alt="full-img-gallery" class="full-width" data-aos="fade-up">
                            </div>
                            <div class="marquee-item">
                                <img src="../../assets/images/full-img-gallery.png" alt="full-img-gallery" class="full-width" data-aos="fade-up">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--==== end of Gallery-Section  ====-->

        <!--==== Support-Section  ====-->
        <section id="support-section" class="section scrollspy">
            <div class="row">
                <div class="container">
                    <div class="col s12 m10 offset-m1 l6 offset-l3 pad0 center sect-heading">
                        <hr class="sect-top-marker" />
                        <h4 class="section-title center">Over 5000 businesses trust Payrail</h4>
                        <span class="sect-title-desc">
                            Business to process millions of secure payments daily. What about yours?
                        </span>
                    </div>
                    <div class="col s12 pad0 sect-contents pf-flex-div">
                        <div class="col s12 m6 text-center-xs">
                            <img src="../../assets/images/chat-list-img.png" alt="chat-img" class="sect-img pf-safe-img" data-aos="fade-up" />
                        </div>
                        <div class="col s12 m6">
                            <h4 class="section-sub-title">We offer a wide range of products that any business can benefit from. </h4>
                            <p class="sect-title-desc">
                                Our team of payment experts are available to help each step of the way.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--==== end of Support-Section  ====-->

        <!--==== Customers-Testimonies-Section  ====-->
        <section id="testimonies-section" class="scrollspy">
            <div class="row">
                <div class="container">
                    <div class="carousel testimonies-slider-1 hidden-xs">
                        <div class="carousel-item">
                            <div class="testimony-wrapper">
                                <div class="testimony-block">
                                    <div class="review-container">
                                        <p>
                                            "My staff cannot still believe how easy it is for my customers to make payments. 
                                            Before now, we were limited to selling in only Nigeria but now we have some of our best 
                                            buying customers in Kenya and South Africa."
                                        </p>
                                    </div>
                                    <div class="reviewer-details">
                                        <div class="reviewer-name">
                                            <b>Olabisi Olayemi</b> <br />
                                            <span>Founder, Seamwears Ltd </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="testimony-block">
                                    <div class="review-container">
                                        <p>
                                            "I thought it was all hype when I was told I could have my account running in 10 minutes. 
                                            But that was exactly what happened. There was no back and forth. There was no fuss. And 
                                            now, my business’ cash flow has never been better." 
                                        </p>
                                    </div>
                                    <div class="reviewer-details">
                                        <div class="reviewer-name">
                                            <b>Shittu Ogundare</b> <br />
                                            <span>CEO, Blackman Shoes </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="testimony-wrapper">
                                <div class="testimony-block">
                                    <div class="review-container">
                                        <p>
                                            "It’s the interface for me, actually. It is so easy to use and very informative and I 
                                            believe this is one of the reasons why transactions do not take a lot of time." 
                                        </p>
                                    </div>
                                    <div class="reviewer-details">
                                        <div class="reviewer-name">
                                            <b>Karen Johson</b> <br />
                                            <span>CEO, Cheekybeauty </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="testimony-block">
                                    <div class="review-container">
                                        <p>
                                            "My staff cannot still believe how easy it is for my customers to make payments. 
                                            Before now, we were limited to selling in only Nigeria but now we have some of our best 
                                            buying customers in Kenya and South Africa."
                                        </p>
                                    </div>
                                    <div class="reviewer-details">
                                        <div class="reviewer-name">
                                            <b>Olabisi Olayemi</b> <br />
                                            <span>Founder, Seamwears Ltd </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel testimonies-slider-2 visible-xs">
                        <div class="carousel-item">
                            <div class="testimony-block">
                                <div class="review-container">
                                    <p>
                                        "My staff cannot still believe how easy it is for my customers to make payments. 
                                        Before now, we were limited to selling in only Nigeria but now we have some of our best 
                                        buying customers in Kenya and South Africa."
                                    </p>
                                </div>
                                <div class="reviewer-details">
                                    <div class="reviewer-name">
                                        <b>Olabisi Olayemi</b> <br />
                                        <span>Founder, Seamwears Ltd </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="testimony-block">
                                <div class="review-container">
                                    <p>
                                        "I thought it was all hype when I was told I could have my account running in 10 minutes. 
                                        But that was exactly what happened. There was no back and forth. There was no fuss. And 
                                        now, my business’ cash flow has never been better." 
                                    </p>
                                </div>
                                <div class="reviewer-details">
                                    <div class="reviewer-name">
                                        <b>Shittu Ogundare</b> <br />
                                        <span>CEO, Blackman Shoes </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="testimony-block">
                                <div class="review-container">
                                    <p>
                                        "It’s the interface for me, actually. It is so easy to use and very informative and I 
                                        believe this is one of the reasons why transactions do not take a lot of time." 
                                    </p>
                                </div>
                                <div class="reviewer-details">
                                    <div class="reviewer-name">
                                        <b>Karen Johson</b> <br />
                                        <span>CEO, Cheekybeauty </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-nav flex-div">
                        <div class="carousel-counter flex-div hidden-xs">
                            <span class="curr-slide">1</span>
                            <hr class="counter-divider"/>
                            <span class="all-slide">2</span>
                        </div>
                        <div class="next-prev-wrapper flex-div hidden-xs">
                            <img src="../../assets/images/left-slide.svg" alt="previous" class="prev-btn slide-btn" @click="prevFunc()">
                            <img src="../../assets/images/right-slide.svg" alt="next" class="next-btn slide-btn" @click="nextFunc()">
                        </div>
                        <div class="next-prev-wrapper flex-div visible-xs">
                            <img src="../../assets/images/left-slide.svg" alt="previous" class="prev-btn slide-btn" @click="prevFunc2()">
                            <img src="../../assets/images/right-slide.svg" alt="next" class="next-btn slide-btn" @click="nextFunc2()">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- end of Customers-Testimonies-Section  -->

        <!--==== Debit Card ====-->
        <section id="debit-cards">
            <div class="row">
                <div class="container">
                    <div class="col s12 pad0">
                        <div class="col s12 m6 hidden-xs">
                            <img src="../../assets/images/bizness-card-hand.png" alt="payrail debit card" class="full-width payrail-card-hand" data-aos="fade-up" />
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
                            <img src="../../assets/images/bizness-card-hand.png" alt="payrail debit card" class="full-width payrail-card-hand" />
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
                    <div class="black-bg black-wrapper">
                        <div class="col s12 m10 offset-m1 pad0-xs">
                            <div class="col s12 l7">
                                <h4 class="sect-title white-txt">Sign up for free. <br /> Manage money with ease</h4> 
                            </div>
                            
                            <div class="col s12 l5">
                                <div class="subscribe-form-wrapper">
                                    <form action="#" id="subscribe-form-2" onSubmit={SaveEmails}>
                                        <div class="flex-div input-field">
                                            <input id="subscriber-email-2" placeholder="Your Email..." type="email" required />
                                            
                                            <button class="btn subscribe-submit pry-bg">Get Started</button>
                                        </div>
                                    </form>
                                    <div id="subscribe-message-2" class="hidden subscribe-message">
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--==== end of Join-Section  ====-->
    </div>
</template>

<script>
    import M from 'materialize-css';
    import AOS from 'aos';
    import 'aos/dist/aos.css';

    export default {
        name: "BusinessHome",
        mounted() {
            AOS.init();

            // Initialising mterialise-css functions
            var elemsCarousel = document.querySelector('.testimonies-slider-1.carousel');
            M.Carousel.init(elemsCarousel);
            var elemsCarousel2 = document.querySelector('.testimonies-slider-2.carousel');
            M.Carousel.init(elemsCarousel2, {
                fullWidth: true
            });

            window.setInterval(function () {
                M.Carousel.getInstance(elemsCarousel2).next()
            }, 8000)

            // var elemScrollspy = document.querySelectorAll('.scrollspy');
            // M.Scrollspy.init(elemScrollspy);

            // Key-Points Section --- Title Carousel
            var titleIndex = 0;
            titleCarousel();

            function titleCarousel() {
                var i;
                var x = document.getElementsByClassName("int-img");
                for (i = 0; i < x.length; i++) {
                    x[i].style.display = "none";  
                }
                titleIndex++;
                if (titleIndex > x.length) {titleIndex = 1}    
                x[titleIndex-1].style.display = "block";  
                setTimeout(titleCarousel, 4000); // Change image every 2 seconds
            }
            // Key-Points Section --- Title Carousel
            var titleIndex2 = 0;
            titleCarousel2();

            function titleCarousel2() {
                var i;
                var x = document.getElementsByClassName("txt-indicator-block");
                for (i = 0; i < x.length; i++) {
                    x[i].classList.remove("active-indicator-block");  
                }
                titleIndex2++;
                if (titleIndex2 > x.length) {titleIndex2 = 1}    
                x[titleIndex2-1].classList.add("active-indicator-block");
                setTimeout(titleCarousel2, 4000); // Change image every 2 seconds
            }

            const img = document.querySelector(".pci-img");
            document.body.classList.add("js-loading");
            img.addEventListener("load", removeLoadingClass);
            function removeLoadingClass() {
                document.body.classList.remove('js-loading');
            }
        },
        methods:{
            nextFunc() {
                var elemsCarousel2 = document.querySelector(".testimonies-slider-1.carousel");
                M.Carousel.getInstance(elemsCarousel2).next();
            },
            prevFunc() {
                var elemsCarousel2 = document.querySelector(".testimonies-slider-1.carousel");
                M.Carousel.getInstance(elemsCarousel2).prev();
            },
            nextFunc2() {
                var elemsCarousel2 = document.querySelector(".testimonies-slider-2.carousel");
                M.Carousel.getInstance(elemsCarousel2).next();
            },
            prevFunc2() {
                var elemsCarousel2 = document.querySelector(".testimonies-slider-2.carousel");
                M.Carousel.getInstance(elemsCarousel2).prev();
            }
        }
    }
</script>

<style>

</style>