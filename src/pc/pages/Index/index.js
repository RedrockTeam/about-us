import React, { useContext } from 'react'
import { Context } from "../../Context"
import Slider from 'react-slick'
import './index.scss'

export const Index = props => {
  const { carousel } = useContext(Context)

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
        {
          carousel.map((e, i) => {
            return (
              <div>
                <img src={e} key={i} alt="" />
              </div>
            )
          })
        }
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