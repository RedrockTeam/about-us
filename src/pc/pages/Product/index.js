import React, { useContext } from 'react'
import Slider from 'react-slick'
import { Context } from '../../Context'
import './index.scss'

export const Product = props => {
  const { title, product } = useContext(Context)
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  }
  
  return (
    <div className={`product page ${props.className}`}>
      <div className="container">
        <p className="title">{title.product}</p>
        <div className="inner-container">
          <p className="intro" dangerouslySetInnerHTML={{__html: product.intro}}></p>
          <div className="carousel">
            <Slider {...settings}>
              <div>
                <div className="card">
                  <div className="inner-card">
                  </div>
                </div>
              </div>
              <div>
                <div className="card">
                  <div className="inner-card">
                  </div>
                </div>
              </div>
              <div>
                <div className="card">
                  <div className="inner-card">
                  </div>
                </div>
              </div>
              <div>
                <div className="card">
                  <div className="inner-card">
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}

const PrevArrow = props => {
  const { onClick } = props
  return (
    <div
      className="prev button"
      onClick={onClick}
    />
  )
}

const NextArrow = props => {
  const { onClick } = props
  return (
    <div
      className="next button"
      onClick={onClick}
    />
  )
}