---
layout: "base.njk"
title:  Tutorial - Criando VM no Azure e Configurando Servidor DNS no Windows Server
description:  OS - Windows Server
---

# 🖥️ Tutorial: Criando VM no Azure e Configurando Servidor DNS no Windows Server

## 1. Criar o Grupo de Recursos

```bash
az group create --name $resourceGroup --location $location

```

## 2. Criar a Máquina Virtual

```bash
az vm create `
  --name $vmName `
  --resource-group $resourceGroup `
  --image MicrosoftWindowsServer:WindowsServer:2022-datacenter-core-smalldisk:latest `
  --admin-username $adminUser `
  --admin-password $adminPassword `
  --location $location `
  --size Standard_B1s `
  --public-ip-sku Standard

```

## 3. Liberar as Portas para RDP (3389) e SSH (22)

```bash
az vm open-port --resource-group $resourceGroup --name $vmName --port 3389 --priority 900
az vm open-port --resource-group $resourceGroup --name $vmName --port 22 --priority 901

```

## 4. Instalar e Configurar o Servidor OpenSSH na VM

```bash
az vm run-command invoke `
  --resource-group $resourceGroup `
  --name $vmName `
  --command-id RunPowerShellScript `
  --scripts "Add-WindowsCapability -Online -Name OpenSSH.Server~~~~0.0.1.0; Start-Service sshd; Set-Service -Name sshd -StartupType 'Automatic'"

```

📌 Agora você pode acessar sua VM via SSH:

```bash
ssh $adminUser@<IP_PÚBLICO_DA_VM>

```

----------

# ⚙️ Configuração do Servidor DNS no Windows Server (via SSH)

## Passo 1: Iniciar o PowerShell

Ao entrar via SSH, digite:

```powershell
powershell

```

## Passo 2: Instalar a Função de Servidor DNS

```powershell
Install-WindowsFeature -Name DNS -IncludeManagementTools

```

## Passo 3: Criar uma Zona de Pesquisa Direta

```powershell
Add-DnsServerPrimaryZone -Name "meudominio.local" -ZoneFile "meudominio.local.dns"

```

## Passo 4: Adicionar um Registro DNS (Registro "A")

Descubra o IP privado da VM:

```powershell
ipconfig

```

Anote o IPv4 encontrado e substitua em `SEU_IP_PRIVADO_AQUI` no comando abaixo:

```powershell
Add-DnsServerResourceRecordA -Name "ns1" -ZoneName "meudominio.local" -IPv4Address "SEU_IP_PRIVADO_AQUI"

```

## Passo 5: Liberar a Porta 53 no Firewall do Windows

```powershell
# Libera a porta 53 para tráfego UDP
New-NetFirewallRule -DisplayName "DNS Server (UDP-In)" -Direction Inbound -Action Allow -Protocol UDP -LocalPort 53

# Libera a porta 53 para tráfego TCP
New-NetFirewallRule -DisplayName "DNS Server (TCP-In)" -Direction Inbound -Action Allow -Protocol TCP -LocalPort 53

```

## Passo 6: Testar o Servidor DNS

```powershell
nslookup ns1.meudominio.local 127.0.0.1

```

✅ Resultado esperado:

```
Server:  localhost
Address:  127.0.0.1

Name:    ns1.meudominio.local
Address: <SEU_IP_PRIVADO_AQUI>

```
----------
Assim você terá sua **VM no Azure configurada com DNS Server rodando no Windows Server**, acessível tanto via RDP quanto SSH. 🚀