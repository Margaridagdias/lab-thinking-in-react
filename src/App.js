import React from 'react';
import data from './data.json'
import './App.css';
import FilterableProductTable from './components/FilterableProductTable';



class App extends React.Component {
  state = {
    products: data.data
  }

  render() {
  return (
    <div className="App">
    <h1>IronStore</h1>
      <FilterableProductTable products={ this.state.products } />

      
    </div>
  );
  }
}

export default App;
