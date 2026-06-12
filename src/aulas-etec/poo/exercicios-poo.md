---
layout: "base.njk"
description:   POO
title: Exercícios de POO
---

# 🧠 Exercício 1 – Pessoa e Aluno

Crie uma classe `Pessoa` com:

* nome (privado)
* idade (privado)

Use **encapsulamento** (getters e setters).

Depois crie uma classe `Aluno` que herda de `Pessoa`:

* atributo: matrícula
* método: mostrar dados

👉 Desafio:

* Não permitir idade negativa

---

# 🧠 Exercício 2 – Conta Bancária

Crie uma classe `ContaBancaria`:

* saldo (privado)

Métodos:

* depositar(valor)
* sacar(valor)
* ver saldo

👉 Regras:

* Não pode sacar mais do que tem
* Não pode depositar valor negativo

Crie uma classe `ContaPoupanca` (herança):

* método: render juros (ex: +5%)

---

# 🧠 Exercício 3 – Animal

Crie uma classe `Animal`:

* nome
* método: fazer_som()

Crie classes filhas:

* `Cachorro` → "Latido"
* `Gato` → "Miau"

👉 Desafio:

* Use **polimorfismo** (mesmo método, comportamentos diferentes)

---

# 🧠 Exercício 4 – Produto

Crie uma classe `Produto`:

* nome (privado)
* preço (privado)

Métodos:

* getter e setter
* calcular desconto

Crie classe `ProdutoEletronico`:

* garantia (meses)

👉 Regras:

* preço não pode ser negativo

---

# 🧠 Exercício 5 – Funcionário

Crie uma classe `Funcionario`:

* nome
* salário (privado)

Método:

* calcular bônus

Crie classes filhas:

* `Gerente` → bônus 20%
* `Estagiario` → bônus 5%

👉 Desafio:

* método para mostrar salário + bônus

---

# 💻 Exemplo base em Python (pra te ajudar)

```python
class Pessoa:
    def __init__(self, nome, idade):
        self.__nome = nome
        self.__idade = idade

    def get_idade(self):
        return self.__idade

    def set_idade(self, idade):
        if idade >= 0:
            self.__idade = idade
        else:
            print("Idade inválida")


class Aluno(Pessoa):
    def __init__(self, nome, idade, matricula):
        super().__init__(nome, idade)
        self.matricula = matricula

    def mostrar(self):
        print(self.matricula, self.get_idade())
```

