import React from 'react'

import { LogoComponent, IconBackgroundComponent, IconFilledComponent, IconNonFilledComponent } from './styles'

const Logo = () => (
  <LogoComponent>
    <IconBackgroundComponent>
      <IconFilledComponent />
      <IconNonFilledComponent />
    </IconBackgroundComponent>
    <div>
      <h4>
        sneak
      </h4>
      <span>creative portfolio</span>
    </div>
  </LogoComponent>
)

export default Logo
