# Pizzari 🍕

**Pizzari** é uma aplicação web full stack voltada para o gerenciamento completo de pizzarias, desde o cadastro de restaurantes, gerenciamento de cardápio, realização de pedidos até o pagamento online via Stripe. O sistema foi desenvolvido com foco em escalabilidade, segurança e usabilidade, utilizando tecnologias modernas do ecossistema JavaScript/TypeScript.

---

##  Features

- Cadastro e gerenciamento de pizzarias
- Autenticação com Auth0 (login via Google)
- Gerenciamento de produtos (CRUD completo)
- Sistema de pedidos com controle de status
- Checkout com Stripe (pagamento online)
- Atualização automática via Webhooks da Stripe
- Dashboard administrativo
- Integração RESTful segura via JWT
- Design responsivo (mobile-first)

---

##  Arquitetura

A arquitetura da aplicação foi dividida em dois projetos independentes:

- **Frontend:** SPA desenvolvida com React, utilizando Vite para bundling e Context API para gerenciamento de estado.
- **Backend:** API RESTful com Node.js, Express e MongoDB, estruturado em camadas (Controllers, Services, Middlewares) seguindo boas práticas de separação de responsabilidades.

---

##  Stack Tecnológica

### Frontend
- **React 18**
- **Vite**
- **TypeScript**
- **TailwindCSS** + [Shadcn/UI](https://ui.shadcn.com/)
- **Context API** (estado global)
- **Auth0 SDK (SPA)** - login com Google
- **Axios** - requisições HTTP
- **React Router DOM** - roteamento

### Backend
- **Node.js v16**
- **TypeScript**
- **Express**
- **MongoDB + Mongoose**
- **JWT com express-oauth2-jwt-bearer**
- **Stripe API** (checkout + webhooks)
- **Dotenv** - variáveis de ambiente
- **CORS**, **Helmet** - segurança da API
- **Arquitetura MVC (com services)**

### Infraestrutura e Deploy
- **Render.com** - hospedagem de frontend e backend
- **MongoDB Atlas** - banco de dados em nuvem

Acesse: https://pizzari.onrender.com/
- **Stripe** - gateway de pagamento
