import { CSSProperties, ReactNode } from 'react'

import './atoms.css'

type TitleH1Props = {
    children:ReactNode
    style?:CSSProperties
}

export const TitleH1 = ({children, style}:TitleH1Props) => {
    return <h1 className='h1-title' style={{...style}}>{children}</h1>
}