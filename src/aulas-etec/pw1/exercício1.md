---
layout: "base.njk"
description:  PW I
title: Exercício 1.
---

# 🏗️ 1. Estrutura HTML Semântica (`index.html`)

Em vez de usar apenas `<div>`, usaremos tags que dizem ao navegador o que elas são:
*   `<main>`: O conteúdo principal da página.
*   `<section>`: Uma seção temática (o formulário).
*   `<footer>`: O rodapé com informações secundárias.

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Acesso ao Sistema</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <main>
        <section class="login-container">
            <header>
                <h1>Bem-vindo</h1>
                <p>Faça login para continuar</p>
            </header>

            <form action="#">
                <div class="field">
                    <label for="email">E-mail</label>
                    <input type="email" id="email" name="email" required placeholder="exemplo@dominio.com">
                </div>

                <div class="field">
                    <label for="senha">Senha</label>
                    <input type="password" id="senha" name="senha" required minlength="6">
                </div>

                <div class="options">
                    <label class="checkbox-label">
                        <input type="checkbox"> Lembrar de mim
                    </label>
                    <a href="#">Esqueci a senha</a>
                </div>

                <button type="submit">Entrar</button>
            </form>

            <footer>
                <p>Não tem uma conta? <a href="#">Cadastre-se</a></p>
            </footer>
        </section>
    </main>

</body>
</html>
```

---

## 🎨 2. CSS com Foco em Fluidez (`style.css`)

Para evitar `@media queries`, usamos o conceito de "Mobile First" e limites de largura (`max-width`).

```css
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: system-ui, -apple-system, sans-serif;
    background-color: #f0f2f5;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 1rem; /* Margem de segurança para telas bem pequenas */
}

main {
    width: 100%;
    display: flex;
    justify-content: center;
}

.login-container {
    background: #ffffff;
    padding: 2.5rem;
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.1);
    
    /* SEGURANÇA SEM MEDIA QUERY: */
    width: 100%; 
    max-width: 400px; /* No desktop para aqui, no mobile ocupa 100% */
}

header h1 {
    color: #1c1e21;
    margin-bottom: 0.5rem;
    text-align: center;
}

header p {
    color: #606770;
    text-align: center;
    margin-bottom: 2rem;
}

.field {
    margin-bottom: 1.2rem;
}

label {
    display: block;
    margin-bottom: 0.4rem;
    font-weight: 600;
    font-size: 0.9rem;
}

input[type="email"],
input[type="password"] {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #dddfe2;
    border-radius: 6px;
    font-size: 1rem;
}

input:focus {
    outline: none;
    border-color: #1877f2;
    box-shadow: 0 0 0 2px #e7f3ff;
}

.options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.85rem;
    margin-bottom: 1.5rem;
}

button {
    width: 100%;
    padding: 0.8rem;
    background-color: #1877f2;
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 1.1rem;
    font-weight: bold;
    cursor: pointer;
    transition: filter 0.2s;
}

button:hover {
    filter: brightness(0.9);
}

footer {
    margin-top: 1.5rem;
    text-align: center;
    border-top: 1px solid #dadde1;
    padding-top: 1.5rem;
    font-size: 0.9rem;
}

a {
    color: #1877f2;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}
```

---

## 📝 Explicação Teórica: Por que isso é bom?

### Semântica (HTML)

1.  `label for="id"`: Essencial. Quando um usuário clica no texto "E-mail", o cursor pula automaticamente para dentro do campo de input. Isso ajuda muito a usabilidade em telas pequenas.
2.  `required` e `type="email"`: O HTML faz a validação básica para você. Se o usuário esquecer o `@`, o navegador avisa sem você precisar de JavaScript.
3.  `main` e `section`: Indicam a hierarquia da página para o Google, melhorando o ranqueamento.

### Design Fluido (CSS)

1.  `width: 100%` + `max-width: 400px`: Em um monitor largo, o form não fica "gigante" e esticado; ele trava nos 400px. Em um celular de 350px de largura, ele encolhe para caber perfeitamente.
2.  `padding: 1rem` no Body: Isso garante que, se a tela for menor que o formulário, as bordas do formulário não "grudem" no vidro do celular, mantendo um respiro visual.
3.  `box-sizing: border-box`: Faz com que o `padding` dos inputs não "empurre" o elemento para fora do container.

Conseguiu visualizar como a largura se comporta sem precisar de `@media`? Se quiser tentar algo diferente, como você organizaria esse formulário se ele precisasse de duas colunas no computador?