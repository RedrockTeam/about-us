import React, { useContext } from 'react'
import { Context } from '../../Context'
import './index.scss'

export const Joinus = () => {
  const { title, joinus } = useContext(Context)
  const { p1, p2, button } = joinus

  return (
    <div className="joinus">
      <div className="title">
        <div className="line"></div>
        {title.joinus}
      </div>
      <div className="container">
        <div className="girl"></div>
        <div className="p1">{p1}</div>
        <div className="p2" dangerouslySetInnerHTML={{__html: p2}}></div>
        <a href={button.website}><button>{button.text}</button></a>
      </div>
    </div>
  )
}