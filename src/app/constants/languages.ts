// icons
import BrazilianIcon from '../../../public/icons/brazilian-icon.svg';
import UnitedStatesIcon from '../../../public/icons/united-states-icon.svg';

export enum LanguagesEnum {
  PT_BR = 'pt-BR',
  EN_US = 'en-US',
}

export interface ILanguages {
  name: LanguagesEnum;
  icon: string;
}

export const languages: ILanguages[] = [
  {
    name: LanguagesEnum.PT_BR,
    icon: BrazilianIcon,
  },
  {
    name: LanguagesEnum.EN_US,
    icon: UnitedStatesIcon,
  },
];
