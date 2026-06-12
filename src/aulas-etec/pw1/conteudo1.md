---
layout: "base.njk"
description:  PW I
title: Introdução à Web (HTTP/DNS)
---

# Introdução à Web (HTTP/DNS).

Bem-vindo ao ponto de partida do desenvolvimento web! Entender como a internet funciona e preparar suas ferramentas é essencial antes de escrever a primeira linha de código.

Aqui está um guia estruturado sobre os fundamentos da web e a configuração do seu ambiente.

## 1. Fundamentos da Web: Como as coisas se conectam
Para entender como a web funciona, precisamos olhar para o que acontece "por baixo do capô" sempre que você digita um endereço no seu navegador. Esse processo é uma conversa rápida e complexa entre diferentes computadores ao redor do mundo.

Aqui estão os pilares dessa conexão:

### O Modelo Cliente-Servidor

A web opera em um modelo de Requisição e Resposta.

- Cliente: É o seu dispositivo (computador, celular) e o software que você usa (Chrome, Firefox). Ele é quem inicia a conversa pedindo algo.

- Servidor: É um computador potente, ligado 24/7, que armazena os arquivos dos sites (HTML, imagens, vídeos). Ele recebe o pedido, processa e envia os dados de volta.

![image-servidor-cliente](/_images/image-servidor-cliente.png)

## 2. DNS: O GPS da Internet

O **DNS (Domain Name System)** é frequentemente chamado de "lista de contatos" ou "GPS" da internet porque ele é o responsável por traduzir os nomes que digitamos (como `google.com`) nos endereços numéricos que os computadores entendem (os **Endereços IP**).

Sem o DNS, você teria que decorar números como `142.250.191.67` para acessar um site.

---

##### Como funciona a busca (Resolução) DNS

Quando você digita uma URL no navegador, acontece uma "corrida" em várias etapas que dura milissegundos.

##### O Cache (A memória rápida)

Antes de sair perguntando pelo mundo, seu computador tenta economizar tempo:

* **Browser Cache:** O navegador verifica se você visitou esse site recentemente.
* **OS Cache:** Se o navegador não sabe, ele pergunta ao Sistema Operacional.

##### O Resolvedor Recursivo (O "Garçom")

Se o endereço não estiver no cache, a requisição vai para o **Recursive Resolver** (geralmente fornecido pelo seu provedor de internet ou serviços como Google 8.8.8.8). Ele é o responsável por ir atrás da informação para você.

##### A Hierarquia DNS (A busca detalhada)

Se o "Garçom" não souber a resposta, ele consulta a hierarquia oficial em ordem:

1. **Root Nameserver:** O servidor "raiz" não sabe o IP, mas sabe quem cuida dos domínios `.com`, `.org`, `.br`, etc.
2. **TLD Nameserver:** O servidor de *Top-Level Domain* (como o do `.com`) aponta para o servidor onde o site específico foi registrado.
3. **Authoritative Nameserver:** É a parada final. Este servidor tem a "autoridade" sobre o domínio e fornece o **Endereço IP** final.

[🎞️ Slides de DNS](/_storege/etec/DNS-ETEC-1-2026.pdf)

---

##### Principais Tipos de Registros DNS

Como desenvolvedor, você encontrará esses termos ao configurar um site:

| Registro | Função | Exemplo de Uso |
| --- | --- | --- |
| **A** | Aponta um domínio para um endereço **IPv4**. | `meusite.com` -> `192.0.2.1` |
| **AAAA** | Aponta um domínio para um endereço **IPv6**. | Versão moderna e longa do IP. |
| **CNAME** | Aponta um domínio para **outro domínio** (apelido). | `www.site.com` -> `site.com` |
| **MX** | Direciona os **e-mails** do domínio para um servidor. | Define que o Gmail cuida dos seus e-mails. |
| **TXT** | Armazena textos (usado para validar que você é dono do site). | Verificação de segurança ou do Google Search Console. |

---

##### O que é Propagação de DNS?

Quando você altera o IP do seu site, essa mudança não é instantânea. Ela precisa ser copiada para todos os servidores DNS do mundo. Esse processo pode levar de **alguns minutos até 48 horas**. É por isso que, às vezes, um site novo "funciona para uns e não para outros".

> **Dica Pro:** Para verificar se o seu DNS já "espalhou" pelo mundo, usamos ferramentas como o **DNS Checker**.


Depois que o DNS encontra o endereço IP do servidor, começa a fase de transporte e entrega dos dados. Para que um site chegue até você, ele precisa viajar por várias "camadas" de comunicação.

Aqui está como essa estrutura se organiza:

---

## 3. TCP/IP: A Base da Internet

Imagine o **TCP/IP** como a malha ferroviária e os vagões que carregam as informações.

* **IP (Internet Protocol):** É o responsável pelo endereçamento. Ele garante que os pacotes de dados cheguem ao destino certo (como o endereço no envelope de uma carta).
* **TCP (Transmission Control Protocol):** É o protocolo de controle. Ele quebra o seu site em pequenos "pacotes", numera-os e, ao chegarem no seu computador, verifica se algum se perdeu ou corrompeu. Se algo faltar, ele pede o reenvio.
* *Curiosidade:* O TCP garante que os dados cheguem em ordem e sem erros, por isso é usado na Web.

---

## 4. O Protocolo HTTP/HTTPS

Enquanto o TCP/IP transporta os pacotes, o **HTTP (HyperText Transfer Protocol)** define o que está dentro deles e como o navegador deve pedir as coisas.

* **HTTP:** É a linguagem padrão da web. O navegador diz: "Quero o arquivo `index.html`", e o servidor responde com o conteúdo.
* **HTTPS:** É o HTTP com uma camada extra de segurança (**TLS/SSL**). Ele criptografa a conversa. Sem ele, qualquer pessoa na mesma rede Wi-Fi poderia ler suas senhas ou dados de cartão de crédito.

---

## 5. Verbos (Métodos) HTTP

Sempre que o seu navegador faz uma requisição, ele usa um "verbo" para dizer ao servidor qual ação ele deseja realizar. Os mais comuns são:

* **`GET`:** O mais usado. Serve para **buscar/ler** informações. Quando você digita um site e aperta Enter, está fazendo um `GET`.
* **`POST`:** Serve para **enviar/criar** dados. Usado quando você preenche um formulário de cadastro ou envia um comentário. Os dados vão "escondidos" no corpo da mensagem.
* **`PUT`:** Serve para **atualizar** informações existentes (ex: editar seu perfil).
* **`DELETE`:** Serve para **remover** algo do servidor.

---

## 6. Códigos de Status (A Resposta do Servidor)

O servidor sempre responde com um código numérico para dizer se deu certo:

| Faixa | Significado | Exemplo Famoso |
| --- | --- | --- |
| **2xx** | **Sucesso** | `200 OK` (Tudo certo) |
| **3xx** | **Redirecionamento** | `301 Moved Permanently` (O site mudou de endereço) |
| **4xx** | **Erro do Cliente** | `404 Not Found` (Você digitou a URL errada) |
| **5xx** | **Erro do Servidor** | `500 Internal Server Error` (O site quebrou lá dentro) |

---

## Resumo do Fluxo

1. **DNS** dá o endereço (IP).
2. **TCP** abre a conexão e garante a entrega.
3. **HTTP (GET)** faz o pedido do site.
4. **Servidor** responde com um código (ex: **200**) e o código do site.
5. **Navegador** lê o HTML e mostra para você.

