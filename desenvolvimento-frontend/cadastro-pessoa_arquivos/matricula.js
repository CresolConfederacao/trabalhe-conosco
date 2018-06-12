/**
 * Componente Ajax para gerar código de matrícula
 *
 * @author Ivan Silva
 */

var MASCARA_MATRICULA = ". 00 - ";

function calcularDvModulo10(nomeProperty) {
	var matricula = escape(document.getElementById(nomeProperty).value);
	var nomeDVTexto = nomeProperty + "DVTexto";
	var nomeDV = nomeProperty + "DV";
	
	if (matricula != "")  {
		new Ajax.Request('buscar_dv_modulo10.do',
		  	{
			    method:'post',
			    parameters: 'matriculaAssociado='+ matricula,
			    contentType:'application/x-www-form-urlencoded',
			    asynchronous: true,
			    onSuccess: function(transport){
			      var response = transport.responseText;
				  document.getElementById(nomeDVTexto).innerHTML = MASCARA_MATRICULA + response;
				  document.getElementById(nomeDV).value = MASCARA_MATRICULA + response
				  
			    },
			    onFailure: function(){ definirMensagem('Something went wrong...') }
		  	}
		);
	} else {
	  document.getElementById(nomeDVTexto).innerHTML = "";
	  document.getElementById(nomeDV).value = "";
	}
	
}