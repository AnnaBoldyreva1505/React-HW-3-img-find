import { Component } from 'react';
import { Loader } from './Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery'
import { Button } from './Button/Button';
import { ImageModal } from './Modal/Modal';

export class App extends Component {
  state = {
    isLoading: false,
  };

  render() {
    return (
      <>
      {/* this.state.isLoading ? <Loader /> : <ImageGallery  /> */}
      <ImageGallery  />
      <Loader />
        <Button />
        <ImageModal />
      </>
    );
  }
}
