---
title: "Espaco Memorial Carandiru"
layout: "base.njk"
permalink: "/"
order: 1
---
  <!-- HERO -->
  <section class="hero">
    <div class="hero-bg"></div>
    <div class="hero-content">
      <div class="hero-content-inner">
      <h1>Um lugar de <em>história</em>,<br><em>reflexão</em> e memória</h1>
      <p>O Memorial Carandiru preserva a história do Complexo
        Penitenciário do Carandiru e dos eventos de 2 de outubro
        de 1992, promovendo o debate sobre o sistema prisional,
        os direitos humanos e a transformação social no Brasil.
      </p>
      <div class="hero-btns">
        <a href="#visitar" class="btn-principal">Visitar o espaço</a>
      </div>
      </div><!-- /.hero-content-inner -->
    </div>
    <div class="hero-scroll">Rolar</div>
  </section>

  <!-- LINHA DO TEMPO -->
  <section class="secao" id="historia">
    <div class="secao-header">
      <h2 class="secao-titulo">Linha do tempo <span>histórica</span></h2>
      <a href="carandiru-pagina2.html" class="ver-mais">Ver história completa →</a>
    </div>

    <div class="timeline-wrapper">
      <div class="timeline-track" id="timeline">
        <a class="evento ativo" href="carandiru-pagina2.html?ev=1920"
          onclick="ativarEvento(this,'1920','Inauguração do Complexo','Em 1920, o Governo do Estado de São Paulo inaugura o Complexo Penitenciário do Carandiru, projetado para ser um modelo de encarceramento moderno, com capacidade para 1.200 presos. O espaço ocupava uma área de 100 mil m² no bairro do Carandiru.');return false;">
          <div class="ano">1920</div>
          <h3>Inauguração</h3>
          <p>Fundação do Complexo Penitenciário como modelo de modernidade</p>
        </a>
        <a class="evento" href="carandiru-pagina2.html?ev=1956"
          onclick="ativarEvento(this,'1956','Expansão das Instalações','Na década de 1950, o complexo passa por grande expansão, adicionando novos pavilhões e estruturas. A população carcerária começa a crescer significativamente, ultrapassando sua capacidade original.');return false;">
          <div class="ano">1956</div>
          <h3>Expansão</h3>
          <p>Novos pavilhões e crescimento da população carcerária</p>
        </a>
        <a class="evento" href="carandiru-pagina2.html?ev=1970"
          onclick="ativarEvento(this,'1970','Superlotação Crítica','Nos anos 70, o complexo começa a enfrentar grave crise de superlotação. Para uma capacidade projetada de 3.000 detentos, o presídio passa a abrigar mais de 5.000 pessoas, gerando condições degradantes e tensões crescentes.');return false;">
          <div class="ano">1970</div>
          <h3>Superlotação</h3>
          <p>Crise de superpopulação carcerária e condições precárias</p>
        </a>
        <a class="evento" href="carandiru-pagina2.html?ev=1992"
          onclick="ativarEvento(this,'1992','Massacre de 02/10/1992','Em 2 de outubro de 1992, uma rebelião no Pavilhão 9 resultou na morte de 111 presos durante a intervenção da Polícia Militar. O episódio tornou-se um dos maiores massacres carcerários da história do Brasil e ganhou repercussão internacional.');return false;">
          <div class="ano">1992</div>
          <h3>Massacre</h3>
          <p>111 mortes durante intervenção policial no Pavilhão 9</p>
        </a>
        <a class="evento" href="carandiru-pagina2.html?ev=1999"
          onclick="ativarEvento(this,'1999','Início da Desativação','Em 1999, o governador Mario Covas anuncia a desativação progressiva do Complexo Carandiru, resultado de pressões nacionais e internacionais após o massacre de 1992. Os detentos são gradualmente transferidos para outras unidades.');return false;">
          <div class="ano">1999</div>
          <h3>Desativação</h3>
          <p>Início da transferência dos presos e fechamento gradual</p>
        </a>
        <a class="evento" href="carandiru-pagina2.html?ev=2002"
          onclick="ativarEvento(this,'2002','Implosão do Presídio','Em 8 de dezembro de 2002, os pavilhões do Carandiru foram implodidos. O evento foi transmitido ao vivo pela televisão e representou o encerramento oficial do complexo, abrindo caminho para a criação do Parque da Juventude.');return false;">
          <div class="ano">2002</div>
          <h3>Implosão</h3>
          <p>Demolição dos pavilhões e encerramento do complexo</p>
        </a>
        <a class="evento" href="carandiru-pagina2.html?ev=2024"
          onclick="ativarEvento(this,'2024','Espaço Memória Carandiru','Em 2024, o Governo do Estado de São Paulo inaugura o Espaço Memória Carandiru, gerenciado pelo Centro Paula Souza. O memorial preserva a memória das vítimas e promove a reflexão sobre direitos humanos e o sistema prisional brasileiro.');return false;">
          <div class="ano">2024</div>
          <h3>Memorial</h3>
          <p>Inauguração do Espaço Memória Carandiru</p>
        </a>
      </div>

      <div class="timeline-detalhe" id="timeline-detalhe">
        <div class="td-ano" id="td-ano">1920</div>
        <div>
          <div class="td-titulo" id="td-titulo">Inauguração do Complexo</div>
          <div class="td-texto" id="td-texto">Em 1920, o Governo do Estado de São Paulo inaugura o Complexo
            Penitenciário do Carandiru, projetado para ser um modelo de encarceramento moderno, com capacidade para
            1.200 presos. O espaço ocupava uma área de 100 mil m² no bairro do Carandiru.</div>
          <a href="carandiru-pagina2.html" class="td-link" id="td-link">Ler mais sobre este período →</a>
        </div>
      </div>
    </div>
  </section>

  <!-- EDITORIAL -->
  <div class="editorial">
    <div class="editorial-img"></div>
    <div class="editorial-texto">
      <div class="editorial-tag">Em destaque</div>
      <h2>O Massacre de 1992 e a busca por justiça</h2>
      <p>O episódio de 2 de outubro de 1992 permanece como um dos momentos mais sombrios da história penal brasileira.
        Mais de três décadas depois, famílias das vítimas ainda aguardam respostas e reparações. O Espaço Memória
        preserva depoimentos, documentos e objetos que contam essa história sob a perspectiva de quem a viveu.</p>
      <p>Explore nossa coleção de documentos originais, fotografias de época e testemunhos que compõem o acervo do
        Memorial.</p>
      <a href="carandiru-pagina2.html">Ver acervo completo →</a>
    </div>
  </div>

  <!-- GALERIA DE ACERVO MEMORIAL DO CARANDIRU -->
  <section class="galeria-acervo-secao" id="galeria-mosaico">
    <header class="galeria-acervo__cabecalho">
      <div class="galeria-acervo__titulos">
        <h2>Nosso <em>acervo</em></h2>
        <p>Registros históricos e peças do acervo do Memorial do Carandiru.</p>
      </div>

      <a href="carandiru-pagina2.html" class="galeria-acervo__link-top">
        VER GALERIA COMPLETA &rarr;
      </a>
    </header>

    <div class="galeria-acervo__mosaico">
      <button type="button" class="galeria-acervo__item" data-index="0" title="Clique para ampliar">
        <span class="galeria-acervo__tag-num">#01</span>
        <img src="carandiru_escultura_cabeca_capuz_azul.jpeg" onerror="this.onerror=null; this.src='https://placehold.co/800x600/2a2725/f7f1e8?text=%2301+Escultura+de+Cabe%C3%A7a+Encapuzada';" alt="Escultura de uma cabeça encapuzada em tecido azul">
        <span class="galeria-acervo__lupa" aria-hidden="true">+</span>
      </button>

      <button type="button" class="galeria-acervo__item" data-index="1" title="Clique para ampliar">
        <span class="galeria-acervo__tag-num">#02</span>
        <img src="carandiru_maquete_tatil_sao_jorge.jpeg" onerror="this.onerror=null; this.src='https://placehold.co/800x600/2a2725/f7f1e8?text=%2302+Maquete+T%C3%A1til+S%C3%A3o+Jorge';" alt="Maquete tátil em relevo de São Jorge e o dragão">
        <span class="galeria-acervo__lupa" aria-hidden="true">+</span>
      </button>

      <button type="button" class="galeria-acervo__item" data-index="2" title="Clique para ampliar">
        <span class="galeria-acervo__tag-num">#03</span>
        <img src="carandiru_painel_cartas_reivindicacoes.jpeg" onerror="this.onerror=null; this.src='https://placehold.co/800x600/2a2725/f7f1e8?text=%2303+Painel+de+Cartas+e+Reivindica%C3%A7%C3%B5es';" alt="Painel com cartas e reivindicações de sobreviventes">
        <span class="galeria-acervo__lupa" aria-hidden="true">+</span>
      </button>

      <button type="button" class="galeria-acervo__item" data-index="3" title="Clique para ampliar">
        <span class="galeria-acervo__tag-num">#04</span>
        <img src="carandiru_painel_exposicao_esporte.jpeg" onerror="this.onerror=null; this.src='https://placehold.co/800x600/2a2725/f7f1e8?text=%2304+Exposi%C3%A7%C3%A3o+sobre+Esporte';" alt="Painel da exposição sobre esporte no complexo">
        <span class="galeria-acervo__lupa" aria-hidden="true">+</span>
      </button>

      <button type="button" class="galeria-acervo__item" data-index="4" title="Clique para ampliar">
        <span class="galeria-acervo__tag-num">#05</span>
        <img src="carandiru_porta_cela_salmo_david.jpeg" onerror="this.onerror=null; this.src='https://placehold.co/800x600/2a2725/f7f1e8?text=%2305+Porta+de+Cela+Salmo+de+Davi';" alt="Porta de cela com o Salmo de Davi pintado">
        <span class="galeria-acervo__lupa" aria-hidden="true">+</span>
      </button>

      <button type="button" class="galeria-acervo__item" data-index="5" title="Clique para ampliar">
        <span class="galeria-acervo__tag-num">#06</span>
        <img src="carandiru_quadro_populacao_carceraria_pv04.jpeg" onerror="this.onerror=null; this.src='https://placehold.co/800x600/2a2725/f7f1e8?text=%2306+Quadro+Popula%C3%A7%C3%A3o+Pavilh%C3%A3o+4';" alt="Quadro de controle da população carcerária do Pavilhão 4">
        <span class="galeria-acervo__lupa" aria-hidden="true">+</span>
      </button>

      <button type="button" class="galeria-acervo__item" data-index="6" title="Clique para ampliar">
        <span class="galeria-acervo__tag-num">#07</span>
        <img src="carandiru_porta_cela_olho.jpeg" onerror="this.onerror=null; this.src='https://placehold.co/800x600/2a2725/f7f1e8?text=%2307+Porta+de+Cela+Pintura+Olho';" alt="Porta de cela pintada com um olho">
        <span class="galeria-acervo__lupa" aria-hidden="true">+</span>
      </button>
    </div>

<!-- LIGHTBOX DA GALERIA DE ACERVO -->
<div class="galeria-acervo__lightbox" id="galeriaLightbox">
  <div class="galeria-acervo__lightbox-caixa">
    <button type="button" class="galeria-acervo__lightbox-fechar" id="galeriaFechar" aria-label="Fechar">&times;</button>

    <button type="button" class="galeria-acervo__lightbox-seta galeria-acervo__lightbox-seta--esq" id="galeriaAnterior" aria-label="Item anterior">&larr;</button>

    <div class="galeria-acervo__lightbox-imagem">
      <img id="galeriaImagemGrande" src="" alt="">
    </div>

    <button type="button" class="galeria-acervo__lightbox-seta galeria-acervo__lightbox-seta--dir" id="galeriaProximo" aria-label="Próximo item">&rarr;</button>

    <div class="galeria-acervo__lightbox-info">
      <span class="galeria-acervo__lightbox-contador" id="galeriaContador"></span>
      <h3 id="galeriaTituloDetalhado"></h3>
      <p id="galeriaLegenda"></p>
    </div>
  </div>
</div>

    <footer class="galeria-acervo__rodape">
      <div class="galeria-acervo__info-extra">
        Exibindo prévia resumida do acervo (7 itens catalogados).
      </div>
      <span class="galeria-acervo__creditos">Registros por Vinícius Santos (ETEC São Mateus)</span>
    </footer>
  </section>

  <!-- ACERVO -->
  <section class="secao" id="acervo">
    <div class="secao-header">
      <h2 class="secao-titulo">Acervo e <span>cultura</span></h2>
      <a href="carandiru-pagina2.html" class="ver-mais">Ver acervo completo →</a>
    </div>

    <div class="acervo-grid">
      <a class="acervo-card" href="carandiru-pagina2.html?item=documentos">
        <div class="placeholder">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span>Documentos</span>
        </div>
        <div class="card-overlay">
          <div class="cat">Arquivo histórico</div>
          <h3>Documentos e registros oficiais</h3>
        </div>
      </a>
      <a class="acervo-card" href="carandiru-pagina2.html?item=fotografias">
        <div class="placeholder">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path
              d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            <circle cx="12" cy="13" r="3" />
          </svg>
          <span>Fotografias</span>
        </div>
        <div class="card-overlay">
          <div class="cat">Fotografia</div>
          <h3>Fotografias históricas do complexo</h3>
        </div>
      </a>
      <a class="acervo-card" href="carandiru-pagina2.html?item=depoimentos">
        <div class="placeholder">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span>Depoimentos</span>
        </div>
        <div class="card-overlay">
          <div class="cat">Memória oral</div>
          <h3>Depoimentos de sobreviventes e famílias</h3>
        </div>
      </a>
      <a class="acervo-card" href="carandiru-pagina2.html?item=arte">
        <div class="placeholder">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>Arte e cultura</span>
        </div>
        <div class="card-overlay">
          <div class="cat">Expressão artística</div>
          <h3>Arte produzida por detentos</h3>
        </div>
      </a>
    </div>
  </section>

  <!-- VISITAR -->
  <section class="visitar" id="visitar">
    <div class="visitar-inner">
      <div>
        <h2>Visite o Espaço Memória</h2>
        <p>O memorial está aberto ao público e oferece visitas guiadas, exposições permanentes e temporárias, atividades
          educativas e eventos culturais. A entrada é gratuita.</p>
        <a href="#" class="btn-principal" style="font-size:12px;">Agendar visita guiada</a>

        <div class="info-grid" style="margin-top:40px;">
          <div class="info-item">
            <div class="label">Endereço</div>
            <div class="valor">Av. Cruzeiro do Sul, 2630<br>Santana, São Paulo – SP</div>
          </div>
          <div class="info-item">
            <div class="label">Funcionamento</div>
            <div class="valor">Terça a domingo<br>09h às 17h</div>
          </div>
          <div class="info-item">
            <div class="label">Entrada</div>
            <div class="valor">Gratuita<br>Grupos: agendamento</div>
          </div>
          <div class="info-item">
            <div class="label">Transporte</div>
            <div class="valor">Metrô Carandiru<br>Linha 1 – Azul</div>
          </div>
        </div>
      </div>
      <div class="mapa-placeholder">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <span>Ver no mapa</span>
        <span style="font-size:10px;opacity:.5;">Av. Cruzeiro do Sul, 2630</span>
      </div>
    </div><!-- /.visitar-inner -->
  </section>

<script>
  (function () {
    var itensAcervo = [
      {
        titulo: 'Escultura de Cabeça Encapuzada',
        descricao: 'Obra tridimensional confeccionada em tecido de tom azul e materiais adaptados. A escultura integra a coleção de artes visuais do acervo e simboliza sentimentos de invisibilidade, enclausuramento e opressão vivenciados no cotidiano carcerário da Casa de Detenção.'
      },
      {
        titulo: 'Maquete Tátil de São Jorge e o Dragão',
        descricao: 'Peça escultórica tátil em relevo desenvolvida para proporcionar acessibilidade sensorial a visitantes céticos e com baixa visão. A imagem de São Jorge possui grande devoção popular no ambiente prisional, associada à proteção espiritual e à superação de adversidades.'
      },
      {
        titulo: 'Painel de Cartas e Reivindicações',
        descricao: 'Compilação de documentos originais, manuscritos, bilhetes e cartas datografadas por internos e familiares. O acervo registra denúncias de superlotação, cobranças por assistência jurídica e relatos históricos produzidos no período que antecedeu e sucedeu o massacre de 1992.'
      },
      {
        titulo: 'Painel da Exposição sobre Práticas Esportivas',
        descricao: 'Expositor temático reunindo artigos originais como luvas de boxe, troféus de torneios internos e flâmulas organizadas pelos próprios detentos. As atividades esportivas eram elementos centrais de convivência, disciplina e organização comunitária nos pavilhões.'
      },
      {
        titulo: 'Porta de Cela com Salmo de Davi',
        descricao: 'Porta original retirada de uma das galerias do complexo. Preserva a pintura artesanal com versículos bíblicos do Salmo de Davi, inscrita à mão por um interno como expressão de fé, conforto espiritual e preservação da identidade durante o cumprimento da pena.'
      },
      {
        titulo: 'Quadro de Controle Populacional - Pavilhão 4',
        descricao: 'Painel oficial de madeira utilizado pela Diretoria do Serviço de Vigilância da Casa de Detenção. O quadro servia para fazer a contagem manual diária, controle de transferências e mapeamento da população carcerária alojada nas celas e andares do Pavilhão 4.'
      },
      {
        titulo: 'Porta de Cela com Pintura do Olho',
        descricao: 'Elemento arquitetônico preservado que exibe um olho expressivo pintado sobre a estrutura metálica próximo ao visor da cela. A pintura reflete o tema da vigilância constante — tanto do Estado sobre os detentos quanto do olhar vigilante dos reclusos sobre o corredor.'
      }
    ];

    var botoes = document.querySelectorAll('.galeria-acervo__item');
    var lightbox = document.getElementById('galeriaLightbox');
    var imagemGrande = document.getElementById('galeriaImagemGrande');
    var tituloDetalhado = document.getElementById('galeriaTituloDetalhado');
    var legenda = document.getElementById('galeriaLegenda');
    var contador = document.getElementById('galeriaContador');
    var fechar = document.getElementById('galeriaFechar');
    var anterior = document.getElementById('galeriaAnterior');
    var proximo = document.getElementById('galeriaProximo');
    var indiceAtual = 0;

    function abrirLightbox(indice) {
      indiceAtual = parseInt(indice, 10);
      var img = botoes[indiceAtual].querySelector('img');
      var item = itensAcervo[indiceAtual];
      imagemGrande.src = img.src;
      imagemGrande.alt = img.alt;
      tituloDetalhado.textContent = item.titulo;
      legenda.textContent = item.descricao;
      contador.textContent = 'REGISTRO DE ACERVO #' + (indiceAtual + 1 < 10 ? '0' : '') + (indiceAtual + 1) + ' • ' + (indiceAtual + 1) + ' de ' + itensAcervo.length;
      lightbox.classList.add('aberto');
    }

    function fecharLightbox() {
      lightbox.classList.remove('aberto');
    }

    function irPara(passo) {
      indiceAtual = (indiceAtual + passo + botoes.length) % botoes.length;
      abrirLightbox(indiceAtual);
    }

    botoes.forEach(function (botao) {
      botao.addEventListener('click', function () {
        var idx = this.getAttribute('data-index');
        abrirLightbox(idx);
      });
    });

    if (fechar) fechar.addEventListener('click', fecharLightbox);
    if (anterior) anterior.addEventListener('click', function () { irPara(-1); });
    if (proximo) proximo.addEventListener('click', function () { irPara(1); });

    if (lightbox) {
      lightbox.addEventListener('click', function (evento) {
        if (evento.target === lightbox) {
          fecharLightbox();
        }
      });
    }

    document.addEventListener('keydown', function (evento) {
      if (!lightbox || !lightbox.classList.contains('aberto')) {
        return;
      }
      if (evento.key === 'Escape') {
        fecharLightbox();
      }
      if (evento.key === 'ArrowLeft') {
        irPara(-1);
      }
      if (evento.key === 'ArrowRight') {
        irPara(1);
      }
    });
  })();
  </script>
  
