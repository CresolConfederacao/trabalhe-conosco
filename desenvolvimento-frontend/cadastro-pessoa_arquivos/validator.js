var LETRAS = "ABCDEFGHIJKLMNOPQRSTUVXWYZabcdefghijklmnopqrstuvxwyz";
var ALFA = LETRAS +  " ãÃõÕâÂÊêôÔáÁéÉíÍóÓúÚàÀèÈìÌòÒùÙÇç_()-.&ÄäüÜöÖ+,";
var INTEIRO = "1234567890";
var ALFA_NUMERICO = ALFA + INTEIRO;
var DESCRICAO = ALFA_NUMERICO +  "'*=!,:;%$ªº°¹²³§@#?/|";
var NUM_DIGITOS_CPF  = 11;
var NUM_DIGITOS_CNPJ = 14;
var NUM_DIGITOS_FORMATADO_CPF  = 14;
var NUM_DIGITOS_FORMATADO_CNPJ = 18;
var NUM_DGT_CNPJ_BASE = 8;
var MOEDA = INTEIRO + ",.";
var PLACA = INTEIRO + LETRAS;
var HORA = INTEIRO + ":";
var PERCENTAGEM = MOEDA;
var PERCENTAGEM_NEGATIVA = PERCENTAGEM + "-";
var DATA = INTEIRO + "/";
var CEP = INTEIRO; // + ".-";
var TELEFONE = INTEIRO ;
var CONTA_CONTABIL = INTEIRO + ".";
var INSCRICAO_ESTADUAL = ALFA_NUMERICO + ".-";
var EMAIL = ALFA_NUMERICO + '@.';
var PATH_FILE = ALFA_NUMERICO + '/\\';
var MES_ANO = INTEIRO + "/";
var WEBSERVICE = LETRAS + INTEIRO + '_';
var SETA_BAIXO=40;
var SETA_CIMA=38;
var SETA_ESQUERDA=37;
var SETA_DIREITA=39;
var BTN_INSERT=45;
var BTN_DELETE=46;
var BTN_TAB=9;
var BTN_ESC=27;
var BTN_CTRL_C=99;
var BTN_CTRL_V=118;
var BTN_CTRL_X=120;
var BTN_CTRL_C_UPPER=67;
var BTN_CTRL_V_UPPER=86;
var BTN_CTRL_X_UPPER=88;
var BTN_HOME=36;
var BTN_END=35;
var BTN_ENTER=13;
var BTN_BACKSPACE=8;
var BTN_SHIFT=16;
var mensagemPadraoObrigatorio="O(s) campo(s) abaixo deve(m) ser preenchido(s)";
var _IE = (navigator.appName == "Microsoft Internet Explorer");
var IE_NUM0=96;
var IE_NUM1=97;
var IE_NUM2=98;
var IE_NUM3=99;
var IE_NUM4=100;
var IE_NUM5=101;
var IE_NUM6=102;
var IE_NUM7=103;
var IE_NUM8=104;
var IE_NUM9=105;
var CONTA_CORRENTE = INTEIRO;
var CONTA_BANCARIA = INTEIRO;
var CONTA_CORRENTE_TED = INTEIRO + "X";
var NUM_DIGITOS_FORMATADO_CONTA_CORRENTE  = 8;
var NUM_DIGITOS_CONTA_CORRENTE  = 7;
var caminhoAppletInstalacao = "applet/configurar.jnlp";
var NUMERO_CONTRATO = INTEIRO + "-.";
var CODIGO_COOPERATIVA = INTEIRO + ".";
var ARQUIVO_UPLOAD = WEBSERVICE + "-.";
var idSubMenu = "";

if(typeof jQuery != 'undefined'){jQuery.noConflict()};

//********************************************************************
// Função    		: topoPagina
// Objetivo  		: Leva a barra de scroll para a posi??o 0
// Par?metro		: não tem
// Retorno 			: não tem
//********************************************************************
function topoPagina(){
	var objDiv = document.getElementById("Layer1");
    objDiv.scrollTop = 0;
}

//********************************************************************
// Função    		: validaHora
// Objetivo  		: Validar se a letra digitada está na faixa de letras permitidas
// Par?metro		: STR letra digitada
// Retorno 			: True se for estiver na faixa, False se não estiver na faixa
//********************************************************************
function validaHora(str){
	return HORA.indexOf(str)>=0;
}

//********************************************************************
//Função    		: validaContaCorrenteTed
//Objetivo  		: Validar se a letra digitada está na faixa de letras permitidas
//Par?metro			: STR letra digitada
//Retorno 			: True se for estiver na faixa, False se não estiver na faixa
//********************************************************************
function validaContaCorrenteTed(str){
	return CONTA_CORRENTE_TED.indexOf(str)>=0;
}

//********************************************************************
// Função    		: validaAlfa
// Objetivo  		: Validar se a letra digitada est? na faixa de letras permitidas
// Par?metro		: STR letra digitada
// Retorno 			: True se for estiver na faixa, False se não estiver na faixa
//********************************************************************
function validaAlfa(str){
	return ALFA.indexOf(str)>=0;
}

//********************************************************************
// Função    		: validaCampo
// Objetivo  		: Validar se a tecla digitada est? na faixa permitida para definir nome de campo
// Par?metro		: STR letra digitada
// Retorno 			: True se for estiver na faixa, False se não estiver na faixa
//********************************************************************
function validaCampo(str){
	return CAMPO.indexOf(str)>=0;
}

//********************************************************************
// Função    		: validaCEP
// Objetivo  		: Validar se a tecla digitada está na faixa permitida 
// Par?metro		: STR letra digitada
// Retorno 			: True se for estiver na faixa, False se não estiver na faixa
//********************************************************************
function validaCEP(str){
	return CEP.indexOf(str)>=0;
}

//********************************************************************
// Função    		: validaContaCorrente
// Objetivo  		: Validar se a tecla digitada está na faixa permitida 
// Par?metro		: STR letra digitada
// Retorno 			: True se for estiver na faixa, False se não estiver na faixa
//********************************************************************
function validaContaCorrente(str){
	return CONTA_CORRENTE.indexOf(str)>=0;
}

//********************************************************************
// Função    		: validaContaBancaria
// Objetivo  		: Validar se a tecla digitada está na faixa permitida 
// Par?metro		: STR letra digitada
// Retorno 			: True se for estiver na faixa, False se não estiver na faixa
//********************************************************************
function validaContaBancaria(str){
	return CONTA_BANCARIA.indexOf(str)>=0;
}

//********************************************************************
// Função    		: validaPlaca (String)
// Objetivo  		: Verifica se um conjunto de caracteres s?o  caracteres v?lidos para placa.
// Par?metro 		: Conjunto de caracteres.
// Retorno   		: True se o conjunto for de caracteres placa, False se o conjunto não for . 
// Pr?-Requisito 	: nenhum 
//********************************************************************  
function validaPlaca (str) {
	return PLACA.indexOf(str)>=0;
}

function validaPlacaLetras (str) {
	return LETRAS.indexOf(str)>=0;
}

function validaPlacaNumeros (str) {
	return INTEIRO.indexOf(str)>=0;
}

//********************************************************************
// Função    		: validaWebservice (String)
// Objetivo  		: Verifica se um conjunto de caracteres sao  caracteres validos para o nome de um metodo de um webservice.
// Par?metro 		: Conjunto de caracteres.
// Retorno   		: True se o conjunto for de caracteres for valido, False se o conjunto nao for . 
// Pr?-Requisito 	: nenhum 
//******************************************************************** 
function validaWebservice (str) {
	return WEBSERVICE.indexOf(str)>=0;
}

function validaTextoWebservice (strTexto) {
	if ( (trimJS(strTexto)).length==0){
		return true;
    }

    var i;

    for (i = 0; i < strTexto.length; i++)
    {   
        var c = strTexto.charAt(i);
        if (validaWebservice(c) == false){ 
		  return false;
		}
    }
    return true;
}

//********************************************************************
// Função    		: validaTextoAlfa
// Objetivo  		: Validar se o texto informado est? na faixa de letras permitidas
// Par?metro		: STR letra digitada
// Retorno 			: True se for estiver na faixa, False se não estiver na faixa
//********************************************************************
function validaTextoAlfa (strTexto, caseSensitive) {

    if ( (trimJS(strTexto)).length==0){
		return true;
    }

    var i;

    for (i = 0; i < strTexto.length; i++)
    {   
        var c = strTexto.charAt(i);
        
        if(!caseSensitive) {
        	c = new String(c).toUpperCase();
        }
        	
        if (validaAlfa(c) == false){
			return false;
		}
    }
    return true;
}

//********************************************************************
// Função    		: validaTextoAlfaNumerico
// Objetivo  		: Validar se o texto informado est? na faixa de letras permitidas
// Par?metro		: STR letra digitada
// Retorno 			: True se for estiver na faixa, False se não estiver na faixa
//********************************************************************
function validaTextoAlfaNumerico (strTexto, type, caseSensitive) {

    if ( (trimJS(strTexto)).length==0){
		return true;
    }

    var i;

    for (i = 0; i < strTexto.length; i++)
    {   
        var c = strTexto.charAt(i);
        if((type!='password' || type!='passwordColmeia') && !caseSensitive){
        	c = new String(c).toUpperCase();
        }
        if (validaAlfaNumerico(c) == false){ 
		  return false;
		}
    }
    return true;
}

//********************************************************************
// Função    		: validaTextoCEP
// Objetivo  		: Validar se o texto informado est? na faixa de letras permitidas
// Par?metro		: STR letra digitada
// Retorno 			: True se for estiver na faixa, False se não estiver na faixa
//********************************************************************
function validaTextoCEP (strTexto) {

    if ( (trimJS(strTexto)).length==0){
	return true;
    }

    var i;
	var str = strTexto.replace("-","");

    for (i = 0; i < str.length; i++)
    {   
        var c = str.charAt(i);
        c = new String(c).toUpperCase();
        if (validaCEP(c) == false){ 
		  return false;
		}
    }
    return true;
}

//********************************************************************
//Função    		: validaTextoContaCorrenteTed
//Objetivo  		: Validar se o texto informado esta na faixa de letras permitidas
//Par?metro			: STR letra digitada
//Retorno 			: True se for estiver na faixa, False se não estiver na faixa
//********************************************************************
function validaTextoContaCorrenteTed(strTexto) {
	if ((trimJS(strTexto)).length == 0) {
		return true;
	}

	var i;
	for (i = 0; i < strTexto.length; i++) {
		var c = strTexto.charAt(i);
		c = new String(c).toUpperCase();
		if (validaContaCorrenteTed(c) == false) {
			return false;
		}
	}
	return true;
}

//********************************************************************
// Função    		: validaTextoContaCorrente
// Objetivo  		: Validar se o texto informado est? na faixa de letras permitidas
// Par?metro		: STR letra digitada
// Retorno 			: True se for estiver na faixa, False se não estiver na faixa
//********************************************************************
function validaTextoContaCorrente (strTexto) {

    if ( (trimJS(strTexto)).length==0){
	return true;
    }

    var i;

    for (i = 0; i < strTexto.length; i++)
    {   
        var c = strTexto.charAt(i);
        c = new String(c).toUpperCase();
        if (validaContaCorrente(c) == false){ 
		  return false;
		}
    }
    return true;
}

//********************************************************************
// Função    		: validaTextoHora
// Objetivo  		: Validar se o texto informado esá? na faixa de caracteres permitidas
// Par?metro		: STR letra digitada
// Retorno 			: True se for estiver na faixa, False se não estiver na faixa
//********************************************************************
function validaTextoHora (strTexto) {

    if ( (trimJS(strTexto)).length==0){
	return true;
    }

    var i;

    for (i = 0; i < strTexto.length; i++)
    {   
        var c = strTexto.charAt(i);
        c = new String(c).toUpperCase();
        if (validaHora(c) == false){ 
		  return false;
		}
    }
    return true;
}
//********************************************************************
// Função    		: validaPathFile
// Objetivo  		: Validar se o texto informado est? na faixa de letras permitidas
// Par?metro		: STR letra digitada
// Retorno 			: True se for estiver na faixa, False se não estiver na faixa
//********************************************************************
function validaTextoPathFile (strTexto) {

    if ( (trimJS(strTexto)).length==0){
	return true;
    }

    var i;

    for (i = 0; i < strTexto.length; i++)
    {   
        var c = strTexto.charAt(i);
        c = new String(c).toUpperCase();
        if (validaPathFile(c) == false){ 
		  return false;
		}
    }
    return true;
}
//********************************************************************
// Função    		: validaDescricao
// Objetivo  		: Validar se o texto informado está na faixa de letras permitidas
// Par?metro		: STR letra digitada
// Retorno 			: True se for estiver na faixa, False se não estiver na faixa
//********************************************************************
function validaTextoDescricao (strTexto, caseSensitive) {

    if ( (trimJS(strTexto)).length==0){
	return true;
    }

    var i;
 
    for (i = 0; i < strTexto.length; i++)
    {   
        var c = strTexto.charAt(i);
        var val = strTexto.charCodeAt(i);
        if(val != 10){ // 10 == enter
        
        	if(!caseSensitive) {
            	c = new String(c).toUpperCase();
            }
            	
	        if (validaDescricao(c) == false){ 
			  return false;
			}
		}
    }
    return true;
}

//********************************************************************
// Função    		: validaTextoTelefone
// Objetivo  		: Validar se o texto informado est? na faixa de letras permitidas
// Par?metro		: STR letra digitada
// Retorno 			: True se for estiver na faixa, False se não estiver na faixa
//********************************************************************
function validaTextoTelefone (strTexto) {

    if ( (trimJS(strTexto)).length==0){
		return true;
    }

    if ( ((trimJS(strTexto)).length<9 || (trimJS(strTexto)).length > 11) && (trimJS(strTexto)).length != 8){
		return false;
    }

	if ((trimJS(strTexto)).length == 11 && strTexto.substring(2,4) != '00' && strTexto.substring(0,1) == '0') {
		return false;
	}
	
    var i;

    for (i = 0; i < strTexto.length; i++)
    {   
        var c = strTexto.charAt(i);
        c = new String(c).toUpperCase();
        if (validaTelefone(c) == false){ 
		  return false;
		 }
    }
    return true;
}

//********************************************************************
// Função    		: validaTextoPlaca
// Objetivo  		: Validar se o texto informado est? na faixa de letras permitidas
// Par?metro		: STR letra digitada
// Retorno 			: True se for estiver na faixa, False se não estiver na faixa
//********************************************************************
function validaTextoPlaca (strTexto) {

    if ( (trimJS(strTexto)).length==0 || (trimJS(strTexto))=="0"){
		return true;
    }

    if ( (trimJS(strTexto)).length!=7){
		return false;
    }

    var i;


	var letras = strTexto.substring(0,3);
	var numeros = strTexto.substring(3,7);
	
    for (i = 0; i < letras.length; i++)
    {   
        var c = letras.charAt(i);
        c = new String(c).toUpperCase();
        if (validaPlacaLetras(c) == false){ 
		  return false;
		 }
    }
	
	var j;
	
	for (j = 0; j < numeros.length; j++)
    {   
        var n = numeros.charAt(j);
        n = new String(n).toUpperCase();
        if (validaPlacaNumeros(n) == false){ 
		  return false;
		 }
    }
	
    return true;
}


//********************************************************************
// Função    		: validaTextoInscricaoEstadual
// Objetivo  		: Validar se o texto informado est? na faixa de letras permitidas
// Par?metro		: STR letra digitada
// Retorno 			: True se for estiver na faixa, False se não estiver na faixa
//********************************************************************
function validaTextoInscricaoEstadual (strTexto) {

    if ( (trimJS(strTexto)).length==0){
	return true;
    }

    var i;

    for (i = 0; i < strTexto.length; i++)
    {   
        var c = strTexto.charAt(i);
        c = new String(c).toUpperCase();
        if (validaInscricaoEstadual(c) == false){
			 return false;
		}
    }
    return true;
}

//********************************************************************
// Função    		: validaTextoCampo
// Objetivo  		: Validar se o texto informado est? na faixa de letras permitidas
// Par?metro		: STR letra digitada
// Retorno 			: True se for estiver na faixa, False se não estiver na faixa
//********************************************************************
function validaTextoCampo (strTexto, caseSensitive) {

    if ( (trimJS(strTexto)).length==0){
	return true;
    }

    var i;

    for (i = 0; i < strTexto.length; i++)
    {   
        var c = strTexto.charAt(i);
        
        if(!caseSensitive)  {
        	c = new String(c).toUpperCase();
        }
        	
        if (validaCampo(c) == false){
			 return false;
		}
    }
    return true;
}

//********************************************************************
// Função    		: validaValorHora
// Objetivo  		: Validar se o texto informado est? na faixa de caracteres permitidos para hora
// Par?metro		: strTexto letra digitada
// Par?metro		: hora quantidade de casa da hora
// Par?metro		: minuto quantidade de casa do minuto
// Par?metro		: ultrapassarHora ser permite minuto acima de 59
// Retorno 			: True se for estiver na faixa, False se não estiver na faixa
//********************************************************************
function validaValorHorario (strTexto, hora, minuto,ultrapassarHora) {

    if ( (trimJS(strTexto)).length==0){
		return true;
    }


    var i;

    for (i = 0; i < strTexto.length; i++)
    {   
        var c = strTexto.charAt(i);
        c = new String(c).toUpperCase();
        if (HORA.indexOf(c)>=0 == false) {
			 return false;
		}
    }

	
	var localSeparador =  strTexto.indexOf(":");
	if (localSeparador != -1 ) {
		var tmpSeparador = strTexto.split(":");
		if ( tmpSeparador[0].length > hora) {
			return false;	
		}
		if ( tmpSeparador[1].length > minuto) {
			return false;	
		}
		if ( parseInt( tmpSeparador[1] )  > 59) {
			return false;
		}
		if ( !ultrapassarHora && parseInt( tmpSeparador[0] )  > 23) {
			return false;
		}
		if ( !ultrapassarHora && parseInt( tmpSeparador[1] )  > 59) {
			return false;
		}
	}
    return true;
}

//********************************************************************
// Função    		: validaValorMoeda
// Objetivo  		: Validar se o texto informado est? na faixa de caracteres permitidos para moeda
// Par?metro		: strTexto letra digitada
// Retorno 			: True se for estiver na faixa, False se não estiver na faixa
//********************************************************************
function validaValorMoeda (strTexto) {

    if ( (trimJS(strTexto)).length==0){
	return true;
    }

    var i;

    for (i = 0; i < strTexto.length; i++)
    {   
        var c = strTexto.charAt(i);
        c = new String(c).toUpperCase();
        if (MOEDA.indexOf(c)>=0 == false) {
			 return false;
		}
    }
    return true;
}

function validaValorMoedaNegativa (strTexto) {

    if ( (trimJS(strTexto)).length==0){
	return true;
    }

    var i;

    for (i = 0; i < strTexto.length; i++)
    {   
        var c = strTexto.charAt(i);
        c = new String(c).toUpperCase();
        if (PERCENTAGEM_NEGATIVA.indexOf(c)>=0 == false) {
			 return false;
		}
    }
    return true;
}

//********************************************************************
// Função    		: validaValorPercentagem
// Objetivo  		: Validar se o texto informado est? na faixa de caracteres permitidos para percentagem
// Par?metro		: strTexto letra digitada
// Retorno 			: True se for estiver na faixa, False se não estiver na faixa
//********************************************************************
function validaValorPercentagem (strTexto) {

    if ( (trimJS(strTexto)).length===0){
	return true;
    }

    var i;

    for (i = 0; i < strTexto.length; i++)
    {   
        var c = strTexto.charAt(i);
        c = new String(c).toUpperCase();
        if (MOEDA.indexOf(c)>=0 === false){ 
		  return false;
		}
    }
    return true;
}

//********************************************************************
// Função    		: validaValorPercentagemNegativa
// Objetivo  		: Validar se o texto informado est? na faixa de caracteres permitidos para percentagem
// Par?metro		: strTexto letra digitada
// Retorno 			: True se for estiver na faixa, False se não estiver na faixa
//********************************************************************
function validaValorPercentagemNegativa (strTexto) {

    if ( (trimJS(strTexto)).length===0){
	return true;
    }

    var i;

    for (i = 0; i < strTexto.length; i++)
    {   
        var c = strTexto.charAt(i);
        c = new String(c).toUpperCase();
        if (POERCENTAGEM_NEGATIVA.indexOf(c)>=0 === false){ 
		  return false;
		}
    }
    return true;
}




//********************************************************************
// Função    		: validaAlfaNumerico
// Objetivo  		: Validar se o letra digitada ? um texto
// Par?metro		: STR letra digitada
// Retorno 			: True se for uma letra, False se não for uma letra
//********************************************************************
function validaAlfaNumerico(str){
	return ALFA_NUMERICO.indexOf(str)>=0;
}

//********************************************************************
// Função    		: validaAlfaNumerico
// Objetivo  		: Validar se o letra digitada ? um texto
// Par?metro		: STR letra digitada
// Retorno 			: True se for uma letra, False se não for uma letra
//********************************************************************
function validaPathFile(str){
	return PATH_FILE.indexOf(str)>=0;
}

//********************************************************************
// Função    		: validaDescricao
// Objetivo  		: Validar se o letra digitada são um texto
// Par?metro		: STR letra digitada
// Retorno 			: True se for uma letra, False se não for uma letra
//********************************************************************
function validaDescricao(str){
	
	return DESCRICAO.indexOf(str)>=0;
}


//********************************************************************
// Função    		: validaEmail
// Objetivo  		: Validar o EMAIL
// Par?metro 		: strEmail
// Retorno   		: Verdadeiro para EMAIL v?lido e Falso para EMAIL inválido
// Pr?-Requisito 	: 
//********************************************************************
function validaEmail(strEmail){
	if ( (trimJS(strEmail)).length==0){
		return true;
	}
	var er = new RegExp(/^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/);
    if(typeof(strEmail) == "string"){
        if(er.test(strEmail)) {
        	return true; 
        }
    } else {
        return false;
    }
}

//********************************************************************
// Função    		: validaData
// Objetivo  		: Validar a DATA
// Par?metro 		: caracter
// Retorno   		: Verdadeiro para DATA v?lida e Falso para DATA inválida
// Pr?-Requisito 	: Função anoBissexto
//********************************************************************
function validaData(str){
	return  DATA.indexOf(str)>=0;
} 


//********************************************************************
// Função    		: validaDataIntervalo
// Objetivo  		: Valida intervalos entre duas datas
// Par?metro 		: strData (Formato: DD/MM/AAAA)
// Retorno   		: True se a primeira data ? menor que a segunda. False caso contr?rio.
// Pr?-Requisito 	: Função anoBissexto
//********************************************************************
function validaDataIntervalo(strData1, strData2){

	if (!validaData(strData1) || !validaData(strData2)){
		return false;
	}

	strData1 = strData1.substring(6,10) + strData1.substring(3,5) + strData1.substring(0,2);
	strData2 = strData2.substring(6,10) + strData2.substring(3,5) + strData2.substring(0,2);
	
	if (strData1 < strData2){
		return true;
	}
		
	return false;	
}

function validaDataAtual(campo, dataAtual, label){
	
	var strData1 = campo.value;
	var strData2 = dataAtual;
	
	// transforma data1 em vari?vel tipo data
	var arrData1 = strData1.split("/");
	var strDia1 = arrData1[0];
	var strMes1 = arrData1[1];
	var strAno1 = arrData1[2];
	var dtmData1 = new Date(strAno1, strMes1, strDia1);

	// transforma data2 em vari?vel tipo data
	var arrData2 = strData2.split("/");
	var strDia2 = arrData2[0];
	var strMes2 = arrData2[1];
	var strAno2 = arrData2[2];
	var dtmData2 = new Date(strAno2, strMes2, strDia2);
	
	if(dtmData1.getTime() > dtmData2.getTime()){
		definirMensagem("Data(s) Informada(s) " + label + " esta(ão) incorreta(s).");
		setFocus(campo);
	}
}

//********************************************************************
// Função    		: anoBissexto
// Objetivo  		: Verifica se o ano ? bissexto
// Par?metro 		: strAno
// Retorno   		: Verdadeiro para ANO BISSEXTO e Falso para ANO NORMAL
// Pr?-Requisito 	: nenhum
//********************************************************************
function anoBissexto(strAno){
	if ((strAno%100) == 0) {
		if ( (strAno%400) == 0) {
			return true;
		}
	}
	else { 
		if ((strAno%4) == 0){
			return true;
		}
	}
	return false;
}


//********************************************************************
// Função    		: diaDif
// Objetivo  		: Calcula a diferen?a de dias entre duas datas
// Par?metro 		: strData1 (Formato: DD/MM/AAAA), strData2 (Formato: DD/MM/AAAA)
// Retorno   		: intervalo de dias
// Pr?-Requisito 	: Função validaData
//********************************************************************
function diaDif(strData1, strData2){

	if (!validaData(strData1) || !validaData(strData2)){
		return 0;
	}

	// transforma data1 em vari?vel tipo data
	var arrData1 = strData1.split("/");
	var strDia1 = arrData1[0];
	var strMes1 = arrData1[1];
	var strAno1 = arrData1[2];
	var dtmData1 = new Date(strAno1, strMes1, strDia1);

	// transforma data2 em vari?vel tipo data
	var arrData2 = strData2.split("/");
	var strDia2 = arrData2[0];
	var strMes2 = arrData2[1];
	var strAno2 = arrData2[2];
	var dtmData2 = new Date(strAno2, strMes2, strDia2);

	var intDiferenca = dtmData1.getTime() - dtmData2.getTime();
	intDiferenca = Math.floor(intDiferenca / (1000 * 60 * 60 * 24));

	return intDiferenca;
}


//********************************************************************
// Função    		: validaMoeda
// Objetivo  		: Verifica se a moeda ? valida
// Par?metro 		: strMoeda (Formato: 100,00)
// Retorno   		: Verdadeiro para MOEDA no formato e Falso para MOEDA fora do formato
// Pr?-Requisito 	: nenhum
//********************************************************************
function validaMoeda(strMoeda){
	if ( (trimJS(strMoeda)).length==0){
		return true;
	}

	var moeda="0123456789,.";
	var virgula = false;
	for (var i=0;i<strMoeda.length;i++){
		temp=strMoeda.substring(i,i+1);
		if ((virgula) && (temp==",")){
			return false;
		}
		if (temp==","){
			virgula=true;	
		}
		if (moeda.indexOf(temp)==-1){
			return false;
		}
	}
	return true;
}


//********************************************************************
// Função    		: validaTextoNumero (Inteiro)
// Objetivo  		: Verifica se um conjunto de caracteres s?o d?gitos num?ricos.
// Par?metro 		: Conjunto de caracteres.
// Retorno   		: True se o conjunto for um n?mero, False se o conjunto não for n?mero. 
// Pr?-Requisito 	: nenhum 
//********************************************************************  
function validaTextoNumero (strNumero) {
    if ( (trimJS(strNumero)).length==0){
	  return true;
    }

    var i;
    

    for (i = 0; i < strNumero.length; i++)
    {   
        var c = strNumero.charAt(i);
	    if (validaNumero(c) == false) { 
		  return false;
		}
    }
    return true;
}

//********************************************************************
// Função    		: validaTextoDia (Inteiro)
// Objetivo  		: Verifica se um conjunto de caracteres s?o d?gitos num?ricos.
// Par?metro 		: Conjunto de caracteres.
// Retorno   		: True se o conjunto for um n?mero, False se o conjunto não for n?mero. 
// Pr?-Requisito 	: nenhum 
//********************************************************************  
function validaTextoDia (strNumero) {
    if ( (trimJS(strNumero)).length==0){
	  return true;
    }

    var i;
    

    for (i = 0; i < strNumero.length; i++)
    {   
        var c = strNumero.charAt(i);
	    if (validaNumero(c) == false){
			 return false;
		}
    }

    if (strNumero <= 0 || strNumero > 31){
		return false;
	}
    
    return true;
}

//********************************************************************
// Função    		: validaTextoMes (Inteiro)
// Objetivo  		: Verifica se um conjunto de caracteres s?o d?gitos num?ricos.
// Par?metro 		: Conjunto de caracteres.
// Retorno   		: True se o conjunto for um n?mero, False se o conjunto não for n?mero. 
// Pr?-Requisito 	: nenhum 
//********************************************************************  
function validaTextoMes (strNumero) {
    if ( (trimJS(strNumero)).length===0){
	  return true;  
	 }

    var i;
    

    for (i = 0; i < strNumero.length; i++)
    {   
        var c = strNumero.charAt(i);
	    if (validaNumero(c) === false){ 
		  return false;
		}
    }
    
    if (strNumero <= 0 || strNumero > 12) {
		return false;
	}
    
    return true;
}

//********************************************************************
// Função    		: validaTextoAno (Inteiro)
// Objetivo  		: Verifica se um conjunto de caracteres s?o d?gitos num?ricos.
// Par?metro 		: Conjunto de caracteres.
// Retorno   		: True se o conjunto for um n?mero, False se o conjunto não for n?mero. 
// Pr?-Requisito 	: nenhum 
//********************************************************************  
function validaTextoAno (strNumero) {
    if ( (trimJS(strNumero)).length==0){
	 return true;
    }

    var i;
    

    for (i = 0; i < strNumero.length; i++)
    {   
        var c = strNumero.charAt(i);
	    if (validaNumero(c) == false) {
		return false;
	}
    }

    if (strNumero <= 1800 || strNumero > 2999) {
		return false;
	}
    
    return true;
}
//********************************************************************
// Função    		: validaEmailTeclar (String)
// Objetivo  		: Verifica se um conjunto de caracteres s?o  caracteres v?lidos para email.
// Par?metro 		: Conjunto de caracteres.
// Retorno   		: True se o conjunto for de caracteres email, False se o conjunto não for . 
// Pr?-Requisito 	: nenhum 
//********************************************************************  
function validaNumero (str) {
	return INTEIRO.indexOf(str)>=0;
}

//********************************************************************
// Função    		: validaMesAno (Teclar (String))
// Objetivo  		: Verifica se um conjunto de caracteres s?o  caracteres v?lidos para mesAno.
// Par?metro 		: Conjunto de caracteres.
// Retorno   		: True se o conjunto for de caracteres email, False se o conjunto não for . 
// Pr?-Requisito 	: nenhum 
//********************************************************************  
function validaMesAno (str) {
	return MES_ANO.indexOf(str)>=0;
}

//********************************************************************
// Função    		: validaTelefone (String)
// Objetivo  		: Verifica se um conjunto de caracteres s?o  caracteres v?lidos para telefone.
// Par?metro 		: Conjunto de caracteres.
// Retorno   		: True se o conjunto for de caracteres telefone, False se o conjunto não for . 
// Pr?-Requisito 	: nenhum 
//********************************************************************  
function validaTelefone (str) {
	return TELEFONE.indexOf(str)>=0;
}

//********************************************************************
// Função    		: validaEmailTeclar (String)
// Objetivo  		: Verifica se um conjunto de caracteres s?o  caracteres v?lidos para email.
// Par?metro 		: Conjunto de caracteres.
// Retorno   		: True se o conjunto for de caracteres email, False se o conjunto não for . 
// Pr?-Requisito 	: nenhum 
//********************************************************************  
function validaEmailTeclar (str) {
	return EMAIL.indexOf(str)>=0;
}

//********************************************************************
// Função    		: validaIncricaoEstadual (String)
// Objetivo  		: Verifica se um conjunto de caracteres s?o  caracteres v?lidos para inscri??o estadual.
// Par?metro 		: Conjunto de caracteres.
// Retorno   		: True se o conjunto for de caracteres telefone, False se o conjunto não for . 
// Pr?-Requisito 	: nenhum 
//********************************************************************  
function validaInscricaoEstadual (str) {
	return INSCRICAO_ESTADUAL.indexOf(str)>=0;
}

//********************************************************************
// Função    		: validaHorarioIntervalo
// Objetivo  		: Verifica se o hor?rio final ? maior que inicial.
// Par?metro 		: Hor?rio inicial, hor?rio final
// Retorno			: True se hor?rio final maior que inicial.
// Pr?-Requisito	: nenhum
//********************************************************************
function validaHorarioIntervalo (HorarioInicial, HorarioFinal) {
	if (validaHorario(HorarioInicial) && validaHorario(HorarioFinal)) {
		HoraInicial = HorarioInicial.substring(0,2);
		MinutoInicial = HorarioInicial.substring(3,5);
		HoraFinal = HorarioFinal.substring(0,2);
		MinutoFinal = HorarioFinal.substring(3,5);

		horario1 = HoraInicial + MinutoInicial;
		horario2 = HoraFinal + MinutoFinal;

		if (horario1 > horario2) {
			return false;
		} else {
			return true;
		}
	} else {
		return false;
	}
}


// ################################################################
//					EVENTOS
// ################################################################

//********************************************************************
// Função    		: apenasNumeros
// Objetivo  		: Verifica se a tecla que foi digitada ? um d?gito num?rico.
// Par?metro 		: O objeto event do javascript.
// Retorno			: True se for tecla num?rica, False se não for num?rica.
// Pr?-Requisito	: nenhum
//********************************************************************
function validaInteiroPress(event)
{
        var BACKSPACE=  8;
        var key;
        var tecla;

        if(navigator.appName.indexOf("Netscape")!= -1) { 
          tecla= event.which;     
		 }
        else {
          tecla= event.keyCode;
		}

        key = String.fromCharCode(tecla);

        if ( (tecla == BACKSPACE) || (tecla == 13) ){
          return true;
		 }
        return ( (key >= "0") && (key <= "9") ); 
} 


//************ 1/2 ***************************************************
// Função    		: validaHoraPress
// Objetivo  		: Formata hora. Entra somente n?meros e um caractere ":"
// Par?metro 		: (this)
// Retorno   		: Hora formatada.
//********************************************************************  
function validaHorarioPress(obj){
	if (obj == null){
		return false;
	}
	
        var BACKSPACE=  8;
        var key;
        var tecla;

        if(navigator.appName.indexOf("Netscape")!= -1){  
          tecla= event.which;     
		  }
        else
		{
		 tecla= event.keyCode;
		}

        key = String.fromCharCode(tecla);

        if ( (tecla == BACKSPACE) || (tecla == 13) ){
        	return true;
        }
        else if (key == ":"){
        	if (obj.value.indexOf(":") < 0){
        		return true;
        	}
        	else{
        		return false;
        	}
        }        
        else{
        	return (key >= "0") && (key <= "9");
        }
} 

//************ 2/2 ***************************************************
// Função    		: validaHoraBlur
// Objetivo  		: Formata hora. Entra somente n?meros e um caractere ":"
// Par?metro 		: (this)
// Retorno   		: Hora formatada.
//********************************************************************  
function validaHorarioBlur(obj){
	if (obj == null){
		definirMensagem("Hora inválida!");
		return false;
	}
	
	if (!validaHorario(obj.value)){
		definirMensagem("Hora inválida!");
		obj.value = "";
		obj.focus();
		return false;
	}
	else{
		return true;
	}	
}

// As 2 pr?ximas fun??es s?o utilizadas como m?scara para datas conforme o exemplo abaixo :
//	<INPUT onKeyPress="return EntraData(this)" onBlur="VerificaData(this)" maxlength='10'>
// S?o acionados em 2 eventos:

//************ 1/2 ***************************************************
// Função    		: EntraData
// Objetivo  		: Formata data. Entra somente n?meros e duas barras
//					evento onKeyPress
// Par?metro 		: (this)
// Retorno   		: Data formatada 
//********************************************************************  
function validaDataPress(obj) {
	// 47 = /
		tem_barra = 0;
		if(navigator.appName.indexOf("Netscape")!= -1) { 
		  tecla= event.which;     
			}
        else{
		  tecla= event.keyCode;	// C?digo da tecla pressionada
		}

			key = String.fromCharCode(tecla);	// valor do c?digo da tecla pressionada (a propria tecla)
			valor = obj.value;			// valor do campo no formul?rio

		// Se for entre 0 e 9 ou barra
		if ( ((tecla >=48) && (tecla <=57)) || (tecla==47) )	{
			for (i=0; i<valor.length; i++){		// busca barra na string
				if (valor.charAt(i) == "/") {
					tem_barra++;				// se achar barra ganha uma flag indicando
				} 
			}
			// Se j? a string j? possui duas barra e a tecla pressionada ? uma barra
			if ((tem_barra == '2') && (key=="/")) {
				return false;		// retorna falso, vazio
			} else {
				return;
			}
		} else {
			return false;
		}
}

//*********** 2/2 ****************************************************
// Função    		: VerificaData
// Objetivo  		: Formatar data no evento onBlur
// Par?metro 		: (this)
// Retorno   		: Data formatada 
//********************************************************************  
function validaDataBlur(xData) { 


var   Dia = "";
var   Mes = "";
var   Ano = "";


var Data = xData.value;
if (Data == ""){
 return true; 
 }

if ( Data.indexOf("/") != -1 ){
  var tmpStr = Data;
  var pos = tmpStr.indexOf("/");
  var inicial = 0;
  var dia =  "00" + tmpStr.substring(inicial,pos);
  dia =  dia.charAt(dia.length-2) + dia.charAt(dia.length-1);
  tmpStr = tmpStr.substring(pos+1,tmpStr.length);
  pos = tmpStr.indexOf("/");
  var mes =  "00" + tmpStr.substring(inicial,pos);
  mes = mes.charAt(mes.length-2) + mes.charAt(mes.length-1);
  tmpStr = tmpStr.substring(pos+1,tmpStr.length);
  var ano = tmpStr;
  Data = dia + mes + ano;
}

var Data_valida = true;

if (Data.length > 10){
 Data_valida = false; 
 }

//Se a Data for apenas n?meros retorna inválido
if (isNaN(Data)){
 Data_valida = false;
}

Dia = Data.substring(0,2);
Mes = Data.substring(2,4);
Ano = Data.substring(4,8);

if (Ano < 1800 || Ano > 2999) {
 Data_valida = false;
}

if (Dia < 1 || Dia > 31 || Mes < 1 || Mes > 12){
 Data_valida = false; 
 }

if ((Mes==4 || Mes==6 || Mes==9 || Mes==11) && Dia==31)
  {
	  Data_valida = false;
  }

if (Mes == 2)
  {
  var bissexto = (Ano % 4 == 0 && (Ano % 100 != 0 || Ano % 400 == 0));
  if (Dia > 29 || (Dia == 29 && !bissexto))
   {
   Data_valida = false;
      }
  }
  if (Data_valida) {
    xData.maxLength = 10;
    xData.value = Dia + "/" + Mes + "/" + Ano;
  }
 return Data_valida;
}	// Enf Function


// As 3 pr?ximas fun??es s?o utilizadas como m?scara para valores conforme o exemplo abaixo :
//	<input type="text" name="VALOR" onkeypress="return validaMoedaPress(this);" onblur="FormatValor(this);" onFocus="validaMoedaFocus(this);">
// S?o acionados em 3 eventos:

//***************************  1/3  **********************************
// Função    		: validaMoedaPress
// Objetivo  		: Entra somente n?meros e apenas uma v?rgula no evento onKeyPress
// Par?metro 		: Campo a ser formatado. (this)
// Retorno   		: Valor formatada 
//********************************************************************  
//	13 = ENTER	/	32 = Barra de espa?o	/	46 = .	/	44 = ,  /    8 = back space
function validaMoedaPress(obj) {
	tam_max_num = obj.maxLength-3;
	var tem_virg;
	var indv = -1;

	if(navigator.appName.indexOf("Netscape")!= -1) {
		tecla= event.which;
	}	else	{
		tecla= event.keyCode;	// C?digo da tecla pressionada
	}

	key = String.fromCharCode(tecla);	// valor do c?digo da tecla pressionada (a propria tecla)
	valor = obj.value;			// valor do campo no formul?rio
	
	// Se for entre 0 e 9 ou v?rgula
	if ( ((tecla >=48) && (tecla <=57)) || (tecla ==44))
	{
		indv = valor.indexOf(",");

		if (indv == -1 && tecla == 44){
			return true;
		}
		if (indv == -1 && valor.length >= tam_max_num){
			return false;
		}
		if (indv == -1 && (valor.substring(0, indv)).length >= tam_max_num){
			return false;
		}
		if (tecla == 44){
			return false;
		}
		return true;
	} 
	else {	// Se não estiver entre 0 e 9 e não for v?rgula, cai fora.
		return false;
	}
} // end function


//**********************  2/3  ***************************************
// Função    		: FormatValor
// Objetivo  		: Insere ponto de milhar e coloca virgula. Trunca em n casas decimais no evento onBlur
// Par?metro 		: Campo a ser formatado. (this), N? casas decimais, A (arredonda ou nao) Se não passar o terceiro parametro o resultado ? truncado.
// Retorno   		: Valor formatada 
//********************************************************************  
function FormatValor(obj, decimais, tipo) {
	if (obj == "" || decimais =="") {
		definirMensagem('Falta Parametros na Função validaMoedaBlur.');
		return;
	}
	if (obj == null){
		return;
	}
	
	var valor = obj.value;
	var numero;
	var decimal = "";
	posicao_virg = 999;
	var charValidos = "0123456789,";
	
	if (valor == ""){
		return;
	}
	else if (valor.length == 1 && valor == ","){
		obj.value = "";
		return;
	}
	
	for (i=0; i<valor.length; i++){
		if (charValidos.indexOf(valor.charAt(i)) == -1){
			obj.value = "";
			obj.focus();
			definirMensagem('Valor monet?rio est? inválido');
			return;
		}
	}


	// Se A = arredondar
	if (tipo == "A" || tipo == "a")  {

		cem = "1";		// Variavel usada para ver por quanto deve ser dividido e multiplicado. (10/100/1000)  Usado com Math.Round
		for (x=0 ; x<decimais ; x++) {
			cem = cem + 0;
		}
		cem = eval(cem);		// Transforma para num?rico

		valor = valor.toString();		// Converte para String
		valor = valor.replace( ",", ".");
		
		valor = Math.round (valor * cem) / cem;

		valor = valor.toString();
		valor = valor.replace( ".", ",");

		for (i=0; i <valor.length; i++){		// busca v?rgula na string
			if (valor.charAt(i) == ",") {
				posicao_virg = i;
			}
		}
		
		numero = valor.substring(0, posicao_virg);
		if (posicao_virg == 999) {	// não possui v?rgula
			for (i=0 ; i<decimais ; i++)	{	
				decimal = decimal + "0";	// contatena n ZEROS
			}
		} else {	// se tiver v?rgula, pega os n n?meros ap?s a v?rgula
			decimal = valor.substring(posicao_virg+1, posicao_virg + decimais +1);
		}

		// N? de Zeros que devem ser inclu?dos no final da string
		zeros = (decimais-decimal.length);	// zeros = n? decimais - n? de n?meros que j? tem
		for (j=0 ; j<zeros ; j++)	{
			decimal = decimal + "0";	// concatena ZEROS necess?rios para decimal ter tamanho n
		}

		// Trata casas numericas
		var numero_temp='';
		for (i=0; i<(numero.length); i=i+3)	{	// a cada 3 casas contatena um ponto de milhar
			if (i==0)	{	// se vier da 1a. vez não concatena o ponto
				numero_temp = valor.substring(numero.length-i, numero.length-3-i) + numero_temp;
			} else {	// depois a cada 3 casas concatena um ponto
				numero_temp = valor.substring(numero.length-i, numero.length-3-i) + '.' + numero_temp;
			}
		}

		if (numero_temp=='') { numero_temp=0;	}
		valor_final = numero_temp + "," + decimal;	// junta casas num?ricas com casas decimais.	


		obj.value = valor_final;
		return;
	}

	
	// ==== ELSE TRUNCA =======

	// Se decimais vazio ou decimais menor igual a 2, default igual a 2
	if (decimais == null || decimais<=2) { 
		decimais = 2;
	}


	for (i=0; i <valor.length; i++){		// busca v?rgula na string
		if (valor.charAt(i) == ",") {
			posicao_virg = i;
		}
	}

	// Verifica se o tamanho de numeros antes da v?rgula ? menor que [obj.maxlength-3]
	ValorAntesVirg = valor.substring(0, posicao_virg);
	tamValorAntesVirg = ValorAntesVirg.length;
	tamLimite = obj.maxLength-3;
	
	if (tamValorAntesVirg > tamLimite)	{
		obj.value = "";
		obj.focus();
		//obj.select();
		definirMensagem('Valor monetário está inválido');

		return;
	}

	numero = valor.substring(0, posicao_virg);
	if (posicao_virg == 999) {	// não possui v?rgula
		for (i=0 ; i<decimais ; i++)	{	
			decimal = decimal + "0";	// contatena n ZEROS
		}
	} else {	// se tiver v?rgula, pega os n n?meros ap?s a v?rgula
		decimal = valor.substring(posicao_virg+1, posicao_virg + decimais +1);
	}

	// N? de Zeros que devem ser inclu?dos no final da string
	zeros = (decimais-decimal.length);	// zeros = n? decimais - n? de n?meros que j? tem
	for (j=0 ; j<zeros ; j++)	{
		decimal = decimal + "0";	// concatena ZEROS necess?rios para decimal ter tamanho n
	}

	// Trata casas numericas
	numero_temp='';
	for (i=0; i<(numero.length); i=i+3)	{	// a cada 3 casas contatena um ponto de milhar
		if (i==0)	{	// se vier da 1a. vez não concatena o ponto
			numero_temp = valor.substring(numero.length-i, numero.length-3-i) + numero_temp;
		} else {	// depois a cada 3 casas concatena um ponto
			numero_temp = valor.substring(numero.length-i, numero.length-3-i) + '.' + numero_temp;
		}
	}

	if (numero_temp=='') { numero_temp=0;	}
	valor_final = numero_temp + "," + decimal;	// junta casas num?ricas com casas decimais.

	obj.value = valor_final;

}	// End Function


//*********************  3/3  ****************************************
// Função    		: validaMoedaFocus
// Objetivo  		: Remove pontos da String no evento onFocus
// Par?metro 		: Campo a ser formatado. (this)
// Retorno   		: Valor formatada 
//********************************************************************  
function validaMoedaFocus(obj) {
	valor = obj.value;

	for (i=0; i<valor.length; i++) {
		valor = valor.replace( ".", "");
	}
	obj.value = valor;

//	obj.focus();

}	// End function



//************************************************************************
// Função    		: formataContaContabil
// Objetivo  		: Formata o campo conforme a máscara de Conta Contábil.
// Parâmetro 		: Campo a ser formatado (campo), máscara (mascara). 
// Retorno   		: Nenhum.
//************************************************************************
function formatarCampoContaContabil(campo, mascara) {
	var caractere = mascara.charAt(campo.value.length);
	if (caractere != '' && caractere != '#') {
		campo.value += caractere;
	}
}

/**
* Funcao para formatar CEP quando sai do campo. #####-###
*/
function formataCEP(valor) {
	var valorCep;
  	if (valor.length == 8) {
  	/*valor.substring(0,2) + "." + */ 
  		valorCep = valor.substring(0,5) + "-" + valor.substring(5,8);
  	} else {
  		return valor;
  	}
  	return valorCep;
}


function formataMesAno(valor) {
	var valorCep;
  	if (valor.length == 6) {
  		valor
  	} else {
  		return valor;
  	}
  	return valorCep;
}

//*************************************************************
// Função    		: formatarCampoNumeroContrato
// Objetivo  		: formata a máscara do contrato para 5001066-2012.123456-7
// Par?metro 		: Campo a ser formatado (this), evento (event). 
// Retorno   		: Valor formatado
//********************************************************************  
function formatarCampoNumeroContrato(obj, param1) {
  	var texto = param1.substring(obj.value.length);
	
	if (texto.substring(0,1) != '#') 
		obj.value += texto.substring(0,1);
}


//********************************************************************
// Função    		: TravaTeclas
// Objetivo  		: Travar teclas de entradas em campos, por ex. text no evento onKeyPress
// Par?metro 		: ()
//********************************************************************  
function travaTeclasPress() {
	var key;
	var tecla;

	if(navigator.appName.indexOf("Netscape")!= -1) {
		tecla= event.which;
	}
	else{
		tecla = event.keyCode;	// C?digo da tecla pressionada
	}

	key = String.fromCharCode(tecla);

    if( (key == '"') || (key == "'") || (key == "%") || (key == "<") || (key == ">")){
		event.returnValue = false;
		}
}	// End Function


//********************************************************************
// Função    		: TravaTeclas2
// Objetivo  		: Elimina caracteres da string no evento onBlur
// Par?metro 		: ()
//********************************************************************  
function travaTeclasBlur(obj) {
	valor = obj.value;
	valor_final = "";

	for (i=0; i<valor.length; i++) {
		temp = valor.substring(i,i+1);
		// Elimina '," e % da string
		if (!((temp=="'")  || (temp=="%") || (temp=='"') || (temp=='<') || (temp=='>')))	{
			valor_final = valor_final + temp;
		}
	}
	obj.value = valor_final;

}	// End Function


//********************************************************************
// Função    		: trimJS
// Objetivo  		: Tira espa?os em branco do in?cio e do final da string. Tamb?m elimina
//					  espa?os duplos					
//********************************************************************  
function trimJS(str)	{
	str=str.replace(/\s+/g," "); // elimina sequ?ncias de espa?os
	// (\t\r\n ) por um espa?o em branco
	str=str.replace(/^ /,""); //inicio de linha
	str=str.replace(/ $/,""); //fim de linha

	return str;
}


//********************************************************************
// Função    		: LimiteData
// Objetivo  		: Compara a quantidade de dias entre duas datas e retorna se o periodo extrapolou a quantidade de dias informada
// Parametros 		: dataini: Data inicial, datafim: Data final, dias: quantidade de dias do periodo valido
// Retorno   		: True ou false de acordo com a viola??o do periodo
//********************************************************************
function LimiteData(dataini,datafim,dias)
{
  var d, r, t1, t2, t3;
  var MinMilli = 1000 * 60;
  var HrMilli = MinMilli * 60;
  var DyMilli = HrMilli * 24;
  t1 = Date.UTC(dataini.substr(6,4) , (dataini.substr(3,2)-1) , dataini.substr(0,2) );

  d = new Date(datafim.substr(6,4) , (datafim.substr(3,2)-1) , datafim.substr(0,2) );

  t2 = d.getTime();
  if (t2 >= t1){
    t3 = t2 - t1;
  }
  else{
    t3 = t1 - t2;
  }
  r = Math.round(t3 / DyMilli);

  flag = (parseInt(r) <= parseInt(dias));
  return flag;
}


function stringToUpperCase(obj){
	obj.value = obj.value.toUpperCase();
}




//********************************************************************
// Função    		: acaoAoFocar
// Objetivo  		: Controlar as valida??es efetuadas ao focar no campo. Função utilizada pelas tags
// Parametros 		: obj: objeto a ser validado, tipoValidacao: informar o tipo da validacao
//********************************************************************
function acaoAoFocar(obj, tipoValidacao)
{
		var type = tipoValidacao.toUpperCase();

		if(document.forms[0].campoUltimoFoco){
			document.forms[0].campoUltimoFoco.value = obj.name;
		}

		if(new String(obj).toString()=='undefined'){
			return;
		}
		type = new String(type).toUpperCase();
		if (_IE) {
	        var FieldRange = obj.createTextRange();
			FieldRange.moveEnd('character', obj.value.length);
			FieldRange.collapse();
			FieldRange.select();
		}
	         
		if(type=='NUMERICO'){
			obj.value = new String(obj.value).replace(/\D*/gi, '');
			obj.select();
		}
		else if(type=='MOEDA'){
			//obj.value = new String(obj.value).replace(/\D*/gi, '');
		}
		else if(type=='NUMERICO_POSITIVO'){
			obj.value = new String(obj.value).replace(/\D*/gi, '');
		}
		else if(type=='DATA') {
			obj.value = new String(obj.value).replace(/\D*/gi, '');
			// O comprimento m?ximo para data ? 8
			if (obj.type.toLowerCase() == 'text') {
				obj.maxLength = 10;
			}
		}
		else if(type=='CNPJ') {
			obj.value = new String(obj.value).replace(/\D*/gi, '');
			// O comprimento m?ximo ? 14 para digita??o de CNPJ: 2.3.3/4-2 = 14
			if (obj.type.toLowerCase() == 'text'){
				obj.maxLength = NUM_DIGITOS_FORMATADO_CNPJ;
			}
				
		}
		else if(type=='CPF') {
			obj.value = new String(obj.value).replace(/\D*/gi, '');
			// O comprimento m?ximo ? 11 para digita??o de data: 3.3.3-2 = 11
			if (obj.type.toLowerCase() == 'text'){
				obj.maxLength = NUM_DIGITOS_FORMATADO_CPF;
			}
		} else if(type=='CPF_CNPJ') {
			obj.value = new String(obj.value).replace(/\D*/gi, '');
			// O comprimento m?ximo ? 18 para digita??o de data
			if (obj.type.toLowerCase() == 'text'){
				obj.maxLength = NUM_DIGITOS_FORMATADO_CNPJ;
			}
		}
		else if(type=='CEP') {
			obj.value = new String(obj.value).replace(/\D*/gi, '');
			// O comprimento m?ximo ? 8 para digita??o de CEP: 2.3-3 = 8
			if (obj.type.toLowerCase() == 'text'){
				obj.maxLength = 10;
			}
		}
		else if(type=='CONTA_CORRENTE') {
			obj.value = new String(obj.value).replace(/\D*/gi, '');
			// O comprimento máximo é 7 para digitação de CONTA CORRENTE: 7-1 = 6
			if (obj.type.toLowerCase() == 'text'){
				obj.maxLength = NUM_DIGITOS_FORMATADO_CONTA_CORRENTE;
			}
		}
		else if(type=='CONTA_BANCARIA') {
			obj.value = new String(obj.value).replace(/\D*/gi, '');
			// O comprimento máximo é 7 para digitação de CONTA BANCARIA: 7-1 = 6
			if (obj.type.toLowerCase() == 'text'){
				obj.maxLength = NUM_DIGITOS_FORMATADO_CONTA_CORRENTE;
			}
		}
		else if(type=='TELEFONE') {
			obj.value = new String(obj.value).replace(/\D*/gi, '');
			// O comprimento máximo é 10 para digitação de TELEFONE: (2)4-4=40
			if (obj.type.toLowerCase() == 'text'){
				obj.maxLength = 14;
			}
		}
		else if(type=='PLACA') {
			obj.value = new String(obj.value).replace('-', '');
			if (obj.type.toLowerCase() == 'text'){
				obj.maxLength = 8;
			}
		}
		else if(type=='DIA') {
			obj.value = new String(obj.value).replace(/\D*/gi, '');
			// O comprimento máximo é 2 para digitação de DIA: 10
			if (obj.type.toLowerCase() == 'text'){
				obj.maxLength = 2;
				}
		}
		else if(type=='MES') {
			obj.value = new String(obj.value).replace(/\D*/gi, '');
			// O comprimento máximo é 2 para digitação de MES: 10
			if (obj.type.toLowerCase() == 'text'){
				obj.maxLength = 2;
			}
		}
		else if(type=='ANO') {
			obj.value = new String(obj.value).replace(/\D*/gi, '');
			// O comprimento máximo é 4 para digitação de ANO: 1999
			if (obj.type.toLowerCase() == 'text'){
				obj.maxLength = 4;
			}
		}
		//se o maxLength foi indicado(quer seja no html quer seja no valida ao focar), guarda-o no oldMaxLength
 		if(obj.maxLength!=-1&&obj.maxLength!=2147483647){
			obj.oldMaxLength = obj.maxLength;
		}
		obj.select();
}

function removerFormatacao(valor, tipoValidacao) {
		var type = tipoValidacao.toUpperCase();

		if(new String(valor).toString()=='undefined'){
			return;
		}

		if(type=='NUMERICO'){
			valor = new String(valor).replace(/\D*/gi, '');
		}
		else if(type=='NUMERICO_POSITIVO'){
			valor = new String(valor).replace(/\D*/gi, '');
		}
		else if(type=='DATA') {
			valor = new String(valor).replace(/\D*/gi, '');
		}
		else if(type=='CNPJ') {
			valor = new String(valor).replace(/\D*/gi, '');
		}
		else if(type=='CPF') {
			valor = new String(valor).replace(/\D*/gi, '');
		} else if(type=='CPF_CNPJ') {
			valor = new String(valor).replace(/\D*/gi, '');
		}
		else if(type=='CEP') {
			valor = new String(valor).replace(/\D*/gi, '');
		}
		else if(type=='CONTA_CORRENTE') {
			valor = new String(valor).replace(/\D*/gi, '');
		}
		else if(type=='TELEFONE') {
			valor = new String(valor).replace(/\D*/gi, '');
		}
		else if(type=='PLACA') {
			valor = new String(valor).replace('-', '');
		}
		else if(type=='DIA') {
			valor = new String(valor).replace(/\D*/gi, '');
		}
		else if(type=='MES') {
			valor = new String(valor).replace(/\D*/gi, '');
		}
		else if(type=='ANO') {
			valor = new String(valor).replace(/\D*/gi, '');
		}
		
		return valor;
}

//********************************************************************
// Função    		: acao
// Objetivo  		: Controlar as valida??es ao digitar no campo.
// Parametros 		: obj: objeto a ser validado, event: evento javascript,   tipoValidacao: informar o tipo da validacao
//********************************************************************
function acaoAoTeclar(obj, event, type,param1,param2) {
		if ( !handleEnter(obj,event) && type!='DESCRICAO') {
			return false;
		}

		var key = event.keyCode;
		var nChar = obtemCaracter(event);
		var key=obtemKey(event);
        var tamMax;
        		
		type = new String(type).toUpperCase();
		if (type =='SENHA') {
		   
		   return true;
		}
		
		var ch = String.fromCharCode(nChar);
		ch = new String(ch).toUpperCase();
		
		if(type=='MOEDA'){
			return true; //formataMoeda(obj,'.',',',event,param1,param2);
	    }
	    else if(type=='PERCENTAGEM'){
	         tamMax = obj.maxLength - 1;
	         return formataMoeda(obj,'.',',',event,param1,param2);
	    }
	    else if(type=='PERCENTAGEM_NEGATIVA'){
	         tamMax = obj.maxLength - 1;
	         return formataMoedaNegativa(obj,'.',',',event,param1,param2);
	    }
		if(caracterControle(event)){
			return true;
		}
		if(type=='ALFA') {
			return validaAlfa(ch);
		}
		else if(type=='DESCRICAO'){
			if(key == 37 || key == 38 || key == 39 || key == 40){
				return true;
			}
			return validaDescricao(ch);
		}
		else if(type=='ALFA_NUMERICO'){
		  return validaAlfaNumerico(ch);
		}
		else if(type=='PATH_FILE'){
			return validaPathFile(ch);
		}
		else if(type=='INTEIRO'){
			return validaNumero(ch);
        }			
		else if(type=='DATA'){
			return validaData(ch);
		}
		else if(type=='EMAIL'){
			return validaEmailTeclar (ch);
		}
		else if(type=='CNPJ'){
			return validaNumero(ch);
		}
		else if(type=='CPF'){
			return validaNumero(ch);
		}
		else if(type=='CPF_CNPJ'){
			return validaNumero(ch);
		}			
	    else if(type=='HORARIO'){
			return formataHorario(obj,event,param1,param2);
		}
	    else if(type=='HORA'){
			return formataHorario(obj,event,param1,param2);
		}
	    else if(type=='CONTA_CORRENTE_TED'){
			return validaContaCorrenteTed(ch);
		}
	    else if (type=='CEP'){
	    	return validaCEP(ch);
		}
		else if (type=='CONTA_CORRENTE'){
	    	return validaContaCorrente(ch);
		}
		else if (type=='CONTA_BANCARIA'){
	    	return validaContaBancaria(ch);
		}
	    else if (type=='TELEFONE'){
	    	return validaTelefone(ch);
		}
    	else if (type=='DIA'){
	    	return validaNumero(ch);
		}
	    else if (type=='MES'){
	    	return validaNumero(ch);
		}
	    else if (type=='ANO'){
	    	return validaNumero(ch);
		}
		else if (type=='MES_ANO') {
			obj.maxLength = 7;
			if (validaMesAno(ch)) {
				if (obj.value.length == 2) {
					obj.value = obj.value.substring(0,2) + "/" + obj.value.substring(2);
				}
				return true;
			} else {
				return false;
			}
  		}
	    else if (type=='INSCRICAO_ESTADUAL'){
	    	return validaInscricaoEstadual(ch);
		}
		else if(type=='CONTA_CONTABIL'){
	        if(validaNumero(ch))
	        	return formatarCampoContaContabil(obj, param1)
	        return false	 
	    }
		else if(type=='PLACA') {
	         return validaPlaca(ch);
	    }
	    else if(type=='WEBSERVICE') {
	         return validaWebservice(ch);
	    } else if (type=='NUMERO_CONTRATO') {
			if(validaNumero(ch))
	        	return formatarCampoNumeroContrato(obj, param1)
	        return false
		} else if (type=='CODIGO_COOPERATIVA') {
	        return validaCodigoCooperativa(ch);
		} else if(type == 'ARQUIVO_UPLOAD') {
            return validaArquivoUpload(ch);            
        }
		if(type=='UNDEFINED' || type.length==0){
			return true;
			}
		else
		{
		definirMensagem('Tipo de dado desconhecido');
		return false;
		}
}

//********************************************************************
//Função    		: detectaClick
//Objetivo  		: Detectar quando usuário clicar com o botão direito do mouse no menu
//Parametros 		: event: evento JavaScript, ulink: Informa qual o name do campo clicado com o botão direito, retornando valor do DOM
//********************************************************************
function detectaClick(event, ulink) {
	var mouseEvent = event;
	var idClick = event.originalTarget.id;
	if (mouseEvent.button == 2 && idClick) {
		if (idSubMenu != "") {
			document.getElementById(idSubMenu).style.display = "none";
		}
		var ulink = 'ul';
		var idUl = ulink + idClick;
		document.getElementById(idUl).style.display = "block";
		idSubMenu = idUl;

	} else if (mouseEvent.button == 0 && idSubMenu != "") {

		setTimeout("document.getElementById('" + idSubMenu
				+ "').style.display = 'none';", 300);

		idSubMenu = "";
	}
}



// ********************************************************************
// Função    		: acaoAoKeyDow
// Objetivo  		: Controle de keyDown por causa do IE 7
// Parametros 		: obj: objeto a ser validado, event: evento javascript,   tipoValidacao: informar o tipo da validacao
//********************************************************************
function acaoAoKeyDown(obj, event, type,param1,param2) {

		if ( !handleEnter(obj,event) ) {
			return false;
		}
		var key = event.keyCode;
		var nChar = obtemCaracter(event);
		var key=obtemKey(event);
        var tamMax;
		var ch = String.fromCharCode(nChar);
		if((obj.type!='password' || obj.getAttribute('type')!='passwordColmeia') && !isCaseSensitive(obj)){
			ch = new String(ch).toUpperCase();
		}
		type = new String(type).toUpperCase();
		if (_IE) {
		    if(type=='MOEDA'){
		         tamMax = obj.maxLength - 1;
		         return true; //formataMoeda(obj,'.',',',event,param1,param2);
		    }
		    else if(type=='PERCENTAGEM'){
		         tamMax = obj.maxLength - 1;
		         return formataMoeda(obj,'.',',',event,param1,param2);
		    }
		    else if(type=='PERCENTAGEM_NEGATIVA'){
		         tamMax = obj.maxLength - 1;
		         return formataMoedaNegativa(obj,'.',',',event,param1,param2);
		    }
		    else if(type=='HORARIO'){
		         tamMax = obj.maxLength - 1;
		         return formataMoeda(obj,'.',',',event,param1,param2);
		    }
		}
}


//********************************************************************
// Função    		: obtemCaracter
// Objetivo  		: Recupera o caracter digitado.
// Parametros 		: event: evento javascript
//********************************************************************
function obtemCaracter(event)
{
		var nChar;
		if (!window.event) {
			nChar = event.charCode ;
		} else {
			nChar = event.keyCode;
		}
		return nChar;
}


//********************************************************************
// Função    		: obtemKey
// Objetivo  		: Recupera o key digitado.
// Parametros 		: event: evento javascript
//********************************************************************
function obtemKey(event)
{
	var nKey;
	if (event.which && !window.event) {
		nKey = event.which;
	} else {
		nKey = event.charCode || event.keyCode;
	}
	return nKey;
}

//********************************************************************
// Função    		: obtemAltPress
// Objetivo  		: Recupera se foi pressionada a tecla alt.
// Parametros 		: event: evento javascript
//********************************************************************
function obtemAltPress(e)
{
	  var alt = false;
      if ( e.altKey) {
	      alt = (e.altKey) ? true : false;
      }
      if (e.modifiers & Event.ALT_MASK) {
	      alt = ((e.modifiers & Event.ALT_MASK) == Event.ALT_MASK);
      }
      return alt;
}
      
//      
//********************************************************************
// Função    		: obtemCtrlPress
// Objetivo  		: Recupera se foi pressionada a tecla alt.
// Parametros 		: event: evento javascript
//********************************************************************
function obtemCtrlPress(e)
{
	  var ctrl = false;
      if ( e.ctrlKey) {
	      ctrl = (e.ctrlKey) ? true : false;
      }
      if (e.modifiers & Event.ALT_MASK) {
	      ctrl = ((e.modifiers & Event.CTRL_MASK) == Event.CTRL_MASK);
      }
      return ctrl;
}
      
//      
//********************************************************************
// Função    		: obtemShiftPress
// Objetivo  		: Recupera se foi pressionada a tecla alt.
// Parametros 		: event: evento javascript
//********************************************************************
function obtemShiftPress(e)
{
	  var shift = false;
      if ( e.ctrlKey) {
	      shift = (e.shiftKey) ? true : false;
      }
      if (e.modifiers & Event.ALT_MASK) {
	      shift = ((e.modifiers & Event.SHIFT_MASK) == Event.SHIFT_MASK);
      }
      return shift;
}
      



function caracterControle(e)
{
	var nChar = obtemCaracter(e);
	var key = obtemKey(e);
	var alt = obtemAltPress(e);
	var ctrl = obtemCtrlPress(e);
	var shift = obtemShiftPress(e);
	
	var testeKey = false;
	
	if ((key == BTN_CTRL_C || key == BTN_CTRL_C_UPPER) && ctrl) {
		nChar=0;
		testeKey = true;
	}
	if ((key == BTN_CTRL_V || key == BTN_CTRL_V_UPPER) && ctrl) {
		nChar=0;
		testeKey = true;
	}
	if ((key == BTN_CTRL_X || key == BTN_CTRL_X_UPPER) && ctrl) {
		nChar=0;
		testeKey = true;
	}

	
	switch(key)
	{
		case 8:
		case BTN_TAB: testeKey = true;
		case BTN_ESC: testeKey = false;
		case BTN_ENTER: testeKey = true;
		case 118: testeKey = true;
		case SETA_ESQUERDA: testeKey = true;
		case SETA_DIREITA:testeKey = true;
		case BTN_INSERT:testeKey = true;
		case BTN_DELETE:testeKey = true;
		case BTN_HOME:testeKey = true;
		case BTN_END:testeKey = true;
		default:
	}

	if(testeKey == true && nChar!=key){
		return true;
	}
	return false;	
}

//********************************************************************
// Função    		: proximoCampoDisponivel
// Objetivo  		: Localizar o proximo campo com possibilidade de foco
// Parametros 		: document da tela
//********************************************************************
function proximoCampoDisponivel (doc) {
		var i;
		for (i = 0; i < doc.elements.length; i++){
			if ((doc.elements[i].type == 'text' || doc.elements[i].type == 'select-one' || doc.elements[i].type == 'button' || doc.elements[i].type == 'submit' || doc.elements[i].type == 'reset') && !doc.elements[i].disabled) {
				return doc.elements[i];
			}
		}
		return null;
	}

//********************************************************************
// Função    		: proximoCampoDisponivelFoco
// Objetivo  		: Localizar o proximo campo com possibilidade de foco após o campo do ultimo foco
// Parametros 		: document da tela
//********************************************************************
function proximoCampoDisponivelFoco (doc, campoUltimoFoco) {
		var i;
		for (i = 0; i < doc.elements.length; i++){
			if (doc.elements[i].name == campoUltimoFoco) {
				return doc.elements[i+1];
			}
//			if ((doc.elements[i].type == 'text' || doc.elements[i].type == 'select-one' || doc.elements[i].type == 'button' || doc.elements[i].type == 'submit' || doc.elements[i].type == 'reset') && !doc.elements[i].disabled) {
			//}
		}
		return null;
}

//********************************************************************
// Função    		: definirFocusTela
// Objetivo  		: Posicionar focu no campo da tela
//********************************************************************
function definirFocusTela(){
	try{
			var obj = document.getElementById("campoFocus").value;
			var autoFocus = document.getElementById("autoFocus").value;
			var campoFocus = null;
			
			if (obj == 'tabela') {
				var j = jQuery.noConflict();
				var tabela = j(".list_tabela"); 
				if (tabela.html()) {
					j(document).scrollTop( tabela.offset().top );
				}
			}
			
			if (obj != null && obj != "" && (document.forms[0].elements[obj] != null && document.forms[0].elements[obj] != 'undefined')) {
				if (document.forms[0].elements[obj] != "" && document.forms[0].elements[obj] != null && autoFocus == "false") {
					campoFocus = document.forms[0].elements[obj];
					document.getElementById("autoFocus").value = "true";
				} else if (document.forms[0].elements[obj] != "" && document.forms[0].elements[obj] != null && autoFocus == "true"){
					var index = document.forms[0].elements[obj].index;
					var i = index > 0 ? index : 0;
					var id;
					for (; i < document.forms[0].elements.length; i ++) {
						id = document.forms[0].elements[i].id;
						if(id==null || id == ''){
							id = document.forms[0].elements[i].name;
						}	
						if (id == obj) {
							var j = i + 1;
							while (j < document.forms[0].elements.length) {
								if ((document.forms[0].elements[j].type == 'textarea' || document.forms[0].elements[j].type == 'text' || document.forms[0].elements[j].type == 'select-one' || document.forms[0].elements[j].type == 'checkbox' || document.forms[0].elements[j].type == 'radio' || document.forms[0].elements[j].type == 'button' || document.forms[0].elements[j].type == 'submit' || document.forms[0].elements[j].type == 'reset') && !document.forms[0].elements[j].disabled) { break;}
								j=j+1;
							}
							
							if (j == document.forms[0].elements.length) {
								
								j = j - 1;
								while (j < document.forms[0].elements.length) {
									if ((document.forms[0].elements[j].type == 'textarea' || document.forms[0].elements[j].type == 'text' || document.forms[0].elements[j].type == 'select-one' || document.forms[0].elements[j].type == 'checkbox' || document.forms[0].elements[j].type == 'radio' || document.forms[0].elements[j].type == 'button' || document.forms[0].elements[j].type == 'submit' || document.forms[0].elements[j].type == 'reset') && !document.forms[0].elements[j].disabled) { break;}
									j=j-1;
								}
							}

							campoFocus = document.forms[0].elements[j];
							break;
						}
					}
				}
				setFocus(campoFocus);
			} else {
				if (document.forms[0].campoUltimoFoco.value != '') {
					proximoCampoDisponivelFoco(tmpForm, document.forms[0].campoUltimoFoco.value);
				}
			
				var tmpForm = document.forms[0];
				var tmp = proximoCampoDisponivel(tmpForm);
				if (tmp != null) {
					setFocus(tmp);
				}
			}
	} catch (err) {
	}
}

//********************************************************************
// Função    		: definirCampoAnteriorFoco
// Objetivo  		: Controla o focu nos campos da tela
// Parametros 		: obj: objeto a ser validado
//********************************************************************
function definirCampoAnteriorFoco(obj){
	var campoFocus = null;
	try{
		campoFocus = obj.ownerDocument.querySelector('form[name='+ obj.form.name+']').campoFocus;		
		if(obj.id==null || obj.id == ''){
			campoFocus.value = obj.name;		
		} else {
			campoFocus.value = obj.id;
		}
	}catch(e){
		console.error(e);
	}
}


//********************************************************************
// Função    		: definirAlteracaoDadosGrid
// Objetivo  		: Controle de os campos da tela foram alterados
// Parametros 		: obj: objeto a ser validado
//********************************************************************
function definirAlteracaoDadosGrid(obj){
	var campoControle = document.getElementById('alteracaoDados');
	var tmp = ""+campoControle.value;
	var campoAlterado = '';
	var id = obj.id;
	if(id!=null && id!=''){
		campoAlterado = id;
	} else {
		campoAlterado = obj.name;
	}
	if ( tmp.indexOf(campoAlterado) == -1 ) {
		if (tmp.length > 0)   {
			tmp += ",";
		}
		tmp +=  campoAlterado;
		campoControle.value = tmp;
	}
}

//********************************************************************
// Função    		: definirAlteracaoDados
// Objetivo  		: Controle de os campos da tela foram alterados
// Parametros 		: obj: objeto a ser validado
//********************************************************************
function definirAlteracaoDados(obj){

	if(obj.type == 'hidden' || obj.type == 'submit') {
		return;
	}
	
	var valorAnterior = ""+obj.defaultValue;
	var valorNovo = ""+obj.value;
	if ((valorAnterior.replace("\"", "")).trim() != (valorNovo.replace("\"", "")).trim()) {
	var campoControle = document.getElementById('alteracaoDados');
		if (campoControle != null) {
			var tmp = ""+campoControle.value;
			var campoAlterado = '';
			var id = obj.id;
			if(id!=null && id!=''){
				campoAlterado = id;
			} else {
				campoAlterado = obj.name;
			}
			if ( tmp.indexOf(campoAlterado) == -1 ) {
				if (tmp.length > 0)   {
					tmp += ",";
				}
				tmp +=  campoAlterado;
				campoControle.value = tmp;
			}
		}
	}
}

//********************************************************************
// Função    		: adicionarCampoAlteracaoDados
// Objetivo  		: Adiciona um campo ao controle de campos alterados da tela.
// Parametros 		: obj: id ou name do campo
//********************************************************************
function adicionarCampoAlteracaoDados(obj) {
	
	if (obj == '') {
		return;
	}
	
	var campoControle = document.getElementById('alteracaoDados');
	var valorCampoControle = campoControle.value;
	if (valorCampoControle != null && valorCampoControle != '') {
		valorCampoControle += ',';
	}
	valorCampoControle += obj;
	campoControle.value = valorCampoControle;
}

//***************************************************************************************
// Função    		: definirAlteracaoDadosTela
// Objetivo  		: Controle dos campos da tela que foram alterados ao clicar no botão.
// Parametros 		: formulario: form para percorrer objs
//***************************************************************************************
//function definirAlteracaoDadosTela(formulario){
//	
//	var formTmp = eval('document.'+formulario+'');
//	
//	for (i = 0; i < formTmp.elements.length; i ++) {
//		if(formTmp.elements[i].type != 'select-one' && formTmp.elements[i].type != 'select-multiple'){
//			definirAlteracaoDados(formTmp.elements[i]);
//		}
//	}
//}

//***************************************************************************************
// Função    		: atualizarValoresCampos
// Objetivo  		: Ao acionar o Onmouseover no botão de confirmar com validação true.
// Parametros 		: formulario: form para percorrer objs
//***************************************************************************************
function atualizarValoresCampos(formulario){

	var formTmp = eval('document.'+formulario+'');
	
	for (i = 0; i < formTmp.elements.length; i ++) {

		obj = formTmp.elements[i];
	
		if(obj.type == 'hidden' || obj.type == 'submit' || obj.type == 'file') {
			continue;
		}
	
		if(obj != null){
			formTmp.elements[i].defaultValue = obj.defaultValue;	
			formTmp.elements[i].value = obj.value;
		}
	}
}

//********************************************************************
// Função    		: acaoAoSair
// Objetivo  		: Controlar as valida??es ao sair do campo.
// Parametros 		: obj: objeto a ser validado, event: evento javascript,   tipoValidacao: informar o tipo da validacao
//********************************************************************
function acaoAoSair(obj, type, prec, param, param1, param2, validarSomenteValoresIguais)
{
	var result = true;

	var defaultValue = removerFormatacao(obj.defaultValue, type);

	if (validarSomenteValoresIguais == 'false' || (validarSomenteValoresIguais == 'true' && defaultValue == obj.value)) {
		definirCampoAnteriorFoco(obj);
		
		if(type=='DATA') {
			var val = new String(obj.defaultValue).replace(/\D*/gi, '');
			if ( val != obj.value ) {
				definirAlteracaoDados(obj); 
			}
		}else{
			definirAlteracaoDados(obj); 
		}

		type = new String(type).toUpperCase();
		if(type=='ALFA'){
			result = validaTextoAlfa(obj.value, isCaseSensitive(obj));
			if(!result) {
			   definirMensagem('Campo texto inválido!');
			   obj.value = '';			
			}
		} else if(type=='ALFA_NUMERICO'){
			result = validaTextoAlfaNumerico(obj.value, obj.type, isCaseSensitive(obj));
			if(!result) {
			   definirMensagem('Campo texto inválido!');
			   obj.value = '';			
			}
		} else if(type=='DESCRICAO'){
			result = validaTextoDescricao(obj.value, isCaseSensitive(obj));
			if(!result) {
			   definirMensagem('Campo descrição inválido!');
			   obj.value = '';			
			}
		} else if(type=='PATH_FILE'){
			result = validaTextoPathFile(obj.value);
			if(!result) {
			   definirMensagem('Campo arquivo inválido!');
			   obj.value = '';			
			}
		} else if(type=='DATA') {
			var val = new String(obj.value).replace(/\D*/gi, '');
			result = validaDataBlur(obj);
			if(result) {
				// Se a data é válida, aumenta o length do campo para 10.
				obj.maxLength = 10;
			} else if (! result) {
					definirMensagem('Data inválida!');
					obj.value = '';
			}
		} else if(type=='INTEIRO'){
			result = validaTextoNumero(obj.value);
			if(!result)  {
				definirMensagem('Número inteiro inválido!');
				obj.value="";
			}
		} else if(type=='EMAIL'){
			result = validaEmail(obj.value);
			if(!result){ 
			   definirMensagem('Email inválido!');
			   obj.value = '';
			}
		} else if(type=='CNPJ'){
	 		obj.maxLength = NUM_DIGITOS_FORMATADO_CNPJ;
	 		obj.value = new String(obj.value).replace(/\D*/gi, '');
	 		if ( obj.value.length > NUM_DIGITOS_CNPJ ) {
	 			obj.value = obj.value.substring(0,NUM_DIGITOS_CNPJ);
	 		}
			if (obj.value == ''){
	 			//obj.value = '';
	 			return;
	 		}
			obj.value = formatCpfCnpj(obj.value, true, true);
			result = isCnpj(obj.value);
			if(!result) {
			   definirMensagem('CNPJ Inválido!');
			   //obj.value = '';
			} 
		} else if(type=='CPF'){
	 		obj.maxLength = NUM_DIGITOS_FORMATADO_CPF;
	 		obj.value = new String(obj.value).replace(/\D*/gi, '');
	 		if ( obj.value.length > NUM_DIGITOS_CPF ) {
	 			obj.value = obj.value.substring(0,NUM_DIGITOS_CPF);
	 		}
	 		if (obj.value == ''){
	 			//obj.value = '';
	 			return;
	 		}
  			obj.value = formatCpfCnpj(obj.value, true, false);
			result = isCpf(obj.value);
			if(!result)  {
				definirMensagem('CPF Inválido!');
				//obj.value = '';
			}
		} else if(type=='CPF_CNPJ'){
			if(obj.value != ""){
				
				obj.value = new String(obj.value).replace(/\D*/gi, '');
				if (obj.value.length <= NUM_DIGITOS_CPF) {
			 		obj.maxLength = NUM_DIGITOS_FORMATADO_CNPJ;
			 		obj.value = formatCpfCnpj(obj.value, true, false);
			 		if (obj.value == ''){
		 				//obj.value = '';
		 				return;
			 		}
					result = isCpf(obj.value);
					if(!result)  {
						definirMensagem('CPF Inválido!');
						//obj.value = '';
					}
				}else{
			 		if (obj.value == ''){
			 			//obj.value = '';
		 				return;
		 			}
			 		obj.maxLength = NUM_DIGITOS_FORMATADO_CNPJ;
					result = isCnpj(obj.value);
					if(obj.value.length <= NUM_DIGITOS_CNPJ && obj.value.length != NUM_DIGITOS_CPF && !result){
			   			definirMensagem('CNPJ Inválido!');
			   			//obj.value = '';
					}else if(!result) {
				   		definirMensagem('Documento inválido!');
					}
					obj.value = formatCpfCnpj(obj.value, true, true);	
				} 
			}
		} else if(type=='HORARIO'){
			result = validaValorHorario(obj.value,4,2,true);
		    if(!result){ 
		    	definirMensagem('Horário inválido!');
				obj.value = '';
			}
		} else if(type=='HORA'){
			result = validaValorHorario(obj.value,2,2,false);
		    if(!result){ 
		    	definirMensagem('Hora inválida!');
				obj.value = '';
			}
		} else if (type=='CEP'){
			result = validaTextoCEP(obj.value);
			obj.value = formataCEP(obj.value);
			if(!result) {
				definirMensagem('CEP inválido!');
				obj.value = '';
			}
		
		} else if(type=='CONTA_CORRENTE_TED'){
			if (obj.value == ''){
	 			return;
	 		}
			
			result = validaTextoContaCorrenteTed(obj.value)
			
			if(!result) {
				definirMensagem('Conta inválida!');
				obj.value="";
			}			
		} else if (type=='CONTA_CORRENTE'){
			
			if (obj.value == ''){
	 			return;
	 		}
	 		obj.maxLength = NUM_DIGITOS_FORMATADO_CONTA_CORRENTE;
			obj.value = new String(obj.value).replace(/\D*/gi, '');
			result = isContaCorrente(obj.value);
			
			if(!result) {
				definirMensagem('Digito verificador da conta corrente não confere!');
			}else{
				obj.value = formatContaCorrente(obj.value);
			}
		} else if (type=='CONTA_BANCARIA'){
			
			if (obj.value == ''){
	 			return;
	 		}
	 		obj.maxLength = NUM_DIGITOS_FORMATADO_CONTA_CORRENTE;
			obj.value = new String(obj.value).replace(/\D*/gi, '');
			
			obj.value = formatContaCorrente(obj.value);
		} else if (type=='TELEFONE'){
			var tmp = new String(obj.value).replace(/\D*/gi, '');
			result = validaTextoTelefone(tmp);
			if(!result) {
				definirMensagem('Telefone inválido!');
				obj.value = '';
			}
			obj.maxLength = 14;
			obj.value = formatTelefone(tmp);
		} else if (type=='PLACA'){
			var tmp = new String(obj.value).replace('-', '');
			result = validaTextoPlaca(tmp);
			if(!result) {
				definirMensagem('Placa inválida!');
				obj.value = '';
			}else{
				obj.maxLength = 8;
				obj.value = formatPlaca(tmp);
			}	
		} else if (type=='DIA'){
			result = validaTextoDia(obj.value);
			if(!result) {
				definirMensagem('Dia inválido!');
				obj.value = '';
			}
		} else if (type=='MES'){
			result = validaTextoMes(obj.value);
			if(!result) {
				definirMensagem('Mes inválido!');
				obj.value = '';
			}
		} else if (type == 'MES_ANO') {
			if (obj.value != null && obj.value != "" && obj.value.length < 7) {
				definirMensagem('Data deve ser no formato MM/yyyy');
			}
			if (obj.value.indexOf("/") < 0) {
				formataMesAno(obj);
			}
			var mes = obj.value.substring(0,2);
			var ano = obj.value.substring(3,7);
			resultMes = validaTextoMes(mes);
			resultAno = validaTextoAno(ano);
			if (!resultMes && !resultAno) {
				definirMensagem('Data inválida!');
				obj.value = '';
				result = false;
			} else if(!resultMes) {
				definirMensagem('Mês inválido!');
				obj.value = '';
				result = false;
			} else if (!resultAno) {
				definirMensagem('Ano inválido!');
				obj.value = '';
				result = false;				
			}		
		} else if (type=='ANO'){
			result = validaTextoAno(obj.value);
			if(!result) {
				definirMensagem('Ano inválido!');
				obj.value = '';
			}
		} else if (type=='INSCRICAO_ESTADUAL'){
			result = validaTextoInscricaoEstadual(obj.value);
			if(!result) {
				definirMensagem('Inscrição Estadual inválida!');
				obj.value = '';
			}
		} else if(type=='MOEDA'){
			validaMaxLengthMoeda(obj,param1,param2); 
		    result = validaValorMoeda(obj.value);
		    if(!result){ 
		    	definirMensagem('Valor Real inválido!');
				obj.value = '';
			}
			obj.value=formataCampoMoeda(obj.value,'.',',',param1,param2);
			//validaValorOnChange(obj);
		} else if(type=='PERCENTAGEM'){
			validaMaxLengthMoeda(obj,param1,param2); 
		    result = validaValorMoeda(obj.value);
		    if(!result){ 
		    	definirMensagem('Valor da Percentagem inválido!');
				obj.value = '';
			}
			obj.value=formataCampoMoeda(obj.value,'.',',',param1,param2);
			//validaValorOnChange(obj);
		} else if(type=='PERCENTAGEM_NEGATIVA'){
		    result = validaValorMoedaNegativa(obj.value);
		    if(!result){ 
		    	definirMensagem('Valor da Percentagem inválido!');
				obj.value = '';
			}
			//obj.value=formataCampoMoeda(obj.value,'.',',',param1,param2);
			//validaValorOnChange(obj);
		} else if (type=='CONTA_CONTABIL'){
			var tmp = new String(obj.value).replace(/\D*/gi, '');
			result = validaTextoContaContabil(tmp,param1,param2);
			if(!result) {
				definirMensagem('Conta Contábil inválida!');
				obj.value = '';
			}else{
				obj.value = formataContaContabil(tmp,param1);
			}
		} else if (type=='NUMERO_CONTRATO') {
			var tmp = new String(obj.value).replace(/\D*/gi, '');
			result = validaTextoNumeroContrato(tmp,param2);
			if(!result) {
				definirMensagem('Número do contrato inválido!');
				obj.value = '';
			} else {
				obj.value = formataNumeroContrato(tmp,param1);
			}
		} else if(type == 'WEBSERVICE') {
			result = validaTextoWebservice(obj.value);
			if(!result) {
				definirMensagem('Campo webservice inválido!');
				obj.value = '';
			}
		} else if(type == 'CODIGO_COOPERATIVA') {
			result = validaCodigoCooperativa(obj.value);
			if(!result)  {
				definirMensagem('Código da Cooperativa inválido!');
				obj.value="";
			}
		} else if(type == 'ARQUIVO_UPLOAD') {
			result = validaTextoArquivoUpload(obj.files[0].name);
			if(!result)  {
				definirMensagem('O nome do arquivo contém caracteres inválidos! Use somente ponto, subtraço, hífen, números e letras sem acento.');
				obj.value="";
			}
		}
		//Somente deixa maisculo nos campos que nao sao de senha
		if ((obj.type!='password' || obj.getAttribute('type')!='passwordColmeia')
				&& type != 'WEBSERVICE' 
				&& !isCaseSensitive(obj)
		) {
		  stringToUpperCase(obj);
		}
	}
	
	if(type=='MOEDA' || type=='PERCENTAGEM' || type=='PERCENTAGEM_NEGATIVA'){
         validaValorOnChange(obj);
    }
    
	return result; 
}

function isCaseSensitive(obj) {
	return (obj.getAttribute('casesensitive') != null 
						&& obj.getAttribute('casesensitive') == 'true');
}

function validaValorOnChange(obj){
	try {
		if (obj.onchange != "" && new String(obj.onchange) != 'undefined') {
			if ( obj.defaultValue != obj.value ) {
				var change = obj.onchange;
				var valor = change.toString().substring(change.toString().indexOf("{") + 1,change.toString().indexOf("}")).replace("this.value","'"+ obj.value+"'");
				if (valor.toString().indexOf("{") > 0) {
					valor = valor.toString().substring(valor.toString().indexOf("{") + 1,valor.length);
				}
				var funcao = new Function(valor);
				funcao.call(null);
			}
		}
	} catch(err) {
	}
}


function setFocus(obj) {
	var tmp = null
	
	if (obj.id == null || obj.id == "") {
		if (obj.name != null && obj.name != "") {
			tmp = 'document.' + obj.form.name + '.' + obj.name + '.focus()';
			try {
				var funcao = new Function(tmp);
				funcao.call(null);
				return;
			} catch(err) {
				tmp = 'document.' + obj.form.name + '.' + obj.name + '[0].focus()';
			}
		}
	} else {
		tmp = 'document.getElementById("' + obj.id + '").focus()';
	}	
	if (tmp != null && tmp != "") {
		var funcao = new Function(tmp);
		funcao.call(null);
	}
}


function formataMesAno(obj) {
	if (obj.value.trim().length > 0) {
		obj.value = obj.value.substring(0,2) + "/" + obj.value.substring(2,6);
	} 
}


//********************************************************************
// Função    		: formataHorario
// Objetivo  		: Formata a string fornecida de hora 00:00 ou 0000 para 00:00
//Parametros 		: event: evento javascript
// Parametros 		: hora inteiro: quantidade de casas da hora
//                    minuto inteiro: quantidade de casa do minuto
//********************************************************************

function formataHorario(obj, e,hora,minuto){
	var separador = ":";
	var keyControle=obtemKey(e);
	var charCode=obtemCaracter(e);
	var whichCode = obtemKey(e);
	//Caracteres Válidos
	var strCheck = '0123456789';
	
	//Caracteres Válidos
	
	
	
		//Nao efetuar nenhum operação caso nao tenha valor no campo e seja pressionado o back space
	if ( obj.value.length == 0  && keyControle == BTN_BACKSPACE) {
		return false;
	}
	
	
	if ( keyControle == BTN_BACKSPACE ) {
		if (obj.value.length > 0 ) {
			obj.value = obj.value.substring(0,obj.value.length-1);
			key="";
			//Caso o valor seja zero apagar o campo
			var valorTmp = String(obj.value).replace(/\D/g, "")
			if (parseFloat(valorTmp) == 0 ) {
				obj.value="";
				return false;
			}
		}
	} else {
		if(caracterControle(e)){
			return true;
		}
		key = String.fromCharCode(whichCode);// Valor para o código da Chave
		if ( _IE ) {
			switch(whichCode)
			{
				case IE_NUM0: key = 0; break;
				case IE_NUM1: key = 1; break;
				case IE_NUM2: key = 2; break;
				case IE_NUM3: key = 3; break;
				case IE_NUM4: key = 4; break;
				case IE_NUM5: key = 5; break;
				case IE_NUM6: key = 6; break;
				case IE_NUM7: key = 7; break;
				case IE_NUM8: key = 8; break;
				case IE_NUM9: key = 9; break;
			}
		}
		if (strCheck.indexOf(key) == -1) return false; // Chave inválida
	}
	
	var aux = String(obj.value).replace(/\D/g, "");
	
	
	if (controleCampoSelecionado(obj,e) == false) {
		return false; 
	}
	
	key = String.fromCharCode(whichCode);// Valor para o código da Chave
		//Teclas proibidas a partir desse ponto
	if ( keyControle == BTN_DELETE ) {
		return false;
	}
	//Eventos
	var whichCode = obtemKey(e);
	
	//Remove formatação
	//Caso seja apertado o Back Space	
	
 

	
	if (hora == "") {
		hora = 4;
	}
	if (minuto == "") {
		minuto = 2;
	}
	
	
	//Remove formatação
	var aux = String(obj.value).replace(/\D/g, "");
	if ( aux.length > 0 ) {
		aux = parseFloat(aux) + "";
	}
			
	//Valor máximo
	if ( aux.length >= (hora+minuto)){
		return false;
	}
	
	
	aux = '';
	//Eventos
	len = obj.value.length;
	for(i = 0; i < len; i++)
		if ((obj.value.charAt(i) != '0') && (obj.value.charAt(i) != separador)) break;
	aux = '';
	for(; i < len; i++)
		if (strCheck.indexOf(obj.value.charAt(i))!=-1) aux += obj.value.charAt(i);
	aux += key;
	// Remove a formatação com o novo valor digitado	
	var valor = String(aux).replace(/\D/g, "");
	//Variavel para parte hora
	var parteHora = "";
	//Variavel para parte minuto
	var parteDecimal = "";
	
	if ( valor.length >= minuto) {
		//Pega parte minuto
		parteMinuto = valor.substring(valor.length-minuto,valor.length);
		if ( valor.length >  minuto) {
			//Valor sem minuto
			aux = valor.substring(0,valor.length-minuto);
			var count = 0;
			var ponto = false;
			for (i = aux.length; i >= 0; i--) {
			
				// Contador de separador mil
				if (count != 0 && count % 3 == 0 ) {
					count = 0;
						ponto = true;
				}
				parteHora = aux.charAt(i) + parteHora  ;
				count = count + 1;
			}
			//Caso tenha casa minuto
			if ( minuto > 0 ) {
			parteHora = parteHora  + separador;
			}
		} else {
		parteHora = "0" + separador;
		}
	} else {
		parteHora = "0" + separador;
		parteMinuto = "0" + aux; 
	}
	obj.value = parteHora + parteMinuto;
	return false;
}

//********************************************************************
// Função    		: formatContaCorrente
// Objetivo  		: Formata a string fornecida como Conta Corrente adicionando o traco
// Parametros 		: event: evento javascript
// Parametros 		: pCpfCnpj String fornecida para ser formatada; 
//                    pUseSepar Indica se devem ser usados caracteres separadores ( - ). ;
//********************************************************************

function formatContaCorrente(contaCorrente)
{
	
	if(contaCorrente.length == 0){
		return "";
	}

	// NUM_DIGITOS_CONTA_CORRENTE = 7 Ex:505020-2
	var maxDigitos = NUM_DIGITOS_CONTA_CORRENTE;

	var numero = unformatNumber(contaCorrente);
	numero = numero.lpad(maxDigitos, '0');
	
	regex = /(\d{3})(\d{3})(\d{1})$/;
	numero = numero.replace(regex, "$1.$2-$3");

	var i = 0;
	while(numero[i] == 0 || numero[i] == '.'){
		i++;
	}
	
	var formatado = numero.substring(i, numero.length);
	
	return formatado;
} 

//********************************************************************
// Função    		: formatCpfCnpj
// Objetivo  		: Formata a string fornecida como CNPJ ou CPF, adicionando zeros
// Parametros 		: event: evento javascript
// Parametros 		: pCpfCnpj String fornecida para ser formatada; 
//                    pUseSepar Indica se devem ser usados caracteres separadores (. - /). ;
//                    pIsCnpj Indica se a string fornecida ? um CNPJ. Caso contr?rio, ? CPF. Default = false (CPF).
//********************************************************************

function formatCpfCnpj(pCpfCnpj, pUseSepar, pIsCnpj)
{
	if (pIsCnpj==null){ pIsCnpj = false;}
	if (pUseSepar==null){ pUseSepar = true;}
	var maxDigitos = pIsCnpj? NUM_DIGITOS_CNPJ: NUM_DIGITOS_CPF;
	var numero = unformatNumber(pCpfCnpj);
	numero = numero.lpad(maxDigitos, '0');
	if (!pUseSepar){ return numero;}

	if (pIsCnpj)
	{
		reCnpj = /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/;
		numero = numero.replace(reCnpj, "$1.$2.$3/$4-$5");
	}
	else
	{
		reCpf  = /(\d{3})(\d{3})(\d{3})(\d{2})$/;
		numero = numero.replace(reCpf, "$1.$2.$3-$4");
	}
	return numero;
} 

//********************************************************************
// Função    		: formatTelefone
// Objetivo  		: Formata a string fornecida como TELEFONE
// Parametros 		: event: evento javascript
// Parametros 		: telefone String fornecida para ser formatada; 
//********************************************************************

function formatTelefone(telefone)
{
	var numero = '';
	if (telefone.length == 8) {
		reTelefone = /(\d{4})(\d{4})$/;
		numero = telefone.replace(reTelefone, "$1-$2");
	}else if (telefone.length == 9) {
		reTelefone = /(\d{4})(\d{4})$/;
		numero = telefone.replace(reTelefone, "$1-$2");
	} else if (telefone.length == 11) {
		if (telefone.substring(2,4) == '00') {
			reTelefone = /(\d{4})(\d{3})(\d{4})$/;
			numero = telefone.replace(reTelefone, "$1-$2-$3");
		}else if (telefone.length == 11) {
			reTelefone = /(\d{2})(\d{5})(\d{4})$/;
			numero = telefone.replace(reTelefone, "($1)$2-$3");
		}
	} else if (telefone.length == 10) {
		if (telefone.substring(2,4) == '00') {
			reTelefone = /(\d{4})(\d{6})$/;
			numero = telefone.replace(reTelefone, "$1-$2");
		} else {
			reTelefone = /(\d{2})(\d{4})(\d{4})$/;
			numero = telefone.replace(reTelefone, "($1)$2-$3");
		}
	}
	
	return numero;
}

//********************************************************************
// Função    		: formatPlaca
// Objetivo  		: Formata a string fornecida como PLACA
// Parametros 		: event: evento javascript
// Parametros 		: telefone String fornecida para ser formatada; 
//********************************************************************

function formatPlaca(placa)
{
	rePlaca = /(\D{3})(\d{4})$/;
	var numero = placa.replace(rePlaca, "$1-$2");
	
	return numero;
} 

/**
 * Adiciona m?todo lpad() ? classe String.
 * Preenche a String ? esquerda com o caractere fornecido,
 * at? que ela atinja o tamanho especificado.
 */
String.prototype.lpad = function(pSize, pCharPad)
{
	var str = this;
	var dif = pSize - str.length;
	var ch = String(pCharPad).charAt(0);
	for (; dif>0; dif--){
	  str = ch + str;
	}
	return (str);
	 //String.lpad;
};


/**
 * Adiciona m?todo trim() ? classe String.
 * Elimina brancos no in?cio e fim da String.
 */
String.prototype.trim = function()
{
	return this.replace(/^\s*/, "").replace(/\s*$/, "");
	//String.trim;
};


/**
 * Elimina caracteres de formata??o e zeros ? esquerda da string
 * de n?mero fornecida.
 * @param String pNum
 * 	String de n?mero fornecida para ser desformatada.
 * @return String de n?mero desformatada.
 */
function unformatNumber(pNum)
{
	return String(pNum).replace(/\D/g, "");
} //unformatNumber





/**
 * Calcula os 2 d?gitos verificadores para o n?mero-efetivo pEfetivo de
 * CNPJ (12 d?gitos) ou CPF (9 d?gitos) fornecido. pIsCnpj ? booleano e
 * informa se o n?mero-efetivo fornecido ? CNPJ (default = false).
 * @param String pEfetivo
 * 	String do n?mero-efetivo (SEM d?gitos verificadores) de CNPJ ou CPF.
 * @param boolean pIsCnpj
 * 	Indica se a string fornecida ? de um CNPJ.
 * 	Caso contr?rio, ? CPF. Default = false (CPF).
 * @return String com os dois d?gitos verificadores.
 */
function dvCpfCnpj(pEfetivo, pIsCnpj)
{
	if (pIsCnpj==null){ 
	pIsCnpj = false;
	}
	var i, j, k, soma, dv;
	var cicloPeso = pIsCnpj? NUM_DGT_CNPJ_BASE: NUM_DIGITOS_CPF;
	var maxDigitos = pIsCnpj? NUM_DIGITOS_CNPJ: NUM_DIGITOS_CPF;
	var calculado = formatCpfCnpj(pEfetivo, false, pIsCnpj);
	calculado = calculado.substring(2, maxDigitos);
	var result = "";

	for (j = 1; j <= 2; j++)
	{
		k = 2;
		soma = 0;
		for (i = calculado.length-1; i >= 0; i--)
		{
			soma += (calculado.charAt(i) - '0') * k;
			k = (k-1) % cicloPeso + 2;
		}
		dv = 11 - soma % 11;
		if (dv > 9){
			 dv = 0;
			}
		calculado += dv;
		result += dv;
	}

	return result;
} //dvCpfCnpj


/**
 * Testa se a String pCpf fornecida ? um CPF v?lido.
 * Qualquer formata??o que não seja algarismos ? desconsiderada.
 * @param String pCpf
 * 	String fornecida para ser testada.
 * @return <code>true</code> se a String fornecida for um CPF v?lido.
 */
function isCpf(pCpf)
{
	
	if (pCpf == ''){
		return true;
	}
	
	var numero = formatCpfCnpj(pCpf, false, false);
	var base = numero.substring(0, numero.length - 2);
	var digitos = dvCpfCnpj(base, false);
	var algUnico, i;

	// Valida d?gitos verificadores
	if (numero != base + digitos){return false;} 

	/* não ser?o considerados v?lidos os seguintes CPF:
	 * 000.000.000-00, 111.111.111-11, 222.222.222-22, 333.333.333-33, 444.444.444-44,
	 * 555.555.555-55, 666.666.666-66, 777.777.777-77, 888.888.888-88, 999.999.999-99.
	 */
	algUnico = true;
	for (i=1; i<NUM_DIGITOS_CPF; i++)
	{
		algUnico = algUnico && (numero.charAt(i-1) == numero.charAt(i));
	}
	return (!algUnico);
} //isCpf


/**
 * Testa se a String pCnpj fornecida ? um CNPJ v?lido.
 * Qualquer formata??o que não seja algarismos ? desconsiderada.
 * @param String pCnpj
 * 	String fornecida para ser testada.
 * @return <code>true</code> se a String fornecida for um CNPJ v?lido.
 */
function isCnpj(pCnpj) {
  
    var numero = formatCpfCnpj(pCnpj, false, true);

    var b = [ 6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2 ];
    if ((numero = numero.replace(/[^\d]/g, "")).length != 14)
        return false;
    if (/0{14}/.test(numero))
        return false;
    for (var i = 0, n = 0; i < 12; n += numero[i] * b[++i])
        ;
    if (numero[12] != (((n %= 11) < 2) ? 0 : 11 - n))
        return false;
    for (var i = 0, n = 0; i <= 12; n += numero[i] * b[i++])
        ;
    if (numero[13] != (((n %= 11) < 2) ? 0 : 11 - n))
        return false;
    return true;
}


/**
 * Testa se a String pCpfCnpj fornecida ? um CPF ou CNPJ v?lido.
 * Se a String tiver uma quantidade de d?gitos igual ou inferior
 * a 11, valida como CPF. Se for maior que 11, valida como CNPJ.
 * Qualquer formata??o que não seja algarismos ? desconsiderada.
 * @param String pCpfCnpj
 * 	String fornecida para ser testada.
 * @return <code>true</code> se a String fornecida for um CPF ou CNPJ v?lido.
 */
function isCpfCnpj(pCpfCnpj)
{
	var numero = pCpfCnpj.replace(/\D/g, "");
	if (numero.length > NUM_DIGITOS_CPF){
		return isCnpj(pCpfCnpj);
	}
	else{
		return isCpf(pCpfCnpj);
	}
} //isCpfCnpj


/*
* Testa se a string com os valores digitados é realmente uma conta corrente
*/
function isContaCorrente(contaCorrente){
	
	var retorno = true;
	
	if (contaCorrente.length > NUM_DIGITOS_CONTA_CORRENTE)
		retorno = false;
		
	
	var contaCorrenteTemp = contaCorrente.substring(0, contaCorrente.length-1);
	var digito = contaCorrente.substring(contaCorrente.length-1, contaCorrente.length)
	
	if(digito != calcularDVModulo11(contaCorrenteTemp))
		retorno=  false;
	
	return retorno;
}


function Limpar(valor, validos) {
	// retira caracteres invalidos da string
	var result = "";
	var aux;
	for (var i=0; i < valor.length; i++) {
	aux = validos.indexOf(valor.substring(i, i+1));
	if (aux>=0) {
	result += aux;
	}
	}
	return result;
	}
	
	
function formataCampoMoeda(value, milSep, decSep,inteiro,decimal){

	var aux = '';
	var numeroNegativo = value.indexOf("-") > -1;
	// Remove a formatação com o novo valor digitado	
	var valor = String(value).replace(/\D/g, "");
	if ( valor.length == 0  ){
		return "";
	}
	//Variavel para parte inteira
	var parteInteira = "";
	//Variavel para parte Decimal
	var parteDecimal = "";

	if ( valor.length >= decimal) {
		//Pega parte decimal
		parteDecimal = valor.substring(valor.length-decimal,valor.length);	
		if ( valor.length >  decimal) {
			//Valor sem decimal
			
			aux = valor.substring(0,valor.length-decimal);
			var count = 0;
			var ponto = false;
			for (i = aux.length; i >= 0; i--) {
			
				//Colocar separador mil
				if (ponto) {
					parteInteira =  milSep + parteInteira  ;
					ponto = false;
				}
				// Contador de separador mil
				if (count != 0 && count % 3 == 0 ) {
					count = 0;
					ponto = true;
				}
				parteInteira = aux.charAt(i) + parteInteira  ;
				count = count + 1;
			}
			//Caso tenha casa decimal
			if ( decimal > 0 ) {
			parteInteira = parteInteira  + decSep;
			}			
		}
		else {
			parteInteira = "0" + decSep;
		}
	} else {
		parteInteira = "0" + decSep;
		parteDecimal = "0" + aux; 
	}
	return numeroNegativo ? ("-" + parteInteira + parteDecimal) : parteInteira + parteDecimal;	
	
}

function controleCampoSelecionado(obj,e) {

  //Tecla pressionada
	var keyControle=obtemKey(e);
	var charCode=obtemCaracter(e);

	if (_IE) {
	
		selected_text = document.selection.createRange().text;
		if ( selected_text == obj.value && keyControle != BTN_SHIFT && keyControle != BTN_CTRL_C && keyControle != BTN_CTRL_X &&  keyControle != BTN_TAB   &&  keyControle != BTN_ENTER &&  keyControle != BTN_END &&  keyControle != BTN_HOME &&  keyControle != SETA_DIREITA &&  keyControle != SETA_ESQUERDA&&  keyControle != SETA_CIMA &&  keyControle != SETA_BAIXO)  {
			obj.value = "";
			var FieldRange = obj.createTextRange();
			FieldRange.moveStart('character', obj.value.length);
			FieldRange.collapse();
			FieldRange.select();
			
			//Cancelar operação em caso de backspace
			if ( keyControle == BTN_BACKSPACE) {
				return false;
			}
			//Cancelar operação em caso de delete
			if ( keyControle == BTN_DELETE) {
				obj.value = "";
				return false;
			}		
		}
	} else {
		//Apagar valor selecionado no campo	
		if ( obj.selectionStart == 0 && obj.selectionEnd > 0 && obj.selectionEnd == obj.value.length  && keyControle != BTN_CTRL_C && keyControle != BTN_CTRL_X &&  keyControle != BTN_TAB   &&  keyControle != BTN_ENTER &&  keyControle != BTN_END &&  keyControle != BTN_HOME &&  keyControle != SETA_DIREITA &&  keyControle != SETA_ESQUERDA&&  keyControle != SETA_CIMA &&  keyControle != SETA_BAIXO)  {
			obj.value = "";
			//Cancelar operação em caso de backspace
			if ( keyControle == BTN_BACKSPACE) {
				return false;
			}
			//Cancelar operação em caso de delete
			if ( keyControle == BTN_DELETE) {
				obj.value = "";
				return false;
			}
		}
	}
	return true;

}

function formataMoeda(obj, milSep, decSep,e,inteiro,decimal){
	//Tecla pressionada
	var keyControle=obtemKey(e);
	var charCode=obtemCaracter(e);
	//Teclas liberadas
	switch(keyControle && charCode != keyControle)
	{
		case BTN_TAB: return true;
		//case BTN_ESC:
		case BTN_ENTER: return false;
		case BTN_CTRL_V: return true;
		case SETA_ESQUERDA: return true;
		case SETA_DIREITA:return true;
		case BTN_INSERT:return true;
	}
	

	if (_IE) {
		if ( keyControle == BTN_HOME) {
			return true;
		}
		if ( keyControle == BTN_END) {
			return true;
		}
// no ie tbem deve ser ignorado o backspace e delete
//		if ( keyControle == BTN_BACKSPACE) {
//			return true;
//		}
//		if ( keyControle == BTN_DELETE) {
//			return false;
//		}
		if ( keyControle == BTN_TAB) {
			return true;
		}
		if ( keyControle == SETA_ESQUERDA) {
			return true;
		}
		if ( keyControle == SETA_DIREITA) {
			return true;
		}
	
	}
	
	//Nao efetuar nenhum operação caso nao tenha valor no campo e seja pressionado o back space
	if ( obj.value.length == 0  && keyControle == BTN_BACKSPACE) {
		return false;
	}
	if (controleCampoSelecionado(obj,e) == false) {
		return false; 
	}


	
	//Teclas proibidas a partir desse ponto
	if ( keyControle == BTN_DELETE ) {
		return false;
	}
	//Caracteres Válidos
	var strCheck = '0123456789';
	//Eventos
	var whichCode = obtemKey(e);
	
	//Remove formatação
	//Caso seja apertado o Back Space	
	

	if ( keyControle == BTN_BACKSPACE ) {
		if (obj.value.length > 0 ) {
			obj.value = obj.value.substring(0,obj.value.length-1);
			key="";
			//Caso o valor seja zero apagar o campo
			var valorTmp = String(obj.value).replace(/\D/g, "")
			if (parseFloat(valorTmp) == 0 ) {
				obj.value="";
				return false;
			}
		}
	} else {
		if(caracterControle(e)){
			return true;
		}
		key = String.fromCharCode(whichCode);// Valor para o código da Chave
		if ( _IE ) {
			switch(whichCode)
			{
				case IE_NUM0: key = 0; break;
				case IE_NUM1: key = 1; break;
				case IE_NUM2: key = 2; break;
				case IE_NUM3: key = 3; break;
				case IE_NUM4: key = 4; break;
				case IE_NUM5: key = 5; break;
				case IE_NUM6: key = 6; break;
				case IE_NUM7: key = 7; break;
				case IE_NUM8: key = 8; break;
				case IE_NUM9: key = 9; break;
			}
		}
		if (strCheck.indexOf(key) == -1) return false; // Chave inválida
	}
	
	var aux = String(obj.value).replace(/\D/g, "");

//removido parseFloat bug 1206	
	if ( aux.length >= (inteiro+decimal)){
		return false;
	}
	aux = '';
	len = obj.value.length;
	for(i = 0; i < len; i++)
		if ((obj.value.charAt(i) != '0') && (obj.value.charAt(i) != decSep)) break;
	aux = '';
	for(; i < len; i++)
		if (strCheck.indexOf(obj.value.charAt(i))!=-1) aux += obj.value.charAt(i);
		aux += key;
	// Remove a formatação com o novo valor digitado	
	var valor = String(aux).replace(/\D/g, "");
	//Variavel para parte inteira
	var parteInteira = "";
	//Variavel para parte Decimal
	var parteDecimal = "";
	if ( valor.length >= decimal) {
		//Pega parte decimal
		parteDecimal = valor.substring(valor.length-decimal,valor.length);
		//definirMensagem(parteDecimal);
		if ( valor.length >  decimal) {
			//Valor sem decimal
			aux = valor.substring(0,valor.length-decimal);
			var count = 0;
			var ponto = false;
			for (i = aux.length; i >= 0; i--) {
			
				//Colocar separador mil
				if (ponto) {
					parteInteira =  milSep + parteInteira ;
					ponto = false;
				}
				// Contador de separador mil
				if (count != 0 && count % 3 == 0 ) {
					count = 0;
						ponto = true;
				}
				parteInteira = aux.charAt(i) + parteInteira  ;
				count = count + 1;
			}
			//Caso tenha casa decimal
			if ( decimal > 0 ) {
			parteInteira = parteInteira  + decSep;
			}
		} else {
		parteInteira = "0" + decSep;
		}
	} else {
		parteTempDecimal = "";
		var tamanhoDecimal = parseInt (decimal);
		for(ct = 0 ; ct < ( tamanhoDecimal - aux.length); ct++) {
			parteTempDecimal = parteTempDecimal + "0";
		}
		parteInteira = "0" + decSep;
		parteDecimal = parteTempDecimal + aux; 
	}
	//maxlenght para browsers diferentes do Opera
	//bug 7450
	//Leonardo Ramos
	obj.maxlength = 40;
	var resultado = parteInteira + parteDecimal;
//	obj.dispatchEvent(e);
	if (resultado.length <= 40)
		obj.value = resultado;
	//alert (obj.maxlenght);
	return false;
}


/**
* Esta funcao formata um numero decimal com sinal negatvo
*
**/
function formataMoedaNegativa(obj, milSep, decSep,e,inteiro,decimal){


	var numeroNegativo = obj.value.indexOf("-") > -1;
	//Tecla pressionada
	var keyControle=obtemKey(e);
	var charCode=obtemCaracter(e);
	//Teclas liberadas
	switch(keyControle && charCode != keyControle)
	{
		case BTN_TAB: return true;
		//case BTN_ESC:
		case BTN_ENTER: return false;
		case BTN_CTRL_V: return true;
		case SETA_ESQUERDA: return true;
		case SETA_DIREITA:return true;
		case BTN_INSERT:return true;
	}
	

	if (_IE) {
		if ( keyControle == BTN_HOME) {
			return true;
		}
		if ( keyControle == BTN_END) {
			return true;
		}
// no ie tbem deve ser ignorado o backspace e delete
//		if ( keyControle == BTN_BACKSPACE) {
//			return true;
//		}
//		if ( keyControle == BTN_DELETE) {
//			return false;
//		}
		if ( keyControle == BTN_TAB) {
			return true;
		}
		if ( keyControle == SETA_ESQUERDA) {
			return true;
		}
		if ( keyControle == SETA_DIREITA) {
			return true;
		}
	
	}
	
	//Nao efetuar nenhum operação caso nao tenha valor no campo e seja pressionado o back space
	if ( obj.value.length == 0  && keyControle == BTN_BACKSPACE) {
		return false;
	}
	if (controleCampoSelecionado(obj,e) == false) {
		return false; 
	}


	
	//Teclas proibidas a partir desse ponto
	if ( keyControle == BTN_DELETE ) {
		return false;
	}
	//Caracteres Válidos
	var strCheck = '0123456789-+';
	//Eventos
	var whichCode = obtemKey(e);
	
	//Remove formatação
	//Caso seja apertado o Back Space	
	

	if ( keyControle == BTN_BACKSPACE ) {
		if (obj.value.length > 0 ) {
			obj.value = obj.value.substring(0,obj.value.length-1);
			key="";
			//Caso o valor seja zero apagar o campo
			var valorTmp = String(obj.value).replace(/\D/g, "")
			if (parseFloat(valorTmp) == 0 ) {
				obj.value="";
				return false;
			}
		}
	} else {
		if(caracterControle(e)){
			return true;
		}
		key = String.fromCharCode(whichCode);// Valor para o código da Chave
		if ( _IE ) {
			switch(whichCode)
			{
				case IE_NUM0: key = 0; break;
				case IE_NUM1: key = 1; break;
				case IE_NUM2: key = 2; break;
				case IE_NUM3: key = 3; break;
				case IE_NUM4: key = 4; break;
				case IE_NUM5: key = 5; break;
				case IE_NUM6: key = 6; break;
				case IE_NUM7: key = 7; break;
				case IE_NUM8: key = 8; break;
				case IE_NUM9: key = 9; break;
			}
		}
		if (strCheck.indexOf(key) == -1) return false; // Chave inválida
	}
	
	if (whichCode == 45) { // codigo = -
		valorAtual = obj.value;
		if (valorAtual.lenght == 0) {
			parteTempDecimal = "";
			var tamanhoDecimal = parseInt (decimal);
			for(ct = 0 ; ct < tamanhoDecimal; ct++) {
				parteTempDecimal = parteTempDecimal + "0";
			}
			parteInteira = "0" + decSep;
			parteDecimal = parteTempDecimal;
			valorAtual= parteInteira + parteDecimal;
		}
		if (valorAtual.indexOf("-") == -1) {
			obj.value = "-" + valorAtual;
		}
		return false;
	} else { 
		if (String.fromCharCode(whichCode) == "+") {
			valor = obj.value;
			if (valor.lenght == 0) {
				parteTempDecimal = "";
				var tamanhoDecimal = parseInt (decimal);
				for(ct = 0 ; ct < ( tamanhoDecimal); ct++) {
					parteTempDecimal = parteTempDecimal + "0";
				}
				parteInteira = "0" + decSep;
				parteDecimal = parteTempDecimal;
				valor = parteInteira + parteDecimal;
			}
			if (valor.indexOf("-") > -1) {
				obj.value = obj.value.replace("-","");
			}
			return false;
		}
	}
	
	var aux = String(obj.value).replace(/\D/g, "");
	

//removido parseFloat bug 1206	
	if ( aux.length >= (inteiro+decimal)){
		return false;
	}
	aux = '';
	len = obj.value.length - (numeroNegativo ? 1 : 0);
	valorTeste = String(obj.value).replace("-", "");
	for(i = 0; i < len; i++)
		if ((valorTeste.charAt(i) != '0') && (valorTeste.charAt(i) != decSep)) 
			break;
		
	aux = '';
	for(; i < len; i++)
		if (strCheck.indexOf(valorTeste.charAt(i))!=-1) 
			aux += valorTeste.charAt(i);
		
	aux += key;
	// Remove a formatação com o novo valor digitado	
	var valor = String(aux).replace(/\D/g, "");
	//Variavel para parte inteira
	var parteInteira = "";
	//Variavel para parte Decimal
	var parteDecimal = "";
	if ( valor.length >= decimal) {
		//Pega parte decimal
		parteDecimal = valor.substring(valor.length-decimal,valor.length);
		//definirMensagem(parteDecimal);
		if ( valor.length >  decimal) {
			//Valor sem decimal
			aux = valor.substring(0,valor.length-decimal);
			var count = 0;
			var ponto = false;
			for (i = aux.length; i >= 0; i--) {
			
				//Colocar separador mil
				if (ponto) {
					parteInteira =  milSep + parteInteira ;
					ponto = false;
				}
				// Contador de separador mil
				if (count != 0 && count % 3 == 0 ) {
					count = 0;
						ponto = true;
				}
				parteInteira = aux.charAt(i) + parteInteira  ;
				count = count + 1;
			}
			//Caso tenha casa decimal
			if ( decimal > 0 ) {
			parteInteira = parteInteira  + decSep;
			}
		} else {
		parteInteira = "0" + decSep;
		}
	} else {
		parteTempDecimal = "";
		var tamanhoDecimal = parseInt (decimal);
		for(ct = 0 ; ct < ( tamanhoDecimal - aux.length); ct++) {
			parteTempDecimal = parteTempDecimal + "0";
		}
		parteInteira = "0" + decSep;
		parteDecimal = parteTempDecimal + aux; 
	}
	
	var resultado = parteInteira + parteDecimal;
//	obj.dispatchEvent(e);
	
	obj.value = numeroNegativo ? "-" + resultado : resultado;
	return false;
}
/*
* Cancela a execução de uma function mapeada por um evento
*/
function CancelEventExecution(event) {
	if (navigator.appName == "Netscape") {
		event.preventDefault();
	} else {
		event.returnValue = false;
	}
}


	
	
	


//********************************************************************
// Função    		: setVisibleMsg
// Objetivo  		: Indicar a visibilidade da dvmsginfo
// Parametro		: visivel ("true","false")
// Retorno 			: nao tem
//********************************************************************
function setVisibleMsg(visivel) {
	
     var dv = document.getElementById("dvmsginfo");
     if (dv != undefined) {
	     if (visivel == "true") {
	       dv.style.visibility = "visible";
	       dv.style.height = "10%";
	     } else  {
	       dv.style.visibility = "hidden";
	       dv.style.height = "0";
	     }
     }
     
} 



//********************************************************************
// Função    		: definirMensagemObrigatorio
// Objetivo  		: Coloca mensagem na div adicionando a  menasgem padrao de obrigatório
// Parametro		: texto = mensagem
// Retorno 			: nao tem
//********************************************************************
function definirMensagemObrigatorio(texto){
	definirMensagem( mensagemPadraoObrigatorio +": "+  texto + ".");
}

//********************************************************************
// Função    		: definirMensagem
// Objetivo  		: Coloca mensagem na div
// Parametro		: texto = mensagem
// Retorno 			: nao tem
//********************************************************************
function definirMensagem(texto){
	try{
		if (parent.areaAplicacao) {
			var idTab = parent.areaAplicacao.getIdFrameAtivo();
			var iframeCorpo = parent.areaAplicacao.document.getElementById(idTab);
			iframeCorpo.contentWindow.abrePopup("paginas/colmeiaMensagen.jsp?ALERT_MESSAGE="+escape(texto),"","");
		} else {
			abrePopup("paginas/colmeiaMensagen.jsp?ALERT_MESSAGE="+escape(texto),"","");
		}
	}catch(e){
		abrePopup("paginas/colmeiaMensagen.jsp?ALERT_MESSAGE="+escape(texto),"","");
	}
		
}


//********************************************************************
// Função    		: validarForm
// Objetivo  		: Responsavel em validar o formulario antes de um submit
// Parametro		: nao tem
// Retorno 			: nao tem
//********************************************************************
function validarForm(){
	return validarFormProcessando(true);
}
	
function validarFormProcessando(processar){
		if (blValidarForm == 'true') {

			var tmpMensagem = mandatoryValidator.validate();
			if (tmpMensagem != true && tmpMensagem != false ) {
				mensagemObrigatorio = mensagemObrigatorio + tmpMensagem;
			}else{
				var acao = document.getElementById("acao");
				if(acao.value == "alterar"){
					var validar = document.getElementById("validarAlteracoesForm");
					if (validar.value == 'true') {
						var tmp = document.getElementById("alteracaoDados");
						if(tmp.value == ''){
							var mensagemAlteracaoDados = document.getElementById("mensagemAlteracaoDados");
							definirMensagem(mensagemAlteracaoDados.value);	
							return false;	
						}
					}
				}
			}
			if ( trimJS(mensagemObrigatorio).length == 0) {
				if(processar) {
					desabilitaForm();
					divProcessando();
				}
				return true;
			}
			

			
			definirMensagem(mensagemObrigatorio);

			mensagemObrigatorio = '';
			return false;
		} 
		if (blValidarForm == 'grupoFalse') {
			return false;
		}
		if(processar) {
			desabilitaForm();
			divProcessando();
		}
			
		return true;
}


//Mandatorio

var mandatoryValidator = new MandatoryValidator();

if(new String(Array.add).toString()=='undefined')

	Array.prototype.add=_addToArray;

if(new String(Array.isArray).toString()=='undefined')

	Array.prototype.isArray=true;

function _addToArray(element)

{

	this.push(element);

	return this;

}



function MandatoryValidator()

{

	this.cache=new Array(0);

	this.addField=_addField;

	this.validate=_validateMandatories;

	this.clearFields = _clearFields;

	this.deleteField = _deleteField;

}

//********************************************************************
// Função    		: _validateMandatories
// Objetivo  		: Valida os campos do form e monta uma mensagem de validação
// Parametro		: nao tem
// Retorno 			: nao tem
//********************************************************************
function _validateMandatories()

{
    if(this.cache.length==0) 
    	return true;

    //var msg = new Array(0);
    var msg = '';
    var imsg = 1;
    
    var it = getIteratorFromArray(this.cache);
    var elto;
    var fld;
    this.isValid=function(arr){
    
    	for(var _i=0; arr.length>_i; _i++)

	{

		if(arr[_i].type)

		{
			if(arr[_i].type.toUpperCase()=='RADIO' || arr[_i].type.toUpperCase()=='CHECKBOX')

			{

				if(arr[_i].checked) return true;

			} else if (arr[_i].type.toUpperCase()=='SELECT-ONE') {
				if(arr[_i].options[arr[_i].selectedIndex].value != '' ) return true;
			}else{

				var comTrim = trimJS(arr[_i].value);

				if(comTrim.length==0) return false;

			}

		}else return true;

	}

    	return false;

    };

	var isSelect = false, fldFocus='';

	while(it.hasNext())

	{

		elto = it.next();

		fld = elto[1];
		
		trocaCorLabel(fld,"#333333");
		try	{
			isSelect=(fld.type.toUpperCase().indexOf('SELECT')>=0);
		}catch(err){
			isSelect=false;
		}
		
	    if( (fld.length||fld.isArray)&&!isSelect) {
	       	if (!this.isValid(fld)) {
				trocaCorLabel(fld,"red");
				//if(msg.length!=0)
				msg = msg + elto[0] + ";" ;
            	//msg[imsg] = elto[0];
	       		imsg++;
			if(fldFocus=='') fldFocus=fld[0];
			}
		} else  if(new String(fld.type).toString().toUpperCase()=='RADIO' || new String(fld.type).toString().toUpperCase()=='CHECKBOX') 	{
			if(!fld.checked)
				{
				trocaCorLabel(fld,"red");
				//if(msg.length!=0)
    	        msg = msg + elto[0] + ";" ;
	//			msg[imsg] = elto[0];
	       		imsg++;

				if(fldFocus=='') fldFocus=fld;

				}

		} else if (fld.type.toUpperCase() == "SELECT") {
			if(fld.options[fld.selectedIndex].value == '' ) {
				trocaCorLabel(fld,"red");
				msg = msg + elto[0] + ";" ;
				imsg++;
			}
		}else {
		
				var trimado = trimJS(fld.value);

				if(trimado==''||fld.value.length==0)

					{

					if(fldFocus=='') fldFocus=fld;
					
					trocaCorLabel(fld,"red");
				//if(msg.length!=0)
			        msg = msg + elto[0] + ";" ;
//					msg[imsg] = elto[0];
	       		    imsg++;

					}

		}

		isSelect=false;

	}

	

	
//
	if(fldFocus!='') {
//
//	    // O campo não pode ser hidden nem estar desabilitado.
//
	    if ((fldFocus.type.toUpperCase().indexOf('HIDDEN')<0) && (!fldFocus.disabled))
//
			fldFocus.focus();
//
	}

	if(msg.length==0)

		msg =' ';
	else{
 		//faz o substring para remover o ultimo ';'
     	msg = mensagemPadraoObrigatorio + ": ;" + msg.substring(0, msg.length -1)+".";
	
	    //msg =  li + + ':' + fli + msg
		//msg = msg;
	}
	
	return msg;

}

function _addField(label, field)

{
	
	if (new String(label).toString()== 'undefined') return;

	if (new String(field).toString()== 'undefined') return;



	this.cache[this.cache.length] = [label,  field];

	return this;

}

function _clearFields()

{

	this.cache = new Array(0);

	return this;

}

function _deleteField(field)

{

	var idxFld = 0;

	var it = getIteratorFromArray(this.cache);

	var elArr;

	while(it.hasNext()){

		elArr = it.next();

		if(elArr[1]==field){

          	this.cache.splice(idxFld , 1);

          	return this;

      	}

          idxFld++;

	}

	return this;

}

//Cria um iterator de um array

//retorna um iterator

function getIteratorFromArray(arr){return new _Iterator(arr);}

//iterator

function _Iterator(arr)

{

	this.array=arr;

	this.from=0;

	this.to=arr.length;

	this.hasNext=_hasNext;

	this.next=_next;

	if(!arr) this.to=this.from;

}

//metodo do iterator

function _hasNext() {if(this.from==0)return (this.to>0);else return ((this.to-this.from)>0);}

//metodo do iterator

function _next()

{

	result = 0;

	if(this.hasNext())

	{

		var i=this.from;

		this.from=this.from+1;

		return this.array[i];

	}

	return result;

}




function validaTAKeyup(textArea, maxLength)

{
	var text=textArea.value;

	if(text.length>maxLength) {
		textArea.value=text.substring(0, maxLength);
	}
}

function handleEnter (field, event) {
		var keyCode = event.keyCode ? event.keyCode : event.which ? event.which : event.charCode;
		if (keyCode == 13) {
//			var i;
//			for (i = 0; i < field.form.elements.length; i++){
//				if (field == field.form.elements[i])
//					break;
//			}
//			i = (i + 1) % field.form.elements.length;
//			if ( field.form.elements[i].type != 'text' && field.form.elements[i].type != 'select-one') {
//				var controle = i;
//				for (y = i; y < field.form.elements.length; y++){
//					if (field.form.elements[y].type == 'text' || field.form.elements[y].type == 'select-one') {
//						i = y;
//						break;
//					}
//				}
//				//nao achou proximo
//				if ( i == controle) {
//					i = 0;
//					for (i = 0; i < field.form.elements.length; i++){
//						if (field.form.elements[i].type == 'text' || field.form.elements[i].type == 'select-one') {
//							break;
//						}
//					}
//				}
//			}  
//			field.form.elements[i].focus();
			return false;
		} 
		return true;
	}


function validaTAKeypress(event, textArea, maxLength)

{

	var text=textArea.value;

	var key=obtemCaracter(event);

	// tratamento especial para enter (no windows, insere 2 caracteres)

	if(key==13 && text.length>=maxLength-1)

		return false;

//	if(!caracterControle(key) && text.length>=maxLength)
//
//		return false;

	return true;

}



function getFloatAsBRFormat(val)

{

    val = new String(val);

				if(val==''||val=='0'||val=='0.0')

				   return '0,00';

	   return formataFloat(val.replace(/\./gi, '@').replace(/\,/gi, '.').replace(/\@/gi, ','), 2);

}



function getFloatAsUSFormat(val)

{

    var tmp = new String(val);

				if(tmp==''||tmp=='0'||val=='0,0'||val=='0,00')

				   return 0.0;

	   return parseFloat(tmp.replace(/\./gi, '@').replace(/\,/gi, '.').replace(/\@/gi, ''));

}



function isBlank(s)

{

	for (var i = 0; i < s.length; i++) {

		var c = s.charAt(i);

		if ((c != ' ') && (c != '\n') && (c != '\t'))

			return false;

	}

	return true;

}

function isNum(argvalue) {
argvalue = argvalue.toString();

if (argvalue.length == 0)
return false;

for (var n = 0; n < argvalue.length; n++)
if (argvalue.substring(n, n+1) < "0" || argvalue.substring(n, n+1) > "9")
return false;

return true;
}


//********************************************************************
// Função    		: comboTextoAjustaCombo
// Objetivo  		: Responsavel ajustar a combo conforme o texto informado
// Parametro		: documento document da pagina
// Parametro        : idCombo Id da combo 
// Retorno 			: nao tem
//********************************************************************

	function comboTextoAjustaCombo(documento, idCombo, tipoDado, mensagemCodigoInvalido) {

		if(tipoDado == 'CODIGO_COOPERATIVA'){
			return comboCooperativaAjustaCombo(documento, idCombo, mensagemCodigoInvalido);
		}
	    var aCombo = documento.getElementById(idCombo);
	    var oTexto = documento.getElementById(idCombo + 'TextBox');
	    
	    var oValor = oTexto.value;
	    
	    if(isNum(oValor)){
	    	// com o parseInt não funciona para números 004
			oValor = Math.round(oValor); 
	    }
	    
	    // Localizar item conforme digitado
	    var achou = false;
	    var posicao = 0;
	    for (var i = 0; i < aCombo.options.length; i++) {
	        var aOpcao = aCombo.options[i].value;
	        if (aOpcao == oValor) {
	        	achou = true;
	        	oValor = aOpcao;
	        	posicao = i;
	        }
	    }
	    
	    // Se Localizaou o item
	    if (achou) {
	        aCombo.selectedIndex = posicao;
	        return true;
	    }
	    
	    // Converter para numero, para tentar localizar a chave na combo
	    // oValor = converteNumero(oTexto.value);
		oValor = oTexto.value;
	    
	    posicao = -1;
	    for (var i = 0; i < aCombo.options.length; i++) {
	        //var aOpcao = converteNumero(aCombo.options[i].value);
			var aOpcao = aCombo.options[i].value;
	        if (aOpcao == oValor) posicao = i;
	    }
	    
	    if (posicao == -1) {
	    	if (mensagemCodigoInvalido == "") {
	        	setTimeout("definirMensagem('Código inválido ou inexistente.');", 300);
	        } else {	        	
	        	setTimeout("definirMensagem('" +mensagemCodigoInvalido + "');" , 300);
	        }	
	        oTexto.value = '';
	        window.setTimeout('document.forms[0].'+oTexto.name+'.focus();',150);
	        posicao = 0;
	    }
	    
        aCombo.selectedIndex = posicao;
        return true;
	}
	
//********************************************************************
// Função    		: comboCooperativaAjustaCombo
// Objetivo  		: Responsavel ajustar o texto conforme o valor selecionado na combo de Cooperativa
// Parametro		: documento document da pagina
// Parametro        : idCombo Id da combo 
// Retorno 			: nao tem
//********************************************************************
	 
	function comboCooperativaAjustaCombo(documento, idCombo, mensagemCodigoInvalido) {
	    var aCombo = documento.getElementById(idCombo);
	    var oTexto = documento.getElementById(idCombo + 'TextBox');
	    
	    var oValor = oTexto.value;
	    
	    if(isNum(oValor)){
			oValor = Math.round(oValor); 
	    } else if(oValor.indexOf('.')>0){
	    	var aux = oValor.split('.');
	    	if(aux.length==2){
	    		var cooperativa = aux[0];
	    		cooperativa = cooperativa.lpad(6,'0');
	    		var pac = aux[1];
	    		pac = pac.lpad(2,'0');;
	    		oValor = cooperativa+'.'+pac;
	    	}
	    }
	    
	    // Localizar item conforme digitado
	    var posicao = -1;
	    for (var i = 0; i < aCombo.options.length; i++) {
	        var aOpcao = aCombo.options[i].value;
	        if (aOpcao == oValor) {
	        	achou = true;
	        	oValor = aOpcao;
	        	posicao = i;
	        }
	    }
	    
	    if (posicao == -1) {
	    	if (mensagemCodigoInvalido == "") {
	        	setTimeout("definirMensagem('Código inválido ou inexistente.');", 300);
	        } else {	        	
	        	setTimeout("definirMensagem('" +mensagemCodigoInvalido + "');" , 300);
	        }	
	        oTexto.value = '';
	        window.setTimeout('document.forms[0].'+oTexto.name+'.focus();',150);
	        posicao = 0;
	    }
	    
        aCombo.selectedIndex = posicao;
        return true;
	}

//********************************************************************
// Função    		: comboTextoAjustaTexto
// Objetivo  		: Responsavel ajustar o texto conforme o valor selecionado na combo
// Parametro		: documento document da pagina
// Parametro        : idCombo Id da combo 
// Retorno 			: nao tem
//********************************************************************
	 
	function comboTextoAjustaTexto(documento, idCombo) {
	    // Refercia para a combo.
	    var aCombo = documento.getElementById(idCombo);	
	    // Refercia para a caixa de texto.
	    var oTexto = documento.getElementById(idCombo + 'TextBox');
	    oTexto.value = aCombo.options[aCombo.selectedIndex].value;
	    var refHidden = eval('document.forms[0].' + idCombo + 'TextBoxHiddenTemp');
	    refHidden.value = aCombo.options[aCombo.selectedIndex].value;
	}
	
//********************************************************************
// Função    		: alterarSubmitComValidacao
// Objetivo  		: Responsável em alterar o submit da página. Esse submit obriga a validacao generica do sistema
// Parametro		: formulario nome do formulario
// Parametro        : novaAction action a ser utilizada 
// Retorno 			: nao tem
//********************************************************************	
function alterarSubmitComValidacao(formulario, novaAction){
	
//	definirAlteracaoDadosTela(formulario);
	
	var formTmp = eval('document.'+formulario+'');
	formTmp.action = novaAction;
	formTmp.target = "";
	blValidarForm='true';
	formTmp.campoUltimoFoco.value = ''; 
}

//********************************************************************
// Função    		: alterarSubmit
// Objetivo  		: Responsável em alterar o submit da página. 
// Parametro		: formulario nome do formulario
// Parametro        : novaAction action a ser utilizada 
// Retorno 			: nao tem
//********************************************************************	
function alterarSubmit(formulario, novaAction){
	var formTmp = eval('document.'+formulario+'');
	formTmp.action = novaAction;
	formTmp.target = "";
	blValidarForm='false';
	formTmp.campoUltimoFoco.value = ''; 
}

//********************************************************************
// Função    		: onChangeSubmit
// Objetivo  		: Responsável em alterar o submit da página.
// Parametro		: formulario nome do formulario
// Parametro        : novaAction action a ser utilizada 
// Retorno 			: nao tem
//********************************************************************	
function onChangeSubmit(formulario, novaAction){
   alterarSubmit(formulario, novaAction);
   var tmpForm = eval('document.'+formulario+'');
   divProcessando();
   tmpForm.submit();
}

//********************************************************************
// Função    		: btnPesquisarGrid
// Objetivo  		: Responsável em alterar o submit da grid na paginacao.
// Parametro		: formulario nome do formulario
// Parametro        : novaAction action a ser utilizada 
// Retorno 			: nao tem
//********************************************************************	
function btnPesquisarGrid(formulario, action) {
	var tmpForm = eval("document.forms['"+formulario+"']");
	document.getElementById("campoFocus").value = 'tabela';
   tmpForm.action=action;
   divProcessando();
   tmpForm.submit();
}
//********************************************************************
// Função    		: btnPesquisarGrid
// Objetivo  		: Alterar a cor do label do campo correspondente se existir para o css correspondente
// Parametro		: fld objeto do campo
// Retorno 			: nao tem
//********************************************************************	
function trocaCorLabel(fld,style) {
 var campo = document.getElementById(fld.name+"_label");
 if (campo != null) {
   //Não está funcionando, o style por isso está fixo a cor. Verificar o por que em outro momento 
   //campo.className = ".form_label_obrigatorio";
   campo.style.color = style;
 }
}

//********************************************************************
// Função    		: validaOnClickImg
// Objetivo  		: Valida campos por grupo
// Parametro		: formulario, actione e grupo
// Retorno 			: nao tem
//********************************************************************	
function validaOnClickImg(formulario, action, grupo){
	
	blValidarForm = 'grupoFalse'
	var validacao = eval("mandatoryValidator"+grupo);
	var tmpForm = eval("document.forms['"+formulario+"']");
	
	var tmpMensagem = validacao.validate();

	if (tmpMensagem != true && tmpMensagem != false ) {
		mensagemObrigatorio = mensagemObrigatorio + tmpMensagem;
	}
	if ( trimJS(mensagemObrigatorio).length == 0) {
		btnPesquisarGrid(formulario, action);
		return;
	}

	definirMensagem(mensagemObrigatorio);
	mensagemObrigatorio = '';
	return;
}




//********************************************************************
// Função    		: abrirMenu
// Objetivo  		: Abrir menu e mostrar na tela caminho 
// Parametro		: caminho url para abri
//                  : id id do no
// Retorno 			: nao tem
//********************************************************************	
function abrirMenu(caminho, id) {
	try	{
		var obj = webFXTreeHandler.all[id];
		var textoAtual = obj.text;
		var labelAba = textoAtual; 
		var nivelSuperior = obj ;
		while (nivelSuperior.parentNode) {
			nivelSuperior = nivelSuperior.parentNode;
			if(labelAba == 'Manter'){
				labelAba = nivelSuperior.text;
			}
			textoAtual = nivelSuperior.text + " > " + textoAtual;
		}
		var idTab = parent.areaAplicacao.getIdFrameAtivo();
		parent.areaAplicacao.substituirAbaAtualDevMode(caminho + "?colmeiaCaminhoMenu=" + textoAtual + "&abaAtual=" + idTab, labelAba, idTab);
	}catch(e){
		setTimeout(function() { abrirMenu(caminho, id); },1000);
	}
}

//********************************************************************
//Função    		: abrirMenuSentinela
//Objetivo  		: Abrir menu e mostrar na tela caminho 
//Parametro		: caminho url para abri
//               : id id do no
//Retorno 			: nao tem
//********************************************************************	
function abrirMenuSentinela(url, caminhoMenu, colmeiaLabelAba) {
	try{
		var idTab = parent.areaAplicacao.getIdFrameAtivo();
		parent.areaAplicacao.document.getElementById(idTab).contentWindow.document.forms[0].colmeiaCaminho.value=url;
		parent.areaAplicacao.document.getElementById(idTab).contentWindow.document.forms[0].colmeiaCaminhoMenu.value=caminhoMenu;
		parent.areaAplicacao.document.getElementById(idTab).contentWindow.document.forms[0].colmeiaLabelAba.value=colmeiaLabelAba;
		if ( url!= "0" ) {
			botaoTrocaTela(idTab);
			
		}
	}catch(e){
		try{
			var idTab = parent.parent.areaAplicacao.getIdFrameAtivo();
			parent.parent.areaAplicacao.document.getElementById(idTab).contentWindow.document.forms[0].colmeiaCaminho.value=url;
			parent.parent.areaAplicacao.document.getElementById(idTab).contentWindow.document.forms[0].colmeiaCaminhoMenu.value=caminhoMenu;
			parent.parent.areaAplicacao.document.getElementById(idTab).contentWindow.document.forms[0].colmeiaLabelAba.value=colmeiaLabelAba;
			if ( url!= "0" ) {
				botaoTrocaTela(idTab);
			}
		}catch(e){
			setTimeout(function() { abrirMenuSentinela(url, caminhoMenu, colmeiaLabelAba); },1000);
		}
	}
}

//********************************************************************
//Função    		: abrirMenuEmNovaAba
//Objetivo  		: Abrir menu em nova aba.
//Parametro		: url, caminhoMenu, colmeiaLabelAba
//Retorno 			: nao tem
//*******************************************
function abrirMenuEmNovaAba(url, caminhoMenu, colmeiaLabelAba) {
	try{
		parent.parent.parent.areaAplicacao.adicionaAba(url, colmeiaLabelAba);
	}catch(e){
			setTimeout(function() { abrirMenuEmNovaAba(url, caminhoMenu, colmeiaLabelAba); },1000);
	}
}


function getMensagem(msg) {
   var tmpMsg = (replaceAll (msg,"&#034;","\""));
       tmpMsg = (replaceAll (tmpMsg,"&gt;",">"));
   var aMsg = tmpMsg.split(";");
   var nMsg = '';
   for(var _i=0; aMsg.length >_i; _i++) {
     nMsg += "&nbsp;"+aMsg[_i] + "<br>";
   }
return nMsg;   



}

function replaceAll(string, token, newtoken) {
	while (string.indexOf(token) != -1) {
 		string = string.replace(token, newtoken);
	}
	return string;
}

function executaWordWrap(i) {
    var larg_total,larg_carac,quant_quebra,pos_quebra;
    var elementos,quem,caracs, texto, display_orig;

    elementos = document.getElementsByTagName("p")

    quem = elementos[i];

    // conteudo dos elementos, fazendo um replace de " " por Ø (não sei oque é)
    quem.innerHTML = String(quem.innerHTML).replace(/ /g,"Ø")
            
    // copia o conteudo alterado para texto
    texto = String(quem.innerHTML)
            
    // redefine o conteudo da tag com a classe word-wrap
    quem.innerHTML = " "
            
    // style do display do obejto
    display_orig = quem.style.display;
            
    // altera para block o display do objeto
    quem.style.display="block";
            
    // pega o tamanho disponivel do objeto quando vazio
    larg_oficial = quem.offsetWidth;
            
    // ?
    if(!document.all) quem.style.display="table";
            
    // aloca novamente o conteudo para o obejto
    quem.innerHTML = texto;
            
    // pega a largura total do objeto com conteudo (se a palavra for grande o tamanho muda, por isso ele pega o tamanho duas vezes)
    larg_total = quem.offsetWidth;
            
    // quando começa a substring
    pos_quebra = 0;
            
    // tamanho de caracteres do objeto
    caracs = texto.length;
            
    // replace no Ø por " ";
    texto = texto.replace(/Ø/g," ");
            
    // largura de caracteres = largura do objeto com conteudo por caracteres do texto
    larg_carac = larg_total / caracs
            
    // se a largura total (com conteudo no objeto) for maior que a largura oficial (sem conteudo)
    if(larg_total>larg_oficial){
            
	    // quantas vezes vai quebrar a string (largura oficial dividido pela largura de carcteres
	    quant_quebra = parseInt(larg_oficial/larg_carac);
	                
	    //quantidade de quebras menos a quantidade de quabras dividido por 6 (?)
	    quant_quebra = quant_quebra - (parseInt(quant_quebra/8)); //quanto menor o num, maior a garantia;
	                
	    if (texto.search(" ") >= 0) {
	       	quem.innerHTML = texto;
	    } else if (texto.search("-") >=0 && texto.search(" ") < 0) {
	        quem.innerHTML = texto.replace("-","- ");
	    } else if (texto.search("/") >=0 && texto.search(" ") < 0) {
	        quem.innerHTML = texto;
	    } else if (texto.search(".") >=0 && texto.search(".") < 0) {
		    quem.innerHTML = texto.replace(".",". ");
	    } else {
	        quem.innerHTML = "";
	        while (pos_quebra <=caracs) {
	            quem.innerHTML = quem.innerHTML + texto.substring(pos_quebra,pos_quebra + 10) + " ";
	            pos_quebra = pos_quebra + 10;
	        }
	    }
    }else{
        quem.innerHTML = texto;
    }//end if do larg_total>larg_oficial
    quem.style.display = display_orig;
}

function getLinhaElemento(offsetTrail) {
	var posicao = 0;	
	while (offsetTrail) {
        posicao += offsetTrail.offsetTop;
	    offsetTrail = offsetTrail.offsetParent;
	}
	return posicao;
}

function wordWrap(){
/******
* wordWrap - Efetua quebra em palavras que não cabem na largura
*            de seu elemento pai (até que chegue o CSS3)
* Use a vontade mas coloque meu nome nos créditos. Tenha ética.
* Dúvidas, me mande um email.
* Versão: 1.0 - 26/04/2006
* Autor: Micox - Náiron José C. Guimarães - micoxjcg@yahoo.com.br
* Uso: chame a função no onload do body.
*      coloque a classe "word-wrap" nos parágrafos que quiser a quebra
*******/
    var larg_total,larg_carac,quant_quebra,pos_quebra;
    var elementos,quem, caracs, texto, display_orig;
    
    if (document.getElementById("acaoPesquisa").value == "true") {
		var linhaGrid = getLinhaElemento(document.getElementById('list_tabela'));
		if (linhaGrid > 0) {
			document.documentElement.scrollTop = linhaGrid;
			document.documentElement.focus();
		}
	}
    
    elementos = document.getElementsByTagName("p")
    
    for(var i=0; i<elementos.length;i++){
        if(elementos[i].className=="word-wrap"){
        	// elementos que tem a classe
			setTimeout('executaWordWrap('+i+')', 1);            
			            
        }//end if do word wrap
    }//end for loop dos elementos
}


//********************************************************************
// Função    		: maxLengthTextArea
// Objetivo  		: Limitar quantidade de caractes no campo textArea 
// Parametro		: obj
// Retorno 			: nao tem
//********************************************************************	
function maxLengthTextArea(obj){
	var mlength=obj.getAttribute? parseInt(obj.getAttribute("maxlength")) : ""
	if (obj.getAttribute && obj.value.length>mlength)
		obj.value=obj.value.substring(0,mlength)
}

//********************************************************************
// Função    		: validaMaxLengthMoeda
// Objetivo  		: Limitar quantidade de caractes no campo text do tipo moeda 
// Parametro		: obj, casasInteiras, casasDecimais
// Retorno 			: nao tem
//********************************************************************	
function validaMaxLengthMoeda(obj, casasInteiras, casasDecimais){
	var mlength= parseInt(casasInteiras) + parseInt(casasDecimais);
	var valor = obj.value.replace(",","");
	valor = removerPonto(valor);  
	if (valor.length > mlength) {
		obj.value= valor.substring(0,mlength)
	}	
}


//********************************************************************
// Função    		: controleGrupoNotNull
// Objetivo  		: Definir um campo em comum para ser validado
// Parametro		: formName Nome do Form
// Parametro		: campo campos que fazem parte do grupo
// Retorno 			: nao tem
//********************************************************************	
function controleGrupoNotNull(formName, campo) {
    if ( campo == "") { 
		return;
	}
	var campos = campo.split("__");
	var valor = "";
	for ( x = 1; x < campos.length; x ++ ) {
			var tmp = eval ('document.' + formName + '.' + campos[x] );
			if(tmp.constructor.name == 'RadioNodeList'){
                for (var i = tmp.length - 1; i >= 0; i--) {
                    if(tmp[i].value != "" ) {
                        valor = valor + tmp[i].value;
                        break
                    }
                };
            }
            else if (tmp.value == "") {
				valor="";
				break;
			} 
            else {
    			valor = valor + tmp.value;
            }
	}
	var tmp = eval ('document.' + formName + '.' + campo );
	tmp.value=valor;
}

//********************************************************************
// Função    		: controleGrupoNotNullTipoValidacaoGrupo
// Objetivo  		: Definir um campo em comum para ser validado. validado como ou
// Parametro		: formName Nome do Form
// Parametro		: campo campos que fazem parte do grupo
// Retorno 			: nao tem
//********************************************************************	
function controleGrupoNotNullTipoValidacaoGrupo(formName, campo) {
	if ( campo == "") { 
		return;
	}
	var campos = campo.split("__");
	var valor = "";
	for ( x = 1; x < campos.length; x ++ ) {
			var tmp = document.getElementsByName(campos[x]);
			for ( y = 0; y < tmp.length; y ++ ){
					if( (tmp[y].type == "checkbox" && tmp[y].checked == true)
					|| (tmp[y].type == "radio" && tmp[y].checked == true) 
					|| (tmp[y].type == "text" && tmp[y].value != '') ) {
						valor = tmp[y].value;
						break;
					}
			}
	}
	var tmp = eval ('document.' + formName + '.' + campo );
	tmp.value=valor;
}

//********************************************************************
// Função    		: controleRadioGrid
// Objetivo  		: Responsável em controlar o valor dos campos radio da grid
// Parametro		: Objeto que está sendo utilizado
// Parametro		: Id do objeto que vai receber o valor
// Retorno 			: nao tem
//********************************************************************	
function controleRadioGrid (obj, id) {
	var objHidden = document.getElementById(id);
	objHidden.value = obj.value;
}

//********************************************************************
// Função    		: botaoTrocaTela
// Objetivo  		: Responsável em controlar saida de tela
// Retorno 			: nao tem
//********************************************************************	
function botaoTrocaTela(idTab){
	try {
		var tmpForm = parent.areaAplicacao.document.getElementById(idTab).contentWindow.document.forms[0];
		if (tmpForm.alteracaoDados.value == "" ) {
			simTrocaTela(idTab);
		} else {
			var exc = new ObjExcecao("","","","","","",tmpForm.mensagemConfirmacaoTrocaTela.value,"");
			var path = parent.areaAplicacao.document.getElementById(idTab).contentWindow.document.location.href;
	
			if (tmpForm.validarAoSairTela.value == "true") {
				if(path.indexOf("meio_inicial.jsp") == -1){
				  	parent.areaAplicacao.document.getElementById(idTab).contentWindow.abrePopupConfirm('paginas/colmeiaMensagen.jsp?',"",null,exc,"simTrocaTela('"+idTab+"')",'naoTrocaTela');
				}else{
				  	parent.areaAplicacao.document.getElementById(idTab).contentWindow.abrePopupConfirm('colmeiaMensagen.jsp?',"",null,exc,"simTrocaTela('"+idTab+"')",'naoTrocaTela');
				}
			} else {
				simTrocaTela(idTab);
			}
		}
	} catch (e) {
		var tmpForm = parent.parent.areaAplicacao.document.getElementById(idTab).contentWindow.document.forms[0];
		if (tmpForm.alteracaoDados.value == "" ) {
			simTrocaTela(idTab);
		} else {
			var exc = new ObjExcecao("","","","","","",tmpForm.mensagemConfirmacaoTrocaTela.value,"");
			var path = parent.parent.areaAplicacao.document.getElementById(idTab).contentWindow.document.location.href;
	
			if (tmpForm.validarAoSairTela.value == "true") {
				if(path.indexOf("meio_inicial.jsp") == -1){
				  	parent.parent.areaAplicacao.document.getElementById(idTab).contentWindow.abrePopupConfirm('paginas/colmeiaMensagen.jsp?',"",null,exc,"simTrocaTela('"+idTab+"')",'naoTrocaTela');
				}else{
				  	parent.parent.areaAplicacao.document.getElementById(idTab).contentWindow.abrePopupConfirm('colmeiaMensagen.jsp?',"",null,exc,"simTrocaTela('"+idTab+"')",'naoTrocaTela');
				}
			} else {
				simTrocaTela(idTab);
			}
		}
	}
}

//********************************************************************
// Função    		: naoTrocaTela
// Objetivo  		: Opção de não sair da tela
// Retorno 			: nao tem
//********************************************************************
function naoTrocaTela(){
}

//********************************************************************
// Função    		: simTrocaTela
// Objetivo  		: Opção de sim do sair da tela
// Retorno 			: nao tem
//********************************************************************
function simTrocaTela(idTab){
	try {
		var tmpForm = parent.areaAplicacao.document.getElementById(idTab).contentWindow.document.forms[0];
		var caminho = tmpForm.colmeiaCaminho.value + "?colmeiaCaminhoMenu=" + escape(tmpForm.colmeiaCaminhoMenu.value)+"&abaAtual="+idTab;
		parent.areaAplicacao.substituirAbaAtual(caminho, tmpForm.colmeiaLabelAba.value, idTab);
	} catch (ex) {
		var tmpForm = document.forms[0];
		var caminho = tmpForm.colmeiaCaminho.value + "?colmeiaCaminhoMenu=" + escape(tmpForm.colmeiaCaminhoMenu.value)+"&abaAtual="+idTab;
		parent.parent.areaAplicacao.substituirAbaAtual(caminho, tmpForm.colmeiaLabelAba.value, idTab);
	}
}


//********************************************************************
// Função    		: botaoSairSistema
// Objetivo  		: Responsável em controlar saida do sistema
// Retorno 			: nao tem
//********************************************************************	
function botaoSairSistema(){
	var idTab = parent.areaAplicacao.getIdFrameAtivo();
	var tmpForm = parent.areaAplicacao.document.getElementById(idTab).contentWindow.document.forms[0];
	var exc = new ObjExcecao("","","","","","",tmpForm.mensagemConfirmacaoSairSistema.value,"");
	var path = parent.areaAplicacao.document.getElementById(idTab).contentWindow.document.location.href;
	if(path.indexOf("meio_inicial.jsp") == -1){
	  	parent.areaAplicacao.document.getElementById(idTab).contentWindow.abrePopupConfirm('paginas/colmeiaMensagen.jsp',"",null,exc, 'botaoSimSair','botaoNaoSair');
	}else{
		parent.areaAplicacao.document.getElementById(idTab).contentWindow.abrePopupConfirm('colmeiaMensagen.jsp',"",null,exc, 'botaoSimSair','botaoNaoSair');
	}
}

//********************************************************************
// Função    		: botaoNaoSair
// Objetivo  		: Responsável em controlar saida do sistema
// Retorno 			: nao tem
//********************************************************************	
function botaoNaoSair(){
}

//********************************************************************
// Função    		: botaoSimSair
// Objetivo  		: Responsável em controlar saida do sistema
// Retorno 			: nao tem
//********************************************************************	
function botaoSimSair(){
	var tmpForm = document.forms[0];
	divProcessando();
	top.document.getElementById("frameAreaAplicacao").src="logout.do";
}

//********************************************************************
// Função    		: simFechaAba
// Objetivo  		: Responsável em controlar o fechamento de uma aba
// Retorno 			: nao tem
//********************************************************************
function simFechaAba(id){
	parent.simFechaAba(id);
}

//********************************************************************
// Função    		: naoFechaAba
// Objetivo  		: Responsável em controlar o fechamento de uma aba
// Retorno 			: nao tem
//********************************************************************
function naoFechaAba(id){
	parent.naoFechaAba(id)
}

//********************************************************************
// Função    		: abrirPopUpComplemento
// Objetivo  		: Responsável em abrir a popup de complemento
// Parametro		: maxLength tamanho maximo do complemento
// Parametro		: scriptRetorno Nome do script que vai o texto de complemento
// Parametro		: nomeFormOrigem  Nome do form da tela que vai usar o componente
// Parametro		: bundle bundle 
// Parametro		: titulo key do titulo
// Retorno 			: nao tem
//
// Exemplo:  abrirPopUpComplemento(255,'textoRetorno','meuActionForm','financeiro','financeiro.titulo')
//
//********************************************************************	
function abrirPopUpComplemento(maxLength, scriptRetorno, nomeFormOrigem, bundle, titulo, valorCampo, valorCancelar) {
	abrePopup('exibir_pop_up_complemento.do?maxlength='+maxLength+'&bundle=' +  bundle 
			+ '&scriptRetorno='+scriptRetorno
			+ '&nomeFormOrigem='+nomeFormOrigem 
			+ '&titulo=' + escape(titulo) 
			+ "&textoComplemento=" + valorCampo 
			+ "&valorCancelar=" 
			+ escape(valorCancelar != null && valorCancelar != "" ? valorCancelar : "")
			,"","","","");
	document.getElementById("colmeiaTop").focus();
}

function abrirPopUpMensagemOpcoes(scriptRetorno, nomeFormOrigem, titulo, mensagem, parametro, bundle, valorBotao, descricaoBotao, icone, valorCancelar) {
	abrePopup('exibir_pop_up_mensagem_opcoes.do?scriptRetorno=' + scriptRetorno 
			+ '&nomeFormOrigem=' + nomeFormOrigem 
			+ '&titulo=' + escape(titulo) 
			+ '&mensagem=' + escape(mensagem) 
			+ '&parametro=' + escape(parametro) 
			+ '&bundle=' + escape(bundle) 
			+ '&valorBotao=' + escape(valorBotao) 
			+ '&descricaoBotao=' + escape(descricaoBotao) 
			+ '&icone=' + escape(icone) 
			+ "&valorCancelar=" + escape(valorCancelar != null && valorCancelar != "" ? valorCancelar : "")
			, null, null, null);
	document.getElementById("colmeiaTop").focus();
}

function controlaFocoGrid(campoFocusGrid,ultimo,form,idLinha){
	var tmpForm = document.forms[form];
	tmpForm.campoFocusGrid.value = campoFocusGrid;
	if(ultimo){
		var tmp = 0;
		tmp = tmpForm.itemFocusGrid.value != '' && tmpForm.itemFocusGrid.value != null && tmpForm.itemFocusGrid.value != NaN && tmpForm.itemFocusGrid.value != 'undefined'? parseInt(tmpForm.itemFocusGrid.value) + 1 : 1;
		tmpForm.itemFocusGrid.value = tmp;
	}else{
		tmpForm.itemFocusGrid.value = idLinha;
	}
}

function setaFocoGrid(form,idLinha){
	var tmpForm = document.forms[form];
	tmpForm.itemFocusGrid.value = idLinha;
}

//********************************************************************
// Função    		: validar DV Modulo 11
// Objetivo  		: Responsavel em validar o digito verificador utilizando o modulo 11
// Parametro		: numero inteiro a ser calculado
// Retorno 			: valor inteiro do calculo
//********************************************************************
function calcularDVModulo11(valor)
{
		var produto = 9;
		var soma = 0;
		

	for ( i=valor.length - 1;  i >= 0;  i--) {
		
		if (produto < 2)
			  produto = 9;
			
			soma = soma +  valor.charAt(i) * produto;
			produto--;
	}
		if (soma % 11 == 10)
			return "0";
		else
			return "" + (soma % 11);
	
}

//********************************************************************
// Função    		: validar DV Modulo 10
// Objetivo  		: Responsavel em validar o digito verificador utilizando o modulo 10
// Parametro		: numero inteiro a ser calculado
// Retorno 			: valor inteiro do calculo
//********************************************************************
function calcularDVModulo10(numero) {
	var i;
  	var mult = 2;
  	var soma = 0;
  	var s = "";
 
  	for (i = numero.length-1; i >= 0; i--) {
    	s = (mult * parseInt(numero.charAt(i))) + s;
    	if (--mult < 1) {
      		mult = 2;
        }
    }
  	for (i=0; i < s.length; i++) {
    	soma = soma + parseInt(s.charAt(i));
    }
  	soma = soma % 10;
  	
  	if (soma != 0) {
    	soma = 10 - soma;
    }
    
  	return soma.toString();
}


   var contadorIdentificarMaquina = 0;
   function identificarMaquina(nomeApplet,tentativas,actionDestinoOk,tempo) {
   		for (var i  = 0 ; i <= tentativas; i++) {
   			try {
	   			if (document.applets[nomeApplet]  ) {
					var formulario = document.forms[0];
					var tmp = document.applets[nomeApplet].getIdentificadorMaquina();
					if (tmp != "") {
						formulario.identificador.value = tmp; 
						formulario.action=actionDestinoOk; 
						formulario.submit();
					}
				}
   			} catch (err) {
   				alert("Não foi possivel executar o applet!");
   				return;
   			}
			
  		}
  		contadorIdentificarMaquina = contadorIdentificarMaquina + 1;
  		document.forms[0].conta.value = contador;
  		if ( contador > tentativas ) {
		   	alert("Não foi possivel carregar applet para execução do programa!");  
  		} else {
  				setTimeout("identificarMaquina(nomeApplet,tentativas,actionDestinoOk)",tempo);
  		}
   }
   
   
   	   var contadorAppletAtivo = 0;
	   var appletAtivo = false;
	   var appletErroPeriferico = false;
	
	
	
	   function testeAppletAtivo(nomeApplet,tentativas,tempo) {
	   		
   			try {
	   			if (document.applets[nomeApplet]  ) {

	   				var dv = document.getElementById("divColmeiaApplet");
		        	dv.style.display = "";
					var resul = document.applets['colmeiaApplet'].getAppletAtivo();
					//helder
					if (resul == "-2" ) {
						appletErroPeriferico = true;
						contadorAppletAtivo = tentativas +1;
												var objDiv = document.getElementById("divColmeiaAppletCarregando");
    					objDiv.innerHTML = resul;
						
						var tmpForm = eval("document.forms[0]");
   						tmpForm.action=caminhoAppletInstalacao;
   						tmpForm.submit();
					} else if  ( resul != "" ) {
					
						contadorAppletAtivo = tentativas +1;
						var objDiv = document.getElementById("divColmeiaAppletCarregando");
    					objDiv.innerHTML = resul;
						return;
					}

				    var dv = document.getElementById("divColmeiaAppletCarregando");
			        dv.style.display = "none";

				    var dv2 = document.getElementById("divColmeiaAppletErroPeriferico");
			        dv1.style.display = "none";

				
				    var dv1 = document.getElementById("divColmeiaAppletErro");
			        dv1.style.display = "none";
	   				appletAtivo = true;
	   				contadorAppletAtivo = tentativas + 1;
	   				
				}
   			} catch (err) {
   				if ( contadorAppletAtivo > tentativas ) {
   				
   						if ( appletErroPeriferico == true ) {
					    	var dv = document.getElementById("divColmeiaAppletCarregando");
				        	dv.style.display = "none";
						
					    	var dv1 = document.getElementById("divColmeiaAppletErro");
				        	dv1.style.display = "none";
	
					    	var dv2 = document.getElementById("divColmeiaAppletErroPeriferico");
				        	dv2.style.display = "";
			
					    	var dv3 = document.getElementById("divColmeiaApplet");
				        	dv3.style.display = "none";
	
   						} else {
						    var dv = document.getElementById("divColmeiaAppletCarregando");
			        		dv.style.display = "none";
				
						    var dv1 = document.getElementById("divColmeiaAppletErro");
				        	dv1.style.display = "";
			
					    	var dv3 = document.getElementById("divColmeiaApplet");
				        	dv3.style.display = "none";
		
					    	var dv2 = document.getElementById("divColmeiaAppletErroPeriferico");
				        	dv2.style.display = "none";

   						}
	   				return;
   				} else {
			    
			    setTimeout("testeAppletAtivo('colmeiaApplet',2,5000)",tempo);
   				}
   			}
   }

	function autenticar(){
		try {
			if ( appletAtivo == false ) {
			
	   			alert("Não foi possivel executar o applet!");
				return;
			}
			var tmp = document.applets['colmeiaApplet'].getAutenticar("BOLETO PAGO COM SUCESSO");
			alert(tmp);
		}catch (err) {
   				alert("Erro ao autenticar!");
   				alert(err);
		}
	}

   function iniciarTesteApplet() {
	
    var dv = document.getElementById("divColmeiaAppletCarregando");
    dv.style.display = "";
	
    var dv1 = document.getElementById("divColmeiaAppletErro");
    dv1.style.display = "none";

	var dv3 = document.getElementById("divColmeiaApplet");
   	dv3.style.display = "none";
	
    testeAppletAtivo('colmeiaApplet',2,5000);
   }

//********************************************************************
// Função    		: validaTextoContaContabil
// Objetivo  		: Validar se o texto informado est? na faixa de letras permitidas
// Par?metro		: STR letra digitada
// Retorno 			: True se for estiver na faixa, False se não estiver na faixa
//********************************************************************
function validaTextoContaContabil (strTexto,mascara,tamanho) {

    if ( (trimJS(strTexto)).length==0){
		return true;
    }

    if ( (trimJS(strTexto)).length != tamanho){
		return false;
    }

    var i;

    for (i = 0; i < strTexto.length; i++)
    {   
        var c = strTexto.charAt(i);
        c = new String(c).toUpperCase();
        if (validaContaContabil(c) == false){ 
		  return false;
		}
    }
	
	
	if(mascara.indexOf("-") != -1){
		var somaTotal = 0;
		var somaDigitos = 0;
		var contPeso = 1;
		var contaContabilTemp = strTexto.substring(0,strTexto.length-1);
		for (j = contaContabilTemp.length - 1; j > -1; j--){
		        if(contPeso == 3){
					somaTotal = somaTotal + contaContabilTemp[j]*1;
					contPeso = 0;
				}
				if(contPeso == 2){
					somaTotal = somaTotal + contaContabilTemp[j]*7;
					contPeso = 3;
				}
				if(contPeso == 1){
					somaTotal = somaTotal + contaContabilTemp[j]*3;
					contPeso = 2;
				}
				if(contPeso == 0){
					contPeso++;
				}
		}
		
		
		var digito = strTexto.substring(strTexto.length-1, strTexto.length);
			
		if(somaTotal < 10){
			if((10 - somaTotal) != digito){
				return false;
			}
		}else{
			if(((10 - (somaTotal % 10)) == 10 && digito == 0)){
				return true;
			}
			if(((10 - (somaTotal % 10)) != digito)){
				return false;
			}
		}
	}
	
    return true;
}

//********************************************************************
// Função    		: validaContaContabil (String)
// Objetivo  		: Verifica se um conjunto de caracteres s?o  caracteres v?lidos para a conta contabil.
// Par?metro 		: Conjunto de caracteres.
// Retorno   		: True se o conjunto for de caracteres conta contabil, False se o conjunto não for . 
// Pr?-Requisito 	: nenhum 
//********************************************************************  
function validaContaContabil (str) {
	return CONTA_CONTABIL.indexOf(str)>=0;
}

//********************************************************************
// Função    		: formatContaContabil
// Objetivo  		: Formata a string fornecida como CONTA CONTABIL
// Parametros 		: event: evento javascript
// Parametros 		: telefone String fornecida para ser formatada; 
//********************************************************************

function formataContaContabil(contaContabil, mascara)
{
	if(contaContabil.length == 0){
		return "";
	}
	
	var mascaraTemp = mascara;
	var contaContabilTemp = contaContabil;
	var digito = false;
	var tamanhoDigito = 0;
	
	if(mascara.indexOf("-") != -1){
		digito = true;
		mascaraTemp = mascara.substring(0,mascara.indexOf("-"));
		tamanhoDigito = (mascara.substring(mascara.indexOf("-")+1, mascara.length)).length;
	}
	
	var posicao = mascaraTemp.split(".");
	
	if(digito){
		contaContabilTemp = contaContabil.substring(0,contaContabil.length-tamanhoDigito);
	}
		
	var reContaContabil = "/";
	
	for (j = 0; j < posicao.length; j++){
        reContaContabil = reContaContabil + "(\\d{" + posicao[j].length +"})";
	}
	reContaContabil = reContaContabil + "$/";
	
	var contMascara = 0;
	var posicaoPonto = new Array();
	
	for (i = 0; i < mascaraTemp.length; i++){   
        var c = mascaraTemp.charAt(i);
		if(c == '.'){
			posicaoPonto[contMascara] = i;
			contMascara++;
		}
	}
	
	var reMascara = "$1";
	
	for (i = 0; i < posicaoPonto.length; i++){
		var valor = i + 2;   
        reMascara = reMascara +".$"+valor;
	}
	
	var conta = contaContabilTemp.replace(eval(reContaContabil), reMascara);
	
	if(digito){
		conta = conta +"-"+contaContabil.substring(contaContabil.length-tamanhoDigito,contaContabil.length);
	}
	
	return conta;
} 

//********************************************************************
// Função    		: validaTextoNumeroContrato
// Objetivo  		: Validar o número do contrato bem como o DV em modulo 10.
// Parametros 		: event: evento javascript
// Parametros 		: numeroContrato String fornecida para ser formatada e a mascara do contrato; 
//********************************************************************
function validaTextoNumeroContrato(strTexto,tamanho) {
	
	if ( (trimJS(strTexto)).length==0){
		return true;
    }

    if ( (trimJS(strTexto)).length != tamanho){
		return false;
    }
    
    for (i = 0; i < strTexto.length; i++) {   
        var c = strTexto.charAt(i);        
        if (validaNumeroContrato(c) == false){ 
		  return false;
		}
    }
            
    var numeroContratoTemp = strTexto.substring(0, strTexto.length-1);
	var digito = strTexto.substring(strTexto.length-1, strTexto.length);	
	var digitoCalculado = calcularDVModulo10(numeroContratoTemp);
				
	if(digito != digitoCalculado)
		return false;
		              	
    return true;
}

//********************************************************************
// Função    		: validaNumeroContrato (String)
// Objetivo  		: Verifica se um conjunto de caracteres s?o  caracteres v?lidos para o número do contrato.
// Par?metro 		: Conjunto de caracteres.
// Retorno   		: True se o conjunto for de caracteres de numero de contrato, False se o conjunto não for . 
// Pr?-Requisito 	: nenhum 
//********************************************************************  
function validaNumeroContrato (str) {
	return NUMERO_CONTRATO.indexOf(str)>=0;
}

//********************************************************************
// Função    		: formataNumeroContrato
// Objetivo  		: Formata a string fornecida como NUMERO CONTRATO
// Parametros 		: event: evento javascript
// Parametros 		: numeroContrato String fornecida para ser formatada e a mascara do contrato; 
//********************************************************************
function formataNumeroContrato(numeroContrato, mascara) {
	if(numeroContrato.length == 0){
		return "";
	}
	
	var mascaraTemp = mascara;
	var numeroContratoTemp = numeroContrato;	
	
	regex = /(\d{7})(\d{4})(\d{6})(\d{1})$/;
	var reMascara = "$1-$2.$3-$4";
			
	var numeroContrato = numeroContratoTemp.replace(regex, reMascara);
			
	return numeroContrato;
}

// Método que soma dos valores no formato moeda com 2 casas decimais ex.: 1.234.567,89
function somarMoedas(valor1, valor2){
    var soma = "";
 	valor1 = removerPonto(valor1);
	valor2 = removerPonto(valor2);
    var valorInteiro1 = valor1.substring(0,valor1.length - 3); 
    var valorInteiro2 = valor2.substring(0,valor2.length - 3);
    var valorDecimal1 = valor1.substring(valor1.length - 2, valor1.length);
    var valorDecimal2 = valor2.substring(valor2.length - 2, valor2.length);
    var somaInteiros = parseInt(valorInteiro1) + parseInt(valorInteiro2);
    var somaDecimais = parseInt(valorDecimal1) + parseInt(valorDecimal2);
    
    if(somaDecimais > 99) {
    	somaInteiros += 1;
    	somaDecimais -= 100;
    	if(somaDecimais < 10) {
    		somaDecimais = "0" + somaDecimais;
    	}
    } else if(somaDecimais < 10) {
    	somaDecimais = "0" + somaDecimais;
    }
    
    soma += somaInteiros + "," + somaDecimais;
 
    return incluirPonto(soma);
}

// Método que remove os pontos '.' do valor passado no formato moeda com 2 ex.: 1.234.567,89
function removerPonto(valor){
	var resultado = "";
	
	for(i = 0; i < valor.length; i++) {   
        var c = valor.charAt(i);
	    if (c != '.') { 
		  resultado += c;
		}
    }
	
	return resultado;
}

// Método que inclui os pontos '.' do valor passado no formato moeda com 2 ex.: 1.234.567,89
function incluirPonto(valor){
	var resultado = "";
	var inteiro = valor.substring(0,valor.length - 3); 
    var decimal = valor.substring(valor.length - 2, valor.length);
	var count = 0;
	var ponto = false;
			
	for (i = inteiro.length; i >= 0; i--) {
		if (ponto) {
			resultado =  '.' + resultado ;
			ponto = false;
		}
		if (count != 0 && count % 3 == 0 ) {
			count = 0;
			ponto = true;
		}
		resultado = inteiro.charAt(i) + resultado;
		count = count + 1;
	}
	
	return resultado + "," + decimal;
}

//********************************************************************
// Função    		: validaCodigoCooperativa (String)
// Objetivo  		: Verifica se um conjunto de caracteres sao caracteres validos para o código da cooperativa.
// Parametro 		: Conjunto de caracteres.
// Retorno   		: True se o conjunto for de caracteres de código da cooperativa, False se o conjunto não for . 
// Pre-Requisito 	: nenhum 
//********************************************************************  
function validaCodigoCooperativa (str) {
	for (i = 0; i < str.length; i++)    {   
        var caracter = str.charAt(i);
	    if (CODIGO_COOPERATIVA.indexOf(caracter)<0) { 
		  return false;
		}
    }
    return true;
}

//********************************************************************
//Função           : validaArquivoUpload
//Objetivo         : Validar se o caractere do nome do arquivo contem caracteres válidos 
//Par?metro        : strTexto caractere do nome do arquivo
//Retorno          : True se for estiver na faixa, False se não estiver na faixa
//********************************************************************
function validaArquivoUpload(strTexto){
    return ARQUIVO_UPLOAD.indexOf(str)>=0;
}

//********************************************************************
//Função           : validaTextoArquivoUpload
//Objetivo         : Validar se o nome do arquivo contem caracteres válidos 
//Par?metro        : strTexto nome do arquivo
//Retorno          : True se for estiver na faixa, False se não estiver na faixa
//********************************************************************
function validaTextoArquivoUpload(strTexto){
    for (i = 0; i < strTexto.length; i++)    {   
        var caractere = strTexto.charAt(i);
        if (ARQUIVO_UPLOAD.indexOf(caractere)<0) { 
            return false;
        }
    }
 return true;
}

function formatarMoeda(valor){
	var retorno = (valor + "").replace(".", ",");
	
	if(retorno.search(",") == "-1"){
		retorno += ",00";
	} else {
		var virgula = retorno.length - 2;
		
		if(retorno.charAt(virgula) == ","){
			retorno += "0";		
		}
	}
	
	if (retorno.substring(0,1) == '-') {
		retorno = incluirPonto(retorno.substring(1,retorno.length));
		retorno = '-'+retorno;
	} else {
		retorno = incluirPonto(retorno);
	}
	
	return retorno;
} 

function imprimirComprovante() {
	imprimirImpressora(document.forms[0].ConteudoImpressao.value);
}

function imprimirApplet() {
	imprimirComprovante();
}

function imprimir(frame, idElemento) {
	var path = document.location.href;
	var paginaImprimir = 'imprimir.jsp';
	var caminho = document.location.pathname.split('/');
	
	if (frame == 'ajuda' || path.indexOf("meio_inicial.jsp") != -1 || path.indexOf("menu.jsp") != -1 || path.indexOf("ajuda") != -1) {
		if (path.indexOf("ajuda") != -1) {
			frame = 'ajuda';
			idElemento = '';
		}
	}
	var idFrameAtivo = '';
	try {
		idFrameAtivo = parent.getIdFrameAtivo();
	} catch(e) {
		idFrameAtivo = parent.areaAplicacao.getIdFrameAtivo();
	}
	paginaImprimir = '/'+caminho[1]+'/exibir_impressao_sistema.do?frame='+frame+'&idElemento='+idElemento+'&idTabAtiva='+idFrameAtivo;
	
	window.open(paginaImprimir,'janela', 'width=800, height=600, scrollbars=yes, status=no, toolbar=no, location=no, directories=no, menubar=no, resizable=no, fullscreen=no');
}

function getRootContext(){
    var rootContext = window.parent;
    while(rootContext != rootContext.parent){
      rootContext = rootContext.parent;
    }
    return rootContext;
}

function acaoKeyDownPress(evt) {
	try {
		window.status = '';
		var oEvent = (window.event) ? window.event : evt;
		var nKeyCode = oEvent.keyCode ? oEvent.keyCode : oEvent.which ? oEvent.which : void 0;
		var sChar = String.fromCharCode(nKeyCode).toUpperCase();
		var bCtrlPressed = (oEvent.ctrlKey) ? oEvent.ctrlKey : oEvent.modifiers & 1 > 0;
		var acaoPesquisa = document.getElementById("acaoPesquisa");
		
		if(nKeyCode == '123') {//F12
		 	abrirAtendimentoAssociado();
		} else if (acaoPesquisa != null && acaoPesquisa.value == "true") {
			return navegarGrid(nKeyCode);
		} else if (bCtrlPressed && sChar == 'P') {
		 	imprimir('areaAplicacao','dvcorpo');
			oEvent.returnValue = false;
			oEvent.cancelBubble = true;
			if(document.all) {
				oEvent.keyCode = 0;
			} else {
				oEvent.preventDefault();
				oEvent.stopPropagation();
			}
			return false;
		} else if(nKeyCode == BTN_ESC)  {
            var rootContext = getRootContext();
			var idTab = rootContext.areaAplicacao.getIdFrameAtivo();
			if(rootContext.areaAplicacao.document.getElementById(idTab).contentWindow.popupAberta()){
				fecharPopupAoPressionarEsc();
			} else {
				return false;
			}
		}
	} catch(e) {
		return false;
	}
}

function navegarGrid(nKeyCode) {
		var typeFocused = jQuery(":focus").attr('type');

		if (nKeyCode == SETA_CIMA) {
			moverLinha(true);
			
			return false;
		} else if (nKeyCode == SETA_BAIXO) {
			moverLinha(false);
			
			return false;
		} else if (nKeyCode == SETA_ESQUERDA && typeFocused != 'radio') {
			var anterior = document.getElementById('linkPaginarAnterior');
			if (anterior != null) {
				var href = jQuery("#linkPaginarAnterior").attr('href');
				if (href != '#') {
					eval(anterior.href);
				} else {
					anterior.onclick();
				}
			}
		
			return false;
		} else if (nKeyCode == SETA_DIREITA && typeFocused != 'radio') {
			var proxima = document.getElementById('linkPaginarProxima');
			if (proxima != null) {
				var href = jQuery("#linkPaginarProxima").attr('href');
				if (href != '#') {
					eval(proxima.href);
				} else {
					proxima.onclick();
				}
			}
		
			return false;
		} else if (nKeyCode == BTN_ENTER) {
			var listaTabela = montarListaTabela();
			var conteudo = '';
			
			for (var i = 0; i < listaTabela.length; i++) {
				if (i == linhaTabela) {
					conteudo = listaTabela[linhaTabela].innerHTML;
					break;
				}
			}
		
			eval(extrairSelecionar(conteudo));
		} else if (nKeyCode == BTN_ESC) {
			fecharPopupAoPressionarEsc();
		}
		return true;
}

function fecharPopupAoPressionarEsc() {
	
	fechaPesquisaParent();
	
	var idElemFocus;
	var elemFocus;
	var campoFocus;
	var context;
	
	try{
		campoFocus = parent.document.querySelector('#campoFocus, [name=campoFocus]');
		context = parent.document;
	}catch(e){
		try{
			campoFocus = document.querySelector('#campoFocus, [name=campoFocus]');
			context = document;
		}catch(e){
			console.error(e);
			return;
		}
	}
		
	idElemFocus = campoFocus.value;
	elemFocus = context.getElementById(idElemFocus);
	
	if(elemFocus == null) {		
		try {			
			elemFocus = parent.document.getElementsByName(idElemFocus)[0];
		} catch(e) {}
	}	
	
	if(elemFocus != null) {
		elemFocus.focus();
	} else {
		setFocusPrimeiroCampo(true);
	}	
}

/*
 *	Seta o focus para o primeiro campo visível na tela.
 */
function setFocusPrimeiroCampo(usarParent) {
	try {
		var tam = usarParent ? parent.document.forms[0].elements.length : document.forms[0].elements.length;
		for(var i = 0; i < tam; i++) {
			var element = usarParent ? parent.document.forms[0].elements[i] : document.forms[0].elements[i];
			if(element.type != 'hidden') {
				element.focus();
				break;
			}
		}
	} catch(e) {}
}

function moverLinha(paraCima) {
	var listaTabela = montarListaTabela();
	
	for (var i = 0; i < listaTabela.length; i++) {
		listaTabela[i].style.backgroundColor = '';
	}
			
	if (paraCima) {
			linhaTabela = linhaTabela - 1;
	} else {
			linhaTabela = linhaTabela + 1;
	}			

	for (var i = 0; i < listaTabela.length; i++) {
		try {
			if (listaTabela[linhaTabela].id.indexOf('linhaTabela')!=-1) {
				listaTabela[linhaTabela].style.backgroundColor = '#E4E1C9';

				var linhaGrid = getLinhaElemento(listaTabela[linhaTabela]);
	    		document.documentElement.scrollTop = linhaGrid - 60;
	    		
				break;
			}
		} catch (e) {
			if (paraCima) {
				linhaTabela = listaTabela.length-1;
			} else {
				linhaTabela = 0;
			}
		}
	}
}

function extrairLink(texto) {  	
	var ini = 0;  	
	
	var codigo = '';
	while (ini!=-1) {  		
		ini = texto.indexOf('href=', ini);          		
		if (ini >=0){ 			
			ini = texto.indexOf('"', ini) + 1;             
			var fim = texto.indexOf('"', ini);             
			codigo = codigo + texto.substring(ini,fim);             
		} 	
	} 
	return codigo; 		
}

function extrairSelecionar(texto) {
	var ini = 0;  	
	
	var codigo = '';
	while (ini!=-1) {  		
		ini = texto.indexOf('<td id="actionCampoGrid', ini);          		
		if (ini >=0){ 			
			ini = texto.indexOf('>', ini) + 1;             
			var fim = texto.indexOf('</td>', ini);             
			codigo = codigo + texto.substring(ini,fim);             
		} 	
	} 
	
	texto = codigo;
	codigo = '';

	ini = texto.indexOf('javascript:', ini);
	var fim = texto.indexOf('"', ini);
	codigo = codigo + texto.substring(ini,fim);
	
	return codigo; 		
}

function montarListaTabela() {
	var listaTabela = new Array();
	var contador = 0;
	
	for (var i = 0; i < document.getElementsByTagName('tr').length; i++) {
		if (document.getElementsByTagName('tr')[i].id.indexOf('linhaTabela') != -1) {
			listaTabela[contador] = document.getElementsByTagName('tr')[i];
			contador = contador + 1;
		}
	}
	return listaTabela;
}

function selecionarTodos(nomeCampo, camposDesabilitar, nomeLista) {

	var elements = eval('document.forms[0].'+nomeCampo);
	var selecionado = false;
	var ids = '';
	if (elements.length > 1) {
		for (i = 0; i< elements.length; i++) {
			if (!elements[i].checked) {
				selecionado = true;
				break;
			}
		}
		for (i = 0; i< elements.length; i++) {

				elements[i].checked = selecionado;
			
			if(ids == ''){
				ids = elements[i].value;
			} else {
				ids = ids + '#' + elements[i].value; 
			}
		}
	} else {
		selecionado =  !elements.checked
		elements.checked = selecionado;
		ids = elements.value;
	}
	
	var lstSelecionadaPagAtual = eval('document.forms[0].lstSelecionadaPagAtual'+nomeLista);
	if(typeof lstSelecionadaPagAtual == 'undefined'){ 
		document.getElementById('dvtodoscheckbox').innerHTML ="<input type='hidden' name='lstSelecionadaPagAtual"+nomeLista+"'/>";
		lstSelecionadaPagAtual = eval('document.forms[0].lstSelecionadaPagAtual'+nomeLista);
	}
	lstSelecionadaPagAtual.value=ids;
	
	var lista = null;
	lista = eval('document.forms[0].'+nomeLista);
	
	if(typeof lista == 'undefined'){  
		 document.getElementById('dvtodoscheckbox').innerHTML ="<input type='hidden' name='"+nomeLista+"'/>";
		 lista = eval('document.forms[0].'+nomeLista);
	}

	if(camposDesabilitar != ''){
		var desabilitado = !selecionado;
		camposDesabilitar = camposDesabilitar.split(',');
		for (i = 0; i< camposDesabilitar.length; i++) {
			elements = eval('document.forms[0].'+camposDesabilitar[i]);
			if (elements.length > 1) {
				for (i = 0; i< elements.length; i++) {
					if(desabilitado){
						elements[i].value = '';
					}
					elements[i].disabled = desabilitado;
				}
			} else { 
				elements.disabled = desabilitado;
			}			
		}
	}
}

function expandir(idDiv, funcao) {

	if (document.getElementById(idDiv).innerHTML == '') {
		document.getElementById(idDiv).style.display = "";
		
		document.getElementById(idDiv).innerHTML = "<image src='images/carregando.gif' />";
	
		new Ajax.Updater(idDiv, funcao, 	{
		    method:'get',
		    contentType:'text/html; charset=iso-8859-1',  	
		    onSuccess: function(transport) {
	    	  	var response = transport.responseText || "no response text";
	    	  	
	    	  	document.getElementById(idDiv).innerHTML = response;
	    	},
		    onFailure: function(){ 
		    	definirMensagem('Erro ao conectar no servidor.');
		    	document.getElementById(idDiv).innerHTML = '';
		    }
	  	});
	} else {
		if (document.getElementById(idDiv).style.display == "none") {
			document.getElementById(idDiv).style.display = "";
		} else {
			document.getElementById(idDiv).style.display = "none";
		}
	}
}

function trocarSinalExpandir(id) { 
	var sinal = document.getElementById(id).innerHTML;
	if (sinal == '+') {
		document.getElementById(id).innerHTML = '-';
	} else {
		document.getElementById(id).innerHTML = '+';
	}
}

function imprimirGrid(funcao) {

		document.getElementById('divOculta').style.display = "";
		document.getElementById('divOculta').innerHTML = "<image src='images/indicator.gif' />";
		
		new Ajax.Request(funcao, 	{
		    method:'post',
		    postBody: Form.serialize(document.forms[0]),
		    onSuccess: function(transport) {
	    	  	var response = transport.responseText || "no response text";
	    	  	document.getElementById('divOculta').style.display = "none";
	    	  	document.getElementById('divOculta').innerHTML = extrairTabelaGrid(response);
	    	  	document.forms[0].imprimirGrid.value = '';
	    	  	imprimir('areaAplicacao','divOculta');
	    	},
		    onFailure: function(){ 
		    	definirMensagem('Erro ao conectar no servidor.');
		    	document.getElementById('divOculta').style.display = "none";
		    }
	  	});
	  	
}

function extrairTabelaGrid(texto) {  	
	var ini = 0;  	
	
	var codigo = '';
	while (ini!=-1) {  		
		ini = texto.indexOf('<table id="list_tabela', ini);          		
		if (ini >=0){ 			
			ini = texto.indexOf('>', ini) + 1;             
			var fim = texto.indexOf('</table>', ini);             
			codigo = codigo + texto.substring(ini,fim);             
		} 	
	} 
	return '<table id="list_tabela" class="list_tabela" width="100%" cellspacing="0">'+codigo+'</table>'; 		
}

function desabilitaForm() {
	var j = jQuery.noConflict();
	j("form").submit(function() {
		return false;
	});
}

function abreAutoAtendimento(url) {
	console.log(url);
	parent.parent.fecharSessao = false;
	
	var w = window.screen.availWidth * 1; 
	var h = window.screen.availHeight * 1;

    // seta as margens da janela para 5% do tamanho da tela
	var l = window.screen.availWidth * 0; 
	var t = window.screen.availHeight * 0; 
	janela = window.open(url + "?abaAtual=autoatendimento",'colmeiaWindow',
		"width=" + w + ",height=" + h + ",top=" + t + ",left=" + l + 
		",resizable=false,status=false,scrollbars=yes,menubar=no,toolbar=no,addressbar=no,channelmode=1");
	janela.focus();
}

function desformatarValorMoeda(valorMoeda) {
	return parseFloat(valorMoeda.replace(".", "").replace(",", "."));
}

function acaoKeyDownPaginar(obj, event, type,param1,param2, formulario, action, totalPaginas) {
	var retorno = acaoAoKeyDown(obj, event, type,param1,param2); 
	
	var key = event.keyCode;
	var nChar = obtemCaracter(event);
	var key=obtemKey(event);
		
	if (key == '13' && obj.value != '' && obj.value > 0 && obj.value <= totalPaginas) {
		btnPesquisarGrid(formulario, action);
	}
	
	return retorno;
}