export enum SkillGroupType {
  FRONTEND = 'frontend',
  LANGUAGES = 'languages',
  STYLING = 'styling',
  BACKEND = 'backend',
  CLOUD = 'cloud',
  TOOLS = 'tools',
}

export type SkillGroup = {
  type: SkillGroupType;
  skills: Skill[];
};

export type Skill = {
  name: string;
  iconUrl?: string;
};

export const skillGroups: SkillGroup[] = [
  {
    type: SkillGroupType.FRONTEND,
    skills: [
      {
        name: 'ReactJS',
        iconUrl: '/icons/skills/react-2.svg',
      },
      {
        name: 'NextJS',
        iconUrl: '/icons/skills/next-js.svg',
      },
      {
        name: 'VueJS',
        iconUrl: '/icons/skills/vue-9.svg',
      },
      {
        name: 'Nuxt.js',
        iconUrl: '/icons/skills/nuxt-2.svg',
      },
      {
        name: 'React-Native',
        iconUrl: '/icons/skills/react-native-1.svg',
      },
      {
        name: 'Htmx',
        iconUrl: '/icons/skills/htmx_logo.1.png',
      },
      {
        name: 'Razor Pages',
        iconUrl: '/icons/skills/dot-net-core-7.svg',
      },
    ],
  },
  {
    type: SkillGroupType.LANGUAGES,
    skills: [
      {
        name: 'JavaScript',
        iconUrl: '/icons/skills/javascript-1.svg',
      },
      {
        name: 'TypeScript',
        iconUrl: '/icons/skills/typescript-2.svg',
      },
      {
        name: 'HTML',
        iconUrl: '/icons/skills/html-1.svg',
      },
      {
        name: 'CSS',
        iconUrl: '/icons/skills/css-3.svg',
      },
      {
        name: 'C#',
        iconUrl: '/icons/skills/c--4.svg',
      },
    ],
  },
  {
    type: SkillGroupType.STYLING,
    skills: [
      {
        name: 'Styled-Components',
        iconUrl: '/icons/skills/styled-components-1.svg',
      },
      {
        name: 'Tailwind',
        iconUrl: '/icons/skills/tailwind-css-2.svg',
      },
      {
        name: 'SASS',
        iconUrl: '/icons/skills/sass-1.svg',
      },
      {
        name: 'Bulma',
        iconUrl: '/icons/skills/bulma.svg',
      },
      {
        name: 'Material UI',
        iconUrl: '/icons/skills/material-ui-1.svg',
      },
      {
        name: 'Radix UI',
        iconUrl: '/icons/skills/radix-ui.svg',
      },
      {
        name: 'Element UI',
        iconUrl: '/icons/skills/element-ui-1.svg',
      },
    ],
  },
  {
    type: SkillGroupType.BACKEND,
    skills: [
      {
        name: '.NET',
        iconUrl: '/icons/skills/dot-net-core-7.svg',
      },
      {
        name: 'Node.js',
        iconUrl: '/icons/skills/nodejs-icon.svg',
      },
      {
        name: 'Express',
        iconUrl: '/icons/skills/expressjs.svg',
      },
      {
        name: 'Sequelize',
        iconUrl: '/icons/skills/sequelize.svg',
      },
      {
        name: 'AdonisJS',
        iconUrl: '/icons/skills/adonisjs.svg',
      },
      {
        name: 'MySQL',
        iconUrl: '/icons/skills/mysql-logo-pure.svg',
      },
      {
        name: 'PostgreSQL',
        iconUrl: '/icons/skills/postgresql.svg',
      },
      {
        name: 'Firebase',
        iconUrl: '/icons/skills/firebase-1.svg',
      },
    ],
  },
  {
    type: SkillGroupType.CLOUD,
    skills: [
      {
        name: 'AWS Lambda',
        iconUrl: '/icons/skills/aws-lambda-1.svg',
      },
      {
        name: 'AWS Amplify',
        iconUrl: '/icons/skills/aws-amplify.svg',
      },
      {
        name: 'JIRA',
        iconUrl: '/icons/skills/jira-1.svg',
      },
      {
        name: 'Azure DevOps',
        iconUrl: '/icons/skills/azure-2.svg',
      },
    ],
  },
  {
    type: SkillGroupType.TOOLS,
    skills: [
      {
        name: 'Git',
        iconUrl: '/icons/skills/git-icon.svg',
      },
      {
        name: 'GitHub',
        iconUrl: '/icons/skills/github-icon-1.svg',
      },
      {
        name: 'NPM',
        iconUrl: '/icons/skills/npm-square-red-1.svg',
      },
      {
        name: 'Figma',
        iconUrl: '/icons/skills/figma-icon.svg',
      },
      {
        name: 'Jest',
        iconUrl: '/icons/skills/jest-2.svg',
      },
    ],
  },
];
