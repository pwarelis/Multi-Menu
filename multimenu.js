
!function($){

	"use strict"; // jshint ;_;

	var MultiMenu = function (element, options) {
		this.$element = $(element)
		this.$panel = this.$element.next();
		this.options = $.extend({}, $.fn.multimenu.defaults, options)
		this.timer = null;
		this.isSubMultiMenu = this.$element.attr("data-multimenu") === undefined;
		this.listen()
	}

	MultiMenu.prototype = {
		sticky: false,
			
		listen: function () {
			this.$element.on("mouseenter.multimenu", $.proxy(this.show, this));
			this.$element.parent().on("mouseleave.multimenu", $.proxy(this.hideDelay, this));
			this.$panel.on("click.multimenu", $.proxy(this.hideAll, this));
			
			// Go through the links in this multimenu and recursively apply
			// the MultiMenu to each one that has <ul> after it
			var links = this.$element.next().children().find("a:first");
			var options = this.options;
			links.each(function(i, el) {
				var menu = $(el).next("ul.dropdown-menu");
				if (menu.length) {
					$(el).multimenu(options);
					menu.css({ position: "absolute", top: 0 });
				}
			});
		},
		
		show: function() {
			if (this.sticky) return;
			if (this.timer) clearTimeout(this.timer);
			if (this.$element.hasClass("open")) return;
			this.$element.addClass("open")
			
			var list = this.$element.next();
			if (this.isSubMultiMenu) {
				list.css({
					left: this.$element.outerWidth(),
					top: this.$element.position().top
				});
			}
		},
		
		hideDelay: function() {
			if (this.sticky) return;
//			if (this.timer) clearTimeout(this.timer);
//			this.timer = setTimeout($.proxy(this.hide, this), this.options.timeout);
			this.hide();
		},
		
		hide: function() {
			this.$element.removeClass("open");
		},
		
		stick: function(makeSticky) {
			this.sticky = makeSticky;
		},
		
		hideAll: function() {
			this.sticky = false;
			$('[data-multimenu]').parent().find(".open").removeClass("open");
		}
	}

	$.fn.multimenu = function (option) {
		return this.each(function () {
			var $this = $(this),
				data = $this.data('multimenu'),
				options = typeof option == 'object' && option
			if (!data) $this.data('multimenu', (data = new MultiMenu(this, options)))
			if (typeof option == 'string') data[option]()
		})
	}

	$.fn.multimenu.defaults = {
		timeout: 200
	}

	$(function () {
		$('[data-multimenu]').multimenu();
	})

}(window.jQuery);
