---
layout: "base.njk"
description:  POO
title: Simulado - POO
---

# Exercício – Sistema de Funcionários em Python

Crie um sistema em Python utilizando **abstração, herança e polimorfismo** para representar funcionários de uma empresa.

---

## Requisitos

### 1. Classe Abstrata

Crie uma classe abstrata chamada `Funcionario` contendo:

* atributo `nome`
* atributo `salario`
* método construtor `__init__`
* método abstrato `calcular_bonus()`
* método `exibir_dados()`

---

### 2. Herança

Crie as seguintes classes que herdam de `Funcionario`:

### Gerente

* recebe bônus de **20%** do salário

### Desenvolvedor

* recebe bônus de **10%** do salário

### Estagiario

* recebe bônus de **5%** do salário

Cada classe deve implementar o método `calcular_bonus()` de forma diferente.

---

## 3. Polimorfismo

No programa principal:

* crie uma lista de funcionários
* adicione objetos de diferentes tipos:

  * `Gerente`
  * `Desenvolvedor`
  * `Estagiario`
* percorra a lista utilizando polimorfismo
* exiba:

  * nome
  * salário
  * bônus calculado

---

# Regras

O exercício deve utilizar:

* classe abstrata (`ABC`)
* herança
* sobrescrita de métodos
* polimorfismo
* lista de objetos

---

# Exemplo de Saída Esperada

```txt id="vwpcg1"
Nome: Ana
Salário: R$ 5000.00
Bônus: R$ 1000.00

Nome: Carlos
Salário: R$ 3000.00
Bônus: R$ 300.00

Nome: Julia
Salário: R$ 1500.00
Bônus: R$ 75.00
```


# Resposta: 

```python

from abc import ABC, abstractmethod

# 1. Classe Abstrata
class Funcionario(ABC):
    def __init__(self, nome, salario):
        self.nome = nome
        self.salario = salario

    @abstractmethod
    def calcular_bonus(self):
        """Método abstrato que será implementado pelas subclasses"""
        pass

    def exibir_dados(self):
        bonus = self.calcular_bonus()
        print(f"Nome: {self.nome}")
        print(f"Salário: R$ {self.salario:.2f}")
        print(f"Bônus: R$ {bonus:.2f}")
        print("-" * 20)

# 2. Herança e Sobrescrita
class Gerente(Funcionario):
    def calcular_bonus(self):
        # Bônus de 20%
        return self.salario * 0.20

class Desenvolvedor(Funcionario):
    def calcular_bonus(self):
        # Bônus de 10%
        return self.salario * 0.10

class Estagiario(Funcionario):
    def calcular_bonus(self):
        # Bônus de 5%
        return self.salario * 0.05

# 3. Polimorfismo no Programa Principal
if __name__ == "__main__":
    # Criação da lista de funcionários (objetos de diferentes tipos)
    lista_funcionarios = [
        Gerente("Ana", 5000.00),
        Desenvolvedor("Carlos", 3000.00),
        Estagiario("Julia", 1500.00)
    ]

    # Percorrendo a lista e utilizando polimorfismo
    for funcionario in lista_funcionarios:
        # O Python decide qual calcular_bonus() chamar em tempo de execução
        funcionario.exibir_dados()

```
