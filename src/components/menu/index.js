import React, { useState } from 'react'
import { Divide as Hamburger } from 'hamburger-react'

import Nav from './nav'
import { MenuComponent } from './styles'

const Menu = ({ withHamburger = true, children }) => {
  const [open, setOpen] = useState(false)

  return (
    <MenuComponent >
      {withHamburger && <Hamburger onToggle={() => setOpen(!open)} />}
      <Nav open={open} >{children}</Nav>
    </MenuComponent>
  )
}

export default Menu
