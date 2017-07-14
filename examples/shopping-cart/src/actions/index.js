import shop from '../api/shop'
import * as types from '../constants/ActionTypes'
var querystring = require('querystring');
import axios from 'axios';
import base64 from 'base-64';


const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products: products
})

export const getAllProducts = () => dispatch => {
  shop.getProducts(products => {
    dispatch(receiveProducts(products))
  })
}

const addToCartUnsafe = productId => ({
  type: types.ADD_TO_CART,
  productId
})

export const addToCart = productId => (dispatch, getState) => {
  if (getState().products.byId[productId].inventory > 0) {
    dispatch(addToCartUnsafe(productId))
  }
}

export const checkout = products => (dispatch, getState) => {
  const { cart } = getState()

  dispatch({
    type: types.CHECKOUT_REQUEST
  })
  // shop.buyProducts(products, () => {
  //   dispatch({
  //     type: types.CHECKOUT_SUCCESS,
  //     cart
  //   })
  //   // Replace the line above with line below to rollback on failure:
  //   // dispatch({ type: types.CHECKOUT_FAILURE, cart })
  // })
  // buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
  shop.buyProducts(products,
    function() {
      // const SESSION_URL = 'http://stage.api.neolife.com/v1/auth/session.json';
      const CART_URL = 'http://stage.api.neolife.com/v1/promote/update.json?';
      const url = CART_URL;

      var username = 'memberusa';
      var session = '8b3d4fe7-4c4d-4403-8087-82f1cd324a98';
      var authEncoded = base64.encode(username + ':' + session);
      console.log('cart!!!!!', cart.quantityById);

      var items = [];
      for (var i in cart.quantityById) {
        items.push({
          "SKU": i,
          "Quantity": cart.quantityById[i],
          "Autoship": true
        })
      }
      console.log('items!!!!!', items);

      // var items = [{
      //   "SKU": "8100",
      //   "Quantity": 13,
      //   "Autoship": true
      // }];
      return axios.post(url,
        querystring.stringify({ action: 'append', items: JSON.stringify(items), authorization: authEncoded})
      )
      .then(function(response) {
        console.log(response.data);
        dispatch({
          type: types.CHECKOUT_SUCCESS,
          cart
        })
      })
    })


  }
