import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import {CartCollection} from '../../shared/collections/CartCollection';
import CartItem from  '../components/CartItemComponent';
import Inventory from  '../components/InventoryComponent';

class Cart extends React.Component {
   constructor(props) {
   super(props);
   this.onRemoveItem = this.onRemoveItem.bind(this);
   this.onChangeQuanity = this.onChangeQuanity.bind(this);
 }

 onChangeQuanity(id, event) {
     CartCollection.update({
     _id: id
   }, {
     $set: {
       quantity: parseInt(event.target.value)
     }
   });
  }

  onRemoveItem(product, event){
    CartCollection.remove({_id:product._id });
  }

  render() {
    const { products } = this.props;
    let total = 0;
    _.each(products, function(product) {
         total += parseInt(product.quantity * product.price);
    });
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
              onChangeQuanity={(event) => this.onChangeQuanity(product._id, event)}
              _id = {product._id}/>

          </div>
        )}
        <span>
          Total: {total}
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
