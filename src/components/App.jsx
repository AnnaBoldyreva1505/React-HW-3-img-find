import { Component } from 'react';
import { Loader } from './Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { ImageModal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchImg } from './Constants/api';
import { HTTP_ERROR_MSG } from './Constants/constants';

export class App extends Component {
  state = {
    isLoading: false,
    images: [],
    page: 1,
    query: '',
    pokemonName: '',
  };

  handleFormSubmit = pokemonName => {
    this.setState({ pokemonName });

  };

  // async componentDidUpdate() {
  //   try {
  //     this.setState({ loading: true, error: null });
  //     const fetchedImg = await fetchImg();
  //     console.log(fetchedImg)
  //     this.setState({ images: fetchedImg });
  //   } catch (error) {
  //     this.setState({ error: HTTP_ERROR_MSG });
  //   } finally {
  //     this.setState({ loading: false });
  //   }
  // }


  render() {
    const { isLoading } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit}/>
        {/* this.state.isLoading ? <Loader /> : <ImageGallery  /> */}
        <ImageGallery />
        {isLoading && <Loader />}
        <Button />
        <ImageModal />
      </>
    );
  }
}
