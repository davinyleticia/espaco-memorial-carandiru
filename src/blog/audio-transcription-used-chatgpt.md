---
layout: "post.njk"
title: Transcrição de Áudio com ChatGPT
tags: ['chatgpt', 'python', 'api']
featuredImage: /_images/04.jpg
permalink: post/projetos-developer/audio-transcription-used-chatgpt/
date: 2021-10-27
description: Este é um projeto que utiliza o ChatGPT para realizar a transcrição de áudios em formato .mp3.
---

Este é um projeto que utiliza o ChatGPT para realizar a transcrição de áudios em formato .mp3. O script Python incluído neste repositório permite automatizar o processo de transcrição, pegando todos os arquivos de áudio .mp3 presentes na mesma pasta do script e convertendo-os em arquivos de texto transcritos. Os arquivos de texto resultantes são armazenados em uma pasta que o script cria automaticamente.

## Instalação

Primeiro certifique que tenha o git instalado

```
git@github.com:davinyleticia/audio-transcription-used-chatgpt.git
```
o repositório do git é [https://github.com/davinyleticia/audio-transcription-used-chatgpt](https://github.com/davinyleticia/audio-transcription-used-chatgpt)

## Como Usar

1. Certifique-se de ter o ChatGPT instalado e configurado no seu ambiente. Você pode seguir as instruções fornecidas pela OpenAI para fazer isso.

2. Clone este repositório para o seu ambiente local ou faça o download dos arquivos.

3. Certifique-se de que todos os arquivos de áudio .mp3 que deseja transcrever estão na mesma pasta do script `transcricao.py`.

4. Execute o script `transcricao.py` no seu ambiente Python. Isso iniciará o processo de transcrição.

5. Após a conclusão da transcrição, você encontrará os arquivos de texto resultantes na pasta `dir_mp3`, que será criada automaticamente pelo script. Cada arquivo de áudio .mp3 será transcrita em um arquivo de texto correspondente.

## Configuração

Antes de usar este script, certifique-se de configurar suas credenciais do ChatGPT. Você pode fazer isso adicionando suas chaves de API ou tokens de autenticação nas variáveis apropriadas no script. Consulte a documentação do ChatGPT para obter informações detalhadas sobre como configurar suas credenciais.

## Dependências

Este projeto requer as seguintes bibliotecas Python:

- `openai` - Para interagir com o ChatGPT API.
- `pydub` - Para manipulação de áudio (conversão de .mp3 para áudio).

Você pode instalar essas dependências usando `pip`:

```
pip install openai pydub
```

## Observações

- Certifique-se de que os arquivos de áudio .mp3 que deseja transcrever estejam em um formato compatível com o ChatGPT. Arquivos de áudio de baixa qualidade podem resultar em transcrições menos precisas.

- Lembre-se de que o ChatGPT consome recursos da API da OpenAI e pode ter limitações quanto ao número de solicitações permitidas em um período de tempo específico. Certifique-se de estar ciente das políticas de uso da OpenAI ao usar este script em larga escala.


- Este projeto é apenas um exemplo simples de como usar o ChatGPT para transcrição de áudio. Você pode personalizar o script e adicionar recursos adicionais, como processamento de linguagem natural para melhorar a precisão das transcrições ou suporte para outros formatos de áudio, conforme necessário.

Divirta-se transcrevendo seus áudios com o ChatGPT! Se você tiver alguma dúvida ou precisar de assistência, não hesite em entrar em contato com a equipe de suporte da OpenAI.