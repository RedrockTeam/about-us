import React, { useContext } from 'react'
import { Context } from '../../Context'
import './index.scss'

export const Header = () => {
  const data = useContext(Context)

  return (
    <div>{data.header}</div>
  )
}