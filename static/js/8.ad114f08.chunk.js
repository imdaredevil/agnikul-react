(this["webpackJsonpagnikul-react"]=this["webpackJsonpagnikul-react"]||[]).push([[8],{120:function(e,a,t){"use strict";t.r(a);var n=t(38),o=t(39),s=t(37),i=t(41),c=t(40),l=t(0),r=t.n(l),m=(t(85),t(36)),u=t(18),d=t.n(u);t(47);var h=t(35),p=t.n(h),f=t(43),v=t.n(f),E=t(11),g=t(86),N=t.n(g),_=t(87),y=t.n(_),b=t(88),A=t.n(b),w=t(89),k=t.n(w),S=t(90),C=t.n(S),x=function(e){Object(i.a)(t,e);var a=Object(c.a)(t);function t(e){var o;return Object(n.a)(this,t),(o=a.call(this,e)).state={current:N.a,currentName:"LAUNCH LOCATION"},o.setSite=o.setSite.bind(Object(s.a)(o)),o}return Object(o.a)(t,[{key:"setSite",value:function(e){var a="LAUNCH LOCATION";e==y.a&&(a="Asia Pacific"),e==C.a&&(a="Northern Europe"),e==k.a&&(a="Northern America"),e==A.a&&(a="India"),this.setState({current:e,currentName:a})}},{key:"render",value:function(){var e=this;return d()(document).ready((function(){d()("body").removeClass("products"),d()(".first-row").removeClass("home__first-row"),d()(".book__terms__link").click((function(){d()(".custom-modal-out").addClass("show"),d()(".body").css("overflow-y","hidden")})),d()(".close-icon").click((function(){d()(".custom-modal-out").removeClass("show"),d()(".body").css("overflow-y","scroll")}))})),r.a.createElement("div",{className:"body"},r.a.createElement("div",{className:"navBar"},r.a.createElement("div",{className:"topnav row justify-content-around align-items-baseline",id:"myTopnav"},r.a.createElement("div",{className:"column-lg nav-brandc"},r.a.createElement(E.b,{to:"/"},r.a.createElement("img",{className:"logo",src:p.a}))),r.a.createElement("div",{className:"column"},r.a.createElement(E.b,{to:"/about",className:"nav-itemc nav-linkc"},"About")),r.a.createElement("div",{className:"column"},r.a.createElement(E.b,{to:"/products",className:"nav-itemc nav-linkc"},"Products")),r.a.createElement("div",{className:"column-md"},r.a.createElement(E.b,{to:"/launch-sites",className:"nav-itemc nav-linkc active"},"Launch Sites")),r.a.createElement("div",{className:"column-md"},r.a.createElement(E.b,{to:"/team",className:"nav-itemc nav-linkc"},"Meet the Team")),r.a.createElement("div",{className:"column"},r.a.createElement(E.b,{to:"/career",className:"nav-itemc nav-linkc"},"Career")),r.a.createElement("div",{id:"navButtonDiv",className:"column-lg"},r.a.createElement(E.b,{to:"/book"},r.a.createElement("button",{className:"nav-itemc nav-buttonc"},"BOOK YOUR LAUNCH")))),r.a.createElement("div",{className:"iconc"},r.a.createElement("div",{onClick:m.a},r.a.createElement("i",{className:"fa fa-bars fa-lg"})))),r.a.createElement("p",{className:"launch__section-head"},"Launch-Sites"),r.a.createElement("p",{className:"launch__section-head-text"},"Pavel is a writer and researcher who studied digital humanities and new media. Being addicted to large amount of information, he produces an appropriate."),r.a.createElement("div",{className:"launch__overall-div"},r.a.createElement("div",{className:"launch__location-swiper"},r.a.createElement("div",{className:"launch__swiper-wrapper"},r.a.createElement("div",{className:"launch__location__swiper-slide"},r.a.createElement("div",{id:"chennai",className:this.state.current===k.a?"launch__location__slide-content active":"launch__location__slide-content",onClick:function(a){return e.setSite(k.a)}},r.a.createElement("p",{className:"launch__location__slide-number"},"01"),r.a.createElement("p",{className:"launch__location__slide-name"},"Northern America"),r.a.createElement("p",{className:this.state.current===k.a?"launch__location__slide-desc active":"launch__location__slide-desc"},"Construction is currently underway on a second launch pad at Launch Complex 1."))),r.a.createElement("div",{className:"launch__location__swiper-slide"},r.a.createElement("div",{id:"beijing",className:this.state.current===C.a?"launch__location__slide-content active":"launch__location__slide-content",onClick:function(a){return e.setSite(C.a)}},r.a.createElement("p",{className:"launch__location__slide-number"},"02"),r.a.createElement("p",{className:"launch__location__slide-name"},"Northern Europe"),r.a.createElement("p",{className:this.state.current===C.a?"launch__location__slide-desc active":"launch__location__slide-desc"},"Construction is currently underway on a second launch pad at Launch Complex 1."))),r.a.createElement("div",{className:"launch__location__swiper-slide"},r.a.createElement("div",{id:"kolkata",className:this.state.current===A.a?"launch__location__slide-content active":"launch__location__slide-content",onClick:function(a){return e.setSite(A.a)}},r.a.createElement("p",{className:"launch__location__slide-number"},"03"),r.a.createElement("p",{className:"launch__location__slide-name"},"India"),r.a.createElement("p",{className:this.state.current===A.a?"launch__location__slide-desc active":"launch__location__slide-desc"},"Construction is currently underway on a second launch pad at Launch Complex 1."))),r.a.createElement("div",{className:"launch__location__swiper-slide"},r.a.createElement("div",{id:"ahmedabad",className:this.state.current===y.a?"launch__location__slide-content active":"launch__location__slide-content",onClick:function(a){return e.setSite(y.a)}},r.a.createElement("p",{className:"launch__location__slide-number"},"04"),r.a.createElement("p",{className:"launch__location__slide-name"},"Asia Pacific"),r.a.createElement("p",{className:this.state.current===y.a?"launch__location__slide-desc active":"launch__location__slide-desc"},"Construction is currently underway on a second launch pad at Launch Complex 1."))))),r.a.createElement("div",{className:"launch__world-map"},r.a.createElement("img",{className:"world_image",src:this.state.current}))),r.a.createElement("div",{className:"launch__button-div"},r.a.createElement(E.b,{to:{pathname:"/book",state:{launch:this.state.currentName}}},r.a.createElement("button",{className:"custom-button"},r.a.createElement("img",{src:v.a}),r.a.createElement("span",null,"LAUNCH MY VEHICLE")))),r.a.createElement("div",{className:"custom-modal-out"},r.a.createElement("div",{className:"custom-modal-outer"},r.a.createElement("div",{className:"custom-modal"},r.a.createElement("p",{className:"close-icon"},"X"),r.a.createElement("p",{className:"custom-modal-heading"},"TERMS, CONDITIONS AND PRIVACY POLICY"),r.a.createElement("p",{className:"custom-modal-text"},"These terms of use are an agreement between Agnikul Cosmos Private Limited (\u201cAgnikul\u201d, \u201cwe\u201d, \u201cus\u201d or \u201cour\u201d) and users of its website (\u201cyou\u201d, \u201cyour\u201d or \u201cuser\u201d). This agreement (the \u201cAgreement\u201d) also governs your use of this website ",r.a.createElement("a",{href:"http://agnikul.in"},"(http://www.agnikul.in/)")," (the \u201cSite\u201d). By using the Site, you acknowledge that you have reviewed and agree to all of the terms of this Agreement and agree to be bound by them in connection with your use of the Site. By entering, accessing, browsing, submitting information to, or otherwise using this site, you acknowledge and agree to the following terms and conditions."),r.a.createElement("div",{className:"custom-modal-section"},r.a.createElement("p",{className:"custom-modal-head"},"Intellectual Property"),r.a.createElement("p",{className:"custom-modal-text"},"All intellectual property rights in the Site including content, graphics and copyright works are owned by us. We exclusively own all rights in the compilation, design and layout of the Site.",r.a.createElement("br",null),"You may access, view and print the content on the Site provided that you only use that content for your personal use or otherwise in relation to using or considering our services.",r.a.createElement("br",null),"You must obtain our written permission to copy, reproduce or publish any of the content (including graphics, videos, photographs or other copyright works) on the Site")),r.a.createElement("div",{className:"custom-modal-section"},r.a.createElement("p",{className:"custom-modal-head"},"Third Party Websites"),r.a.createElement("p",{className:"custom-modal_text"},"From time to time, the Site may include features and functionality that allow you to interact with other sites that are not under our control, including social media websites. We provide these features, functionality, and links to you only as a convenience and do not endorse any linked websites or social media sites and are not responsible for the contents or transmission of any linked websites or social media sites.")),r.a.createElement("div",{className:"custom-modal-section"},r.a.createElement("p",{className:"custom-modal-head"},"Provision of Information and Privacy"),r.a.createElement("p",{className:"custom-modal-text"},"You are not required to provide personal information to us. If you provide information to us, you will ensure that such information is accurate and complete.",r.a.createElement("br",null),"We collect the personal information provided to us and may use it for communicating with you, statistical analysis, and research and development.",r.a.createElement("br",null),"We do not generally disclose personal information to third parties for use for their own purposes. In some instances, we may do so, including to our affiliates or providers who complete transactions or perform services on our behalf, or if we are required to by law.",r.a.createElement("br",null),"Any personal information you provide to us may be stored on our providers\u2019 secure servers. This may involve transferring your information to countries which have less legal protection for personal information than the countries in which you or we are based.",r.a.createElement("br",null),"We may also collect technical data and related information when you access or log on to the Site. This may include information about your computer/tablet/mobile phone and the way users arrive at, browse or interact with the Site. We may collect this information through the use of cookies or other means. If you want to disable cookies, you can do so by changing your browser settings, although this may alter the functionality of the Site. We use the technical information collected to have a better understanding of how people use the Site and how we might improve it")),r.a.createElement("div",{className:"custom-modal-section"},r.a.createElement("p",{className:"custom-modal-head"},"All Liabilities Excluded"),r.a.createElement("p",{className:"custom-modal-text"},"You agree that your use of this Site is at your sole risk. Because of the number of possible sources of information available through the Site, and the inherent hazards and uncertainties of electronic distribution, there may be delays, omissions, inaccuracies or other problems with such information.",r.a.createElement("br",null),"To the extent permitted by law:"),r.a.createElement("ol",null,r.a.createElement("li",{className:"custom-modal-text"},"all warranties, representations and guarantees are excluded, including suitability, fitness for purpose, appropriateness, availability for use, accuracy or completeness of the Site or the content on or accessed through it;"),r.a.createElement("li",{className:"custom-modal-text"},"under no circumstances shall Agnikul or its affiliates, agents or licensors be liable to you or anyone else for any damages (whether direct, indirect, punitive, incidental, special, consequential or otherwise, or whether resulting from tort, contract or other theories of law) including but not limited to attorneys\u2019 fees and lost profits, in connection with, or in any manner arising out of: (1) the use or inability to use this Site and its content; (2) any goods or services obtained through third parties referenced or made available on or through this Site; (3) any errors or omissions in the content or information on the Site; or (4) any computer virus or other programming device, even if Agnikul is advised of the possibility thereof; and"),r.a.createElement("li",{className:"custom-modal-text"},"you indemnify us against all loss we suffer or incur as a direct or indirect result of your failure to comply with this Agreement.")),r.a.createElement("p",{className:"custom-modal-text"},"If you become dissatisfied with this Site, or the terms, conditions or policies governing this Site, your sole and exclusive remedy is to discontinue using this Site. This limitation on damages is essential to the agreement between you and us and the Site would not be provided free of charge without such limitation.")),r.a.createElement("div",{className:"custom-modal-section"},r.a.createElement("p",{className:"custom-modal-head"},"Governing Law and Jurisdiction"),r.a.createElement("p",{className:"custom-modal-text"},"The Site, all related content, and this Agreement shall be governed by and construed in accordance with the laws of India, without regard to the principles of conflicts of laws. The courts of Chennai, India shall have exclusive jurisdiction on any dispute that arises in relation to this Agreement or your use of the Site.")),r.a.createElement("div",{className:"custom-modal-section"},r.a.createElement("p",{className:"custom-modal-head"},"Amendments"),r.a.createElement("p",{className:"custom-modal-text"},"We may amend this Agreement from time to time, and you should ensure that you check and read the same regularly. If you continue to use the Site after this Agreement is amended, you are deemed to have agreed with the new terms of this Agreement.")),r.a.createElement("div",{className:"custom-modal-section"},r.a.createElement("p",{className:"custom-modal-head"},"Contact"),r.a.createElement("p",{className:"custom-modal-text"},"If you have any queries, please contact privacy@agnikul.in"))))),r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"first-row"}),r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row border-row"},r.a.createElement("div",{className:"col-sm"},r.a.createElement("p",{className:"footer-normal phone"},"Phone"),r.a.createElement("p",{className:"footer-bolder"},"+32 50 31 28 32, +91 99625 075240, ",r.a.createElement("br",null)," +91 96772 82356, +1 551 689 2314")),r.a.createElement("div",{className:"col-sm"},r.a.createElement("p",{className:"footer-normal"},"Launch Services"),r.a.createElement("p",{className:"footer-bold"},"payloadpeople@gnikul.in")),r.a.createElement("div",{className:"col-sm"},r.a.createElement("p",{className:"footer-normal"},"Careers"),r.a.createElement("p",{className:"footer-bold"},"humancapital@agnikul.in"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm"},r.a.createElement("p",{className:"footer-normal"},"Agnikul Cosmos Private Limited."),r.a.createElement("p",{className:"footer-bolder"},"National Center for Combustion R&D, ",r.a.createElement("br",null),"3rd floor, IIT Madras, ",r.a.createElement("br",null)," Chennai 600036")),r.a.createElement("div",{className:"col-sm border-column"},r.a.createElement("p",{className:"footer-normal"},"Agnikul Cosmos Launch Vehicles Private Limited"),r.a.createElement("p",{className:"footer-bolder"},"Kerala Startup Mission, Technopark, Thejaswini, G3B, Technopark Rd, Karyavattom, Thiruvananthapuram, Kerala 695581")),r.a.createElement("div",{className:"col-sm"},r.a.createElement("a",{href:"https://medium.com/agnikuls-blog",target:"/blank"},r.a.createElement("p",{className:"footer-bold"},"Blog")),r.a.createElement("p",{className:"footer-bold"},r.a.createElement(E.b,{to:"/news",className:"footer-bold"},"News")),r.a.createElement("a",{href:"https://www.youtube.com/channel/UCZ4l5Je0PVUvSrHr76vP0wA/featured",target:"_blank"},r.a.createElement("p",{className:"footer-bold"},"Videos")),r.a.createElement("p",{className:"footer-bold book__terms__link"},"Privacy Policy"),r.a.createElement("div",{className:"footer-social-logos"},r.a.createElement("i",{className:"fa fa-facebook","aria-hidden":"true"}),r.a.createElement("i",{className:"fa fa-google-plus","aria-hidden":"true"}),r.a.createElement("a",{href:"https://twitter.com/@agnikulcosmos",target:"_blank"},r.a.createElement("i",{className:"fa fa-twitter","aria-hidden":"true"})),r.a.createElement("a",{href:"https://www.linkedin.com/company/agnikul-cosmos/",target:"_blank"},r.a.createElement("i",{className:"fa fa-linkedin","aria-hidden":"true"}))))))))}}]),t}(l.Component);a.default=x},35:function(e,a,t){e.exports=t.p+"static/media/logo.6463c17c.png"},36:function(e,a,t){"use strict";var n=t(18),o=t.n(n);a.a=function(){var e=document.getElementById("myTopnav");!1===e.classList.contains("responsive")?(e.classList.add("responsive"),o()(".navBar").addClass("responsive")):(e.classList.remove("responsive"),o()(".navBar").removeClass("responsive"))}},43:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAGKADAAQAAAABAAAAGAAAAADiNXWtAAAB/0lEQVRIDa2UzytEURTHvfIjSwqL8WMlCz8XlrIgCywsFAvFQskGK2VlYaOYrDQLSikShaX8BZYWbEiISCxIyY9ifM70Lufd7pt5fpz6zD3n3O/9nnnz3jwv6x8jmUzmY9cAFRCD3Ww+/hSYFmMwAL1QD9ozSf27wLgNNuENwqJHTwtM4oRHoxZaoABuYAFKIAFdkCnOnQLMO+FYfa1b8kYYggfVT5e+spkXGEAjB9asUyfUlZCw+pnKPZf5tnXqgDoG61Y/SjlqDxi0Tj1SyzffsPpRymdEct++g4b8PPoKeqgnwY59GnGQNSxWvp1VhtoMmSdvhw/LQUxTT56sEDakSdkGUw7JkEK4ADviWs2mXIkdq1rjzDkxZ5/y60xXcIeuyGlqmgjK4MU3dC0yJOwe9LGXY7ycKwL7aXINcfVmaDbDiNPYNBGYG+0yCestsVEN9zBlvEJXRD8Zsoy+HC5BYizUWG8gzDTkHc041IB+b9Vpn1SOIBem4dpHcumFDTljrxX64QlMyCB5CweD5oRRqHVaVNR6iLwCZkH+J4tgR0fQ2a9QXdlK6msjJpchw1AqPb/eZtWxZvSBFUWVVqn8a0DggF+g01e2JbVLJ9+mW5nqNPUTOQ8Fh8j/xm0uOjblSdAhP5fck9x05lH35M2444tPWQ89zzuKejiK7hPVrM8nRdbYXwAAAABJRU5ErkJggg=="},85:function(e,a,t){},86:function(e,a,t){e.exports=t.p+"static/media/blank.47f3ec05.png"},87:function(e,a,t){e.exports=t.p+"static/media/Asiapacific.d4e8f94b.png"},88:function(e,a,t){e.exports=t.p+"static/media/India.11d2e85f.png"},89:function(e,a,t){e.exports=t.p+"static/media/Northernamerica.83b2f2f4.png"},90:function(e,a,t){e.exports=t.p+"static/media/Northerneurope.be4b47a8.png"}}]);
//# sourceMappingURL=8.ad114f08.chunk.js.map