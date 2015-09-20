(function( APP ){

	APP = APP || window.APP;

// params polyfill
var params = APP.View.prototype.params || new APP.Model()

	var View = APP.View.extend({

		events: {
			"animationend": "onAnimationEnd",
			"webkitAnimationEnd": "onAnimationEnd",
			"MSAnimationEnd": "onAnimationEnd",
			"oAnimationEnd": "onAnimationEnd"
		},

		params: params,

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

		// this method is not used...
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
			if( this.options.animation == "random" ){
				this.$el.removeClass("fade").removeClass("pulse");
				// generate a random class
				this.randomClass();
			}
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
			if( this.options.animation == "random"){
				// generate a random class
				this.randomClass();
			}
		},

		randomClass: function(){
			// prerequisite(s)
			if( !this.options.random ) return;
			var self = this;
			// pick a number
			var num = Math.round( Math.random() * parseInt(this.options.random, 10) );
			while( num == this.params.get("layer-displayed") || num === 0 ){
				num = Math.round( Math.random() * parseInt(this.options.random, 10) );
			}
			// convention: display layer as a two digit integer
			var layer = "layer-"+ ( ( num.toString().length == 1 ) ? "0"+ num : num );
			// add new clas (remove previous class)
			if( this.params.get("layer-displayed") ){
				this.$el.removeClass(function (index, css) {
					return (css.match (/(^|\s)layer-\S+/g) || []).join(' ');
				});
			}
			// FIX: jQuery needs a skip cycle to reset the animation
			setTimeout(function(){
				self.$el.addClass(layer);
			}, 10);

			// save in the params
			this.params.set("layer-displayed", num);
		}

	});

	APP.UI = APP.UI || {};
	APP.UI.Overlay = View;

})( this.APP );
