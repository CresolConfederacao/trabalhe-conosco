# language: pt
##Temos uma alteração no sistema onde não é mais possível cadastrar pessoas jurídicas até o segundo dia útil do mês. Descreva todos cenários de teste possíveis para garantir a qualidade da alteração.
Funcionalidade: Cadastro de pessoas jurídicas

  Contexto: estar no campo para cadastro de pessoas Jurídicas

  Cenário: Cadastrar no primeiro dia útil
    Dado que seja o primeiro dia útil do mês
    Quando usuário apertar cadastrar
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
