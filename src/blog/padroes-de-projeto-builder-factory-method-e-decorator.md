---
layout: "post.njk"
title: Padrões de Projeto - Builder, Factory Method e Decorator
tags: ['Design Patterns', 'Padrões de Projeto']
featuredImage: /_images/design-patterns.png
permalink: post/padroes-de-projeto-builder-factory-method-e-decorator/
date: 2024-10-18
description: Os padrões de projeto são soluções reutilizáveis que ajudam a resolver problemas comuns no desenvolvimento de software.
---


Os padrões de projeto são soluções reutilizáveis que ajudam a resolver problemas comuns no desenvolvimento de software. Neste artigo, vamos explorar três padrões populares: Builder, Factory Method e Decorator, usando analogias da vida cotidiana para facilitar a compreensão.

## 1. Builder

### O que é?

O padrão Builder é utilizado quando precisamos criar um objeto complexo. Em vez de criar o objeto diretamente, utilizamos um construtor que permite construir o objeto passo a passo.

### Analogia

Imagine que você está montando um sanduíche. Em vez de simplesmente pedir um "sanduíche", você pode personalizá-lo:

- Primeiro, escolha o tipo de pão (integral, francês, etc.).
- Depois, adicione os ingredientes (presunto, queijo, alface, etc.).
- Por fim, escolha o molho (maionese, ketchup, mostarda).

Esse processo de montagem é similar ao padrão Builder. Assim, você cria um "sanduíche" que atende às suas preferências específicas.

### Exemplo em código

```python
class Sanduiche:
    def __init__(self):
        self.pao = None
        self.ingredientes = []
        self.molho = None

class SanduicheBuilder:
    def __init__(self):
        self.sanduiche = Sanduiche()

    def adicionar_pao(self, tipo):
        self.sanduiche.pao = tipo
        return self

    def adicionar_ingrediente(self, ingrediente):
        self.sanduiche.ingredientes.append(ingrediente)
        return self

    def adicionar_molho(self, molho):
        self.sanduiche.molho = molho
        return self

    def construir(self):
        return self.sanduiche

# Uso
builder = SanduicheBuilder()
sanduiche = (
    builder
    .adicionar_pao("integral")
    .adicionar_ingrediente("presunto")
    .adicionar_ingrediente("queijo")
    .adicionar_molho("maionese")
    .construir()
)
```

## 2. Factory Method

### O que é?

O padrão Factory Method fornece uma interface para criar objetos em uma superclasse, mas permite que as subclasses alterem o tipo de objetos que serão criados. Ele promove a criação de objetos sem especificar a classe exata do objeto que será criado.

### Analogia

Pense em um fabricante de automóveis. Cada fabricante (como Ford, Honda ou Toyota) produz um tipo específico de carro, mas todos eles seguem um processo semelhante de fabricação:

- Um cliente solicita um carro.
- O fabricante decide qual modelo criar com base nas preferências do cliente.

Assim, o fabricante não precisa saber os detalhes de cada modelo; ele simplesmente sabe como produzir o carro adequado.

### Exemplo em código

```python
class Carro:
    def dirigir(self):
        pass

class CarroEsportivo(Carro):
    def dirigir(self):
        return "Dirigindo um carro esportivo!"

class CarroFamilia(Carro):
    def dirigir(self):
        return "Dirigindo um carro de família!"

class FabricaDeCarros:
    def criar_carro(self, tipo):
        if tipo == "esportivo":
            return CarroEsportivo()
        elif tipo == "familia":
            return CarroFamilia()
        raise ValueError("Tipo de carro desconhecido")

# Uso
fabrica = FabricaDeCarros()
carro = fabrica.criar_carro("esportivo")
print(carro.dirigir())
```

## 3. Decorator

### O que é?

O padrão Decorator permite adicionar comportamentos a objetos de maneira dinâmica. É uma forma de extensão de classes, onde você pode "decorar" ou adicionar funcionalidades a um objeto existente sem alterar sua estrutura.

### Analogia

Imagine que você está personalizando uma camiseta. Você pode:

- Adicionar uma estampa (um desenho).
- Adicionar um bordado (uma linha costurada).
- Adicionar apliques (peças de tecido costuradas).

Cada uma dessas adições não altera a camiseta original, mas enriquece seu design.

### Exemplo em código

Aqui, usaremos a sintaxe de decorator com a notação `@`.

```python
class Camiseta:
    def __init__(self):
        self.descricao = "Camiseta básica"

    def __str__(self):
        return self.descricao

def estampa_decorator(camiseta):
    return f"{camiseta}, com estampa"

def bordado_decorator(camiseta):
    return f"{camiseta}, com bordado"

# Uso
camiseta = Camiseta()
camiseta_com_estampa = estampa_decorator(camiseta)
camiseta_final = bordado_decorator(camiseta_com_estampa)

print(camiseta_final)  # Saída: Camiseta básica, com estampa, com bordado
```

### Usando @ como Decorators

Agora, vamos definir os decorators usando a sintaxe `@` de maneira mais formal:

```python
class Camiseta:
    def __init__(self):
        self.descricao = "Camiseta básica"

    def __str__(self):
        return self.descricao

def decorator_de_estampa(camiseta):
    def wrapper():
        return f"{camiseta()}, com estampa"
    return wrapper

def decorator_de_bordado(camiseta):
    def wrapper():
        return f"{camiseta()}, com bordado"
    return wrapper

@decorator_de_estampa
@decorator_de_bordado
def camiseta_personalizada():
    return Camiseta().__str__()

# Uso
print(camiseta_personalizada())  # Saída: Camiseta básica, com estampa, com bordado
```

### Explicação do Código

1. **Camiseta**: Classe que representa uma camiseta básica.
2. **decorator_de_estampa** e **decorator_de_bordado**: Funções que são decorators, que recebem uma função e a "decoram" com novas informações.
3. **@decorator_de_estampa** e **@decorator_de_bordado**: Sintaxe que aplica os decorators à função `camiseta_personalizada`.

Os decorators são uma forma poderosa de adicionar funcionalidades a classes e funções de forma dinâmica. A sintaxe `@` torna o código mais limpo e legível, facilitando a compreensão e o uso deste padrão de design. Com isso, podemos personalizar objetos, como a camiseta, de maneira mais intuitiva.

## Conclusão

Os padrões de projeto Builder, Factory Method e Decorator oferecem maneiras eficazes de estruturar e organizar o código, tornando-o mais modular e fácil de manter. Ao usar analogias do dia a dia, podemos entender melhor esses conceitos e aplicá-los em nossos projetos de programação. Compreender esses padrões é um passo importante para se tornar um desenvolvedor mais eficiente e criativo!