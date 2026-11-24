# Tutorial: Como executar o projeto

Neste tutorial, vamos aprender a instalar as dependências e executar o projeto utilizando Node.js, Express, CORS e Nodemon.

## 1. Estrutura do projeto

Organize os arquivos da seguinte maneira:

```text
src/
├── backend/
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
└── frontend/
    ├── index.html
    └── script.js
```

## 2. Pré-requisitos

Antes de começar, verifique se o Node.js e o NPM estão instalados.

Abra o terminal e execute:

```bash
node -v
npm -v
```

Se os comandos retornarem as versões instaladas, está tudo certo.

Caso não tenha o Node.js instalado, acesse: https://nodejs.org/

## 3. Acessar a pasta do backend

No terminal, entre na pasta do projeto:

```bash
cd src/backend
```

Se você já estiver dentro da pasta `src`, execute apenas:

```bash
cd backend
```

## 4. Instalar as dependências

Execute o comando:

```bash
npm install
```

Esse comando instalará as dependências definidas no `package.json`:

- **Express:** criação do servidor e das rotas HTTP.
- **CORS:** permite requisições entre diferentes origens.
- **Nodemon:** reinicia automaticamente o servidor durante o desenvolvimento.

## 5. Executar o servidor

Existem duas maneiras de iniciar o servidor.

### Opção A — Execução normal

```bash
npm start
```

### Opção B — Modo desenvolvimento (recomendado)

```bash
npm run dev
```

O Nodemon ficará monitorando as alterações nos arquivos e reiniciará o servidor automaticamente.

Resultado esperado no terminal:

```text
[nodemon] starting `node server.js`
Servidor executando em http://localhost:3000
```

## 6. Testar a API

Com o servidor em execução, abra o navegador e acesse:

http://localhost:3000/api/mensagem

Você deverá receber uma resposta semelhante a esta:

```json
{
  "mensagem": "Olá! Mensagem recebida do servidor! Mon Nov 23 2026 21:20:01 GMT-0300 (Brasilia Standard Time)"
}
```

Isso significa que o servidor está funcionando e a rota GET está respondendo corretamente.

## 7. Executar o frontend

Agora, abra o arquivo `index.html` no navegador.

O frontend fará uma requisição HTTP utilizando `fetch()` e receberá a resposta do Express.

## 8. Encerrar o servidor

Para interromper a execução do servidor, volte ao terminal e pressione:

```text
CTRL + C
```

## 9. Resumo dos comandos

| Comando | Finalidade |
|---|---|
| `node -v` | Verificar versão do Node.js |
| `npm -v` | Verificar versão do NPM |
| `cd backend` | Entrar na pasta do backend |
| `npm install` | Instalar dependências |
| `npm start` | Iniciar servidor normalmente |
| `npm run dev` | Iniciar servidor com Nodemon |
| `CTRL + C` | Encerrar servidor |

---

**Observação:** mantenha o terminal do backend aberto enquanto estiver utilizando o frontend. Caso contrário, as requisições HTTP não conseguirão acessar o servidor.
