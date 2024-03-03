import { BoxProps } from './Box'

import './atoms.css'

export const TitleH1 = ({children, style}:BoxProps) => {
    return <h1 className='h1-title' style={{...style}}>{children}</h1>
}