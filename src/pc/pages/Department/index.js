/*
 * @Author: your name
 * @Date: 2019-07-10 17:01:13
 * @LastEditTime: 2019-11-17 20:35:28
 * @LastEditors: Do not edit
 * @Description: In User Settings Edit
 * @FilePath: \about-us\src\pc\pages\Department\index.js
 */
import React, { useContext } from "react";
import { Context } from "../../Context";
import Slider from "react-slick";
import "./index.scss";

export const Department = props => {
  const { title, department } = useContext(Context);
  const { departments } = department;
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    dotsClass: "vertical-dots",
    speed: 1000
  };

  return (
    <div className={`department page ${props.className}`}>
      <div className="title">{title.department}</div>
      <div className="carousel">
        <Slider {...settings}>
          {departments.map((e, i) => (
            <div key={i}>
              <div className="side">
                <div className="mark"></div>
                <img
                  src={e.photo}
                  alt=""
                ></img>
                <div className="card">
                  <p className="name">
                    <span className="line"></span>
                    {e.name}
                  </p>
                  <p className="introduction">{e.introduction}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="lines line1"></div>
      <div className="lines line2"></div>
      <div className="lines line3"></div>
      <div className="lines line4"></div>
      <div className="lines line5"></div>
    </div>
  );
};
