import { createGlobalStyle } from 'styled-components';

import font, { Colors } from './defaults';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0
  }

  html, body, #root {
    width: 100%;
    height: 100%;
    background: ${Colors.white};
    color: ${Colors.text};
  }

  body, input, button {
    ${font}
  }

  body { -webkit-font-smoothing: antialiased; }

  a { text-decoration: none; color: ${Colors.text}}
  ul { list-style: none; }

  img, svg { width: 100% }
`;
