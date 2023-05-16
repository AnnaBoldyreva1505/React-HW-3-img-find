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
    const {isLoading} = this.state
    return (
      <>
      {/* this.state.isLoading ? <Loader /> : <ImageGallery  /> */}
      <ImageGallery  />
      {isLoading && <h1>LOADING!</h1>}
      <Loader />
        <Button />
        <ImageModal />
      </>
    );
  }
}
