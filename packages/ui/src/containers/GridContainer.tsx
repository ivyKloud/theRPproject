import { ReactNode } from "react"
import { Box } from "../atoms/Box"

import './containers.css'

export const GridContainer = ({children}:{children:ReactNode}) => {
    return <Box className="grid-container">{children}</Box>
}