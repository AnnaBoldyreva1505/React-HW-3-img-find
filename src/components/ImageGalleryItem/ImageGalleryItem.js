import {ImageGalleryItemLi, ImageGalleryItemImage} from './ImageGalleryItem.styled.'

export const ImageGalleryItem = ({ src, alt, largeImageURL }) => {
  return (
    <ImageGalleryItemLi>
      <ImageGalleryItemImage src={src} alt={alt} />
    </ImageGalleryItemLi>
  );
};