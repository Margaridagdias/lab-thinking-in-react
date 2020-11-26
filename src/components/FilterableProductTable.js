import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends React.Component {
  state = {
    products: this.props.products,
    filteredProducts: this.props.products
  };

  handleFilterProducts = (query) => {
    
    let visibleProducts = 
    [...this.state.products].filter((product) => {
      return product.name.toLowerCase().includes(query.toLowerCase());
    });

    this.setState({
      filteredProducts: visibleProducts,
    });
  };

  render() {
    return (
      <div>
        <SearchBar onFilter={this.handleFilterProducts} />
        <ProductTable filteredProducts={this.state.filteredProducts} />
      </div>
    );
  }
}

export default FilterableProductTable;
