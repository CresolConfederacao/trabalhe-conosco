# language: pt
## Escreva cen�rios de teste de login no padr�o Dado/ Quando/ Ent�o. Onde o link de acesso � www.empresa.com.br/admin e usu�rio e senha v�lidos s�o admin e admin123.
Funcionalidade: Login

  Contexto: estar na tela onde o link de acesso � www.empresa.com.br/admin

  Esquema do Cen�rio: Logar com dados v�lidos
    Dado que o usu�rio entre com usuario <usuario> e senha <senha>
    Quando o usu�rio clicar entrar
    Ent�o aparece um Bem-vindo na tela

    Exemplos: 
      | usuario | senha    |
      | admin   | admin123 |

  Esquema do Cen�rio: Aviso campo n�o preenchido
    Dado que usu�rio n�o preencher um <campo>
    Quando o usu�rio clicar em entrar
    Ent�o aparece um aviso com a mensagem "Informe os seus dados".

    Exemplos: 
      | campo   |
      | usu�rio |
      | senha   |

  Esquema do Cen�rio: Aviso dados n�o conferem
    Dado que usu�rio preenche o <campo> com um dado inv�lido
    Quando o usu�rio clicar em entrar
    Ent�o aparece um aviso com a mensagem "Os dados de acesso que voc� informou n�o conferem".

    Exemplos: 
      | campo   |
      | usu�rio |
      | senha   |
