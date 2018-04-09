import React from 'react';
import Products from  './ProductsContainer';
import Cart from  './CartContainer';

class App extends React.Component {
  render() {
    return (
      <div>
        <h2>Store</h2>
        <Products/>
        <Cart/>
      </div>
    )
  }
}
export default App;
