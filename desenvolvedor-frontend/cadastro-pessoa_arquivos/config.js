// verifica se o browser pode ser usado.
function browser() {
	var n = navigator.userAgent.toLowerCase()
	//Firefox
		var ff = n.match(/firefox\/53/)   
		if (!(ff != null))
			return true;
	
	return false;			
}

function getOuterHTML(object) {
	var element;
	if (!object) return '';
	element = document.createElement("div");
	element.appendChild(object.cloneNode(true));
	return element.innerHTML;
}

function configuraBarra() {
	//window.open("http://localhost:8080/colmeia", "Colm�ia", "toolbar = no"); 
	//alert("Funciona. Develop mode off");
	//alert(appCodeName);
	//window.self.scrollbars = false;
	//window.open("");
	//window.close();
	
}