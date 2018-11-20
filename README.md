# Trabalhe conosco na Cresol Confederação

## Sumário

- [Sobre o desafio](#sobre-o-desafio)
- [Como participar?](#como-participar)
- [Quais os próximos passos?](#quais-os-próximos-passos)
- [Vagas](#vagas)
  - [Analista de sistemas](#analista-de-sistemas)
  - [Analista de dados](#analista-de-dados)
  - [Desenvolvimento front-end](#desenvolvimento-front-end)
  - [Desenvolvimento Java](#desenvolvimento-java)
  - [Analista de testes](#analista-de-testes)


## Sobre o desafio

Criamos esse desafio como a primeira parte para o processo de seleção de profissionais para atuar a Cresol Confederação (Conheça mais sobre nós em nosso [site](http://www.cresolconfederacao.com.br)).

Estamos contratando profissionais para diversas áreas para fazerem parte de nossa equipe e contribuir no desenvolvimento e qualidade em novas soluções e melhorias do nosso Core Banking próprio e de sistemas acessórios, todos eles em Java.

O que fazemos aqui impacta diretamente na vida dos pequenos agricultores e na agricultura familiar.

Temos um ambiente com tranquilidade para trabalhar e com muitos desafios para alcançar, onde você terá muita importância dentro da equipe exercendo seu papel.

Buscamos profissionais que goste de desafios, saiba lidar com metas e que tenha atitude para fazer as coisas acontecerem.

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
Os colaboradores desta empresa podem solicitar uma quantidade de horas limitada dentro de um período para elaborarem sua ideia de inovação. Essas horas devem ser solicitadas para o(a) gestor(a) responsável para efeitos de planejamento. Uma vez acordado isso com o(a) gestor(a) o(a) colaborador(a) elabora sua ideia e cadastra no sistema.
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

### Analista de dados

#### O que você vai fazer como analista de dados na Cresol Confederação?

Descrição das atividades:

* levantar as necessidades dos usuários quanto a visualização de informações gerenciais e indicadores que os mesmos necessitam;
* construir fonte de dados, publicá-las na plataforma de B.I. e garantir a qualidade das mesmas;
* construir integrações para enriquecer as fontes de dados publicadas na plataforma de B.I. e garantir a qualidade das mesmas;
* construir visualizações, dashboards e relatórios (estáticos ou dinâmicos) na plataforma de B.I. e garantir a consistência dos mesmos;
* atuar na limpeza, enriquecimento, modelagem e tranformação dos dados, utilizando fontes de dados já existentes, ou fontes de dados externas;
* auxiliar tecnicamente os times quando consultado sobre os dados e o funcionamento das integrações, fontes de dados e visualizações;

Conhecimentos necessários:

* Experiência com bancos de dados, modelo relacional;
* Experiência com criação e manutenção de consultas SQL;
* Experiência com construção de ETLs;
* Experiência com desenvolvimento de scripts em alguma linguagem (por exemplo Python, Ruby, Bash);
* Experiência com manipulação de arquivos em formatos CSV, XML, JSON;
* Experiência com alguma plataforma de B.I.
* Experiência com criação de dashboards, gráficos;
* Lógica de programação;

Conhecimentos desejáveis (diferencial):

* Trabalhar com grande volume de dados;
* Engenharia de software;
* PostgreSQL;
* Tableau;
* Noções de estatística;

#### Qual o problema que você deve resolver?

Neste repositório temos a pasta `desafio-dados` que contém um arquivo
compactado (gzip) de log de um serviço de hospedagem e deste arquivo
necessitamos de algumas informações estatísticas para avaliarmos se
estamos atingindo nossos objetivos com os serviços hospedados nele.

Este arquivo de log é de um servidor
[Apache](http://httpd.apache.org/docs/current/mod/mod_log_config.html),
e está no formado conhecido como [Combined Log
Format](https://httpd.apache.org/docs/2.4/logs.html#combined):

    "%h %l %u %t \"%r\" %>s %b \"%{Referer}i\" \"%{User-agent}i\""

Exemplo:

    173.140.226.76 - Reichert5085 305 [2018-11-08T12:57:24Z] "GET /convergence/intuitive/generate" 301 90773 "http://www.regionalexploit.biz/next-generation/extend" "Opera/10.78 (Macintosh; U; Intel Mac OS X 10_5_1; en-US) Presto/2.9.333 Version/12.00"

Este sistema possui uma série de "endpoints", que são a primeira parte
do caminho da URL requisitada. 
Olhando o exemplo acima na parte `GET /convergence/intuitive/generate`
o "endpoint" seria `/convergence`.

Enumeramos abaixo a lista de informações que precisamos, entretanto o
mínimo que necessitamos são de 4 (quatro):

- os 5 (cinco) usuários que mais efetuaram requisições;
- os 10 (dez) browsers mais utilizados;
- os endereços de rede (classe C) com maior quantidade de requisições;
- a hora com mais acesso no dia;
- a hora com a maior quantidade de bytes;
- o endpoint com maior consumo de bytes;
- a quantidade de bytes por minuto;
- a quantidade de bytes por hora;
- a quantidade de usuários por minuto;
- a quantidade de usuários por hora;
- a quantidade de requisições que tiveram erro de cliente, agrupadas por erro;
- a quantidade de requisições que tiveram sucesso;
- a quantidade de requisições que foram redirecionadas;

#### O que você deve entregar?

A solução pode ser feita em alguma linguagem como Python, Ruby, Bash,
Java, por exemplo, ou ainda usando alguma ferramenta de ETL como
Pentaho Kettle ou Tableau Prep. Você precisa entregar um arquivo CSV
onde cada campo do arquivo representa uma informação coletada conforme
enumeração no tópico anterior. É desejável, ou seja, não é
obrigatório, que cada linha do arquivo represente dados para uma data,
ou seja, se o arquivo possuir registros de log de mais de 1 (um) dia,
as informações apresentadas precisam estar agrupadas por dia.

Além do script que extrai os dados ou o arquivo de transformação do
Kettle caso utilize ele, aguardamos também uma documentação orientando
como executar o processo e você pode utilizar outros artefatos que
possam ajudar e complementar a expressar a solução do problema.

Todos os artefatos devem ser encaminhados para 
`guedes arroba cresolconfederacao.com.br` 
com cópia para `evandro arroba cresolconfederacao.com.br`, com o
titulo "Desafio: Analista de dados".


### Desenvolvimento front-end

#### O que você vai fazer em desenvolvimento front-end na Cresol Confederação?

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

Neste repositório temos a pasta `desenvolvimento-frontend` que contém uma página web legada com suas dependências e o desafio consiste em criar uma proposta de modernização para esta página utilizando seus conhecimentos técnicos e de usabilidade.

#### O que você deve entregar?

* Documentação com os detalhes técnicos escolhidos na solução
* Página web modernizada com suas dependências
  - Funcional para navegação e testes
  - Testes unitários de frontend

Você pode utilizar outros artefatos que possam ajudar e complementar a expressar a solução do problema

### Desenvolvimento Java

#### O que você vai fazer em desenvolvimento Java na Cresol Confederação?

* Desenvolvimento de novas soluções em Java
  - Baseado em caso de uso
* Desenvolvimento de testes unitários
* Correções de bugs
* Refatoração de código

#### Conhecimentos

* Necessários
  - Experiência profissional com Java
  - Experiência em:
    - Hibernate/JPA
    - MVC
    - Rest webservices (criação e integração)
    - Maven
    - Git
    - SQL
  - Facilidade de comunicação com a equipe
* Importantes
  - Experiência ou conhecimento em:
    - Struts
    - Jasper Reports
    - Proficiência com linux
    - Proficiência com Eclipse IDE
    - PostgreSQL
* Diferenciais
  - Experiência ou conhecimento em:
    - GitLab
    - Jenkins
    - Metodologias e conceitos de desenvolvimento ágeis

#### Qual o problema que você deve resolver?

Neste repositório temos o sub módulo pasta `desenvolvimento-java`. Você deve inicializá-lo com o comando abaixo:
```
$ git submodule init
```
e atualizar com o comando:
```
$ git submodule update
```

Neste sub módulo temos um projeto Maven com um esqueleto do código que precisará desenvolver. Ainda dentro deste submódulo você vai encontrar o caso de uso que será seu guia para o desenvolvimento, que se encontra na pasta documentos.
O desenvolvimento consiste em webservices para fazer uma simulação de empréstimo, consulta e remoção dessa simulação.

#### O que você deve entregar?

* Desenvolvimento do código Java baseado no caso de uso
* Desenvolvimento de Rest Webservices para consultar e remover uma simulação de empréstimo, que não está no caso de uso

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
* Uma empresa tem um processo onde o(a) desenvolvedor(a) indica alguns testes necessários que devem ser realizados. Sabendo que esta empresa possuí uma extensa biblioteca de documentação. Descreva quais passos você executaria para garantir a qualidade nesta situação.
* Para efetuar um teste especifico, se faz necessário passar por uma outra parte do sistema que não houve alteração e o processo é muito complexo para que seja efetuado via tela. Monte um UPDATE para atualizar o estado da tabela usuário para ativo do usuário com login JOSE.
* Imagine que você precisa validar um relatório que deve conter apenas os 10 usuários com maior salário que tenham seu estado ativo e em alteração, que tenham mais de uma conta ativa na tabela contas e que sejam do estado de São Paulo. Monte uma consulta para trazer apenas estes registros para que seja possível validar os dados do relatório.
* Imagine que você esta efetuando testes em uma tela que tem dependência de dados de outra tela que não esta pronta, desta forma você precisa inserir dados manualmente na tabela. Escreva três INSERTs na tabela produtos com as colunas código, nome, descrição, valor e data de cadastro.

#### O que você deve entregar?

Respostas para todos os itens citados no tópico anterior.
