---
title: "Contents"
layout: "base.njk"
permalink: "/secao/contents/"
order: 2
---

# 📑 Contents

Palestras, Lives, Workshop e Cursos que já ministrei.

<table>
<thead>
<tr>
<th>Conteúdo</th>
<th style="width:69%;" >Descrição</th>
<th style="width:20%;">Link</th>
</tr>
</thead>

<tbody>

<tr>
<td colspan="3"><strong>📂 CJOVEM - UECE</strong></td>
</tr>

{% for item in collections["aulas-cjovem"] %}
<tr>
<td>{{ item.data.description }}</td>
<td>{{ item.data.title }}</td>
<td><a href="{{ item.url }}">Acessar</a></td>
</tr>
{% endfor %}


<tr>
<td colspan="3"><strong>📂 ETEC - COMUM</strong></td>
</tr>

{% for item in collections["comum"] %}
<tr>
<td>{{ item.data.description }}</td>
<td>{{ item.data.title }}</td>
<td><a href="{{ item.url }}">Acessar</a></td>
</tr>
{% endfor %}

<tr>
<td>GIT</td>
<td>Comando do GIT</td>
<td><a href="https://vidal.press/post/introducao-ao-git-e-principais-comandos/">Acessar</a></td>
</tr>




<tr>
<td colspan="3"><strong>📂 ETEC - DS II</strong></td>
</tr>

{% for item in collections["ds2"] %}
<tr>
<td>{{ item.data.description }}</td>
<td>{{ item.data.title }}</td>
<td><a href="{{ item.url }}">Acessar</a></td>
</tr>
{% endfor %}

<tr>
<td>Python</td>
<td>Pacotes e Módulos</td>
<td><a href="https://vidal.press/_storege/etec/Pacotes%20e%20M%C3%B3dulos.pdf">PDF</a></td>
</tr>
	
<tr>
<td>DS II</td>
<td>MVC (Model-View-Controller)</td>
<td><a href="../../../_storege/etec/MVC (Model-View-Controller).pdf">Acessar</a></td>
</tr>

<tr>
<td colspan="3"><strong>📂 ETEC - PAM I</strong></td>
</tr>

{% for item in collections["pam1"] %}
<tr>
<td>{{ item.data.description }}</td>
<td>{{ item.data.title }}</td>
<td><a href="{{ item.url }}">Acessar</a></td>
</tr>

<tr>
<td>Mobile I</td>
<td>Arquitetura dos Sistemas Operacionais de Dispositivos Móveis</td>
<td><a href="../../../_storege/etec/ARQUITETURA DOS SISTEMAS OPERACIONAIS DE DISPOSITIVOS MÓVEIS.pdf">PDF</a></td>
</tr>


{% endfor %}


<tr>
<td colspan="3"><strong>📂 ETEC - PAM II</strong></td>
</tr>

{% for item in collections["pam2"] %}
<tr>
<td>{{ item.data.description }}</td>
<td>{{ item.data.title }}</td>
<td><a href="{{ item.url }}">Acessar</a></td>
</tr>
{% endfor %}


<tr>
<td colspan="3"><strong>📂 ETEC - POO</strong></td>
</tr>

<tr>
<td>POO</td>
<td>Desenvolvimento de Sistema - POO I</td>
<td><a href="../../../_storege/etec/Desenvolvimento de Sistema - aula 1.pdf">PDF</a></td>
</tr>

<tr>
<td>POO</td>
<td>Desenvolvimento de Sistema - POO I</td>
<td><a href="../../../_storege/etec/Desenvolvimento de Sistema - aula 1.pdf">PDF</a></td>
</tr>

<tr>
<td>SLides</td>
<td>Polimorfismo</td>
<td><a href="../../../_storege/etec/Polimorfismo.pdf">PDF</a></td>
</tr>

{% for item in collections["poo"] %}
<tr>
<td>{{ item.data.description }}</td>
<td>{{ item.data.title }}</td>
<td><a href="{{ item.url }}">Acessar</a></td>
</tr>
{% endfor %}



<tr>
<td>Exercícios</td>
<td>Lista de Execícios POO</td>
<td><a href="https://vidal.press/post/python-poo/">Acessar</a></td>
</tr>



<tr>
<td colspan="3"><strong>📂 ETEC - PDM</strong></td>
</tr>

{% for item in collections["pdm"] %}
<tr>
<td>{{ item.data.description }}</td>
<td>{{ item.data.title }}</td>
<td><a href="{{ item.url }}">Acessar</a></td>
</tr>
{% endfor %}

<tr>
<td>Slides</td>
<td>Arquitetura dos Sistemas Operacionais de Dispositivos Móveis</td>
<td><a href="https://vidal.press/_storege/etec/ARQUITETURA%20DOS%20SISTEMAS%20OPERACIONAIS%20DE%20DISPOSITIVOS%20M%C3%93VEIS.pdf">PDF</a></td>
</tr>




<tr>
<td colspan="3"><strong>📂 ETEC - TIAA</strong></td>
</tr>

{% for item in collections["tiaa"] %}
<tr>
<td>{{ item.data.description }}</td>
<td>{{ item.data.title }}</td>
<td><a href="{{ item.url }}">Acessar</a></td>
</tr>
{% endfor %}


<tr>
<td colspan="3" ><strong>📂 ETEC - PW I</strong></td>
</tr>

{% for item in collections["pw1"] %}
<tr>
<td>{{ item.data.description }}</td>
<td>{{ item.data.title }}</td>
<td><a href="{{ item.url }}">Acessar</a></td>
</tr>
{% endfor %}

<tr>
<td>Slides</td>
<td>Introdução CSS e HTML</td>
<td><a href="https://vidal.press/_storege/etec/PW%20I%20-%20Introducao%20css%20e%20HTML.pdf">PDF</a></td>
</tr>



<tr>
<td colspan="3"><strong>📂 ETEC - PW III</strong></td>
</tr>

<tr>
<td>PW III</td>
<td>Aula Introdutória</td>
<td><a href="../../../_storege/etec/PW III - Aula Introdutória.pdf">PDF</a></td>
</tr>

<tr>
<td>PW III</td>
<td>Slides I - NextJS</td>
<td><a href="../../../_storege/etec/PW I - Introducao css e HTML.pdf">PDF</a></td>
</tr>

{% for item in collections["pw3"] %}
<tr>
<td>{{ item.data.description }}</td>
<td>{{ item.data.title }}</td>
<td><a href="{{ item.url }}">Acessar</a></td>
</tr>
{% endfor %}



<tr>
<td colspan="3"><strong>📂 FIAP</strong></td>
</tr>

{% for item in collections["aulas-fiap"] %}
<tr>
<td>{{ item.data.description }}</td>
<td>{{ item.data.title }}</td>
<td><a href="{{ item.url }}">Acessar</a></td>
</tr>
{% endfor %}

<tr>
<td colspan="3"><strong>📂 OUTROS</strong></td>
</tr>

<tr>
<td>🌐 Grupo de Estudo Desenvolvimento de Sistemas</td>
<td>Grupo de estudo da ETEC Parque da Juventude com foco em aulas complementares e preparação para FETEPS 2026.</td>
<td><a href="https://geds.vidal.press/" target="_blank">Acessar</a></td>
</tr>

<tr>
<td>📖 Aprendendo Python (E-book)</td>
<td>E-book introdutório sobre a linguagem Python.</td>
<td><a href="https://aprendendo-python.vidal.press/" target="_blank">Acessar</a></td>
</tr>



<tr>
<td>🌐 Interfaces Inteligentes</td>
<td>Artigo sobre como a IA Generativa transforma o desenvolvimento front-end.</td>
<td><a href="https://www.programaria.org/interfaces-inteligentes-como-a-ia-generativa-transforma-o-front-end/" target="_blank">Ler</a></td>
</tr>

<tr>
<td>🌐 MKDocs Desvendado</td>
<td>Guia sobre como criar e gerenciar documentação usando MKDocs.</td>
<td><a href="../../../_storege/Letícia Vidal- MKDocs Desvendado_ Da Instalação à Conquista da Documentação Sem Mistérios.pdf">PDF</a></td>
</tr>

<tr>
<td>🌐 GitHub e GitHub Pages</td>
<td>Workshop realizado em parceria com a Reprograma para a turma Conectadas.</td>
<td><a href="../../../_storege/GitHub e GitHub Page.pdf">PDF</a></td>
</tr>

<tr>
<td>🌐 Linux Básico para Dev</td>
<td>Workshop introdutório de Linux para desenvolvedores em parceria com a PyLadies.</td>
<td><a href="../../../_storege/Linux básico para dev.pdf">PDF</a></td>
</tr>

<tr>
<td>📝 {Talk} Aluna Reprograma</td>
<td>Talk sobre aula Imersão JavaScript como ex-aluna.</td>
<td><a href="../../../talks-contents/talk-aluna-reprograma/">Acessar</a></td>
</tr>

<tr>
<td>📝 Python com Arduino</td>
<td>Experiência prática sobre Python e Arduino.</td>
<td><a href="../../../talks-contents/python-com-arduino/">Acessar</a></td>
</tr>

<tr>
<td>📝 Workshop Django - Primeira Página Web</td>
<td>WorkShop realizado no dia 25 de abril de 2026</td>
<td><a href="../../../_storege/Workshop Django - Primeira Página Web - Oficial.pdf">Acessar</a></td>
</tr>


</tbody>
</table>