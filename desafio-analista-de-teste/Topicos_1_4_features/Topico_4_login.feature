# language: pt
## Escreva cenários de teste de login no padrão Dado/ Quando/ Então. Onde o link de acesso é www.empresa.com.br/admin e usuário e senha válidos são admin e admin123.
Funcionalidade: Login

  Contexto: estar na tela onde o link de acesso é www.empresa.com.br/admin

  Esquema do Cenário: Logar com dados válidos
    Dado que o usuário entre com usuario <usuario> e senha <senha>
    Quando o usuário clicar entrar
    Então aparece um Bem-vindo na tela

    Exemplos: 
      | usuario | senha    |
      | admin   | admin123 |

  Esquema do Cenário: Aviso campo não preenchido
    Dado que usuário não preencher um <campo>
    Quando o usuário clicar em entrar
    Então aparece um aviso com a mensagem "Informe os seus dados".

    Exemplos: 
      | campo   |
      | usuário |
      | senha   |

  Esquema do Cenário: Aviso dados não conferem
    Dado que usuário preenche o <campo> com um dado inválido
    Quando o usuário clicar em entrar
    Então aparece um aviso com a mensagem "Os dados de acesso que você informou não conferem".

    Exemplos: 
      | campo   |
      | usuário |
      | senha   |
