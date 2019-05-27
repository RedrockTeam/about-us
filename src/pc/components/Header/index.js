import React, { useContext } from "react"
import { Context } from "../../Context"
import "./index.scss"

export const Header = ({ active }) => {
  const { header } = useContext(Context)
  const { button1, button2 } = header

  return (
    <header>
      <div className="inner-header flex-between">
        <div className={active ? 'logo-active' : 'logo'}></div>
        <div className={`link ${active ? 'link-active' : ''}`}>
          <a href={button1.website}>
            <div className="joinus flex-center">{button1.text}</div>
          </a>
          <div className={`line ${active ? 'line-active' : ''}`}></div>
          <a href={button2.website}>
            <div className="redrock flex-center">{button2.text}</div>
          </a>
        </div>
      </div>
    </header>
  )
}
