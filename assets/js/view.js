(function( APP ){

	APP = APP || window.APP;

	var View = APP.View.extend({

		events: {
			"animationend": "onAnimationEnd",
			"webkitAnimationEnd": "onAnimationEnd",
			"MSAnimationEnd": "onAnimationEnd",
			"oAnimationEnd": "onAnimationEnd"
		},

		initialize: function( options ){
			//console.log("options", options);
			//this.setup();
			this.render();
			return APP.View.prototype.initialize.call(this, options);
		},

		setup: function(){
			// check if we need to render...
			this.render();
		},
		update: function(){
			// check if we need to render...
			this.render();
		},

		setup: function(){
			var self = this,
				$el = this.$el;

			$el.on('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function(){
			//$el.on('webkitTransitionEnd oTransitionEnd msTransitionEnd transitionend', function(){

			});
		},

		render: function(){
			// mirror delay / duration...
			this.$el.css({
				"-webkit-animation-duration": this.options.duration +"s",
				"-moz-animation-duration": this.options.duration +"s",
				"-o-animation-duration": this.options.duration +"s",
				"animation-duration": this.options.duration +"s",
				"-webkit-animation-delay": this.options.delay +"s",
				"-moz-animation-delay": this.options.delay +"s",
				"-o-animation-delay": this.options.delay +"s",
				"animation-delay": this.options.delay +"s"
			});
			// update animation class
			if( this.options.animation == "fade" ) this.$el.removeClass("pulse").addClass("fade");
			if( this.options.animation == "pulse" ) this.$el.removeClass("fade").addClass("pulse");
		},

		onAnimationEnd: function(){
			if( this.options.animation == "fade"){
				// remove all contents
				this.$el.empty();
				// unbind events
				this.$el.unbind();
				// remove from the page
				this.remove();
			}
		}

	});

	APP.UI = APP.UI || {};
	APP.UI.Overlay = View;

})( this.APP );
