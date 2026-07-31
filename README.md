# 🐶 Dogs - Rede Social de Fotos

O **Dogs** é uma aplicação web desenvolvida com **React** que simula uma rede social de compartilhamento de fotos. Os usuários podem criar uma conta, fazer login, publicar imagens, comentar em postagens e acompanhar estatísticas de interação por meio de um dashboard intuitivo.

Este projeto foi desenvolvido como parte dos estudos em React, aplicando conceitos fundamentais do ecossistema, como autenticação, gerenciamento de estado com Context API, consumo de APIs, roteamento, componentes reutilizáveis e estilização com CSS Modules.

🌐 **Acesse o projeto:**  
https://dogs-mocha.vercel.app/login

---

## ✨ Funcionalidades

- 🐶 Feed público de fotos
- 🔐 Sistema de autenticação (login e cadastro)
- 📷 Upload de novas imagens
- 💬 Comentários em publicações
- ❤️ Visualização de estatísticas de interação
- 👤 Perfil do usuário com gerenciamento de publicações
- 🧭 Navegação com React Router
- ⏳ Estados de carregamento e tratamento de erros
- 📱 Interface responsiva

---

## 🛠️ Tecnologias utilizadas

- React
- Vite
- React Router DOM
- Context API
- CSS Modules
- PropTypes
- Victory (gráficos)
- API Dogs (Origamid)

---

## 🚀 Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/vitorfelipedev/dogs.git
```

> **Obs.:** Caso o nome do repositório seja diferente, substitua a URL pelo endereço correto.

### 2. Acesse a pasta do projeto

```bash
cd dogs
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Execute a aplicação

```bash
npm run dev
```

A aplicação estará disponível no endereço informado pelo Vite (geralmente `http://localhost:5173`).

---

## 📜 Scripts disponíveis

| Comando | Descrição |
| -------- | --------- |
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera a versão de produção |
| `npm run preview` | Executa a versão de produção localmente |
| `npm run lint` | Analisa o código com ESLint |

---

## 📁 Estrutura do projeto

```text
src/
├── api.jsx
├── App.jsx
├── UserContext.jsx
├── Components/
│   ├── Footer/
│   ├── Header/
│   ├── Home/
│   ├── Login/
│   ├── Photo/
│   ├── User/
│   └── Helper/
├── Hooks/
└── Assets/
```

> A estrutura pode variar conforme novas funcionalidades forem adicionadas.

---

## 👨‍💻 Autor

**Vitor Felipe**

- 💼 Desenvolvedor Frontend
- GitHub: https://github.com/vitorfelipedev
- LinkedIn: https://www.linkedin.com/in/vitor-felipe-733892245/

---

## 🌐 API utilizada

Este projeto utiliza a **Dogs API**, disponibilizada pela **Origamid**, para gerenciamento de autenticação, usuários, fotos, comentários e estatísticas da aplicação.

> Projeto desenvolvido para fins de estudo e aprendizado durante o curso de React da Origamid.
