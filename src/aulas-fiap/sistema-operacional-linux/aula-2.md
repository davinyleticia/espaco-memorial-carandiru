---
layout: "base.njk"
title: Instalação do Debian e SSH
description:  OS - Linux
---

# Instalação do Debian e SSH

A aula teve uma abordagem prática e 'mão na massa'. A instalação foi conduzida em sala de aula por meio de uma exposição dialogada, e para complementar, utilizamos um vídeo tutorial do canal 'Conecto Sistemas' no YouTube como material de apoio.


<iframe width="100%" height="415" src="https://www.youtube.com/embed/faRPDx1_aGw?si=wpCdjEp3SOyCrQDJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


## Configuração SSH

### Passo 1: Instalação e Configuração do Servidor SSH

Após a reinicialização, você será apresentado a uma tela de login de texto.

1.  **Faça login** com o nome de usuário e a senha que você criou durante a instalação (não o `root`).
2.  **Obtenha privilégios de administrador:**
    ```bash
    su -
    ```
    Digite a senha do `root` que você definiu.
3.  **Instale o servidor OpenSSH:**
    ```bash
    apt update
    apt install openssh-server
    ```
4.  **Verifique se o serviço SSH está em execução:**
    ```bash
    systemctl status ssh
    ```
    Você deverá ver uma saída indicando que o serviço está "active (running)". Pressione `q` para sair.

### Passo 2: Configurando a Rede do VirtualBox para Acesso Externo

Para acessar o servidor SSH de sua máquina hospedeira, você precisa configurar a rede da VM. A maneira mais simples é usar o redirecionamento de portas (Port Forwarding).

1.  **Desligue a VM Debian:** No terminal da VM, execute `shutdown -h now`.
2.  **Abra as Configurações da VM:** Com a VM selecionada no VirtualBox, clique em **"Configurações"**.
3.  **Vá para a seção "Rede":**
      * No **Adaptador 1**, certifique-se de que esteja **"Habilitado"** e **"Conectado a: NAT"**.
      * Clique em **"Avançado"** e depois em **"Redirecionamento de Portas"**.
4.  **Adicione uma nova regra:**
      * **Nome:** Dê um nome para a regra, por exemplo, "SSH".
      * **Protocolo:** TCP.
      * **IP do Hospedeiro:** Deixe em branco.
      * **Porta do Hospedeiro:** Escolha uma porta livre em sua máquina hospedeira, por exemplo, `2222`.
      * **IP do Convidado:** Deixe em branco (será o IP da VM).
      * **Porta do Convidado:** `22`.
5.  Clique em **"OK"** para salvar as regras e em **"OK"** novamente para fechar as configurações da VM.

### Passo 3: Acessando o Servidor Debian via SSH

1.  **Inicie a VM Debian** novamente.

2.  **Descubra o endereço IP da VM (Opcional, mas útil para referência):**

      * Faça login na VM e execute o comando:
        ```bash
        ip a
        ```
      * Procure pela interface de rede (geralmente `enp0s3` ou `eth0`) e anote o endereço IP na linha `inet`.

3.  **Conecte-se via SSH a partir da sua máquina hospedeira:**

      * **No Windows:** Use um cliente SSH como o PuTTY ou o cliente OpenSSH integrado no PowerShell/Prompt de Comando.
          * **PowerShell/Prompt de Comando:**
            ```bash
            ssh seu_usuario@localhost -p 2222
            ```
            Substitua `seu_usuario` pelo nome de usuário que você criou na VM.
      * **No macOS ou Linux:** Abra o terminal e digite:
        ```bash
        ssh seu_usuario@localhost -p 2222
        ```
        Substitua `seu_usuario` pelo seu nome de usuário.

4.  **Confirmação de Autenticidade:** Na primeira conexão, você será solicitado a confirmar a autenticidade do host. Digite `yes` e pressione Enter.

5.  **Digite a senha** do seu usuário na VM quando solicitado.

**Parabéns\!** Você agora está conectado ao seu servidor Debian mínimo via SSH e pode gerenciá-lo remotamente a partir da sua máquina hospedeira. A partir daqui, você pode começar a instalar e configurar outros serviços conforme necessário.