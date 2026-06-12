---
layout: "base.njk"
description:  Resposta do exercício
title: Exercício Nexjs PW III
---

# Resposta do exercício


### Estrutura de Pastas (App Router)
Certifique-se de que seus arquivos estejam organizados desta forma dentro da pasta `app`:


```text

app/
 ├── api/
 │    ├── alunos/
 │    │    └── route.js
 │    └── media/
 │         └── route.js
 └── alunos/
      └── page.js

```

### 1. Endpoint de Cálculo de Média (`POST /api/media`)

Crie o arquivo `app/api/media/route.js`. Este endpoint lerá o corpo da requisição, fará o cálculo da média do array e retornará o JSON.

```javascript
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { notas } = body;

    // Verifica se "notas" existe e é um array
    if (!notas || !Array.isArray(notas) || notas.length === 0) {
      return NextResponse.json(
        { erro: "Envie um array de 'notas' válido." },
        { status: 400 }
      );
    }

    // Calcula a média
    const soma = notas.reduce((acc, nota) => acc + nota, 0);
    const media = soma / notas.length;

    // Retorna o resultado em JSON
    return NextResponse.json({ media });
    
  } catch (error) {
    return NextResponse.json(
      { erro: "Erro ao processar a requisição." },
      { status: 500 }
    );
  }
}
```


### 2. Endpoint de Listagem de Alunos (`GET /api/alunos`)

Crie o arquivo `app/api/alunos/route.js`. Este endpoint apenas retornará a lista estática de alunos.

```javascript
import { NextResponse } from 'next/server';

export async function GET() {
  const alunos = [
    { nome: "Ana", idade: 18 },
    { nome: "Carlos", idade: 20 },
    { nome: "Beatriz", idade: 19 },
    { nome: "João", idade: 22 }
  ];

  return NextResponse.json(alunos);
}
```

### 3. Página Frontend para Listar Alunos (`/alunos`)

Crie o arquivo `app/alunos/page.js`. Como a atividade exige o uso de `useState` e `useEffect`, precisamos transformar esse componente em um Client Component adicionando a diretiva `"use client"` no topo do arquivo.
{% raw %}
```javascript

"use client";

import { useState, useEffect } from 'react';

export default function AlunosPage() {
  const [alunos, setAlunos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Função para buscar os alunos na API
    const fetchAlunos = async () => {
      try {
        const response = await fetch('/api/alunos');
        const data = await response.json();
        setAlunos(data);
      } catch (error) {
        console.error("Erro ao buscar alunos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAlunos();
  }, []); // Array de dependências vazio para executar apenas ao montar o componente

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Lista de Alunos</h1>
      
      {loading ? (
        <p>Carregando alunos...</p>
      ) : (
        <ul>
          {alunos.map((aluno, index) => (
            <li key={index} style={{ margin: '10px 0' }}>
              <strong>Nome:</strong> {aluno.nome} | <strong>Idade:</strong> {aluno.idade} anos
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

```
{% endraw %}