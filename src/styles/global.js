import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: ${p => p.theme.fonts.principal};
    letter-spacing: 2px;
    color: ${p => p.theme.colors.black};
    background-color: ${p => p.theme.colors.background};
    font-size: 10px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

export default GlobalStyles
