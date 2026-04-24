# 🚀 Desafio Desbravador - Explorador do GitHub

Bem-vindo ao **Desafio Desbravador**, uma aplicação web responsiva e elegante desenvolvida em React para buscar usuários do GitHub e explorar os dados de seus respectivos repositórios.

Esta aplicação foi construída com foco em design moderno (UI Premium), forte tipagem no front-end utilizando TypeScript e roteamento dinâmico.

## ✨ Funcionalidades

- **Busca de Usuários**: Pesquise dinamicamente entre todo o ecossistema do Github.
- **Perfil do Usuário**: Exibição aprimorada englobando estatísticas, avatar, biografia, seguidores e quantidade de repositórios.
- **Catálogo de Repositórios**: Listagem limpa no formato "Grid" destacando tecnologias, total de forks/estreladas e atalhos diretos.
- **Detalhes Profundos**: Acesso ao histórico aprofundado dos repositórios via endpoints isolados da API.

## 🛠️ Tecnologias Utilizadas

- **ReactJS** (v19)
- **TypeScript**
- **React Router Dom** (Navegação estruturada entre as páginas de Home -> Perfil -> Repositório)
- **Axios** (Para o consumo nativo da API Rest Pública do GitHub)
- **React Icons** (Componentização de ícones padronizados em Material Design)
- **CSS3 Vanilla** (Arquitetura de estilos com layout Flex/Grid e Glassmorphism)

---

## ⚙️ Como rodar a aplicação localmente

### 1. Pré-requisitos

Para rodar este projeto com sucesso em sua máquina, certifique-se de ter instalado:
- **Node.js** (Versão recomentada LTS - 18.x ou superior)
- Um gerenciador de dependências (**Yarn** preferencialmente, ou **npm**)

### 2. Passo a passo para execução

Clone este projeto para a sua máquina ou abra o diretório raiz (`/desafio-desbravador`) no seu terminal.

1. **Instale as dependências** do projeto:
   ```bash
   yarn install
   # ou se preferir utilizar o NPM
   npm install
   ```

2. **Inicialize o servidor de desenvolvimento**:
   ```bash
   yarn start
   # ou usando NPM
   npm start
   ```

3. **Acesse o navegador**!  
   Assim que a compilação finalizar, a sua aplicação abrirá automaticamente ou estará disponível no endereço:
   👉 **http://localhost:3000**

### 3. Build para Produção (Deploy)

Para gerar uma versão estática otimizada da aplicação de forma a ser hospedada (Vercel, Netlify, etc), rode o comando abaixo:
```bash
yarn build
```

Isso empacotará corretamente todas os módulos React e preparará a pasta `/build` para implantação, diminuindo drasticamente o peso final do bundle.

---

> _Projeto estruturado como etapa de desafio/avaliação. Sinta-se à vontade para explorar os componentes em `src/components` e os hooks globais em `src/hooks`._
