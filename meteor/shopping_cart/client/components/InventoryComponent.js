import React, { Component, PropTypes } from 'react'

export default class Inventory extends Component {
  constructor(props) {
  super(props);
  this.changeHandler = this.changeHandler.bind(this);
}

changeHandler(event) {
  this.props.onChangeQuanity(event);
}

  render() {
    const { inventory, quantity, _id } = this.props;
    let options = [];
     for (let i = 1; i < inventory + 1; i++) {
        options.push(<option key={`inventory_${i}_${_id}`} value={i}>{i}</option>);
     }
      return (
      <div>
        <span>Quantity</span>
        <select  onChange={this.changeHandler} defaultValue={quantity} required>
          {options}
        </select>
      </div>
    )
  }
}

Inventory.propTypes = {
  inventory: PropTypes.number,
  _id: PropTypes.string,
  quantity:  PropTypes.number,
  onChangeQuanity : PropTypes.func
}
