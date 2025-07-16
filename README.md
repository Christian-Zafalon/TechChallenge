# Blog API

API RESTful para gerenciamento de posts de blog desenvolvida com NestJS, TypeORM e PostgreSQL.

## Requisitos

- Node.js (v16 ou superior)
- npm ou yarn
- PostgreSQL (versão 12 ou superior)

## Configuração do Ambiente

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   cd tech-challenge
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure o banco de dados PostgreSQL:
   - Crie um banco de dados chamado `blog_db`
   - Atualize as credenciais no arquivo `src/app.module.ts` se necessário

4. Execute as migrações (opcional, pois o TypeORM está configurado para sincronização automática em desenvolvimento):
   ```bash
   npm run typeorm migration:run
   ```

## Executando a Aplicação

```bash
# Modo desenvolvimento
npm run start:dev

# Modo produção
npm run build
npm run start:prod
```

A API estará disponível em `http://localhost:3000`

## Documentação da API

Acesse a documentação interativa em [http://localhost:3000/api](http://localhost:3000/api) após iniciar a aplicação.

## Endpoints

### Posts

- `GET /posts` - Lista todos os posts
- `GET /posts/:id` - Obtém um post específico
- `POST /posts` - Cria um novo post
- `PUT /posts/:id` - Atualiza um post existente
- `DELETE /posts/:id` - Remove um post
- `GET /posts/search?termo=busca` - Busca posts por termo no título ou conteúdo

## Estrutura do Projeto

```
src/
├── main.ts                 # Ponto de entrada da aplicação
├── app.module.ts          # Módulo raiz
└── modules/
    └── posts/             # Módulo de posts
        ├── controllers/    # Controladores
        ├── services/       # Serviços
        ├── repositories/   # Repositórios
        ├── dto/           # Data Transfer Objects
        ├── entities/       # Entidades do banco de dados
        └── post.module.ts  # Módulo de posts
```

## Testes

```bash
# Executar testes unitários
npm test

# Executar testes e2e
npm run test:e2e

# Gerar relatório de cobertura
npm run test:cov
```

## Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_DATABASE=blog_db
```

## Licença

MIT
