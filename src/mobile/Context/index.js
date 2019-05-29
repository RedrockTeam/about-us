import { createContext } from 'react'
import { publicData, mobileData } from '../../data'

const data = Object.assign({}, publicData, mobileData)
export const Context = createContext(data)