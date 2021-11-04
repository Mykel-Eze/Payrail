<template>
    <div class="contents" id="agency-contents">
        <!--==== Home Section  ====-->
        <section id="home" class="scrollspy">
            <div class="row rel">
                <div class="container home-container">
                    <div class="col s12 l6" id="home-txt-side">
                        <div class="home-minor-title">Designed for everyone</div>
                        <h1 class="home-title"> Your branchless Next-door Banking  </h1>
                        <p class="home-desc-txt hidden-xs-sm">
                            Built for Super agents and agents; enabling multiple type transactions 
                            in an easy, convenient, and cost-effective manner.
                        </p>
                        <div class="app-stores-wrapper hidden-xs-sm">
                            <div class="unknown-device">
                                <button class="app-store google-store hover-scale">
                                    <img src="../../assets/images/google-playstore.svg" alt="google store" />
                                </button>
                            </div>
                            <div class="unknown-device">
                                <button class="app-store apple-store hover-scale">
                                    <img src="../../assets/images/apple-appstore.svg" alt="apple store" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="col s12 m8 offset-m2 l6 offset-l0 rel" id="home-img-side">
                        <div class="phone-card-imgs hidden-xs">
                            <img src="../../assets/images/phone-1.png" alt="phone 1" class="full-width pci-img" id="p-img-1" />
                            <img src="../../assets/images/agency-card.png" alt="card" class="full-width pci-img" id="p-img-2" />
                            <img src="../../assets/images/phone-2a.png" alt="phone 2" class="full-width pci-img" id="p-img-3" />
                        </div>
                        <div class="visible-xs">
                            <img src="../../assets/images/landing-section-images-2.png" alt="phone and hand" class="full-width" />
                        </div>
                    </div>
                </div>

                <div class="col s12 visible-xs-sm">
                    <div class="container">
                        <p class="home-desc-txt">
                            Built for agents; individual-based businesses, enterprises and financial 
                            institutions to manage multiple payment workflows and move funds, so they 
                            can pay and get paid without delays.
                        </p>
                        <div class="app-stores-wrapper flex-div">
                            <div class="unknown-device">
                                <button class="app-store google-store hover-scale">
                                    <img src="../../assets/images/google-playstore.svg" alt="google store" />
                                </button>
                            </div>
                            <div class="unknown-device">
                                <button class="app-store apple-store hover-scale">
                                    <img src="../../assets/images/apple-appstore.svg" alt="apple store" />
                                </button>
                            </div>
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
                        <h3 class="sect-title">More Transactions. More Commissions</h3>
                        <p class="mid-sect-p">
                            As a Payrail Agent, you have the power and control to make as much 
                            money as you can by providing financial services in your community easily 
                            within the app, and also get your Mastercard debit card almost instantly.
                        </p>
                        <div class="subscribe-form-wrapper">
                            <form action="#" id="subscribe-form" onSubmit={SaveEmails}>
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
                                    <button class="btn subscribe-submit pry-bg">Join the Waitlist</button>
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
                </div>
            </div>
        </section>
        <!--==== end of Middle-section-1  ====-->

        <!--==== Section-content-1  ====-->
        <section id="sect-1" class="scrollspy">
            <div class="row">
                <div class="container">
                    <div class="col s12 m6">
                        <img src="../../assets/images/agency-imgs-1.png" alt="section-img" class="sect-img" data-aos="fade-up" />
                    </div>
                    <div class="col s12 m6">
                        <h3 class="sect-title">Cutting-edge <br /> Agency Banking</h3>
                        <p class="sect-desc">
                            Payrail  Agency is built to prioritize the needs of its users. We're not your 
                            typical agency banking platform; we're here to help you with your day-to-day 
                            agency banking needs.
                        </p>
                        <ul class="sect-list s-list-1">
                            <li>
                                <img src="../../assets/images/check.svg" alt="check mark" />
                                <span>We are the first and only truly INCLUSIVE Financial Services partner.</span>
                            </li>
                            <li>
                                <img src="../../assets/images/check.svg" alt="check mark" />
                                <span>You get to make money on all transactions and impact lives by partnering with us. </span>
                            </li>
                            <li>
                                <img src="../../assets/images/check.svg" alt="check mark" />
                                <span>Stay organised with multiple staff, agent and super agent and  for your business needs.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <!--==== end of Section-content-1  ====-->

        <!--==== Section-content-2  ====-->
        <section id="sect-2">
            <div class="row rel">
                <div class="container flex-div-coloumn-xs">
                    <div class="col s12 m6">
                        <h3 class="sect-title">Save time with seamless transactions</h3>
                        <p class="sect-desc">
                            Payrail Agency guarantees you of the best infrastructure, the best 
                            pricing, stable network and 24 hrs multilingual support for your 
                            business needs. Our agencies services include;
                        </p>
                        <div class="sec-list-grid">
                            <ul class="sect-list">
                                <li>
                                    <img src="../../assets/images/check.svg" alt="check mark" />
                                    <span>Account Opening</span>
                                </li>
                                <li>
                                    <img src="../../assets/images/check.svg" alt="check mark" />
                                    <span>Funds Transfer </span>
                                </li>
                                <li>
                                    <img src="../../assets/images/check.svg" alt="check mark" />
                                    <span>Cash in/ Cash out</span>
                                </li>
                                <li>
                                    <img src="../../assets/images/check.svg" alt="check mark" />
                                    <span>Bill payments</span>
                                </li>
                            </ul>
                            <ul class="sect-list">
                                <li>
                                    <img src="../../assets/images/check.svg" alt="check mark" />
                                    <span>Value financing</span>
                                </li>
                                <li>
                                    <img src="../../assets/images/check.svg" alt="check mark" />
                                    <span>Insurance</span>
                                </li>
                                <li>
                                    <img src="../../assets/images/check.svg" alt="check mark" />
                                    <span>Group savings</span>
                                </li>
                                <li>
                                    <img src="../../assets/images/check.svg" alt="check mark" />
                                    <span>Asset financing.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col s12 m6 right-align sect-center">
                        <img src="../../assets/images/agency-imgs-2a.png" alt="section-img" class="sect-img" data-aos="fade-up" />
                    </div>
                </div>
            </div>
        </section>
        <!--==== end of Section-content-2  ====-->

        <!--==== Middle-section-2  ====-->
        <section id="mid-sect-2" class="mid-sects">
            <div class="row">
                <div class="container">
                    <div class="mid-sect-wrapper center col s12 m10 offset-m1 l6 offset-l3">
                        <h3 class="sect-title">Our Buy Now Pay Later</h3>
                        <p class="mid-sect-p">
                            Our Buy Now Pay Later services close the financial inclusion gap for 
                            individuals and businesses. As a Payrail Agent, you make significant 
                            commissions on all BNPL items you cross-sell to customers – <span class="pry-color">Solar devices, 
                            Agricultural machinery, Household items, Mobile phones, Water pumps</span>, and so on! 
                        </p>
                        <div class="get-started-btn-wrapper">
                            <button class="nav-pry-btn black-bg btn pointer get-started-btn">
                                Get Started →
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--==== end of Middle-section-2  ====-->

        <!--==== Section-content-3  ====-->
        <section id="sect-3">
            <div class="row">
                <div class="container">
                    <div class="col s12 m6">
                        <img src="../../assets/images/agency-imgs-3.png" alt="section-img" class="sect-img" data-aos="fade-up" />
                    </div>
                    <div class="col s12 m6 sec-mag-down">
                        <h3 class="sect-title">Do business with confidence</h3>
                        <ul class="sect-list">
                            <li>
                                <img src="../../assets/images/check.svg" alt="check mark" />
                                <span>
                                    Payrail guarantees the greatest infrastructure, the best pricing, a stable network.
                                </span>
                            </li>
                            <li>
                                <img src="../../assets/images/check.svg" alt="check mark" />
                                <span>
                                    We offer multilingual customer friendly support 24 /7 for both individual and business owners.
                                </span>
                            </li>
                            <li>
                                <img src="../../assets/images/check.svg" alt="check mark" />
                                <span>
                                    Your safety is our top priority, thus your money and personal information are safe with us 
                                    and will never be shared with third parties.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <!--==== end of Section-content-3  ====-->

        <!--==== Customer-Testimonials  ====-->
        <section id="customer-testimonials" class="mid-sects">
            <div class="row">
                <div class="container">
                    <div class="customer-sect-title">
                        <h3 class="sect-title">Customer Testimonials</h3>
                        <p>
                            Our Agents put smiles on the faces of over 600,000 people daily. 
                            Do work that pay the bills and makes you proud with Payrail!
                        </p>
                    </div>

                    <div class="testimony-wrapper hidden-xs">
                        <div class="testimony-block" data-aos="fade-up">
                            <div class="flex-div review-title">
                                <img src="../../assets/images/review-points.svg" alt="points" class="review-title-icon rti-1" />
                                <img src="../../assets/images/review-points-2.svg" alt="points" class="review-title-icon rti-2" />
                                <span class="bold">Trusted and Reliable Service</span>
                            </div>
                            <div class="review-container">
                                <p>
                                    Quick response⚡⚡ app, super fast for transfers and electricity bill payment. 
                                    I enjoy ❤️ using this Payrail Urban.
                                </p>
                            </div>
                            <div class="reviewer-details">
                                <div class="reviewer-name">
                                    <b>Christiana Olaotan</b>
                                </div>
                                <!-- {/* <div class="reviewer-title"></div> */} -->
                            </div>
                        </div>
                        <div class="testimony-block" data-aos="fade-up">
                            <div class="flex-div review-title">
                                <img src="../../assets/images/review-points.svg" alt="points" class="review-title-icon rti-1" />
                                <img src="../../assets/images/review-points-2.svg" alt="points" class="review-title-icon rti-2" />
                                <span class="bold">Instant Transaction Settlement</span>
                            </div>
                            <div class="review-container">
                                <p>
                                    Received funds in my wallet instantly and offer easy transfer services to my customers in real-time. 
                                    No waiting for end-of-day reconciliation.
                                </p>
                            </div>
                            <div class="reviewer-details">
                                <div class="reviewer-name">
                                    <b>Musa Abubaka</b>
                                </div>
                                <!-- {/* <div class="reviewer-title"></div> */} -->
                            </div>
                        </div>
                        <div class="testimony-block" data-aos="fade-up">
                            <div class="flex-div review-title">
                                <img src="../../assets/images/review-points.svg" alt="points" class="review-title-icon rti-1" />
                                <img src="../../assets/images/review-points-2.svg" alt="points" class="review-title-icon rti-2" />
                                <span class="bold">Enjoying Lowest Charges</span>
                            </div>
                            <div class="review-container">
                                <p>
                                    I enjoyed cheaper transactions and also been able to renders delightful premium service
                                </p>
                            </div>
                            <div class="reviewer-details">
                                <div class="reviewer-name">
                                    <b>Chinedu Nwaiwu</b>
                                </div>
                                <!-- {/* <div class="reviewer-title"></div> */} -->
                            </div>
                        </div>
                    </div>

                    <div class="carousel testimony-wrapper visible-xs">
                        <div class="testimony-block carousel-item">
                            <div class="flex-div review-title">
                                <img src="../../assets/images/review-points.svg" alt="points" class="review-title-icon rti-1" />
                                <img src="../../assets/images/review-points-2.svg" alt="points" class="review-title-icon rti-2" />
                                <span class="bold">Trusted and Reliable Service</span>
                            </div>
                            <div class="review-container">
                                <p>
                                    Quick response⚡⚡ app, super fast for transfers and electricity bill payment. 
                                    I enjoy ❤️ using this Payrail Urban.
                                </p>
                            </div>
                            <div class="reviewer-details">
                                <div class="reviewer-name">
                                    <b>Christiana Olaotan</b>
                                </div>
                                <!-- {/* <div class="reviewer-title"></div> */} -->
                            </div>
                        </div>
                        <div class="testimony-block carousel-item">
                            <div class="flex-div review-title">
                                <img src="../../assets/images/review-points.svg" alt="points" class="review-title-icon rti-1" />
                                <img src="../../assets/images/review-points-2.svg" alt="points" class="review-title-icon rti-2" />
                                <span class="bold">Instant Transaction Settlement</span>
                            </div>
                            <div class="review-container">
                                <p>
                                    Received funds in my wallet instantly and offer easy transfer services to my customers in real-time. 
                                    No waiting for end-of-day reconciliation.
                                </p>
                            </div>
                            <div class="reviewer-details">
                                <div class="reviewer-name">
                                    <b>Musa Abubaka</b>
                                </div>
                                <!-- {/* <div class="reviewer-title"></div> */} -->
                            </div>
                        </div>
                        <div class="testimony-block carousel-item">
                            <div class="flex-div review-title">
                                <img src="../../assets/images/review-points.svg" alt="points" class="review-title-icon rti-1" />
                                <img src="../../assets/images/review-points-2.svg" alt="points" class="review-title-icon rti-2" />
                                <span class="bold">Enjoying Lowest Charges</span>
                            </div>
                            <div class="review-container">
                                <p>
                                    I enjoyed cheaper transactions and also been able to renders delightful premium service
                                </p>
                            </div>
                            <div class="reviewer-details">
                                <div class="reviewer-name">
                                    <b>Chinedu Nwaiwu</b>
                                </div>
                                <!-- {/* <div class="reviewer-title"></div> */} -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--==== end of Customer-Testimonials  ====-->

        <!--==== Our-Partners  ====-->
        <section id="our-partners" class="mid-sects">
            <div class="row">
                <div class="container">
                    <div class="partners-sect-wrapper center col s12 l10 offset-l1">
                        <h4 class="sect-title">Our esteemed partners</h4>
                        <!-- <div class="">
                            <img src="../../assets/images/partners-all.png" alt="our partners" class="full-img" />
                        </div> -->
                        <div class="partners-wrapper hidden-xs">
                            <a href="http://" target="_blank" rel="noopener noreferrer" class="partner-link">
                                <img src="../../assets/images/winrock.png" alt="winrock" class="full-img" />
                            </a>
                            <a href="http://" target="_blank" rel="noopener noreferrer" class="partner-link">
                                <img src="../../assets/images/usaid.png" alt="usaid" class="full-img" />
                            </a>
                            <a href="http://" target="_blank" rel="noopener noreferrer" class="partner-link">
                                <img src="../../assets/images/mercycorps.png" alt="mercycorps" class="full-img" />
                            </a>
                            <a href="http://" target="_blank" rel="noopener noreferrer" class="partner-link">
                                <img src="../../assets/images/japtini.png" alt="japtini" class="full-img" />
                            </a>
                            <a href="http://" target="_blank" rel="noopener noreferrer" class="partner-link">
                                <img src="../../assets/images/alluvial.png" alt="alluvial" class="full-img" />
                            </a>
                        </div>
                        
                        <div class="visible-xs partners-wrapper-mobile">
                            <div class="partners-wrapper">
                                <a href="http://" target="_blank" rel="noopener noreferrer" class="partner-link">
                                    <img src="../../assets/images/winrock.png" alt="winrock" class="full-img" />
                                </a>
                                <a href="http://" target="_blank" rel="noopener noreferrer" class="partner-link">
                                    <img src="../../assets/images/usaid.png" alt="usaid" class="full-img" />
                                </a>
                                <a href="http://" target="_blank" rel="noopener noreferrer" class="partner-link">
                                    <img src="../../assets/images/mercycorps.png" alt="mercycorps" class="full-img" />
                                </a>
                                <a href="http://" target="_blank" rel="noopener noreferrer" class="partner-link">
                                    <img src="../../assets/images/japtini.png" alt="japtini" class="full-img" />
                                </a>
                                <a href="http://" target="_blank" rel="noopener noreferrer" class="partner-link">
                                    <img src="../../assets/images/alluvial.png" alt="alluvial" class="full-img" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--==== end of Our-Partners  ====-->

        <!--==== Debit Card ====-->
        <section id="debit-cards">
            <div class="row">
                <div class="container">
                    <div class="col s12 pad0">
                        <div class="col s12 m6 hidden-xs">
                            <img src="../../assets/images/agency-card-hand.png" alt="payrail debit card" class="full-width payrail-card-hand" data-aos="fade-up" />
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
                            <img src="../../assets/images/agency-card-hand.png" alt="payrail debit card" class="full-width payrail-card-hand" />
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
                        <div class="center col s12 m10 offset-m1 l6 offset-l3 pad0-xs">
                            <h4 class="sect-title white-txt">Sign up for free. <br /> Join the Payrail Network</h4> 
                            <div class="app-stores-wrapper flex-div">
                                <div class="">
                                    <button class="app-store google-store hover-scale">
                                        <img src="../../assets/images/google-playstore.svg" alt="google store" />
                                    </button>
                                </div>
                                <div class="">
                                    <button class="app-store apple-store hover-scale">
                                        <img src="../../assets/images/apple-appstore.svg" alt="apple store" />
                                    </button>
                                </div>
                            </div>
                            <div class="box-txt">
                                Come along with us on this money-making journey…
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
        name: "AgencyHome",
        mounted() {
            AOS.init();

            // Initialising mterialise-css functions
            var elemsCarousel = document.querySelectorAll('.carousel');
            M.Carousel.init(elemsCarousel);

            // window.setInterval(function () {
            //     M.Carousel.getInstance(elemsCarousel).next()
            // }, 2000)

            // var elemScrollspy = document.querySelectorAll('.scrollspy');
            // M.Scrollspy.init(elemScrollspy);
        }
    }
</script>

<style>

</style>