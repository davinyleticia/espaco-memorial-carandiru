---
layout: "base.njk"
description:  Simulado da Prova
title: Simulado Prova 2Bin
---
# Questão Prática: Implementação de Listas Agrupadas

- Contexto:
Você faz parte da equipe de desenvolvimento mobile de um aplicativo de delivery de comida utilizando React Native. Sua tarefa atual é construir a tela que exibe o cardápio de um restaurante. O cardápio precisa ser renderizado em uma lista rolável, mas os itens devem estar obrigatoriamente agrupados por categorias (ex: "Entradas", "Pratos Principais", "Sobremesas"), com um cabeçalho fixo para cada categoria durante a rolagem.

- Dados fornecidos:
Considere que o seu componente já recebe do backend a seguinte estrutura de dados:

```
const menuDoRestaurante = [
  {
    title: "Entradas",
    data: [
      { id: '1', nome: "Pão de Alho", preco: "R$ 15,00" },
      { id: '2', nome: "Batata Frita", preco: "R$ 20,00" }
    ]
  },
  {
    title: "Pratos Principais",
    data: [
      { id: '3', nome: "Lasanha à Bolonhesa", preco: "R$ 45,00" },
      { id: '4', nome: "Filé Mignon", preco: "R$ 65,00" }
    ]
  },
  {
    title: "Sobremesas",
    data: [
      { id: '5', nome: "Pudim", preco: "R$ 12,00" }
    ]
  }
];
```

- Tarefa:
Escreva o código do componente funcional em React Native que utilize o componente SectionList para renderizar a interface descrita.

Requisitos obrigatórios para a avaliação:

Propriedade de Dados: Utilize a propriedade correta do SectionList para mapear o array menuDoRestaurante (Atenção à diferença desta propriedade em relação ao FlatList).

Renderização dos Itens: Implemente a função (propriedade) responsável por renderizar o nome e o preço de cada prato.

Renderização do Cabeçalho: Implemente a função (propriedade) que exibe o título de cada seção ("Entradas", "Pratos Principais", etc.).

Performance: Configure corretamente a extração de chaves únicas (key) para os itens da lista, evitando os avisos de warning do React.


---

# Outras informações que vai cai na prova

### 1. Elementos Base e Layout (Containers)

`View`: É o bloco de construção mais fundamental. Serve como um container para outros componentes, organizar o layout (usando Flexbox) e aplicar estilos. Equivalente à `<div>` no HTML.

`SafeAreaView`: Um container especial que garante que seu conteúdo seja renderizado em uma área "segura" da tela, evitando que fique escondido atrás do "notch" (entalhe da câmera) ou das barras de navegação nativas (principalmente no iOS).

`ScrollView`: Uma `View` que permite rolagem. Usada quando o conteúdo da tela é maior que o tamanho do dispositivo. (Aviso: não use para listas muito grandes, pois renderiza tudo de uma vez e prejudica a performance).

### 2. Textos
 `Text`: O único componente capaz de renderizar palavras e frases na tela. Equivalente às tags `<p>`, `<h1>`, `<span>` do HTML. Se você colocar um texto solto dentro de uma `View` sem a tag `<Text>`, o app dará erro.

### 3. Inputs e Formulários

`TextInput`: É o campo de digitação onde o usuário insere dados. Equivalente ao `<input>` ou `<textarea>` da web. Possui propriedades para senhas (`secureTextEntry`), teclado numérico, etc.
  
`Switch`: Um botão de liga/desliga (interruptor). Muito comum em telas de configurações.

⚠️ Atenção sobre o `SelectList` (Select / Dropdown): 
    *   O React Native não possui um componente "Select" nativo direto na sua biblioteca central hoje em dia. 
    *   Como fazer: Geralmente utilizamos a biblioteca da comunidade chamada `@react-native-picker/picker` ou pacotes visuais de terceiros como o `react-native-dropdown-picker`. Outra opção comum é criar o seu próprio componente usando um `Modal` e uma `FlatList`.

### 4. Botões e Interatividade

`Button`: Um botão básico e rápido de implementar, mas que tem um estilo padrão engessado e que fica diferente no Android e no iOS.

`TouchableOpacity`: É muito mais usado que o `Button`. É um container (como uma View) que detecta toques e, quando pressionado, reduz a sua opacidade levemente (fica meio transparente). Permite colocar Textos, Ícones ou Imagens dentro dele e estilizá-lo livremente.

`Pressable`: É a versão mais moderna do `TouchableOpacity`. Ele é recomendado para o futuro do React Native, pois oferece controles muito mais precisos sobre os estados do toque (saber exatamente quando o dedo tocou, soltou, deslizou, etc).

### 5. Listas de Alta Performance

`FlatList`: Utilizado para renderizar listas simples. Diferente do `ScrollView`, ele só renderiza os itens que estão aparecendo na tela, economizando memória.
 
`SectionList`: Como vimos anteriormente, é a lista ideal para dados agrupados por categorias/seções, permitindo cabeçalhos fixos.



### Apostila

[Apostila](https://www.bing.com/ck/a?!&&p=31bde59af9c1e4e4dc3104ba8a4399e2c0074790ee10e6158f1700e6b99b8b81JmltdHM9MTc3Njk4ODgwMA&ptn=3&ver=2&hsh=4&fclid=1a96156a-657f-6ec2-062f-022a64066f28&psq=arquitetura+sistema+operacional+mobile&u=a1aHR0cHM6Ly9wcm9lZHUucm5wLmJyL2JpdHN0cmVhbS9oYW5kbGUvMTIzNDU2Nzg5LzE2ODEvQXJxdWl0ZXR1cmElMjBkZSUyMFNpc3RlbWFzJTIwTW9iaWxlLnBkZj9zZXF1ZW5jZT0x)