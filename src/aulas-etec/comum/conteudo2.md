---
layout: "base.njk"
description:  IDE
title: IDEs (VS Code) e Configuração de Ambiente.
---


# 1. Instalando o Node.js

O Node.js é o motor que executa o JavaScript fora do navegador.

1. Acesse o site oficial: [nodejs.org](https://nodejs.org/).
2. **Escolha a versão LTS** (Long Term Support). Ela é a mais estável e recomendada para a maioria dos usuários.
3. Siga o instalador padrão. No Windows, certifique-se de marcar a opção para instalar as **"Tools for Native Modules"** (Chocolatey), caso apareça.
4. **Verificação:** Abra o seu terminal (CMD, PowerShell ou Bash) e digite:
* `node -v` (Deve retornar a versão, ex: `v20.10.0`)
* `npm -v` (Deve retornar a versão do gerenciador de pacotes)

---

# 2. Configurando o VS Code

Depois de instalar o [VS Code](https://code.visualstudio.com/), precisamos deixá-lo "inteligente" para trabalhar com Node.js.

#### Extensões Essenciais

Vá no ícone de blocos no menu lateral esquerdo (Extensions) e instale:

* **ESLint:** Identifica erros de sintaxe e padrões de código enquanto você digita.
* **Prettier:** Formata seu código automaticamente ao salvar (deixa o código alinhado e bonito).
* **JavaScript (ES6) code snippets:** Atalhos rápidos para escrever código.
* **Thunder Client** ou **Postman:** Úteis para testar APIs sem sair do editor.

#### Configurações de "Auto-Save" e Formatação

Para que o código se organize sozinho, recomendo ativar estas opções:

1. Pressione `Ctrl + ,` (ou `Cmd + ,` no Mac) para abrir as **Settings**.
2. Pesquise por **"Format on Save"** e marque a caixa.
3. Pesquise por **"Default Formatter"** e selecione `Prettier - Code formatter`.

---

# 3. Criando seu Primeiro Projeto

Para testar se tudo está funcionando:

- Crie uma pasta para seu projeto e abra-a no VS Code.
- Abra o terminal integrado (`Ctrl + '` ou `Menu > Terminal > New Terminal`).
- Inicie o projeto com:

```bash
npm init -y

```

*Isso criará o arquivo `package.json`, que é o "RG" do seu projeto.*

- Crie um arquivo chamado `app.js` e digite:
```javascript
console.log("Node.js configurado com sucesso!");

```

- No terminal, execute:
```bash
node app.js

```

#### Dica Pro: Facilitando o Desenvolvimento

Instale o **Nodemon** globalmente. Ele reinicia o servidor automaticamente toda vez que você salva um arquivo:

```bash
npm install -g nodemon

```

Agora, em vez de usar `node app.js`, você pode usar `nodemon app.js`.

#### Estrutura de Arquivos do Projeto

Ao iniciar um projeto com `npm init -y`, o Node cria uma estrutura básica. É importante entender o papel de cada parte:

* **`package.json`**: O arquivo mais importante. Ele lista o nome do projeto, a versão e todas as dependências que você instalou.
* **`node_modules/`**: Uma pasta que contém o código real das bibliotecas que você baixou. Você nunca deve editar os arquivos dentro dela manualmente.
* **`.js` (ex: index.js)**: Seu arquivo principal de código.
