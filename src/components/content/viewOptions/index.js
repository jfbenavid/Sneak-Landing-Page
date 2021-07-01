import React from 'react'

import Menu from '../../menu'
import { ViewOptionsComponent, ViewsDiv } from './styles'
import { FaBars, FaThLarge } from 'react-icons/fa'

const ViewOptions = () => (
  <ViewOptionsComponent>
    <ViewsDiv>
      <FaThLarge />
      <FaBars />
    </ViewsDiv>
    <Menu withHamburger={false} />
  </ViewOptionsComponent>
)

export default ViewOptions
