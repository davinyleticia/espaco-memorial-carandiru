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
        <a class="evento ativo" href="carandiru-pagina2.html?ev=1833"
          onclick="ativarEvento(this,'1833','As Primeiras Raízes e a Antiga Cadeia','A história das unidades de reclusão em São Paulo começou a tomar forma com estruturas mais antigas na cidade, servindo como embrião para o planejamento de um sistema prisional centralizado que futuramente daria origem ao Carandiru.');return false;">
          <div class="ano">1833</div>
          <h3>Origens</h3>
          <p>O início da organização do sistema prisional na capital paulista</p>
        </a>

        <a class="evento" href="carandiru-pagina2.html?ev=1904"
          onclick="ativarEvento(this,'1904','O Concurso de Arquitetura e Planejamento','Para acompanhar o crescimento urbano da cidade, o governo promoveu um concurso para projetar um espaço moderno e adequado para a época, buscando trazer preceitos de higiene e organização para a zona norte.');return false;">
          <div class="ano">1904</div>
          <h3>Planejamento</h3>
          <p>O projeto arquitetônico para uma nova penitenciária</p>
        </a>

        <a class="evento" href="carandiru-pagina2.html?ev=1920"
          onclick="ativarEvento(this,'1920','A Inauguração e o Modelo de Época','O complexo abriu suas portas com foco em preceitos científicos e sanitários defendidos por especialistas da época, buscando ser um marco de modernidade e reforma social.');return false;">
          <div class="ano">1920</div>
          <h3>Inauguração</h3>
          <p>Abertura do complexo com foco em padrões modernos</p>
        </a>

        <a class="evento" href="carandiru-pagina2.html?ev=1956"
          onclick="ativarEvento(this,'1956','Crescimento e Novos Pavilhões','O complexo passou por ampliações estruturais para absorver a demanda da capital, recebendo novos pavilhões e homenageando figuras da medicina legal paulista.');return false;">
          <div class="ano">1956</div>
          <h3>Expansão</h3>
          <p>Entrega de novos pavilhões e aprofundamento estrutural</p>
        </a>

        <a class="evento" href="carandiru-pagina2.html?ev=1978"
          onclick="ativarEvento(this,'1978','Desafios de Lotação e Debates Públicos','Com o aumento constante da população urbana e carcerária, os desafios estruturais se intensificaram, gerando debates na sociedade sobre os rumos do sistema penal.');return false;">
          <div class="ano">1978</div>
          <h3>Desafios</h3>
          <p>Crescimento da população e discussões sobre o sistema</p>
        </a>
        
        <a class="evento" href="carandiru-pagina2.html?ev=1992"
          onclick="ativarEvento(this,'1992','Um Marco de Transformação e Direitos Humanos','O doloroso episódio no Pavilhão 9 transformou-se em uma cicatriz profunda na história de São Paulo, impulsionando discussões essenciais e urgentes sobre direitos humanos, justiça e cidadania no país.');return false;">
          <div class="ano">1992</div>
          <h3>Reflexão</h3>
          <p>O fatídico evento no Pavilhão 9 e o debate nacional</p>
        </a>

        <a class="evento" href="carandiru-pagina2.html?ev=2002"
          onclick="ativarEvento(this,'2002','A Desativação e a Chegada do Parque','O encerramento das atividades do complexo encerrou um ciclo difícil, abrindo caminho para a demolição dos prédios e a devolução daquela grande área para a comunidade.');return false;">
          <div class="ano">2002</div>
          <h3>Renovação</h3>
          <p>Desativação dos pavilhões e o nascimento do Parque</p>
        </a>

        <a class="evento" href="carandiru-pagina2.html?ev=hoje"
          onclick="ativarEvento(this,'Hoje','O Espaço Memorial e a Preservação da Memória','Hoje, o Espaço Memorial atua como um local de preservação histórica, salvando documentos, relatos e imagens para educar as novas gerações na construção de uma sociedade mais justa e acolhedora.');return false;">
          <div class="ano">Hoje</div>
          <h3>Memória</h3>
          <p>Atuação do Espaço Memorial na educação e cidadania</p>
        </a>
      </div>

      <div class="timeline-detalhe" id="timeline-detalhe">
        <div class="td-ano" id="td-ano">1920</div>
        <div>
          <div class="td-titulo" id="td-titulo">Abertura do Complexo com Foco em Padrões Modernos</div>
          <div class="td-texto" id="td-texto">O complexo abriu suas portas com foco em preceitos científicos e sanitários defendidos por especialistas da época, buscando ser um marco de modernidade e reforma social para a cidade de São Paulo.</div>
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

<section class="galeria-acervo" id="galeria">
  <div class="galeria-acervo__cabecalho">
    <h2>Nosso <em>acervo</em></h2>
    <p>Confira fotos e registros do acervo do Memorial do Carandiru.</p>
    <span class="galeria-acervo__creditos">Registros por Vinícius Santos (1° EM Marketing 2026 | Etec São Mateus)</span>
  </div>

  <div class="galeria-acervo__mosaico">
    <button type="button" class="galeria-acervo__item" data-index="0">
      <span class="galeria-acervo__tag-num">#01</span>
      <img src="../_images/Fotos/carandiru_escultura_cabeca_capuz_azul.jpeg" alt="Escultura de uma cabeça encapuzada em tecido azul">
      <span class="galeria-acervo__lupa" aria-hidden="true">+</span>
    </button>

    <button type="button" class="galeria-acervo__item" data-index="1">
      <span class="galeria-acervo__tag-num">#02</span>
      <img src="../_images/Fotos/carandiru_maquete_tatil_sao_jorge.jpeg" alt="Maquete tátil em relevo de São Jorge e o dragão">
      <span class="galeria-acervo__lupa" aria-hidden="true">+</span>
    </button>

    <button type="button" class="galeria-acervo__item" data-index="2">
      <span class="galeria-acervo__tag-num">#03</span>
      <img src="../_images/Fotos/carandiru_painel_cartas_reivindicacoes.jpeg" alt="Painel com cartas e reivindicações de sobreviventes">
      <span class="galeria-acervo__lupa" aria-hidden="true">+</span>
    </button>

    <button type="button" class="galeria-acervo__item" data-index="3">
      <span class="galeria-acervo__tag-num">#04</span>
      <img src="../_images/Fotos/carandiru_painel_exposicao_esporte.jpeg" alt="Painel da exposição sobre esporte no complexo">
      <span class="galeria-acervo__lupa" aria-hidden="true">+</span>
    </button>

    <button type="button" class="galeria-acervo__item" data-index="4">
      <span class="galeria-acervo__tag-num">#05</span>
      <img src="../_images/Fotos/carandiru_porta_cela_salmo_david.jpeg" alt="Porta de cela com o Salmo de Davi pintado">
      <span class="galeria-acervo__lupa" aria-hidden="true">+</span>
    </button>

    <button type="button" class="galeria-acervo__item" data-index="5">
      <span class="galeria-acervo__tag-num">#06</span>
      <img src="../_images/Fotos/carandiru_quadro_populacao_carceraria_pv04.jpeg" alt="Quadro de controle da população carcerária do Pavilhão 4">
      <span class="galeria-acervo__lupa" aria-hidden="true">+</span>
    </button>

    <button type="button" class="galeria-acervo__item" data-index="6">
      <span class="galeria-acervo__tag-num">#07</span>
      <img src="../_images/Fotos/carandiru_porta_cela_olho.jpeg" alt="Porta de cela pintada com um olho">
      <span class="galeria-acervo__lupa" aria-hidden="true">+</span>
    </button>
  </div>
</section>

<!-- Lightbox Modal -->
<div class="galeria-acervo__lightbox" id="galeriaLightbox">
  <div class="galeria-acervo__lightbox-topo">
    <button type="button" class="galeria-acervo__fechar" id="galeriaFechar" aria-label="Fechar">&times;</button>
  </div>
  <button type="button" class="galeria-acervo__nav galeria-acervo__nav--anterior" id="galeriaAnterior" aria-label="Foto anterior">&#10094;</button>
  <button type="button" class="galeria-acervo__nav galeria-acervo__nav--proximo" id="galeriaProximo" aria-label="Próxima foto">&#10095;</button>
  <figure class="galeria-acervo__figura">
    <img src="" alt="" id="galeriaImagemGrande">
    <figcaption>
      <span class="galeria-acervo__contador" id="galeriaContador"></span>
      <div class="galeria-acervo__titulo-detalhado" id="galeriaTituloDetalhado"></div>
      <p class="galeria-acervo__descricao-texto" id="galeriaLegenda"></p>
      <div class="galeria-acervo__credito-lightbox">Registros por Vinícius Santos (1° EM Marketing 2026 | Etec São Mateus)</div>
    </figcaption>
  </figure>
</div>


<!-- Lightbox Modal -->
<div class="galeria-acervo__lightbox" id="galeriaLightbox">
  <div class="galeria-acervo__lightbox-topo">
    <button type="button" class="galeria-acervo__fechar" id="galeriaFechar" aria-label="Fechar">&times;</button>
  </div>
  <button type="button" class="galeria-acervo__nav galeria-acervo__nav--anterior" id="galeriaAnterior" aria-label="Foto anterior">&#10094;</button>
  <button type="button" class="galeria-acervo__nav galeria-acervo__nav--proximo" id="galeriaProximo" aria-label="Próxima foto">&#10095;</button>
  <figure class="galeria-acervo__figura">
    <img src="" alt="" id="galeriaImagemGrande">
    <figcaption>
      <span class="galeria-acervo__contador" id="galeriaContador"></span>
      <div class="galeria-acervo__titulo-detalhado" id="galeriaTituloDetalhado"></div>
      <p class="galeria-acervo__descricao-texto" id="galeriaLegenda"></p>
      <div class="galeria-acervo__credito-lightbox">Fotografia por Vinícius Santos(2026)</div>
    </figcaption>
  </figure>
</div>

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

