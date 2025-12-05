import { LanguagesEnum } from './languages';

export type IDescription =
  | {
      name: string;
      organization: string;
      startDate: Date;
      isFinished: false;
      activityDescription: string[];
    }
  | {
      name: string;
      organization: string;
      startDate: Date;
      endDate: Date;
      isFinished: true;
      activityDescription: string[];
    };

type ISubItems = {
  name: string;
  description: IDescription;
};

type IList = {
  name: string;
  url: string;
  description?: IDescription;
  subItems?: ISubItems[];
};

export type ICareer = {
  [K in LanguagesEnum]: {
    optionName: string;
    list: IList[];
  }[];
};

export const careerWithTranslations: ICareer = {
  [LanguagesEnum.PT_BR]: [
    {
      optionName: 'Experiência',
      list: [
        {
          name: 'AIKO',
          url: 'https://aiko.digital/',
          subItems: [
            {
              name: 'Analista de Desenvolvimento de Sistemas I',
              description: {
                name: 'Analista de Desenvolvimento de Sistemas I na ',
                organization: 'AIKO',
                startDate: new Date('2024-12-09'),
                isFinished: false,
                activityDescription: [
                  'Desenvolvimento de novas telas e componentes.',
                  'Criação de interfaces seguindo a identidade visual da empresa.',
                  'Gerenciamento de micro-frontends em múltiplas linguagens.',
                  'Criação de mapas complexos, flexíveis e robustos.',
                  'Otimizações de performance',
                  'Implementação de internacionalização do sistema.',
                  'Desenvolvimento de painéis de monitoramento personalizáveis.',
                  'Suporte técnico e correção de bugs.',
                  'Atuações pontuais no backend para ajustes e novas funcionalidades.',
                ],
              },
            },
          ],
        },
        {
          name: 'KOR Solutions',
          url: 'https://www.kor.solutions/',
          subItems: [
            {
              name: 'Desenvolvedor Front-end - Júnior',
              description: {
                name: 'Desenvolvedor Front-end - Júnior na ',
                organization: 'KOR Solutions',
                startDate: new Date('2023-01-02'),
                endDate: new Date('2024-12-06'),
                isFinished: true,
                activityDescription: [
                  'Criação de biblioteca para design system',
                  'Componentização do sistema utilizando micro front-ends',
                  'Desenvolvimento de formulários parametrizáveis com persistência de dados e validações complexas',
                  'Criação de designs para o portal seguindo o design system',
                  'Criação de novas telas realizando consultas no firebase',
                  'Suporte técnico e correções de bugs ',
                  'Desenvolvimento de scripts para manipulação de dados',
                  'Desenvolvimento de funções lambda',
                ],
              },
            },
            {
              name: 'Desenvolvedor Front-end - Estágio',
              description: {
                name: 'Desenvolvedor Front-end - Estágio na ',
                organization: 'KOR Solutions',
                startDate: new Date('2021-10-20'),
                endDate: new Date('2022-12-31'),
                isFinished: true,
                activityDescription: [
                  'Criação de novas telas no portal de admin',
                  'Criação de um novo portal do cliente',
                  'Criação de um chat utilizando websocket',
                  'Correções de bugs visuais e lógicos ',
                  'Ajustes de requests em GraphQL e Redux',
                  'Manutenção de endpoints em ADONIS',
                ],
              },
            },
          ],
        },
      ],
    },
    {
      optionName: 'Formação',
      list: [
        {
          name: 'Bacharelado em Ciência da Computação',
          url: 'https://portal.unifai.com.br/novo-portal/',
          description: {
            name: 'Bacharelado em Ciência da Computação na ',
            organization: 'Fai - Centro Universitário de Adamantina',
            startDate: new Date('2023-01-02'),
            isFinished: false,
            activityDescription: [
              'Atualmente estou cursando o curso de Ciência da Computação, buscando me aprofundar cada vez mais na área de desenvolvimento de software.',
              'Já tive contato com diversas áreas da computação, desde suas bases teóricas até o desenvolvimento em si',
              'Ao longo do curso, terei contato com diversas áreas da computação, como desenvolvimento web, desenvolvimento mobile, desenvolvimento de jogos, inteligência artificial, entre outras.',
            ],
          },
        },
        {
          name: 'Técnico em Desenvolvimento de Sistemas',
          url: 'http://eteceudecioadamantina.com.br/',
          description: {
            name: 'Ensino Médio integrado ao Técnico em Desenvolvimento de Sistemas na ',
            organization: 'ETEC Prof. Eudécio Luiz Vicente',
            startDate: new Date('2020-01-02'),
            endDate: new Date('2022-12-31'),
            isFinished: true,
            activityDescription: [
              'Nesse curso foi onde tive o primeiro contato com a área de desenvolvimento de software, e foi onde decidi que era isso que eu queria fazer.',
              'Aprendi a base do desenvolvimento, desde como funciona um computador até como desenvolver um sistema web.',
              'Também tive contato com diversas linguagens de programação, como Java, C#, PHP, Flutter, entre outras.',
              'Além das linguagens de programação, também aprendi sobre banco de dados, redes de computadores e design gráfico.',
            ],
          },
        },
      ],
    },
  ],
  [LanguagesEnum.EN_US]: [
    {
      optionName: 'Experience',
      list: [
        {
          name: 'AIKO',
          url: 'https://aiko.digital/',
          subItems: [
            {
              name: 'Front-end Developer - Junior',
              description: {
                name: 'Front-end Developer - Junior at ',
                organization: 'AIKO',
                startDate: new Date('2024-12-09'),
                isFinished: false,
                activityDescription: [
                  'Development of new screens and components.',
                  "Creation of interfaces following the company's visual identity.",
                  'Management of micro-frontends in multiple languages.',
                  'Development of complex, flexible, and robust maps.',
                  'Performance optimizations.',
                  'Implementation of system internationalization.',
                  'Development of customizable monitoring dashboards.',
                  'Technical support and bug fixing.',
                  'Occasional backend contributions for adjustments and new features.',
                ],
              },
            },
          ],
        },
        {
          name: 'KOR Solutions',
          url: 'https://www.kor.solutions/',
          subItems: [
            {
              name: 'Front-end Developer - Junior',
              description: {
                name: 'Front-end Developer - Junior at ',
                organization: 'KOR Solutions',
                startDate: new Date('2023-01-02'),
                endDate: new Date('2024-12-06'),
                isFinished: true,
                activityDescription: [
                  'Creation of a design system library',
                  'Componentization of the system using micro front-ends',
                  'Development of parameterizable forms with data persistence and complex validations',
                  'Creation of designs for the portal following the design system',
                  'Development of new screens by querying Firebase',
                  'Technical support and bug fixes',
                  'Development of scripts for data manipulation',
                  'Development of Lambda functions',
                ],
              },
            },
            {
              name: 'Front-end Developer - Internship',
              description: {
                name: 'Front-end Developer - Internship at ',
                organization: 'KOR Solutions',
                startDate: new Date('2021-10-20'),
                endDate: new Date('2022-12-31'),
                isFinished: true,
                activityDescription: [
                  'Creation of new screens on the admin portal',
                  'Development of a new client portal',
                  'Creation of a chat using WebSocket',
                  'Visual and logical bug fixes',
                  'Adjustments of requests in GraphQL and Redux',
                  'Maintenance of endpoints in ADONIS',
                ],
              },
            },
          ],
        },
      ],
    },
    {
      optionName: 'Education',
      list: [
        {
          name: "Bachelor's Degree in Computer Science",
          url: 'https://portal.unifai.com.br/novo-portal/',
          description: {
            name: "Bachelor's Degree in Computer Science at ",
            organization: 'Fai - Centro Universitário de Adamantina',
            startDate: new Date('2023-01-02'),
            isFinished: false,
            activityDescription: [
              'I am currently studying Computer Science, seeking to deepen my knowledge in the area of software development.',
              'I have already had contact with several areas of computing, from its theoretical bases to development itself.',
              'Throughout the course, I will have contact with several areas of computing, such as web development, mobile development, game development, artificial intelligence, among others.',
            ],
          },
        },
        {
          name: 'Technical Course in Systems Development',
          url: 'http://eteceudecioadamantina.com.br/',
          description: {
            name: 'High School integrated with Technical Course in Systems Development at ',
            organization: 'ETEC Prof. Eudécio Luiz Vicente',
            startDate: new Date('2020-01-02'),
            endDate: new Date('2022-12-31'),
            isFinished: true,
            activityDescription: [
              'In this course was where I had the first contact with the area of software development, and it was where I decided that this was what I wanted to do.',
              'I learned the basics of development, from how a computer works to how to develop a web system.',
              'I also had contact with several programming languages, such as Java, C#, PHP, Flutter, among others.',
              'In addition to programming languages, I also learned about databases, computer networks and graphic design.',
            ],
          },
        },
      ],
    },
  ],
};
