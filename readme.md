# APP UI: Overlay

A tag that creates an overlay, used to create a visual effect for the user experience.


## Examples

* [Static](./examples/01-static.html)
* [Fading](./examples/02-fade.html)
* [Pulsing](./examples/03-pulse.html)
* [Random](./examples/04-random.html)


## Install

Using bower:
```
bower install app.ui.overlay
```

Import from github
```
git pull git://github.com/app-ui/overlay.git master
```


## Usage

1. Import Web Components' polyfill

```html
<script src="bower_components/webcomponentsjs/webcomponents.min.js"></script>
```

2. Import Custom Element:
```html
<link rel="import" href="components/app.ui.overlay">
```

3. Start using it!

```html
<ui-overlay></ui-overlay>
```


## Attributes

Here are the options you can use to customiz the overlay:

* **animation** (string). Default: "static". Values="static|pulse|fade|random", Define the CSS animation.
* **duration** (number). Default: 0. Define the duation of the animation.
* **delay** (number). Default: 0. Define a delay before the animation is executed.
* **random** (number). Default: 0. Display a random background.


## Events

Currently this tag doesn't broadcast any events.


## License

Initiated by Makis Tracend ( [@tracend](http://github.com/tracend) )

Distributed through [Makesites.org](http://makesites.org/)

### Mentions

Part of the [APP UI](http://github.com/app-ui) components.

### License

Released under the [MIT License](http://makesites.org/licenses/MIT)
