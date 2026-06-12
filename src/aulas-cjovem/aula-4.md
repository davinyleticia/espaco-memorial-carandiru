---
layout: "base.njk"
description:  Aula - 4
title: Estruturas de Repetição e Estruturas de Dados em Python
permalink: aulas-cjovem/aula-4/
---


# Estruturas de Repetição e Estruturas de Dados em Python

## 1. Operadores Relacionais e Lógicos

Os operadores em Python são símbolos que executam operações sobre variáveis e valores. Eles são essenciais para manipulação de dados e implementação da lógica do programa.

### 1.1 Operadores Relacionais

Os operadores relacionais comparam valores e retornam um resultado booleano (True ou False).

| Operador | Significado |
|----------|------------|
| `<`      | Menor que |
| `>`      | Maior que |
| `<=`     | Menor ou igual a |
| `>=`     | Maior ou igual a |
| `==`     | Igual a |
| `!=`     | Diferente de |

Os operadores relacionais são muito usados em estruturas de controle como `if`, `while` e loops `for` para tomada de decisão e validação de condições.

### 1.2 Operadores Lógicos

Os operadores lógicos são usados para combinar expressões booleanas.

| Operador | Significado |
|----------|------------|
| `and`    | Retorna True se ambas as condições forem verdadeiras |
| `or`     | Retorna True se pelo menos uma condição for verdadeira |
| `not`    | Inverte o valor booleano |

#### Exercício
Escreva um programa em Python que solicite dois números ao usuário e utilize operadores relacionais e lógicos para exibir comparações entre eles.

## 2. Estruturas de Repetição

As estruturas de repetição permitem executar um bloco de código múltiplas vezes.

### 2.1 Comando `for`

O loop `for` é usado para percorrer sequências (listas, tuplas, strings, intervalos numéricos, etc.).

```python
for i in range(5):
    print("Iteração", i)
```

Além disso, é possível utilizar `for` para percorrer elementos de listas e dicionários:

```python
frutas = ["maçã", "banana", "laranja"]
for fruta in frutas:
    print("Fruta:", fruta)
```

#### Exercício
Crie um programa que utilize um loop `for` para imprimir os números de 1 a 10 e também para percorrer uma lista de nomes.

### 2.2 Comando `while`

O loop `while` executa um bloco de código enquanto uma condição for verdadeira.

```python
x = 0
while x < 5:
    print("Valor de x:", x)
    x += 1
```

O uso do `while` é útil quando não sabemos previamente quantas iterações serão necessárias, por exemplo:

```python
numero = int(input("Digite um número positivo: "))
while numero < 0:
    numero = int(input("Número inválido. Digite novamente: "))
print("Número válido digitado!", numero)
```

#### Exercício
Escreva um programa que solicite um número ao usuário e utilize um loop `while` para contar de 1 até esse número.

## 3. Estruturas de Dados

As estruturas de dados ajudam na organização e manipulação eficiente de informações.

### 3.1 Listas

As listas são coleções mutáveis de elementos.

```python
frutas = ["maçã", "banana", "laranja"]
print(frutas[0])  # Saída: maçã
```

Listas permitem diversas operações, como adição, remoção e ordenação de elementos:

```python
numeros = [3, 1, 4, 1, 5, 9]
numeros.append(2)  # Adiciona um elemento no final
numeros.sort()  # Ordena a lista
print(numeros)
```

#### Exercício
Crie uma lista de cinco cores e utilize um loop para exibir cada cor na tela.

### 3.2 Dicionários

Os dicionários armazenam pares chave-valor.

```python
aluno = {"nome": "João", "idade": 20}
print(aluno["nome"])  # Saída: João
```

Dicionários permitem manipulação eficiente de dados nomeados, facilitando buscas:

```python
notas = {"Alice": 8.5, "Bruno": 7.2, "Carla": 9.1}
for aluno, nota in notas.items():
    print(f"{aluno} tirou {nota}")
```

#### Exercício
Crie um dicionário contendo três cidades e suas populações. Depois, exiba as informações de cada cidade.

### 3.3 Conjuntos (Sets)

Os conjuntos são coleções desordenadas de elementos únicos.

```python
numeros = {1, 2, 3, 4, 5}
numeros.add(3)  # Não adiciona, pois 3 já existe no conjunto
print(numeros)
```

Sets são úteis para remover elementos duplicados e para operações matemáticas como união e interseção:

```python
A = {1, 2, 3, 4}
B = {3, 4, 5, 6}
print(A | B)  # União
print(A & B)  # Interseção
```

#### Exercício
Crie dois conjuntos com números e mostre a união e a interseção entre eles.

#### Exercício Final

Desenvolva um programa que solicite ao usuário uma lista de números inteiros. Em seguida, utilize estruturas de repetição para:

- Exibir os números digitados em ordem crescente.

- Calcular e exibir a média dos números.

- Criar um dicionário onde as chaves são os números e os valores indicam quantas vezes cada número apareceu na lista.

- Exibir os números únicos na lista usando um conjunto.


## Conclusão

Essa apostila abordou os conceitos fundamentais sobre operadores, estruturas de repetição e estruturas de dados em Python. Praticar os exercícios é essencial para fortalecer o aprendizado.

**Bons estudos!**

