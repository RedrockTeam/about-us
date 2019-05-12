import React, { useContext, Fragment } from 'react'
import { Context } from '../../Context'
import './index.scss'

export const Aboutus = props => {
  const { title, aboutus } = useContext(Context)
  const { icon, copywriting } = aboutus
  
  return (
    <div className={`aboutus page ${props.className}`}>
      <div className="container">
        <p className="title">{title.aboutus}</p>
        <div className="icon-list flex-center">
          {
            icon.map((e, i) => {
              let line =
              i !== icon.length - 1
              &&  <div className="line"></div>

              return (
                <Fragment key={i}>
                  <div className="icon">
                    <img src={e} alt=""></img>
                  </div>
                  {line}
                </Fragment>
              )
            })
          }
        </div>
        <p className="copywriting">{copywriting}</p>
        <div className="bg"></div>
        <div className="quotes"></div>
      </div>
    </div>
  )
}