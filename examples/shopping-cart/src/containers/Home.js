import React from 'react'
// import { Switch, Route } from 'react-router-dom'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import NavComponent from '../components/NavComponent'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Home = () => (
  <div>
      <NavComponent className="row"/>
      <hr/>
      <ProductsContainer className="row"/>
      <hr/>
      <CartContainer className="row"/>
  </div>
)

export default Home
