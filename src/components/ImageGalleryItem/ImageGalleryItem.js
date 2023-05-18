import {ImageGalleryItemLi, ImageGalleryItemImage} from './ImageGalleryItem.styled.'

export const ImageGalleryItem = ({ src, alt, selectImg } ) => {
  return (
    <ImageGalleryItemLi  onClick={() => selectImg(src)}>
      <ImageGalleryItemImage src={src} alt={alt} />
    </ImageGalleryItemLi>


  );
};