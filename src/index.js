import React from 'react'
import { render } from 'react-dom'
import { ThemeProvider } from 'styled-components'

import Index from './components'
import GlobalStyles from './styles/global'
import { theme } from './styles/theme'

render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Index />
  </ThemeProvider>,
  document.getElementById('app')
)
