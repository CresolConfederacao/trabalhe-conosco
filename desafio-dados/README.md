# Desafio Cresol
Solução para o desafio de Analista de Dados.

# Execução
* Utilizando Docker e Make:
Navegue até a pasta `desafio-dados`, e execute o comando `make build run`. Será gerada uma pasta `out` com o arquivo `result.csv`, contendo todos os itens especificados no enunciado do desafio.
* Utilizando Python 3.6 e Virtualenv:
Navegue até a pasta `desafio-dados`e inicialize um ambiente virtual utilizando o comando `virtualenv venv -p python3`. Ative o ambiente com `source venv/bin/activate`, e instale as dependências com `pip install -r requirements.txt`. Execute o arquivo solucao.py com `python solucao.py`. Será criada uma pasta `out` com o arquivo `result.csv`, contendo todos os itens especificados no enunciado do desafio. Saia do ambiente virtual com o comando `deactivate`.

# Output
O arquivo de saída consiste de um `csv` com os seguintes campos:
* `top_5_users`: os 5 usuários com mais requisições feitas,
* `top_10_browsers`: os 10 navegadores mais utilizados,
* `top_classC_addresses`: a listagem completa dos endereços classe C que fizeram requisições,
* `top_access_hour`: a hora com mais acessos no dia,
* `top_consumption_hour`: a hora com maior consumo de bytes,
* `top_consumption_endpoint`: o endpoint com maior consumo de dados,
* `bytes_per_minute`: a média de bytes consumidos por minuto,
* `bytes_per_hour`: a média de bytes consumidos por hora,
* `users_per_minute`: a média de usuários por minuto,
* `users_per_hour`: a média de usuários por hora,
* `total_client_errors_by_error_code`: um dicionário com as requisições falhas no lado do cliente e suas quantidades,
* `total_successful_requests`: o total de requisições bem sucedidas,
* `total_redirected_requests`: o total de requisições redirecionadas.
