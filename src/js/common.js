document.addEventListener("DOMContentLoaded", function() {
	Menu();
	var searchInput = new SearchForm($(".js-input"));
	promoslider();
});
	var conf = {
		body: $('body'),
		html: $('html'),
		hidden: 'is-hidden',
		wrpr: $('.wrapper'),
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
			speed: 0,
		});
	});
}