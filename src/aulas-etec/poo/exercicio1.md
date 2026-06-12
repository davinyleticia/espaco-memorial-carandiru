---
layout: "base.njk"
description:  Exercicío
title: POO, MVC e Virtual Environment
---

# Exercício – Sistema de Cadastro de Produtos com POO, MVC e Virtual Environment

Desenvolva um sistema em Python utilizando os conceitos de Programação Orientada a Objetos (POO) e o padrão de arquitetura MVC (Model, View e Controller).


O sistema deve realizar o cadastro e listagem de produtos utilizando instâncias de objetos armazenadas em memória, por meio de variáveis e listas durante a execução do programa.

---

# Objetivos do Exercício

O projeto deve:

* Utilizar Virtual Environment (`venv`)
* Utilizar arquitetura MVC
* Aplicar conceitos de POO:

  * Classe
  * Objeto
  * Encapsulamento
  * Métodos
  * Construtor

---

# Estrutura de Pastas

```bash
SistemaProdutos/
│
├── venv/
│
├── model/
│   ├── produto.py
│   └── dados.py
│
├── view/
│   └── produto_view.py
│
├── controller/
│   └── produto_controller.py
│
└── main.py
```

---

# Criando o Projeto

## 1. Criar a pasta do projeto

```bash
mkdir SistemaProdutos
cd SistemaProdutos
```

---

## 2. Criar o ambiente virtual

### Linux / Mac

```bash
python3 -m venv venv
```

### Windows

```bash
python -m venv venv
```

---

## 3. Ativar o ambiente virtual

### Linux / Mac

```bash
source venv/bin/activate
```

### Windows

```bash
venv\Scripts\activate
```

---

# Requisitos do Sistema

O sistema deverá permitir:

1. Cadastrar produtos
2. Listar produtos cadastrados
3. Sair do sistema

---

# Regras de Implementação

## Model

### Arquivo: `produto.py`

Crie uma classe chamada `Produto` contendo:

* atributo privado:

  * `__nome`
  * `__preco`

* métodos:

  * `get_nome()`
  * `get_preco()`
  * `set_nome()`
  * `set_preco()`

* método:

  * `exibir_produto()`

---

### Arquivo: `dados.py`

Neste arquivo ficará a lista de objetos do sistema.

Exemplo:

```python
produtos = []
```

---

# Controller

### Arquivo: `produto_controller.py`

Responsável pela lógica do sistema.

Deve possuir funções para:

* cadastrar produto
* listar produtos

Ao cadastrar, criar objetos da classe `Produto` e armazenar na lista do arquivo `dados.py`.

---

# View

### Arquivo: `produto_view.py`

Responsável pela interação com o usuário.

Deve:

* mostrar o menu
* ler opções do usuário
* exibir mensagens na tela

---

# Main

### Arquivo: `main.py`

Responsável por iniciar o sistema.

Deve conter:

* menu principal
* chamada das funções da View e Controller
* repetição do sistema até o usuário escolher sair

---

# Exemplo de Funcionamento

```bash
1 - Cadastrar Produto
2 - Listar Produtos
0 - Sair

Escolha: 1

Nome: Mouse
Preço: 120
Produto cadastrado com sucesso!
```

---

# Requisitos Técnicos

* Utilizar POO
* Utilizar MVC
* Utilizar ambiente virtual






