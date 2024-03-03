import { Box, BoxProps } from "../atoms/Box"

import './containers.css'

export const GridContainer = ({children}:BoxProps) => {
    return <Box className="grid-container">{children}</Box>
}