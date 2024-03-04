import { Button } from ".."
import { Box } from "../atoms/Box"
import { Divider } from "../atoms/Divider"

import './card.css'

type CardProps = {
  title: string
  subtitle?: string
  color: string
  href: string
}

export const Card = ({
  title, subtitle, color, href,
}: CardProps) => {
  return (
    <Box className="card-container">
      <Box className="card-title" style={{color}}>{title} </Box>
      <Box className="card-subtitle">{subtitle}</Box>
      <Divider/>
      <Box className="card-href">
        <a href={href} target="_blank">GoTo</a>
      </Box>
      <Box className="card-buttons">
        <Button>Mark as done</Button>
        <Button variant="secondary">Delete</Button>
      </Box>
    </Box>
  )
}
