import React from 'react'
import './index.scss'

export const Sidebar = props => {
  const { index, isScrolling, setCurrentIndex } = props

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
          <div className="link">关于我们</div>
        </div>
        <div
          className={setClass(3)}
          onClick={() => setCurrentIndex(3)}
        >
          <div className="link">成果展示</div>
        </div>
        <div
         className={setClass(4)}
         onClick={() => setCurrentIndex(4)} 
        >
          <div className="link">部门构成</div>
        </div>
        <div
         className={setClass(5)}
         onClick={() => setCurrentIndex(5)}
        >
          <div className="link">毕业去向</div>
        </div>
        <div
          className={setClass(6)}
          onClick={() => setCurrentIndex(6)}
        >
          <div className="link">加入我们</div>
        </div>
      </div>
    </div>
  )
}