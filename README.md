# Get direct link from instagram

Get the direct link to an image of instagram

# How does it work

Create a empty bookmark and add on the url space, the content of `script.js`

```javascript
/*Insertar jquery, mas comodo seleccionar D:*/
var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-2.2.2.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

/*Seleccion de xpath / parents*/
var srcIG = $("body > div:nth-child(9) > div > div._g1ax7 > div > article > div:nth-child(2) > div > div._jjzlb > img").attr("src");
var srcVIDEOIG = $("body > div:nth-child(9) > div > div._g1ax7 > div > article > div.ResponsiveBlock > div:nth-child(1) > div > div > div._tqoyh._pwe27 > div > video").attr("src");

/*Si la variable img no tiene nada, quiere decir que es un video, por lo tanto utiliza el ink del video*/
if (srcIG == null && srcVIDEOIG != null) {
	window.open(srcVIDEOIG, '_blank');
}

/*Si no, usa el de la imagen =)*/
else {
	window.open(srcIG, '_blank');
}
```
before adding `javascript:` to the url, so you get something like this:

```javascript
javascript:/*Insertar jquery, mas comodo seleccionar D:*/ var script = document.createElement('script'); script.src = 'https://code.jquery.com/jquery-2.2.2.min.js'; script.type = 'text/javascript'; document.getElementsByTagName('head')[0].appendChild(script); /*Seleccion de xpath / parents*/ var srcIG = $("body > div:nth-child(9) > div > div._g1ax7 > div > article > div:nth-child(2) > div > div._jjzlb > img").attr("src"); var srcVIDEOIG = $("body > div:nth-child(9) > div > div._g1ax7 > div > article > div.ResponsiveBlock > div:nth-child(1) > div > div > div._tqoyh._pwe27 > div > video").attr("src"); /*Si la variable img no tiene nada, quiere decir que es un video, por lo tanto utiliza el ink del video*/ if (srcIG == null && srcVIDEOIG != null) { window.open(srcVIDEOIG, '_blank'); } /*Si no, usa el de la imagen =)*/ else { window.open(srcIG, '_blank'); }
```

Then save the bookmark, enter to a random ig image or video and click in the bookmark

note: if you dont see the bookmark list press `cltl + b`
