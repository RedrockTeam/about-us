import React, { useContext } from 'react'
import { Context } from "../../Context"
import Slider from 'react-slick'
import './index.scss'

export const Carousel = () => {
  const { carousel } = useContext(Context)
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  }

  return (
    <div className="carousel">
      <Slider {...settings}>
        {
          carousel.map((e, i) => {
            return (
              <div key={i}>
                <img src={e} alt="" />
              </div>
            )
          })
        }
      </Slider>
    </div>
  )
}