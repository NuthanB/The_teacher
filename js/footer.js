const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
<link href="css/bootstrap.min.css" rel="stylesheet"/>
<link href="css/footer.css" rel="stylesheet"/>
<footer id="footer">
    <div class="footer-top">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-lg-4 logo">
                    <a href="javascript:void(0);">
                        <img src="images/cronberry-white.png" alt="Cronberry - Best automation Software" title="Cronberry - Best automation Software" />
                    </a>
                    <p>
                        We believe communication is the most effective way to engage the audience. Therefore, we’ve built an efficient tool helping the businesses boost their sales and increase conversion rates on the go.
                    </p>
                    <br />
                </div>
                <div class="col-xs-12 col-sm-12 col-lg-4 links">
                    <div class="footer-content inner">
                        <div class="row">
                            <div class="col-sm-6 col-6">
                                <h4>Quick Links</h4>
                                <ul class="bullets">
                                    <li><a target="_blank" rel="nofollow" href="https://www.youtube.com/channel/UCnBjzeM0Fbv_k9KBrnNJ_6A">Demo Video </a></li>
                                    <li><a target="_blank" rel="nofollow" href="https://blog.cronberry.com">Blog/News</a></li>
                                    <li><a href="contact-us">Contact</a></li>
                                    <li><a href="https://crnbry.com/CKEREDIY" target="_blank">Work with us</a></li>
				    <li><a href="https://static.cronberry.com/template_images/cronberry-callassist.apk" target="_blank">Call Assist APP</a></li>
                                </ul>
                            </div>
                            <div class="col-sm-6 col-6">
                                <h4>Product</h4>
                                <ul class="bullets">
                                    <!-- <li><a href="/pricing">Pricing </a></li> -->
                                    <li><a target="_blank" rel="nofollow" href="https://analyser.cronberry.com/analyse/subject">Email subject analyser</a></li>
                                    <li><a target="_blank" rel="nofollow" href="https://analyser.cronberry.com/analyse/headline">Heading Analyser</a></li>
                                </ul>
                            </div>
                            <div class="col-sm-6 col-6">
                                <h4>Support</h4>
                                <ul class="bullets">
                                    <li><a href="integration.html">API Document </a></li>
                                    <!-- <li><a target="_blank" rel="nofollow" href="https://static.cronberry.com/integration_guide/FAQ.pdf">FAQ</a></li>
                                    <!-- <li><a href="contact-us.html">Contact</a></li> -->
                                    <li><a href="https://blog.cronberry.com/" rel="nofollow" target="_blank">Blog</a></li>
                                    <li><a href="privacy-policy.html">Privacy Policy</a></li>
                                </ul>
                            </div>
                            <div class="col-sm-6 col-6">
                                <!-- <h4>Legal</h4>
                                    <ul class="bullets">
                                        <li><a target="_blank" rel="nofollow" href="https://static.cronberry.com/integration_guide/termsandconditions.pdf">Terms & Conditions </a></li>
                                        
                                    </ul> -->
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-12 col-lg-4">
                        <div class="footer-content">
                            <div class="row">
                                <div class=" col-md-12 col-12">
                                    <div class="footer-content contact-info">
                                        <h4>
                                            Contact Us
                                        </h4>
                                        <ul class="list-unstyled">
                                            <li>
                                                    <img src="images/map-marker-alt.svg" alt="Map Location Marker" title="Map Location Marker" />
                                                    Maaruji Square, Plot No. 41, Model Town Iscon Road, Mansarovar, Jaipur 302020.
                                            </li>
                                            <li>
                                                <a href="mailto:sales@cronberry.com">
                                                    <img src="images/envelope.svg" alt="Cronberry - Email" title="Cronberry - Email" />sales@cronberry.com</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div class=" col-md-12 col-12">
            <div class="row">

				<div class=" col-4">
                                <a href="https://www.softwaresuggest.com/cronberry" target="_blank" rel="nofollow" tabindex="-1"><img src="https://www.softwaresuggest.com/award_logo/customer-choice-2023.png" style="
                                    width: 130px;
                                "></a>
                                </div>
                                         <div class=" col-4">
                                <a href="https://www.softwaresuggest.com/cronberry" target="_blank" rel="nofollow" tabindex="-1"><img src="https://www.softwaresuggest.com/award_logo/Best-Value-Software-2022.png" style="
                                    width: 130px;
                                "></a>
                                </div>

			     <div class=" col-4">
                                <a href="https://www.softwaresuggest.com/cronberry" target="_blank" rel="nofollow" tabindex="-1"><img style="width:130px" src="https://www.softwaresuggest.com/award_logo/Faster-Growing-Software-Products.png"></a>
                                </div>
                                <div class=" col-4">
                                <a href="https://www.capterra.com/reviews/194779/Cronberry?utm_source=vendor&amp;utm_medium=badge&amp;utm_campaign=capterra_reviews_badge" rel="nofollow"> <img style="
        width: 130px;margin-top: 26px;
        margin-left: 13px;
    " border="0" src="https://assets.capterra.com/badge/632b5acf7dda520796d2b5967774d41b.svg?v=2136137&amp;p=194779"> </a>
    </div>
    </div>
    
                            </div>



                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
    <div class="footer-bottom">
        <p>Copyright &copy; <span id="year"></span> Cronberry. All right reserved.</p>
    </div>
</footer>`;

class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'closed' });
        shadowRoot.appendChild(footerTemplate.content);
        shadowRoot.getElementById('year').innerHTML = new Date().getFullYear();
    }
}

customElements.define('static-footer', Footer);
