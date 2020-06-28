# language: pt
## Em um determinado cen�rio, temos um novo campo para a pesquisa de usu�rio por nome. Descreva os cen�rios de teste poss�veis para garantir a qualidade desta altera��o.
Funcionalidade: Pesquisar usu�rio por nome

  Cen�rio: Pesquisar campo em branco
    Dado que h� ao menos um usu�rio cadastrado no banco de dados
    E que usu�rio n�o digitou nada no campo pesquisar
    Quando ele clicar em pesquisar
    Ent�o a pesquisa ir� retornar todos os usu�rios cadastrados

  Cen�rio: Pesquisar parte do nome
    Dado que no banco contenha:
      | nome                |
      | Jos� Alberto Coelho |
    Quando o usu�rio pesquisar "Coelho"
    Ent�o na pesquisa � obrigat�rio conter o usu�rio Jos� Alberto Coelho

  Cen�rio: Pesquisar utilizando diacr�tico
    Dado que no banco contenha:
      | nome |
      | Jos� |
      | Jose |
    Quando o usu�rio pesquisar "Jos�"
    Ent�o retorne apenas o usu�rio Jos�

  Cen�rio: Pesquisar valor null
    Dado que n�o exista usu�rio com o nome null
    Quando o usu�rio pesquisar "null"
    Ent�o n�o retorne nada

  Cen�rio: Pesquisa retorna com m�ltiplo usu�rios
    Dado que no banco contenha:
      | nome              |
      | Jos� Luiz Alberto |
      | Jos� Luiz Alberto |
      | Jos� Luiz         |
    Quando usu�rio pesquisar Jos� Luiz Alberto
    Ent�o retorna todos os usu�rios com o nome Jos� Luiz Alberto
    Mas n�o retornar� Jos� Luiz
