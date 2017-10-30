function MainPageLoader2(){this.init()}function Menu(){var e=$(".js-menu"),t=$(".mob-menu"),i="active",n="menu-open";e.add(t).on("click",function(a){if(!e.hasClass("anim")){if(e.addClass("anim"),e.hasClass(i)){var o=$(".mob-menu-inner");o.is(a.target)||0!==o.has(a.target).length||(setTimeout(function(){e.removeClass(i)},400),t.removeClass(i),conf.body.removeClass(n),window.__prevScrollTop&&window.scroll(0,window.__prevScrollTop),window.__prevScrollTop=null)}else{var s=$(window).scrollTop();window.__prevScrollTop=s,e.addClass(i),t.addClass(i),document.body.style.top=-s+"px",window.scroll(0,window.__prevScrollTop),conf.body.addClass(n)}setTimeout(function(){e.removeClass("anim")},500)}})}function scaleVideoContainer(){var e=$(".video-container").height()+5,t=parseInt(e)+"px";$(".homepage-hero-module").css("height",t)}function initBannerVideoSize(e){$(e).each(function(){$(this).data("height",$(this).height()),$(this).data("width",$(this).width())}),scaleBannerVideoSize(e)}function scaleBannerVideoSize(e){var t,i,n=$(".video-container").width(),a=$(".video-container").outerHeight()+5;$(e).each(function(){var e=$(this).data("height")/$(this).data("width");$(this).width(n),n<1e3&&(i=a,t=i/e,$(this).css({"margin-top":0,"margin-left":-(t-n)/2+"px"}),$(this).width(t).height(i)),$(".homepage-hero-module .video-container video").addClass("fadeIn animated")})}function SearchForm(e){var t=this;t.initEvents=function(){t.el.on("focus",t.iFocus),t.el.on("blur",function(e){$(e.relatedTarget).hasClass("search-submit")||t.iBlur()}),t.el.on("input",t.iInput),t.submit.on("click",t.initSubmit),t.reset.on("click",t.iReset),this.el.on("click",function(){var e=$(this);e.removeAttr("readonly"),setTimeout(function(){e.trigger("change click"),e.focus()},500)})},t.iInput=function(){t.iVal=$(this).val(),0!=t.iVal?(t.reset.addClass(t.def.resetClass),t.form.addClass(t.def.active),t.placeHold.hide()):(t.reset.removeClass(t.def.resetClass),t.form.removeClass(t.def.active),t.placeHold.show())},t.iFocus=function(){t.iVal=t.el.val(),t.parent.addClass(t.def.open),t.submit.attr("type","submit"),0!=t.iVal.length&&t.form.addClass(t.def.active)},t.iBlur=function(){t.iVal=t.el.val(),0==t.iVal.length&&(t.parent.removeClass(t.def.open),t.submit.attr("type","button"))},t.iReset=function(){t.reset.removeClass(t.def.resetClass),t.form.removeClass(t.def.active),t.submit.attr("type","button"),t.el.attr("value",""),t.el.val(""),t.el.focus(),t.placeHold.show()},t.initSubmit=function(){return"submit"!==t.submit.attr("type")?t.el.trigger("focus"):alert("Send form!"),!1},t.iDetected=function(e){0!=t.iVal.length&&(t.iFocus(),t.reset.addClass(t.def.resetClass),t.placeHold.hide())},t.generatePlaceeholder=function(){var e=document.createElement("span");e.classList.add("placeholder");var i=this.el.data("placeholder");e.textContent=i,$(e).insertAfter(this.el),t.placeHold=$(".placeholder")},t.init=function(){t.el=e,t.parent=t.el.parent(),t.iVal=t.el.val(),t.submit=t.parent.find(".search-submit"),t.reset=t.parent.find(".search-reset"),t.form=t.el.parents("form"),t.def={open:"open",resetClass:"show",active:"not-empty"},t.generatePlaceeholder(),t.iDetected(),t.initEvents()},e.length&&t.init()}function promoslider(){$(".js-promoslider").each(function(){var e=$(this),t=e.closest(".promo-slider"),i=e.find(".promo-slider-item"),n=t.find(".js-promo-link");e.on("init reInit afterChange",function(e,t,a,o){var s=i.filter(".slick-current"),r=s.data("href");n.attr("href",r)}),e.slick({accessibility:!1,arrows:!0,dots:!1,fade:!0,touchMove:!1,dragable:!1,infinite:!0,slidesToShow:1,slidesToScroll:1,speed:1e3})})}function lazyImage(){function e(e){return new Promise(function(t,i){var n=new Image;n.src=e,n.onload=t,n.onerror=i})}function t(t){var i=t.dataset.src;if(i)return e(i).then(function(){n(t,i)})}function i(e){0===l&&c.disconnect(),e.forEach(function(e){e.intersectionRatio>0&&(l--,c.unobserve(e.target),t(e.target))})}function n(e,t){e.classList.add("js-image-handled"),e.classList.contains("bg")?e.style.backgroundImage="url("+t+")":e.src=t,e.classList.add("fade-in")}for(var a=document.querySelectorAll(".js-image"),o=[],s=0;s<a.length;s++)o.push(a[s]);var r={rootMargin:"0px 0px",threshold:.01},l=o.length,c=void 0;if("IntersectionObserver"in window){c=new IntersectionObserver(i,r);for(var s=0;s<l;s++){if(o[s].classList.contains("js-image-handled"))return;c.observe(o[s])}}else for(var s=0;s<l;s++)t(o[s]);if(window.navigator.userAgent.indexOf("Edge")>-1)for(var s=0;s<l;s++)t(o[s])}function Ytube(){for(var e=document.querySelectorAll(".youtube-slide"),t=0;t<e.length;t++){var i="https://img.youtube.com/vi/"+e[t].dataset.embed+"/mqdefault.jpg",n=$(e[t]).parent(),a=new Image;a.src=i,a.addEventListener("load",function(){e[t].appendChild(a)}(t)),e[t].addEventListener("click",function(){var e=document.createElement("iframe");e.setAttribute("frameborder","0"),e.setAttribute("allowfullscreen",""),n.hasClass("prod-eleminner-images")?e.setAttribute("src","https://www.youtube.com/embed/"+this.dataset.embed+"?wmode=opaque&rel=0&showinfo=0&autoplay=1"):e.setAttribute("src","https://www.youtube.com/embed/"+this.dataset.embed+"?rel=0&showinfo=0"),this.innerHTML="",this.appendChild(e)})}}function Parallax(e){$(window).off("scroll.prl").on("scroll.prl",function(){var t,i,n,a,o,s,r,l,c,d,u,p,m=$(window).scrollTop(),f=conf.body[0].scrollHeight,h={};e.each(function(){if(h={},t=$(this),u=t.data("axis")||"y",!t.length)return!1;p=conf.footer,i=t.parent(),n=i[0].getBoundingClientRect(),s=parseInt(t.data("speed"),10)/109||.08,r=parseInt(t.data("direction"),10)||1,a=i.offset().top,o=($(window).height()-n.height)/2,0>o&&m+n.top<=p.outerHeight()&&(o=0);var e=r;2==r&&(e=-1),l=Math.round((n.top-o)*s)*e,0===m?2==r&&(l=0):(c=f,d=$(window).height()+m,c-a-i.outerHeight()<=2&&(c-d)/c===0&&(l=0)),h[u]=l,TweenMax.to(t,.1,h)})})}function teamslider(){$(".js-team-slider").each(function(){var e=$(this),t=e.parent();e.slick({accessibility:!1,lazyLoad:"ondemand",arrows:!0,dots:!1,fade:!0,touchMove:!1,dragable:!1,infinite:!1,slidesToShow:1,slidesToScroll:1,appendArrows:t.find(".slider-nav"),prevArrow:conf.arnprevcontent,nextArrow:conf.arnextcontent})})}function moreslider(){$(".js-moreslider").each(function(){var e=$(this),t=e.parent();e.slick({accessibility:!1,arrows:!0,dots:!1,fade:!1,touchMove:!1,dragable:!1,infinite:!1,slidesToShow:e.hasClass("w3")?3:2,slidesToScroll:1,appendArrows:t.find(".slider-nav"),prevArrow:conf.arnprevcontent,nextArrow:conf.arnextcontent})})}function feedbackslider(){$(".js-feedbackslider-main").each(function(){var e=$(this),t=e.parent();e.slick({accessibility:!1,arrows:!0,dots:!1,fade:!0,touchMove:!1,dragable:!1,infinite:!1,slidesToShow:1,speed:1e3,slidesToScroll:1,asNavFor:t.find(".js-feedbackslider-bg"),appendArrows:t.find(".slider-nav"),prevArrow:conf.arnprevcontent,nextArrow:conf.arnextcontent})}),$(".js-feedbackslider-bg").each(function(){var e=$(this),t=e.parent();e.slick({accessibility:!1,arrows:!1,dots:!1,fade:!0,touchMove:!1,dragable:!1,infinite:!1,speed:1e3,slidesToShow:1,slidesToScroll:1,asNavFor:t.find(".js-feedbackslider-main")})})}function scrollAnimations(){inView.offset({top:0,bottom:0}),inView.threshold(.1);document.querySelectorAll(".anim-cont");inView(".anim-cont").on("enter",function(e){e.done||e.classList.add("active")}).on("exit",function(e){e.done=!0}),inView(".projects-wrap").on("enter",function(e){e.done||(e.classList.add("active"),tabs.init())}).on("exit",function(e){e.done=!0})}function tabsanim(e){this.wrap=e,this.opts={act:"active",off:"off",timer:4500},this.current,this.interval,this.findElems()}function review(e){this.elems=$(e),this.modal=$('[data-modal="review"]'),this.targetcont=this.modal.find(".js-review-target"),this.height=123,this.checkheight()}function slided(e){this.wrap=$(e),this.opts={act:"active",slide:".carousel_layout-item",vsisibliSlides:":nth-child(-n+3)",layout:".carousel_layout",btn:".carousel_navi",btnspin:"spin"},this.findElems()}function stickinit(){setTimeout(function(){$(".js-stick").stick_in_parent({parent:".js-stick-parent",offset_top:170})},1)}function ProdinnerHead(){var e=$(".js-prod-head"),t=e.find(".columns:first-child").find(".prod-nav-link"),i=t.find(".prod-nav-link-text"),n=e.find(".columns:last-child").find(".prod-nav-link"),a=n.find(".prod-nav-link-text"),o=e.find(".columns:nth-child(2)").find(".text"),s=($(".page-head").height(),$(".barba-container").last()),r=s.data("next-link"),l=s.data("next-text"),c=s.data("prev-link"),d=s.data("prev-text"),u=s.data("cur-text");t.attr("href",r),n.attr("href",c),i.text(l),a.text(d),o.text(u),e.addClass("active")}function returnStickPos(e,t){var i=$(window).scrollTop(),n=parseInt(t);e.height();"fixed"==e.css("position")&&e.css("top",i+n-80)}function initMap(){var e=$("#map");opts={zoom:12,fullscreenControl:!0,scrollwheel:!1,mapTypeControl:!1,scaleControl:!1,streetViewControl:!1,gestureHandling:"cooperative",zoomControlOptions:{position:google.maps.ControlPosition.RIGHT_CENTER},styles:[{featureType:"administrative",elementType:"labels.text.fill",stylers:[{color:"#444444"}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#f2f2f2"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"all",stylers:[{saturation:-100},{lightness:45}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{visibility:"on"},{color:"#173e7e"}]}]},initialize(e[0])}function initialize(e){var t=e,i=parseFloat(t.getAttribute("data-lat")),n=parseFloat(t.getAttribute("data-lon")),a=t.getAttribute("data-icon"),o=new google.maps.LatLng(i,n);mapvar=new google.maps.Map(t,opts),mapvar.setCenter(o);var s={url:a,size:new google.maps.Size(53,85),origin:new google.maps.Point(0,0),scaledSize:new google.maps.Size(26.5,42.5),anchor:new google.maps.Point(13.25,42.5)};new google.maps.Marker({position:o,map:mapvar,icon:s,zIndex:99999});e.classList.add("inited")}function googleMaps(){var e=document.createElement("script");"object"!=typeof google?(e.setAttribute("type","text/javascript"),e.setAttribute("src","https://maps.googleapis.com/maps/api/js?key=AIzaSyDcFkgUmSnM7fy40cDnRn8BB_xu1cp7Ros&callback=initMap"),document.getElementById("map").appendChild(e)):initialize(document.getElementById("map"))}function scrollToEl(){$(".js-scroll-to").on("click",function(e){e.preventDefault(),e.stopPropagation();var t,i=$(this).data("href"),n=$("body").find('[data-id="'+i+'"]'),a=80;$(this).hasClass("to-top")&&(t=0,$("html, body:not(:animated), .out:not(:animated)").animate({scrollTop:t},600)),n.length&&(t=$(n).offset().top,$("html, body:not(:animated), .out:not(:animated)").animate({scrollTop:t-a},600))})}function loadState(){var e=window.location.pathname,t=document.querySelectorAll('[href="'+e+'"]'),i=document.querySelectorAll(".js-nav");Array.prototype.forEach.call(i,function(e){return e.classList.remove("active")}),Array.prototype.forEach.call(t,function(e){return e.classList.add("active")})}function MapTriggers(){var e=$(".tabs-triggerwrap"),t=e.find("svg"),i=e.find(".tabs-item"),n=e.find(".mapblock");i.each(function(){var e=$(this),i=e.data("id");e.on("click",function(){var a=$(window).scrollTop(),o=$(".logistics").offset().top;if(a>o-100)$("html, body:not(:animated), .out:not(:animated)").animate({scrollTop:o-180},650,function(){return e.hasClass("item-all")?(t.attr("class","").addClass("move"+i),e.addClass("active").siblings(".tabs-item").removeClass("active"),n.removeClass("active").removeClass("hidden"),void n.filter('[data-id="'+i+'"]').addClass("active").removeClass("hidden").siblings(".mapblock").removeClass("active").addClass("hidden")):(t.attr("class","").addClass("move"+i),e.addClass("active").siblings(".tabs-item").removeClass("active"),void n.filter('[data-id="'+i+'"]').addClass("active").removeClass("hidden").siblings(".mapblock").removeClass("active").addClass("hidden"))});else{if(e.hasClass("item-all"))return t.attr("class","").addClass("move"+i),e.addClass("active").siblings(".tabs-item").removeClass("active"),n.removeClass("active").removeClass("hidden"),void n.filter('[data-id="'+i+'"]').addClass("active").removeClass("hidden").siblings(".mapblock").removeClass("active").addClass("hidden");t.attr("class","").addClass("move"+i),e.addClass("active").siblings(".tabs-item").removeClass("active"),n.filter('[data-id="'+i+'"]').addClass("active").removeClass("hidden").siblings(".mapblock").removeClass("active").addClass("hidden")}})}),n.each(function(){var e=$(this),n=e.data("id");e.on("click",function(){t.attr("class","").addClass("move"+n),e.removeClass("hidden").addClass("active").siblings(".mapblock").removeClass("active").addClass("hidden"),i.filter('[data-id="'+n+'"]').addClass("active").siblings().removeClass("active")})})}function animateMap(){var e=$(".tabs-map");if(e.length){document.querySelectorAll(".mapblock");setTimeout(function(){e.addClass("animating")},750),setTimeout(function(){e.removeClass("animating")},5500)}}$(window).on("load",function(){lazyImage(),loadState()}),MainPageLoader2.prototype={init:function(){this.images=document.querySelectorAll("img"),this.images_total_count=this.images.length,this.images_loaded_count=0,this.preloader=document.querySelector(".preloader"),this.preloaderContainer=this.preloader.querySelector(".preloader-inner"),this.preloaderSmall=this.preloader.querySelector(".preloader-item.small .preloader-item-inner"),this.preloaderBig=this.preloader.querySelector(".preloader-item.big .preloader-item-inner"),this.percent_display=document.querySelector(".preloader-counter"),this.progress=0,this.persent=100/this.images_total_count,this.smallScaleX=1.1,this.smallScaleY=1.11,this.BigScaleX=1.13,this.BigScaleY=1.08,this.createImageClone(),this.prevValue=0},createImageClone:function(){for(var e=0;e<this.images_total_count;e++)image_clone=new Image,image_clone.src=this.images[e].src||this.images[e].dataset.src,image_clone.onload=this.imageLoaded.bind(this),image_clone.onerror=this.imageLoaded.bind(this)},imageLoaded:function(){var e=this;this.prevValue=100/this.images_total_count*this.images_loaded_count<<0,this.images_loaded_count++,this.percent_display.innerHTML=100/this.images_total_count*this.images_loaded_count<<0,$(this.percent_display).prop("Counter",0).animate({Counter:parseInt(100/this.images_total_count*this.images_loaded_count<<0)},{duration:10,easing:"swing",step:function(e){$(this).text(parseInt(e))},complete:function(){}}),TweenMax.to(this.preloaderSmall,.1,{scaleX:(this.smallScaleX-1)/this.images_total_count*(this.images_total_count-this.images_loaded_count)+1,scaleY:(this.smallScaleY-1)/this.images_total_count*(this.images_total_count-this.images_loaded_count)+1,ease:Expo.easeOut}),TweenMax.to(this.preloaderBig,.1,{scaleX:(this.BigScaleX-1)/this.images_total_count*(this.images_total_count-this.images_loaded_count)+1,scaleY:(this.BigScaleY-1)/this.images_total_count*(this.images_total_count-this.images_loaded_count)+1,ease:Expo.easeOut}),this.images_loaded_count===this.images_total_count&&setTimeout(function(){e.completeAnimation()},700)},completeAnimation:function(){var e=this;this.logo=document.querySelector(".logo"),this.logoOffset=this.logo.getBoundingClientRect(),this.logoWidth="37px",this.logoHeight="25px",this.logoTop=25,TweenMax.to(this.preloaderContainer,.8,{delay:.5,width:e.logoWidth,height:e.logoHeight,ease:Expo.easeOut,x:this.logoOffset.left-6,y:this.logoTop}),TweenMax.to(this.preloader,.3,{delay:.75,autoAlpha:0,force3D:!0,onStart:function(){document.body.classList.remove("loading")}})}},new MainPageLoader2,document.addEventListener("DOMContentLoaded",function(){function e(){$(".video-container").length&&(scaleVideoContainer(),initBannerVideoSize(".video-container .poster img"),initBannerVideoSize(".video-container .filter"),initBannerVideoSize(".video-container video"),$(window).on("resize",function(){scaleVideoContainer(),scaleBannerVideoSize(".video-container .poster img"),scaleBannerVideoSize(".video-container .filter"),scaleBannerVideoSize(".video-container video")}))}Menu();new SearchForm($(".js-input"));promoslider(),e(),$(".js-parallax").length&&Parallax($(".js-parallax")),teamslider(),scrollAnimations(),scrollToEl()});var conf={body:$("body"),html:$("html"),hidden:"is-hidden",main:$("#barba-wrapper"),wrpr:$(".block"),footer:$(".footer"),arnextcontent:'<button type="button" class="slick-next slick-arrow"><div class="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.5 40.1"><style>.starrs0{fill:#1E3E7C;}</style><path d="M4.6 20.4c-.1-.1-.1-.2-.1-.3 0-.1 0-.2.1-.3L19.3 2.6l-.2-.2.2.2c.2-.2.2-.4.2-.6 0-.3-.1-.6-.3-.7L18 .3c-.2-.2-.4-.3-.6-.3-.3 0-.6.1-.7.3L.2 19.4c-.1.2-.2.4-.2.7 0 .2.1.5.2.6l16.4 19.1c.2.2.5.3.7.3.2 0 .5-.1.6-.2l1.2-1c.2-.2.3-.5.3-.7 0-.2-.1-.5-.2-.6L4.6 20.4z" class="starrs0"/></svg></div></button>',arnprevcontent:'<button type="button" class="slick-prev slick-arrow"><div class="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.5 40.1"><style>.starrs0{fill:#1E3E7C;}</style><path d="M4.6 20.4c-.1-.1-.1-.2-.1-.3 0-.1 0-.2.1-.3L19.3 2.6l-.2-.2.2.2c.2-.2.2-.4.2-.6 0-.3-.1-.6-.3-.7L18 .3c-.2-.2-.4-.3-.6-.3-.3 0-.6.1-.7.3L.2 19.4c-.1.2-.2.4-.2.7 0 .2.1.5.2.6l16.4 19.1c.2.2.5.3.7.3.2 0 .5-.1.6-.2l1.2-1c.2-.2.3-.5.3-.7 0-.2-.1-.5-.2-.6L4.6 20.4z" class="starrs0"/></svg></div></button>',firstLoad:!1};window.Promise||(window.Promise=Promise),Array.prototype.forEach||(Array.prototype.forEach=function(e,t){var i,n;if(null==this)throw new TypeError(" this is null or not defined");var a=Object(this),o=a.length>>>0;if("function"!=typeof e)throw new TypeError(e+" is not a function");for(arguments.length>1&&(i=t),n=0;n<o;){var s;n in a&&(s=a[n],e.call(i,s,n,a)),n++}}),tabsanim.prototype={findElems:function(){this.triggers=this.wrap.querySelectorAll(".js-tabs-trigger"),this.conts=this.wrap.querySelectorAll(".js-tabs-item"),this.lines=this.wrap.querySelectorAll(".tabs-item-line"),$(this.lines).css("transition-duration",this.opts.timer+"ms"),this.iLen=this.triggers.length},init:function(){var e=this.triggers[0];this.current=e,this.toggleTab(e),this.initNext(),this.initClick(),this.wrap.classList.add("inited")},toggleTab:function(e){var t=this;$(this.triggers).removeClass(t.opts.act);var i=parseInt(e.getAttribute("data-id"));e.classList.add(t.opts.act),$(this.conts).removeClass(t.opts.act),Array.prototype.forEach.call(this.conts,function(e,n){t.conts[n].getAttribute("data-id")==i&&t.conts[n].classList.add(t.opts.act)}),clearInterval(t.interval),this.moveInterval()},initClick:function(){var e=this;Array.prototype.forEach.call(this.triggers,function(t,i){e.triggers[i].addEventListener("click",function(){var t=this;t.classList.contains(e.opts.act)||t.classList.contains(e.opts.off)||(e.toggleTab(t),e.preventClick(),e.current=t)})})},preventClick:function(){var e=this;Array.prototype.forEach.call(this.triggers,function(t,i){e.triggers[i].classList.add("off"),setTimeout(function(){e.triggers[i].classList.remove("off")},800)})},initNext:function(){this.triggersArray=Array.prototype.slice.apply(this.triggers),this.moveInterval()},moveInterval:function(){var e=this;clearTimeout(e.interval),this.interval=setTimeout(function(){curInd=e.triggersArray.indexOf(e.current),curInd<e.iLen-1?(e.current=e.triggers[curInd+1],e.toggleTab(e.current)):(e.current=e.triggers[0],e.toggleTab(e.current))},e.opts.timer)}},review.prototype={checkheight:function(){var e=this;this.elems.each(function(){var t=$(this).find(".review-item-inner"),i=t.find(".js-review-text"),n=i.height();n>e.height&&(t.addClass("cutted"),e.initclick($(this)))})},initclick:function(e){var t=this,i=e.find(".review-trigger");i.off("click").on("click",function(){var e=$(this).closest(".review-item-inner");t.targetcont.empty(),e.clone().appendTo(t.targetcont).removeClass("cutted"),t.openModal()})},openModal:function(){var e=this;this.modal.addClass("active");var t=$(window).scrollTop();window.__prevScrollTop=t,document.body.style.top=-t+"px",window.scroll(0,window.__prevScrollTop),conf.body.addClass("menu-open"),this.modal.find().add(this.modal).off("click").on("click",function(t){var i=$(".modal-container");(!i.is(t.target)&&0===i.has(t.target).length||$(".closePopup").is(t.target))&&e.closeModal()})},closeModal:function(){this.modal.removeClass("active"),window.__prevScrollTop&&window.scroll(0,window.__prevScrollTop),window.__prevScrollTop=null,conf.body.removeClass("menu-open")}},slided.prototype={findElems:function(){var e=this;this.wrap.each(function(){var t=$(this);t.slides=t.find(e.opts.slide),t.btn=t.find(e.opts.btn),1===t.slides.length&&t.btn.hide(),e.initialize(t,t.slides,t.btn)})},initialize:function(e,t,i){TweenLite.set(t.not(this.opts.vsisibliSlides),{autoAlpha:0});var n=t.filter(".active"),a=new TimelineLite;a.set(n,{x:"0",transformOrigin:"left 50%"}).set(n.next(),{x:"-3%",scaleX:.92,scaleY:.92,transformOrigin:"left 50%"}).set(n.next().next(),{x:"-5%",scaleX:.85,scaleY:.85,transformOrigin:"left 50%"}).set(n.next().next().next(),{x:"-5%",scaleX:.85,scaleY:.85,transformOrigin:"left 50%"}),this.initclick(e,i)},initclick:function(e,t){function i(){var e=$(this);e.addClass("hovered"),e.on("mouseleave",function(){e.removeClass("hovered")})}var n=this;t.on("click",function(i){i.preventDefault();var a=$(this);if(a.hasClass("animate"))return!1;a.addClass("animate"),a.addClass("spin"),setTimeout(function(){a.removeClass("spin")},500);var o=e.find(".active"),s=(e.find(n.opts.slide),o.next()),r=s.next(),l=r.next();n.refreshSlide(e,t,o,s,r,l)});var a=e.closest(".prod-elem");a.on("mouseenter",i)},refreshSlide:function(e,t,i,n,a,o){var s=this,r=new TimelineLite({onComplete:function(){var i=e.find(".active");s.circleSlide(e,i,t,n,a,o)}});r.set(i,{x:"0",autoAlpha:1,scaleX:1,scaleY:1,className:"-=active",zIndex:3}).set(n,{x:"-3%",scaleX:.92,scaleY:.92,className:"+=active",zIndex:2}).set(a,{x:"-5%",scaleX:.85,scaleY:.85,zIndex:1}).set(o,{autoAlpha:0,x:"-5%",scaleX:.85,scaleY:.85,transformOrigin:"left 50%",zIndex:0}).to(i,1,{x:"0",autoAlpha:0,scaleX:1.1,scaleY:1.1,ease:Power3.easeInOut},0).to(n,1,{x:"+=3%",scaleX:1,scaleY:1,ease:Power3.easeInOut},0).to(a,1,{x:"+=2%",scaleX:.92,scaleY:.92,ease:Power3.easeInOut},0).to(o,1,{autoAlpha:1,ease:Power3.easeInOut},0)},circleSlide:function(e,t,i,n,a,o){var s=this,r=e.find(s.opts.slide),l=t,c=l.parent(),d=new TimelineLite;l.prev().detach().appendTo(c),2===r.length?d.set(r,{x:"0",transformOrigin:"left 50%",zIndex:3}).set(r.next(),{x:"-3%",scaleX:.92,scaleY:.92,transformOrigin:"left 50%",zIndex:1}).to(r.next(),.2,{autoAlpha:1,ease:Power3.easeInOut},0):3===r.length?d.set(r,{x:"0",transformOrigin:"left 50%",zIndex:3}).set(r.next(),{x:"-3%",scaleX:.92,scaleY:.92,transformOrigin:"left 50%",zIndex:2}).set(r.next().next(),{x:"-5%",scaleX:.85,scaleY:.85,zIndex:1}).to(r.next(),.2,{autoAlpha:1,ease:Power3.easeInOut},0):d.set(r.last(),{x:"-5%",scaleX:.85,scaleY:.85,transformOrigin:"left 50%",zIndex:0}),i.removeClass("animate")}};var debounce=function(e,t,i){var n;return function(){var a=this,o=arguments,s=function(){n=null,i||e.apply(a,o)},r=i&&!n;clearTimeout(n),n=setTimeout(s,t),r&&e.apply(a,o)}},sortItem=function(){var e=$(".js-select-item");e.each(function(){var t=$(this),i=t.find(".js-trgt-text"),n=t.parent().find(".dropdown-target"),a=n.find(".sort-select-item a");t.on("click",function(){e.removeClass("active"),t.toggleClass("active")}),a.each(function(){var t=$(this);t.on("click",function(a){var o=t.data("text");i.text(o),t.parent().addClass("active").siblings().removeClass("active"),a.preventDefault(),setTimeout(function(){n.removeClass("active"),e.removeClass("active")},300)})}),$(document).on("click touchstart",function(t){e.is(t.target)||0!==e.has(t.target).length||e.removeClass("active")})})},opts,BarbaWitget={init:function(){var e=this;Barba.Pjax.start(),Barba.Prefetch.init(),Barba.Pjax.getTransition=function(){return e.MovePage},Barba.Dispatcher.on("newPageReady",function(e){var t=e.url.split(window.location.origin)[1].substring(0),i=document.querySelectorAll(".js-nav"),n=document.querySelectorAll('[href="'+t+'"]');Array.prototype.forEach.call(i,function(e){return e.classList.remove("active")}),Array.prototype.forEach.call(n,function(e){return e.classList.add("active")})}),Barba.Dispatcher.on("transitionCompleted",function(e,t){$(".js-parallax").length&&Parallax($(".js-parallax")),scrollAnimations(),lazyImage(),scrollToEl()})},MovePage:Barba.BaseTransition.extend({start:function(){Promise.all([this.newContainerLoading,this.fadeOut()]).then(this.fadeIn.bind(this))},fadeOut:function(){Barba.Utils.deferred();return $(".js-menu").add(".mob-menu").removeClass("active"),conf.body.removeClass("menu-open"),window.__prevScrollTop&&window.scroll(0,window.__prevScrollTop),window.__prevScrollTop=null,$(this.oldContainer).animate({opacity:0},1e3,function(){}).addClass("moveDown").promise()},fadeIn:function(){var e=this,t=$(this.newContainer);t.find(".js-promoslider").length&&promoslider(),$(this.oldContainer).hide(),t.addClass("moveUp"),TweenMax.set(t,{force3D:!0,y:200,onComplete:function(){$(window).scrollTop(0,0),TweenMax.to(t,.5,{y:0,force3D:!0,autoAlpha:1,onComplete:function(){TweenMax.set(t,{clearProps:"all"}),t.removeClass("moveUp"),e.done()}})}})}})},IndexPage=Barba.BaseView.extend({namespace:"index",onEnter:function(){},onEnterCompleted:function(){teamslider();var e=document.querySelector(".js-tabs-cont");tabs=new tabsanim(e)},onLeaveComplete:function(){delete tabs}}),Production=Barba.BaseView.extend({namespace:"Production",onEnter:function(){var e=document.querySelectorAll(".carousel_layout-container");e=new slided(e)},onEnterCompleted:function(){console.log("onEnterCompleted"),Ytube()},onLeaveComplete:function(){console.log("onLeaveComplete")}}),ProductionInner=Barba.BaseView.extend({namespace:"Production-inner",onEnter:function(){Ytube()},onLeave:function(){var e=$(".js-stick"),t=e.css("top");"auto"!=t&&returnStickPos(e,t),$(".js-prod-head").removeClass("active")},onEnterCompleted:function(){stickinit(),moreslider(),ProdinnerHead()},onLeaveComplete:function(){}}),NewsInner=Barba.BaseView.extend({namespace:"news-inner",onEnter:function(){},onLeave:function(){var e=$(".js-stick"),t=e.css("top");"auto"!=t&&returnStickPos(e,t)},onEnterCompleted:function(){stickinit(),moreslider()},onLeaveComplete:function(){}}),PojectsPage=Barba.BaseView.extend({namespace:"Projects",onEnter:function(){},onEnterCompleted:function(){sortItem()},onLeaveComplete:function(){}}),contacts=Barba.BaseView.extend({namespace:"Contacts",onEnter:function(){},onEnterCompleted:function(){googleMaps()},onLeaveComplete:function(){}}),content=Barba.BaseView.extend({namespace:"Content",onEnter:function(){animateMap();var e=document.querySelectorAll(".review-item");e.length&&(revfunc=new review(e))},onEnterCompleted:function(){feedbackslider(),MapTriggers()},onLeaveComplete:function(){}});IndexPage.init(),Production.init(),ProductionInner.init(),PojectsPage.init(),contacts.init(),content.init(),NewsInner.init(),BarbaWitget.init();