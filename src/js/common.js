$(window).on('load',function(){
new Lozad({
    selector: '.js-image', 
    rootMargin: '0px 0px', 
    threshold: 0.1 
})

});
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
});

var conf = {
	body: $('body'),
	html: $('html'),
	hidden: 'is-hidden',
	wrpr: $('.block'),
	footer: $('.footer'),
	arnextcontent: '<button type="button" class="slick-next slick-arrow"><div class="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.5 40.1"><style>.starrs0{fill:#1E3E7C;}</style><path d="M4.6 20.4c-.1-.1-.1-.2-.1-.3 0-.1 0-.2.1-.3L19.3 2.6l-.2-.2.2.2c.2-.2.2-.4.2-.6 0-.3-.1-.6-.3-.7L18 .3c-.2-.2-.4-.3-.6-.3-.3 0-.6.1-.7.3L.2 19.4c-.1.2-.2.4-.2.7 0 .2.1.5.2.6l16.4 19.1c.2.2.5.3.7.3.2 0 .5-.1.6-.2l1.2-1c.2-.2.3-.5.3-.7 0-.2-.1-.5-.2-.6L4.6 20.4z" class="starrs0"/></svg></div></button>',
	arnprevcontent: '<button type="button" class="slick-prev slick-arrow"><div class="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.5 40.1"><style>.starrs0{fill:#1E3E7C;}</style><path d="M4.6 20.4c-.1-.1-.1-.2-.1-.3 0-.1 0-.2.1-.3L19.3 2.6l-.2-.2.2.2c.2-.2.2-.4.2-.6 0-.3-.1-.6-.3-.7L18 .3c-.2-.2-.4-.3-.6-.3-.3 0-.6.1-.7.3L.2 19.4c-.1.2-.2.4-.2.7 0 .2.1.5.2.6l16.4 19.1c.2.2.5.3.7.3.2 0 .5-.1.6-.2l1.2-1c.2-.2.3-.5.3-.7 0-.2-.1-.5-.2-.6L4.6 20.4z" class="starrs0"/></svg></div></button>',
};

function Menu() {
	var trigger = $('.js-menu'),
		target = $('.mob-menu'),
		OpenClass = 'active',
		OpenClass2 = 'menu-open';

	trigger.add(target).on('click', function() {

		if (!trigger.hasClass('anim')) {
			trigger.addClass('anim');
			
			target.toggleClass(OpenClass);
			
			if(trigger.hasClass(OpenClass)){
				
				setTimeout(function(){
					trigger.removeClass(OpenClass);
				},400);
				
				conf.body.removeClass(OpenClass2);

				window.__prevScrollTop && (window.scroll(0, window.__prevScrollTop));
				window.__prevScrollTop = null;
			}else{
				var top = $(window).scrollTop();
				window.__prevScrollTop = top;
				trigger.addClass(OpenClass);
				conf.body.addClass(OpenClass2);
				document.body.style.top = -top + "px";
				window.scroll(0, window.__prevScrollTop);
			}
			setTimeout(function() {
				trigger.removeClass('anim')
			}, 500);
		}
	})
	$('.mob-menu-inner').click(function(e) {
		e.stopPropagation();
	});
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
				console.log(_this);
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
			lazyLoad: 'progressive',
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

function Parallax($parallaxes) {
	$(window).on('scroll', function(){
		var scrollTop = $(window).scrollTop(),
				bSH = conf.body.scrollHeight,
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
			speed = parseInt($prlx.data('speed'), 10) / 109 || 0.10;
			direction = parseInt($prlx.data('direction'), 10) || 1;
			wrapperOffset = $wrapper.offset().top;

			wrapperMargin = ($(window).height() - wrapperRect.height) / 2;

			if (0 > wrapperMargin && (scrollTop + wrapperRect.top) <= topBorder.innerHeight()) {
				wrapperMargin = 0;
			}

			y = Math.round((wrapperRect.top - wrapperMargin) * speed) * direction;

			if (scrollTop === 0) {
				y = 0;
			} else {
				scrollHeight = bSH;
				scrollPosition = $(window).height() + scrollTop;
				if (
					scrollHeight - wrapperOffset - $wrapper.innerHeight() <= 2 &&
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