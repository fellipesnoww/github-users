import 'styled-components';
import {APP_THEME} from './theme';

//Sobrescreve o tipo do tema do styled components

declare module 'styled-components' {
  type ThemeType = typeof APP_THEME;
  export interface DefaultTheme extends ThemeType {}
}
