import 'styled-components/native';
interface IPalette {
  main: string;
  contrastText: string;
}
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      [prop: string]: string;
    };
    fonts: {
      [prop: string]: string;
    };
  }
}
