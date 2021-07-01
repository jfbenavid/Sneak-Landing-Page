import React from 'react'

import { ContentComponent } from './styles'
import ViewOptions from './viewOptions'

const Content = ({ children }) => {
  return (
    <ContentComponent>
      <ViewOptions/>
    </ContentComponent>
  )
}

export default Content
