import React from 'react'

import { ContentComponent } from './styles'
import ViewOptions from './viewOptions'
import ImageContent from './imageContent'

const Content = ({ children }) => {
  return (
    <ContentComponent>
      <ViewOptions/>
      <ImageContent />
    </ContentComponent>
  )
}

export default Content
