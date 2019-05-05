import { createContext } from 'react'
import { publicData, pcData } from '../../data'

const data = Object.assign({}, publicData, pcData)
export const Context = createContext(data)