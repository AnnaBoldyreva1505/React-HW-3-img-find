import { Component } from 'react';


export  class Searchbar extends Component {
  state = {
    pokemonName: '',
  };

  handleNameChange = event => {
    console.log(event.currentTarget.value)
    this.setState({ pokemonName: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.pokemonName.trim() === '') {
      alert('Введите имя покемона.');
    }

    this.props.onSubmit(this.state.pokemonName);
    this.setState({ pokemonName: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="pokemonName"
          value={this.state.pokemonName}
          onChange={this.handleNameChange}
        />
        <button type="submit">
          Найти
        </button>
      </form>
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
