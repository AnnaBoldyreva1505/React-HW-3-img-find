import React from 'react'
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryGrid } from './ImageGallery.styled'

export function ImageGallery({images, selectImg}) {
  return (
    <ImageGalleryGrid>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          src={webformatURL}
          alt={tags}
          largeImageURL={largeImageURL}
          selectImg={selectImg}
        />
      ))}
    </ImageGalleryGrid>
  )
}


