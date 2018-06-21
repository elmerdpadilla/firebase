import React from 'react';
//import Products from  './ProductsContainer';
//import Cart from  './CartContainer';
import { Link } from 'react-router';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Store</h2>
        {/*<Products/>
        <Cart/>*/}
        <ul>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}
export default App;
