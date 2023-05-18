import { Component } from 'react';
import {
  ImageGalleryItemLi,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled.';
import { ImageModal } from '../Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = e => {
    // e.stopPropagation();
    this.setState({ isModalOpen: false });
  };

  render() {
    const { src, alt } = this.props;
    const { isModalOpen } = this.state;

    return (
      <>
        <ImageGalleryItemLi onClick={this.openModal}>
          <ImageGalleryItemImage src={src} alt={alt} />
        </ImageGalleryItemLi>
        {isModalOpen && <ImageModal imgURL={src} alt={alt} isOpen={isModalOpen} onClose={this.closeModal}/>}
      </>
    );
  }
}
