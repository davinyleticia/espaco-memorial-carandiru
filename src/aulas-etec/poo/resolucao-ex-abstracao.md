---
layout: "base.njk"
description:   POO
title: Resolução Exercício Abstração POO
---

# Resolução em Código

```python
from abc import ABC, abstractmethod

# 1. Classe Abstrata
class ContaBancaria(ABC):
    def __init__(self, saldo_inicial=0.0):
        # Atributo comum a todas as contas
        self.saldo = saldo_inicial

    @abstractmethod
    def depositar(self, valor):
        pass

    @abstractmethod
    def sacar(self, valor):
        pass

# 2. Classe Filha: Conta Corrente
class ContaCorrente(ContaBancaria):
    
    def depositar(self, valor):
        self.saldo += valor
        print(f"[Conta Corrente] Depósito de R$ {valor:.2f} realizado.")

    def sacar(self, valor):
        taxa = 2.00
        valor_total = valor + taxa
        self.saldo -= valor_total # Conta corrente permite saldo negativo neste exemplo
        print(f"[Conta Corrente] Saque de R$ {valor:.2f} + Taxa de R$ {taxa:.2f}. Saldo atual: R$ {self.saldo:.2f}")

# 3. Classe Filha: Conta Poupança
class ContaPoupanca(ContaBancaria):
    
    def depositar(self, valor):
        self.saldo += valor
        print(f"[Conta Poupança] Depósito de R$ {valor:.2f} realizado.")

    def sacar(self, valor):
        # Regra específica da poupança: não permite saldo negativo
        if self.saldo >= valor:
            self.saldo -= valor
            print(f"[Conta Poupança] Saque de R$ {valor:.2f} realizado. Saldo atual: R$ {self.saldo:.2f}")
        else:
            print(f"[Conta Poupança] Saque NEGADO! Saldo insuficiente (Saldo: R$ {self.saldo:.2f})")


# --- Testando a Implementação ---

print("--- Testando Conta Corrente ---")
cc = ContaCorrente(100.0)
cc.depositar(50.0)  # Saldo vai para 150
cc.sacar(20.0)      # Tira 20 + 2 de taxa. Saldo vai para 128
cc.sacar(150.0)     # Fica negativo, mas a CC permite. Saldo vai para -24

print("\n--- Testando Conta Poupança ---")
cp = ContaPoupanca(100.0)
cp.depositar(50.0)  # Saldo vai para 150
cp.sacar(20.0)      # Tira 20. Saldo vai para 130
cp.sacar(150.0)     # Negado, pois 150 é maior que o saldo de 130

```

---

### 🔍 Entendendo os pontos-chave da solução:

* **O `__init__` na Classe Abstrata:** Repare que a classe `ContaBancaria` possui um método `__init__` implementado. Classes abstratas **podem** ter código concreto (como a inicialização do saldo), elas apenas exigem que os métodos marcados com `@abstractmethod` sejam sobrescritos pelas filhas.
* **Contrato Cumprido:** Tanto a `ContaCorrente` quanto a `ContaPoupanca` implementaram exatamente os métodos `depositar(valor)` e `sacar(valor)`. Se esquecêssemos um deles, o Python travaria a execução.
* **Comportamentos Diferentes:** A interface para o usuário final é a mesma (chamar `.sacar()`), mas o resultado muda de acordo com a classe. A isso damos o nome de **Polimorfismo**, que anda lado a lado com a Abstração.

