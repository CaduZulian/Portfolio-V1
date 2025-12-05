import { LanguagesEnum } from './languages';
import { SkillGroupType } from './skills';

export const translations = {
  [LanguagesEnum.PT_BR]: {
    siteName: 'CaduZulian.dev',
    header: {
      about: 'Sobre mim',
      career: 'Carreira',
      skills: 'Habilidades',
      projects: 'Projetos',
      contactMe: 'Contato',
      languageButtonAlt: 'Alterar idioma',
    },
    introduction: {
      title1: 'Olá, eu sou',
      title2: 'Carlos Eduardo Zulian',
      subtitle: 'Desenvolvedor Front End',
      downloadCV: 'Baixar CV',
      learnMore: 'Saiba mais',
      userImageAlt: 'Carlos Eduardo Zulian',
    },
    aboutMe: {
      title: 'Sobre mim',
      paragraphs: [
        'Sou desenvolvedor web desde 2021, com foco em front-end e experiência sólida na construção de interfaces eficientes, escaláveis e alinhadas a design systems. Atuo consumindo APIs REST, aplicando clean code, realizando testes unitários e colaborando em equipes.',
        'Trabalho principalmente com React.js, Next.js, Vue.js e Nuxt.js, além de possuir experiência com React Native e Node.js, utilizando JavaScript e TypeScript. Também tenho vivência com .NET, Razor Pages, HTMX, AWS e PostgreSQL. No ecossistema de front-end e produtividade, utilizo Git, GitHub, Figma, SASS, Tailwind, Styled-Components, NPM/Yarn, Vite, Webpack e outros.',
        'Minha trajetória começou em 2020, no ensino médio técnico em Desenvolvimento de Sistemas, com contato direto com C#, PHP, JavaScript, MySQL e desenvolvimento mobile com Java e Flutter. Atualmente curso Ciência da Computação e continuo ampliando meus conhecimentos, sempre buscando novos desafios e aprimorando minhas habilidades no desenvolvimento web e full stack.',
      ],
    },
    skills: {
      title: 'Habilidades',
      [SkillGroupType.FRONTEND]: 'Frontend & Frameworks',
      [SkillGroupType.LANGUAGES]: 'Linguagens & Marcação',
      [SkillGroupType.STYLING]: 'Estilização',
      [SkillGroupType.BACKEND]: 'Backend & Bancos de Dados',
      [SkillGroupType.CLOUD]: 'Nuvem & Workflow',
      [SkillGroupType.TOOLS]: 'Ferramentas',
    },
    projects: {
      title: 'Projetos',
      viewMore: 'Ver mais',
    },
    career: {
      title: 'Carreira',
      present: 'Presente',
    },
    contact: {
      title: 'Entre em contato',
      form: {
        namePlaceholder: 'Nome',
        nameRequiredMessage: 'Nome é obrigatório',
        emailPlaceholder: 'E-mail',
        emailRequiredMessage: 'E-mail é obrigatório',
        subjectPlaceholder: 'Assunto',
        subjectRequiredMessage: 'Assunto é obrigatório',
        messagePlaceholder: 'Mensagem',
        messageRequiredMessage: 'Mensagem é obrigatória',
        sendButton: 'Enviar agora',
      },
    },
  },
  [LanguagesEnum.EN_US]: {
    siteName: 'CaduZulian.dev',
    header: {
      about: 'About me',
      career: 'Career',
      skills: 'Skills',
      projects: 'Projects',
      contactMe: 'Contact Me',
      languageButtonAlt: 'Change language',
    },
    introduction: {
      title1: "Hi, I'm",
      title2: 'Carlos Eduardo Zulian',
      subtitle: 'Front End Developer',
      downloadCV: 'Download CV',
      learnMore: 'Learn more',
      userImageAlt: 'Carlos Eduardo Zulian',
    },
    aboutMe: {
      title: 'About me',
      paragraphs: [
        'I`ve been a web developer since 2021, focusing on front-end development with solid experience in building efficient, scalable interfaces aligned with design systems. I work with REST APIs, apply clean code practices, write unit tests, and collaborate in team environments.',
        'I primarily work with React.js, Next.js, Vue.js, and Nuxt.js, and I also have experience with React Native and Node.js, using both JavaScript and TypeScript. I also have experience with .NET, Razor Pages, HTMX, AWS, and PostgreSQL. In the front-end ecosystem and productivity tooling, I use Git, GitHub, Figma, SASS, Tailwind, Styled-Components, NPM/Yarn, Vite, Webpack, and more.',
        'My journey began in 2020 during my technical high school program in Systems Development, where I worked directly with C#, PHP, JavaScript, MySQL, and mobile development using Java and Flutter. I am currently pursuing a degree in Computer Science and continue expanding my knowledge, always seeking new challenges and improving my skills in web and full-stack development.',
      ],
    },
    skills: {
      title: 'Skills',
      [SkillGroupType.FRONTEND]: 'Frontend & Frameworks',
      [SkillGroupType.LANGUAGES]: 'Languages & Markup',
      [SkillGroupType.STYLING]: 'Styling',
      [SkillGroupType.BACKEND]: 'Backend & Databases',
      [SkillGroupType.CLOUD]: 'Cloud & Workflow',
      [SkillGroupType.TOOLS]: 'Tools',
    },
    projects: {
      title: 'Projects',
      viewMore: 'View more',
    },
    career: {
      title: 'Career',
      present: 'Present',
    },
    contact: {
      title: 'Get in touch',
      form: {
        namePlaceholder: 'Name',
        nameRequiredMessage: 'Name is required',
        emailPlaceholder: 'Email',
        emailRequiredMessage: 'Email is required',
        subjectPlaceholder: 'Subject',
        subjectRequiredMessage: 'Subject is required',
        messagePlaceholder: 'Message',
        messageRequiredMessage: 'Message is required',
        sendButton: 'Submit now',
      },
    },
  },
};
