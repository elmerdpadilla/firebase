import { Meteor } from 'meteor/meteor';
// import {Products} from '../shared/collections/Products';
import productsData from './insertData';
import { check } from 'meteor/check';


Meteor.startup(() => {

  /*
  * sample data
  *
  */
  productsData();

  Meteor.methods({
    cartInsert: function (product) {
      CartCollection.insert({
        'title': product.title,
        'price': product.price,
        'inventory': product.inventory,
        'quantity': 1
      });
    },

    cartRemove: function (id) {
      CartCollection.remove({
        _id: id
      });
    },

    cartUpdate: function (id, value) {
      CartCollection.update({ _id: id },
        {
          $set: {
            quantity: value
          }
        });
    },

    cartTotal: function() {
      let total = CartCollection.aggregate([
          { $project: {"priceByquantity":{ $multiply: [ "$price", "$quantity" ] } }},
          { $group: { "_id": "null", "totalPrice": { $sum: "$priceByquantity" } } }
          ]);
       return total;
   }
  });

});
