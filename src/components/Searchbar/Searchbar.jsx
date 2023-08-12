import { Component } from 'react';

export class Searchbar extends Component {
  state = {
    searchQuery: '',
  };
  handlSubmit = e => {
    e.preventDefault();
    if (this.state.searchQuery !== this.props.searchQuery) {
      this.props.onSubmit({
        searchQuery: this.state.searchQuery,
      });
      this.setState({ searchQuery: '' });
    }
  };
  handleChange = ({ target }) => {
    this.setState({
      searchQuery: target.value,
    });
  };
  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handlSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={this.state.searchQuery.trim()}
          />
        </form>
      </header>
    );
  }
}
