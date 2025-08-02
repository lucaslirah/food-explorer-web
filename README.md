
# 🍽️ Food Explorer - Sistema de Gestão de Pratos

<img width="1020" height="490" alt="image" src="https://github.com/user-attachments/assets/6b31d7dd-574e-4aaa-9a72-2d332d892bd2" />

<p/>

Projeto Full Stack desenvolvido com **Node.js**, **React** e **SQLite**, que simula um sistema de gestão de pratos, com funcionalidades como autenticação de usuários, upload de imagens, controle de permissões e interface responsiva.

> 💼 Ideal para demonstrar minhas habilidades práticas em desenvolvimento web Full Stack, integração com banco de dados, autenticação e deploy em ambiente de produção.

---

## 🌐 Deploy

A aplicação está disponível online:

- 🔙 Backend (Render): [https://foodexplorer-api-lrmz.onrender.com](https://foodexplorer-api-lrmz.onrender.com)  
- 🔜 Frontend (Netlify): [https://foodexplorerweb-df.netlify.app/](https://foodexplorerweb-df.netlify.app/)

> ⚠️ APIs protegidas por autenticação JWT. Para testar funcionalidades completas, use o login de teste ou crie uma conta (se permitido).

---

## 🛠️ Tecnologias e Ferramentas

### Backend
- Node.js + Express
- SQLite (Knex)
- Autenticação JWT
- Upload de imagens com Multer
- PM2 (deploy)
- CORS, dotenv

### Frontend
- React + Vite
- React Router DOM
- Axios
- Hooks personalizados
- Estilização modular
- Responsividade

---

## 📁 Estrutura do Projeto

### Backend (`/backend`)

```

src/
├── configs
├── controllers
├── database
├── middlewares
├── providers
├── routes
├── utils
└── server.js

```

### Frontend (`/frontend`)

```

src/
├── assets
├── components
├── hooks
├── pages
├── routes
├── services
├── styles
└── main.jsx

````

---

## 🚀 Como Rodar Localmente

### Pré-requisitos
- Node.js 18+
- Git

### Backend

```bash
cd backend
npm install
npx knex migrate:latest
npm run dev
````

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🔐 Variáveis de Ambiente

### Backend - `.env`

```env
PORT=3333
AUTH_SECRET=sua_chave_secreta
```

---

## ✨ Funcionalidades

* [x] Login e cadastro com controle de acesso (usuário/admin)
* [x] Cadastro, edição e exclusão de pratos
* [x] Upload de imagem dos pratos
* [x] Listagem e busca de pratos
* [x] Interface responsiva e moderna
* [x] Deploy funcional no Render (backend) e Netlify (frontend)

---

## 🧠 Aprendizados

Durante esse projeto, evoluí principalmente em:

* 🔗 Integração completa entre frontend e backend
* 🔒 Autenticação com JWT e proteção de rotas
* 🗃️ Organização de código por responsabilidades
* ☁️ Deploy em produção com Render e Netlify
* 🧱 Uso do Knex e estrutura de migrations com SQLite

---

## 👨‍💻 Sobre Mim

Desenvolvido por **Lucas Lira**, estudante de Engenharia de Software e desenvolvedor em formação. Busco oportunidades para aplicar meus conhecimentos em ambientes profissionais e continuar evoluindo como Full Stack Developer.

📫 Meus contatos:

* GitHub: [github.com/lucaslirah](https://github.com/lucaslirah)
* LinkedIn: [linkedin.com/in/lucas-lira-411618119](https://linkedin.com/in/lucas-lira-411618119)

---

## 🪪 Licença

Este projeto está licenciado sob a MIT License.

---
