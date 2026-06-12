---
layout: "base.njk"
description:  Aula - 5
title: Funções e Modularização em Python
permalink: aulas-cjovem/aula-5/
---

# Funções e Modularização em Python

## 1. O Que São Funções?

Funções são blocos de código que realizam uma tarefa específica. Elas são fundamentais na programação porque permitem:
- **Encapsular código**: agrupam instruções em um único bloco reutilizável.
- **Reutilização**: evitam a repetição de código.
- **Organização**: tornam o código mais legível e modular.

Uma função pode receber entradas (parâmetros) e pode retornar um resultado.

### Exemplo de uma função simples:
```python
def saudacao():
    print("Olá, seja bem-vindo!")

saudacao()  # Chamada da função
```

## 2. Declaração de Funções e Passagem de Parâmetros

Uma função é declarada com a palavra-chave `def`, seguida do nome da função e parênteses que podem conter parâmetros.

### Estrutura de uma função:
```python
def nome_da_funcao(param1, param2):
    # Corpo da função
    return resultado
```

### Exemplo com parâmetros e retorno:
```python
def soma(a, b):
    return a + b

resultado = soma(5, 3)
print("A soma é:", resultado)  # Saída: A soma é: 8
```

### Tipos de parâmetros:
- **Obrigatórios**: precisam ser informados na chamada da função.
- **Opcionais** (com valores padrão):
```python
def mensagem(texto="Olá"):
    print(texto)

mensagem()  # Saída: Olá
mensagem("Bem-vindo!")  # Saída: Bem-vindo!
```

#### Exercício:
Crie uma função que receba o nome e a idade de uma pessoa e exiba uma mensagem personalizada.

---

## 3. Modularização de Código

A modularização é a prática de dividir um programa em partes menores, chamadas **módulos**. Isso facilita:
- **Manutenção** do código.
- **Reutilização** de funções e classes.
- **Organização** de projetos grandes.

Em Python, um módulo é um arquivo `.py` contendo funções e variáveis que podem ser importadas em outros arquivos.

### Estrutura de um projeto modularizado:
```
meu_projeto/
│
├── principal.py  # Arquivo principal
├── modulo_matematica.py  # Módulo com funções matemáticas
└── modulo_listas.py  # Módulo com funções para listas
```

### Criando e importando módulos:

**1. Criando um módulo (`modulo_matematica.py`):**
```python
def quadrado(num):
    return num ** 2
```

**2. Importando e utilizando o módulo (`principal.py`):**
```python
import modulo_matematica

resultado = modulo_matematica.quadrado(4)
print(resultado)  # Saída: 16
```

#### Exercício:
Crie um módulo chamado `modulo_texto.py` que contenha uma função para contar o número de caracteres de uma string e utilize essa função em um arquivo principal.

---

## 4. Algoritmos Utilizando Funções em Python

Podemos utilizar funções para estruturar nossos programas de forma eficiente.

### Exemplo de uso de funções para verificar números primos:
```python
def eh_primo(n):
    if n < 2:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True

print(eh_primo(7))  # Saída: True
print(eh_primo(10))  # Saída: False
```

#### Exercício:
Crie um programa que solicite um número ao usuário e utilize uma função para verificar se ele é primo.

---

## 5. Números Aleatórios em Python

O módulo `random` permite gerar números aleatórios úteis para jogos e simulações.

### Funções comuns do módulo `random`:
```python
import random

print(random.random())  # Número aleatório entre 0 e 1
print(random.randint(1, 10))  # Número inteiro entre 1 e 10
print(random.choice(["Maçã", "Banana", "Laranja"]))  # Escolhe um item da lista
```

### Embaralhar listas:
```python
lista = [1, 2, 3, 4, 5]
random.shuffle(lista)
print(lista)
```

#### Exercício:
Crie um programa que sorteie um número de 1 a 100 e peça ao usuário para adivinhar.

---

## 6. Tratamento de Exceções em Python

Os erros podem ser tratados para evitar falhas no programa. Em Python, usamos `try`, `except`, `else` e `finally` para capturar e lidar com exceções.

### Exemplo básico:
```python
try:
    numero = int(input("Digite um número: "))
    print("O dobro do número é:", numero * 2)
except ValueError:
    print("Erro! Você deve digitar um número inteiro.")
```

### Exemplo com múltiplos tratamentos:
```python
try:
    num1 = int(input("Digite o primeiro número: "))
    num2 = int(input("Digite o segundo número: "))
    resultado = num1 / num2
    print("Resultado da divisão:", resultado)
except ZeroDivisionError:
    print("Erro! Não é possível dividir por zero.")
except ValueError:
    print("Erro! Você deve digitar números inteiros.")
finally:
    print("Programa finalizado.")
```

#### Exercício:
Crie um programa que solicite dois números ao usuário e trate possíveis erros ao tentar somá-los.

---

## Exercício Final

Crie um programa que:
1. Contenha um módulo chamado `operacoes.py` com funções para somar, subtrair, multiplicar e dividir dois números.
2. No arquivo principal (`main.py`), solicite dois números ao usuário e permita que ele escolha a operação desejada.
3. Utilize `try` e `except` para tratar erros de entrada do usuário.

---

## Conclusão

Essa página abordou os conceitos de funções e modularização em Python. Praticar os exercícios é essencial para fixar o aprendizado e desenvolver habilidades na linguagem.

**Bons estudos!**

