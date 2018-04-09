import React, { PropTypes } from 'react'

export default class Product extends React.Component {
  render() {
    const { price, inventory, title, onAddToCart } = this.props;
    return (
      <div>
        <span> {title} - &#36;{price} {inventory ? `Current inventory ${inventory}` : null} </span>
        <button onClick={onAddToCart}>
          Add To Cart
        </button>
      </div>
    )
  }
}

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string,
  onAddToCart: PropTypes.func
}
