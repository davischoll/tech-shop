# Desafio | Next.js

Página construída como desafio para treino do Framework Nextjs + Reactjs, com SSR. Desenvolvimento de uma landing page com uma grade de produtos.

## Funcionalidades

**Endpoint da API:** [API](https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1)

Para preencher a página com as informações dos produtos, é realizada uma consulta à API de forma paginada, em que cada página consultada retorna as informações de __8 produtos__ e um link para a __próxima página__.

Ao obter os dados os seguintes pontos são implementados:

- Para cada produto retornado pela API, um card de produto com as respectivas informações é criado no grid de produtos;
- Ao clicar no botão *"Próxima Página"* a próxima página da API é consultada, trazendo mais 8 novos produtos e exibindo na tela;
- Ao clicar no botão *"Página Anterior"* a página anterior da API é consultada, trazendo novamente os 8 produtos, já exibidos anteriormente, para a tela;

## Autor:

* **Davi Scholl** - [LinkedIn](https://www.linkedin.com/in/davischoll/)

## Licença

Licenciado sob a licença MIT - veja [LICENSE](LICENSE.md) para mais informações.


---

# Next.js

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
