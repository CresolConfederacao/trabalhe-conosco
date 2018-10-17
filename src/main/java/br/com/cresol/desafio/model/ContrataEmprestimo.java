package br.com.cresol.desafio.model;

import java.io.Serializable;
import java.lang.Double;
import java.lang.Integer;
import java.util.Date;
import java.util.List;

import javax.persistence.*;

/**
 * Entity implementation class for Entity: ContratarEmprestimo
 *
 */
@Entity
@Table(name="Contratacoes")

public class ContrataEmprestimo implements Serializable {
	private static final long serialVersionUID = 1L;
	   
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	@Column
	private Integer numeroContrato;
	@Column
	private Date dataContratacao;
	@Column
	private Double valorContrato;
	@Column
	private Double taxaJurosEmprestimo;
	@Column
	private Double iofContrato;
	
	@MapsId
	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "idSimula")
	private SimulaEmprestimo simulacao;

	@OneToMany(mappedBy = "contratacao", targetEntity = ParcelaEmprestimo.class, fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private List<ParcelaEmprestimo> parcelas;
	

	public ContrataEmprestimo() {
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
	public Date getDataContratacao() {
		return this.dataContratacao;
	}

	public void setDataContratacao(Date dataContratacao) {
		this.dataContratacao = dataContratacao;
	}   
	public Double getValorContrato() {
		return this.valorContrato;
	}

	public void setValorContrato(Double valorContrato) {
		this.valorContrato = valorContrato;
	}   
	public Double getTaxaJurosEmprestimo() {
		return this.taxaJurosEmprestimo;
	}

	public void setTaxaJurosEmprestimo(Double taxaJurosEmprestimo) {
		this.taxaJurosEmprestimo = taxaJurosEmprestimo;
	}   
	public Double getIofContrato() {
		return this.iofContrato;
	}

	public void setIofContrato(Double iofContrato) {
		this.iofContrato = iofContrato;
	}
	public List<ParcelaEmprestimo> getParcelas() {
		return parcelas;
	}
	public void setParcelas(List<ParcelaEmprestimo> parcelas) {
		this.parcelas = parcelas;
	}
	
	
   
}
