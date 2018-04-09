import React, { Component, PropTypes } from 'react'

export default class CartItem extends Component {
  render() {
    const { title, price, onRemoveItem } = this.props
      return (
      <div>
        <span>{title}</span>
        <span>Price: {price}</span>
        <button onClick={onRemoveItem}>
          Remove
        </button>
      </div>
    )
  }
}

CartItem.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  onRemoveItem : PropTypes.func

}
