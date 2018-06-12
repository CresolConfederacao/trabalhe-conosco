var frameName = 'dvconteudopesquisa';

function opacity(id, opacStart, opacEnd, millisec) {
    //speed for each frame
    var speed = Math.round(millisec / 100);
    var timer = 0;

    //determine the direction for the blending, if start and end are the same nothing happens
    if(opacStart > opacEnd) {
        for(i = opacStart; i >= opacEnd; i--) {
            setTimeout("changeOpac(" + i + ",'" + id + "')",(timer * speed));
            timer++;
        }
    } else if(opacStart < opacEnd) {
        for(i = opacStart; i <= opacEnd; i++)
        {
            setTimeout("changeOpac(" + i + ",'" + id + "')",(timer * speed));
            timer++;
        }
    }
}

function limpaOnFocusAssociado(){
	//document.getElementById("matriculaAssociadoCooperativa").value="";
	//document.getElementById("matriculaAssociadoDV").value="";
}

function changeOpac(opacity, id) {
	var object = document.getElementById(id).style;
    object.opacity = (opacity / 100);
    object.MozOpacity = (opacity / 100);
    object.KhtmlOpacity = (opacity / 100);
	object.filter = "alpha(opacity=" + opacity + ")";
}

function selecionarPesquisaHistorico(codigoHistorico,  tipoPlanoContas) {
	var tmpForm = eval(document.forms[0].retornoPesquisa.value);
	tmpForm.value = codigoHistorico;
	fechaPesquisaParent();
    var retornoAction = document.forms[0].retornoAction.value  + "&retornoCodigoHistorico="+codigoHistorico + "&retornocodigoHistoricoTipoPlanoContas="+tipoPlanoContas;
    if ( retornoAction != "" ) {
    	definirAlteracaoDadosPopup(tmpForm);
    	parent.document.forms[0].action=retornoAction;
	    parent.document.forms[0].submit();
    }else {
    	if (tmpForm.onchange != null) {
			var change = tmpForm.onchange;
			var valor = change.toString().substring(change.toString().indexOf("{") + 1,change.toString().indexOf("}")).replace("this.value","'"+ tmpForm.value+"'");
			valor = valor.substring(0,valor.indexOf("()"));
			valor = replaceAll(valor,"javascript:","");
			eval("parent."+trimJS(valor)+"()");
		}
    }
}

//********************************************************************
// Função    		: definirAlteracaoDadosPopup
// Objetivo  		: Controle de os campos da tela foram alterados
// Parametros 		: obj: objeto a ser validado
//********************************************************************
function definirAlteracaoDadosPopup(obj){
	var campoControle = parent.document.getElementById('alteracaoDados');
	if (campoControle != null) {
		var tmp = ""+campoControle.value;
		if ( tmp.indexOf(obj.name) == -1 ) {
			if (tmp.length > 0)   {
				tmp += ",";
			}
			tmp +=  obj.name;
			campoControle.value = tmp;
		}
	}
}

function selecionarPesquisa(selecionado) {
	var tmpForm = eval(document.forms[0].retornoPesquisa.value);
	tmpForm.value = selecionado;
	fechaPesquisaParent();
	parent.divProcessando();
    var retornoAction = document.forms[0].retornoAction.value;
    if ( retornoAction != "" ) {
    	definirAlteracaoDadosPopup(tmpForm);
    	parent.document.forms[0].action=retornoAction;
	    parent.document.forms[0].submit();
    }else {
    	if (tmpForm.onchange != null) {
			var change = tmpForm.onchange;
			var valor = change.toString().substring(change.toString().indexOf("{") + 1,change.toString().indexOf("}")).replace("this.value","'"+ tmpForm.value+"'");
			valor = valor.substring(0,valor.indexOf("()"));
			valor = replaceAll(valor,"javascript:","");
			eval("parent."+trimJS(valor)+"()");
		}
    }
}

function selecionarPesquisaAssociado(selecionado, cooperativa, matriculaAssociadoFiltro) {

	var tmpForm = eval(document.forms[0].retornoPesquisa.value);	
	tmpForm.value = selecionado;

	fechaPesquisaParent();
	
    var retornoAction = document.forms[0].retornoAction.value;
    parent.document.forms[0].action=retornoAction;
	parent.document.forms[0].matriculaAssociadoCooperativa.value = cooperativa;
	parent.document.forms[0].matriculaAssociadoFiltro.value = matriculaAssociadoFiltro;
	parent.document.forms[0].submit();
}

function fechaPesquisaParent () {
	closeDiv('');
	/*var dv = parent.document.getElementById("dvpesquisa");
    var dvback = parent.document.getElementById("dvbackpesquisa");
    var dvbotao = parent.document.getElementById("dvbotaopesquisa");
    dvbotao.innerHTML = "";
    var dvinterna = parent.document.getElementById("dvconteudopesquisa");
	
	mostraDiv(dv);
    mostraDiv(dvback);
    mostraDiv(dvbotao);
    mostraDiv(dvinterna);
    dvinterna.src = '';*/
}



function fechaPesquisa() {
	closeDiv('');
	/*var dv = document.getElementById("dvpesquisa");
    var dvback = document.getElementById("dvbackpesquisa");
    var dvbotao = document.getElementById("dvbotaopesquisa");
    dvbotao.innerHTML = "";
    var dvinterna = document.getElementById("dvconteudopesquisa");
	mostraDiv(dv);
    mostraDiv(dvback);
    mostraDiv(dvbotao);
    mostraDiv(dvinterna);
    dvinterna.src = '';*/
}

function fechaPopupBotao() {
    closeDiv('');
	/*
	var dv = parent.document.getElementById("dvpesquisa");
    var dvback = parent.document.getElementById("dvbackpesquisa");
    var dvbotao = parent.document.getElementById("dvbotaopesquisa");

    dvbotao.innerHTML = "";
    var dvinterna = parent.document.getElementById("dvconteudopesquisa");

    mostraDiv(dv);
    mostraDiv(dvback);
    mostraDiv(dvbotao);
    mostraDiv(dvinterna);
	
	if (parent.document.getElementById("colmeiaTop") != null)
	    parent.document.getElementById("colmeiaTop").focus();
    
    */

}

function mostraDiv(dv) {
	try {
		if (dv.style.visibility == "visible" && dv.style.display == "") {
	    	dv.style.visibility = "hidden";
	   	    dv.style.display = "none";
	    } else if (dv.style.visibility == "visible" && dv.style.display == undefined){
	        dv.style.visibility = "hidden";
	    } else if (dv.style.visibility == undefined && dv.style.display == "") {
		    dv.style.display = "none";
	    } else if (dv.style.visibility == "hidden" && dv.style.display == "none") {
		    dv.style.visibility = "visible";
		    dv.style.display = "";
	    } else if (dv.style.visibility == undefined && dv.style.display == "none") {
	   	    dv.style.display = "";
	    } else if (dv.style.visibility == "hidden" && dv.style.display == undefined) {
	    	dv.style.visibility = "visible";
	    } else {
	   	    dv.style.visibility = "visible";
		    dv.style.display = "";
	    }
	} catch (err) {
	}
}

function escondeInterna(){
    var dv = document.getElementById("dvconteudo");
    dv.style.visibility = "hidden";
}

function abreBackground() {
    
    var dv = document.getElementById("dvbackpesquisa");
    
    var dvcont = document.getElementById("dvcorpo");
        
	dvbotao = document.getElementById("dvbotaopesquisa");
	if (dvbotao != null) {
	  dvbotao.innerHTML += "<img src='images/icon_fechar.png' alt='X' onclick='fechaPesquisa();' />";
	  dvbotao.style.zindex=50000;
	}

    dv.style.backgroundColor = "#f1e3a4";
    //dv.style.width = dvcont.offsetWidth+"px";
    dv.style.width = '100%';
    //dv.style.height = dvcont.offsetHeight+30+"px";
    dv.style.height = dvcont != null ? dvcont.offsetHeight+30+"px": '100%';
    dv.style.left = "0px";
    dv.style.top =  "0px";
    dv.style.position = "absolute";
    dv.style.zIndex = 1;
    mostraDiv(dv);
    opacity("dvbackpesquisa",100,50,100);
}

//Objeto que mantêm os parâmetros de exceção
function ObjExcecao (COLMEIA_EXCEPTION, APPLICATION_EXCEPTION, EXCEPTION, MENSAGEM, ERROR_MESSAGE, ALERT_MESSAGE, CONFIRM_MESSAGE, ICON){
    this.COLMEIA_EXCEPTION = COLMEIA_EXCEPTION;
    this.APPLICATION_EXCEPTION = APPLICATION_EXCEPTION;
    this.EXCEPTION = EXCEPTION;
    this.MENSAGEM = MENSAGEM;
	this.ERROR_MESSAGE = ERROR_MESSAGE;
    this.ALERT_MESSAGE = ALERT_MESSAGE;
	this.CONFIRM_MESSAGE = CONFIRM_MESSAGE;
	this.ICON = ICON;
} 


function abrePopup(pagina, form, property, excecao) {
    openDiv(form, "dvconteudopesquisa",0,0,pagina,excecao, property);
}

function abrePopupSemConteudo(novoNome) {
	if(novoNome != null && novoNome != '') {
		frameName = novoNome;
	} else {
		novoNome = "dvconteudopesquisa";
	}
    openDiv(null,novoNome,0,0,'',null,null);
}

function abrePopupSemConteudoDefineTamanho(paramWidth, paramHeight) {
	wid = paramWidth.indexOf('px') > -1 ? paramWidth.substring(0,paramWidth.indexOf('px')) : paramWidth;
	hei = paramHeight.indexOf('px') > -1 ? paramHeight.substring(0,paramHeight.indexOf('px')) : paramHeight;
    openDiv(null,"dvconteudopesquisa",wid, hei, '', null, null);
}

function abrePopupDefineTamanho(pagina, form, property, excecao, paramWidth, paramHeight) {
	wid = paramWidth.indexOf('px') > -1 ? paramWidth.substring(0,paramWidth.indexOf('px')) : paramWidth;
	hei = paramHeight.indexOf('px') > -1 ? paramHeight.substring(0,paramHeight.indexOf('px')) : paramHeight;
	openDiv(form,"dvconteudopesquisa",wid, hei, pagina, excecao, property);
}

function abreAlert(msg) {
  var exc = new ObjExcecao("","","","","",msg,"","");
  openDiv(null,"dvconteudopesquisa",0,0,"paginas/colmeiaMensagen.jsp",exc,null);
  
}

//Para fechar a janela sem executar o nao, use fechaPopup passando false
function abrePopupConfirm(pagina, form, property, excecao,sim,nao,fecharPopup) {
	concat = "?";
	if (pagina.indexOf("?") > -1) {
		concat = "&";
	}
    
  	if ("true" == fecharPopup) {	  
  	  document.getElementById("close").onclick = function() { eval( nao+"()" ); };
  	} else {
  	  document.getElementById("close").onclick = "fechaPesquisa();";
  	}
  	openDiv(form, "dvconteudopesquisa", 0, 0, pagina + concat + "confirm=true&sim="+sim+"&nao="+nao+"&xcancelar="+fecharPopup, excecao, property);
  	
}
//Para fechar a janela sem executar o nao, use fechaPopup passando false
function abreConfirm(msg,sim,nao,fecharPopup) {
  var exc = new ObjExcecao("","","","","","",msg,"");
  abrePopupConfirm('paginas/colmeiaMensagen.jsp',null,null,exc,sim,nao,fecharPopup);
}

function esconderPesquisa(){
	var dv = parent.document.getElementById("dvpesquisa");
	var dvback = parent.document.getElementById("dvbackpesquisa");
	var dvbotao = parent.document.getElementById("dvbotaopesquisa");
	var dvinterna = parent.document.getElementById("dvconteudopesquisa");
		
	mostraDiv(dv);
	mostraDiv(dvback);
	mostraDiv(dvbotao);
	mostraDiv(dvinterna);
}

function popupAberta() {
	var dv = document.getElementById("popup");
  return dv.style.visibility == "visible";
}

function closeDiv(element) {
	var campoFocus = null;
	var campo = null;

	var rootContext = getRootContext();
	
	try {
		campoFocus = eval( "document.forms[0].campoFocus" );
		if (campoFocus != null && campoFocus.value != null && campoFocus.value != '') {
			campo = eval("document.forms[0]." + campoFocus.value);		
		}
	} catch (ex) {
		try {
			campoFocus = eval( "parent.document.forms[0].campoFocus" );
			if (campoFocus != null && campoFocus.value != null && campoFocus.value != '') {
				campo = eval("parent.document.forms[0]." + campoFocus.value);
			}
		} catch (ex) {
		}
	}
	
	try {
	 	for (i=0; i<parent.document.applets.length; i++) {
			parent.document.applets[i].style.display="";
		}
		if (popupAberta()) {
			abreBackground();
			main.hide();
			var dv1 = document.getElementById('dvconteudopesquisa'); 
			dv1.src='';
		} else if (parent.popupAberta()) {
			parent.abreBackground();
			parent.main.hide();
			var dv2 = parent.document.getElementById('dvconteudopesquisa');
			dv2.src='';
	 	}
		escondeDivProcessando();
	} catch (ex) {
		try {
			var activeTabId = rootContext.areaAplicacao.getIdFrameAtivo();
			var topActiveFrame = rootContext.areaAplicacao.document.getElementById(activeTabId).contentWindow;
			if (topActiveFrame.popupAberta()) {				
				topActiveFrame.abreBackground();
				topActiveFrame.main.hide();
				var dv3 = topActiveFrame.document.getElementById('dvconteudopesquisa');
				dv3.src='';
			} else if (popupAberta()) {
				abreBackground();
				main.hide();
				var dv4 = document.getElementById('dvconteudopesquisa');
				dv4.src='';
			}

		}catch (exx) {
		}
		
	}
	if (campo != null && campo != undefined) {
		try {
			campo.focus();
		}catch (exx) {
		}
	}
}

//openDiv(form,"dvconteudopesquisa",0,0,'paginas/colmeiaMensagen.jsp',exc,property,null,null)
/**
 * Funcao respons'avel por abrir uma popup do tipo dragdrop
 * funcoes especificas para a popup
 * 
 * abrePopupSemConteudo(novoNome) {
 * abrePopup(pagina, form, property, excecao) {
 * abrePopupSemConteudoDefineTamanho(paramWidth, paramHeight) {
 * abrePopupDefineTamanho(pagina, form, property, excecao, paramWidth, paramHeight) {
 * abreAlert(msg) {
 * abreConfirm(msg,sim,nao) {
 * 
 * @param form -> eh o form principal da tela
 * @param nameFrame -> eh o nome do iframe da popup, se nao souber passar null ou '' (vazio)
 * @param widthx -> tamanho vertical da popup
 * @param heighty -> tamanho horizontal da popup
 * @param url -> pagina que deve ser aberta no iframe
 * @param mensagem -> objeto ObjExcecao do framework com mensagem. se este for preenchido a popup exibira colmeiaMensagem.jsp com a respectiva mensagem
 * @param property -> campo do form que recebera alguma acao ou valor apos alguma acao na tela da popup (iframe) deve ter o form informado
 * @param functionConfirm -> funcao para o botao de confirmacao (sim) da popup
 * @param functionClose -> funcao para o botao de cancelamento ou negacao (nao) da popup, se nada for informado apenas fecha a popup
 *
 */
function openDiv(form, nameFrame, widthx, heighty, url, mensagem, property) {
	// define nome do frame principal, se o nome foi for alterado, a funcao invocadora da popup devera informar o novo nome
	
	if (popupAberta()) {
		fechaPesquisa();
	}
	
	for (i=0; i<document.applets.length; i++) {
		document.applets[i].style.display="none";
	}
	
	document.getElementById("titulo").innerHTML = ""; 
	if (nameFrame == '' && nameFrame == undefined && nameFrame == null) {
		nameFrame = frameName;
	} else if (nameFrame != frameName) {
		frameName = nameFrame;
	}
	// obtem o elemento iframe
	var frame = document.getElementById(nameFrame);
	// hide
	document.getElementById(nameFrame).display = 'none';
	
	// abre background de bloqueio
	abreBackground();
	// move para o centro da area da app
	dvback = document.getElementById("dvbackpesquisa")
	dv = document.getElementById("popup")
	document.getElementById("contentdv").style.innerHTML = "Processando...";
	
	frame.style.position = "absolute";	
	frame.style.top = frame.style.top == '0px' || frame.style.top == "" ? "20px" : frame.style.top;
	frame.style.left = frame.style.left == '0px' || frame.style.left == "" ? "5px" : frame.style.left;
	//frame.style.width = frame.style.width == '0px' ? "590px" : frame.style.width;
	//frame.style.height = frame.style.height == '0px' ? "375px" : frame.style.height;
	frame.style.width = "590px"
	frame.style.height = "375px"
	
	//document.getElementById("contentdv").style.display = "";
	// se a url for preenchida
	if (mensagem == null || mensagem == undefined || mensagem == '') {
		if (url != null && url != undefined && url != "") {
			/*visibility: hidden;*/
			document.getElementById(nameFrame).display = '';
			frame.src = montarURL(form, url, mensagem, property);

			document.getElementById(nameFrame).display = '';
		} else {
			document.getElementById("contentdv").innerHTML = "";
		}
	} else {
		url == "paginas/colmeiaMensagem.jsp";
		document.getElementById(nameFrame).display = '';
		frame.src = montarURL(form, url, mensagem, property);
		document.getElementById("contentdv").innerHTML = "";
	}
	// define o tamanho da popup
	if ((widthx != null && widthx != 0) && (heighty != null && heighty != 0)) {
		positionsDivElements(nameFrame, widthx, heighty);
	}
	try{
	   	if (parent.main != null) {
			positionsDivElements(nameFrame,450,250);
	   	}
	}catch(e){
		console.error(e);
	}
	wid = (dvback.offsetWidth - dv.offsetWidth)/2+"px";
    hei = (dvback.offsetHeight - dv.offsetHeight)/2+50;
    if (hei > 300) {
    	hei = 150;
    }
    if (hei < 50) {
    	hei = 150;
    }
    if (typeof(main) == "undefined" || main == null) {
    	main = dd.elements.popup;
    }else{
    	main.moveTo(wid, document.documentElement.scrollTop + 50);
    }

    document.getElementById("popup").style.visibility = "visible";

	if (widthx == 0 && heighty == 0) {
		var j = jQuery.noConflict();
		var width = j(window).innerWidth() > 600 ? 600 : j(window).innerWidth() - 100; 
		var height = j(window).innerHeight() > 400 ? 400 : j(window).innerHeight() - 50;
		
	    document.getElementById(nameFrame).style.height = height + 'px';
		document.getElementById(nameFrame).style.width = width + 'px';
		positionsDivElements(nameFrame, width, height);
	} 
	
    main.show();
	frame.focus();
}

function positionsDivElements(nameFrame, widthx, heighty) {
	if (widthx > 50 && heighty > 50) {
		// popup largura e altura
		document.getElementById("popup").style.width = widthx + "px";
		document.getElementById("popup").style.height = heighty  + "px";
		// titulo apenas largura
		document.getElementById("titulo").style.width = widthx - 10 + "px";
		// botoes de fechar e ajuda posicionamento
		document.getElementById("close").style.left = widthx - 20 + "px";
		// borda direta posicionamento e altura
		document.getElementById("right_resize").style.left = widthx - 5 + "px";
		document.getElementById("right_resize").style.height = heighty - 10 + "px";
		// borda topo largura
		document.getElementById("top_resize").style.width = widthx - 5 + "px";
		// borda esquerda largura
		document.getElementById("left_resize").style.height = heighty - 5 + "px";
		// borda direita top posicionamento
		document.getElementById("top_right_resize").style.left = widthx - 5 + "px";
		// borda rodape posicionamento, largura e altura
		document.getElementById("bottom_resize").style.top = heighty - 5 + "px";
		document.getElementById("bottom_resize").style.width = widthx - 10 + "px";
		document.getElementById("bottom_right_resize").style.left = widthx - 5 + "px";
		document.getElementById("bottom_right_resize").style.top = heighty - 5 + "px";
		document.getElementById("bottom_left_resize").style.top = heighty - 5 + "px";
		document.getElementById("contentdv").style.width = widthx - 10 + "px";
		document.getElementById("contentdv").style.height = heighty - 25 + "px";
		document.getElementById(nameFrame).style.width = widthx - 10 + "px";
		document.getElementById(nameFrame).style.height = heighty - 25 + "px";
	}
}


function montarURL(form, url, excecao, property) {
	var ponto = "";
    var retorno = "";
    
    //alert(excecao);
    //if(excecao != ""){
    	//dvbotao.innerHTML = "";
    //}
    if(property != "" && property != null) {
      ponto = "."+property;
    }
	if(form != "" && form != null) {
	   retorno = "&retornoPopup="+eval("parent.document.forms['"+form+"']"+ponto);
    }
    if (excecao != null && excecao != undefined && excecao != '') {
      if ("" != (excecao.COLMEIA_EXCEPTION)) {
        retorno = retorno + "&COLMEIA_EXCEPTION="+escape(excecao.COLMEIA_EXCEPTION);
      }
      if ("" != (excecao.APPLICATION_EXCEPTION)) {
        retorno = retorno + "&APPLICATION_EXCEPTION="+escape(excecao.APPLICATION_EXCEPTION);
      }  
      if ("" != (excecao.EXCEPTION)) {
        retorno = retorno + "&EXCEPTION="+escape(excecao.EXCEPTION);
      }  
      if ("" != (excecao.MENSAGEM)) {      
        retorno = retorno + "&MENSAGEM="+escape(excecao.MENSAGEM);
      }  
      if ("" != (excecao.ERROR_MESSAGE)) {      
        retorno = retorno + "&ERROR_MESSAGE="+escape(excecao.ERROR_MESSAGE);
      }
	  if ("" != (excecao.ALERT_MESSAGE)) {      
        retorno = retorno + "&ALERT_MESSAGE="+escape(excecao.ALERT_MESSAGE);
      }
	  if ("" != (excecao.CONFIRM_MESSAGE)) {      
        retorno = retorno + "&CONFIRM_MESSAGE="+escape(excecao.CONFIRM_MESSAGE);
      }
      if ("" != (excecao.ICON)) {      
        retorno = retorno + "&ICON="+escape(excecao.ICON);
      }
    }
	
	if(url.indexOf("&aplicacao=false") == -1){
		retorno = retorno + "&aplicacao=true&";
		//url = url.substring(0,url.indexOf("?"));
	}else{
		retorno = retorno + "&aplicacao=false&";
	}
	if (url.indexOf("?") == -1 && url.indexOf("#") == -1) {
		url = url + "?";
	}
	if (url.indexOf("#") != -1) {
		return url;
	}
	return url + retorno;
} 