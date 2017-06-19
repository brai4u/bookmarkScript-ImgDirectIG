# Get direct link from instagram

Get the direct link to an image of instagram

# How does it work

Create a empty bookmark and add on the url space, the content of `script.js`

```javascript
/*Actualizado para vos sereno querido*/
var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-2.2.2.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

/* Selector actualizado para el nuevo diseño de instagram*/
var srcIG = $("body > div:nth-child(9) > div > div._g1ax7 > div > article > div._h5v2a > div > div > div._jjzlb > img").attr("src");

if(!srcIG){
	var srcIG = $("#react-root > section > main > div > div > article > div._h5v2a._kqf30 > div > div > div._jjzlb > img").attr("src");
}

var srcVIDEOIG = $("video[class*='_c8hkj']").attr("src");

/*Si la variable img no tiene nada, quiere decir que es un video, por lo tanto utiliza el ink del video*/
if (!srcIG && srcVIDEOIG) {
	window.open(srcVIDEOIG, '_blank');
}
else {
	window.open(srcIG, '_blank');
}
```
before adding `javascript:` to the url, so you get something like this:

```javascript
javascript:/*Actualizado para vos sereno querido*/ var script = document.createElement('script'); script.src = 'https://code.jquery.com/jquery-2.2.2.min.js'; script.type = 'text/javascript'; document.getElementsByTagName('head')[0].appendChild(script); /* Selector actualizado para el nuevo diseño de instagram*/ var srcIG = $("body > div:nth-child(9) > div > div._g1ax7 > div > article > div._h5v2a > div > div > div._jjzlb > img").attr("src"); if(!srcIG){ var srcIG = $("#react-root > section > main > div > div > article > div._h5v2a._kqf30 > div > div > div._jjzlb > img").attr("src"); } var srcVIDEOIG = $("video[class*='_c8hkj']").attr("src"); /*Si la variable img no tiene nada, quiere decir que es un video, por lo tanto utiliza el ink del video*/ if (!srcIG && srcVIDEOIG) { window.open(srcVIDEOIG, '_blank'); } else { window.open(srcIG, '_blank'); }
```

Then save the bookmark, enter to a random ig image or video and click in the bookmark

note: if you dont see the bookmark list press `cltl + shift + b`
