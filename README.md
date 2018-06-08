# Trabalhe conosco na Cresol Confederação

## Sumário

- [Sobre o desafio](#sobre-o-desafio)
- [Como participar?](#como-participar)
- [Quais os próximos passos?](#quais-os-próximos-passos)
- [Vagas](#vagas)
  - [Analista de sistemas](#analista-de-sistemas)
  - [Desenvolvedor front-end](#desenvolvedor-front-end)
  - [Analista de testes](#analista-de-testes)


## Sobre o desafio

Criamos esse desafio como a primeira parte para o processo de seleção de analista de sistemas para a Cresol Confederação (Conheça mais sobre nós em nosso [site](http://www.cresolconfederacao.com.br)).

### Como participar?

* Faça um fork, preferencialmente privado, desse projeto no Github ou no Bitbucket
* Leia atentamente o enunciado abaixo sobre o problema que você deve resolver
* Produza os artefatos citados no item *O que você deve entregar?*
* Submeta através de um *Pull Request* neste repositório juntamente com seu currículo para avaliação

### Quais os próximos passos?

* Avaliaremos os artefatos submetidos juntamente com seu currículo
* Faremos contato para dar feedback sobre o processo

## Vagas

### Analista de Sistemas

#### O que você vai fazer como analista de sistemas na Cresol Confederação?

* Levantamento de requisitos com usuário
* Documentação de requisitos funcionais e não funcionais
* Documentação de critérios de aceite com usuário
* Cálculo de estimativa de esforço
* Documentação de caso de uso
* Diagramação com UML
* Transferência de conhecimento
* Revisão de artefatos, como por exemplo caso de uso, caso de teste

#### Qual o problema que você deve resolver?

Na empresa de TI **XPTO** existe uma demanda reprimida de ideias inovadoras. Existe uma necessidade de um sistema para gerenciar isso para dar vazão nas ideias que fazem sentido para a empresa.
Os colaboradores desta empresa podem solicitar uma quantidade de horas limitada dentro de um período para elaborarem sua ideia de inovação. Essas horas devem ser solicitadas para o gestor responsável para efeitos de planejamento. Uma vez acordado isso com o gestor o colaborador elabora sua ideia e cadastra no sistema.
As ideias devem ficam expostas para que sejam votadas pelos usuários do sistema até que elas expirem, entretanto, algumas ideias são privadas e visíveis apenas para um grupo específico.
Baseado nos detalhes da ideia submetida e nos benefícios propostos existe um grupo de pessoas autorizadas responsáveis por aprovar quais ideias podem ter uma prova de conceito desenvolvida.
Para melhorar a experiência do cliente a empresa optou em liberar o acesso para um grupo seleto de clientes que também poderão acessar o sistema, utilizando contas em redes sociais, e cadastrar ideias.

#### O que você deve entregar?

Baseado no problema da empresa **XPTO** você como analista de sistemas precisa elaborar no mínimo os artefatos a seguir:

* Levantar os requisitos funcionais
* Levantar os requisitos não funcionais
* Modelagem de domínio utilizando diagrama de classe
* Esboço de caso de uso

Você pode utilizar outros artefatos que possam ajudar e complementar a expressar a solução do problema

### Desenvolvedor front-end

#### O que você vai fazer como desenvolvedor front-end na Cresol Confederação?

* Desenvolvimento de protótipo de página web
  - Baseado em caso de uso e/ou wireframe
* Desenvolvimento de protótipo para relatório em PDF
* Definição e documentação de padrões de páginas e componentes
* Desenvolvimento de páginas web
  - HTML
  - CSS
  - JS
  - Websocket
  - Integração com REST webservices
* Modernização das páginas legadas

#### Conhecimentos

##### Necessários

* HTML 5
* CSS 3
* ES 6
* Javascript
* Javascript Frameworks: Angular, ReactJS, outros
* Frontend Frameworks: Bootstrap, outros
* Experiência com CSS Preprocessors
* Experiência com RESTful services e APIs
  - Utilizar REST APIs prototipadas
* Cross-Browser Development
* Ferramental: Grunt, NPM, outros
* Teste & Debug
  - Implementar testes de Frontend
* Experiência com softwares de edição de imagem (Photoshop ou outros)
* Git

##### Diferenciais

* Design responsivo e mobile
* Habilidade para resolver problemas
* Experiência com design UI & UX

#### Qual o problema que você deve resolver?

Neste repositório temos a pasta `desenvolvedor-frontend` que contém uma página web legada com suas dependências e o desafio consiste em criar uma proposta de modernização para esta página utilizando seus conhecimentos técnicos e de usabilidade.

#### O que você deve entregar?

* Documentação com os detalhes técnicos escolhidos na solução
* Página web modernizada com suas dependências
  - Funcional para navegação e testes
  - Testes unitários de frontend

Você pode utilizar outros artefatos que possam ajudar e complementar a expressar a solução do problema

### Analista de testes

#### O que você vai fazer como analista de testes na Cresol Confederação?

* Criação e alteração de casos de teste em formato BDD
  - Leitura de casos de uso para criar e alterar casos de teste
* Testes manuais baseados em casos de teste
* Testes exploratórios em sistema web
* Validação dos dados do teste no banco de dados
* Interação direta com analistas de sistemas e desenvolvedores sobre as demandas que precisam ser testadas
* Transferência de conhecimento

#### Qual o problema que você deve resolver?

* Em um determinado cenário, temos um novo campo para a pesquisa de usuário por nome. Descreva os cenários de teste possíveis para garantir a qualidade desta alteração.
* Temos uma alteração no sistema onde não é mais possível cadastrar pessoas jurídicas até o segundo dia útil do mês. Descreva todos cenários de teste possíveis para garantir a qualidade da alteração.
* Temos um cenário onde até 15 anos é necessário preencher o campo responsável legal do cliente. Monte os cenários de teste para garantir a qualidade da aplicação.
* Escreva cenários de teste de login no padrão Dado/ Quando/ Então. Onde o link de acesso é www.empresa.com.br/admin e usuário e senha válidos são admin e admin123.
* Uma empresa tem um processo onde o desenvolvedor indica alguns testes necessários que devem ser realizados. Sabendo que esta empresa possuí uma extensa biblioteca de documentação. Descreva quais passos você executaria para garantir a qualidade nesta situação.
* Para efetuar um teste especifico, se faz necessário passar por uma outra parte do sistema que não houve alteração e o processo é muito complexo para que seja efetuado via tela. Monte um UPDATE para atualizar o estado da tabela usuário para ativo do usuário com login JOSE.
* Imagine que você precisa validar um relatório que deve conter apenas os 10 usuários com maior salário que tenham seu estado ativo e em alteração, que tenham mais de uma conta ativa na tabela contas e que sejam do estado de São Paulo. Monte uma consulta para trazer apenas estes registros para que seja possível validar os dados do relatório.
* Imagine que você esta efetuando testes em uma tela que tem dependência de dados de outra tela que não esta pronta, desta forma você precisa inserir dados manualmente na tabela. Escreva três INSERTs na tabela produtos com as colunas código, nome, descrição, valor e data de cadastro.

#### O que você deve entregar?

Respostas para todos os itens citados no tópico anterior.
