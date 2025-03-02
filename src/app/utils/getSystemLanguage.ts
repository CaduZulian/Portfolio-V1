import { languages } from '../constants';

export const getSystemLanguage = () => {
  const localNavigator = typeof navigator !== 'undefined' ? navigator : null;
  const systemLanguage = localNavigator?.language;

  return languages.find((lang) => lang.name === systemLanguage) || languages[0];
};
