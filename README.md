# Projeto Clean Architecture em TypeScript

Este é um projeto modular com arquitetura limpa (Clean Architecture) desenvolvido em TypeScript, seguindo os princípios SOLID. O objetivo é criar uma aplicação bem estruturada, modular e fácil de manter.

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

Para executar o projeto, siga as etapas abaixo:

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Execute o projeto em modo de desenvolvimento:

   ```bash
   npm run dev
   ```

   Isso iniciará o servidor em `http://localhost:3000`. Os endpoints estarão acessíveis no caminho `/api`.

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

- **Swagger:** [http://localhost:3000/api/swagger](http://localhost:3000/api/swagger)

## Agradecimento

Obrigado pela oportunidade! 

---
