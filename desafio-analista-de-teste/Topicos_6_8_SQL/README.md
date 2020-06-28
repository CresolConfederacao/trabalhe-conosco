### Analista de testes

Cada SQL contém as querys utilizadas para responder esses tópicos. 
A respostas do tópico 6 à 8 se encontram nesse arquivo de uma maneira mais simplificada


### Para efetuar um teste especifico, se faz necessário passar por uma outra parte do sistema que não houve alteração e o processo é muito complexo para que seja efetuado via tela. Monte um UPDATE para atualizar o estado da tabela usuário para ativo do usuário com login JOSE.
  
A tabela utilizada para essa consulta é a que consta na imagem
![Imagem UPDATE](https://octodex.github.com/images/yaktocat.png)
```
UPDATE USUARIO usuario set ativo = TRUE
WHERE usuario.login = 'JOSE'
```
### Imagine que você precisa validar um relatório que deve conter apenas os 10 usuários com maior salário que tenham seu estado ativo e em alteração, que tenham mais de uma conta ativa na tabela contas e que sejam do estado de São Paulo. Monte uma consulta para trazer apenas estes registros para que seja possível validar os dados do relatório.
As tabelas utilizadas para essa consulta consta na imagem
![Imagem SELECT](https://octodex.github.com/images/yaktocat.png)
```
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
```
### Imagine que você esta efetuando testes em uma tela que tem dependência de dados de outra tela que não esta pronta, desta forma você precisa inserir dados manualmente na tabela. Escreva três INSERTs na tabela produtos com as colunas código, nome, descrição, valor e data de cadastro.
A tabela utilizada para essa consulta é a que consta na imagem
![Imagem INSERT](https://octodex.github.com/images/yaktocat.png)
```
INSERT INTO PRODUTOS (codigo, nome, descricao, valor, data_de_cadastro) 
VALUES 
('BH12', 'produto1', 'desc_produto1', 100, current_date),
('BH13', 'produto2', 'desc_produto2', 200, current_date),
('BH14', 'produto3', 'desc_produto3', 300, current_date)
```
