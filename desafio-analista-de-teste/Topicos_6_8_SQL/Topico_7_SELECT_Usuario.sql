CREATE TABLE ESTADO
(
    id serial NOT NULL,
    nome text,
    PRIMARY KEY (id)
);

CREATE TABLE USUARIO
(
    id serial NOT NULL,
    nome text,
    salario numeric,
    em_alteracao boolean,
    ativo boolean,
    uf integer,
    PRIMARY KEY (id),
    CONSTRAINT estado_id FOREIGN KEY (uf)
        REFERENCES estado (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
);

CREATE TABLE CONTA
(
    id serial NOT NULL,
    ativa boolean,
    id_usuario integer,
    PRIMARY KEY (id),
    CONSTRAINT id_user FOREIGN KEY (id_usuario)
        REFERENCES usuario (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
);


INSERT INTO ESTADO 
(id, nome) values
(1, 'São Paulo'),
(2, 'Santa Catarina'),
(3, 'Paraná')

INSERT INTO USUARIO 
(id, nome, salario, ativo, em_alteracao, uf) values
(1, 'usuario1', 100, TRUE, TRUE, 1),
(2, 'usuario2', 200, TRUE, TRUE, 1),
(3, 'usuario3', 300, TRUE, TRUE, 1),
(4, 'usuario4', 400, TRUE, TRUE, 1),
(5, 'usuario5', 500, TRUE, TRUE, 1),
(6, 'usuario6', 600, TRUE, TRUE, 1),
(7, 'usuario7', 700, TRUE, TRUE, 1),
(8, 'usuario8', 800, TRUE, TRUE, 1),
(9, 'usuario9', 900, TRUE, TRUE, 1),
(10, 'usuario10', 1000, TRUE, TRUE, 1),
(11, 'usuario11', 1100, TRUE, TRUE, 1),
(12, 'usuario12', 1200, TRUE, TRUE, 1),
(13, 'usuario13', 1300, TRUE, TRUE, 1),
(14, 'usuario14', 1400, TRUE, TRUE, 1),
(15, 'usuario15', 1500, TRUE, TRUE, 1),
(16, 'usuario16', 1600, TRUE, FALSE, 1),
(17, 'usuario17', 1700, FALSE, TRUE, 1),
(18, 'usuario18', 1800, FALSE, FALSE, 1),
(19, 'usuario19', 1900, TRUE, TRUE, 2),
(20, 'usuario20', 2000, TRUE, TRUE, 3)

INSERT INTO CONTA 
(id, id_usuario, ativa) values
(default, 20, TRUE),
(default, 20, TRUE),
(default, 19, TRUE),
(default, 19, TRUE),
(default, 18, TRUE),
(default, 18, TRUE),
(default, 17, TRUE),
(default, 17, TRUE),
(default, 16, TRUE),
(default, 16, TRUE),
(default, 15, TRUE),
(default, 15, FALSE),
(default, 14, TRUE),
(default, 13, TRUE),
(default, 13, TRUE),
(default, 12, TRUE),
(default, 12, TRUE),
(default, 11, TRUE),
(default, 11, TRUE),
(default, 10, TRUE),
(default, 10, TRUE),
(default, 9, TRUE),
(default, 9, TRUE),
(default, 8, TRUE),
(default, 8, TRUE),
(default, 7,TRUE),
(default, 7, TRUE),
(default, 6, TRUE),
(default, 6, TRUE),
(default, 5, TRUE),
(default, 5, TRUE),
(default, 4, TRUE),
(default, 4, TRUE),
(default, 3, TRUE),
(default, 3, TRUE),
(default, 2, TRUE),
(default, 2, TRUE),
(default, 1, TRUE),
(default, 1, TRUE)

SELECT usuario.id, usuario.nome, usuario.salario FROM USUARIO usuario
JOIN ESTADO estado ON estado.id = usuario.uf
WHERE usuario.ativo = TRUE
AND usuario.em_alteracao = TRUE
AND estado.nome = 'São Paulo'
AND usuario.id IN (
	SELECT id_usuario FROM CONTA 
	WHERE ativa = TRUE 
	group by id_usuario
	having count(*) > 1
	ORDER BY 1
)
ORDER BY salario DESC
LIMIT 10