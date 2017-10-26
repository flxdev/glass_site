$(window).on('load',function(){
	lazyImage();
	// if(conf.firstLoad == false){
	loadState();
	// 	conf.firstLoad = true
	// }

});
// main preloader site
// function MainPageLoader(){
// 	this.init();
// };
// MainPageLoader.prototype = {
// 	init: function(){
// 		this.images = document.images;
// 		this.images_total_count = this.images.length;
// 		this.images_loaded_count = 0;
// 		this.preloader = document.querySelector('.preloader');
// 		this.preloaderContainer = this.preloader.querySelector('.preloader-inner');
// 		this.preloaderSmall = this.preloader.querySelector('.preloader-item.small .preloader-item-inner');
// 		this.preloaderBig = this.preloader.querySelector('.preloader-item.big .preloader-item-inner');
// 		this.percent_display = document.querySelector('.preloader-counter');
// 		this.createImageClone();
// 		this.prevValue = 0;
// 		this.loadAnimation();
// 	},
// 	createImageClone: function(){
// 		for(var i = 0; i < this.images_total_count; i++) {
// 			image_clone = new Image();
// 			image_clone.onload = this.imageLoaded.bind(this);
// 			image_clone.onerror = this.imageLoaded.bind(this);
// 			image_clone.src = this.images[i].src;
// 		}
// 	},
// 	imageLoaded: function(){
// 		var self = this;
// 		this.prevValue = (((100 / this.images_total_count) * this.images_loaded_count) << 0);
// 		this.images_loaded_count++;

// 		// console.log((((100 / this.images_total_count) * this.images_loaded_count) << 0) + "%")
// 		this.percent_display.innerHTML = (((100 / this.images_total_count) * this.images_loaded_count) << 0);
// 		$(this.percent_display).prop('Counter',0).animate({
// 			Counter: parseInt(((100 / this.images_total_count) * this.images_loaded_count) << 0)
// 		}, {
// 			duration: 10,
// 			easing: 'swing',
// 			step: function (now) {
// 				$(this).text(parseInt(now));
// 			},
// 			complete: function(){
// 				if (parseInt($(this).text()) == 100){
// 					setTimeout(function(){
// 						self.completeAnimation();
// 					},500)
// 				}
// 			}
// 		});
// 	},
// 	loadAnimation: function(){
// 		this.preloader.classList.add('half')
// 	},
// 	completeAnimation: function(){
// 		var self = this;
// 		this.logo = document.querySelector('.logo');
// 		this.logoOffset = this.logo.getBoundingClientRect();
// 		this.logoWidth = '37px';
// 		this.logoHeight = '25px';
// 		this.logoTop = 25;
// 		TweenMax.to(this.preloaderContainer,.8,{
// 			delay: .5,
// 			width: self.logoWidth,
// 			height: self.logoHeight,
// 			ease: Expo.easeOut,
// 			x: this.logoOffset.left - 6,
// 			y: this.logoTop
// 		});
// 		TweenMax.to(this.preloader,.3,{
// 			delay: .7,
// 			autoAlpha: 0,
// 			onComplete: function () {
// 				document.body.classList.remove('loading')
// 			}
// 		});
// 	}
// }
// new MainPageLoader();
function MainPageLoader2(){
	this.init();
	
};
MainPageLoader2.prototype = {
	init: function(){
		this.images = document.querySelectorAll('img');
		this.images_total_count = this.images.length;
		this.images_loaded_count = 0;
		this.preloader = document.querySelector('.preloader');
		this.preloaderContainer = this.preloader.querySelector('.preloader-inner');
		this.preloaderSmall = this.preloader.querySelector('.preloader-item.small .preloader-item-inner');
		this.preloaderBig = this.preloader.querySelector('.preloader-item.big .preloader-item-inner');
		this.percent_display = document.querySelector('.preloader-counter');
		this.progress = 0;
		this.persent = 100 / this.images_total_count;
		this.smallScaleX = 1.1;
		this.smallScaleY = 1.11;
		this.BigScaleX = 1.13;
		this.BigScaleY = 1.08;
		this.createImageClone();
		this.prevValue = 0;
		
		// this.loadAnimation();
	},
	createImageClone: function(){
		for(var i = 0; i < this.images_total_count; i++) {
			image_clone = new Image();
			image_clone.src = this.images[i].src || this.images[i].dataset.src;
			image_clone.onload = this.imageLoaded.bind(this);
			image_clone.onerror = this.imageLoaded.bind(this);
		}
	},
	imageLoaded: function(){
		var self = this;
		this.prevValue = (((100 / this.images_total_count) * this.images_loaded_count) << 0);
		this.images_loaded_count++;

		// console.log((((100 / this.images_total_count) * this.images_loaded_count) << 0) + "%")
		this.percent_display.innerHTML = (((100 / this.images_total_count) * this.images_loaded_count) << 0);
		// this.progress += this.persent;
		// this.percent_display.textContent = parseInt(this.progress);
		$(this.percent_display).prop('Counter',0).animate({
			Counter: parseInt(((100 / this.images_total_count) * this.images_loaded_count) << 0)
		}, {
			duration: 10,
			easing: 'swing',
			step: function (now) {
				$(this).text(parseInt(now));
			},
			complete: function(){
				// alert()
				// if (parseInt($(this).text()) === 100){

				// }

			}
		});
		TweenMax.to(this.preloaderSmall,.1,{
			scaleX: (this.smallScaleX - 1) / this.images_total_count * (this.images_total_count - this.images_loaded_count) + 1,
			scaleY: (this.smallScaleY - 1) / this.images_total_count * (this.images_total_count - this.images_loaded_count) + 1,
			ease: Expo.easeOut,
		});
		TweenMax.to(this.preloaderBig,.1,{
			scaleX: (this.BigScaleX - 1) / this.images_total_count * (this.images_total_count - this.images_loaded_count) + 1,
			scaleY: (this.BigScaleY - 1) / this.images_total_count * (this.images_total_count - this.images_loaded_count) + 1,
			ease: Expo.easeOut,
		});
		if(this.images_loaded_count === this.images_total_count){
			setTimeout(function(){
				self.completeAnimation();
			},700)
		}
	},
	// loadAnimation: function(){
	// 	this.preloader.classList.add('half')
	// },
	completeAnimation: function(){
		var self = this;
		this.logo = document.querySelector('.logo');
		this.logoOffset = this.logo.getBoundingClientRect();
		this.logoWidth = '37px';
		this.logoHeight = '25px';
		this.logoTop = 25;
		TweenMax.to(this.preloaderContainer,.8,{
			delay: .5,
			width: self.logoWidth,
			height: self.logoHeight,
			ease: Expo.easeOut,
			x: this.logoOffset.left - 6,
			y: this.logoTop
		});
		TweenMax.to(this.preloader,.3,{
			delay: .75,
			autoAlpha: 0,
			force3D:true,
			onStart: function() {
				document.body.classList.remove('loading')
			}
		});
	}
}
new MainPageLoader2();
document.addEventListener("DOMContentLoaded", function() {
	Menu();
	var searchInput = new SearchForm($(".js-input"));
	promoslider();
	function scaleVideo(){
		if($('.video-container').length){
			// if(isMobile()){
			// 	$('.video-container').find('.video-container-inner').remove();
			// }
			scaleVideoContainer();
			initBannerVideoSize('.video-container .poster img');
			initBannerVideoSize('.video-container .filter');
			initBannerVideoSize('.video-container video');

			$(window).on('resize', function() {
				scaleVideoContainer();
				scaleBannerVideoSize('.video-container .poster img');
				scaleBannerVideoSize('.video-container .filter');
				scaleBannerVideoSize('.video-container video');
			});
		}
	}
	scaleVideo();
	if($('.js-parallax').length) {
		Parallax($('.js-parallax'));
	}
	teamslider();
	scrollAnimations();
	scrollToEl();
});
// $(window).on('resize',debounce(footerH))
var conf = {
	body: $('body'),
	html: $('html'),
	hidden: 'is-hidden',
	main: $('#barba-wrapper'),
	wrpr: $('.block'),
	footer: $('.footer'),
	arnextcontent: '<button type="button" class="slick-next slick-arrow"><div class="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.5 40.1"><style>.starrs0{fill:#1E3E7C;}</style><path d="M4.6 20.4c-.1-.1-.1-.2-.1-.3 0-.1 0-.2.1-.3L19.3 2.6l-.2-.2.2.2c.2-.2.2-.4.2-.6 0-.3-.1-.6-.3-.7L18 .3c-.2-.2-.4-.3-.6-.3-.3 0-.6.1-.7.3L.2 19.4c-.1.2-.2.4-.2.7 0 .2.1.5.2.6l16.4 19.1c.2.2.5.3.7.3.2 0 .5-.1.6-.2l1.2-1c.2-.2.3-.5.3-.7 0-.2-.1-.5-.2-.6L4.6 20.4z" class="starrs0"/></svg></div></button>',
	arnprevcontent: '<button type="button" class="slick-prev slick-arrow"><div class="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.5 40.1"><style>.starrs0{fill:#1E3E7C;}</style><path d="M4.6 20.4c-.1-.1-.1-.2-.1-.3 0-.1 0-.2.1-.3L19.3 2.6l-.2-.2.2.2c.2-.2.2-.4.2-.6 0-.3-.1-.6-.3-.7L18 .3c-.2-.2-.4-.3-.6-.3-.3 0-.6.1-.7.3L.2 19.4c-.1.2-.2.4-.2.7 0 .2.1.5.2.6l16.4 19.1c.2.2.5.3.7.3.2 0 .5-.1.6-.2l1.2-1c.2-.2.3-.5.3-.7 0-.2-.1-.5-.2-.6L4.6 20.4z" class="starrs0"/></svg></div></button>',
	firstLoad: false,
};

function Menu() {
	var trigger = $('.js-menu'),
		target = $('.mob-menu'),
		OpenClass = 'active',
		OpenClass2 = 'menu-open';

	trigger.add(target).on('click', function(e) {


		if (!trigger.hasClass('anim')) {

			trigger.addClass('anim');

			if(trigger.hasClass(OpenClass)){
				var div = $('.mob-menu-inner');
				if (!div.is(e.target) 
					&& div.has(e.target).length === 0) {
					setTimeout(function(){
						trigger.removeClass(OpenClass);
					},400);
					target.removeClass(OpenClass);
					conf.body.removeClass(OpenClass2);
					window.__prevScrollTop && (window.scroll(0, window.__prevScrollTop));
					window.__prevScrollTop = null;
					

				}

			}else{
				var top = $(window).scrollTop();
				window.__prevScrollTop = top;
				trigger.addClass(OpenClass);
				
				target.addClass(OpenClass);
				document.body.style.top = -top + "px";
				window.scroll(0, window.__prevScrollTop);
				conf.body.addClass(OpenClass2);
			}
			setTimeout(function() {
				trigger.removeClass('anim')
			}, 500);
		}
	})
	// $('.mob-menu-inner').click(function(e) {
	// 	e.stopPropagation();
	// });
}
function scaleVideoContainer() {

	var height = $('.video-container').height() + 5;
	var unitHeight = parseInt(height) + 'px';
	$('.homepage-hero-module').css('height',unitHeight);

}

function initBannerVideoSize(element){

	$(element).each(function(){
		$(this).data('height', $(this).height());
		$(this).data('width', $(this).width());
	});

	scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element){

	var windowWidth = $('.video-container').width(),
	windowHeight = $('.video-container').outerHeight() + 5,
	videoWidth,
	videoHeight;

	$(element).each(function(){
		var videoAspectRatio = $(this).data('height')/$(this).data('width');

		$(this).width(windowWidth);

		if(windowWidth < 1000){
			videoHeight = windowHeight;
			videoWidth = videoHeight / videoAspectRatio;
			$(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

			$(this).width(videoWidth).height(videoHeight);
		}

		$('.homepage-hero-module .video-container video').addClass('fadeIn animated');

	});
}
function SearchForm(el) {
	var this_ = this;

	this_.initEvents = function() {
		var self = this;
		this_.el.on("focus", this_.iFocus);
		this_.el.on("blur", function(event) {
			if (!$(event.relatedTarget).hasClass("search-submit")) {
				this_.iBlur();
			}
		});
		this_.el.on("input", this_.iInput);
		this_.submit.on("click", this_.initSubmit);
		this_.reset.on("click", this_.iReset);
		this.el.on("click", function(){
			var _this = $(this);
			// self.this_.iFocus();
			_this.removeAttr('readonly');
			setTimeout(function(){
				_this.trigger("change click");
				// _this.removeAttr('readonly');
				_this.focus();
			},500);
		});
	};

	this_.iInput = function() {
		this_.iVal = $(this).val();
		if (this_.iVal != 0) {
			this_.reset.addClass(this_.def.resetClass);
			this_.form.addClass(this_.def.active);
			this_.placeHold.hide();
		} else {
			this_.reset.removeClass(this_.def.resetClass);
			this_.form.removeClass(this_.def.active);
			this_.placeHold.show();
		}
	};

	this_.iFocus = function() {
		this_.iVal = this_.el.val();
		this_.parent.addClass(this_.def.open);
		this_.submit.attr("type", "submit");
		if (this_.iVal.length != 0)
			this_.form.addClass(this_.def.active);

	};

	this_.iBlur = function() {
		this_.iVal = this_.el.val();
		if (this_.iVal.length == 0) {
			this_.parent.removeClass(this_.def.open);
			this_.submit.attr("type", "button");
		}
		// this_.el.attr('readonly', "");
	};

	this_.iReset = function() {
		this_.reset.removeClass(this_.def.resetClass);
		this_.form.removeClass(this_.def.active);
		this_.submit.attr("type", "button");
		this_.el.attr("value", "");
		this_.el.val("");
		this_.el.focus();
		this_.placeHold.show();
	}

	this_.initSubmit = function() {
		if (this_.submit.attr("type") !== "submit") {
			this_.el.trigger("focus");
		} else {
			alert("Send form!")
		}
		return false;
	};

	this_.iDetected = function(el) {

		if (this_.iVal.length != 0) {
			this_.iFocus();
			this_.reset.addClass(this_.def.resetClass);
			this_.placeHold.hide();
		}
	};
	this_.generatePlaceeholder = function(){
		var span = document.createElement("span");
		span.classList.add("placeholder");

		var placeholderValue = this.el.data("placeholder");

		span.textContent = placeholderValue;

		$(span).insertAfter(this.el);

		this_.placeHold = $(".placeholder");
	}

	this_.init = function() {
		this_.el = el;
		this_.parent = this_.el.parent();
		this_.iVal = this_.el.val();
		this_.submit = this_.parent.find(".search-submit");
		this_.reset = this_.parent.find(".search-reset");
		this_.form = this_.el.parents("form");

		this_.def = {
			open: "open",
			resetClass: "show",
			active: "not-empty"
		}

		this_.generatePlaceeholder();
		this_.iDetected();

		this_.initEvents();
	};
	if (el.length) {
		this_.init();
	}
}
function promoslider(){
	$(".js-promoslider").each(function() {
		var _this = $(this),
				parent = _this.closest('.promo-slider'),
				slides = _this.find('.promo-slider-item'),
				link = parent.find('.js-promo-link');
		_this.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
			var activeslide = slides.filter('.slick-current'),
				href = activeslide.data('href');
				link.attr('href',href);
		});
		_this.slick({
			accessibility: false,
			arrows: true,
			dots: false,
			fade: true,
			touchMove: false,
			dragable: false,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			speed: 1000,
		});
	});
}

if (!window.Promise) {
  window.Promise = Promise;
}

if (!Array.prototype.forEach) {

  Array.prototype.forEach = function (callback, thisArg) {

    var T, k;

    if (this == null) {
      throw new TypeError(' this is null or not defined');
    }

    // 1. Положим O равным результату вызова ToObject passing the |this| value as the argument.
    var O = Object(this);

    // 2. Положим lenValue равным результату вызова внутреннего метода Get объекта O с аргументом "length".
    // 3. Положим len равным ToUint32(lenValue).
    var len = O.length >>> 0;

    // 4. Если IsCallable(callback) равен false, выкинем исключение TypeError.
    // Смотрите: http://es5.github.com/#x9.11
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }

    // 5. Если thisArg присутствует, положим T равным thisArg; иначе положим T равным undefined.
    if (arguments.length > 1) {
      T = thisArg;
    }

    // 6. Положим k равным 0
    k = 0;

    // 7. Пока k < len, будем повторять
    while (k < len) {

      var kValue;

      // a. Положим Pk равным ToString(k).
      //   Это неявное преобразование для левостороннего операнда в операторе in
      // b. Положим kPresent равным результату вызова внутреннего метода HasProperty объекта O с аргументом Pk.
      //   Этот шаг может быть объединён с шагом c
      // c. Если kPresent равен true, то
      if (k in O) {

        // i. Положим kValue равным результату вызова внутреннего метода Get объекта O с аргументом Pk.
        kValue = O[k];

        // ii. Вызовем внутренний метод Call функции callback с объектом T в качестве значения this и
        // списком аргументов, содержащим kValue, k и O.
        callback.call(T, kValue, k, O);
      }
      // d. Увеличим k на 1.
      k++;
    }
    // 8. Вернём undefined.
  };
}
function lazyImage(){
	// Get all of the images that are marked up to lazy load
	var arr = document.querySelectorAll('.js-image');
	var images = [];
	for(var i = 0; i < arr.length; i++){
		images.push(arr[i]);
	}

	var config = {
		rootMargin: '0px 0px',
		threshold: 0.01
	};

	var imageCount = images.length;
	var observer = void 0;
	// If we don't have support for intersection observer, loads the images immediately
	
	if (!('IntersectionObserver' in window)) {
		for(var i = 0; i < imageCount; i++){

			preloadImage(images[i]);
		}

	} else {
		// It is supported, load the images
		observer = new IntersectionObserver(onIntersection, config);
		for(var i = 0; i< imageCount; i++){
			if (images[i].classList.contains('js-image-handled')) {
				return;
			}

			observer.observe(images[i]);
		}
	}
	if(window.navigator.userAgent.indexOf("Edge") > -1){
		for(var i = 0; i < imageCount; i++){

			preloadImage(images[i]);
		}
	}
	/**
	 * Fetchs the image for the given URL
	 * @param {string} url 
	 */
	function fetchImage(url) {

		return new Promise(function (resolve, reject) {
			var image = new Image();
			image.src = url;
			image.onload = resolve;
			image.onerror = reject;
		});
	}

	/**
	 * Preloads the image
	 * @param {object} image 
	 */
	function preloadImage(image) {
		
		var src = image.dataset.src;

		if (!src) {
			
			return;
		}

		return fetchImage(src).then(function () {

			applyImage(image, src);
		});
	}

	/**
	 * Load all of the images immediately
	 * @param {array} images 
	 */
	function loadImagesImmediately(images) {
		for(var i = 0; i< images.length; i++){
			return preloadImage(images[i]);
		}
		// Array.from(images).forEach(function (image) {
		// 	return preloadImage(image);
		// });
	}

	/**
	 * Disconnect the observer
	 */
	function disconnect() {
		if (!observer) {
			return;
		}

		observer.disconnect();
	}

	/**
	 * On intersection
	 * @param {array} entries 
	 */
	function onIntersection(entries) {
		// Disconnect if we've already loaded all of the images
		if (imageCount === 0) {
			observer.disconnect();
		}

		// Loop through the entries

		entries.forEach(function (entry) {
			// Are we in viewport?
			if (entry.intersectionRatio > 0) {
				imageCount--;

				// Stop watching and load the image
				observer.unobserve(entry.target);
				preloadImage(entry.target);
			}
		});
	}

	/**
	 * Apply the image
	 * @param {object} img 
	 * @param {string} src 
	 */
	function applyImage(img, src) {
		// Prevent this from being lazy loaded a second time.
		img.classList.add('js-image-handled');
		if(img.classList.contains('bg')){

			img.style.backgroundImage = "url("+src+")";
		}else{
			img.src = src;

		}
		img.classList.add('fade-in');
	}	
}

function Parallax($parallaxes) {
	$(window).off('scroll.prl').on('scroll.prl', function(){
		var scrollTop = $(window).scrollTop(),
				bSH = conf.body[0].scrollHeight,
				$prlx, $wrapper, wrapperRect, wrapperOffset, wrapperMargin,
				speed, direction, y, scrollHeight, scrollPosition, axis,
				data = {}, topBorder;
		$parallaxes.each(function(){
			data = {};
			$prlx = $(this);
			axis = $prlx.data('axis') || 'y';

			if (!$prlx.length) {
				return false;
			}
			topBorder = conf.footer;
			$wrapper = $prlx.parent();

			wrapperRect = $wrapper[0].getBoundingClientRect();
			speed = parseInt($prlx.data('speed'), 10) / 109 || 0.08;
			direction = parseInt($prlx.data('direction'), 10) || 1;
			wrapperOffset = $wrapper.offset().top;
			wrapperMargin = ($(window).height() - wrapperRect.height) / 2;

			if (0 > wrapperMargin && (scrollTop + wrapperRect.top) <= topBorder.outerHeight()) {
				wrapperMargin = 0;
			}

			var realDirection = direction;
			if(direction == 2){
				realDirection = -1;
			}
			y = Math.round((wrapperRect.top - wrapperMargin) * speed) * realDirection;
			// console.log(realDirection)
			if (scrollTop === 0) {
				if(direction == 2){
					y = 0;
				}
			} else {
				scrollHeight = bSH;
				scrollPosition = $(window).height() + scrollTop;
				if (
					scrollHeight - wrapperOffset - $wrapper.outerHeight() <= 2 &&
					(scrollHeight - scrollPosition) / scrollHeight === 0
					) {
					y = 0;
				}
			}
			data[axis] = y;
			TweenMax.to($prlx, 0.1, data);
		});
	});
};
function teamslider(){
	$(".js-team-slider").each(function() {
		var _this = $(this),
				parent = _this.parent();
		_this.slick({
			accessibility: false,
			lazyLoad: 'ondemand',
			arrows: true,
			dots: false,
			fade: true,
			touchMove: false,
			dragable: false,
			infinite: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			appendArrows: parent.find('.slider-nav'),
			prevArrow: conf.arnprevcontent,
			nextArrow: conf.arnextcontent,
		})
	});
}
function moreslider(){
	$(".js-moreslider").each(function() {
		var _this = $(this),
				parent = _this.parent();
		_this.slick({
			accessibility: false,
			arrows: true,
			dots: false,
			fade: false,
			touchMove: false,
			dragable: false,
			infinite: false,
			slidesToShow: _this.hasClass('w3') ? 3: 2,
			slidesToScroll: 1,
			appendArrows: parent.find('.slider-nav'),
			prevArrow: conf.arnprevcontent,
			nextArrow: conf.arnextcontent,
		})
	});
}
function feedbackslider(){
	$(".js-feedbackslider-main").each(function() {
		var _this = $(this),
				parent = _this.parent();
		_this.slick({
			accessibility: false,
			arrows: true,
			dots: false,
			fade: true,
			touchMove: false,
			dragable: false,
			infinite: false,
			slidesToShow: 1,
			speed: 1000,
			slidesToScroll: 1,
			asNavFor: parent.find('.js-feedbackslider-bg'),
			appendArrows: parent.find('.slider-nav'),
			prevArrow: conf.arnprevcontent,
			nextArrow: conf.arnextcontent,
		})
	});
	$(".js-feedbackslider-bg").each(function() {
		var _this = $(this),
				parent = _this.parent();
		_this.slick({
			accessibility: false,
			arrows: false,
			dots: false,
			fade: true,
			touchMove: false,
			dragable: false,
			infinite: false,
			speed: 1000,
			slidesToShow: 1,
			slidesToScroll: 1,
			asNavFor: parent.find('.js-feedbackslider-main'),
		})
	});
}
function scrollAnimations(){
	inView.offset({
		top: 0,
		bottom: 0,
	});
	inView.threshold(0.1);
	var inimcont = document.querySelectorAll('.anim-cont');
	inView('.anim-cont')
		.on('enter', function(el){
			if(!el.done) {
				el.classList.add('active');
			}
		}).on('exit', function(el){
			el.done = true;
		});
	inView('.projects-wrap')
		.on('enter', function(el){
			if(!el.done) {
				el.classList.add('active');
				tabs.init();
			}
		}).on('exit', function(el){
			el.done = true;
		});
}

function tabsanim(elem){
	this.wrap = elem;
	this.opts ={
		act: 'active',
		off: 'off',
		timer: 4500,
	};
	this.current;
	this.interval;
	this.findElems();

}
tabsanim.prototype = {
	findElems: function(){
		this.triggers = this.wrap.querySelectorAll('.js-tabs-trigger');
		this.conts = this.wrap.querySelectorAll('.js-tabs-item');
		this.lines =  this.wrap.querySelectorAll('.tabs-item-line');
		$(this.lines).css('transition-duration',this.opts.timer + 'ms')
		this.iLen = this.triggers.length;
		// if(this.triggers.length && this.conts.length) this.init()
	},
	init: function(){
		var first = this.triggers[0];
		this.current = first;
		this.toggleTab(first);
		this.initNext();
		this.initClick();
		this.wrap.classList.add('inited')
	},
	toggleTab: function(item){
		var self = this;
		$(this.triggers).removeClass(self.opts.act)
		var id = parseInt(item.getAttribute('data-id'));
		item.classList.add(self.opts.act);
		$(this.conts).removeClass(self.opts.act)
		// for(var i = 0; i<this.conts.length; i++){

		// }
		Array.prototype.forEach.call(this.conts,function(index,i){
			if(self.conts[i].getAttribute('data-id')== id){
				self.conts[i].classList.add(self.opts.act);
			}
		});	
		// console.log(self.interval)
		clearInterval(self.interval);
		this.moveInterval();
	},
	initClick: function(){
		var self = this;
		Array.prototype.forEach.call(this.triggers,function(i,index){
			self.triggers[index].addEventListener('click',function(){
				var _ = this;
				if(!_.classList.contains(self.opts.act) && !_.classList.contains(self.opts.off)) {
					self.toggleTab(_);
					self.preventClick();
					self.current = _;
				}
			});
		})
	},
	preventClick: function(){
		var self = this;
		Array.prototype.forEach.call(this.triggers,function(index,i){
			self.triggers[i].classList.add('off');
			setTimeout(function(){
				self.triggers[i].classList.remove('off');
			},800);
		})
	},
	initNext: function(){
		var self = this;
		this.triggersArray = Array.prototype.slice.apply(this.triggers);
		// var curInd = this.triggersArray.indexOf(this.current);
		// setTimeout(function(){
		// console.log(curInd)
			this.moveInterval();
		// },self.opts.timer)

	},
	moveInterval: function(){
		var self = this;
		clearTimeout(self.interval)
		this.interval = setTimeout(function(){
			curInd = self.triggersArray.indexOf(self.current);
			if(curInd < self.iLen -1){
				self.current = self.triggers[curInd + 1];
				self.toggleTab(self.current);
				
			}else{
				self.current = self.triggers[0];
				self.toggleTab(self.current);
			}
		},self.opts.timer)
	},
};
function review(elements){
	this.elems = $(elements);
	this.modal = $('[data-modal="review"]');
	this.targetcont = this.modal.find('.js-review-target');
	this.height = 123;
	this.checkheight();
}
review.prototype = {
	checkheight: function(){
		var self  = this;
		this.elems.each(function(){
			var cont = $(this).find('.review-item-inner');
			var text = cont.find('.js-review-text');
			var h = text.height();
			if(h > self.height){
				cont.addClass('cutted');
				self.initclick($(this))
			}
		});
	},
	initclick: function(item){
		var self  = this;
		var trigger = item.find('.review-trigger');
		trigger.off('click').on('click',function(){
			var content = $(this).closest('.review-item-inner');
			self.targetcont.empty()
			content.clone().appendTo(self.targetcont).removeClass('cutted');
			self.openModal();
		});
	},
	openModal: function(){
		var self  = this;
		this.modal.addClass('active');

		var top = $(window).scrollTop();
		window.__prevScrollTop = top;
		document.body.style.top = -top + "px";
		window.scroll(0, window.__prevScrollTop);
		conf.body.addClass('menu-open');
		// this.modal.on('click', '', function(e) {
		// 	if (!$('.closePopup').is(e.target)) {
		// 		e.stopPropagation();
		// 	}
		// });
		this.modal.find().add(this.modal).off('click').on('click', function(e) {
			var div = $('.modal-container');
			if (!div.is(e.target) 
					&& div.has(e.target).length === 0 || $('.closePopup').is(e.target)) {
				self.closeModal();
			}
		});
	},
	closeModal: function(){
		this.modal.removeClass('active');
		conf.body.removeClass('menu-open');
		window.__prevScrollTop && (window.scroll(0, window.__prevScrollTop));
		window.__prevScrollTop = null;
	}
}
function slided(elem){
	this.wrap = $(elem);

	this.opts = {
		act: 'active',
		slide: '.carousel_layout-item',
		vsisibliSlides: ':nth-child(-n+3)',
		layout: '.carousel_layout',
		btn: '.carousel_navi',
		btnspin: 'spin',
	};

	this.findElems();
}

slided.prototype = {
	findElems: function(){
		var self = this;

		this.wrap.each(function(){
			var _ = $(this);
				_.slides = _.find(self.opts.slide);
				_.btn = 	_.find(self.opts.btn);
				if(_.slides.length === 1) _.btn.hide();
			self.initialize(_,_.slides,_.btn)
		});
	},
	initialize: function(wrap,slides,button){

		TweenLite.set(slides.not(this.opts.vsisibliSlides), {
			autoAlpha: 0
		});
		var active = slides.filter('.active');
		var tl = new TimelineLite();
			tl
				.set(active, {x: '0', transformOrigin:"left 50%"})
				.set(active.next(), {x: '-3%', scaleX:0.92, scaleY:0.92, transformOrigin:"left 50%"})
				.set(active.next().next(), {x: '-5%', scaleX:0.85, scaleY:0.85, transformOrigin:"left 50%"})
				.set(active.next().next().next(), {x: '-5%', scaleX:0.85, scaleY:0.85,  transformOrigin:"left 50%"})
		this.initclick(wrap,button);
	},
	initclick: function(wrap,button){
		var self = this;
		button.on('click',function(e){
			e.preventDefault();
			var _ = $(this);
			if(_.hasClass('animate')) return false;
			_.addClass('animate');
			_.addClass('spin');
			setTimeout(function(){
				 _.removeClass('spin');
			}, 500);
			var active = wrap.find('.active'),
				slides = wrap.find(self.opts.slide),
				next = active.next(),
				next2 = next.next(),
				next3 = next2.next();
			self.refreshSlide(wrap,button,active, next, next2, next3);
		});
		var blk = wrap.closest('.prod-elem');
		blk.on('mouseenter',checkHover);
		function checkHover(){
			var _ = $(this);
			_.addClass('hovered');
			_.on('mouseleave',function(){
				_.removeClass('hovered');
			});
		};
	},
	refreshSlide: function(wrap,button,active, next, next2, next3){
		var self = this;
		var tl = new TimelineLite({
			onComplete: function(){
				var act = wrap.find('.active');
				self.circleSlide(wrap,act,button, next, next2, next3);
				}
			});
		tl
			.set(active, {x: '0', autoAlpha: 1, scaleX: 1, scaleY: 1, className: '-=active', zIndex: 3})
			.set(next, {x: '-3%', scaleX: 0.92, scaleY: 0.92, className: '+=active', zIndex: 2})
			.set(next2, {x: '-5%', scaleX: 0.85, scaleY: 0.85, zIndex: 1})
			.set(next3, {autoAlpha: 0, x: '-5%', scaleX:0.85, scaleY:0.85, transformOrigin:"left 50%", zIndex: 0})

			.to(active, 1, {x: '0', autoAlpha: 0, scaleX: 1.1, scaleY: 1.1, ease:Power3.easeInOut}, 0)
			.to(next, 1, {x: '+=3%', scaleX: 1, scaleY: 1, ease:Power3.easeInOut}, 0)
			.to(next2, 1, {x: '+=2%', scaleX: 0.92, scaleY: 0.92, ease:Power3.easeInOut}, 0)
			.to(next3, 1, {autoAlpha: 1, ease:Power3.easeInOut}, 0)		
	},
	circleSlide: function(wrap,active,button, next, next2, next3){
		var self = this;
		var slides = wrap.find(self.opts.slide);
		var act = active,
			buff,
			parent = act.parent(),
			tl = new TimelineLite();
		act.prev().detach().appendTo(parent);
		if( slides.length === 2 ) {
			tl
				.set(slides, {x: '0', transformOrigin:"left 50%",zIndex: 3})
				.set(slides.next(), {x: '-3%', scaleX:0.92, scaleY:0.92, transformOrigin:"left 50%", zIndex: 1})
				.to(slides.next(), 0.2, {autoAlpha: 1, ease:Power3.easeInOut}, 0)

		} else if( slides.length === 3 ) {
			tl
				.set(slides, {x: '0', transformOrigin:"left 50%", zIndex: 3})
				.set(slides.next(), {x: '-3%', scaleX:0.92, scaleY:0.92, transformOrigin:"left 50%", zIndex: 2})
				.set(slides.next().next(), {x: '-5%', scaleX: 0.85, scaleY: 0.85, zIndex: 1})
				.to(slides.next(), 0.2, {autoAlpha: 1, ease:Power3.easeInOut}, 0)
		} else {
			tl
				.set(slides.last(), {x: '-5%', scaleX:0.85, scaleY:0.85, transformOrigin:"left 50%", zIndex: 0})
		}
		button.removeClass('animate');
	},
};
function stickinit() {
	setTimeout(function() {
		$('.js-stick').stick_in_parent({
			parent: ".js-stick-parent",
			offset_top: 170,
		});
	}, 1)
}
function ProdinnerHead(){

	var target = $('.js-prod-head');
	var targetNext = target.find('.columns:first-child').find('.prod-nav-link');
	var targetNextText = targetNext.find('.prod-nav-link-text');
	var targetPrev = target.find('.columns:last-child').find('.prod-nav-link');
	var targetPrevText = targetPrev.find('.prod-nav-link-text');
	var targetCur = target.find('.columns:nth-child(2)').find('.text');
	var vh = $('.page-head').height();
	var cont = $('.barba-container').last();
	var nextL = cont.data('next-link');
	var nextText = cont.data('next-text');
	var prevL = cont.data('prev-link');
	var prevText = cont.data('prev-text');
	var curText = cont.data('cur-text');

	targetNext.attr('href',nextL);
	targetPrev.attr('href',prevL);
	targetNextText.text(nextText);
	targetPrevText.text(prevText);
	targetCur.text(curText);
	target.addClass('active');
}
var debounce = function(t, e, n) {
	var o;
	return function() {
		var i = this
		  , a = arguments
		  , s = function() {
			o = null,
			n || t.apply(i, a)
		}
		  , r = n && !o;
		clearTimeout(o),
		o = setTimeout(s, e),
		r && t.apply(i, a)
	}
};
var sortItem = function(){
	var trigger = $('.js-select-item');
	trigger.each(function(){
		var _ = $(this),
			textCont = _.find('.js-trgt-text'),
			target = _.parent().find('.dropdown-target'),
			item = target.find('.sort-select-item a');
		_.on('click', function(){
			trigger.removeClass('active')
			_.toggleClass('active');

		});
		item.each(function(){
			var _ = $(this);
			_.on('click',function(e){
				var altLext = _.data('text');
				textCont.text(altLext);
				_.parent().addClass('active').siblings().removeClass('active');
				e.preventDefault();
				setTimeout(function(){
					target.removeClass('active');
					trigger.removeClass('active');
				},300);
			});
		})
		$(document).on('click touchmove', function (e){
			if (!trigger.is(e.target)
				&& trigger.has(e.target).length === 0) {
				trigger.removeClass('active');
			}
		});
	});
};
function returnStickPos(stickEl,stickpos){
	var ws = $(window).scrollTop();
	var stickPosVal = parseInt(stickpos);
	var wh = stickEl.height();
	if(stickEl.css('position') == 'fixed'){
		stickEl.css('top',ws + stickPosVal - 80)
	}

}
var opts;
function initMap() {
	var trel = $('#map');
	var map;
	opts = {
				zoom: 12,
				fullscreenControl: true,
				scrollwheel: false,
				mapTypeControl: false,
				scaleControl: false,
				// center: centercords,
				streetViewControl: false,
				gestureHandling: "greedy",
				zoomControlOptions: {
						position: google.maps.ControlPosition.RIGHT_CENTER
				},
				 styles:[
					{
						"featureType": "administrative",
						"elementType": "labels.text.fill",
						"stylers": [
							{
								"color": "#444444"
							}
						]
					},
					{
						"featureType": "landscape",
						"elementType": "all",
						"stylers": [
							{
								"color": "#f2f2f2"
							}
						]
					},
					{
						"featureType": "poi",
						"elementType": "all",
						"stylers": [
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "road",
						"elementType": "all",
						"stylers": [
							{
								"saturation": -100
							},
							{
								"lightness": 45
							}
						]
					},
					{
						"featureType": "road.highway",
						"elementType": "all",
						"stylers": [
							{
								"visibility": "simplified"
							}
						]
					},
					{
						"featureType": "road.arterial",
						"elementType": "labels.icon",
						"stylers": [
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "transit",
						"elementType": "all",
						"stylers": [
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "water",
						"elementType": "all",
						"stylers": [
							{
								"visibility": "on"
							},
							{
								"color": "#173e7e"
							}
						]
					}
				]
			}; 
	initialize(trel[0])
}
function initialize(elem){
	var _ = elem;
	var latcord = parseFloat(_.getAttribute('data-lat'));
	var loncord = parseFloat(_.getAttribute('data-lon'));
	var imgpath = _.getAttribute('data-icon');
	var centercords = new google.maps.LatLng(latcord, loncord);
	mapvar = new google.maps.Map(_,opts);
	mapvar.setCenter(centercords)
	var img = {
		url: imgpath,
		size: new google.maps.Size(53, 85),
		origin: new google.maps.Point(0, 0),
		scaledSize: new google.maps.Size(26.5, 42.5),
		anchor: new google.maps.Point(13.25, 42.5),
	};

	var marker = new google.maps.Marker({
		position: centercords,
		map: mapvar,
		icon: img,
		zIndex: 99999
	});
	elem.classList.add('inited');
}
function googleMaps(){
	var script_tag = document.createElement("script");
	if(typeof(google) != "object") {
		script_tag.setAttribute("type", "text/javascript");
		script_tag.setAttribute("src", "https://maps.googleapis.com/maps/api/js?key=AIzaSyDcFkgUmSnM7fy40cDnRn8BB_xu1cp7Ros&callback=initMap");
		document.getElementById("map").appendChild(script_tag);
	} else {
		initialize(document.getElementById("map")) 
	}
};
function scrollToEl(){
	$(".js-scroll-to").on('click', function (e) {
		e.preventDefault();
		e.stopPropagation();
		var elementClick = $(this).data("href");
		var target = $('body').find('[data-id="' + elementClick + '"]');
		var pad = 80;
		var destination;
		if( $(this).hasClass('to-top')){
			destination = 0;
			$("html, body:not(:animated), .out:not(:animated)").animate({scrollTop: destination}, 600);
		}
		if(target.length){
			destination = $(target).offset().top,
			$("html, body:not(:animated), .out:not(:animated)").animate({scrollTop: destination - pad}, 600);
		}

	});
}
function loadState(){
	var li = window.location.pathname;
	var navigationLinkIsActive = document.querySelectorAll('[href="' + li + '"]');
	var navigationLinks = document.querySelectorAll('.js-nav');
	Array.prototype.forEach.call(navigationLinks, function (navigationLink) {
				return navigationLink.classList.remove('active');
	});
	Array.prototype.forEach.call(navigationLinkIsActive, function (navigationLink) {
				return navigationLink.classList.add('active');
	});
}
function MapTriggers(){
	var maincont = $('.tabs-triggerwrap');
	var mapsvg = maincont.find('svg');
	var triggers = maincont.find('.tabs-item');
	var mapblocks = maincont.find('.mapblock');

	triggers.each(function(){
		var _ = $(this);
		var id  = _.data('id');
		_.on('click', function(){

			mapsvg.attr('class', '').addClass('move'+id+'')
			_.addClass('active').siblings('.tabs-item').removeClass('active');
			mapblocks.filter('[data-id="'+id+'"]').addClass('active').removeClass('hidden').siblings('.mapblock').removeClass('active').addClass('hidden');
			if(_.hasClass('item-all')){
				_.addClass('active').siblings('.tabs-item').removeClass('active');
				mapblocks.removeClass('active').removeClass('hidden');
			}
			if(!_.hasClass('item-all')){
				$("html, body:not(:animated), .out:not(:animated)").animate({scrollTop: $('.logistics').offset().top  - 180}, 650);
			}
			
		});
	});
	mapblocks.each(function(){
		var _ = $(this);
		var id  = _.data('id');
		_.on('click', function(){
			mapsvg.attr('class', '').addClass('move'+id+'')
			_.removeClass('hidden').addClass('active').siblings('.mapblock').removeClass('active').addClass('hidden');
			triggers.filter('[data-id="'+id+'"]').addClass('active').siblings().removeClass('active');
		});
	});
}
function animateMap(){
	var target = $('.tabs-map');
	if(target.length){
		var blocks = document.querySelectorAll('.mapblock');
		setTimeout(function(){
			target.addClass('animating');		
		},750)
		setTimeout(function(){
			target.removeClass('animating');		
		},5500)
	}
}
var BarbaWitget = {
	init: function(){
		var scope = this;

		Barba.Pjax.start();
		Barba.Prefetch.init();
		Barba.Pjax.getTransition = function(){
			return scope.MovePage;
		};
		// Barba.Dispatcher.on('newPageReady', function(currentStatus, oldStatus, container) {

		// }); 
		Barba.Dispatcher.on('newPageReady', function (currentStatus) {
			var link = currentStatus.url.split(window.location.origin)[1].substring(0);
			var navigationLinks = document.querySelectorAll('.js-nav');
			var navigationLinkIsActive = document.querySelectorAll('[href="' + link + '"]');

			Array.prototype.forEach.call(navigationLinks, function (navigationLink) {
						return navigationLink.classList.remove('active');
			});
			Array.prototype.forEach.call(navigationLinkIsActive, function (navigationLink) {
						return navigationLink.classList.add('active');
			});

		});        

		Barba.Dispatcher.on('transitionCompleted', function(currentStatus, prevStatus) {

			if($('.js-parallax').length) {
				Parallax($('.js-parallax'));
			}
			scrollAnimations();
			lazyImage();
			scrollToEl();
		});
	},
	MovePage: Barba.BaseTransition.extend({
		start: function(){


			Promise
				.all([this.newContainerLoading, this.fadeOut()])
				.then(this.fadeIn.bind(this));
		},
		fadeOut: function(){
			var deferred = Barba.Utils.deferred();
			
			$('.js-menu').add('.mob-menu').removeClass('active');
			conf.body.removeClass('menu-open');
			window.__prevScrollTop && (window.scroll(0, window.__prevScrollTop));
			window.__prevScrollTop = null;
			return $(this.oldContainer).animate({
				opacity: 0,
			}, 1000,function(){
			}).addClass('moveDown').promise();

		},
		fadeIn: function(){
			var _this = this;
			var $el = $(this.newContainer);
			if ($el.find(".js-promoslider").length) promoslider();
			$(this.oldContainer).hide();

			$el.addClass('moveUp');
			TweenMax.set($el, {
				force3D:true,
				y: 200,
				onComplete: function () {
					$(window).scrollTop(0,0);
					TweenMax.to($el, .5, {
						y: 0,
						force3D:true,
						autoAlpha: 1,
						onComplete: function () {
							TweenMax.set($el, {clearProps: 'all'});
							$el.removeClass('moveUp');
							_this.done();
						}
					});
				}
			});
		}
	})
};

var IndexPage = Barba.BaseView.extend({
	namespace: "index",
	onEnter: function(){
		
	},
	onEnterCompleted: function(){

		teamslider();
		var tab = document.querySelector('.js-tabs-cont');
		tabs = new tabsanim(tab);
	},
	onLeaveComplete: function(){
		delete tabs
	}
});

var Production = Barba.BaseView.extend({
	namespace: "Production",
	onEnter: function(){
		var sliders = document.querySelectorAll('.carousel_layout-container');
		sliders = new slided(sliders);
	},
	onEnterCompleted: function(){
		console.log("onEnterCompleted");

	},
	onLeaveComplete: function(){
		console.log("onLeaveComplete");
	}
});
var ProductionInner = Barba.BaseView.extend({
	namespace: "Production-inner",
	onEnter: function(){

	},
	onLeave: function(){
		var stickEl = $('.js-stick');
		var stickPos = stickEl.css('top');
		if(stickPos != 'auto'){
			returnStickPos(stickEl,stickPos)
		}else{
		}
		$('.js-prod-head').removeClass('active');
	},
	onEnterCompleted: function(){

		stickinit();
		moreslider();
		ProdinnerHead();
	},
	onLeaveComplete: function(){
	}
});
var NewsInner = Barba.BaseView.extend({
	namespace: "news-inner",
	onEnter: function(){

	},
	onLeave: function(){
		var stickEl = $('.js-stick');
		var stickPos = stickEl.css('top');
		if(stickPos != 'auto'){
			returnStickPos(stickEl,stickPos)
		}else{
		}
	},
	onEnterCompleted: function(){

		stickinit();
		moreslider();
	},
	onLeaveComplete: function(){
	}
});
var PojectsPage = Barba.BaseView.extend({
	namespace: "Projects",
	onEnter: function(){
	},
	onEnterCompleted: function(){
		sortItem();
	},
	onLeaveComplete: function(){
	}
});
var contacts = Barba.BaseView.extend({
	namespace: "Contacts",
	onEnter: function(){
	},
	onEnterCompleted: function(){
		 googleMaps();
	},
	onLeaveComplete: function(){
	}
});
var content = Barba.BaseView.extend({
	namespace: "Content",
	onEnter: function(){
		animateMap();
		var revItems = document.querySelectorAll('.review-item');
		if(revItems.length){
			revfunc = new review(revItems);
		}

	},
	onEnterCompleted: function(){
		// initMap();
		feedbackslider();
		MapTriggers();
		
	},
	onLeaveComplete: function(){
	}
});
IndexPage.init();
Production.init();
ProductionInner.init();
PojectsPage.init();
contacts.init();
content.init();
NewsInner.init();
BarbaWitget.init();


