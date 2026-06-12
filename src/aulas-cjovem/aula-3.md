---
layout: "base.njk"
description:   Aula - 3
title: Variáveis, Operadores e Estruturas Condicionais
permalink: aulas-cjovem/aula-3/
---

# Variáveis, Operadores e Estruturas Condicionais


## 1. Variáveis
- O que são?
Variáveis são espaços na memória usados para armazenar dados. Em Python, não é necessário declarar o tipo da variável explicitamente.

- Tipos de variáveis em Python:
    - **Inteiro (int)**: Números inteiros, como `10`, `-5`, `1000`
     **Ponto Flutuante (float)**: Números decimais, como `3.14`, `0.5`, `-2.7`
    - **String (str)**: Sequências de caracteres, como `"Python"`, `"Curso"`
    - **Booleano (bool)**: Verdadeiro (`True`) ou Falso (`False`)


 **Exemplo:**

```python
idade = 25  # Inteiro
altura = 1.75  # Decimal (float)
nome = "Ana"  # Texto (string)
estudante = True  # Booleano (bool)
```

**Exercícios:**

1. Crie um programa que armazene e imprima seu nome e idade.
2. Solicite ao usuário que digite dois números e armazene-os em variáveis.
3. Crie uma lista com cinco elementos e exiba o terceiro item.

---

## 2. Operadores

- Tipos de Operadores:
    - **Aritméticos:** `+`, `-`, `*`, `/`, `%`, `**`
    - **Comparação:** `==`, `!=`, `>`, `<`, `>=`, `<=`
    - **Lógicos:** `and`, `or`, `not`
    - **Atribuição:** `=`, `+=`, `-=`, `*=`, `/=`
    - **Identidade:** `is`, `is not`
    - **Pertinência:** `in`, `not in`

 **Exemplo:**

```python
soma = 10 + 5  # 15
divisao = 20 / 4  # 5.0
comparacao = (10 > 5)  # True
lista = [1, 2, 3]
resultado = 2 in lista  # True
```

**Exercícios:**

1. Peça ao usuário para inserir dois números e exiba os resultados das operações básicas.
2. Verifique se um número digitado pelo usuário é maior que 100.
3. Verifique se uma palavra digitada pelo usuário está contida na string "Python é incrível".

---

## 3. Estruturas Condicionais

- If, Else e Elif
As estruturas condicionais permitem que o código tome decisões com base em uma condição.

**Exemplo:**

```python
idade = int(input("Digite sua idade: "))
if idade >= 18:
    print("Você é maior de idade.")
elif idade >= 12:
    print("Você é um adolescente.")
else:
    print("Você é uma criança.")
```

**Exercícios:**

1. Peça ao usuário para digitar uma nota e exiba se ele foi aprovado (`nota >= 7`).
2. Verifique se um número é positivo, negativo ou zero.
3. Peça ao usuário para digitar seu ano de nascimento e determine se ele é maior de idade.

---

## 4. Operador Ternário
O operador ternário é uma forma reduzida de escrever uma estrutura `if-else` simples.

**Exemplo:**

```python
idade = 20
status = "Maior de idade" if idade >= 18 else "Menor de idade"
print(status)
```

**Exercícios:**

1. Solicite ao usuário um número e exiba se ele é par ou ímpar usando operador ternário.
2. Verifique se um aluno foi aprovado ou reprovado (`nota >= 7`) com o operador ternário.
3. Peça ao usuário para inserir um número e diga se ele é positivo ou negativo usando o operador ternário.

---

## 5. Estruturas de Repetição (Complemento)

- Laço While
Usado para executar um bloco de código enquanto uma condição for verdadeira.

**Exemplo:**

```python
contador = 0
while contador < 5:
    print("Contador:", contador)
    contador += 1
```

**Exercício:**
1. Crie um programa que peça um número ao usuário e exiba a contagem até esse número.

- Laço For

Usado para iterar sobre sequências (listas, strings, tuplas, dicionários).

**Exemplo:**
```python
for i in range(5):
    print("Número:", i)
```

**Exercício:**
1. Peça ao usuário para inserir uma palavra e exiba cada letra separadamente.

---

## Conclusão
Agora que você conhece os conceitos de variáveis, operadores, estruturas condicionais e repetição, pratique com os exercícios propostos e tente criar seus próprios desafios!

Bons estudos e boa programação! 🚀

