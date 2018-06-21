import { Mongo } from 'meteor/mongo';

export const CartCollection = new Mongo.Collection('cart');

if (Meteor.isServer) {
    Meteor.methods({
      'cartInsert' (product) {
        console.log('bbbb');
        CartCollection.insert({
          'title': product.title,
          'price': product.price,
          'inventory': product.inventory,
          'quantity': 1
        });
      },

      'cartRemove' (id) {
        CartCollection.remove({
          _id: id
        });
      },

      'cartUpdate' (id, value) {
        CartCollection.update({ _id: id },
          {
            $set: {
              quantity: value
            }
          });
      },

      'cartTotal' () {
        let total = CartCollection.aggregate([
          { $project: { "priceByquantity": { $multiply: ["$price", "$quantity"] } } },
          { $group: { "_id": "null", "totalPrice": { $sum: "$priceByquantity" } } }
        ]);
        return total;
      }
    });
  }
