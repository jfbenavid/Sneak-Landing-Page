import React from 'react'

import { ButtonComponent } from './styles'

const Button = ({ textColor, color, isActive = false, children }) => (
  <ButtonComponent isActive={isActive} textColor={textColor} color={color}>
    {children}
  </ButtonComponent>
)

export default Button
