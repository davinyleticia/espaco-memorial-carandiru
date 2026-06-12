---
layout: "post.njk"
title: Tutorial de instalação do Postgresql e PgAdmin
tags: ['Postgresql', 'PgAdmin']
featuredImage: /_images/postgreesSQL.png
permalink: post/tutorial-de-instalacao-do-postgresql/
date: 2021-10-27
description: Experiência na instalação do Postgresql e PgAdmin.
---


Primeiro passo instalar o postgresql via apt-get.
```bash
sudo apt-get install postgresql-12
```
Para ver se está instalado:
```bash
psql --version
```
Pronto o servidor do banco de dados Postgresql instalado

## Instalando o cliente PgAdmin:
Primeiro passo instalar baixar o PgAdmin via curl.

```bash
curl https://www.pgadmin.org/static/packages_pgadmin_org.pub | sudo apt-key add
```
O curl é usado como abreviação para “Client URL”. Comandos Curl são destinados para funcionar como uma forma de verificar a conectividade da URL, além de ser uma ótima ferramenta de transferência de dados. 

```bash
sudo sh -c 'echo "deb https://ftp.postgresql.org/pub/pgadmin/pgadmin4/apt/$(lsb_release -cs) pgadmin4 main"> /etc/apt/sources.list.d/pgadmin4.list && apt update '

sudo apt install pgadmin4-desktop
```
Pronto finalizado a instalação

## Agora vai segunda saga, a conexão:

antes abre o terminal

e digita este comando:
```bash
sudo su - postgres
```
segundo comando:
```bash
psql template1
```
agora você digita isto (no local MyPassoword e o local da sua senha, sempre dentro das aspas)

```bash
ALTER USER postgres PASSWORD 'myPassword';
```

- Obs.: para sair do psql e só digitar exit


Agora vai até o pgAdmin, ele está no navegador, ( quando você clica no PgAdim no menu de aplicativo ele abre no navegador)

clica em add new server


<div style="text-align:center;">
<img src="/_images/add-serve.png" alt="imagem da tela para digitar o localhost, senha e username"><BR>
  Figura I - Tela
</div>


Em seguida irá abrir a primeira tela

<div style="text-align:center;">
<img src="/_images/create-server.png" alt="imagem da tela para digitar o localhost, senha e username"><BR>
  Figura II - Tela
</div>


Na primeira tela digita o nome, pode ser qualquer nome e depois vai para segunda tela

<div style="text-align:center;">
<img src="/_images/pgadmin.jpeg" alt="imagem da tela para digitar o localhost, senha e username"><BR>
  Figura III - Tela
</div>

Agora coloca o host 127.0.0.1 ou locahost, e a senha e clica em Save

Prontinho :)

## Artigo da aula sobre Postgren e PgAdmin ( SQL)

Artigo resumo da aula de postgren e PgAdmin