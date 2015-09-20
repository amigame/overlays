(function() {
	// Creates an object based in the HTML Element prototype
	var el = Object.create(HTMLElement.prototype);

	// Fires when an instance of the element is created
	el.createdCallback = function() {

	};

	// Fires when an instance was inserted into the document
	el.attachedCallback = function() {

		// gather attributes
		var animation = this.getAttribute("animation");
		var delay = this.getAttribute("delay");
		var duration = this.getAttribute("duration");

		// gather options
		var options = {
			animation: animation || "static", // options: static, pulse, fade, random
			delay: delay || 0,
			duration: duration || 0
		};
		// ...
		options.el = this;
		// instantiate view
		this.view = new APP.UI.Overlay( options );

	};

	// Fires when an instance was removed from the document
	el.detachedCallback = function() {
		if( this.view ) this.view.remove();
	};

	// Fires when an attribute was added, removed, or updated
	el.attributeChangedCallback = function(attr, oldVal, newVal) {
		// prerequisite(s)
		if(!this.view) return;
		// filter options?
		this.view.options[attr] = newVal;
		this.view.update();
	};

	document.registerElement('ui-overlay', {
		prototype: el
	});
}());
