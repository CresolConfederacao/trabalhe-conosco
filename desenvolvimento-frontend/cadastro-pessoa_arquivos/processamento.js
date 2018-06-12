var _IE = (navigator.appName == "Microsoft Internet Explorer");
function sleep(milliseconds) {
	  var start = new Date().getTime();
	  for (var i = 0; i < 1e7; i++) {
	    if ((new Date().getTime() - start) > milliseconds){
	      break;
	    }
	  }
}
function escondeDivProcessando() {
	try{
		var dv = document.getElementById("dvprocessando");
		if(dv !=null){
			dv.style.display = "none";
		}
		var nome = this.name;
		dv = parent.document.getElementById('dvprocessando'+nome.substring(6));
		if(dv !=null){
			dv.style.display='none';
		}
		dv = parent.document.getElementById('div'+nome.substring(6));
		if(dv !=null){
			dv.style.display='';
		}
		setTimeout(function(){habilitarFrames();habilitaTabulacao();},500);
	}catch(e){}
}
function divProcessando() {
	try{
		desabilitaTabulacao();
		
		var dv = document.getElementById("dvprocessando");
		if(dv !=null){
			dv.style.display = '';
		} else {
			var nome = this.name;
			dv = parent.document.getElementById('dvprocessando'+nome.substring(6));
			if(dv !=null){
				dv.style.display='';
			}
		}
		setTimeout(function(){desabilitarFrames();},500);
	}catch(e){}
}

function divProcessandoLogin() {
	var dv = document.getElementById("dvprocessando");
	if(dv !=null){
		dv.style.display = '';
	}
	dv = document.getElementById("login_corpo");
	if(dv !=null){
		dv.style.display = 'none';
	}	
}

function desabilitarFrames() {
	var menuColmeia = '';
	var cabecalhoColmeia = '';
	if (parent.parent.menu == undefined && parent.parent.parent.menu != undefined) {
		menuColmeia = parent.parent.parent.menu;
		cabecalhoColmeia = parent.parent.parent.cabecalho;
	} else if (parent.menu == undefined && parent.parent.menu != undefined) {
		menuColmeia = parent.parent.menu;
		cabecalhoColmeia = parent.parent.cabecalho;
	} else if (parent.menu != undefined) {
		menuColmeia = parent.menu;
		cabecalhoColmeia = parent.cabecalho;
	} else {
		return;
	}
	if(typeof menuColmeia.processandoMenu == 'function'){
		menuColmeia.processandoMenu(this.name);
	}
	menuColmeia.document.getElementById("dvprocessandomenu").style.display = "";	
	if(cabecalhoColmeia.document.getElementById('UNIDADE')){
		cabecalhoColmeia.document.getElementById('UNIDADE').disabled = "true";
		cabecalhoColmeia.document.getElementById('UNIDADETextBox').disabled = "true";
	}
	var spSair = cabecalhoColmeia.document.getElementById('spSair');
	var linkSair = spSair.childNodes[0];           
   	linkSair.href = '#';
   	cabecalhoColmeia.document.getElementById('dadosUsuario').href='#';
	cabecalhoColmeia.document.getElementById('paginaInicial').href='#';
	cabecalhoColmeia.document.getElementById('atendimentoAssociado').href='#';
	cabecalhoColmeia.document.getElementById('calculadora').href='#';
	cabecalhoColmeia.document.getElementById('imprimir').href='#';
   	
	if (_IE) {
		menuColmeia.document.getElementById('dvprocessandomenu').style.height = menuColmeia.document.body.offsetHeight;
	} else {
		menuColmeia.document.getElementById('dvprocessandomenu').style.height = menuColmeia.document.body.offsetHeight + 'px';
	}
	menuColmeia.desabilitaTabulacao();
}

function habilitarFrames() {
	var menuColmeia = '';
	var cabecalhoColmeia = '';
	if (parent.parent.menu == undefined && parent.parent.parent.menu != undefined) {
		menuColmeia = parent.parent.parent.menu;
		cabecalhoColmeia = parent.parent.parent.cabecalho;
	} else if (parent.menu == undefined && parent.parent.menu != undefined) {
		menuColmeia = parent.parent.menu;
		cabecalhoColmeia = parent.parent.cabecalho;
	} else if (parent.menu != undefined) {
		menuColmeia = parent.menu;
		cabecalhoColmeia = parent.cabecalho;
	} else {
		return;
	}
	if(typeof menuColmeia.processandoMenu == 'function' && menuColmeia.liberandoMenu(this.name)){
		menuColmeia.document.getElementById('dvprocessandomenu').style.display = 'none';
		if(cabecalhoColmeia.document.getElementById('UNIDADE')){
			cabecalhoColmeia.document.getElementById('UNIDADE').disabled = '';
			cabecalhoColmeia.document.getElementById('UNIDADETextBox').disabled = '';
		}		
		var spSair = cabecalhoColmeia.document.getElementById('spSair');
		var linkSair = spSair.childNodes[0];           
	   	linkSair.href = 'javascript:sairSistema();';
//	   	alert("oi");
	   	cabecalhoColmeia.document.getElementById('dadosUsuario').href = 'javascript:exibirDadosUsuarioLogado();';
	   	cabecalhoColmeia.document.getElementById('paginaInicial').href = 'javascript:paginaInicial()';
	   	cabecalhoColmeia.document.getElementById('atendimentoAssociado').href = 'javascript:abrirAtendimentoAssociado()';
	   	cabecalhoColmeia.document.getElementById('calculadora').href = 'javascript:abrirCalculadora()';
	   	cabecalhoColmeia.document.getElementById('imprimir').href = "javascript:imprimir('areaAplicacao','dvcorpo')";
	   	
		menuColmeia.habilitaTabulacao();
	}
}