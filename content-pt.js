const HERO_BIO = [
  'Carlos Laviña é um artista digital da Costa de Oro, Uruguai. Ele dirige e desenvolve projetos artísticos desde 2014, abrangendo áreas como VJing, design, videoarte, CGI, instalações interativas, performance de som e design de jogos.',
  'Ele entrou em contato com a criação digital ao estudar animação tradicional e 3D em Montevidéu. Em 2014, começou a trabalhar de forma independente, principalmente em projetos de VJing. Em seguida, ingressou na Licenciatura de Artes Digitais e Eletrônicas na Universidade da República, no Uruguai, onde se familiarizou com as artes em sentidos mais profundos e críticos da disciplina.',
  'Atualmente, ele mora no Rio de Janeiro realizando projetos próprios ou colaborativos, nos quais pesquisa técnicas e expressões de linguagens digitais, além de trabalhar em estúdios e marcas em funções relacionadas ao seu perfil.',
];

const PROJECT_DESCS = {
  'leapr-website': 'Portfólio online do estúdio de criatividade digital Leapr. Criado em colaboração com Juan Goyret. Feito com Blender + Illustrator.',
  'i-am-burguesa': 'Campanha de lançamento de produto da hamburgueria I AM BURGUESA junto a Estudio Coso.',
  'aguaverde': 'Site criado para a estância Aguaverde, em Punta del Este, Uruguai. Skills: Figma, web design.',
  'pulse': 'Durante todo 2018 e 2019, criação de peças de comunicação visual para o evento Pulse em Montevideo, Uruguai.',
  'mondesign': 'Peça de vídeo feita para a campanha de comunicação do evento Mondesign, de Montevideo Shopping + Escola Integra.',
  'redisenha': 'Peça de vídeo feita para a campanha de comunicação do projeto Rediseña, de Montevideo Shopping + Escola Integra.',
  'cuerpx-cero': 'Cuerpx Cero é um projeto coletivo em desenvolvimento com Juana Ferrari, Juan Gallo e Juan Goyret. Foi criado graças a uma bolsa do Instituto Uruguaio de Cinema e Audiovisual. Nele, exploramos os aspectos da tradição uruguaia dos quais fomos excluídos durante nossa criação como pessoas queer. O projeto não busca desmerecer nossa cultura, mas sim inserir nossas vozes na narrativa nacional, criando um espaço onde possamos relatar nossas experiências e como conquistamos posições de poder ao sermos forçados a permanecer à margem do nosso folclore. O projeto está sendo desenvolvido no software Unity para ser jogado em Realidade Virtual.',
  'oferenda': 'Oferenda é um jogo para navegador codirigido por Juana Ferrari e Ivy Montero. Ele explora ancestralidade, identidade queer e a criação de mitologias contemporâneas. O jogo se desenrola oferecendo respostas desconfortáveis em troca de continuarmos assistindo à performance da divindade apresentada diante de nós.',
  'mixed-feelings': 'Projeto desenvolvido em colaboração com o artista Juan Ferrari, radicado na Europa, para o teatro Newmarkt em Zurique. Parte de uma obra sonora dos artistas Benjamin Van Bebber, Leo Hofmann e Filomena Krause. É um jogo de arte desenvolvido no software Unity, utilizando tecnologia de digitalização 3D para a criação de elementos.',
  'songs-friendship-loss': 'Peça de vídeo para cenografia de teatro para a peça Songs of Friendship and Loss. Foi feita com 3D scans de árvores do bairro da Glória, compondo uma paisagem nova de milhões de pontinhos que, conforme passa o tempo, somem e se distorcem.',
  'tramoya-tech': 'Tramoya Tech foi uma peça de teatro-performance-dança criada durante a residência artística SALA DE PRUEBAS 1:10 em Casamario, Uruguai, em 2022. Juntamente com Juan Goyret, Ignacio Lorenzelli e Mariana Padrón, trabalhamos com a tecnologia e o corpo como linguagem, meio, problema e solução.',
  'canticos-monoliticos': 'Som ao vivo para a peça do David Caiçedo, no marco do festival Abre Alas 21 na galeria A Gentil Carioca, em fevereiro de 2026. O artista pesquisa nela imaginários de ficção científica latino-americana.',
  'premios-artes': 'Programa customizado e visuais para os Prêmios Nacionais de Música e Letras do Ministério da Cultura do Uruguai.',
  'integro': 'Campanha de comunicação em vídeo, imagem fixa e redesign da identidade visual do evento Integro no Uruguai. Para isso criei personagens com plastilina que depois escaneei, editei e animei em Blender. Feito com Blender + Illustrator + After Effects.',
  'nacar': 'Nacar é um jogo que busca estabelecer uma relação com o som e a harmonia. É um híbrido entre puzzle, aventura gráfica e plataforma, estrelado por uma pequena bola de pedra que viaja por diferentes biomas, encontrando diversas entidades sagradas do lugar. Elas nos oferecem sabedoria depois de ajudá-las a superar diferentes puzzles onde o som desempenha um papel principal. O jogo é feito em colaboração com o artista musical Uji, que criou uma paleta de sons e trilha sonora para o jogo. Uma demo executável para Windows foi produzida e o projeto está buscando financiamento para produzi-lo.',
  'beatblox': 'Beatblox é um projeto musical no metaverso da Decentraland. Durante 2022 trabalhei junto com o estúdio uno+uno, modelando em 3D a arquitetura esboçada por eles no Blender, para colocá-la em seus terrenos.',
  'montevjeo': 'Em 2021 formamos o Montevjeo, um grupo de VJs que desde 2023 gerencia um espaço anual onde expor nossos trabalhos e compartilhar conhecimentos, criado a partir de um grupo de WhatsApp. Faço parte da produção nos encontros do coletivo.',
  'quebrada': 'Desarrollo del diseño de escenarios y puesta visual para el evento Quebrada en José Ignacio, Uruguay.',
  'quebrada-maca': 'Diseño de dos escenarios para el evento Quebrada en José Ignacio, Uruguay.',
  'drip': 'Diseño de puesta visual y VJing para pantallas del evento Drip en Uruguay.',
  'scifi': 'Campanha de vídeo para o evento Sci-Fi em Buenos Aires. Feito a partir de escaneos 3D em Unreal Engine.',
  'uwool': 'Realização do curta experimental Uwool, a microscopic experience.',
  'catwalk': 'Direção e realização de campanha de vídeo para a marca de lingerie Catwalk, do Uruguai. Feito a partir de scans 3D em Blender.',
  'rappi': 'Fiz parte da equipe de design gráfico e comunicação na Rappi durante 2018.',
  'beats-co': 'Sessão de VJ + DJ junto ao produtor musical Lautaro Moreno. Beats&Co é um projeto audiovisual de Fausto Prieto baseado na performance em conjunto de beatmakers e VJs ao vivo.',
  'atlantico-sertao': 'Peça de vídeo para Atlántico Sertão, exposição de arte sertaneja produzida por Orbita Produções no CCBB São Paulo.',
  'biarritzzzz': 'Assistência técnica para a construção da obra de arte multimídia da artista Biarritzzzz, sob a direção técnica de Matheus Mendes. A obra foi exposta no CCBB de São Paulo.',
  'vjing': 'Sua busca abrange os horizontes sensíveis das tecnologias que utiliza, desenvolvendo projetos coletivos em formatos e técnicas experimentais. Suas criações foram usadas por artistas e produtores de grandes eventos do Uruguai e da Argentina, utilizando captura de realidade, modelagem 3D, produção musical e videoarte para compor espaços em softwares como Blender, Unreal Engine, Unity e Touchdesigner.',
  'estudio-g': 'Durante 2020 e 2021 fui contratado pelo Estudio G para fazer as gráficas das atividades do seu espaço de dança contemporânea.',
  'culto-mvd': 'Culto Café do Uruguai pediu meus visuais para a abertura de sua loja no bairro Punta Carretas de Montevidéu.',
  'core': 'Comunicação em redes para o evento Core em Montevidéu, Uruguai.',
};

const projects = PROJECTS_DATA.map(p => ({ ...p, desc: PROJECT_DESCS[p.id] })).sort((a, b) => {
  const ya = parseInt(a.tags.find(t => /^\d{4}$/.test(t)), 10) || 0;
  const yb = parseInt(b.tags.find(t => /^\d{4}$/.test(t)), 10) || 0;
  return yb - ya;
});
