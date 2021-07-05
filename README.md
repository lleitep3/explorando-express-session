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


### Desafios:

- [ ] Subir a aplicação;
- [ ] Estude a estrutura da aplicação (pastas, arquivos, organização do código). critique antes de perguntar. reflita se a estrutura faz sentido pra você, tire suas conclusões;
- [ ] Na Home, quando estiver logado, deve imprimir "Olá <nome do usuário>!" e quando não estiver, deve mostrar "Olá visitante!";
- [ ] A Página `/me` só pode ser acessada quando o usuário estiver logado;
- [ ] Criar a rota de atualização do perfil;
- [ ] Cria a rota de atualização de senha;
- [ ] Implementar a atualização de senha na página de perfil;
- [ ] Implementar a lib `dotenv` na aplicação;
- [ ] Criar a página de listagem dos usuários do sistema;
- [ ] Implementar o CRUD dos usuários do sistema (a página deve ser acessivel apenas para usuários logados);