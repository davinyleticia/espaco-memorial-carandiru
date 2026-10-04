# Espaço Memorial Carandiru

Site institucional do Espaço Memorial Carandiru, um espaço de preservação da memória histórica do antigo Complexo Penitenciário do Carandiru, dedicado aos direitos humanos e à reflexão sobre o sistema prisional brasileiro.

O projeto reúne a linha do tempo histórica, o destaque do Memorial, a galeria do acervo e informações para visitação. As páginas secundárias são desenvolvidas pelos estudantes.

## Tecnologias

- [Eleventy (11ty)](https://www.11ty.dev/): gerador de site estático
- Nunjucks: templates (`base.njk`)
- [Pagefind](https://pagefind.app/): busca no site
- Netlify: hospedagem e deploy

## Estrutura

```
_images/        imagens e logos (Fotos/, logos/)
assets/         styles.css
_includes/      layouts (base.njk)
index.md        página inicial
galeria.md      galeria completa
museologia.md   páginas dos cards
```

Cada página `.md` usa o layout `base.njk` e define o próprio endereço pelo campo `permalink`.

## Como rodar

Instale as dependências:

```
pnpm install
```

Gere o site:

```
pnpm run build
```

Para desenvolver com atualização automática:

```
pnpm run watch:css
pnpm run start
```

## Como criar uma nova página

Crie um arquivo `.md` na raiz do projeto com este cabeçalho:

```
---
title: "Título da página"
layout: "base.njk"
permalink: "/nome-da-pagina/"
templateEngineOverride: njk
---
```

Escreva o conteúdo abaixo do cabeçalho e depois rode o build.
