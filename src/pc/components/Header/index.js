import React, { useContext } from "react"
import { Context } from "../../Context"
import "./index.scss"

export const Header = () => {
  const data = useContext(Context)

  return (
    <header>
      <div className="inner-header flex-between">
        <div className="logo"></div>
        <div className="link">
          <a href="http://baidu.com">
            <div className="joinus flex-center">加入我们</div>
          </a>
          <div className="line"></div>
          <a href="http://baidu.com">
            <div className="redrock flex-center">红岩网校</div>
          </a>
        </div>
      </div>
    </header>
  )
}
