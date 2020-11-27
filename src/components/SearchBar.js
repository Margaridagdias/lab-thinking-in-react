import React from 'react';

class SearchBar extends React.Component {
  state = {
    searchQuery: '',
    inStock: true,
  };

  handleOnchange = (event) => {
    let { value, name, type } = event.target;
    if (type === 'checkbox') {
      value = event.target.checked;
    }

    this.setState(
      {
        [name]: value,
      },
      () => {
        this.props.onFilter(this.state);
      }
    );
  };

  render() {
    return (
      <form>
        <input
          type="text"
          name="searchQuery"
          value={this.state.searchQuery}
          onChange={this.handleOnchange}
        />

        <input
          type="checkbox"
          name="inStock"
          value={this.state.inStock}
          onChange={this.handleOnchange}
        />
      </form>
    );
  }
}

export default SearchBar;
