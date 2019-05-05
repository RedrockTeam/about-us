import React from 'react'
import Slider from 'react-slick'
import './index.scss'

export const Index = props => {
  const setting = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: 'max',
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 6000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  }
  
  return (
    <div className={`index page ${props.className}`}>
      <Slider {...setting}>
        <div>
          <img src={require('../../../assets/banner/1.png')} />
        </div>
        <div>
          <img src={require('../../../assets/banner/2.png')} />
        </div>
        <div>
          <img src={require('../../../assets/banner/3.png')} />
        </div>
      </Slider>
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