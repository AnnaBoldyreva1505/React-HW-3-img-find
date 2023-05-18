import React from 'react'
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryGrid } from './ImageGallery.styled'

export function ImageGallery({images}) {
  return (
    <ImageGalleryGrid>
      {images.map(({ id, webformatURL, tags }) => (
        <ImageGalleryItem
          key={id}
          src={webformatURL}
          alt={tags}
        />
      ))}
    </ImageGalleryGrid>
  )
}


