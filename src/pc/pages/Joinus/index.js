import React, { useContext } from 'react'
import { Footer } from '../../components'
import { Context } from '../../Context'
import './index.scss'

export const Joinus = props => {
  const { joinus, title } = useContext(Context)
  const { p1, p2, button } = joinus
  
  return (
    <div className={`joinus page ${props.className}`}>
      <div className="container">
        <p className="title">{title.joinus}</p>
        <div className="inner-container flex-between">
          <div className="copywriting">
            <div className="p1">{p1}</div>
            <div className="p2">{p2}</div>
            <a href={button.website}><button>{button.text}</button></a>
          </div>
          <div className="girl"></div>
        </div>
      </div>
      <Footer />
    </div>
  )
}