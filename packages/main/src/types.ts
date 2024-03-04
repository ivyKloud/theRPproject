export type Card = {
  id: number
  title: string
  featuring?: string
  color: string
  link: string
  status: CardStatus
}

export type CardStatus = 'done' | 'todo'
