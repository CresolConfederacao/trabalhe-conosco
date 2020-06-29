# language: pt
##Temos uma altera��o no sistema onde n�o � mais poss�vel cadastrar pessoas jur�dicas at� o segundo dia �til do m�s. Descreva todos cen�rios de teste poss�veis para garantir a qualidade da altera��o.
Funcionalidade: Cadastro de pessoas jur�dicas

  Contexto: estar no campo para cadastro de pessoas Jur�dicas

  Cen�rio: Cadastrar no primeiro dia �til
    Dado que seja o primeiro dia �til do m�s
    Quando usu�rio apertar cadastrar
    Ent�o aparecer� uma mensagem de erro

  Cen�rio: Dia dois do m�s
    Dado que seja dia 02 do m�s
    E n�o � o segundo dia �til
    Quando usu�rio apertar cadastrar
    Ent�o aparecer� uma mensagem de erro

  Cen�rio: Cadastro segundo dia �til
    Dado que seja o segundo dia �til
    Quando usu�rio apertar cadastrar
    Ent�o o cadastro � bem-sucedido

  Cen�rio: Cadastro �ltimo dia do m�s
    Dado que seja o �ltimo dia do m�s
    Quando usu�rio apertar cadastrar
    Ent�o o cadastro � bem-sucedido
