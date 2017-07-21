import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import { Link } from 'react-router-dom'

const Cart  = ({ products, total, onCheckoutClicked }) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map(product =>
      <Product
        title={product.title}
        price={product.price}
        quantity={product.quantity}
        key={product.id}
      />
    )
  ) : (
    <em>Please add some products to cart.</em>
  )

  return (
    <div>
      <div className="text-center h1">Cart</div>
      <div className="panel panel-default">
        <div className="panel-heading">Cart details</div>
        <div className="panel-body">
          <div>{nodes}</div>
          <p>Total: &#36;{total}</p>
          {/* <button onClick={onCheckoutClicked}
            disabled={hasProducts ? '' : 'disabled'}>
            Checkout
          </button> */}

          <Link
            className="btn btn-default"
            role="button"
            to="/payment"
            onClick={onCheckoutClicked}>Checkout</Link>
          </div>
          {/* <li><Link to='/payment'>Payment</Link></li> */}
        </div>
      </div>
    )
  }

  Cart.propTypes = {
    products: PropTypes.array,
    total: PropTypes.string,
    onCheckoutClicked: PropTypes.func
  }

  export default Cart
