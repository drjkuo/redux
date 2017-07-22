import React from 'react'
import axios from 'axios';
import base64 from 'base-64';
import Product from './Product';

export default class ReviewOrder extends React.Component {

  constructor(props) {
    super(props);
    // var products = [];
    this.state = { nodes: [], orderTotal: 0};

    // const nodes = (
    //   products.map(product =>
    //     <Product
    //       title={product.title}
    //       price={product.price}
    //       quantity={product.quantity}
    //       key={product.id}
    //     />
    //   )
    // );
    // this.componentWillMount=this.componentWillMount.bind(this, this.state.nodes);
    // this.onFormSubmit=this.onFormSubmit.bind(this);
  };

  componentDidMount (products) {
    // var self = this;
    var CART_URL = 'http://stage.api.neolife.com/v1/promote/cart.json?';
    var session = '149b6050-e054-45ba-a5f3-bbdce41eff25';
    let tmpString = 'RetailSession:' + session; //0e1b2984-9981-42f8-8e92-db3e2d86401f';
    console.log('tmpStr!!!!!!!!!', tmpString)
    const url = CART_URL + 'authorization=' + base64.encode(tmpString);

    axios.get(url)
    .then((response) => {
      console.log(response.data);
      var cartItems = response.data.Items;
      // self.setState({ cartItems: response.data.Items});
      // console.log(response.data.Items);
      console.log('self cart', cartItems);
      const tmp = cartItems.map (product =>
        <Product
          title={product.Title}
          price={parseInt(product.Price.replace( /^\D+/g, ''), 10)}
          quantity={parseInt(product.TodaysQuantity, 10)}
          key={product.SKU}
          // self.products.push(tmp);
        />);
      // // self.state.nodes = cartItems.map (product =>
      this.setState({nodes: tmp});
      this.setState({orderTotal: response.data.TotalRetail});
      console.log('self price', this.state.orderTotal);
      // console.log(response.status);
      // console.log(response.statusText);
      // console.log(response.headers);
      // console.log(response.config);
    });
  };

  render () {
    return (
      <div>
        {/*REVIEW ORDER*/}
        <div className="text-center h1">Cart</div>
        <div className="panel panel-info">
          <div className="panel-heading">
            Review Order <div className="pull-right"><small><a className="afix-1" href="#">Edit Cart</a></small></div>
          </div>
          <div className="panel-body">
            <div>{this.state.nodes}</div>
            {/* <div className="form-group">
              <div className="col-sm-3 col-xs-3">
                <img className="img-responsive" src="//c1.staticflickr.com/1/466/19681864394_c332ae87df_t.jpg" />
              </div>
              <div className="col-sm-6 col-xs-6">
                <div className="col-xs-12">Product name</div>
                <div className="col-xs-12"><small>Quantity:<span>1</span></small></div>
              </div>
              <div className="col-sm-3 col-xs-3 text-right">
                <h6><span>$</span>25.00</h6>
              </div>
            </div>
            <div className="form-group"><hr /></div>

            <div className="form-group">
              <div className="col-sm-3 col-xs-3">
                <img className="img-responsive" src="//c1.staticflickr.com/1/466/19681864394_c332ae87df_t.jpg" />
              </div>
              <div className="col-sm-6 col-xs-6">
                <div className="col-xs-12">Product name</div>
                <div className="col-xs-12"><small>Quantity:<span>1</span></small></div>
              </div>
              <div className="col-sm-3 col-xs-3 text-right">
                <h6><span>$</span>25.00</h6>
              </div>
            </div>
            <div className="form-group"><hr /></div>

            <div className="form-group">
              <div className="col-sm-3 col-xs-3">
                <img className="img-responsive" src="//c1.staticflickr.com/1/466/19681864394_c332ae87df_t.jpg" />
              </div>
              <div className="col-sm-6 col-xs-6">
                <div className="col-xs-12">Product name</div>
                <div className="col-xs-12"><small>Quantity:<span>2</span></small></div>
              </div>
              <div className="col-sm-3 col-xs-3 text-right">
                <h6><span>$</span>50.00</h6>
              </div>
            </div> */}
            {/* <div className="form-group"><hr /></div> */}

            {/* <div className="form-group">
              <div className="col-xs-12">
                <strong>Subtotal</strong>
                <div className="pull-right"><span>$</span><span>200.00</span></div>
              </div>
              <div className="col-xs-12">
                <small>Shipping</small>
                <div className="pull-right"><span>-</span></div>
              </div>
            </div> */}

            {/* <div className="form-group"><hr /></div> */}

            <div className="form-group">
              <div className="col-xs-12">
                <strong>Order Total</strong>
                <div className="pull-right"><span>$</span><span>{this.state.orderTotal}</span></div>
              </div>
            </div>

          </div>
        </div>
        {/*REVIEW ORDER END*/}
      </div>
    )
  };
}
