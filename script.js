/*Insertar jquery, mas comodo seleccionar D:*/
var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-2.2.2.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

/*Seleccion de xpath / parents*/
var srcIG = $("body > div:nth-child(9) > div > div._g1ax7 > div > article > div:nth-child(2) > div > div._jjzlb > img").attr("src");

if(srcIG == null){
	var srcIG = $("#react-root > section > main > div > div > article > div:nth-child(2) > div > div._jjzlb > img").attr("src");
}

var srcVIDEOIG = $("video[class*='_c8hkj']").attr("src");

/*Si la variable img no tiene nada, quiere decir que es un video, por lo tanto utiliza el ink del video*/
if (srcIG == null && srcVIDEOIG != null) {
	window.open(srcVIDEOIG, '_blank');
}

/*Si no, usa el de la imagen =)*/
else {
	window.open(srcIG, '_blank');
}
