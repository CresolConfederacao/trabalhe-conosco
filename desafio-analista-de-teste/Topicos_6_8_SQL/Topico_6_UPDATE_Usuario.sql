CREATE TABLE usuario (
	id serial PRIMARY KEY,
	login VARCHAR (50) UNIQUE NOT NULL,
	ativo BOOLEAN NOT NULL
);

INSERT INTO usuario (id, login, ativo)
VALUES 
(default, 'JOSE',FALSE),
(default, 'JOAO', FALSE)


UPDATE  USUARIO usuario set ativo = TRUE
WHERE usuario.login = 'JOSE'
