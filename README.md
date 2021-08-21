<p align="center">
  <img  alt="Dragoon Games Store" title="Draggon Games Store" src=".github/readme/logo-full-dark.svg" />
</p>

<h1 align="center">
Dragoon Games Store API 
</h1>

## 🚀 Como rodar este projeto

Para clonar e executar este aplicativo, você precisará de [Git](https://git-scm.com) e [NodeJs](https://nodejs.org/en/) Instalado em seu computador.

### 🌀 Clonando o repositório

```bash
# Clone este repositório
$ git clone https://github.com/Alquipo/dragoongames-api

# Acesse a pasta do projeto no terminal/cmd
$ cd dragoongames-api
```

### 🏦 Recuperando o Banco de Dados (opcional 1)

```bash
# Montando a imagem no docker
$ docker pull alquipo/dragoongames-database:latest


# Após montar a imagem restaura o dump
$ cat dump_01-02-2021_15_38_12.sql | docker exec -i wongames-api_postgres_1 psql -U wonGames -d wonGames

```

### 🏦 Populando o banco de dados(opcional 2)

```bash
# Montando a imagem no docker
$ cd docker
$ docker-compose up

# Após montar a imagem restaura o dump
This project uses a /games/populate route in order to populate the data via GoG site. In order to make it work, follow the steps:

Go to Roles & Permissions > Public and make sure game:populate route is public available and the upload as well
With Strapi running run the following comand in your console:
$ curl -X POST http://localhost:1337/games/populate

# you can pass query parameters like:
$ curl -X POST http://localhost:1337/games/populate?page=2
$ curl -X POST http://localhost:1337/games/populate?search=simcity
$ curl -X POST http://localhost:1337/games/populate?sort=rating&price=free
```

### 🎲 Rodando a Aplicação

```bash
# Instale as dependências
$ yarn install

# Execute a Aplicação em Desenvolvimento
$ yarn develop

# O servidor iniciará na porta:3000 - acesse http://localhost:1337/admin

```

### 💾 Comandos Úteis

```bash
#Restaurar o Dump para o Docker
$ cat ARQUIVO_DUMP.sql | docker exec -i NOME_CONTAINER psql -U NOME_USUÁRIO -d wonGames

#Efetuar o Dump do docker
$ docker exec -t your-db-container pg_dumpall -c -U postgres > dump_`date +%d-%m-%Y"_"%H_%M_%S`.sql



```
