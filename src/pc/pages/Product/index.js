import React, { useContext } from 'react'
import Slider from 'react-slick'
import { Context } from '../../Context'
import './index.scss'

export const Product = props => {
  const { title, product, products } = useContext(Context)
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
              {
                products.map((product,i) => {
                  const {
                    title,
                    subtitle,
                    intro,
                    picture,
                    background
                  } = product

                  return (
                    <div>
                      <div className="card">
                        <div className="inner-card">
                          <div className="picture flex-center" style={{background}}>
                            <img src={picture} alt=""></img>
                          </div>
                          <div className="copywriting">
                            <div className="product-title">{title}</div>
                            <div className="subtitle">{subtitle}</div>
                            <div className="product-intro">{intro}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
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