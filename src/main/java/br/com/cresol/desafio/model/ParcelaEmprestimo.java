package br.com.cresol.desafio.model;

import java.io.Serializable;
import java.lang.Integer;
import java.util.Date;
import javax.persistence.*;

/**
 * Entity implementation class for Entity: ParcelaEmprestimo
 *
 */
@Entity
@Table(name="Parcelas")

public class ParcelaEmprestimo implements Serializable {
	
	private static final long serialVersionUID = 1L;
	   
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	@Column
	private Integer numeroContrato;
	@Column
	private Integer numeroDaParcela;
	@Column
	private Date dataVencimento;
	@ManyToOne
	 @JoinColumn(name="id")
	 private ContrataEmprestimo contratacao;
	

	public ParcelaEmprestimo() {
		super();
	}   
	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}   
	public Integer getNumeroContrato() {
		return this.numeroContrato;
	}

	public void setNumeroContrato(Integer numeroContrato) {
		this.numeroContrato = numeroContrato;
	}   
	public Integer getNumeroDaParcela() {
		return this.numeroDaParcela;
	}

	public void setNumeroDaParcela(Integer numeroDaParcela) {
		this.numeroDaParcela = numeroDaParcela;
	}   
	public Date getDataVencimento() {
		return this.dataVencimento;
	}

	public void setDataVencimento(Date dataVencimento) {
		this.dataVencimento = dataVencimento;
	}
   
}
