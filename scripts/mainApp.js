(function ($) {
	"use strict";

	var App = function () {
		var o = this; // Create reference to this instance
		$(document).ready(function () {
			o.initialize();
		}); // Initialize app when document is ready

	};
	var p = App.prototype;

	// =========================================================================
	// INIT
	// =========================================================================

	p.initialize = function () {
		// Init events
		this._initcustScroll();
		this._inithamburger();
	};

	// =========================================================================
	// INIT
	// =========================================================================
	p._initcustScroll = function () {
		$(".mainnavigation").niceScroll({cursorcolor:"#7D61A4",cursoropacitymax:0.7,boxzoom:false,touchbehavior:true});
	};

	p._inithamburger = function () {
		$("#hamburger").on("click",function(event){
			event.stopPropagation();
			var $this = $(this);
			$this.toggleClass("is-active");
			if($this.hasClass('is-active')){
				$('.navsidebar').addClass('open');
			}else if(!$this.hasClass('is-active')) {
				$('.navsidebar').removeClass('open');
			}
		});
		
		$(document).click(function(evt) {
		    var target = evt.currentTarget;
		    var inside = $(".navsidebar");
		    if (target != inside) {
		       	inside.removeClass('open');
		    }
		    if($('.navsidebar').hasClass('open')){
		    	$("#hamburger").addClass("is-active");
		    } else {
		    	$("#hamburger").removeClass("is-active");
		    }
		});
	};
	// =========================================================================
	// DEFINE NAMESPACE
	// =========================================================================

	window.myApp = window.myApp || {};
	window.myApp.App = new App;
}(jQuery)); // pass in (jQuery):
