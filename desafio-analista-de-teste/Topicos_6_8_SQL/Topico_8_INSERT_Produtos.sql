CREATE TABLE Produtos
(
    codigo text NOT NULL,
    nome text,
    descricao text,
    valor numeric,
    data_de_cadastro date,
    PRIMARY KEY (codigo)
);

INSERT INTO PRODUTOS (codigo, nome, descricao, valor, data_de_cadastro) 
VALUES 
('BH12', 'produto1', 'desc_produto1', 100, current_date),
('BH13', 'produto2', 'desc_produto2', 200, current_date),
('BH14', 'produto3', 'desc_produto3', 300, current_date)
