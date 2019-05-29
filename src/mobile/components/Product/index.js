import React, { useContext } from "react"
import Slider from "react-slick"
import { Context } from "../../Context"
import "./index.scss"

export const Product = () => {
  const { title, products } = useContext(Context)
  const settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  }

  return (
    <div className="product">
      <div className="title" style={{justifyContent: 'space-between'}}>
        <div className="flex-center">
          <div className="line" />
          {title.product}
        </div>
        <span className="title-right">
          右滑查看更多
          <span className="small-arrow" />
        </span>
      </div>
      <div className="slide-carousel">
        <Slider {...settings}>
          {products.map((product, i) => {
            const { title, subtitle, intro, picture, background } = product

            return (
              <div key={i}>
                <div className="card">
                  <div className="picture" style={{ background }}>
                    <img src={picture} alt="" />
                  </div>
                  <div className="copywriting">
                    <div className="all-title">
                      <div className="title">{title}</div>
                      <div className="subtitle">{subtitle}</div>
                    </div>
                    <div className="product-intro">
                      {intro}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
    </div>
  )
}
