(this["webpackJsonpagnikul-react"]=this["webpackJsonpagnikul-react"]||[]).push([[8],{119:function(e,a,t){"use strict";t.r(a);var o=t(38),n=t(39),s=t(37),i=t(41),l=t(40),r=t(0),c=t.n(r),m=(t(90),t(36)),d=t(18),u=t.n(d);t(48);var h=t(35),_=t.n(h),p=t(43),f=t.n(p),v=t(11),b=t(91),E=t.n(b),N=t(92),g=t.n(N),y=t(93),A=t.n(y),w=t(94),k=t.n(w),S=t(95),C=t.n(S),x=function(e){Object(i.a)(t,e);var a=Object(l.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={current:E.a,currentName:"LAUNCH LOCATION"},n.setSite=n.setSite.bind(Object(s.a)(n)),n}return Object(n.a)(t,[{key:"setSite",value:function(e){var a="LAUNCH LOCATION";e==g.a&&(a="Asia Pacific"),e==C.a&&(a="Northern Europe"),e==k.a&&(a="Northern America"),e==A.a&&(a="India"),this.setState({current:e,currentName:a})}},{key:"render",value:function(){var e=this;return u()(document).ready((function(){u()("body").removeClass("products"),u()(".first-row").removeClass("home__first-row"),u()(".book__terms__link").click((function(){u()(".book__modal__out").addClass("show"),u()(".body").css("overflow-y","hidden")})),u()(".book__close__icon").click((function(){u()(".book__modal__out").removeClass("show"),u()(".body").css("overflow-y","scroll")}))})),c.a.createElement("div",{className:"body"},c.a.createElement("div",{className:"navBar"},c.a.createElement("div",{className:"topnav row justify-content-around align-items-baseline",id:"myTopnav"},c.a.createElement("div",{className:"column-lg nav-brandc"},c.a.createElement(v.b,{to:"/"},c.a.createElement("img",{className:"logo",src:_.a}))),c.a.createElement("div",{className:"column"},c.a.createElement(v.b,{to:"/about",className:"nav-itemc nav-linkc"},"About")),c.a.createElement("div",{className:"column"},c.a.createElement(v.b,{to:"/products",className:"nav-itemc nav-linkc"},"Products")),c.a.createElement("div",{className:"column-md"},c.a.createElement(v.b,{to:"/launch-sites",className:"nav-itemc nav-linkc active"},"Launch Sites")),c.a.createElement("div",{className:"column-md"},c.a.createElement(v.b,{to:"/team",className:"nav-itemc nav-linkc"},"Meet the Team")),c.a.createElement("div",{className:"column"},c.a.createElement(v.b,{to:"/career",className:"nav-itemc nav-linkc"},"Career")),c.a.createElement("div",{id:"navButtonDiv",className:"column-lg"},c.a.createElement("button",{className:"nav-itemc nav-buttonc"},c.a.createElement(v.b,{to:"/book"}," BOOK YOUR LAUNCH")))),c.a.createElement("div",{className:"iconc"},c.a.createElement("div",{onClick:m.a},c.a.createElement("i",{className:"fa fa-bars fa-lg"})))),c.a.createElement("p",{className:"launch__section-head"},"Launch-Sites"),c.a.createElement("p",{className:"launch__section-head-text"},"Pavel is a writer and researcher who studied digital humanities and new media. Being addicted to large amount of information, he produces an appropriate."),c.a.createElement("div",{className:"launch__overall-div"},c.a.createElement("div",{className:"launch__location-swiper"},c.a.createElement("div",{className:"launch__swiper-wrapper"},c.a.createElement("div",{className:"launch__location__swiper-slide"},c.a.createElement("div",{id:"chennai",className:this.state.current===k.a?"launch__location__slide-content active":"launch__location__slide-content",onClick:function(a){return e.setSite(k.a)}},c.a.createElement("p",{className:"launch__location__slide-number"},"01"),c.a.createElement("p",{className:"launch__location__slide-name"},"Northern America"),c.a.createElement("p",{className:this.state.current===k.a?"launch__location__slide-desc active":"launch__location__slide-desc"},"Construction is currently underway on a second launch pad at Launch Complex 1."))),c.a.createElement("div",{className:"launch__location__swiper-slide"},c.a.createElement("div",{id:"beijing",className:this.state.current===C.a?"launch__location__slide-content active":"launch__location__slide-content",onClick:function(a){return e.setSite(C.a)}},c.a.createElement("p",{className:"launch__location__slide-number"},"02"),c.a.createElement("p",{className:"launch__location__slide-name"},"Northern Europe"),c.a.createElement("p",{className:this.state.current===C.a?"launch__location__slide-desc active":"launch__location__slide-desc"},"Construction is currently underway on a second launch pad at Launch Complex 1."))),c.a.createElement("div",{className:"launch__location__swiper-slide"},c.a.createElement("div",{id:"kolkata",className:this.state.current===A.a?"launch__location__slide-content active":"launch__location__slide-content",onClick:function(a){return e.setSite(A.a)}},c.a.createElement("p",{className:"launch__location__slide-number"},"03"),c.a.createElement("p",{className:"launch__location__slide-name"},"India"),c.a.createElement("p",{className:this.state.current===A.a?"launch__location__slide-desc active":"launch__location__slide-desc"},"Construction is currently underway on a second launch pad at Launch Complex 1."))),c.a.createElement("div",{className:"launch__location__swiper-slide"},c.a.createElement("div",{id:"ahmedabad",className:this.state.current===g.a?"launch__location__slide-content active":"launch__location__slide-content",onClick:function(a){return e.setSite(g.a)}},c.a.createElement("p",{className:"launch__location__slide-number"},"04"),c.a.createElement("p",{className:"launch__location__slide-name"},"Asia Pacific"),c.a.createElement("p",{className:this.state.current===g.a?"launch__location__slide-desc active":"launch__location__slide-desc"},"Construction is currently underway on a second launch pad at Launch Complex 1."))))),c.a.createElement("div",{className:"launch__world-map"},c.a.createElement("img",{className:"world_image",src:this.state.current}))),c.a.createElement("div",{className:"launch__buttonDiv"},c.a.createElement(v.b,{to:{pathname:"/book",state:{launch:this.state.currentName}}},c.a.createElement("button",{className:"custom-button"},c.a.createElement("img",{src:f.a}),c.a.createElement("span",null,"LAUNCH MY VEHICLE")))),c.a.createElement("div",{className:"book__modal__out"},c.a.createElement("div",{className:"book__modal__outer"},c.a.createElement("div",{className:"book__modal"},c.a.createElement("p",{className:"book__close__icon"},"X"),c.a.createElement("p",{className:"book__modal__heading"},"TERMS, CONDITIONS AND PRIVACY POLICY"),c.a.createElement("p",{className:"book__modal__text"},"These terms of use are an agreement between Agnikul Cosmos Private Limited (\u201cAgnikul\u201d, \u201cwe\u201d, \u201cus\u201d or \u201cour\u201d) and users of its website (\u201cyou\u201d, \u201cyour\u201d or \u201cuser\u201d). This agreement (the \u201cAgreement\u201d) also governs your use of this website ",c.a.createElement("a",{href:"http://agnikul.in"},"(http://www.agnikul.in/)")," (the \u201cSite\u201d). By using the Site, you acknowledge that you have reviewed and agree to all of the terms of this Agreement and agree to be bound by them in connection with your use of the Site. By entering, accessing, browsing, submitting information to, or otherwise using this site, you acknowledge and agree to the following terms and conditions."),c.a.createElement("div",{className:"book__modal__section"},c.a.createElement("p",{className:"book__modal__head"},"Intellectual Property"),c.a.createElement("p",{className:"book__modal__text"},"All intellectual property rights in the Site including content, graphics and copyright works are owned by us. We exclusively own all rights in the compilation, design and layout of the Site.",c.a.createElement("br",null),"You may access, view and print the content on the Site provided that you only use that content for your personal use or otherwise in relation to using or considering our services.",c.a.createElement("br",null),"You must obtain our written permission to copy, reproduce or publish any of the content (including graphics, videos, photographs or other copyright works) on the Site")),c.a.createElement("div",{className:"book__modal__section"},c.a.createElement("p",{className:"book__modal__head"},"Third Party Websites"),c.a.createElement("p",{className:"book__modal_text"},"From time to time, the Site may include features and functionality that allow you to interact with other sites that are not under our control, including social media websites. We provide these features, functionality, and links to you only as a convenience and do not endorse any linked websites or social media sites and are not responsible for the contents or transmission of any linked websites or social media sites.")),c.a.createElement("div",{className:"book__modal__section"},c.a.createElement("p",{className:"book__modal__head"},"Provision of Information and Privacy"),c.a.createElement("p",{className:"book__modal__text"},"You are not required to provide personal information to us. If you provide information to us, you will ensure that such information is accurate and complete.",c.a.createElement("br",null),"We collect the personal information provided to us and may use it for communicating with you, statistical analysis, and research and development.",c.a.createElement("br",null),"We do not generally disclose personal information to third parties for use for their own purposes. In some instances, we may do so, including to our affiliates or providers who complete transactions or perform services on our behalf, or if we are required to by law.",c.a.createElement("br",null),"Any personal information you provide to us may be stored on our providers\u2019 secure servers. This may involve transferring your information to countries which have less legal protection for personal information than the countries in which you or we are based.",c.a.createElement("br",null),"We may also collect technical data and related information when you access or log on to the Site. This may include information about your computer/tablet/mobile phone and the way users arrive at, browse or interact with the Site. We may collect this information through the use of cookies or other means. If you want to disable cookies, you can do so by changing your browser settings, although this may alter the functionality of the Site. We use the technical information collected to have a better understanding of how people use the Site and how we might improve it")),c.a.createElement("div",{className:"book__modal__section"},c.a.createElement("p",{className:"book__modal__head"},"All Liabilities Excluded"),c.a.createElement("p",{className:"book__modal__text"},"You agree that your use of this Site is at your sole risk. Because of the number of possible sources of information available through the Site, and the inherent hazards and uncertainties of electronic distribution, there may be delays, omissions, inaccuracies or other problems with such information.",c.a.createElement("br",null),"To the extent permitted by law:"),c.a.createElement("ol",null,c.a.createElement("li",{className:"book__modal__text"},"all warranties, representations and guarantees are excluded, including suitability, fitness for purpose, appropriateness, availability for use, accuracy or completeness of the Site or the content on or accessed through it;"),c.a.createElement("li",{className:"book__modal__text"},"under no circumstances shall Agnikul or its affiliates, agents or licensors be liable to you or anyone else for any damages (whether direct, indirect, punitive, incidental, special, consequential or otherwise, or whether resulting from tort, contract or other theories of law) including but not limited to attorneys\u2019 fees and lost profits, in connection with, or in any manner arising out of: (1) the use or inability to use this Site and its content; (2) any goods or services obtained through third parties referenced or made available on or through this Site; (3) any errors or omissions in the content or information on the Site; or (4) any computer virus or other programming device, even if Agnikul is advised of the possibility thereof; and"),c.a.createElement("li",{className:"book__modal__text"},"you indemnify us against all loss we suffer or incur as a direct or indirect result of your failure to comply with this Agreement.")),c.a.createElement("p",{className:"book__modal__text"},"If you become dissatisfied with this Site, or the terms, conditions or policies governing this Site, your sole and exclusive remedy is to discontinue using this Site. This limitation on damages is essential to the agreement between you and us and the Site would not be provided free of charge without such limitation.")),c.a.createElement("div",{className:"book__modal__section"},c.a.createElement("p",{className:"book__modal__head"},"Governing Law and Jurisdiction"),c.a.createElement("p",{className:"book__modal__text"},"The Site, all related content, and this Agreement shall be governed by and construed in accordance with the laws of India, without regard to the principles of conflicts of laws. The courts of Chennai, India shall have exclusive jurisdiction on any dispute that arises in relation to this Agreement or your use of the Site.")),c.a.createElement("div",{className:"book__modal__section"},c.a.createElement("p",{className:"book__modal__head"},"Amendments"),c.a.createElement("p",{className:"book__modal__text"},"We may amend this Agreement from time to time, and you should ensure that you check and read the same regularly. If you continue to use the Site after this Agreement is amended, you are deemed to have agreed with the new terms of this Agreement.")),c.a.createElement("div",{className:"book__modal__section"},c.a.createElement("p",{className:"book__modal__head"},"Contact"),c.a.createElement("p",{className:"book__modal__text"},"If you have any queries, please contact privacy@agnikul.in"))))),c.a.createElement("div",{className:"footer"},c.a.createElement("div",{className:"first-row"}),c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"row border-row"},c.a.createElement("div",{className:"col-sm"},c.a.createElement("p",{className:"footer-normal phone"},"Phone"),c.a.createElement("p",{className:"footer-bolder"},"+32 50 31 28 32, +91 99625 075240, ",c.a.createElement("br",null)," +91 96772 82356, +1 551 689 2314")),c.a.createElement("div",{className:"col-sm"},c.a.createElement("p",{className:"footer-normal"},"Launch Services"),c.a.createElement("p",{className:"footer-bold"},"payloadpeople@gnikul.in")),c.a.createElement("div",{className:"col-sm"},c.a.createElement("p",{className:"footer-normal"},"Careers"),c.a.createElement("p",{className:"footer-bold"},"humancapital@agnikul.in"))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm"},c.a.createElement("p",{className:"footer-normal"},"Agnikul Cosmos Private Limited."),c.a.createElement("p",{className:"footer-bolder"},"National Center for Combustion R&D, ",c.a.createElement("br",null),"3rd floor, IIT Madras, ",c.a.createElement("br",null)," Chennai 600036")),c.a.createElement("div",{className:"col-sm border-column"},c.a.createElement("p",{className:"footer-normal"},"Agnikul Cosmos Launch Vehicles Private Limited"),c.a.createElement("p",{className:"footer-bolder"},"Kerala Startup Mission, Technopark, Thejaswini, G3B, Technopark Rd, Karyavattom, Thiruvananthapuram, Kerala 695581")),c.a.createElement("div",{className:"col-sm"},c.a.createElement("p",{className:"footer-bold"},"Blog"),c.a.createElement("p",{className:"footer-bold"},c.a.createElement(v.b,{to:"/news",className:"footer-bold"},"News")),c.a.createElement("p",{className:"footer-bold"},"Videos"),c.a.createElement("p",{className:"footer-bold book__terms__link"},"Privacy Policy"),c.a.createElement("div",{className:"footer-social-logos"},c.a.createElement("i",{className:"fa fa-facebook","aria-hidden":"true"}),c.a.createElement("i",{className:"fa fa-google-plus","aria-hidden":"true"}),c.a.createElement("i",{className:"fa fa-twitter","aria-hidden":"true"}),c.a.createElement("i",{className:"fa fa-linkedin","aria-hidden":"true"})))))))}}]),t}(r.Component);a.default=x},35:function(e,a,t){e.exports=t.p+"static/media/logo.6463c17c.png"},36:function(e,a,t){"use strict";var o=t(18),n=t.n(o);a.a=function(){var e=document.getElementById("myTopnav");!1===e.classList.contains("responsive")?(e.classList.add("responsive"),n()(".navBar").addClass("responsive")):(e.classList.remove("responsive"),n()(".navBar").removeClass("responsive"))}},43:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAGKADAAQAAAABAAAAGAAAAADiNXWtAAAB/0lEQVRIDa2UzytEURTHvfIjSwqL8WMlCz8XlrIgCywsFAvFQskGK2VlYaOYrDQLSikShaX8BZYWbEiISCxIyY9ifM70Lufd7pt5fpz6zD3n3O/9nnnz3jwv6x8jmUzmY9cAFRCD3Ww+/hSYFmMwAL1QD9ozSf27wLgNNuENwqJHTwtM4oRHoxZaoABuYAFKIAFdkCnOnQLMO+FYfa1b8kYYggfVT5e+spkXGEAjB9asUyfUlZCw+pnKPZf5tnXqgDoG61Y/SjlqDxi0Tj1SyzffsPpRymdEct++g4b8PPoKeqgnwY59GnGQNSxWvp1VhtoMmSdvhw/LQUxTT56sEDakSdkGUw7JkEK4ADviWs2mXIkdq1rjzDkxZ5/y60xXcIeuyGlqmgjK4MU3dC0yJOwe9LGXY7ycKwL7aXINcfVmaDbDiNPYNBGYG+0yCestsVEN9zBlvEJXRD8Zsoy+HC5BYizUWG8gzDTkHc041IB+b9Vpn1SOIBem4dpHcumFDTljrxX64QlMyCB5CweD5oRRqHVaVNR6iLwCZkH+J4tgR0fQ2a9QXdlK6msjJpchw1AqPb/eZtWxZvSBFUWVVqn8a0DggF+g01e2JbVLJ9+mW5nqNPUTOQ8Fh8j/xm0uOjblSdAhP5fck9x05lH35M2444tPWQ89zzuKejiK7hPVrM8nRdbYXwAAAABJRU5ErkJggg=="},90:function(e,a,t){},91:function(e,a,t){e.exports=t.p+"static/media/group-9255.47f3ec05.png"},92:function(e,a,t){e.exports=t.p+"static/media/Asiapacific.d4e8f94b.png"},93:function(e,a,t){e.exports=t.p+"static/media/India.11d2e85f.png"},94:function(e,a,t){e.exports=t.p+"static/media/Northernamerica.83b2f2f4.png"},95:function(e,a,t){e.exports=t.p+"static/media/Northerneurope.be4b47a8.png"}}]);
//# sourceMappingURL=8.af6880d3.chunk.js.map