package br.com.cresol.desafio.model;

import java.io.Serializable;
import java.lang.Double;
import java.lang.Integer;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import javax.persistence.*;

/**
 * @author evandro
 *
 */
@Entity
@Table(name="Simulacoes")

public class SimulaEmprestimo implements Serializable {
	
	private static final long serialVersionUID = 1L;
	   
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer idSimula;
	@Column
	private Integer numeroContrato;
	@Column
	private Date dataSimulacao;
	@Column
	private Date dataValidadeSimulacao;
	@Column
	private Double valorContrato;
	@Column
	private Integer quantidadeParcelas;
	@Column
	private Double valorParcelas;
	@Column
	private Double taxaJurosEmprestimo;
	@MapsId
	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "idCliente")
	private Cliente cliente;
	 
	@OneToOne(mappedBy = "simulacao", cascade = CascadeType.ALL, 
			fetch = FetchType.LAZY, optional = true)
	private ContrataEmprestimo contrato;

	
	

	public SimulaEmprestimo() {
		super();
	}   
	public Integer getId() {
		return this.idSimula;
	}

	public void setId(Integer id) {
		this.idSimula = id;
	}   
	public Integer getNumeroContrato() {
		this.numeroContrato = getId();
		return this.numeroContrato;
	}  
	public Date getDataSimulacao() {	
		dataSimulacao = new Date();
		return this.dataSimulacao;
	}

	public Date getDataValidadeSimulacao() {
		Calendar calendar = Calendar.getInstance();
        calendar.setTime(getDataSimulacao());
        calendar.add(Calendar.DATE, 30);
        this.dataValidadeSimulacao =  calendar.getTime();
		return this.dataValidadeSimulacao;
	}
  
	public Double getValorContrato() {
		return this.valorContrato;
	}

	public void setValorContrato(Double valorContrato) {
		
		this.valorContrato = valorContrato;
	}   
	public Integer getQuantidadeParcelas() {
		return this.quantidadeParcelas;
	}

	public void setQuantidadeParcelas(Integer quantidadeParcelas) {
		if (quantidadeParcelas > 24) {
			throw new RuntimeException("Número de Parcelas maior que permitido");
		}
		this.quantidadeParcelas = quantidadeParcelas;
	}   
	public Double getValorParcelas() {
		this.valorParcelas = getValorContrato()*(1+(getQuantidadeParcelas()*getTaxaJurosEmprestimo()))/getQuantidadeParcelas();
		return this.valorParcelas;
	}

	public void setValorParcelas(Double valorParcelas) {
		this.valorParcelas = valorParcelas;
	}   
	public Double getTaxaJurosEmprestimo() {
		if (getValorContrato() <= 1000.00 && getQuantidadeParcelas() <= 12) {
			this.taxaJurosEmprestimo = 0.018;
		} else if (getValorContrato() <= 1000.00 && getQuantidadeParcelas() > 12) {
			this.taxaJurosEmprestimo = 0.023;
		} else if (getValorContrato() > 1000.00 && getQuantidadeParcelas() <= 12) {
			this.taxaJurosEmprestimo = 0.03;
		} else {
			this.taxaJurosEmprestimo = 0.035;
		}
		return this.taxaJurosEmprestimo;
	}
	
	public String numeroContratoFormatado() {
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy/MM/dd");
		String numContratoFormat = sdf.format(getDataSimulacao()) + String.format("%06d", getNumeroContrato());
		return numContratoFormat;
	}
   
}
