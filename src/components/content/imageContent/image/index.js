import React from 'react'

import { Figure } from './styles'

const Image = ({ data }) => {
  return (
    <Figure>
      <img src={data.urls.regular} alt={data.alt_description} />
    </Figure>
  )
}

export default Image
