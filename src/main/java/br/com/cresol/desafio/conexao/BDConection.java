package br.com.cresol.desafio.conexao;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class BDConection {
	public EntityManager getEntityManager() {
	    EntityManagerFactory factory = null;
	    EntityManager entityManager = null;
	    try {
	      factory = Persistence.createEntityManagerFactory("trabalheCconosco");
	      entityManager = factory.createEntityManager();
	    } finally {
	      factory.close();
	    }
	    return entityManager;
	  }
}
