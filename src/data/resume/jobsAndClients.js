const { technologies } = require('./technologies');
const R = require('ramda');
const { getArray } = require('./getArray');
const { range, thisYear } = require('./time');

const t = technologies;

const jobsAndClients = {
  'Freelancer': {
    slug: '/freelancer/',
    date: {
      start: '2007-02-01',
      end: null
    },
    img: '',
    link: 'https://mariliap.github.io',
    description: {
      pt: 'Desenvolvi sistemas PT',
      en: 'Desenvolvi sistemas EN',
      fr: 'Desenvolvi sistemas FR'
    },
    projects: [
      {
        name: 'Tic Tac Toe AI',
        slug: '/angeloocana/tic-tac-toe-ai/',
        img: 'tic-tac-toe-ai.jpg',
        isGame: true,
        years: range(2017, 2017),
        description: '',
        link: 'https://tic-tac-toe-ai.surge.sh',
        technologies: [
          t.react,
          t.gatsby,
          // t.graphql,
          // t.nodejs,
          t.js
        ],
        clients: [
          {
            name: '',
            link: ''
          }
        ]
      },
      {
        name: 'angeloocana .com v2',
        slug: '/angeloocana/v2/react/',
        years: range(2017, thisYear),
        description: '',
        link: 'https://angeloocana.com',
        technologies: [
          // t.gatsby,
          // t.graphql,
          t.react,
	        t.postgres,
          // t.nodejs,
          t.js
        ],
        clients: [
          {
            name: '',
            link: ''
          }
        ]
      },

    ]
  },
	'LAP - Controladoria e Ouvidoria do Estado do Ceará': {
		slug: '/cge/',
		date: {
			start: '2016-01-08',
			end: null
		},
		img: 'pol.png',
		link: 'http://pol.com.br',
		needWhiteBg: true,
		description: {
			pt: `POL (Prêmios Online), plataforma de e-commerce para resgate de produtos / serviços através da pontuação adquirida na apuração das metas e resultados. Integração com parceiros B2W, Magazine Luiza, Walmart, Casas Bahia, FastShop, entre outros.
        Criação de Engine de busca utilizando Lucene.
        Principais Tecnologias: MVC, API, Jquery, Ajax, .NET 4.0 / 4.5 utilizando linguagem C#, Entity Framework, Migrations, UnitTest, Lucene, StructureMap, WebForms
        Principais Metodologias: Domain Driven Design, Test Driven Development, Scrum
        Banco de Dados: SQL Server (Gerenciamento, Criação de Querys, Stored Procedures, Functions, Views e Jobs)`,
      en: '',
      fr: 'Desenvolvi sistemas e sites para: Envio de SMS, Academias, E-commerce, Sistes Institucionais, entre outros.'
		},
		projects: [
			{
				name: 'POL',
				slug: '/pol-premios-online/',
				years: range(2011, 2015),
				description: '',
				link: null,
				clients: [
					{
						name: 'B2W',
						link: ''
					},
					{
						name: 'Magazine Luiza',
						link: ''
					},
					{
						name: 'Walmart',
						link: ''
					},
					{
						name: 'Avon',
						link: ''
					},
					{
						name: 'Casas Bahia',
						link: ''
					},
					{
						name: 'FastShop',
						link: ''
					}
				],
				technologies: [
					// t.cSharp,
					// t.html,
					// t.css,
					// t.js,
					// t.jquery,
					// t.netMvc,
					// t.postgres,
					// t.webForms,
					// t.wcf,
					// t.sqlServer,
					// t.visualStudio,
					// t.lucene,
					// t.rabbitmq,
					// t.structureMap,
					// t.entityFramework
				]
			}
		]
	},
  'Cast Informática - Banco Central do Brasil': {
    slug: '/cast-bacen/',
    date: {
      start: '2011-04-18',
      end: '2015-03-17'
    },
    img: 'pol.png',
    link: 'http://pol.com.br',
    needWhiteBg: true,
    description: {
    	pt: `POL (Prêmios Online), plataforma de e-commerce para resgate de produtos / serviços através da pontuação adquirida na apuração das metas e resultados. Integração com parceiros B2W, Magazine Luiza, Walmart, Casas Bahia, FastShop, entre outros.
        
        Criação de Engine de busca utilizando Lucene.
        
        Principais Tecnologias: MVC, API, Jquery, Ajax, .NET 4.0 / 4.5 utilizando linguagem C#, Entity Framework, Migrations, UnitTest, Lucene, StructureMap, WebForms
        Principais Metodologias: Domain Driven Design, Test Driven Development, Scrum
        Banco de Dados: SQL Server (Gerenciamento, Criação de Querys, Stored Procedures, Functions, Views e Jobs)`,
      en: '',
      fr: 'Desenvolvi sistemas e sites para: Envio de SMS, Academias, E-commerce, Sistes Institucionais, entre outros.'
    },
	  projects: [
      {
        name: 'POL',
        slug: '/pol-premios-online/',
        years: range(2011, 2015),
        description: '',
        link: null,
        clients: [
          {
            name: 'B2W',
            link: ''
          },
          {
            name: 'Magazine Luiza',
            link: ''
          },
          {
            name: 'Walmart',
            link: ''
          },
          {
            name: 'Avon',
            link: ''
          },
          {
            name: 'Casas Bahia',
            link: ''
          },
          {
            name: 'FastShop',
            link: ''
          }
        ],
        technologies: [
          // t.cSharp,
          // t.html,
          // t.css,
          // t.js,
          // t.jquery,
          // t.netMvc,
          // t.postgres,
          // t.webForms,
          // t.wcf,
          // t.sqlServer,
          // t.visualStudio,
          // t.lucene,
          // t.rabbitmq,
          // t.structureMap,
          // t.entityFramework
        ]
      }
    ]
  },
  'Informe Air': {
    slug: '/informe-air/',
    date: {
      start: '2008-10-28',
      end: '2010-06-11'
    },
    img: '',
    link: '',
	  description: {
		  pt: '',
      en: '',
      fr: 'Desenvolvi sistemas e sites para: Envio de SMS, Academias, E-commerce, Sistes Institucionais, entre outros.'
	  },
    technologies: [
      // t.cSharp,
      // t.webForms,
      // t.windowsForms,
      // t.telerik,
      // t.flash,
      // t.html,
      // t.css,
      // t.js,
      // t.jquery,
      // t.sqlServer,
      // t.visualStudio
    ],
    projects: [
      {
        name: 'PriManager',
        slug: '/primanager/',
        years: range(2008, 2010),
        description: 'Sistema de Gerenciamento de Obras',
        link: 'http://www.sistemapri.com.br/en/primanager.html',
        clients: [
          {
            name: 'Sistema Pri',
            link: 'http://www.sistemapri.com.br'
          }
        ]
      },
      {
        name: 'FDE',
        slug: '/fde/',
        years: range(2008, 2010),
        description: 'Sistema para gerenciamento de infra-estrutura das escolas do Estado de São Paulo',
        link: 'http://www.fde.sp.gov.br',
        clients: [
          {
            name: 'FDE',
            link: 'http://www.fde.sp.gov.br'
          }
        ]
      },
      {
        name: 'Mapa de Obras',
        description: '',
        slug: '/primanager/',
        years: range(2009, 2009),
        link: 'https://www.aeseletropaulo.com.br',
        clients: [
          {
            name: 'AES Eletropaulo',
            link: 'https://www.aeseletropaulo.com.br'
          }
        ]
      },
      {
        name: 'ERP / CRM',
        slug: '/erp-crm/',
        years: range(2009, 2010),
        description: 'ERP / CRM para controle de todas as operações da empresa: fluxo de caixa, cadastro e acompanhamento de relacionamento com clientes e fornecedores, entre outros módulos.',
        link: null,
        clients: []
      }
    ]
  }
};

const getAllProjectsTech = R.reduce((techs, project) => {
  return R.uniq((techs || []).concat(project.technologies))
    .filter(t => t);
});

const setTechnologies = R.assoc('technologies');

const concatProjectTechs = R.map(job => {
  const techs = getAllProjectsTech(job.technologies, job.projects);
  return setTechnologies(techs, job);
});

const getJobsAndClients = R.pipe(
  getArray,
  concatProjectTechs
);

const reduceProjectGames = R.reduce((games, project) =>
  project.isGame
    ? games.concat(project)
    : games);

const reduceJobGames = R.reduce((games, job) =>
  reduceProjectGames(games, job.projects)
  , []);

const getGames = R.pipe(
  getArray,
  reduceJobGames
);

module.exports = {
  jobsAndClients: getJobsAndClients(jobsAndClients),
	projects: getGames(jobsAndClients)
};
