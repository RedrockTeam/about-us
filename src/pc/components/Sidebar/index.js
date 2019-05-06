import React, { useContext } from 'react'
import { Context } from '../../Context'
import './index.scss'

export const Sidebar = props => {
  const { index, isScrolling, setCurrentIndex } = props
  const { title } = useContext(Context)
  const setClass = i => `text-box flex-center ${index === i && 'text-box-active'}`

  return (
    <div className={`sidebar flex-center ${isScrolling && 'fade-sidebar'}`}>
      <div className="inner-sidebar flex-between">
        <div
          className={`index ${index === 1 && 'index-active'}`}
          onClick={() => setCurrentIndex(1)}
        >
        </div>
        <div
          className={setClass(2)}
          onClick={() => setCurrentIndex(2)}
        >
          <div className="link">{title.aboutus}</div>
        </div>
        <div
          className={setClass(3)}
          onClick={() => setCurrentIndex(3)}
        >
          <div className="link">{title.product}</div>
        </div>
        <div
         className={setClass(4)}
         onClick={() => setCurrentIndex(4)} 
        >
          <div className="link">{title.department}</div>
        </div>
        <div
         className={setClass(5)}
         onClick={() => setCurrentIndex(5)}
        >
          <div className="link">{title.destination}</div>
        </div>
        <div
          className={setClass(6)}
          onClick={() => setCurrentIndex(6)}
        >
          <div className="link">{title.joinus}</div>
        </div>
      </div>
    </div>
  )
}