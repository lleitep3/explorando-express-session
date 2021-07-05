APP modelo
===

## Objetivo

Explorar um fluxo básico de criação de sessões com `express-session`.

Aqui temos uma aplicação exemplo criada para estudarmos um fluxo de cadastro, login, logout, rotas públicas e rotas privadas de um MVC com express.

### Instalando

Apenas instale as dependencias
```sh
$ npm i
```

### Configurando

Apenas configure o banco de dados corretamente e garanta que a tabela foi criada corretamente:

Edite as configurações do banco no arquivo `./src/libs/database/config/config.js`.


Crie a tabela pela migration:
```sh
$ npm run migrate
```

Crie o primeiro usuário por meio do Seeder:
```sh
$ npm run seed
```

### Rodando a aplicação

Para iniciar a aplicação execute o comando:
```sh
$ npm run dev
```

Depois acesse [http://localhost:3000](http://localhost:3000)
