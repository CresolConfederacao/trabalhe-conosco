### Analista de testes

Para uma melhor visualização foi dividido em duas pastas, Topicos_1_4_features, que contém os cenários de teste em formato de features e a Topicos_6_8_SQL que contém os SQL.     
  Para os SQL o banco escolhido foi PostgreSQL.   
A resposta de todos os tópicos se encontram aqui de uma maneira mais simplificada.


### Em um determinado cenário, temos um novo campo para a pesquisa de usuário por nome. Descreva os cenários de teste possíveis para garantir a qualidade desta alteração.

#### Funcionalidade: Pesquisar usuário por nome
Cenário: Pesquisar campo em branco          
Dado que há ao menos um usuário cadastrado no banco de dados    
E que usuário não digitou nada no campo pesquisar   
Quando ele clicar em pesquisar  
Então a pesquisa irá retornar todos os usuários cadastrados


Cenário: Pesquisar parte do nome    
Dado que no banco contenha:  
``` 
|nome                |    
|José Luiz Coelho    | 
```   
Quando o usuário pesquisar "Coelho"   
Então na pesquisa é obrigatório conter o usuário José Luiz Coelho


Cenário: Pesquisar utilizando diacrítico   
Dado que no banco contenha:
```   
| nome |    
| José |    
| Jose |
```   
Quando o usuário pesquisar "José"   
Então retorne apenas o usuário José   

Cenário: Pesquisar valor null   
Dado que não exista usuário com o nome null   
Quando o usuário pesquisar "null"   
Então não retorne nada    

Cenário: Pesquisa retorna com múltiplo usuários   
Dado que no banco contenha:  
``` 
| nome              |    
| José Luiz Alberto |     
| José Luiz Alberto |    
| José Luiz         |   
```
Quando usuário pesquisar José Luiz Alberto    
Então retorna todos os usuários com o nome José Luiz Alberto    
Mas não retornará José Luiz


### Temos uma alteração no sistema onde não é mais possível cadastrar pessoas jurídicas até o segundo dia útil do mês. Descreva todos cenários de teste possíveis para garantir a qualidade da alteração.

#### Funcionalidade: Cadastro de pessoas jurídicas
Contexto: estar no campo para cadastro de pessoas Jurídicas

Cenário: Cadastrar no primeiro dia útil   
Dado que seja o primeiro dia útil do mês    
Quando usuário tentar cadastrar   
Então aparecerá uma mensagem de erro

Cenário: Dia dois do mês    
Dado que seja dia 02 do mês   
E não é o segundo dia útil    
Quando usuário apertar cadastrar    
Então aparecerá uma mensagem de erro    

Cenário: Cadastro segundo dia útil    
Dado que seja o segundo dia útil    
Quando usuário apertar cadastrar    
Então o cadastro é bem-sucedido   

Cenário: Cadastro último dia do mês   
Dado que seja o último dia do mês   
Quando usuário apertar cadastrar    
Então o cadastro é bem-sucedido 


### Temos um cenário onde até 15 anos é necessário preencher o campo responsável legal do cliente. Monte os cenários de teste para garantir a qualidade da aplicação.

#### Funcionalidade: Preenchimento campo responsável

Cenário: Usuário tem menos de 15 anos  
Dado que a idade do usuário seja menor do que 15    
Quando o usuário for se cadastrar   
Então irá aparecer um campo de responsável para preencher   

Cenário: Usuário tem mais do que 15 anos    
Dado que a idade do usuário seja maior do que 15    
Quando o usuário for se cadastrar   
Então o campo de responsável não irá aparecer
 
Cenário: O usuário faz 15 anos no dia do cadastro   
Dado que o usuário se cadastre no dia do seu aniversário de 15 anos   
Quando o usuário for se cadastrar   
Então irá aparecer um campo de responsável para preencher   

### Escreva cenários de teste de login no padrão Dado/ Quando/ Então. Onde o link de acesso é www.empresa.com.br/admin e usuário e senha válidos são admin e admin123.
 
#### Funcionalidade: Login
Contexto: estar na tela onde o link de acesso é www.empresa.com.br/admin

Esquema do Cenário: Logar com dados válidos    
Dado que o usuário entre com usuario \<usuario> e senha \<senha>  
Quando o usuário clicar entrar    
Então aparece um Bem-vindo na tela   

    Exemplos: 
      | usuario | senha    |
      | admin   | admin123 |



Esquema do Cenário: Aviso "campo não preenchido"  
Dado que usuário não preencher um \<campo>    
Quando o usuário clicar em entrar   
Então aparece um aviso com a mensagem "Informe os seus dados". 

    Exemplos: 
      | campo      |
      | usuário    |
      | senha      |



  Esquema do Cenário: Aviso "dados não conferem"    
    Dado que usuário preenche o \<campo> com um dado inválido    
    Quando o usuário clicar em entrar   
    Então aparece um aviso com a mensagem "Os dados de acesso que você informou não conferem".  

    Exemplos: 
      | campo      |
      | usuário    |
      | senha      |

### Uma empresa tem um processo onde o(a) desenvolvedor(a) indica alguns testes necessários que devem ser realizados. Sabendo que esta empresa possuí uma extensa biblioteca de documentação. Descreva quais passos você executaria para garantir a qualidade nesta situação.


Inicialmente analisaria se os testes estão de acordo com a biblioteca de documentação. Caso não estejam de acordo, ou estejam incompletos, conversaria com o(a) desenvolvedor(a) para que possamos analisar juntos e melhorá-los. Caso eles estejam documentados, os alteraria nessa documentação para que no futuro os testes sejam feitos da maneira correta. Se seja necessário criar novos testes para complementar, escreveria estes tendo como base a biblioteca de documentação.
Após os casos de teste alterados/criados, escreveria os bug reports caso necessário, e os passaria para o desenvolvedor.


### Para efetuar um teste especifico, se faz necessário passar por uma outra parte do sistema que não houve alteração e o processo é muito complexo para que seja efetuado via tela. Monte um UPDATE para atualizar o estado da tabela usuário para ativo do usuário com login JOSE.
```
UPDATE USUARIO usuario set ativo = TRUE
WHERE usuario.login = 'JOSE'
```
### Imagine que você precisa validar um relatório que deve conter apenas os 10 usuários com maior salário que tenham seu estado ativo e em alteração, que tenham mais de uma conta ativa na tabela contas e que sejam do estado de São Paulo. Monte uma consulta para trazer apenas estes registros para que seja possível validar os dados do relatório.
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
```
INSERT INTO PRODUTOS (codigo, nome, descricao, valor, data_de_cadastro) 
VALUES 
('BH12', 'produto1', 'desc_produto1', 100, current_date),
('BH13', 'produto2', 'desc_produto2', 200, current_date),
('BH14', 'produto3', 'desc_produto3', 300, current_date)
```
