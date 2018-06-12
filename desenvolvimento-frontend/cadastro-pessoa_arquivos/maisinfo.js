/*
Autor: Carlos H. Roland
*/

//document.write('<div id="dvinfo" style="visibility: hidden;" ></div>');

ns = document.layers;
ie = document.all;
ns6 = (document.getElementById && !document.all);
box = document.getElementById('info');

if (ie) {
if (box) {
box.style.position = 'absolute';
box.style.visibility = 'hidden';
box.style.fontFamily = 'Verdana, Arial, Helvetica, sans-serif';
box.style.fontSize = '9px';
box.style.color = '#000000';
box.style.backgroundColor = '#FFFFCC';
box.style.display = 'block';
box.style.padding = '2px';
box.style.border = '1px solid #000000';
box.style.zIndex = '10000000';
}

}
function maisinfo(msg) {

	if(typeof posx == "undefined") posx = 0;
	if(typeof posy == "undefined") posy = 0;
	
	box.innerHTML = msg;

	mostrandoBox();
	
}
function mostrandoBox () {
	box.style.visibility = 'visible';
	box.style.left = 10+posx+'px';
	box.style.top = 17+posy+'px';

	document.body.style.cursor = 'help';

	exibebox = setTimeout('mostrandoBox()',1);
}
function menosinfo() {
		
	clearTimeout(exibebox);
	box.style.visibility = 'hidden';
	document.body.style.cursor = 'default';

}
function moveMouse(e){
		if(ie){
			posx = event.clientX;
			posy = event.clientY;
		} else if (ns){
			posx = e.x;
			posy = e.y;
		} else if (ns6){
			posx = e.clientX;
			posy = e.clientY;
		}
	}
document.onmousemove = moveMouse;