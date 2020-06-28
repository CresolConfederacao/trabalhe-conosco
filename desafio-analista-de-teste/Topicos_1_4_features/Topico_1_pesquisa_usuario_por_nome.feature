# language: pt
## Em um determinado cenário, temos um novo campo para a pesquisa de usuário por nome. Descreva os cenários de teste possíveis para garantir a qualidade desta alteração.
Funcionalidade: Pesquisar usuário por nome

  Cenário: Pesquisar campo em branco
    Dado que há ao menos um usuário cadastrado no banco de dados
    E que usuário não digitou nada no campo pesquisar
    Quando ele clicar em pesquisar
    Então a pesquisa irá retornar todos os usuários cadastrados

  Cenário: Pesquisar parte do nome
    Dado que no banco contenha:
      | nome                |
      | José Alberto Coelho |
    Quando o usuário pesquisar "Coelho"
    Então na pesquisa é obrigatório conter o usuário José Alberto Coelho

  Cenário: Pesquisar utilizando diacrítico
    Dado que no banco contenha:
      | nome |
      | José |
      | Jose |
    Quando o usuário pesquisar "José"
    Então retorne apenas o usuário José

  Cenário: Pesquisar valor null
    Dado que não exista usuário com o nome null
    Quando o usuário pesquisar "null"
    Então não retorne nada

  Cenário: Pesquisa retorna com múltiplo usuários
    Dado que no banco contenha:
      | nome              |
      | José Luiz Alberto |
      | José Luiz Alberto |
      | José Luiz         |
    Quando usuário pesquisar José Luiz Alberto
    Então retorna todos os usuários com o nome José Luiz Alberto
    Mas não retornará José Luiz
