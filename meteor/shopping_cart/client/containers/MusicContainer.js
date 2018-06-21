import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { ProductsCollection } from '../../shared/collections/ProductsCollection';
import Product from '../components/ProductComponent';
import { CartCollection } from '../../shared/collections/CartCollection';
import { addToCart } from '../api';

class Music extends React.Component {
  constructor(props) {
    super(props);
    this.onAddToCart = this.onAddToCart.bind(this);
  }
  onAddToCart(product) {
    /*CartCollection.insert({
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
        <h2>Music</h2>
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
    products: ProductsCollection.find({ department: 'music' }).fetch()
  };
}, Music);
