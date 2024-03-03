import { CSSProperties, ReactNode } from 'react'

import './atoms.css'

export const TitleH1 = ({children, style}:{children:ReactNode, style?:CSSProperties}) => {
    return <h1 className='h1-title' style={{...style}}>{children}</h1>
}