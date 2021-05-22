// Menu button

$('document').ready(function() {
    $('.rnav button').on('click',function(){ 
        $(this).toggleClass('on'); 
        $('body').toggleClass('menu-on');
    });
})

$(document).ready(function() {
    $("[data-link]").click(function() {
        window.location.href = $(this).attr("data-link");
        return false;
    });
});

// Scroll to top

(function($, window, undefined) {
	"use strict";

	$.fn.pageup = function(options) {

		var options = $.extend({}, $.fn.pageup.defaults, options);

		return this.each(function() {

			var $this = $(this);
			
			$(document).scroll(function(){
				if ($(this).scrollTop() > options.offset) {
					$this.fadeIn(options.fadeDelay);
				} else {
					$this.fadeOut(options.fadeDelay);
				}
			});
		
			$this.click(function(){
				$('html, body').animate({scrollTop : 0}, options.scrollDuration);
				return false;
			});

		});

		return $this;
	};

	$.fn.pageup.defaults = {
		offset: 100,
		fadeDelay: 500,
		scrollDuration: 400
	};

})(jQuery);