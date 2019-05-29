import React, { useContext } from 'react'
import { Context } from '../../Context'
import './index.scss'

export const Aboutus = () => {
  const { title, aboutus } = useContext(Context)

  return (
    <div className="aboutus">
      <div className="title">
        <div className="line"></div>
        {title.aboutus}
      </div>
      <div className="copywriting">
        {aboutus.copywriting}
      </div>
    </div>
  )
}