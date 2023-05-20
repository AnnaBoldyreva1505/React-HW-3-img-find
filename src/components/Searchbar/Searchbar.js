import { Component } from 'react';
import PropTypes from 'prop-types';
import { BsFillSearchHeartFill } from 'react-icons/bs';
import { HeaderSearchbar, SearchForm, SearchFormButton, SearchFormButtonInput, Span } from './Searchbar.styled';
import toast from 'react-hot-toast';

export class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  

  handleNameChange = event => {
 
    this.setState({ searchQuery: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.searchQuery.trim() === '') {
      toast.error(
        'Enter your requests'
      );
      return;
    }

    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  };

  render() {

    const {searchQuery} = this.state

    return (
      <HeaderSearchbar>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <Span><BsFillSearchHeartFill size='2em' fill='#3f51b5'/></Span>
          </SearchFormButton>
          <SearchFormButtonInput
            type="text"
            name="searchQuery"
            value={searchQuery}
            onChange={this.handleNameChange}
            placeholder='Search images and photos'
          />
        </SearchForm>
      </HeaderSearchbar>
    );
  }
}

Searchbar.propTypes = {
  searchQuery: PropTypes.string,
  onSubmit: PropTypes.func,
}