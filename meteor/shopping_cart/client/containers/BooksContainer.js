import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { ProductsCollection } from '../../shared/collections/ProductsCollection';
import { CartCollection } from '../../shared/collections/CartCollection';
import Product from '../components/ProductComponent';
import { addToCart } from '../api';

class Books extends React.Component {
  constructor(props) {
    super(props);
    this.onAddToCart = this.onAddToCart.bind(this);
  }
  onAddToCart(product) {
    /*debugger;
    CartCollection.insert({
      'title': product.title,
      'price': product.price,
      'inventory': product.inventory,
      'quantity': 1
    });*/
    addToCart(product);
    alert(product.title + ' added to your cart')
  }

  render() {
    const { products } = this.props
    return (
      <div>
        <h2>Books</h2>
        {products.map(product =>
          <Product
            title={product.title}
            price={product.price}
            inventory={product.inventory}
            key={product._id}
            onAddToCart={() => this.onAddToCart(product)}
          />
        )}
      </div>
    )
  }
}
export default createContainer(() => {
  return {
    products: ProductsCollection.find({ department: 'books' }).fetch()
  };
}, Books);
