package br.com.cresol.desafio.resource;

import javax.annotation.PostConstruct;
import javax.enterprise.inject.Produces;
import javax.ws.rs.DELETE;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;

import br.com.cresol.desafio.dao.ClienteDao;
import br.com.cresol.desafio.dao.SimulaDao;
import br.com.cresol.desafio.dto.SimulacaoEmprestimo;
import br.com.cresol.desafio.dto.SimularEmprestimoPayload;
import br.com.cresol.desafio.model.Cliente;
import br.com.cresol.desafio.service.EmprestimoService;
import io.swagger.annotations.Api;

/**
 * @author evandro
 *
 */
@Api
@Path("/emprestimo")
public class EmprestimoResource {
	private ClienteDao clienteDao;
	private SimulaDao simulaDao;
	
	@PostConstruct
	private void init() {
		clienteDao = new ClienteDao();
		simulaDao = new SimulaDao();
	}
	
	@POST
	@Path("/simular")
	public SimulacaoEmprestimo simular(SimularEmprestimoPayload payload) {
		return new EmprestimoService().simular(payload);
	}
	
	@DELETE
	@Path("/deletar/{id}")
	public String deletarSimulacao(@PathParam("id") int idSimulacao) {
		String msg;
		try {
			simulaDao.excluir(idSimulacao);
			msg = "Removida com sucesso";
		} catch (Exception e) {
			msg = "Erro na remoção da simulação";
		}
		return msg;
	}
	
	@POST
	@Path("/inserir")
	public String inserir(Cliente cliente) {
		String msg;
		try {
			clienteDao.salvar(cliente);
			msg = "Inserção do cliente com sucesso";
		} catch (Exception e) {
			msg = "Erro na inserção";
		}
		return msg;
	}

}
