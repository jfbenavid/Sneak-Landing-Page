import React from 'react'
import { BiSearch } from 'react-icons/bi'

import Logo from './logo'
import Menu from '../menu'
import { HeaderComponent } from './styles'

const Header = props => (
  <HeaderComponent>
    <Logo />
    <Menu><BiSearch /></Menu>
  </HeaderComponent>
)

export default Header
