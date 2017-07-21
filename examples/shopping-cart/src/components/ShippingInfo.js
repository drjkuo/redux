import React from 'react'

const ShippingInfo = () => (
<div>
{/* <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 col-md-pull-6 col-sm-pull-6"> */}
  {/*SHIPPING METHOD*/}
  <div className="text-center h1">Shipping</div>
  <div className="panel panel-info">
    <div className="panel-heading">Shipping Info</div>
    <div className="panel-body">
      {/* <div className="form-group">
        <div className="col-md-12">
          <h4>Shipping Info</h4>
        </div>
      </div> */}
      {/* <div className="form-group">
        <div className="col-md-12"><strong>Country:</strong></div>
        <div className="col-md-12">
          <input type="text" className="form-control" name="country" placeholder="US" />
        </div>
      </div> */}
      <div className="form-group">
        <div className="col-md-6 col-xs-12">
          <strong>First Name:</strong>
          <input type="text" name="first_name" className="form-control" placeholder="" />
        </div>
        <div className="span1" />
        <div className="col-md-6 col-xs-12">
          <strong>Last Name:</strong>
          <input type="text" name="last_name" className="form-control" placeholder="" />
        </div>
      </div>
      <div className="form-group">
        <div className="col-md-12"><strong>Address:</strong></div>
        <div className="col-md-12">
          <input type="text" name="address" className="form-control" placeholder="" />
        </div>
      </div>
      <div className="form-group">
        <div className="col-md-12"><strong>City:</strong></div>
        <div className="col-md-12">
          <input type="text" name="city" className="form-control" placeholder="" />
        </div>
      </div>
      <div className="form-group">
        <div className="col-md-12"><strong>State:</strong></div>
        <div className="col-md-12">
          <input type="text" name="state" className="form-control" placeholder="" />
        </div>
      </div>
      <div className="form-group">
        <div className="col-md-12"><strong>Zip / Postal Code:</strong></div>
        <div className="col-md-12">
          <input type="text" name="zip_code" className="form-control" placeholder="" />
        </div>
      </div>
      <div className="form-group">
        <div className="col-md-12"><strong>Phone Number:</strong></div>
        <div className="col-md-12"><input type="text" name="phone_number" className="form-control" placeholder="" /></div>
      </div>
      <div className="form-group">
        <div className="col-md-12"><strong>Email Address:</strong></div>
        <div className="col-md-12"><input type="text" name="email_address" className="form-control" placeholder="" /></div>
      </div>
    </div>
  </div>
  {/*SHIPPING INFO END*/}
</div>
)

export default ShippingInfo
