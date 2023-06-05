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

export interface ICarrer {
  pt: {
    optionName: string;
    list: IList[];
  }[];
  en: {
    optionName: string;
    list: IList[];
  }[];
}

export const carrerWithTranslations: ICarrer = {
  pt: [
    {
      optionName: 'Experiência',
      list: [
        {
          name: 'KOR Solutions',
          url: 'https://www.kor.solutions/',
          subItems: [
            {
              name: 'Desenvolvedor Front-end - Junior',
              description: {
                name: 'Desenvolvedor Front-end - Junior na ',
                organization: 'KOR Solutions',
                startDate: new Date('2023-01-02'),
                isFinished: false,
                activityDescription: [
                  'Atualmente estou trabalhando como Desenvolvedor Front-end JR na KOR Solutions, onde sou responsável por desenvolver o frontend dos produtos da empresa.',
                  'Desenvolvo utilizando ReactJS, Vite, Typescript, Styled Components, Jest, entre outras tecnologias.',
                  'Também já trabalhei com ferramentas como Redux, socket.io, AdonisJS e AWS lambda.',
                  'Utilizo a metodologia ágil Scrum no meu dia a dia.',
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
                  'Trabalhei como estagiário de desenvolvimento front-end na KOR Solutions, onde foi minha primeira experiência profissional.',
                  'Aprendi muito sobre desenvolvimento web, tanto na parte de front-end como back-end, e também sobre a metodologia ágil Scrum.',
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
  en: [
    {
      optionName: 'Experience',
      list: [
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
                isFinished: false,
                activityDescription: [
                  "I am currently working as a Front-end Developer JR at KOR Solutions, where I am responsible for developing the frontend of the company's products.",
                  'I develop using ReactJS, Vite, Typescript, Styled Components, Jest, among other technologies.',
                  'I have also worked with tools such as Redux, socket.io, AdonisJS and AWS lambda.',
                  'I use the agile Scrum methodology in my daily life.',
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
                  'I worked as a front-end development intern at KOR Solutions, where it was my first professional experience.',
                  'I learned a lot about web development, both on the front-end and back-end, and also about the agile Scrum methodology.',
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
