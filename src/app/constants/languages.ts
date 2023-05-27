// icons
import BrazilianIcon from '@/app/assets/icons/brazilian-icon.svg';
import UnitedStatesIcon from '@/app/assets/icons/united-states-icon.svg';

export interface ILanguages {
  name: 'pt' | 'en';
  icon: string;
}

export const languages: ILanguages[] = [
  { name: 'pt', icon: BrazilianIcon },
  { name: 'en', icon: UnitedStatesIcon },
];
