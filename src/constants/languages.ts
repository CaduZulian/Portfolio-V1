// icons
import BrazilianIcon from '@/assets/icons/brazilian-icon.svg';
import UnitedStatesIcon from '@/assets/icons/united-states-icon.svg';

export interface ILanguages {
  name: 'pt' | 'en';
  icon: string;
}

export const languages: ILanguages[] = [
  { name: 'pt', icon: BrazilianIcon },
  { name: 'en', icon: UnitedStatesIcon },
];
