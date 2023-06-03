export type IDescription =
  | {
      name: string;
      startDate: Date;
      isFinished: false;
      activityDescription: string;
    }
  | {
      name: string;
      startDate: Date;
      endDate: Date;
      isFinished: true;
      activityDescription: string;
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
  optionName: string;
  list: IList[];
}

export const carrer: ICarrer[] = [
  {
    optionName: 'My Works',
    list: [
      {
        name: 'KOR Solutions',
        url: '',
        subItems: [
          {
            name: 'Frontend Developer JR',
            description: {
              name: 'Frontend Developer JR',
              startDate: new Date('2023-01-01'),
              isFinished: false,
              activityDescription:
                "I am currently working as a Frontend Developer JR at KOR Solutions, where I am responsible for developing the frontend of the company's products, using ReactJS, NextJS, Typescript, Styled Components, among other technologies.",
            },
          },
          {
            name: 'Frontend Developer Intern',
            description: {
              name: 'Frontend Developer Intern',
              startDate: new Date('2021-10-20'),
              endDate: new Date('2022-12-31'),
              isFinished: true,
              activityDescription:
                "I am currently working as a Frontend Developer JR at KOR Solutions, where I am responsible for developing the frontend of the company's products, using ReactJS, NextJS, Typescript, Styled Components, among other technologies.",
            },
          },
        ],
      },
    ],
  },
  {
    optionName: 'My Studies',
    list: [
      {
        name: 'KOR Solutions',
        url: '',
        subItems: [
          {
            name: 'Frontend Developer JR',
            description: {
              name: 'Frontend Developer JR',
              startDate: new Date('2023-01-01'),
              isFinished: false,
              activityDescription:
                "I am currently working as a Frontend Developer JR at KOR Solutions, where I am responsible for developing the frontend of the company's products, using ReactJS, NextJS, Typescript, Styled Components, among other technologies.",
            },
          },
          {
            name: 'Frontend Developer Intern',
            description: {
              name: 'Frontend Developer Intern',
              startDate: new Date('2021-10-20'),
              endDate: new Date('2022-12-31'),
              isFinished: true,
              activityDescription:
                "I am currently working as a Frontend Developer JR at KOR Solutions, where I am responsible for developing the frontend of the company's products, using ReactJS, NextJS, Typescript, Styled Components, among other technologies.",
            },
          },
        ],
      },
    ],
  },
  {
    optionName: 'My Skills',
    list: [
      {
        name: 'KOR Solutions',
        url: '',
        subItems: [
          {
            name: 'Frontend Developer JR',
            description: {
              name: 'Frontend Developer Intern',
              startDate: new Date('2023-01-01'),
              isFinished: false,
              activityDescription:
                "I am currently working as a Frontend Developer JR at KOR Solutions, where I am responsible for developing the frontend of the company's products, using ReactJS, NextJS, Typescript, Styled Components, among other technologies.",
            },
          },
          {
            name: 'Frontend Developer Intern',
            description: {
              name: 'Frontend Developer Intern',
              startDate: new Date('2021-10-20'),
              endDate: new Date('2022-12-31'),
              isFinished: true,
              activityDescription:
                "I am currently working as a Frontend Developer JR at KOR Solutions, where I am responsible for developing the frontend of the company's products, using ReactJS, NextJS, Typescript, Styled Components, among other technologies.",
            },
          },
        ],
      },
    ],
  },
];
