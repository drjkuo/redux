import React from 'react'

const CreditCardInfo = () => (
  <div>
    {/*CREDIT CART PAYMENT*/}
    <div className="panel panel-info">
      <div className="panel-heading"><span><i className="glyphicon glyphicon-lock" /></span> Secure Payment</div>
      <div className="panel-body">
        <div className="form-group">
          <div className="col-md-12"><strong>Card Type:</strong></div>
          <div className="col-md-12">
            <select id="CreditCardType" name="CreditCardType" className="form-control">
              <option value={5}>Visa</option>
              <option value={6}>MasterCard</option>
              <option value={7}>American Express</option>
              <option value={8}>Discover</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <div className="col-md-12"><strong>Credit Card Number:</strong></div>
          <div className="col-md-12"><input type="text" className="form-control" name="car_number" placeholder="" /></div>
        </div>
        <div className="form-group">
          <div className="col-md-12"><strong>Card CVV:</strong></div>
          <div className="col-md-12"><input type="text" className="form-control" name="car_code" placeholder="" /></div>
        </div>
        <div className="form-group">
          <div className="col-md-12">
            <strong>Expiration Date</strong>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <select className="form-control" name>
              <option value>Month</option>
              <option value={1}>01</option>
              <option value={2}>02</option>
              <option value={3}>03</option>
              <option value={4}>04</option>
              <option value={5}>05</option>
              <option value={6}>06</option>
              <option value={7}>07</option>
              <option value={8}>08</option>
              <option value={9}>09</option>
              <option value={10}>10</option>
              <option value={11}>11</option>
              <option value={12}>12</option>
            </select>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <select className="form-control" name>
              <option value>Year</option>
              <option value={2015}>2015</option>
              <option value={2016}>2016</option>
              <option value={2017}>2017</option>
              <option value={2018}>2018</option>
              <option value={2019}>2019</option>
              <option value={2020}>2020</option>
              <option value={2021}>2021</option>
              <option value={2022}>2022</option>
              <option value={2023}>2023</option>
              <option value={2024}>2024</option>
              <option value={2025}>2025</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          {/* <div className="col-md-12">
            <span>Pay secure using your credit card.</span>
          </div>
          <div className="col-md-12">
            <ul className="cards">
              <li className="visa hand">Visa</li>
              <li className="mastercard hand">MasterCard</li>
              <li className="amex hand">Amex</li>
            </ul>
            <div className="clearfix" />
          </div> */}
        </div>
        <div className="form-group">
          <div className="col-md-6 col-sm-6 col-xs-12">
            <button type="submit" className="btn btn-primary btn-submit-fix">Place Order</button>
          </div>
        </div>
      </div>
    </div>
    {/*CREDIT CART PAYMENT END*/}
  </div>
)



export default CreditCardInfo
