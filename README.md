# Sistema de Integração com API Star Wars

Este é um projeto modular com arquitetura limpa (Clean Architecture) desenvolvido em TypeScript, seguindo os princípios SOLID. O objetivo é criar uma aplicação bem estruturada, modular e fácil de manter.

## Funcionalidades
Leitura de Informações da API Star Wars:

Um endpoint que lê informações sobre personagens da API Star Wars (nome, altura e gênero) e as armazena em uma collection do MongoDB.

Recuperação e Ordenação dos Personagens:

Um endpoint que recupera a lista de personagens armazenados no MongoDB, ordena-os alfabeticamente pelo nome e apresenta os resultados.

## Estrutura do Projeto

A estrutura do projeto é organizada em módulos, seguindo a arquitetura limpa. Cada módulo possui as camadas de:

- **Entidades (Entities):** Representam os objetos principais do domínio.
- **Casos de Uso (Use Cases):** Contêm a lógica de negócios da aplicação.
- **Controladores (Controllers):** Lidam com as solicitações HTTP e interagem com os casos de uso.
- **Repositórios (Repositories):** Abstrações para acesso a dados.

A pasta `shared` contém elementos compartilhados entre os módulos, como configurações do servidor, middlewares e serviços.

## Injeção de Dependência

O projeto utiliza o [Tsyringe](https://github.com/microsoft/tsyringe) para injeção de dependência. A injeção de dependência é fundamental para desacoplar as dependências e tornar o código mais testável.

## Execução do Projeto

### Pré-requisitos

Certifique-se de ter o Docker instalado no seu ambiente.

1. Clone o Repositório:

   ```bash
   git clone https://github.com/lukasdevelop/test-skallar.git
   cd test-skallar
   ```

2. Variaveis de ambiente:

   ```bash
    Localize o arquivo .env.example e renomeio para .env 
    Mantenha o valor das variaveis atuais é para o banco de desenvolvimento
   ```

3. Instale as dependencias:

   ```bash
   cd app
   npm install
   ```

4. Execute os containers do Docker:

   ```bash
   docker-compose up -d
   ```
5. Execute comandos do Prisma ORM para gerar o schema do Prisma e iniciar a collection

   ```bash
   npx prisma generate --schema=./src/shared/infra/database/prisma/schema.prisma

   npx prisma db push --schema=./src/shared/infra/database/prisma/schema.prisma
   ```

   Isso iniciará o servidor em `http://localhost:3000`. Os endpoints estarão acessíveis no caminho `/characters`.
   O Dockerfile esta configurado para subir o servidor em modo DEV

## Testes

O projeto utiliza [Vitest](https://github.com/vitejs/vitest) para execução de testes.

- Execute todos os testes:

  ```bash
  npm test
  ```

- Execute os testes em modo de observação:

  ```bash
  npm run test:watch
  ```

- Execute os testes de integração:

  ```bash
  npm run test:e2e
  ```

## Documentação da API

A documentação da API pode ser acessada em:

- **Swagger:** [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

## Banco de Dados MongoDB

O projeto utiliza um banco de dados MongoDB. Certifique-se de ter o Docker e o Docker Compose instalados para executar o container do MongoDB.

## Agradecimento

Obrigado pela oportunidade de realizar esse teste.

---
By
Lucas Amaral
