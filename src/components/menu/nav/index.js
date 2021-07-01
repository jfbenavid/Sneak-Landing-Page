import React from 'react'

import Button from '../../button'
import { Ul } from './styles'

const Nav = ({ open, children }) => (
  <Ul open={open}>
    <li><Button isActive={true}>all</Button></li>
    <li><Button>branding</Button></li>
    <li><Button>web</Button></li>
    <li><Button>photography</Button></li>
    <li><Button>app</Button></li>
    {children && <li><Button>{children}</Button></li>}
  </Ul>
)

export default Nav
