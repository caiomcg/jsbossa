# jsbossa
[![Code Climate](https://codeclimate.com/github/laerciosb/jsbossa/badges/gpa.svg)](https://codeclimate.com/github/laerciosb/jsbossa)
[![Test Coverage](https://codeclimate.com/github/laerciosb/jsbossa/badges/coverage.svg)](https://codeclimate.com/github/laerciosb/jsbossa/coverage)
[![Issue Count](https://codeclimate.com/github/laerciosb/jsbossa/badges/issue_count.svg)](https://codeclimate.com/github/laerciosb/jsbossa)

Aplicação teste.

### Requisitos ###

* **[Node.js 6.0.0](http://nodejs.org/en/)** :white_check_mark:
* **[Express.js 4.13.1](http://expressjs.com/pt-br/)** :white_check_mark:

### Instalação ###

**Obs.: As instruções abaixo foram testadas na distribuição Ubuntu.**

1. Após o clone da aplicação, execute os seguintes comandos para instalar as dependências:
  - user@user:~/path_do_arquivo_clonado$ **npm install**
  - user@user:~/path_do_arquivo_clonado$ **bower install**
  - **Instalar manualmente as dependências que porventura não forem instaladas pelos comandos acima.** :white_check_mark:

2. Start no servidor e acesso pelo browser
  - user@user:~/path_do_arquivo_clonado$ **npm start**
  - Acesse no navegador http://seu_ip:3000

## Ciclo de vida funcional da aplicação ##

1. Esta aplicação disponibiliza um CRUD de usuários através da API.


## API Rotas ##

|   Action                                 | Required          | Method    | URL                                               
| -----------------------------------------|-------------------|-----------|----------------------------------------------------- 
|   List users                             |                   |  `GET`    | /users
