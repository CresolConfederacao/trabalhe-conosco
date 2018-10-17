package br.com.cresol.desafio.dto;

import java.util.Date;

import javax.persistence.Column;

/**
 * @author evandro
 *
 */
public class SimulacaoEmprestimo {
	
	private int cpf;
	private String nome;
	private String email;
	private Integer numeroContrato;
	private Date dataSimulacao;
	private Date dataValidadeSimulacao;
	private Double valorContrato;
	private Integer quantidadeParcelas;
	private Double valorParcelas;
	private Double taxaJurosEmprestimo;

	

	public SimulacaoEmprestimo(int cpf, String nome, String email, Integer numeroContrato, Date dataSimulacao,
			Date dataValidadeSimulacao, Double valorContrato, Integer quantidadeParcelas, Double valorParcelas,
			Double taxaJurosEmprestimo) {
		super();
		this.cpf = cpf;
		this.nome = nome;
		this.email = email;
		this.numeroContrato = numeroContrato;
		this.dataSimulacao = dataSimulacao;
		this.dataValidadeSimulacao = dataValidadeSimulacao;
		this.valorContrato = valorContrato;
		this.quantidadeParcelas = quantidadeParcelas;
		this.valorParcelas = valorParcelas;
		this.taxaJurosEmprestimo = taxaJurosEmprestimo;
	}



	public SimulacaoEmprestimo() {
		super();
		// TODO Auto-generated constructor stub
	}

	
}
