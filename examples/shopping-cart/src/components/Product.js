import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ price, quantity, title, imgurl}) => (
  <div className="panel panel-default">
    <div className="panel-heading">{title}</div>
    <div className="panel-body">
      {title} - &#36;{price}{quantity ? ` x ${quantity}` : null}
      <img src={imgurl} alt="pics"/>
    </div>
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string,
  imgurl: PropTypes.string
}

export default Product
