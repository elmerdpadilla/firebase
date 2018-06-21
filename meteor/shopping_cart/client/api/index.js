import { Meteor } from 'meteor/meteor';

export const addToCart = (product) => {
  Meteor.call('cartInsert', product);
};

export const getCartTotal = () => {
    return new Promise((resolve, reject) => {
      Meteor.call('cartTotal', (error, data) => {
        if (error) {
          reject(error)
        }
        if(!data[0]){
          resolve(0)
        }
        resolve(data[0].totalPrice)
      })
    });
};

export const removeFromCart =(id) => {
     Meteor.call('cartRemove', id);
};

export const quantityUpdate =(id, value) => {
  Meteor.call('cartUpdate', id, value)
};
