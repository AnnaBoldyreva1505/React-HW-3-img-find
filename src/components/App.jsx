import { Component } from 'react';
import { Loader } from './Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { ImageModal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchImg } from '../api';
import { HTTP_ERROR_MSG } from '../constants/constants';
import { AppStyle } from './App.styled';

export class App extends Component {
  state = {
    loading: false,
    images: [],
    page: 1,
    searchQuery: '',
    error: null,
    isModalOpen: false,
    // selectedImg: null,
  };

  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery, images: [], page: 1 });
    console.log(this.state.images.pageURL);
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      try {
        this.setState({ loading: true });
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
    console.log('first');
  };

  // toggleModal = () => {
  //   this.setState(({ isModalOpen }) => ({
  //     isModalOpen: !isModalOpen,
  //   }));
  // };

  selectImg = imgUrl => {
    this.setState({
      selectedImg: imgUrl,
    });
  };

  render() {
    const { loading, images, isModalOpen, selectedImg } = this.state;

    return (
      <AppStyle>
        {selectedImg && (
          <h1>
            IMAGE MODAL <img src={selectedImg} alt="" width='400'/>
          </h1>
        )}
        <Searchbar onSubmit={this.handleFormSubmit} />

        {loading ? (
          <Loader />
        ) : (
          <ImageGallery images={images} selectImg={this.selectImg} />
        )}

        {/* <Button onLoadMore={this.handleLoadMore} page={page} /> */}
        {images.length > 0 && <Button onLoadMore={this.handleLoadMore} />}

        {/* <ImageModal toggleModal={this.toggleModal} isOpen={isModalOpen} /> */}
      </AppStyle>
    );
  }
}
