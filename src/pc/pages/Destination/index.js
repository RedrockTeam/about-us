import React, { useContext } from 'react'
import Slider from 'react-slick'
import { Context } from '../../Context'
import './index.scss'

export const Destination = props => {
  const { title } = useContext(Context)
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
    <div className={`destination page ${props.className}`}>
      <div className="container">
        <p className="title">{title.destination}</p>
        <div className="carousel">
          <Slider {...settings}>
            {
              [...new Array(5)].map(() => (
                <div>
                  <div className="card">
                    <div className="row">1</div>
                    <div className="row">2</div>
                    <div className="row">3</div>
                    <div className="row">3</div>
                    <div className="row">3</div>
                    <div className="row">3</div>
                    <div className="row">3</div>
                    <div className="row">3</div>
                    <div className="row">3</div>
                    <div className="row">3</div>
                    <div className="row">3</div>
                    <div className="row">3</div>
                  </div>
                </div>
              ))
            }
          </Slider>
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