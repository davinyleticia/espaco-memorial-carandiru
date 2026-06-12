---
layout: "base.njk"
description:  CRUD Nexjs
title: CRUD Nexjs
---

# CRUD Nexjs

Para utilizar o `useState` e o `fetch` em componentes do Next.js (especialmente no App Router moderno), precisamos garantir que o código rode no lado do cliente. Por isso, esses exemplos assumem que você está usando a diretiva `"use client"` no topo do seu arquivo e um estado base como este:

```javascript
"use client";
import { useState, useEffect } from 'react';

// Exemplo de estado base no seu componente
// const [items, setItems] = useState([]);
```

Abaixo estão os 4 códigos separados para as operações de **CRUD** (Create, Read, Update, Delete) consumindo uma API genérica (`/api/items`).

---

### 1. CREATE (Criar)
Utiliza o método `POST` para enviar novos dados para a API e, em seguida, atualiza o estado local adicionando o novo item à lista.

```javascript
  const handleCreate = async (newItemData) => {
    try {
      const response = await fetch('/api/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newItemData), // Envia os dados no corpo da requisição
      });

      if (!response.ok) throw new Error('Erro ao criar item');

      const createdItem = await response.json();
      
      // Atualiza o estado adicionando o novo item ao final do array
      setItems((prevItems) => [...prevItems, createdItem]);
      
    } catch (error) {
      console.error(error);
    }
  };
```

---

### 2. READ (Ler/Listar)
Utiliza o método `GET` (padrão do fetch) para buscar os dados da API. Geralmente, essa função é chamada dentro de um `useEffect` quando a página carrega.

```javascript
  const handleRead = async () => {
    try {
      const response = await fetch('/api/items', {
        method: 'GET', // Opcional, GET é o padrão
      });

      if (!response.ok) throw new Error('Erro ao buscar itens');

      const data = await response.json();
      
      // Atualiza o estado com a lista recebida da API
      setItems(data);
      
    } catch (error) {
      console.error(error);
    }
  };

  // Exemplo de uso ao carregar a página:
  // useEffect(() => { handleRead(); }, []);
```

---

### 3. UPDATE (Atualizar)
Utiliza o método `PUT` ou `PATCH` para atualizar um item específico através do seu ID. O estado local é mapeado para substituir apenas o item que foi modificado.

```javascript
  const handleUpdate = async (id, updatedData) => {
    try {
      const response = await fetch(`/api/items/${id}`, {
        method: 'PUT', // Ou PATCH, dependendo da sua API
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) throw new Error('Erro ao atualizar item');

      const updatedItem = await response.json();

      // Mapeia o estado antigo, substituindo o item editado e mantendo os outros
      setItems((prevItems) => 
        prevItems.map((item) => (item.id === id ? updatedItem : item))
      );

    } catch (error) {
      console.error(error);
    }
  };
```

---

### 4. DELETE (Deletar)
Utiliza o método `DELETE` informando o ID do item na URL. Após a exclusão com sucesso na API, o estado local é filtrado para remover o item da tela sem precisar recarregar a página.

```javascript
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/api/items/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Erro ao deletar item');

      // Filtra o estado removendo o item que possui o ID deletado
      setItems((prevItems) => prevItems.filter((item) => item.id !== id));

    } catch (error) {
      console.error(error);
    }
  };
```