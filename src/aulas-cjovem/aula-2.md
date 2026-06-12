---
layout: "base.njk"
description:   Aula - 2 
title: Intro à Programação e Config do Google Colab
permalink: aulas-cjovem/aula-2/
---

# Intro à Programação e Config do Google Colab

---

#### 1. O que são linguagens de programação?  
Linguagens de programação são ferramentas que usamos para criar instruções que os computadores conseguem entender e executar. Elas servem para resolver problemas ou automatizar tarefas.

**Exemplo de aplicações com Python:**
- **Desenvolvimento Web**: Frameworks como Django e Flask.
- **Ciência de Dados**: Pandas, NumPy e Matplotlib.
- **Automação**: Scripts para realizar tarefas repetitivas, como organizar arquivos.

---

####  2. Algoritmo no Cotidiano
Um **algoritmo** é uma sequência de passos para resolver um problema.  
Exemplo prático: "Fazer café"

1. **Entrada**: Pegue pó de café, água e filtro.
2. **Processamento**: 
   - Esquente a água.
   - Coloque o pó no filtro.
   - Passe a água quente sobre o pó.
3. **Saída**: Café pronto.

**Atividade:**

**Descreva um algoritmo do seu dia a dia.**  
Exemplo de resposta:  
**"Atravessar a rua com segurança"**  
1. **Entrada**: Observe o semáforo e o movimento dos carros.  
2. **Processamento**: Se o sinal estiver verde para os pedestres e não houver carros, comece a atravessar.  
3. **Saída**: Chegar ao outro lado da rua.

---

####  3. Configuração do Google Colab

O **Google Colab** é um ambiente gratuito baseado em nuvem para executar códigos Python.

**Passo a passo:**
1. Acesse o site: [Google Colab](https://colab.research.google.com).
2. Clique em "Novo Notebook" para criar um projeto.
3. Explore as células:
   - **Células de código**: Onde escrevemos os códigos Python.
   - **Células de texto**: Onde colocamos explicações ou formatações.

 Primeiro código:
```python
print("Olá, mundo!")
```

**Saída esperada:**  
```
Olá, mundo!
```

Isso demonstra como o Python processa e exibe os resultados.

---


#### 4. Variáveis, `input()` e `print()`

**O que são variáveis?**  
Uma **variável** é como uma "caixa" onde podemos guardar informações (valores) para usar mais tarde.  

Exemplo:  
```python
nome = "Ana"
idade = 25
altura = 1.65
```

- `nome` é uma variável do tipo texto (**string**).
- `idade` é uma variável do tipo número inteiro (**int**).
- `altura` é uma variável do tipo número decimal (**float**).

---

**Usando o `print()`**

O comando `print()` exibe informações na tela. Ele é muito útil para mostrar o resultado de cálculos, mensagens ou variáveis.

Exemplo básico:
```python
print("Olá, mundo!")
```
**Saída:**
```
Olá, mundo!
```

Exibindo variáveis:
```python
nome = "Ana"
print("Meu nome é", nome)
```
**Saída:**
```
Meu nome é Ana
```

Também podemos usar **f-strings** para deixar o código mais legível:
```python
nome = "Ana"
idade = 25
print(f"Meu nome é {nome} e eu tenho {idade} anos.")
```
**Saída:**
```
Meu nome é Ana e eu tenho 25 anos.
```

---

**Usando o `input()`**

O comando `input()` permite que o usuário forneça informações enquanto o programa está sendo executado. O valor digitado pelo usuário é sempre retornado como uma **string**.

Exemplo básico:

```python
nome = input("Digite seu nome: ")
print(f"Olá, {nome}! Seja bem-vindo!")
```
Exemplo de entrada/saída:

```
Entrada: João
Saída: Olá, João! Seja bem-vindo!
```

---

Exemplo Prático:

Vamos criar um programa que pede o nome e a idade do usuário e exibe uma mensagem personalizada: 

```python
nome = input("Digite seu nome: ")
idade = int(input("Digite sua idade: "))

print(f"Olá, {nome}! Você tem {idade} anos.")
```

Exemplo de entrada/saída:

```
Entrada:
Digite seu nome: Maria
Digite sua idade: 30

Saída:
Olá, Maria! Você tem 30 anos.
```

---

**Tipos de Dados**

Quando usamos o `input()`, o valor é sempre recebido como texto (**string**).  
Se precisarmos de um número, devemos converter o valor usando `int()` (para inteiros) ou `float()` (para decimais).

Exemplo:
```python
numero = input("Digite um número: ")  # Recebe uma string
print(numero * 2)  # Isso repetirá o texto (string) duas vezes

numero = int(numero)  # Converte para inteiro
print(numero * 2)  # Agora faz a multiplicação corretamente
```

---


####  5. Introdução ao PEP 8 (Guia de Estilo Python)

O **PEP 8** é o guia oficial de estilo do Python. Ele define as melhores práticas para escrever um código limpo, organizado e fácil de entender. 

 Regras mais importantes:

1. **Indentação**: Use 4 espaços por nível de indentação.

   ```python
   if True:
       print("Indentação correta")
   ```
2. **Comprimento das linhas**: Limite cada linha a 79 caracteres.

3. **Espaços ao redor de operadores**: Use espaços para tornar o código mais legível.
   ```python

   soma = 10 + 5
   ```
4. **Nomes de variáveis**: Utilize nomes descritivos em minúsculas, separados por underscores.

   ```python
   numero_total = 100
   ```

**Por que seguir o PEP 8?**

- Facilita a colaboração entre programadores.
- Garante que o código seja mais legível e padronizado.
- Torna a manutenção mais simples no futuro.

Para aprender mais, você pode acessar o guia completo do PEP 8: [PEP 8 – Python Enhancement Proposal](https://peps.python.org/pep-0008/)

---

####  6. Operações Matemáticas no Python

O Python pode ser usado como uma calculadora simples para realizar várias operações.

Operações Básicas:

1. Soma:

   ```python
   print(10 + 5)  # Resultado: 15
   ```

2. Subtração:

   ```python
   print(20 - 8)  # Resultado: 12
   ```

3. Multiplicação:

   ```python
   print(7 * 3)  # Resultado: 21
   ```

4. Divisão:

   ```python
   print(18 / 3)  # Resultado: 6.0
   ```

5. Resto da divisão:

   ```python
   print(10 % 3)  # Resultado: 1
   ```

6. Potência:

   ```python
   print(2 ** 3)  # Resultado: 8
   ```

Exemplo Prático:

Calcule a área de um círculo, dado um raio de 5:
```python
raio = 5
area = 3.14159 * (raio ** 2)
print("Área do círculo:", area)
```

**Saída esperada:**
```
Área do círculo: 78.53975
```

---

####  7. Exercícios Práticos com Respostas

**Exercício 1:**

Calcule o resultado de `(8 * 6) + 2`.  
**Resposta:**
```python
print((8 * 6) + 2)  # Resultado: 50
```

**Exercício 2:**

Crie um programa que exiba o dobro de um número fornecido pelo usuário.  
**Resposta:**
```python
numero = int(input("Digite um número: "))
print("O dobro é:", numero * 2)
```

**Exemplo de entrada/saída:**
```
Entrada: 7
Saída: O dobro é: 14
```

**Exercício 3:**
Faça um programa que determine se um número é par ou ímpar.  
**Resposta:**
```python
numero = int(input("Digite um número: "))
if numero % 2 == 0:
    print("Par")
else:
    print("Ímpar")
```

**Exemplo de entrada/saída:**
```
Entrada: 10
Saída: Par
```

---

#### 8. Recomendação: Livro **Aprendendo Python**

Se você deseja aprender Python de forma completa e didática, uma excelente referência é o livro **[Aprendendo Python](https://aprendendo-python.vidal.press/)**.  

---

#### Reflexão Final

**Perguntas para discussão:**
1. Quais dificuldades você encontrou para usar o Colab?  
2. Como você acha que a programação pode ser útil no seu dia a dia?  

**Desafio Extra:**  
Crie um programa que peça ao usuário dois números e faça as seguintes operações:
1. Soma.
2. Subtração.
3. Multiplicação.
4. Divisão.  


