import React from 'react'

import { SectionComponent } from './styles'

const Banner = ({ children }) => (
  <SectionComponent>
    <h1>explore beyond horizon</h1>
    <h3>Aliqua tempor dolore dolore nostrud elit magna eiusmod.</h3>
    {children}
  </SectionComponent>
)

export default Banner
