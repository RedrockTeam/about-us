import React, { useContext } from 'react'
import Slider from 'react-slick'
import { parseDestination } from './parseDestination'
import { Context } from '../../Context'
import './index.scss'

export const Destination = props => {
  const { title, destination } = useContext(Context)
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  }
  const destinations = parseDestination(destination)
  console.log(destinations)
  
  return (
    <div className={`destination page ${props.className}`}>
      <div className="container">
        <p className="title">{title.destination}</p>
        <div className="carousel">
          <Slider {...settings}>
            {
              // [...new Array(5)].map(() => (
              //   <div>
              //     <div className="card">
              //       <div className="row year">
              //         <div className="line"></div>
              //         2013级
              //       </div>
              //       <div className="row member">
              //         <div className="name">哈哈哈</div>
              //         <div className="place">腾讯科技(深圳)有限公司</div>
              //       </div>
              //       <div className="row">3</div>
              //       <div className="row">3</div>
              //       <div className="row">3</div>
              //       <div className="row">3</div>
              //       <div className="row">3</div>
              //       <div className="row">3</div>
              //       <div className="row">3</div>
              //       <div className="row">3</div>
              //       <div className="row">3</div>
              //       <div className="row">3</div>
              //     </div>
              //   </div>
              // ))
              destinations.map((column, i) => (
                <div key={i}>
                  <div className="card">
                    {
                      column.map((row, j) => {
                        const { type, data } = row
                        if (type === 'year') {
                          return (
                            <div className="row year" key={j}>
                              <div className="line"></div>
                              {data}
                            </div>
                          )
                        } else {
                          return (
                            <div className="row member" key={j}>
                              <div className="name">{data.name}</div>
                              <div className="place">{data.location}</div>
                            </div>
                          )
                        }
                      })
                    }
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