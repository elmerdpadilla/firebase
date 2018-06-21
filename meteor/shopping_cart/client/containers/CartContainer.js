import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { CartCollection } from '../../shared/collections/CartCollection';
import CartItem from '../components/CartItemComponent';
import Inventory from '../components/InventoryComponent';
import { Meteor } from 'meteor/meteor';
import { removeFromCart, getCartTotal } from '../api';


class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.onRemoveItem = this.onRemoveItem.bind(this);
    //this.onChangeQuanity = this.onChangeQuanity.bind(this);
    this.state = {
      totalPrice: 0
    }
  }

  /*onChangeQuanity(id, event) {
    CartCollection.update({
      _id: id
    }, {
        $set: {
          quantity: parseInt(event.target.value)
        }
      });
  }*/


  onRemoveItem(product, event) {
    CartCollection.remove({ _id: product._id });
  }

  componentDidMount() {
    let self = this;
    getCartTotal().then(result => {
      self.setState({
        totalPrice: result
      })
    }).catch(error => {
      alert('error')
    });
  }

  componentWillReceiveProps() {
    let self = this;
    getCartTotal().then(result => {
      self.setState({ totalPrice: result })
    }).catch(error => {
      alert('error')
    });
  }

  render() {
    const { products } = this.props;
    {/*let total = 0;
    _.each(products, function (product) {
      total += parseInt(product.quantity * product.price);
    });*/}

    return (
      <div>
        <h2>Your Cart ({products.length})</h2>
        {products.map(product =>
          <div key={product._id}>

            <CartItem
              title={product.title}
              price={product.price}
              key={`cartItem_${product._id}`}
              onRemoveItem={() => this.onRemoveItem(product)}
            />

            <Inventory
              inventory={product.inventory}
              quantity={product.quantity}
              key={`inventory_${product._id}`}
              
              _id={product._id} />
              {/* onChangeQuanity={(event) => this.onChangeQuanity(product._id, event)}*/}
          </div>
        )}
        <span>
          {/*Total: {total}*/}
          Total: {this.state.totalPrice}
        </span>
      </div>
    )
  }
}
export default createContainer(() => {
  return {
    products: CartCollection.find({}).fetch()
  };
}, Cart);
