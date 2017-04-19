# News Fader

Fading ticker

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/nolawi/newsfader/master/dist/newsfader.min.js
[max]: https://raw.github.com/nolawi/newsfader/master/dist/newsfader.js

Add the `newsfader.min.js` to your html

To intiate plugin 

```html

<script src="jquery.js"></script>
<script src="dist/newsfader.min.js"></script>
<script>
  // default options are 
  $(".js-newsticker").newsfader();

</script>

```

## Documentation
_If you need to change the default options_ 

which are   `fadeInTime: 800,`
            `fadeOutTime: 800,`
            `interval: 5600`

```js
$(".js-newsticker").newsfader({fadeInTime: 100, fadeOutTime:100});

````

## Examples
`https://github.com/nolawi/newsfader/blob/master/test/newsfader.html`

## Release History
`https://github.com/nolawi/newsfader/releases`
