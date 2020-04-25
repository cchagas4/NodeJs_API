NODE JS - BASE API

REST - Conjunto de Principios de arquitetura
RESTful - capacidade de determinado sistema aplicar os principio de REST

npm init -y

Estrutura de pastas

./api/ => Contém nosso código da api.
./api/controllers/ => Contém todos controladores da api.
./api/data/ => Contém nossos mocks.
./api/routes/ => Contém as rotas da api.
./config/ => Contém as configurações do servidor.
./package.json => Listagem das dependências do projeto.

$ npm i -g nodemon@1.19.4
$ npm i --save express@4.17.1 
$ npm i --save body-parser@1.19.0 
$ npm i --save config@3.2.3

* “./config/default.json” -  Arquivo de configurações de ambientes banco de dados, autenticação...
* “./config/express.js” - Arquivo para configurar a aplicação Express
* “./server.js” - arquivo que inicia o servidor dentro da pasta raiz do projeto 

$ nodemon server.js -  sobe o servidor

$ npm i consign@0.1.6 --save

PostgreSQL - Banco de dados relacional Open source 

$ npm i pg --save
