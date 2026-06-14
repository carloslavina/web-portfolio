const BIO_BTN_TEXT = 'about Carlitos';
const HERO_BIO = [
  'Carlos Laviña is a digital artist from Costa de Oro, Uruguay. He has been directing and developing artistic projects since 2014, spanning areas such as VJing, design, video art, CGI, interactive installations, sound performance, and game design.',
  'He first engaged with digital creation while studying traditional and 3D animation in Montevideo. In 2014, he began working independently, mainly on VJing projects. He then entered the Bachelor of Digital and Electronic Arts at the University of the Republic, in Uruguay, where he engaged with the arts in deeper and more critical senses of the discipline.',
  'He currently lives in Rio de Janeiro, working on personal or collaborative projects researching digital languages, while also working at studios and brands in related roles.',
];

const PROJECT_DESCS = {
  'leapr-website': 'Online portfolio for the digital creativity studio Leapr. Created in collaboration with Juan Goyret. Made with Blender + Illustrator.',
  'i-am-burguesa': 'Product launch campaign for the burger joint I AM BURGUESA together with Estudio Coso.',
  'aguaverde': 'Website created for the Aguaverde estate, in Punta del Este, Uruguay. Skills: Figma, web design.',
  'pulse': 'Throughout 2018 and 2019, creation of visual communication pieces for the Pulse event in Montevideo, Uruguay.',
  'mondesign': 'Video piece made for the communication campaign of the Mondesign event, by Montevideo Shopping + Integra School.',
  'redisenha': 'Video piece made for the communication campaign of the Rediseña project, by Montevideo Shopping + Integra School.',
  'cuerpx-cero': 'Cuerpx Cero is a collective project in development with Juana Ferrari, Juan Gallo and Juan Goyret. It was created thanks to a grant from the Uruguayan Institute of Cinema and Audiovisual Arts. In it, we explore aspects of Uruguayan tradition from which we were excluded during our upbringing as queer people. The project does not seek to disparage our culture, but rather to insert our voices into the national narrative, creating a space where we can recount our experiences and how we have claimed positions of power after being forced to remain on the margins of our folklore. The project is being developed in Unity software to be played in Virtual Reality.',
  'oferenda': 'Oferenda is a browser game co-directed by Juana Ferrari and Ivy Montero. It explores ancestry, queer identity, and the creation of contemporary mythologies. The game unfolds by offering uncomfortable answers in exchange for us continuing to watch the performance of the divinity presented before us.',
  'mixed-feelings': 'Project developed in collaboration with artist Juan Ferrari, based in Europe, for the Newmarkt theater in Zurich. Part of a sound work by artists Benjamin Van Bebber, Leo Hofmann and Filomena Krause. It is an art game developed in Unity software, using 3D scanning technology for the creation of elements.',
  'songs-friendship-loss': 'Video piece for theater set design for the play Songs of Friendship and Loss. It was made with 3D scans of trees from the Glória neighborhood, composing a new landscape of millions of tiny dots that, as time passes, disappear and distort.',
  'tramoya-tech': 'Tramoya Tech was a theater-performance-dance piece created during the SALA DE PRUEBAS 1:10 artistic residency in Casamario, Uruguay, in 2022. Together with Juan Goyret, Ignacio Lorenzelli and Mariana Padrón, we worked with technology and the body as language, medium, problem and solution.',
  'canticos-monoliticos': 'Live sound for David Caiçedo\'s piece, within the framework of the Abre Alas 21 festival at A Gentil Carioca gallery, in February 2026. The artist explores imaginaries of Latin American science fiction.',
  'premios-artes': 'Custom program and visuals for the National Music and Literature Awards of the Ministry of Culture of Uruguay.',
  'integro': 'Communication campaign in video, still image and visual identity redesign for the Integro event in Uruguay. For this I created characters with plasticine that I later scanned, edited and animated in Blender. Made with Blender + Illustrator + After Effects.',
  'nacar': 'Nacar is a video game that seeks to establish a relationship with sound and harmony. It is a hybrid between a puzzle game, graphic adventure and platform starring a small stone ball that travels through different biomes, encountering different sacred entities of the place. They offer us wisdom after helping them overcome different puzzles where sound plays a main role. The game is made in collaboration with the musical artist Uji, who created a palette of sounds and OST for the game. A demo of the game executable on Windows has been made and the project is seeking financing to produce it.',
  'beatblox': 'Beatblox is a music project in the Decentraland metaverse. During 2022 I worked together with the uno+uno studio, modeling in 3D the architecture sketched by them in Blender, to place them on their lands.',
  'montevjeo': 'In 2021 we formed Montevjeo, a group of VJs that since 2023 manages an annual space to exhibit our work and share knowledge, created from a WhatsApp group. I am part of the production team at the collective\'s gatherings.',
  'quebrada': 'Development of stage design and visual production for the Quebrada event in José Ignacio, Uruguay.',
  'quebrada-maca': 'Design of two stages for the Quebrada event in José Ignacio, Uruguay.',
  'drip': 'Visual production design and VJing for screens at the Drip event in Uruguay.',
  'scifi': 'Video campaign for the Sci-Fi event in Buenos Aires. Made from 3D scans in Unreal Engine.',
  'uwool': 'Production of the experimental short film Uwool, a microscopic experience.',
  'catwalk': 'Direction and production of a video campaign for the lingerie brand Catwalk, from Uruguay. Made from 3D scans in Blender.',
  'rappi': 'I was part of the graphic design and communication team at Rappi during 2018.',
  'beats-co': 'VJ + DJ session together with music producer Lautaro Moreno. Beats&Co is an audiovisual project by Fausto Prieto based on live collaborative performance between beatmakers and VJs.',
  'atlantico-sertao': 'Video piece for Atlántico Sertão, a sertanejo art exhibition produced by Orbita Produções at CCBB São Paulo.',
  'biarritzzzz': 'Technical assistance for the construction of the multimedia artwork by artist Biarritzzzz, under the technical direction of Matheus Mendes. The work was exhibited at CCBB São Paulo.',
  'vjing': 'His practice spans the sensitive horizons of the technologies he uses, developing collective projects in experimental formats and techniques. His creations have been used by artists and producers of major events in Uruguay and Argentina, utilizing reality capture, 3D modeling, music production and video art to compose spaces in software such as Blender, Unreal Engine, Unity and Touchdesigner.',
  'estudio-g': 'During 2020 and 2021 I was hired by Estudio G to create the graphics for the activities of their contemporary dance space.',
  'culto-mvd': 'Culto Café from Uruguay requested my visuals for the opening of their location in the Punta Carretas neighborhood of Montevideo.',
  'core': 'Social media communication for the Core event in Montevideo, Uruguay.',
};

const projects = PROJECTS_DATA.map(p => ({ ...p, desc: PROJECT_DESCS[p.id] })).sort((a, b) => {
  const ya = parseInt(a.tags.find(t => /^\d{4}$/.test(t)), 10) || 0;
  const yb = parseInt(b.tags.find(t => /^\d{4}$/.test(t)), 10) || 0;
  return yb - ya;
});
