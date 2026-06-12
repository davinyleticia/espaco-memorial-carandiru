---
layout: "post.njk"
title: Emparelhando e Conectando Dispositivos Bluetooth no Linux
tags: ['bluethooth', 'linux', 'post']
featuredImage: /_images/bluetooth.png
permalink: post/emparelhando-e-conectando-dispositivos-bluetooth-no-linux/
date: 2024-04-01
description: Emparelhando e Conectando Dispositivos Bluetooth no Linux - Um Guia Passo a Passo
---

# Emparelhando e Conectando Dispositivos Bluetooth no Linux: 

Está configuração usei para configurar um teclado k480 no linux xubuntu


## Guia Passo a Passo

O Bluetooth é uma tecnologia amplamente utilizada para conectar dispositivos sem fio, como fones de ouvido, teclados, mouses e smartphones, a computadores e outros dispositivos. No Linux, o `bluetoothctl` é uma ferramenta poderosa que permite emparelhar e conectar dispositivos Bluetooth de forma eficiente através do terminal. Neste guia, vamos explorar como usar o `bluetoothctl` para emparelhar e conectar dispositivos Bluetooth no seu sistema Linux.

### Passo 1: Iniciando o Bluetoothctl

Para começar, abra o terminal no seu sistema Linux. Em seguida, inicie o `bluetoothctl` digitando o seguinte comando e pressionando Enter:

```
bluetoothctl
```

### Passo 2: Ativando o Bluetooth

Dentro do `bluetoothctl`, o primeiro passo é garantir que o Bluetooth esteja ativado. Isso pode ser feito com o seguinte comando:

```
[bluetooth]# power on
```

### Passo 3: Ativando o Agente

Para lidar com solicitações de emparelhamento, precisamos ativar um agente. Digite o seguinte comando para ativar o agente:

```
[bluetooth]# agent on
```

### Passo 4: Ativando a Descoberta

Para encontrar dispositivos Bluetooth próximos, ative a descoberta com o seguinte comando:

```
[bluetooth]# scan on
```

### Passo 5: Emparelhando com o Dispositivo Desejado

Uma vez que a descoberta esteja ativada, você verá uma lista de dispositivos Bluetooth próximos. Identifique o dispositivo com o qual deseja se emparelhar e anote seu endereço MAC. Em seguida, inicie o processo de emparelhamento com o seguinte comando, substituindo `XX:XX:XX:XX:XX:XX` pelo endereço MAC do dispositivo:

```
[bluetooth]# pair XX:XX:XX:XX:XX:XX
```

### Passo 6: Confiando no Dispositivo

Para permitir que o dispositivo se conecte automaticamente no futuro, confie nele com o seguinte comando, substituindo o endereço MAC:

```
[bluetooth]# trust XX:XX:XX:XX:XX:XX
```

### Passo 7: Conectando ao Dispositivo

Finalmente, conecte-se ao dispositivo desejado com o seguinte comando:

```
[bluetooth]# connect XX:XX:XX:XX:XX:XX
```

### Passo 8: Verificando a Conexão

Após alguns instantes, a conexão deve ser estabelecida. Para verificar se a conexão foi bem-sucedida, use o seguinte comando:

```
[bluetooth]# info XX:XX:XX:XX:XX:XX
```

Isso exibirá informações detalhadas sobre o dispositivo, incluindo seu estado de conexão.

### Passo 9: Saindo do Bluetoothctl

Depois de concluir as configurações desejadas, você pode sair do `bluetoothctl` digitando:

```
[bluetooth]# exit
```

Agora você emparelhou e conectou com sucesso um dispositivo Bluetooth usando o `bluetoothctl` no seu sistema Linux.

Experimente este processo para conectar diferentes tipos de dispositivos Bluetooth ao seu computador e desfrute da conveniência da comunicação sem fio!