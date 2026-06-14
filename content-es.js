const BIO_BTN_TEXT = 'sobre Carlitos';
const HERO_BIO = [
  'Carlos Laviña es un artista digital de la Costa de Oro, Uruguay. Dirige y desarrolla proyectos artísticos desde 2014, abarcando áreas como VJing, diseño, videoarte, CGI, instalaciones interactivas, performance de sonido y diseño de juegos.',
  'Entró en contacto con la creación digital al estudiar animación tradicional y 3D en Montevideo. En 2014, comenzó a trabajar de forma independiente, principalmente en proyectos de VJing. Luego, ingresó a la Licenciatura de Artes Digitales y Electrónicas en la Universidad de la República, en Uruguay, donde se familiarizó con las artes en sentidos más profundos y críticos de la disciplina.',
  'Actualmente vive en Río de Janeiro realizando proyectos propios o colaborativos, investigando técnicas y expresiones de lenguajes digitales.',
];

const PROJECT_DESCS = {
  'leapr-website': 'Portafolio online del estudio de creatividad digital Leapr. Creado en colaboración con Juan Goyret. Hecho con Blender + Illustrator.',
  'i-am-burguesa': 'Campaña de lanzamiento de producto de la hamburguesería I AM BURGUESA junto a Estudio Coso.',
  'aguaverde': 'Sitio web creado para la estancia Aguaverde, en Punta del Este, Uruguay. Skills: Figma, web design.',
  'pulse': 'Durante todo 2018 y 2019, creación de piezas de comunicación visual para el evento Pulse en Montevideo, Uruguay.',
  'mondesign': 'Pieza de video hecha para la campaña de comunicación del evento Mondesign, de Montevideo Shopping + Escuela Integra.',
  'redisenha': 'Pieza de video hecha para la campaña de comunicación del proyecto Rediseña, de Montevideo Shopping + Escuela Integra.',
  'cuerpx-cero': 'Cuerpx Cero es un proyecto colectivo en desarrollo con Juana Ferrari, Juan Gallo y Juan Goyret. Fue creado gracias a una beca del Instituto Uruguayo de Cine y Audiovisual. En él, exploramos los aspectos de la tradición uruguaya de los cuales fuimos excluidos durante nuestra crianza como personas queer. El proyecto no busca menospreciar nuestra cultura, sino insertar nuestras voces en la narrativa nacional, creando un espacio donde podamos relatar nuestras experiencias y cómo conquistamos posiciones de poder al ser forzados a permanecer al margen de nuestro folclore. El proyecto está siendo desarrollado en el software Unity para ser jugado en Realidad Virtual.',
  'oferenda': 'Oferenda es un juego para navegador codirigido por Juana Ferrari e Ivy Montero. Explora ancestralidad, identidad queer y la creación de mitologías contemporáneas. El juego se desarrolla ofreciendo respuestas incómodas a cambio de que sigamos viendo la performance de la divinidad presentada ante nosotros.',
  'mixed-feelings': 'Proyecto desarrollado en colaboración con el artista Juan Ferrari, radicado en Europa, para el teatro Newmarkt en Zúrich. Parte de una obra sonora de los artistas Benjamin Van Bebber, Leo Hofmann y Filomena Krause. Es un juego de arte desarrollado en el software Unity, utilizando tecnología de digitalización 3D para la creación de elementos.',
  'songs-friendship-loss': 'Pieza de video para escenografía de teatro para la obra Songs of Friendship and Loss. Fue hecha con 3D scans de árboles del barrio de Glória, componiendo un paisaje nuevo de millones de puntitos que, conforme pasa el tiempo, desaparecen y se distorsionan.',
  'tramoya-tech': 'Tramoya Tech fue una pieza de teatro-performance-danza creada durante la residencia artística SALA DE PRUEBAS 1:10 en Casamario, Uruguay, en 2022. Junto con Juan Goyret, Ignacio Lorenzelli y Mariana Padrón, trabajamos con la tecnología y el cuerpo como lenguaje, medio, problema y solución.',
  'canticos-monoliticos': 'Sonido en vivo para la obra de David Caiçedo, en el marco del festival Abre Alas 21 en la galería A Gentil Carioca, en febrero de 2026. El artista investiga en ella imaginarios de ciencia ficción latinoamericana.',
  'premios-artes': 'Programa personalizado y visuales para los Premios Nacionales de Música y Letras del Ministerio de Cultura de Uruguay.',
  'integro': 'Campaña de comunicación en video, imagen fija y rediseño de la identidad visual del evento Integro en Uruguay. Para eso creé personajes con plastilina que después escaneé, edité y animé en Blender. Hecho con Blender + Illustrator + After Effects.',
  'nacar': 'Nacar es un videojuego que busca establecer una relación con el sonido y la armonía. Es un híbrido entre puzzle, aventura gráfica y plataforma, protagonizado por una pequeña bola de piedra que viaja por diferentes biomas, encontrando diversas entidades sagradas del lugar. Ellas nos ofrecen sabiduría después de ayudarlas a superar diferentes puzzles donde el sonido juega un papel principal. El juego está hecho en colaboración con el artista musical Uji, quien creó una paleta de sonidos y banda sonora para el juego. Se ha realizado una demo ejecutable en Windows y el proyecto está buscando financiamiento para producirlo.',
  'beatblox': 'Beatblox es un proyecto musical en el metaverso de Decentraland. Durante 2022 trabajé junto con el estudio uno+uno, modelando en 3D la arquitectura esbozada por ellos en Blender, para colocarla en sus terrenos.',
  'montevjeo': 'En 2021 formamos Montevjeo, un grupo de VJs que desde 2023 gestiona un espacio anual donde exponer nuestros trabajos y compartir conocimientos, creado a partir de un grupo de WhatsApp. Formo parte de la producción en los encuentros del colectivo.',
  'quebrada': 'Desarrollo del diseño de escenarios y puesta visual para el evento Quebrada en José Ignacio, Uruguay.',
  'quebrada-maca': 'Diseño de dos escenarios para el evento Quebrada en José Ignacio, Uruguay.',
  'drip': 'Diseño de puesta visual y VJing para pantallas del evento Drip en Uruguay.',
  'scifi': 'Campaña de video para el evento Sci-Fi en Buenos Aires. Hecho a partir de escaneos 3D en Unreal Engine.',
  'uwool': 'Realización del corto experimental Uwool, a microscopic experience.',
  'catwalk': 'Dirección y realización de campaña de video para la marca de lencería Catwalk, de Uruguay. Hecho a partir de scans 3D en Blender.',
  'rappi': 'Fui parte del equipo de diseño gráfico y comunicación en Rappi durante 2018.',
  'beats-co': 'Sesión de VJ + DJ junto al productor musical Lautaro Moreno. Beats&Co es un proyecto audiovisual de Fausto Prieto basado en la performance en conjunto de beatmakers y VJs en vivo.',
  'atlantico-sertao': 'Pieza de video para Atlántico Sertão, exposición de arte sertanejo producida por Orbita Produções en CCBB São Paulo.',
  'biarritzzzz': 'Asistencia técnica para la construcción de la obra de arte multimedia de la artista Biarritzzzz, bajo la dirección técnica de Matheus Mendes. La obra fue expuesta en CCBB de San Pablo.',
  'vjing': 'Su búsqueda abarca los horizontes sensibles de las tecnologías que utiliza, desarrollando proyectos colectivos en formatos y técnicas experimentales. Sus creaciones fueron usadas por artistas y productores de grandes eventos de Uruguay y Argentina, utilizando captura de realidad, modelado 3D, producción musical y videoarte para componer espacios en softwares como Blender, Unreal Engine, Unity y Touchdesigner.',
  'estudio-g': 'Durante 2020 y 2021 fui contratado por Estudio G para hacer las gráficas de las actividades de su espacio de danza contemporánea.',
  'culto-mvd': 'Culto Café de Uruguay pidió mis visuales para la apertura de su local en el barrio Punta Carretas de Montevideo.',
  'core': 'Comunicación en redes para el evento Core en Montevideo, Uruguay.',
};

const projects = PROJECTS_DATA.map(p => ({ ...p, desc: PROJECT_DESCS[p.id] })).sort((a, b) => {
  const ya = parseInt(a.tags.find(t => /^\d{4}$/.test(t)), 10) || 0;
  const yb = parseInt(b.tags.find(t => /^\d{4}$/.test(t)), 10) || 0;
  return yb - ya;
});
