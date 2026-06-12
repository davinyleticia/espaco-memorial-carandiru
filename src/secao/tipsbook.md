---
title: [Projects]
layout: base.njk
permalink: "/secao/tipsbook/{% if pagination.pageNumber > 0 %}{{ pagination.pageNumber + 1 }}/{% endif %}"
eleventyExcludeFromCollections: true
order: 5
pagination:
  data: projects
  size: 12
  alias: repos
---

# TipsBook - Canal de Dicas

<div class="projects-grid">

{% for repo in repos %}

<div class="project-card">

<h3>{{ repo.name | replace("-", " ") | capitalize }}</h3>

<p>
{{ repo.description or "Projeto disponível no GitHub." }}
</p>

<a href="{{ repo.html_url }}" target="_blank">
Ver no GitHub →
</a>

</div>

{% endfor %}

</div>

<div class="pagination">

{% if pagination.href.previous %}
<a href="{{ pagination.href.previous }}">← Anterior</a>
{% endif %}

<span>Página {{ pagination.pageNumber + 1 }} de {{ pagination.pages.length }}</span>

{% if pagination.href.next %}
<a href="{{ pagination.href.next }}">Próxima →</a>
{% endif %}

</div>