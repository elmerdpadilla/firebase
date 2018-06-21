import { Meteor } from 'meteor/meteor';
// import {Products} from '../shared/collections/Products';
import CartCollection from '../shared/collections/CartCollection';
//import { check } from 'meteor/check';
import productsData from './insertData';



Meteor.startup(() => {

  /*
  * sample data
  *
  */
  productsData();
  

});
