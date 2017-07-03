import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import NavContainer from './NavContainer'

const App = () => (

  <div className="container">
    {/* <h2>Shopping Cart Example</h2> */}
    <NavContainer className="row"/>
    <hr/>
    <ProductsContainer className="row"/>
    <hr/>
    <CartContainer className="row"/>
  </div>
)

export default App
