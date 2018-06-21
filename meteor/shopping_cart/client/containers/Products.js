import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import {ProductsCollection} from '../../shared/collections/ProductsCollection';
import Product from  '../components/ProductComponent';
import { Link } from 'react-router';


export default class Products extends React.Component {
   constructor(props) {
   super(props);
 }
  render() {
    return (
      <div>
        <h2> Available Products</h2>
        <ul>
          <li><Link to="/products/books">Books</Link></li>
          <li><Link to="/products/music">Music</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}
