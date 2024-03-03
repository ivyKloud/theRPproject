import { Box } from "../atoms/Box"

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
      <h4 style={{color}}>{title} <span>-&gt;</span></h4>
      <p>{subtitle}</p>
      <hr/>
      <a href={href} target="_blank">Voir</a>
      </Box>
  )
}
