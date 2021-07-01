import React, { useEffect, useState } from 'react'

import { unsplashApi } from '../../../util/lib'
import { theme } from '../../../styles/theme'
import Button from '../../button'
import Image from './image'
import { ImageContentComponent } from './styles'

const buildImages = async (page) => {
  const response = await unsplashApi.photos.list({ page })
  return response.response?.results
}

const ImageContent = () => {
  const [images, setImages] = useState([])
  const [page, setPage] = useState(1)
  useEffect(async () => {
    setImages([...images, ...(await buildImages(page))])
  }, [page])

  return (
    <>
      <ImageContentComponent>
        {images.length && images.map(i => (<Image key={i.id} data={i} />))}
      </ImageContentComponent>
      <Button
        color={theme.colors.softPink}
        textColor={theme.colors.background}
        onClick={() => setPage(page + 1)}>
        show me more
      </Button>
    </>
  )
}

export default ImageContent
