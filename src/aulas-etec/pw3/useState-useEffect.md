---
layout: "base.njk"
description:  UseState e UseEffect
title:  UseState e UseEffect
---

# UseState

O useState é um Hook do React que permite adicionar e gerenciar estados em componentes funcionais. Ele retorna um array com dois elementos: o estado atual e uma função para atualizá-lo.


***const [numero, setNumero] = useState(0);***

***const [cor, setCor] = useState(‘’);***

***const [chuva, setChuva] = useState(true);***


state → estado corrente

setState → função de update

initialValue → valor do estado

`setCor(“amarelo”)`

```javascript

import { useState } from "react";
    function Counter() {
    
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        console.log("Executou uma vez");
    }, [count]); 
    
return (
    <div>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>
            Increment
        </button>
    </div>
    );
} 
```

# O que é o useEffect?

O useEffect é um hook que permite que você execute efeitos colaterais em componentes funcionais do React. Efeitos colaterais podem incluir operações como chamadas de API, manipulação de DOM diretamente ou configurações de timers. Ele é chamado após a renderização do componente e pode ser configurado para executar em diferentes momentos do ciclo de vida do componente.

```javascript

useEffect(() => {
// efeito (side effect)
return () => {
// cleanup (opcional)
};
}, [dependencias]); 

import { useEffect } from "react";

useEffect(() => {
console.log("Executou uma vez");
}, []); 


```

