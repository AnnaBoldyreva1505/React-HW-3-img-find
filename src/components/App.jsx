import { Component } from 'react';
import { Loader } from './Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { ImageModal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchImg } from './constants/api';
import { HTTP_ERROR_MSG } from './constants/constants';
import {AppStyle} from './App.styled'

export class App extends Component {
  state = {
    loading: false,
    images: [],
    page: 1,
    searchQuery: '',
    error: null,
  };

  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery, images: [], page: 1 });
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      try {
        const fetchedImg = await fetchImg(
          this.state.searchQuery,
          this.state.page
        );
        this.setState({ images: fetchedImg });
        console.log(fetchedImg);
      } catch (error) {
        this.setState({ error: HTTP_ERROR_MSG });
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
    console.log("first")
  };

  render() {
    const { loading, images } = this.state;

    return (
      <AppStyle>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {/* this.state.loading ? <Loader /> : <ImageGallery  /> */}
        <ImageGallery images={images} />
        {loading && <Loader />}
        {/* <Button onLoadMore={this.handleLoadMore} page={page} /> */}
        {images.length > 0 && <Button onLoadMore={this.handleLoadMore} />}
        
        <ImageModal />
      </AppStyle>
    );
  }
}
