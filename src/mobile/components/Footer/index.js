import React, { useContext } from 'react'
import { Context } from '../../Context'
import './index.scss'

export const Footer = () => {
  const { footer } = useContext(Context)
  const { copyright, address, email } = footer

  return (
    <footer>
      <p className="copyright">{copyright}</p>
      <p className="address">{address}</p>
      <p className="email">{email}</p>
    </footer>
  )
}