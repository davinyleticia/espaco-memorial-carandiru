---
layout: "base.njk"
description: PW 1
title:  Página Web sobre Alan Turing.
---

# O projeto Alan Turing

construir um site sobre o alan turing

[https://davinyleticia.github.io/projeto-alan-turing/](https://davinyleticia.github.io/projeto-alan-turing/)

o HTML

{% raw %}
```html

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alan Turing | O Pai da Computação</title>
    <!-- Aqui conectamos o arquivo CSS ao HTML -->
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <header>
        <div class="container">
            <h1>Alan Turing</h1>
            <p>Matemático, Lógico, Criptoanalista e o Pai da Computação Moderna</p>
        </div>
    </header>

    <nav>
        <div class="container">
            <ul>
                <li><a href="#biografia">Biografia</a></li>
                <li><a href="#enigma">A Máquina Enigma</a></li>
                <li><a href="#maquina-turing">Máquina de Turing</a></li>
                <li><a href="#teste-turing">Teste de Turing</a></li>
            </ul>
        </div>
    </nav>

    <main class="container">
        
        <section id="biografia" class="card">
            <h2>Biografia Resumida</h2>
            <p>Alan Mathison Turing (1912–1954) foi um brilhante cientista britânico. Suas ideias estabeleceram a base para o desenvolvimento do computador moderno e da inteligência artificial.</p>
            <ul>
                <li><strong>1912:</strong> Nasce em Londres, Inglaterra.</li>
                <li><strong>1936:</strong> Publica o artigo que introduz o conceito da "Máquina de Turing".</li>
                <li><strong>1939-1945:</strong> Lidera a equipe em Bletchley Park para decifrar códigos nazistas.</li>
                <li><strong>1950:</strong> Propõe o famoso "Teste de Turing" para medir a inteligência artificial.</li>
                <li><strong>1952:</strong> É condenado por homossexualidade (ilegal na época) e sofre castração química.</li>
                <li><strong>1954:</strong> Falece prematuramente aos 41 anos.</li>
                <li><strong>2013:</strong> Recebe o perdão real póstumo da Rainha Elizabeth II.</li>
            </ul>
        </section>

        <section id="enigma" class="card">
            <h2>A Máquina Enigma e a Segunda Guerra</h2>
            <p>Durante a Segunda Guerra Mundial, as forças armadas alemãs usavam uma máquina chamada <strong>Enigma</strong> para criptografar suas comunicações de rádio. O código mudava diariamente, tornando-o quase impossível de ser quebrado manualmente.</p>
            <p>Turing e sua equipe em Bletchley Park desenvolveram uma máquina eletromecânica chamada <strong>Bombe</strong>, capaz de testar rapidamente milhares de combinações para descobrir as configurações diárias da Enigma. Historiadores estimam que o trabalho de Turing encurtou a guerra em mais de dois anos, salvando milhões de vidas.</p>
        </section>

        <section id="maquina-turing" class="card">
            <h2>A Máquina Universal de Turing</h2>
            <p>Antes de existirem os computadores físicos como os conhecemos, Turing criou um modelo matemático abstrato em 1936.</p>
            <p>A "Máquina de Turing" consistia em uma fita infinita dividida em células, onde um cabeçote de leitura/gravação poderia mover-se para a esquerda ou direita, lendo e alterando símbolos (como 0 e 1) com base em um conjunto de regras. Este conceito provou que uma máquina simples poderia computar qualquer problema matemático solucionável, formando a base lógica de todo software e hardware moderno.</p>
        </section>

        <section id="teste-turing" class="card">
            <h2>O Teste de Turing</h2>
            <p>Em seu artigo de 1950, "Máquinas Computacionais e Inteligência", Turing fez a famosa pergunta: <em>"As máquinas podem pensar?"</em></p>
            <p>Para evitar debates filosóficos sobre o que é "pensar", ele propôs o "Jogo da Imitação". Neste teste, um interrogador humano faz perguntas por texto para duas entidades: um humano e um computador. Se o interrogador não conseguir distinguir qual é a máquina e qual é o humano com base nas respostas, diz-se que o computador passou no Teste de Turing. Este conceito continua sendo uma referência crucial no campo da Inteligência Artificial.</p>
        </section>

    </main>

    <footer>
        <div class="container">
            <p>Projeto Para Aula de PW 1 - ETEC</p>
        </div>
    </footer>

</body>
</html>
```
{% endraw %}

O CSS

{% raw %}
```css

/* Reseta margens e define a fonte padrão */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background-color: #f4f7f6;
    color: #333;
    line-height: 1.6;
}

/* Classe para centralizar e limitar a largura do conteúdo */
.container {
    width: 90%;
    max-width: 1000px;
    margin: 0 auto;
}

/* Estilos do Cabeçalho */
header {
    background-color: #1a252c;
    color: #fff;
    padding: 3rem 0;
    text-align: center;
    border-bottom: 5px solid #3498db;
}

header h1 {
    font-size: 3rem;
    margin-bottom: 0.5rem;
}

header p {
    font-size: 1.2rem;
    color: #b0c4de;
}

/* Estilos da Barra de Navegação */
nav {
    background-color: #2c3e50;
    top: 0;
    z-index: 100;
}

nav ul {
    list-style: none;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

nav li {
    margin: 0;
}

nav a {
    display: block;
    color: #fff;
    text-decoration: none;
    padding: 1rem 1.5rem;
    transition: background-color 0.3s;
}

nav a:hover {
    background-color: #3498db;
}

/* Estilos do Conteúdo Principal */
main {
    padding: 2rem 0;
}

/* Estilos das Seções (Cards) */
.card {
    background-color: #fff;
    padding: 2rem;
    margin-bottom: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.card h2 {
    color: #2c3e50;
    margin-bottom: 1rem;
    border-bottom: 2px solid #ecf0f1;
    padding-bottom: 0.5rem;
}

.card p {
    margin-bottom: 1rem;
    text-align: justify;
}

.card ul {
    margin-left: 2rem;
    margin-bottom: 1rem;
}

.card ul li {
    margin-bottom: 0.5rem;
}

/* Estilos do Rodapé */
footer {
    background-color: #1a252c;
    color: #fff;
    text-align: center;
    padding: 1.5rem 0;
    margin-top: 2rem;
}

```
{% endraw %}