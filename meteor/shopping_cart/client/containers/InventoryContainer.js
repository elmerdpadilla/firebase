import React, { Component, PropTypes } from 'react'
import { quantityUpdate } from '../api';

export default class Inventory extends Component {
  constructor(props) {
  super(props);
  this.onInventoryChange = this.onInventoryChange.bind(this);
}

onInventoryChange(event){
  quantityUpdate(this.props._id,parseInt(event.target.value))
}
  render() {
    const { inventory, quantity, _id } = this.props;
    let item = [];
     for (let i = 1; i < inventory + 1; i++) {
        item.push(<option key={`inventory_${i}_${_id}`} value={i}>{i}</option>);
     }
      return (
      <div>
        <span>Quantity</span>
        <select onChange={this.onInventoryChange} defaultValue={quantity} required>
          {item}
        </select>
      </div>
    )
  }
}

Inventory.propTypes = {
  inventory: PropTypes.number,
  _id: PropTypes.string,
  quantity:  PropTypes.number
}
