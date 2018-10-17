package br.com.cresol.desafio.dto;

import java.util.Date;



/**
 * @author evandro
 *
 */
public class SimularEmprestimoPayload {
	private int cpf;
	private String nome;
	private String email;
	private Double valorContrato;
	private Integer quantidadeParcelas;

	public SimularEmprestimoPayload(int cpf, String nome, String email, Double valorContrato,
			Integer quantidadeParcelas) {
		super();
		this.cpf = cpf;
		this.nome = nome;
		this.email = email;
		this.quantidadeParcelas = quantidadeParcelas;
	}

	public int getCpf() {
		return cpf;
	}

	public String getNome() {
		return nome;
	}

	public String getEmail() {
		return email;
	}

	public Integer getQuantidadeParcelas() {
		return quantidadeParcelas;
	}

	public Double getValorContrato() {
		return valorContrato;
	}
}
