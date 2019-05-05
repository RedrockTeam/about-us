import React, { useContext } from "react"
import { Context } from "../../Context"
import './index.scss'

export const Footer = () => {
  const { footer } = useContext(Context)

  return (
    <footer>
      <div className="inner-footer flex-between">
        <p>{footer.copyright}</p>
        <p>{footer.address}</p>
        <p>{footer.email}</p>
      </div>
    </footer>
  )
}