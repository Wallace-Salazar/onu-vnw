import { useState } from 'react';
import { themes } from '../themes';

const useThemes = () => {
  const defaultTheme = themes.light;
  const [theme, setTheme] = useState(defaultTheme);

  const toggle = () => {
    theme.name === 'light'
      ? setTheme(themes.dark)
      : setTheme(themes.light);
  };

  return [theme, toggle]
};

export default useThemes;