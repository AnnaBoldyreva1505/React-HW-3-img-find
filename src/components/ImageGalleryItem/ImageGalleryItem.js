import { Component } from 'react';
import PropTypes from 'prop-types';

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
        {isModalOpen && (
          <ImageModal
            imgURL={src}
            alt={alt}
            isOpen={isModalOpen}
            onClose={this.closeModal}
          />
        )}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  isModalOpen: PropTypes.bool,
  src: PropTypes.string,
  alt: PropTypes.string,
  openModal: PropTypes.func,
  closeModal: PropTypes.func,
};
