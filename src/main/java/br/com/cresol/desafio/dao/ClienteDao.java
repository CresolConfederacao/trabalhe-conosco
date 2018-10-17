package br.com.cresol.desafio.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import org.hibernate.Session;

import br.com.cresol.desafio.conexao.BDConection;
import br.com.cresol.desafio.model.Cliente;

public class ClienteDao {
	
	BDConection bdConexao;
	EntityManager emf;
	public Cliente salvar(Cliente cliente) throws Exception {
		
		bdConexao = new BDConection();
		emf = bdConexao.getEntityManager();
	    try {
	      
	    	emf.getTransaction().begin();
	      
	      if(cliente.getId() == null) {
	     
	    	  emf.persist(cliente);
	      } else {
	        
	    	  cliente = emf.merge(cliente);
	      }
	      
	      emf.getTransaction().commit();
	    } finally {
	    	emf.close();
	    }
	    return cliente;
	  }
	
	public List<Cliente> consultarPorCpf(int cpf) {
		bdConexao = new BDConection();
		emf = bdConexao.getEntityManager();
		Cliente cliente = new Cliente();
		
		if (Cliente.isCpfValido(cpf)) {
			String string = "Select * from Cliente where cpf = :cpf";
			Query consulta = emf.createQuery(string);
			consulta.setParameter("cpf", cliente.getCpf());
			List<Cliente> clientes = consulta.getResultList();
			emf.close();
			return clientes;
		} else {
			emf.close();
			throw new RuntimeException("CPF inválido");
		}
		
		
	}
	/*public Cliente consultarPorId(Integer id) {
		bdConexao = new BDConection();
		emf = bdConexao.getEntityManager();
	    Cliente cliente = null;
	    try {
	      
	    	cliente = emf.find(Cliente.class, id);
	    } finally {
	    	emf.close();
	    }
	    return cliente;
	  }*/
}
