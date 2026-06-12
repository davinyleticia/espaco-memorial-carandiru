---
layout: "base.njk"
description:  Aula - 6 
title: Tópicos Avançados em Python
permalink: aulas-cjovem/aula-6/
---
# Tópicos Avançados em Python

## Introdução
Nesta apostila, vamos aprender quatro truques mágicos do Python que tornam o código mais rápido e fácil de entender. Vamos aprender de um jeito simples, como se estivéssemos brincando! Os tópicos são:
- **List Comprehension** (criando listas de forma divertida)
- **Função Enumerate** (numerando coisas automaticamente)
- **Função Reduce** (juntando tudo em uma coisa só)
- **Função Map** (transformando listas rapidinho)

## 1. List Comprehension

### O que é?
Imagine que você quer fazer uma lista com vários números. Normalmente, precisaríamos escrever várias linhas de código, mas com o **List Comprehension**, você faz isso em uma única linha! É como uma fórmula mágica para criar listas.

### Como funciona?
```python
[expressão for elemento in iterável if condição]
```
- **expressão:** o que você quer colocar na lista.
- **elemento:** cada item que você está verificando.
- **iterável:** uma lista, intervalo de números, etc.
- **condição (opcional):** um filtro para escolher só alguns elementos.

### Exemplos Divertidos
1. **Quadrados dos números de 1 a 5:**
```python
quadrados = [x**2 for x in range(1, 6)]
print(quadrados)  # Saída: [1, 4, 9, 16, 25]
```

2. **Filtrando números pares de 1 a 10:**
```python
pares = [x for x in range(1, 11) if x % 2 == 0]
print(pares)  # Saída: [2, 4, 6, 8, 10]
```

### Desafio:
- Crie uma lista com o dobro dos números de 1 a 5 usando List Comprehension.
- Filtre só os números maiores que 5 de uma lista de 1 a 10.

---

## 2. Função Enumerate

### O que é?
Imagine que você tem uma lista de brinquedos e quer saber o número de cada um. Em vez de contar manualmente, o Python faz isso para você usando o **`enumerate()`**. É como numerar figurinhas em um álbum.

### Como funciona?
```python
for índice, elemento in enumerate(iterável, início=0):
```
- **índice:** o número que o Python dá para cada item.
- **elemento:** o item da lista.

### Exemplos Divertidos
1. **Numerando frutas:**
```python
frutas = ['maçã', 'banana', 'cereja']
for i, fruta in enumerate(frutas):
    print(i, fruta)
# Saída:
# 0 maçã
# 1 banana
# 2 cereja
```

2. **Começando do número 1:**
```python
for i, fruta in enumerate(frutas, 1):
    print(i, fruta)
# Saída:
# 1 maçã
# 2 banana
# 3 cereja
```

### Desafio:
- Crie uma lista de super-heróis e use `enumerate()` para numerá-los.
- Comece a enumeração a partir do número 5.

---

## 3. Função Reduce

### O que é?
Pense em juntar vários legos para construir uma torre. O **`reduce()`** faz isso com números! Ele junta todos os itens de uma lista em um só resultado.

### Como funciona?
```python
from functools import reduce
reduce(função, iterável)
```
- **função:** o que você quer fazer (somar, multiplicar, etc.).
- **iterável:** a lista de coisas para juntar.

### Exemplos Divertidos
1. **Somando números:**
```python
from functools import reduce
numeros = [1, 2, 3, 4, 5]
soma = reduce(lambda x, y: x + y, numeros)
print(soma)  # Saída: 15
```

2. **Encontrando o maior número:**
```python
maior = reduce(lambda a, b: a if a > b else b, numeros)
print(maior)  # Saída: 5
```

### Desafio:
- Use `reduce()` para calcular o produto dos números de uma lista.
- Encontre o menor valor em uma lista.

---

## 4. Função Map

### O que é?
Imagine que você quer transformar todas as bolas vermelhas em azuis. O **`map()`** faz isso em listas! Ele aplica uma mudança a cada item.

### Como funciona?
```python
map(função, iterável)
```
- **função:** o que você quer fazer (dobrar, converter, etc.).
- **iterável:** a lista que você quer mudar.

### Exemplos Divertidos
1. **Dobrando números:**
```python
numeros = [1, 2, 3, 4, 5]
dobro = list(map(lambda x: x * 2, numeros))
print(dobro)  # Saída: [2, 4, 6, 8, 10]
```

2. **Convertendo números em texto:**
```python
strings = list(map(str, numeros))
print(strings)  # Saída: ['1', '2', '3', '4', '5']
```

### Desafio:
- Use `map()` para transformar uma lista de temperaturas em Celsius para Fahrenheit.
- Converta uma lista de números decimais para inteiros.

