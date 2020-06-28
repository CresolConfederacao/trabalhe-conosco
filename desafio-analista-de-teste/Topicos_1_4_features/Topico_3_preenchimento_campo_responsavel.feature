# language: pt
## Temos um cenário onde até 15 anos é necessário preencher o campo responsável legal do cliente. Monte os cenários de teste para garantir a qualidade da aplicação.
Funcionalidade: Preenchimento campo responsável

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
