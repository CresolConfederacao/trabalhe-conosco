package br.com.cresol.desafio.model;

import java.io.Serializable;
import java.lang.Integer;
import javax.persistence.*;

/**
 * Entity implementation class for Entity: Cliente
 *
 */
@Entity
@Table(name="Cliente")
public class Cliente implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer idCliente;
	
	@Column
	private int cpf;
	
	@Column
	private String nome;
	
	@Column
	private String email;
	
	@OneToOne(mappedBy = "cliente", cascade = CascadeType.ALL, 
			fetch = FetchType.LAZY, optional = true)
	private SimulaEmprestimo simulacao;
	
	
	

	public Cliente() {
		super();
	}   
	public Integer getId() {
		return this.idCliente;
	}

	public void setId(Integer id) {
		this.idCliente = id;
	}
	public int getCpf() {
		return cpf;
	}
	public void setCpf(int cpf) {
		this.cpf = cpf;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public static boolean isCpfValido(int cpf) {
		String cpfString = Integer.toString(cpf);
		if(cpfString.length() == 11) {
			return true;
		}
		return false;
	}   
}
