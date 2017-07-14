import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import NavComponent from '../components/NavComponent'

const App = () => (

  <div className="container">
    {/* <h2>Shopping Cart Example</h2> */}
    <NavComponent className="row"/>
    <hr/>
    <ProductsContainer className="row"/>
    <hr/>
    <CartContainer className="row"/>
  </div>
)

export default App
