import { Component } from 'react';
import { BsFillSearchHeartFill } from 'react-icons/bs';
import { HeaderSearchbar, SearchForm, SearchFormButton, SearchFormButtonInput, Span } from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleNameChange = event => {
    console.log(event.currentTarget.value);
    this.setState({ searchQuery: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.searchQuery.trim() === '') {
      alert('Введите имя покемона.');
      return;
    }

    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  };

  render() {
    return (
      <HeaderSearchbar>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <Span><BsFillSearchHeartFill size='2em' fill='#3f51b5'/></Span>
          </SearchFormButton>
          <SearchFormButtonInput
            type="text"
            name="searchQuery"
            value={this.state.searchQuery}
            onChange={this.handleNameChange}
          />
        </SearchForm>
      </HeaderSearchbar>
    );
  }
}

// export class Searchbar extends Component {
//   state = {
//     query: '',
//     images: [],
//   };

//   handleChange = e => {
//     console.log(e.target.value);
//     this.setState({ query: e.currentTarget.value.toLowerCase() });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     if (this.state.query.trim() === '') {
//       alert('Enter your request');
//     }
//     this.props.onSubmit(this.state.query);
//     this.setState({ query: '' });
//   };

//   render() {
//     const { query } = this.state;
//     return (
//       <header>
//         <form onSubmit={this.handleSubmit}>
//           <button type="submit">
//             <span>Search</span>
//           </button>

//           <input
//             type="text"
//             placeholder="Search images and photos"
//             value={query}
//             onChange={this.handleChange}
//           />
//         </form>
//       </header>
//     );
//   }
// }
