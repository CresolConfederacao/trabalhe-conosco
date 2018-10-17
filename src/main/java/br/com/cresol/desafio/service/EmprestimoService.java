package br.com.cresol.desafio.service;

import java.util.Date;

import br.com.cresol.desafio.dao.ClienteDao;
import br.com.cresol.desafio.dao.SimulaDao;
import br.com.cresol.desafio.dto.SimulacaoEmprestimo;
import br.com.cresol.desafio.dto.SimularEmprestimoPayload;
import br.com.cresol.desafio.model.Cliente;
import br.com.cresol.desafio.model.SimulaEmprestimo;

/**
 * @author evandro
 *
 */
public class EmprestimoService {

	public SimulacaoEmprestimo simular(SimularEmprestimoPayload payload) {
		ClienteDao clienteDao = new ClienteDao();
		SimulaDao simulaDao = new SimulaDao();
		SimulaEmprestimo simulacao = new SimulaEmprestimo();
		SimulacaoEmprestimo simulacaoEmprestimo;
		
		Cliente cliente = (Cliente) clienteDao.consultarPorCpf(payload.getCpf());
		if(cliente != null ) {
			cliente.setNome(payload.getNome());
			cliente.setCpf(payload.getCpf());
			cliente.setEmail(payload.getEmail());
			simulacao.setValorContrato(payload.getValorContrato());
			simulacao.setQuantidadeParcelas(payload.getQuantidadeParcelas());
			simulacaoEmprestimo = new SimulacaoEmprestimo(cliente.getCpf(), 
					cliente.getNome(), cliente.getEmail(), simulacao.getNumeroContrato(), 
					simulacao.getDataSimulacao(), simulacao.getDataValidadeSimulacao(), 
					simulacao.getValorContrato(), simulacao.getQuantidadeParcelas(), 
					simulacao.getValorParcelas(),simulacao.getTaxaJurosEmprestimo());			
		}else {
			simulacaoEmprestimo = null;
		}
		return simulacaoEmprestimo;
	}

}
