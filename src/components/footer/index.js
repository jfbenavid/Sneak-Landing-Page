import React from 'react'

import SocialMedia from './socialMedia'
import { FooterComponent } from './styles'

const social = {
  gitHub: 'https://github.com/jfbenavid'
}

const Footer = () => (
  <FooterComponent>
    <p>© 2021 - <span>sneak</span> all right reserved</p>
    <SocialMedia {...social} />
  </FooterComponent>
)

export default Footer
