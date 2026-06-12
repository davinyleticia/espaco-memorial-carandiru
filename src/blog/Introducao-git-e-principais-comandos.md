---
layout: "post.njk"
title: Introdução ao Git e Principais Comandos
tags: ['git', 'versonamento', 'ensino']
description: Introdução ao Git e Principais Comandos
permalink: post/introducao-ao-git-e-principais-comandos/
featuredImage: /_images/git.png
date: 2024-03-25
---

# Introdução ao Git e Principais Comandos

Git é um sistema de controle de versão distribuído amplamente utilizado para gerenciar o desenvolvimento de projetos de software e acompanhar as alterações feitas em arquivos ao longo do tempo. Ele oferece uma abordagem eficiente e flexível para colaboração entre desenvolvedores, permitindo que eles trabalhem em conjunto de maneira harmoniosa, mesmo em projetos complexos.

**O Que é Git?**

Git é uma ferramenta que permite rastrear as mudanças nos arquivos ao longo do tempo, registrando quem fez cada alteração, quando foi feita e qual foi a natureza dessa alteração. Ele permite que várias pessoas trabalhem em um projeto simultaneamente, gerenciando conflitos de forma eficaz e garantindo a integridade do código-fonte.

**Principais Conceitos do Git:**

1. **Repositório**: É onde o Git armazena todas as informações sobre o histórico de um projeto, incluindo arquivos, commits e ramificações. Existem repositórios locais (no seu computador) e repositórios remotos (em servidores, como o GitHub ou GitLab).

2. **Commit**: Um commit é uma alteração feita em um ou mais arquivos do projeto. Cada commit possui uma mensagem que descreve as alterações realizadas.

O Git armazena o conteúdo completo de cada arquivo em cada commit, o que torna muitas operações substancialmente mais rápidas em comparação com o SVN. No SVN, uma versão específica de um arquivo precisa ser reconstruída a partir das diferenças registradas ao longo do tempo, enquanto no Git, a versão completa de cada arquivo está imediatamente disponível no banco de dados interno.

Essa abordagem baseada em instantâneos afeta profundamente quase todos os aspectos do controle de versão no Git. Ela influencia desde as ferramentas de criação de branches e mesclagem até os fluxos de trabalho colaborativos, tornando o gerenciamento de versões mais eficiente e ágil.


![commit](/_images/commit.svg)


1. **Branch (Ramificação)**: Uma ramificação é uma linha de desenvolvimento independente no projeto. Ela permite que você trabalhe em novas funcionalidades ou correções de bugs sem interferir no código principal.


![branch](/_images/branch.svg)


4. **Merge (Mesclagem)**: É o processo de combinar as alterações de uma ramificação com outra, geralmente integrando o trabalho feito em uma ramificação de recurso de volta à ramificação principal (como a `master`).


![Merge](/_images/merge.svg)


5. **Clone**: É a operação de copiar um repositório Git existente para o seu computador local, permitindo que você trabalhe nele.


![clone](/_images/clone.png)


**Principais Comandos do Git:**

Claro, vou fornecer exemplos para cada um dos comandos listados:

### 1. git init:
- Inicializa um novo repositório Git localmente em um diretório.
  
```bash
   git init
```

### 2. git clone [url]:
- Clona um repositório Git existente para o seu computador local.
  
```bash
   git clone https://github.com/exemplo/meu-projeto.git
```

### 3. git add [arquivo(s)]:
- Adiciona arquivos ao índice (staging area) para serem incluídos no próximo commit.
  
```bash
   git add arquivo1.txt arquivo2.py
```

### 4. git commit -m "mensagem":
- Registra as mudanças no repositório, acompanhadas de uma mensagem que descreve as alterações feitas.
  
```bash
   git commit -m "Adicionando funcionalidade de login"
```

### 5. git push:
- Envia commits locais para um repositório remoto.
  
```bash
   git push origin master
```

### 6. git pull:
- Puxa as alterações de um repositório remoto para o repositório local.
  
```bash
   git pull origin master
```

### 7. git branch:
- Lista todas as ramificações no repositório local.
  
```bash
   git branch
```

### 8. git checkout [nome-da-branch]:

- Muda para uma ramificação específica.
  
```bash
   git checkout nova-funcionalidade
```

### 9. git merge [nome-da-branch]:
- Mescla uma ramificação com a ramificação atual.
  
```bash
git merge nova-funcionalidade
```

### 10. git status:
- Exibe o estado atual do repositório, incluindo quais arquivos foram modificados e quais estão no índice.

```bash
    git status
```

### 11. git log:
- Mostra o histórico de commits do repositório.
  
```bash
    git log
```

### 12. git remote add [nome] [url]:
- Adiciona um repositório remoto ao seu projeto.
 
```bash
    git remote add origin https://github.com/exemplo/meu-projeto.git
```

---

Esses exemplos devem ajudá-lo a entender como cada comando é usado e como eles podem ser aplicados em seu fluxo de trabalho com Git.

Esses são apenas alguns dos comandos mais comuns do Git. Dominar esses comandos básicos permite que você comece a usar o Git efetivamente em seu fluxo de trabalho de desenvolvimento de software. Ao longo do tempo, você pode explorar recursos mais avançados do Git para melhorar ainda mais sua produtividade e colaboração com outros desenvolvedores.

## Bônus para Linux:

PS1 Linux

Mostar a branch na frente do nome no comando ex:

`daviny@pacman ~/site (master)`

Código no .bashrc (arquivo oculto do seu diretório pessoal)

add o comando no final da linha


```bash
export PS1='\u@\h\[\033[01;34m\] \w\[\033[0;32m\]$(__git_ps1 " (%s)")\[\033[01;34m\]$\[\033[00m\] '
```