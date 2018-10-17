package br.com.cresol.desafio.dao;

import javax.persistence.EntityManager;

import br.com.cresol.desafio.conexao.BDConection;
import br.com.cresol.desafio.model.SimulaEmprestimo;

public class SimulaDao {
	
	BDConection bdConexao;
	EntityManager emf;
	public SimulaEmprestimo salvar(SimulaEmprestimo simulacao) throws Exception {

		bdConexao = new BDConection();
		emf = bdConexao.getEntityManager();
		try {
			
			emf.getTransaction().begin();
			
			if(simulacao.getId() == null) {
				
				emf.persist(simulacao);
			} else {
				
				simulacao = emf.merge(simulacao);
			}
			
			emf.getTransaction().commit();
		} finally {
			emf.close();
		}
		return simulacao;
	}

	public void excluir(Integer id) {
		
		bdConexao = new BDConection();
		emf = bdConexao.getEntityManager();
		try {
			
			emf.getTransaction().begin();

			SimulaEmprestimo simulacao = emf.find(SimulaEmprestimo.class, id);
			emf.remove(simulacao);
			emf.getTransaction().commit();
		} catch(Exception e){
			emf.getTransaction().rollback();
		}finally {
		
			emf.close();
		}
	}
	
	public SimulaEmprestimo consultarPorId(Integer id) {
	bdConexao = new BDConection();
	emf = bdConexao.getEntityManager();
	SimulaEmprestimo simulacao = null;
    try {
      
    	simulacao = emf.find(SimulaEmprestimo.class, id);
    } finally {
    	emf.close();
    }
    return simulacao;
  }
}
