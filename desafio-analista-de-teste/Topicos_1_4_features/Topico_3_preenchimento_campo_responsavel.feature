# language: pt
## Temos um cen�rio onde at� 15 anos � necess�rio preencher o campo respons�vel legal do cliente. Monte os cen�rios de teste para garantir a qualidade da aplica��o.
Funcionalidade: Preenchimento campo respons�vel

  Cen�rio: Usu�rio tem menos de 15 anos
    Dado que a idade do usu�rio seja menor do que 15
    Quando o usu�rio for se cadastrar
    Ent�o ir� aparecer um campo de respons�vel para preencher

  Cen�rio: Usu�rio tem mais do que 15 anos
    Dado que a idade do usu�rio seja maior do que 15
    Quando o usu�rio for se cadastrar
    Ent�o o campo de respons�vel n�o ir� aparecer

  Cen�rio: O usu�rio faz 15 anos no dia do cadastro
    Dado que o usu�rio se cadastre no dia do seu anivers�rio de 15 anos
    Quando o usu�rio for se cadastrar
    Ent�o ir� aparecer um campo de respons�vel para preencher
