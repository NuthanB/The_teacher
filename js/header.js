const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
<link href="css/bootstrap.min.css" rel="stylesheet"/>
<link href="/css/header.css" rel="stylesheet"/>
<header id="site-menu">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-md-3 col-sm-5 col-6">
                <div class="logo flex">
                <a href="/">
                    <img src="images/mainlogo.png" alt="Cronberry" title="Cronberry" style="width: 50%; margin-top:2%;" /><span style="font-size:x-large"></p>
                </a>
                </div>
            </div>
            <div id="siteMenu" class="col-md-9 col-sm-12 col-12 menu d-md-block d-lg-block d-xl-block"> 
                <ul class="contact-info">
                    <li class="bdr"> <a href="./grid.html" onclick="scrollToSection('section1')">Teaching Exams</a></li>
                    <li class="bdr"> <a href="./mentoring.html" target="_blank" rel="nofollow">Free Mentoring</a></li>
                    <li class="pr-0 d-md-inline-block d-sm-none">
                        <a class="btn btn-primary" href="" class="btn btn-default">Contact Us</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</header>
<div class="header-block"></div>`;
class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(headerTemplate.content);
        const openMenu = shadowRoot.getElementById('openMenu');
        openMenu.addEventListener('click', function(){
            shadowRoot.getElementById('siteMenu').classList.toggle('show-menu');
            shadowRoot.getElementById('openMenu').classList.toggle('collapsed');
        })
        shadowRoot.getElementById('linkIntegrations').addEventListener('click', function(){
            shadowRoot.getElementById('linkIntegrations').classList.toggle('show');
        })
        shadowRoot.getElementById('linkMarketplace').addEventListener('click', function(){
            shadowRoot.getElementById('linkMarketplace').classList.toggle('show');
        })
        shadowRoot.getElementById('linkEcommerce').addEventListener('click', function(){
            shadowRoot.getElementById('linkEcommerce').classList.toggle('show');
        })
        shadowRoot.getElementById('linkSocialMedia').addEventListener('click', function(){
            shadowRoot.getElementById('linkSocialMedia').classList.toggle('show');
        })
        shadowRoot.getElementById('linkForms').addEventListener('click', function(){
            shadowRoot.getElementById('linkForms').classList.toggle('show');
        })
        shadowRoot.getElementById('linkCustom').addEventListener('click', function(){
            shadowRoot.getElementById('linkCustom').classList.toggle('show');
        })
        shadowRoot.getElementById('linkChannels').addEventListener('click', function(){
            shadowRoot.getElementById('linkChannels').classList.toggle('show');
        })
        shadowRoot.getElementById('linkMarkets').addEventListener('click', function(){
            shadowRoot.getElementById('linkMarkets').classList.toggle('show');
        })
        
    }

}

customElements.define('static-header', Header);
