import { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Loader } from './Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchImg } from '../api';
import { HTTP_ERROR_MSG } from '../constants/constants';
import { AppStyle } from './App.styled';

export class App extends Component {
  state = {
    isLoading: false,
    images: [],
    page: 1,
    searchQuery: '',
    error: null,
    totalHits: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery, page } = this.state;
    if (prevState.searchQuery !== searchQuery || prevState.page !== page) {
      this.getImg(searchQuery, page);
    }
  }

  getImg = async (searchQuery, page) => {
    this.setState({ isLoading: true });
    if (!searchQuery) {
      return;
    }
    try {
      const { hits, totalHits } = await fetchImg(searchQuery, page);

      if (hits.length === 0) {
        toast.error(
          'Sorry, there are no images matching your search query. Please try again.'
        );
        return;
      }

      if (page === 1) {
        toast.success(`Hooray! We found ${totalHits} images!`);
      }

      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        totalHits,
      }));
    } catch (error) {
      this.setState({ error: HTTP_ERROR_MSG });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery, images: [], page: 1 });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { isLoading, images, totalHits } = this.state;

    return (
      <AppStyle>
        
        <Searchbar onSubmit={this.handleFormSubmit} />
        {isLoading && <Loader />}
        <ImageGallery images={images} />

        {!isLoading &&
          images.length !== 0 &&
          images.length >= 12 &&
          images.length < totalHits && (
            <Button onLoadMore={this.handleLoadMore} />
          )}
          <Toaster />
      </AppStyle>
    );
  }
}
