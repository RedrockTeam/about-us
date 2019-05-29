import React from 'react'
import {
  Carousel,
  Aboutus,
  Product,
  Destination,
  Department,
  Joinus,
  Footer
} from './components'
import "./scss/normalize.scss"
import "./scss/global.scss"

export const App = () => {

  return (
    <>
      <Carousel />
      <Aboutus />
      <Product />
      <Department />
      <Destination />
      <Joinus />
      <Footer />
    </>
  )
}