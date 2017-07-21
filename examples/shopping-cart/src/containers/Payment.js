import React from 'react'
// import styles from '../css/payment.css';
import CreditCardInfo from '../components/CreditCardInfo'
import ShippingInfo from '../components/ShippingInfo'
import ReviewOrder from '../components/ReviewOrder'
// import CartContainer from './CartContainer'
// import axios from 'axios';
// import base64 from 'base-64';

// const Payment = () => {
export default class Payment extends React.Component {
  // constructor(props) {
  //   super(props);
  //
  //   this.state = { cartItems: ''};
  //
  //   // this.onInputChange=this.onInputChange.bind(this);
  //   // this.onFormSubmit=this.onFormSubmit.bind(this);
  // }
  //
  // componentDidMount () {
  //   var self = this;
  //   var CART_URL = 'http://stage.api.neolife.com/v1/promote/cart.json?';
  //   var session = '149b6050-e054-45ba-a5f3-bbdce41eff25';
  //   let tmpString = 'RetailSession:' + session; //0e1b2984-9981-42f8-8e92-db3e2d86401f';
  //   console.log('tmpStr!!!!!!!!!', tmpString)
  //   const url = CART_URL + 'authorization=' + base64.encode(tmpString);
  //
  //   axios.get(url)
  //   .then(function(response) {
  //     console.log(response.data);
  //     self.setState({ cartItems: response.data});
  //     // console.log(response.status);
  //     // console.log(response.statusText);
  //     // console.log(response.headers);
  //     // console.log(response.config);
  //   });
  // };


  render () {
    return (
      <div>
        <div className="container wrapper styles">
          <div className="row cart-head">
            <div className="container">
              <div className="row">
                <p />
              </div>
            </div>
            {/* <div className="row">
            <div style={{display: 'table', margin: 'auto'}}>
            <span className="step step_complete"> <a href="#" className="check-bc">Cart</a> <span className="step_line step_complete">&nbsp;</span> <span className="step_line backline">&nbsp;</span> </span>
            <span className="step step_complete"> <a href="#" className="check-bc">Checkout</a> <span className="step_line ">&nbsp;</span> <span className="step_line step_complete">&nbsp;</span> </span>
            <span className="step_thankyou check-bc step_complete">Thank you</span>
            </div>
            </div> */}
      </div>
    </div>

    <div className="row cart-body">
      <form className="form-horizontal" method="post" action>
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 col-md-push-6 col-sm-push-6">
          <ReviewOrder />
          {/* <CartContainer className="row"/> */}
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 col-md-pull-6 col-sm-pull-6">
          <ShippingInfo />

          <CreditCardInfo />
          {/* <p>{this.state.cartItems.TotalRetail}</p> */}
        </div>
      </form>
    </div>

  </div>
);
}
}
