import { Button } from ".."
import { Box } from "../atoms/Box"
import { Divider } from "../atoms/Divider"

import './card.css'

type CardProps = {
  title: string
  subtitle?: string
  color: string
  href: string
  status?: string
  onClickStatus: () => void
}

export const Card = ({
  title, subtitle, color, status, href, onClickStatus
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
        {status && <Button onClick={onClickStatus}>Mark as {status === 'done' ? 'ToDo' : 'Done'}</Button>}
        <Button variant="secondary" onClick={() => alert('come back laterr')}>Delete</Button>
      </Box>
    </Box>
  )
}
