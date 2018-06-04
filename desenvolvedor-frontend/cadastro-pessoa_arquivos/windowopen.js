function window_open(theURL,winName,features) {
  winName = window.open(theURL,winName,features);
  winName.window.focus();
}

function confirmar(url)
{
	document.location.href=url;
}

function abrePopUp(url, width, height)
{   return MM_openBrWindow(url, 'help', 'scrollbar=yes,resizable=yes,width=' + width + ',height=' + height);
}

function MM_openBrWindow(theURL,winName,features) { //v2.0
  winName = window.open(theURL,winName,features);
  winName.window.focus();
}

function trocarConta()
{
	document.getElementById("dadosConta").style.display = "none";
	document.getElementById("dadosContaPesquisa").style.display = "";
}

function AbrirPaginaCentralizada(vUrl,vName,vPosFimX,vPosFimY,vScrollBars,vResizable,vRetorno)
{  //calcula posi??o de abertura da janela em rela??o ? tela

   vPosIniX=((screen.availWidth/2)-(vPosFimX/2));

   vPosIniY=((screen.availHeight/2)-(vPosFimY/2));

   //abre a janela pop up

   window.open(vUrl,vName,'toolbar=0,location=0,directories=0,menubar=0,scrollbars='+vScrollBars+',resizable='+vResizable+',top='+vPosIniY+',left='+vPosIniX+',width='+vPosFimX+',height='+vPosFimY+'');

   if (vRetorno==null)

   { }//n?o retorna nada 

   else

   { //retorna qualquer coisa que voc? definir em vRetorno 

     //obs.: aplicavel ao caso de querer retornar uma outra fun??o ou o valor de outra fun??o

     return vRetorno; };

};

function trocarTipoPessoa()
{
	//Pessoa Fisica
	if(document.forms[0].tipoPessoa[0].checked)
	{
		document.getElementById("conteudo_pessoa_fisica").style.display = "";
		document.getElementById("conteudo_pessoa_juridica").style.display = "none";
	}	

	//Pessoa Juridica
	if(document.forms[0].tipoPessoa[1].checked)
	{
		document.getElementById("conteudo_pessoa_fisica").style.display = "none";
		document.getElementById("conteudo_pessoa_juridica").style.display = "";
	}	
}

function trocarTipoCooperativa(valor)
{
	var valor = valor.value;
	//Central
	if(valor == 'Central')
	{
		document.getElementById("conteudo_central").style.display = "";
		document.getElementById("conteudo_base").style.display = "none";
		document.getElementById("conteudo_singular_cabecalho").style.display = "none";
		document.getElementById("conteudo_singular_corpo").style.display = "none";		
		document.getElementById("conteudo_pac").style.display = "none";		
		document.getElementById("conteudo_exclusivo").style.display = "";				
	}	

	//Base
	if(valor == 'Base')
	{
		document.getElementById("conteudo_central").style.display = "none";
		document.getElementById("conteudo_base").style.display = "";
		document.getElementById("conteudo_singular_cabecalho").style.display = "none";
		document.getElementById("conteudo_singular_corpo").style.display = "none";		
		document.getElementById("conteudo_pac").style.display = "none";	
		document.getElementById("conteudo_exclusivo").style.display = "";			
	}	

	//Singular
	if(valor == 'Singular')
	{
		document.getElementById("conteudo_central").style.display = "none";
		document.getElementById("conteudo_base").style.display = "none";
		document.getElementById("conteudo_singular_cabecalho").style.display = "";
		document.getElementById("conteudo_singular_corpo").style.display = "";		
		document.getElementById("conteudo_pac").style.display = "none";	
		document.getElementById("conteudo_exclusivo").style.display = "";			
	}	

	//Pac
	if(valor == 'Pac')
	{
		document.getElementById("conteudo_central").style.display = "none";
		document.getElementById("conteudo_base").style.display = "none";
		document.getElementById("conteudo_singular_cabecalho").style.display = "none";
		document.getElementById("conteudo_singular_corpo").style.display = "none";		
		document.getElementById("conteudo_pac").style.display = "";		
		document.getElementById("conteudo_exclusivo").style.display = "none";		
	}	

	//Selecione
	if(valor == 'Selecione')
	{
		document.getElementById("conteudo_central").style.display = "none";
		document.getElementById("conteudo_base").style.display = "none";
		document.getElementById("conteudo_singular_cabecalho").style.display = "none";
		document.getElementById("conteudo_singular_corpo").style.display = "none";		
		document.getElementById("conteudo_pac").style.display = "none";		
		document.getElementById("conteudo_exclusivo").style.display = "none";		
	}	
}

function trocarTipoEmpregador(valor)
{
	var valor = valor.value;
	//Associado
	if(valor == 'Associado')
	{
		document.getElementById("conteudo_associado").style.display = "";
		document.getElementById("conteudo_cooperativa").style.display = "none";
	}	

	//Cooperativa
	if(valor == 'Cooperativa')
	{
		document.getElementById("conteudo_associado").style.display = "none";
		document.getElementById("conteudo_cooperativa").style.display = "";
	}	
	
	//Selecione
	if(valor == 'Todos')
	{
		document.getElementById("conteudo_associado").style.display = "none";
		document.getElementById("conteudo_cooperativa").style.display = "none";
	}	
	//Selecione
	if(valor == 'Selecione')
	{
		document.getElementById("conteudo_associado").style.display = "none";
		document.getElementById("conteudo_cooperativa").style.display = "none";
	}	
}

function trocarTipoPgtoContaAPagar(valor)
{
	var valor = valor.value;
	//Pgto a Vista
	if(valor == 'à Vista')
	{
		document.getElementById("conteudo_pgto_vista").style.display = "";
		document.getElementById("conteudo_pgto_prazo").style.display = "none";
	}	

	//Pgto a Prazo
	if(valor == 'à Prazo')
	{
		document.getElementById("conteudo_pgto_vista").style.display = "none";
		document.getElementById("conteudo_pgto_prazo").style.display = "";
	}	
}

function calculaValorParcela()
{
	var vlrTotal = document.getElementById("vlrTotal").value;
	var obj = document.getElementById("qtdParcelas");
	var qtdParcelas = obj[obj.selectedIndex].value;
	
	document.getElementById("vlrParcela").value = '';

	if ( (vlrTotal && vlrTotal != '') && (qtdParcelas && qtdParcelas != '') )
		document.getElementById("vlrParcela").value = vlrTotal/qtdParcelas;
}

function mostraOcultaDiv(flag, nomeDiv)
{
	if (!eval(flag))
	{
		document.getElementById(nomeDiv).style.display = "none";
	}
	else
	{
		document.getElementById(nomeDiv).style.display = "";
	}
}

function selecionaTodos(obj, name){
		for(i = 0; i < document.forms[0].elements.length; i++){
			if(document.forms[0].elements[i].name == 'checkTree'+name){
				document.forms[0].elements[i].checked = obj.checked;
			}
		}
}