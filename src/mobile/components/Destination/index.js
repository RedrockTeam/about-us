import React, { useContext } from "react"
import Slider from "react-slick"
import { parseDestination } from "./parseDestination"
import { Context } from "../../Context"
import "./index.scss"

export const Destination = () => {
  const { title, destination } = useContext(Context)
  const settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  }
  const destinations = parseDestination(destination)

  return (
    <div className="destination">
      <div className="title" style={{justifyContent: 'space-between'}}>
        <div className="flex-center">
          <div className="line" />
          {title.destination}
        </div>
        <div className="title-right">
          右滑查看更多
          <div className="small-arrow" />
        </div>
      </div>
      <div className="slide-carousel">
        <Slider {...settings}>
          {destinations.map((column, i) => (
            <div key={i}>
              <div className="card">
                {column.map((row, j) => {
                  const { type, data } = row
                  if (type === "year") {
                    return (
                      <div className="row year" key={j}>
                        <div className="circle" />
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
                })}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}
