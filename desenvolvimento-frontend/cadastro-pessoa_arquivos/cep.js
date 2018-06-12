
/**
 * Client engine do novo sistema de CEP.
 * Inspirado no Google Suggest.
 *
 * @author joaoedu
 * @version 1.3 
 */
 
/*
Layout do arquivo (chave - se??o)
*********************************

base        - componentes essenciais do sistema, estruturas de dados e métodos utilitários
comm        - objetos de acesso ao servidor
glob        - variáveis globais usadas no sistema
gui         - funções utilizadas para manipular a visualização
loop        - loop principal de busca e funções relacionadas
hand        - handlers para estados de widgets
busc        - aliases criados para as buscas
rpc         - remote procedure calls enviadas ao servidor
rpcd        - respostas das RPCs enviadas pelo servidor
boot        - função que carrega o onLoad e inicia o sistema
cache       - funções que se encarregam de buscar resultados de consultas na cache, que é geral
cache utils - funções auxiliares de acesso à cache
util        - funções auxiliares diversas
*/ 


// base ********************************************************************************

//var _log = true;
/*
function log(texto) {
	date = new Date();
	if (_log) 
		document.getElementById('logger').value = date + texto + "\n" + document.getElementById('logger').value + "\n";
}
*/

/**
 * Adiciona função bind em métodos
 * Ripado descaradamente da prototype, http://prototype.conio.net
 */
Function.prototype.bind = function(object) {
  method = this;
  return function() {
    method.apply(object, arguments);
  }
}


/**
 * Adiciona método push(obj) em arrays
 * Ripado descaradamente da prototype, http://prototype.conio.net
 */
if (!Array.prototype.push) {
  Array.prototype.push = function() {
		startLength = this.length;
		for (var i = 0; i < arguments.length; i++)
			this[startLength + i] = arguments[i];
	    return this.length;
  }
}

/**
 * Adiciona método contains no array
 */
if (!Array.prototype.contains) {
  Array.prototype.contains = function(object) {
  	for (var i = 0; i < this.length; i++) {
		if (this[i] == object) {
			return true;
		}
	}		
	return false;
  }
}

/**
 * Escapa uma frase para colocar em URL
 *
 * @param frase
 */
function escapa (frase) {
	if (escape) {
	    return escape(frase);
	} else {
		return frase;
	}	
}

/**
 * Trim!
 * @param frase qualquer
 */
function trim(s) {
	while (s.substring(0,1) == ' ') {
	    s = s.substring(1,s.length);
	}
	while (s.substring(s.length-1,s.length) == ' ') {
    	s = s.substring(0,s.length-1);
	}
	return s;
}

/** 
 * Extrai o id de sistema do nome de determinado elemento
 * @param elemento
 */
function getId(elemento) {
	tmp = elemento.id;
	tmp = tmp.substring(tmp.indexOf('[') + 1, tmp.indexOf(']'));
	return parseInt(tmp);
}

/**
 * Retorna um evento (crossbrowser)
 */
function getEvent(event) {
	if (event == null) // IE perdedor
		return window.event;
	else // mozilla vencedor
		return event;
}

/**
 * Retorna o target de um evento (crossbrowser)
 */
function getTarget(event) {
	event = getEvent(event);
	if (event.target == null) // IE
		return window.event.srcElement;
	else
		return event.target;
}

/**
 * Modelo do objeto endereço
 * @param cep número do cep
 * @param nome nome do logradouro
 * @param tipoLogradouro tipo do logradouro
 * @param bairro nome do bairro
 * @param localidade chave da localidade
 * @param uf sigla da uf
 * @param codEndereco cep genérico ou não
 */
var Endereco = function (cep, nome, tipoLogradouro, bairro, localidade, uf, codEndereco) {
	this.cep = cep;
	this.nome = nome;
	this.tipoLogradouro = tipoLogradouro;
	this.bairro = bairro;
	this.localidade = localidade;
	this.uf = uf;
	this.codEndereco = codEndereco;
	this.complemento = "";
	this.numero = "";
	
} 

/**
 * Modelo do objeto localidade
 * @param chave chave da localidade
 * @param nome nome da localidade
 * @param situacaoCep Situação do cep
 */
var Localidade = function (chave, nome, situacaoCep) {
	this.chave = chave;
	this.nome = nome;
	this.situacaoCep = situacaoCep;
}

// comm ********************************************************************************

/*
 * Objeto request para comunicação com o servidor
 */
var Request = function() { // construtor
    this.prehandlers = new Array();
	this.posthandlers = new Array();
	this.ultimaRequisicao = null;
};

Request.prototype = {
    
	/*
	 * Handler padrão para tratar conexões
	 */
	defaultHandler: function(originalRequest) {
		try { 
		    for (i = 0; i < this.prehandlers.length; i++) // rodando handlers pendurados
				eval(this.prehandlers[i]);
			this.resetPreHandlers(); // resetando handlers.
			
			try {
				var responseText = originalRequest.responseText; 
				// Mostraerro - pra não apagar campos no autocompletar de endereço 
				if (_mostraErro[this.id] && rpcIsErrorReply(responseText)) 
					resetEndereco(id);
				eval(responseText); // processando requisição do servidor
			} catch (ex) {
				if (ex.name == 'SyntaxError') {
					// se o usuário estiver desconectado é gerado um SyntaxError, neste caso, exibo uma mensagem mais amigável para o usuario e redireciono para a tela principal.
					rpcError(this.id, "Serviço indisponivel: usuário desconectado");
					window.location = 'login.do';
				} else {
					rpcError(this.id, ex.name + ": " + ex.message);
				}
			}

			// rodando handlers de pós-processamento
			for (i = 0; i < this.posthandlers.length; i++) // rodando handlers pendurados
				eval(this.posthandlers[i]);
			
			this.resetPostHandlers(); // resetando handlers.
				
		} catch (ex) { } // só pra não ficar incomodando pra rodar handler do que não existe		 
	},
	
	handleFalha: function(originalRequest)  {
	    rpcError(this.id, "Erro do servidor: " + originalRequest.status + " (" + originalRequest.statusText + ")");
	},	
	
	handleLoading: function()  {
//	    rpcCarregando(this.id);
	},
	
	handleLoaded: function(originalRequest)  {
	// helder
//	    rpcCarregandoDone();
	},
	
	/*
	 * Envia uma requisição ao servidor
	 */
	send: function(url) {
	    // Fecha qualquer conexão pendente pra esta instância 
	    if (this.ultimaRequisicao != null && this.ultimaRequisicao.transport && this.ultimaRequisicao.transport.readyState != 0)
	    	this.ultimaRequisicao.transport.abort();
	    	
	    this.ultimaRequisicao = new Ajax.Request (
	        url,
	        {
	            method: 'post',
	            onComplete: this.defaultHandler.bind(this),
	            onFailure: this.handleFalha.bind(this),
	            onLoading: this.handleLoading.bind(this),
	            onLoaded: this.handleLoaded.bind(this)
	        });
	},
	
	/*
	 * Adiciona uma função de pré-processamento do request
	 */
	addPreHandler: function(text) {
		this.prehandlers.push(text);
	},
	
	/* 
	 * Adiciona uma função de pós-processamento do request
	 */
	addPostHandler: function(text) {
		this.posthandlers.push(text);
	},
	
	/*
	 * Reseta prehandlers.
	 */
	resetPreHandlers: function() {
	    this.prehandlers = new Array();
	},
	
	/*
	 * Reseta posthandlers.
	 */
	resetPostHandlers: function() {
	    this.posthandlers = new Array();
	},
	
	/*
	 * Seta o id necessário para identificar qual tela de erro será utilizada
	 */
	setId: function(id) {
		this.id = id;
	}
}

/**
 * Força processamento dos prehandlers (em caso de uso de cache)
 */
function preHandlers(id) {
	handlers = _request[id].prehandlers;
	for (i = 0; i < handlers.length; i++)
		eval(handlers[i]);
	_request[id].resetPreHandlers();
}

/**
 * Força processamento dos posthandlers (em caso de uso de cache)
 */
function postHandlers(id) {
	handlers = _request[id].posthandlers;
	for (i = 0; i < handlers.length; i++)
		eval(handlers[i]);
	_request[id].resetPostHandlers();
}


// glob ********************************************************************************

var _IE = (navigator.appName == "Microsoft Internet Explorer"); 
var _request = new Array(); // array de request, 1 para cada tag criada
var _lista = new Array(); // array que guarda os divs de lista
var _cache = new Object(); // cache da pesquisa
var _resultados = new Array(); // array de resultados para a pesquisa de cada instância
var _resultadoAtual = new Array(); // índice do resultado selecionado atualmente
var _ultimoEndereco = new Array(); // último valor do campo endereço que foi pesquisado da instância
var _inputCodEndereco = new Array(); // referência ao campo de codificação de municipio da instância
var _inputEndereco = new Array(); // referência ao campo de endereço da instância
var _inputMunicipio = new Array(); // referência ao campo de municipio da instância
var _inputHdMunicipio = new Array(); // referência ao campo de municipio da instância
var _inputValidaEnderecoOnBlur = new Array(); //referência ao campo para saber se a validação de endereço deve ser realizada
var _inputCEP = new Array(); // referência ao campo de cep da instância
var _inputUF = new Array(); // referência ao campo de UF da instância
var _inputHdUF = new Array(); // referência ao campo de UF da instância campo hidden que contem o valor
var _inputBairro = new Array(); // referência ao campo de Bairro da instância
var _inputNumero = new Array(); // referência ao campo de número da instância
var _inputComplemento = new Array(); // referência ao campo de complemento da instância
var _inputTelefone = new Array(); // referência ao campo de telefone da instância
var _inputFax = new Array(); // referência ao campo de fax da instância
var _filtroLocalidade = new Array(); // filtro de localidade para cada form
var _filtroUF = new Array(); // filtro de uf para cada form
var _erroFiltro = new Array(); // erros para valores fora do filtro
var _busca = new Array(); // controla busca ou não
var _box = new Array(); // caixa de mensagens da instância
var _mostraErro = new Array(); // controla a aparição da caixa de erros
var _mostraDireto = new Array(); // mostra direto quando é achado só um resultado
var _loopId = new Array(); // id do loop de cada instância
var _findOnType = new Array(); // controla procura enquanto digita para cada instância
var _disableWhenAutomaticallyFilled = new Array(); // Controla a desabilitação do campo bairro quando a busca retorna um bairro
var _poolId = new Array(); // pool dos ids das tags existentes.
var _init = new Array(); // comandos de inicialização necessários para cada instância
var _textoBusca = new Array(); // comandos de inicialização necessários para cada instância
var _LOGRADOURO = 'logradouro';
var _BAIRRO = 'bairro';
var _inputTipoLogradouro = new Array(); // referência ao campo de Tipo Logradouro da instância
var _inputHdTipoLogradouro = new Array(); // referência ao campo de Tipo Logradouro da instância

// loop ********************************************************************************

/** 
 * Loop principal, responsável por enviar queries ao servidor
 * em intervalo de tempo pré-determinado. 
 * @param id da instância
 */
 
 var loop = 0;
 
function mainLoop(id) {	
	if (_busca[id]) {
		var endereco = trim(_inputEndereco[id].value);
		if  (endereco != "") {
		    _ultimoEndereco[id] = endereco;
		    
			if (endereco.length > 3 && _inputMunicipio[id].value != 0) {	
				queryEndereco(id, false, false);
				terminaBusca(id);
			} else {
				resetaLista(id);
				esconde(_lista[id]);
//				esconde(_box[id]);
				escondeId(id);
				terminaBusca(id);
			}			
		}
	}
	_loopId[id] = setTimeout("mainLoop(" + id + ")", 1000); // a cada segundo
}

/**
 * Seta para que o loop inicie buscas
 * @param id id da instância
 */
function iniciaBusca(id) {
	_busca[id] = true;
}

/**
 * Seta para que o loop pare de fazer buscas
 * @param id id da instância
 */
function terminaBusca(id) {
	_busca[id] = false;
}


// gui ********************************************************************************

/**
 * Cria o div que vai conter a lista de resultados para pesquisas
 * com resultados múltiplos
 * (necessário criar lista nova para impedir que altere o corpo da página)
 * @param id id da instância
 */
function createLista(id) {
	var ancora = $('ancora[' + id + ']');

	if (_lista[id] != null) 
		delete _lista[id];

	_lista[id] = document.createElement("DIV");
	_lista[id].id = "divCriado" + id;

	// setando estilo	
	_lista[id].className = "lista";
	if (_IE) {
		_lista[id].style.top = calculaPosicaoRelativa(ancora,"offsetTop");
		_lista[id].style.left = 15 + calculaPosicaoRelativa(_inputEndereco[id],"offsetLeft");
	} else {
		_lista[id].style.top = calculaPosicaoRelativa(ancora,"offsetTop") + "px";
		_lista[id].style.left = 15 + calculaPosicaoRelativa(_inputEndereco[id],"offsetLeft") + "px";
	}	
	_lista[id].style.position = "absolute";
	_lista[id].style.visibility = "hidden";
	_lista[id].style.zIndex = "1";
	document.forms[0].appendChild(_lista[id]);
}

/**
 * Seta um estilo pro elemento fornecido
 * 
 * @param elemento referência do elemento
 * @param nome nome do estilo
 * @param id id da instância
 */
function setaEstilo (id, elemento, nome) {
	elemento.className = nome;
}

/**
 * Adiciona um endereço na lista de respostas
 * 
 * @param endereco Objeto endereco
 * @param id id da instância
 */
function adicionaLista(id, endereco) {
	try {
		resultado = document.createElement("SPAN");
		// seta o estilo
		setaEstilo(id, resultado, "normal");
	
		if ( endereco.codEndereco == -2 ) {
		    var html = (endereco.tipoLogradouroDescricao == "" || endereco.tipoLogradouroDescricao == undefined) ? "" : endereco.tipoLogradouroDescricao + " ";
				html += endereco.nome  + " - " + endereco.cep;
		} else {
		    var html = (endereco.tipoLogradouroDescricao == "" || endereco.tipoLogradouroDescricao == undefined) ? "" : endereco.tipoLogradouroDescricao + " ";
				html += endereco.nome  + " - " + " Bairro " + endereco.bairro + " - " + endereco.cep;
		}
		
		resultado.innerHTML = html;
		resultado.endereco = endereco; // ele deixa criar propriedade nova pro elemento, w00t!
	    resultado.onmousedown = function () {
	    	displayForm(id, this.endereco);
	    	resetaLista(id);
			esconde(_lista[id]);
	    }
	    resultado.onmouseover = function () {
	    	for (i = 0; i < _resultados[id].length; i++) { 
	    		if (_resultados[id][i] == this) {
					setaEstilo(id, this, "hover");    	
					_resultadoAtual[id] = i;
				} else {
					setaEstilo(id, _resultados[id][i], "normal");
				}
			}
	    }
	    resultado.onmouseout = function () {
	    	for (i = 0; i < _resultados[id].length; i++) {
		    	setaEstilo(id, _resultados[id][i], "normal");			
			}
			_resultadoAtual[id] = -1;
	
	    }
		_lista[id].appendChild(resultado);
		_lista[id].appendChild(document.createElement("BR"));
		_resultados[id].push(resultado);
		_resultadoAtual[id] = 0;
		setaEstilo(id, _resultados[id][0], "hover");
	} catch (ex) {
		rpcError(id, "createLista: " + ex.name + " " + ex.message);
	}
}

/**
 * Calcula a posição relativa para um novo div a partir
 * do atributo especificado do elemento fornecido.
 *
 * @param elemento Elemento da página
 * @param atributo Nome do atributo de referência
 */
function calculaPosicaoRelativa(elemento, atributo) {
	temp = 0;
	while (elemento) {
    	temp += elemento[atributo];
    	elemento = elemento.offsetParent;
	}
	temp = temp - 15;
	return temp ;
}

/**
 * Calcula o tamanho do drop down de pesquisa.
 * @param id id da instância
 */
function calculaTamanho(id) {
  	if (!_IE) {
	    return $('endereco[' + id + ']').offsetWidth - 2;
  	} else {
    	return $('endereco[' + id + ']').offsetWidth;
	}
}

/**
 * Preenche o formulário de pesquisa com os dados fornecidos.
 *
 * @param endereco instância do objeto Endereco
 * @param id id da instância
 */
function displayForm(id, endereco) {

	
	if (_filtroLocalidade[id] != null && _filtroLocalidade[id].length > 0) {
		if (!_filtroLocalidade[id].contains(endereco.localidade)) {
			eval(_erroFiltro[id]);
			return false;
		}
	}
	if (_filtroUF[id] != null && _filtroUF[id].length > 0) {
		if (!_filtroUF[id].contains(endereco.uf)) {
			eval(_erroFiltro[id]);
			return false;
		}
	}
	// para busca automática
	_ultimoEndereco[id] = endereco.endereco;
	var docCep = _inputCEP[id];
	var docUF = _inputUF[id];
	var hdUf = _inputHdUF[id];
	var docEndereco = _inputEndereco[id];
	var docBairro = _inputBairro[id];
	var codEndereco = _inputCodEndereco[id];
	docCep.value = endereco.cep;
	var cepFOrmatado = new String(endereco.cep);
	_inputCEP[id].value = cepFOrmatado.substring(0,5) + "-" + cepFOrmatado.substring(5);
	if ( endereco.codEndereco != -2 ) {
		docEndereco.value = trim(endereco.nome);
		
		criaHidden(_LOGRADOURO, _inputEndereco[id].name, id);
		document.getElementById(_inputEndereco[id].name).value = docEndereco.value;
		
		docBairro.value = trim(endereco.bairro);

		criaHidden(_BAIRRO, _inputBairro[id].name, id);
		document.getElementById(_inputBairro[id].name).value = docBairro.value;

		_inputBairro[id].value = trim(endereco.bairro);
		_inputBairro[id].disabled=true;
		
		_inputEndereco[id].disabled=true;
		_inputEndereco[id].style.background = "#C0C0C0";
		_inputBairro[id].style.background = "#C0C0C0";
  		setFocus(_inputNumero[id]);
  		_inputTipoLogradouro[id].disabled=true;
		_inputTipoLogradouro[id].style.background = "#C0C0C0";
		_inputMunicipio[id].style.background = "#C0C0C0";
	} else {
	    docEndereco.value = "";
		docBairro.value = "";
		_inputBairro[id].disabled=false;
		_inputEndereco[id].disabled=false;
		
		removeHidden(_LOGRADOURO, _inputEndereco[id].name, id);
		removeHidden(_BAIRRO, _inputBairro[id].name, id);

		_inputEndereco[id].style.background = "#FFFFFF";
		_inputBairro[id].style.background = "#FFFFFF";
		setFocus(_inputBairro[id]);
		_inputTipoLogradouro[id].disabled=false;
		_inputHdTipoLogradouro[id].disabled=false;
		_inputTipoLogradouro[id].style.background = "#FFFFFF";
	}
	_inputUF[id].disabled=true;
	_inputMunicipio[id].disabled=true;	
	_inputHdUF[id].value = endereco.uf;
	_inputHdMunicipio[id].value = endereco.localidade;
	_inputComplemento[id].value="";
	_inputNumero[id].value="";
	_inputHdTipoLogradouro[id].value = endereco.tipoLogradouro;
	
	codEndereco = endereco.codEndereco;
	_inputCodEndereco[id].value = codEndereco;
	
	var iulf = docUF.value;
	
	// colocando no cache para evitar problemas com procuras repetidas
	if ( endereco.codEndereco == 0 ) { 
		putCache(docEndereco.value.toLowerCase(), endereco);
		putCache(endereco.cep, endereco); 
	}
	
	if (docUF.value != endereco.uf) { // carregou cidade de um estado diferente
		request = new Request(); 
        request.addPostHandler("escolheLocalidade(" + id + "," + endereco.localidade + ");");
		request.send("buscar_localidade.do?UF=" + endereco.uf + "&id=" + id ); // repetindo rpcLocalidades
		request = new Request();
		request.addPostHandler("escolheTipoLogradouro(" + id + "," + endereco.tipoLogradouro + ");");
		request.send("buscar_tipo_logradouro.do?id=" + id ); 
		
		escolheUF(id, endereco.uf);
		rpcCarregando(this.id);   
		
		  
	} else {
		escolheUF(id, endereco.uf);
		escolheLocalidade(id, endereco.localidade);
		escolheTipoLogradouro(id, endereco.tipoLogradouro);
	}	
	_mostraDireto[id] = false; // garantindo que não vai mostrar direto automaticamente depois.
	    
	escondeId(id); 
	    
}

/**
 * Seleciona uma localidade da lista de localidades
 * @param código da localidade
 * @param id id da instância
 */
function escolheLocalidade(id, localidade) {

	docMunicipio = _inputMunicipio[id]; 
	docUF = _inputUF[id];
	for (i = 0; i < docMunicipio.options.length; i++) {
		if (docMunicipio.options[i].value == localidade) {
			docMunicipio.options[i].selected = true;
			var localidadeObj = getLocalidadePorChave(localidade, docUF.value);
			break;
		}
	}
}

/**
 * Habilita o campo bairro.
 * @param id id da instância
 */
function enableBairroField(id) {
    _inputBairro[id].disabled = false;
}

/**
 * Desabilita o campo bairro.
 * @param id id da instância
 */
function disableBairroField(id) {
    _inputBairro[id].disabled = true;
}

/**
 * Seleciona uma UF da lista de UFs
 * @param sigla da UF
 * @param id id da instância
 */
function escolheUF(id, uf) {
	docUF = _inputUF[id];
	for (i = 0; i < docUF.options.length; i++) {
		if (docUF.options[i].value == uf) {
			docUF.options[i].selected = true;
			break;
		}
	}
}

/**
 * Mostra um objeto.
 */
function mostra(objeto) {
	objeto.style.visibility = "visible";
}

/**
 * Esconde um objeto.
 */
function esconde(objeto) {
	if ( objeto) {
		objeto.style.visibility = "hidden";
	}
}

//function esconde(objeto) {
//	objeto.style.visibility = "hidden";
//}




function escondeId(id) {
	if (id != undefined) {
			var tmp = "document.getElementById('box["+id+"]').style.visibility = 'hidden'";
//			var tmp = "document.getElementById('box["+id+"]').innerHTML = ''";
			setTimeout(tmp,100);
	}
}
/**
 * Apaga todos os elementos existentes na lista
 * @param id id da instância
 */
function resetaLista(id) {
	_resultadoAtual[id] = -1;
	while (_lista[id].childNodes.length > 0) {
		_lista[id].removeChild(_lista[id].childNodes[0]);
	}
}

/**
 * Mostra uma lista de resultados.
 *
 * @param enderecos Array de objetos endereco
 * @param id id da instância
 */
function displayList(id, enderecos) {
	resetaLista(id);
	mostra(_lista[id]);
	// resetando array de resultados
	_resultados[id] = new Array();
	_resultadoAtual[id] = -1;
	if (!_inputEndereco[id].disabled) {
		_inputEndereco[id].focus();
	}
	for (i = 0; i < enderecos.length; i++) {
		adicionaLista(id, enderecos[i]);
	}
}

/** 
 * Reseta os valores de endereço.
 * @param id id da instância
 */
function resetEndereco(id) {
	if ( _inputEndereco[id] ){
		_inputEndereco[id].value = "";
	}
	
	if ( _inputCodEndereco[id] ){
		_inputCodEndereco[id].value = "";
	}
	
	if ( _inputCEP[id] ){
		_inputCEP[id].value = "";
	}
	if ( _inputTipoLogradouro[id] ){
		_inputTipoLogradouro[id].value = "";
		_inputHdTipoLogradouro[id].value = "";
	}
	if ( _inputBairro[id] ){
		_inputBairro[id].value = "";
	}
	if(_inputNumero[id])
		_inputNumero[id].value = "";
	if(_inputComplemento[id])
		_inputComplemento[id].value = "";
	if(_inputTelefone[id])
		_inputTelefone[id].value = "";
	if(_inputFax[id])
		_inputFax[id].value = "";
}




// hand ********************************************************************************
/**
 * Handler para o teclado, chamado quando digita-se algo
 * no campo de endereço.
 */
function keyupHandlerEndereco(event) { 

	event = getEvent(event);
	id = getId(getTarget(event));
	switch (event.keyCode) {
		case 38: // KEY_UP
			terminaBusca(id); 
			if (_resultadoAtual[id] > 0) {
				setaEstilo(id, _resultados[id][_resultadoAtual[id]], "normal");
				_resultadoAtual[id]--;
				setaEstilo(id, _resultados[id][_resultadoAtual[id]], "hover");	
			}
			return true;
			break;
		case 40: // KEY_DOWN
			terminaBusca(id);
			if (_resultadoAtual[id] < (_resultados[id].length - 1)) {
				if (_resultadoAtual[id] > -1)
					setaEstilo(id, _resultados[id][_resultadoAtual[id]], "normal");
				_resultadoAtual[id]++;
				setaEstilo(id, _resultados[id][_resultadoAtual[id]], "hover");
			}
			return true;
			break;
		case 13: // ENTER
				if (_resultadoAtual[id] == -1) { // mandou procurar direto
					if (_inputEndereco[id].readOnly == false) {
						terminaBusca(id);		
						resetaLista(id); 
						esconde(_lista[id]);
						queryEndereco(id, true, true);
					}
				} else if (_resultados[id] != null && _resultados[id][_resultadoAtual[id]] != null) { // escolheu resultado
					terminaBusca(id);		
					displayForm(id, _resultados[id][_resultadoAtual[id]].endereco);
					resetaLista(id); 
					esconde(_lista[id]);
				}
				return false; // anulando evento pra não dar submit no form
			break;		
		case 27: // ESC
			terminaBusca(id);
			resetaLista(id);
			esconde(_lista[id]);
			break;	
		case 9: // TAB -
		    break;
		default:
		if (_inputEndereco[id].readOnly == false) {
			terminaBusca(id);
			if (_resultadoAtual[id] == -1 || _resultadoAtual[id] == 0) { // mandou procurar direto
				resetaLista(id); 
				esconde(_lista[id]);
				queryEndereco(id, true, true);
			} else if (_resultados[id] != null && _resultados[id][_resultadoAtual[id]] != null) { // escolheu resultado
				displayForm(id, _resultados[id][_resultadoAtual[id]].endereco);
				resetaLista(id); 
				esconde(_lista[id]);
			}
		}		
			return false; // anulando evento pra não dar submit no form
//		    resetaLista(id);
//			esconde(_lista[id]);
//			if (_inputEndereco[id].value.length < 4) { // pára busca se tamanho menor
//				terminaBusca(id);
//			} else { // sennão, busca
//				iniciaBusca(id);
//			}
//			esconde(_box[id]); // esconde mensagem de erro anterior
			break;
	}
	return true;

}


/** 
 * Keydown handler 
 */
function keydownHandlerEndereco (event) {
			keypressHandlerEndereco(event);		
//	event = getEvent(event);
//	switch (event.keyCode) {
//		case 38: // KEY UP
//		case 40: // KEY DOWN
//			keypressHandlerEndereco(event);		
//			break;
//	}
}

/**
 * Handler para o teclado, chamado quando digita-se algo
 * no campo de cep.
 */
function keypressHandlerCEP(event) {
	event = getEvent(event);
	id = getId(getTarget(event));
	switch (event.keyCode) {
		case 13: // ENTER
			queryCEP(id, true, true);
			return false;
			break;			
	}
}

/**
 * Handler de onblur pro campo cep, busca endereço quando sai de foco
 */
function onBlurHandlerCEP(event) {
	event = getEvent(event);
	id = getId(getTarget(event));
	
	queryCEP(id, true, true);
	return true;
}

/*
 * Handler de onblur pro campo de endereço, pára a busca quando sai 
 * de foco.
 */
function onBlurHandlerEndereco(event) {	
	event = getEvent(event);
	target = getTarget(event);
	id = getId(target);

	//terminaBusca(id);
	
	//Realiza uma validação para o campo endereço, caso o usuário tenha
	//modificado alguma coisa do Endereço, o mesmo volta para o valor
	//default (Somente se o CEP não for genérico).
	if(_inputValidaEnderecoOnBlur[id]){
		cep = _inputCEP[id].value;
		if(cep) {
			endereco = getCache(cep);
			
			if(!endereco || !endereco.isCepGenerico){
				queryCEP(id, true, true);
			}
		}
	}
}


/**
 * onChange para combo de municípios
 */
function onChangeHandlerMunicipio(event) {
 
    event = getEvent(event);
	target = getTarget(event);
	id = getId(target);
	terminaBusca(id);
	resetEndereco(id);
	resetaLista(id);
	esconde(_lista[id]);

	_inputHdUF[id].value=_inputUF[id].value;
	_inputHdMunicipio[id].value=_inputMunicipio[id].value;
	var uf = _inputUF[id].value;
	var localidade = target.value;
	
	var localidadeEmCache = getLocalidadePorChave(localidade, uf);
    
    // Limpa resultado anterior
//    preencheTipoCep(id, "");
    
    if (localidadeEmCache == null) {
	   definirMensagem('município não encontrado. Por favor, selecione outro estado.');
	   return;
	}
	
	if (_disableWhenAutomaticallyFilled[id]) {
		// nao tem bairro, então é editável
		enableBairroField(id);
	}

}


/**
 * onChange para combo de UF, reseta dados
 */
function onChangeHandlerUF(event) {
	event = getEvent(event);
	target = getTarget(event);
	id = getId(target);
	terminaBusca(id); 
	_inputHdUF[id].value=target.value;
	_inputHdMunicipio[id].value="";
    rpcCarregando(this.id);	
	
	rpcLocalidades(id, target.value); 
	resetEndereco(id); 
	resetaLista(id); 
	esconde(_lista[id]);
	//document.getElementById(id).focus();
}

/**
 * handler para onClicks no documento
 * (esconde todas as listas mostradas)
 */
function onClickHandlerDocument(event) {
	for (i = 0; i < _lista.length; i++) {
		if (_lista[i] != null) {
			terminaBusca(i);		
			resetaLista(i);
			esconde(_lista[i]);
		}
	}
}

/** 
 * Função onLoad para o CEP, necessária
 * para setar parâmetros iniciais
 */
function onLoadCepHandler() {
	try {
	    var id = 0;
	    
		for (i = 0; i < _poolId.length; i++) {	
			id = _poolId[i];
			_resultadoAtual[id] = -1;
			_mostraErro[id] = false;
			_mostraDireto[id] = false;
			_loopId[id] = null;
			if (!_findOnType[id])
				_findOnType[id] = false;	
			// boot pra tag
			_request[id] = new Request();
			_request[id].setId(id);

            eval(_init[id]);
					
			_inputValidaEnderecoOnBlur[id] = $('validaEnderecoOnBlur[' + id + ']');
			_inputCEP[id] = $('cep[' + id + ']');
			_inputEndereco[id] = $('endereco[' + id + ']');
			_inputCodEndereco[id] = $('codEndereco[' + id + ']');
			_inputMunicipio[id] = $('municipio[' + id + ']');
			_inputHdMunicipio[id] = $('hdMunicipio[' + id + ']');
			_inputUF[id] = $('uf[' + id + ']');
			_inputHdUF[id] = $('hdUf[' + id + ']');
			_inputBairro[id] = $('bairro[' + id + ']');
			_inputNumero[id] = $('numero[' + id + ']');
			_inputComplemento[id] = $('complemento[' + id + ']');		
			_inputTelefone[id] = $('fone[' + id + ']');		
			_inputFax[id] = $('fax[' + id + ']');		
			_box[id] = $('box[' + id + ']');
			_textoBusca[id] = $('textoBusca[' + id + ']');
			_inputMunicipio[id].autocomplete = "off";
			_inputTipoLogradouro[id] = $('tipoLogradouro[' + id + ']');
			_inputHdTipoLogradouro[id] = $('hdTipoLogradouro[' + id + ']');

			if ( _inputCEP[id]  ) { 
			
				_inputCEP[id].onblurold = _inputCEP[id].onblur;			
				_inputCEP[id].onblur = function (event) {
					_id = getId(getTarget(event));
					if (_inputCEP[_id].onblurold) {
						_inputCEP[_id].onblurold(event);
					}
					onBlurHandlerCEP(event);
				}
			
				_inputCEP[id].onkeypressold = _inputCEP[id].onkeypress;
				
				
				if( _inputUF[id] ) {
					_inputUF[id].disabled=true;
				}
				if( _inputMunicipio[id] ) {
					_inputMunicipio[id].disabled=true;
				}
				
			
			}
			
			_inputMunicipio[id].onchangeold = _inputMunicipio[id].onchange;
			_inputMunicipio[id].onchange = function (event) {
				_id = getId(getTarget(event));
				onChangeHandlerMunicipio(event);
				if (_inputMunicipio[_id].onchangeold) {
					_inputMunicipio[_id].onchangeold(event);
				}
			}
			
			_inputUF[id].onchangeold = _inputUF[id].onchange;
			_inputUF[id].onchange = function (event) {
				_id = getId(getTarget(event));
				if (_inputUF[_id].onchangeold) {
					_inputUF[_id].onchangeold(event);
				}
				onChangeHandlerUF(event);
			}
			
			document.onclickold = document.onclick;
			document.onclick = function (event) {
				if (document.onclickolkd) {
					document.onclickold(event);
				}
				onClickHandlerDocument(event); 
			}
			
			_inputMunicipio[id].onselectold = _inputMunicipio[id].onselect;
			_inputMunicipio[id].onselect = function (event) {
				_id = getId(getTarget(event));
				onSelectHandlerMunicipio();
				if (_inputMunicipio[_id].onselectold) {
					_inputMunicipio[_id].onselectold(event);
				}
			}

			createLista(id);
			if (_inputUF[id].value != "" ) {
				rpcLocalidades(id, _inputUF[id].value);
				
				
			}
			
			if ( _inputBairro[id] ) {
				if ( _inputCodEndereco[id].value != -2 ) {
					_inputBairro[id].disabled=true;
					
					criaHidden(_LOGRADOURO, _inputEndereco[id].name, id);
					document.getElementById(_inputEndereco[id].name).value = _inputEndereco[id].value;
					
					criaHidden(_BAIRRO, _inputBairro[id].name, id);
					document.getElementById(_inputBairro[id].name).value = _inputBairro[id].value;

					_inputEndereco[id].disabled=true;
					_inputEndereco[id].style.background = "#C0C0C0";
					_inputBairro[id].style.background = "#C0C0C0";
					_inputTipoLogradouro[id].disabled=true;
					_inputTipoLogradouro[id].style.background = "#C0C0C0";					
				} else {
					removeHidden(_LOGRADOURO, _inputEndereco[id].name, id);
					removeHidden(_BAIRRO, _inputBairro[id].name, id);
					
					_inputBairro[id].disabled=false;
					_inputEndereco[id].disabled=false;
					_inputEndereco[id].style.background = "#FFFFFF";
					_inputBairro[id].style.background = "#FFFFFF";
					_inputTipoLogradouro[id].disabled=false;
					_inputHdTipoLogradouro[id].disabled=false;
					_inputTipoLogradouro[id].style.background = "#FFFFFF";					
				}			
			}
			
			if (  _inputEndereco[id] ) {
//			if (_IE) {
				_inputEndereco[id].onkeyupold = _inputEndereco[id].onkeyup;
				_inputEndereco[id].onkeyup = function (event) {
					_id = getId(getTarget(event));
					if (_inputEndereco[_id].onkeyupold) {
						_inputEndereco[_id].onkeyup(event);
					}
					keyupHandlerEndereco(event);
				}				
			}
			
			
			
//			if (_findOnType[id])
//				mainLoop(id); // início único do loop
//			

			if (_inputTipoLogradouro[id]) {
				_inputTipoLogradouro[id].onchange = function (event) {
					onChangeHandlerTipoLogradouro(event);
				}
			}	
			

		}
	} catch (ex) {
		rpcError(id, "onloadCep: " + ex.name + " " + ex.message);
	}
}


/**
 * Código chamado quando o uruário faz uma consulta. É executado antes de efetuar a pesquisa ou pegar da cache.
 */
function doBeforeSearch(id) {
	enableBairroField(id);
}


// busc ********************************************************************************

/**
 * Realiza a query por informações parciais de endereço (recupera da chache - que é geral - quando possível)
 * @param erro Define se é para mostrar erro (true) ou não (false).
 * @param direto Define se é para mostrar direto caso ocorra apenas um resultado ou não. (true ou false)
 * @param id id da instância
 */
function queryEndereco(id, erro, direto) {
	 doBeforeSearch(id);

	 if (!_inputEndereco[id].disabled) {
	    //rpcCarregando(id);
	 	try {
	 	    // município tem cep único, não quero busca parcial por logradouro...
	 	    var localidadeEmCache = getLocalidadePorChave(_inputMunicipio[id].value, _inputUF[id].value)
	 	    if (localidadeEmCache != null && localidadeEmCache.situacaoCep == 0) {
	 	        resetaLista(id);
				esconde(_lista[id]);
//				esconde(_box[id]);
				escondeId(id);
				
				terminaBusca(id);
				return;
	 	    }
	 	    if (retrieveByLogradouroFromCache(_inputEndereco[id].value, id))
	 	    	return;
		} catch (ex) {
		    definirMensagem("queryEndereco: " + ex);
		    //não mostra mais erro
		}
		_mostraErro[id] = erro;
		_mostraDireto[id] = direto;
		rpcLogradouros(id, _inputEndereco[id].value, _inputCEP[id].value);		
	}	
}

/**
 * Realiza a query por cep
 * @param erro Define se é para mostrar erro (true) ou não (false).
 * @param direto Define se é para mostrar direto caso ocorra apenas um resultado ou não. (true ou false)
 * @param id id da instância
 */
function queryCEP(id, erro, direto) {
	
	    
	    doBeforeSearch(id);
	   //rpcCarregando(id);
			if (!_inputCEP[id].disabled) {
				_mostraErro[id] = erro;
				_mostraDireto[id] = direto;
				terminaBusca(id);
				rpcCEP(id, _inputCEP[id].value);
			}
	  
}


// rpc ********************************************************************************

/**
 * Busca localidades da UF informada
 *
 * @param código da UF
 * @param id id da instância
 */
function rpcLocalidades (id, uf) {
	//rpcCarregando(id);
	var valorUf = uf;
	if (uf == '' ) {
		valorUf = '0';
	}
	 
	if (getCache(uf) != null) { // cache é geral
		preHandlers(id);
		rpcLocalidadesDone(id, getCache(valorUf));
		postHandlers(id);
	} else {
		url = "buscar_localidade.do?UF=" + valorUf + "&id=" + id ;
		_request[id].send(url);
	}
}


/**
 * Busca um ou mais endereços a partir do CEP
 *
 * @param cep número do CEP
 * @param id id da instância
 */
function rpcCEP (id, cep) { 

	tmp = String(cep).replace(/\D/g, "");
	if (getCache(tmp) != null && getCache(tmp).codEndereco != -2) { // cache é geral
	rpcCarregando(id);
		preHandlers(id);
		rpcCEPDone(id, getCache(tmp));
		postHandlers(id);		
	} else {
	
		var tmpCep = String(cep).replace(/\D/g, "");
	
		if (cep != null && trim(cep) != "" && tmpCep.length > 0) {
			rpcCarregando(id);
			url = "buscar_cep.do?CEP=" + tmpCep + "&id=" + id ;
			_request[id].send(url);
//			_inputCEP[id].value
			
		} else {
			resetCombo(id);
			resetEndereco(id);
			resetaLista(id);
//			rpcError(id, "não busca CEP vazio.");
		}
	}
}

/** 
 * Busca um ou mais endereços a partir de um nome
 * parcial da rua.
 *
 * @param endereco Nome parcial da rua
 * @param municipio código do município
 * @param uf código da UF
 * @param id id da instância
 */ 
function rpcLogradouros (id, endereco, cep) {
    var enderecoCache = getEndereco(endereco.toLowerCase());
	if (enderecoCache && 
	    enderecoCache.uf == _inputUF[id].value && 
	    enderecoCache.localidade == _inputMunicipio[id].value) { // se encontrou no cache - que é geral - verifica se é do lugar certo
			preHandlers(id);
			rpcLogradourosDone(id, enderecoCache);
			postHandlers(id);
	} else {
	    url = "buscar_logradouro.do?endereco=" + escape(endereco) + "&CEP=" + cep + "&id=" + id ;
		_request[id].send(url);
	}
}

/**
 * Exibe a imagem que indica execução de busca.
 *
 * @param id id da instância
*/
function rpcCarregando (id) {
	if(_textoBusca[id]) {
	    _box[id].innerHTML = "<img src='images/indicator.gif'/> " + _textoBusca[id].value;	
		mostra(_box[id]);
	}
}

/**
* Terminou a busca, então esconde a caixinha.
* @param id id da instância
*/
function rpcCarregandoDone(id) {
//    esconde(_box[id]);
    escondeId(id);
    
}

// rpcd ********************************************************************************

/** 
 * RPC que atualiza a lista de localidades
 *
 * @param municipios Array de objetos Localidade
 * @param id id da instância
 */
function rpcLocalidadesDone (id, localidades) {
//	esconde(_box[id]); // esconde tela de mensagens
    escondeId(id);

	combo = _inputMunicipio[id];
	combo.options.length = 0; // resetando combo
	var localidadesValidas = new Array();
	
	for (i = 0; i < localidades.length; i++) {
		if (_filtroLocalidade[id] != null && _filtroLocalidade[id].length > 0)
			if (!_filtroLocalidade[id].contains(localidades[i].chave) && (localidades[i].chave != 0))
				continue;			
		
		localidadesValidas.push(localidades[i]);
			
		opcao = new Option();
		opcao.value = localidades[i].chave;
		opcao.text = localidades[i].nome;
		
		combo.options.add(opcao);
		terminaBusca(id); 
	}
	
	// Não tá na cache ainda?
	if (localidadesValidas.length > 0 && getCache(localidadesValidas[0].uf) == null) {
		putCache(localidadesValidas[0].uf, localidadesValidas);
	}
	if (_inputTipoLogradouro[id]) {
		rpcTipoLogradouro (id); 
	} 
}

function resetCombo(id) {
	combo = _inputTipoLogradouro[id];
	combo.options.length = 0; // resetando combo
	_inputHdTipoLogradouro[id].value="";
	combo = _inputUF[id];
	combo.value=""; // resetando combo
	_inputHdUF[id].value="";
	combo = _inputMunicipio[id];
	combo.options.length = 0; // resetando combo
	_inputHdMunicipio[id].value=""; 

}

/** 
 * RPC que retorna resultados de busca por CEP
 * 
 * @param objeto endereco com informacoes encontradas
 * @param id id da instância
 */
function rpcCEPDone (id, endereco) {
	//esconde(_box[id]);
	escondeId(id);
	putCache(endereco.cep, endereco); // colocando no cache geral
	displayForm(id, endereco);
	terminaBusca(id);
}

/** 
 * RPC que retorna resultados de busca por nome parcial de rua
 * 
 * @param enderecos Array com objetos Endereco
 * @param id id da instância
 */
function rpcLogradourosDone (id, logradouros) {
	escondeId(id);
	if (logradouros.length == 1 && _mostraDireto[id] == true) // retornou um resultado direto
		displayForm(id, logradouros[0]);
	else { // tem mais de um resultado ou nao quer mostrar direto, mostra lista
	   // if (_ultimoEndereco[id] != null)
//	    	putCache(_ultimoEndereco[id].toLowerCase(), logradouros); // colocando no cache geral
		resetEndereco(id);		
		resetCombo(id);
		_inputCodEndereco[id].value="";
		displayList(id, logradouros);
	}
	
	terminaBusca(id);
}


/** 
 * RPC que retorna resultados de busca por nome parcial de rua
 * 
 * @param enderecos Array com objetos Endereco
 * @param id id da instância
 */
function rpcLogradourosDigitacaoDone (id, logradouros) {
	escondeId(id);
	if (logradouros.length > 0 ) {
		displayList(id, logradouros);
	} else {
		esconde(_lista[id]);
	}
	terminaBusca(id);
}


/**
 * Mostra qualquer erro que tenha ocorrido no lado do servidor.
 * (separado aqui pra poder colocar telinha legal de erro num div)
 * @param mensagem mensagem a ser exibida
 * @param id id da instância
 */
function rpcError (id, mensagem) {
	resetCombo(id);
	resetEndereco(id);
	resetaLista(id);
	_box[id].innerHTML = mensagem;
	if (_mostraErro[id]) 
		mostra(_box[id]);
	_mostraErro[id] = false;
}

/**
 * Informa se o servidor retornou uma resposta de erro.<b>  
 * @param mensagem resposta do servidor a uma requisição
 */
function rpcIsErrorReply(mensagem) {
    var errorPrefix = "rpcError";
    var isError = (trim(mensagem).length > errorPrefix.length && trim(mensagem).substring(0,errorPrefix.length) == errorPrefix);
    return isError;     
}


// boot ********************************************************************************

/**
 * Retorna a UF selecionada atualmente, criada meramente pra
 * diminuir a complexidade do código de warmup.
 *
 * @return uf código da uf
 * @param id id da instância
 */
function getSelectedUF(id) {
	var uf = _inputUF[id];
	selected = _inputUF[id].selectedIndex;
	if ( _inputUF[id].options[selected].value = "")
		return 0;
	return _inputUF[id].options[selected].value;
}

/**
 * Retorna a UF selecionada atualmente, criada meramente pra
 * diminuir a complexidade do código de warmup.
 *
 * @return uf código da uf
 * @param id id da instância
 */
function getSelectedLocalidade(id) {
	selected = _inputMunicipio[id].selectedIndex;
	return _inputMunicipio[id].options[selected].value;
}

/*
 * Salvando onLoad anterior e executando junto com o do CEP
 */
var oldLoad = window.onload;
window.onload = function() {
}

// cache

/**
 * Finaliza uma busca por logradouro, se o logradouro estiver na cache.
 * @param logradouro nome do logradouro
 * @return se obteve sucesso ao tentar preencher da cache
 */
function retrieveByLogradouroFromCache(logradouro, id) {
   var inputCEP       = trim(_inputCEP[id].value);
   var inputEndereco  = trim(_inputEndereco[id].value);
   var inputBairro    = trim(_inputBairro[id].value);
   var inputUF        = trim(_inputUF[id].value);
   var inputMunicipio = trim(_inputMunicipio[id].value);
   
   var successOnRetrievingFromCache = false;
   
   var enderecoEmCache = getEnderecoWithVariation(logradouro.toLowerCase());
   
   if (enderecoEmCache != null) {
       rpcCarregando(id);
       successOnRetrievingFromCache = true;
       
	   if (typeof enderecoEmCache[0] == 'object' ) { // se existe e é um array de (múltiplos) endereços, compara formulario
	        var temp = enderecoEmCache[0];
			if (temp.uf != null &&
				temp.localidade != null &&
			    inputUF         == temp.uf &&
			    inputMunicipio  == temp.localidade) {
			    
			   preHandlers(id);
			   displayList(id, enderecoEmCache);
			   postHandlers(id);
			   terminaBusca(id);
				successOnRetrievingFromCache = true;
			} 
					
		} else if (enderecoEmCache.uf != null &&
				   enderecoEmCache.localidade != null &&
				   inputUF == enderecoEmCache.uf &&
				   inputMunicipio == enderecoEmCache.localidade) { // um endereço só, e tá na cache, preenche direto
			preHandlers(id);
			if (_mostraDireto[id] == 'true') {
				displayForm(id, enderecoEmCache)
			} else {
			    var enderecos = new Array();
			    enderecos.push(enderecoEmCache);
			    displayList(id, enderecos);
			}
			postHandlers(id);
			terminaBusca(id);
			successOnRetrievingFromCache = true;
		} 
		rpcCarregandoDone(id);
	} 
	return successOnRetrievingFromCache;
}

// cache utils **************************************************************************

/**
 * Retorna o objeto de localidade em cache relacionado é chave informada. Se não existir tal objeto em cache, retorna nulo.
 * @param chave chave de localidade
 * @param uf uf da localidade 
 */ 
function getLocalidadePorChave(chave, uf) {
   var localidadeObj = null;
   var localidadesCache = getCache(uf);
   if (chave != null && localidadesCache != null) {
    	for (i = 0; i < localidadesCache.length; ++i) {
        	if (localidadesCache[i].chave == chave) {
				localidadeObj = localidadesCache[i];
    	        break;
    		}
		}
	}
	return localidadeObj;
}

/**
 * Coloca o valor definido na propriedade correspondente em cache
 * @property Propriedade 
 * @value Valor
 */
function putCache(property,value) {
   if (property != null)
      _cache[property] = value;
}

/**
 * Retorna o valor da propriedade em cache
 * @property Propriedade 
 */
function getCache(property) {
   return _cache[property];
}

/**
 * Retorna um objeto endereco válido da cache a partir do nome da rua.
 * @param rua Nome da rua
 */
function getEndereco(rua) {
   var enderecoObj = getCache(rua);
   enderecoObj = (enderecoObj != null && (enderecoObj.nome != null || enderecoObj.length > 0)) ? enderecoObj : null;
   return enderecoObj;   
}

/**
 * Busca um endereço na cache considerando variações possiveis no nome da rua fornecido.
 * @param rua Nome da rua em que serão aplicadas variações
 * @return Objeto endereco, caso a rua esteja em cache
 */
function getEnderecoWithVariation(rua) {
   var enderecoObj = getEndereco(rua);
   if (enderecoObj != null)
      return enderecoObj;
   enderecoObj = getEndereco("rua " + rua);
   if (enderecoObj != null)
      return enderecoObj;
   enderecoObj = getEndereco("avenida " + rua);
   return enderecoObj;   
}

// util *********************************************************************************

/**
 * Copia todos os dados de um formulário de cep para outro
 *
 * @param id1 id do formulário de origem
 * @param id2 id do formulário de destino
 */
function copiaFormulario(id1, id2) {

	if (_inputCEP[id2].value != _inputCEP[id1].value)
		_inputCEP[id2].value = _inputCEP[id1].value;
	
	if (_inputEndereco[id2].value != _inputEndereco[id1].value)
		_inputEndereco[id2].value = _inputEndereco[id1].value;
	
	if (_inputBairro[id2].value != _inputBairro[id1].value)
		_inputBairro[id2].value = _inputBairro[id1].value;
	
	if (_inputUF[id2].selectedIndex != _inputUF[id1].selectedIndex)
		_inputUF[id2].selectedIndex = _inputUF[id1].selectedIndex;

	if (_inputMunicipio[id2].selectedIndex != _inputMunicipio[id1].selectedIndex) {
		_inputMunicipio[id2].options.length = 0;
		for (var i = 0; i < _inputMunicipio[id1].options.length; i++) {
			tmp = _inputMunicipio[id1].options[i];
			opt = new Option();
			opt.value = tmp.value;
			opt.text = tmp.text;
			opt.selected = tmp.selected;
			_inputMunicipio[id2].options.add(opt);		
		}
	}
	// campos opcionais
	try {
		if (_inputNumero[id2] && _inputNumero[id1] && _inputNumero[id2].value != _inputNumero[id1].value)
			_inputNumero[id2].value = _inputNumero[id1].value;		
		
		if (_inputComplemento[id2] && _inputComplemento[id1] && _inputComplemento[id2].value != _inputComplemento[id1].value)
			_inputComplemento[id2].value = _inputComplemento[id1].value;
		
		if (_inputTelefone[id2] && _inputTelefone[id1] && _inputTelefone[id2].value != _inputTelefone[id1].value)
			_inputTelefone[id2].value = _inputTelefone[id1].value;
		
		if (_inputFax[id2] && _inputFax[id1] && _inputFax[id2].value != _inputFax[id1].value) 
			_inputFax[id2].value = _inputFax[id1].value;
	} catch (ex) { }
		
		if (_inputTipoLogradouro[id2].selectedIndex != _inputTipoLogradouro[id1].selectedIndex) {
		_inputTipoLogradouro[id2].options.length = 0;
		for (var i = 0; i < _inputTipoLogradouro[id1].options.length; i++) {
			tmp = _inputTipoLogradouro[id1].options[i];
			opt = new Option();
			opt.value = tmp.value;
			opt.text = tmp.text;
			opt.selected = tmp.selected;
			_inputTipoLogradouro[id2].options.add(opt);		
		}
	}	
	
}

function criaHidden(tipoCampo, nomeCampo, id) {
	if (tipoCampo == _LOGRADOURO) {
		document.getElementById('logradouroHidden[' + id + ']').innerHTML = geraCodigoHidden(nomeCampo);
	} else if (tipoCampo == _BAIRRO) {
		document.getElementById('bairroHidden[' + id + ']').innerHTML = geraCodigoHidden(nomeCampo);
	}
}

function removeHidden(tipoCampo, nomeCampo, id) {
	if (tipoCampo == _LOGRADOURO) {
		document.getElementById('logradouroHidden[' + id + ']').innerHTML = '';
	} else if (tipoCampo == _BAIRRO) {
		document.getElementById('bairroHidden[' + id + ']').innerHTML = '';
	}
}

/**
 * Seleciona um tipo logradouro da lista de tipos de logradouro
 * @param código do tipo de logradouro
 * @param id id da instância
 */
function escolheTipoLogradouro(id, tipoLogradouro) {
	docTipoLogradouro = _inputTipoLogradouro[id]; 
	
	for (i = 0; i < docTipoLogradouro.options.length; i++) {
		if (docTipoLogradouro.options[i].value == tipoLogradouro) {
			docTipoLogradouro.options[i].selected = true;
			break;
		}
	}
}

/**
 * onChange para combo de tipo logradouro
 */
function onChangeHandlerTipoLogradouro(event) { 
	_inputHdTipoLogradouro[id].value=_inputTipoLogradouro[id].value;
}

/**
 * Busca Tipo Logradouro
 *
 * @param id id da instância
 */
function rpcTipoLogradouro (id) {
		url = "buscar_tipo_logradouro.do?id=" + id ;
		_request[id].send(url);
}

/** 
 * RPC que atualiza a lista de tipo de logradouro
 *
 * @param municipios Array de objetos TipoLogradouro
 * @param id id da instância
 */
function rpcTipoLogradouroDone (id, tipoLogradouros) {

    escondeId(id);
    
    if (_inputTipoLogradouro[id].disabled == false) {
    	
    	if (getCache('tiposLogradourosSelecionaveis') != null &&  
    	            getCache('tiposLogradourosSelecionaveis') != undefined) {
    	            
    	            tipoLogradouros = getCache('tiposLogradourosSelecionaveis');
    		
    	}
     
    } 

	combo = _inputTipoLogradouro[id];
	combo.options.length = 0; // resetando combo
	var tipoLogradouroSelecionaveis = new Array();
	
	for (i = 0; i < tipoLogradouros.length; i++) {
		
		if (tipoLogradouros[i].complemento == 'SELECIONAVEL') {
			tipoLogradouroSelecionaveis.push(tipoLogradouros[i]);
		}
		
			
		opcao = new Option();
		opcao.value = tipoLogradouros[i].codigo;
		opcao.text = tipoLogradouros[i].descricao;
		
		combo.options.add(opcao);
		terminaBusca(id);
	} 
	
	// Não tá na cache ainda?
	if (tipoLogradouroSelecionaveis.length > 0 && getCache(tipoLogradouroSelecionaveis[0].cep) == null) {
		putCache('tiposLogradourosSelecionaveis', tipoLogradouroSelecionaveis);
	}
	
	escolheTipoLogradouro(id, _inputHdTipoLogradouro[id].value);
}

function onSelectHandlerMunicipio() {
	_inputHdMunicipio[id].value=_inputMunicipio[id].value;
}

function geraCodigoHidden(nomeCampo) {
	return "<input type='hidden' name='"+nomeCampo+"' id='"+nomeCampo+"'></input>";
}