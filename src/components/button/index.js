import React from 'react'

import { ButtonComponent } from './styles'

const Button = ({ textColor, color, isActive = false, onClick, children }) => (
  <ButtonComponent isActive={isActive} textColor={textColor} color={color} onClick={onClick}>
    {children}
  </ButtonComponent>
)

export default Button
