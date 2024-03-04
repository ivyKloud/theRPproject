import { Card, CardNew, GridContainer } from "@repo/ui"
import { useCards } from "../../context/AppProvider"
import { CardStatus } from "../../types"

type CardListProps = {
    updateCard: (id:number, status:CardStatus) => void
}

export const CardList = ({updateCard}: CardListProps) => {
    const cards = useCards()
    return (
        <GridContainer>
            {cards.map(({id, title, featuring, link, status, color}, index) => 
                <Card 
                    title={title} 
                    subtitle={featuring} 
                    href={link} 
                    color={color} 
                    status={status} 
                    key={`card_${index}`} 
                    onClickStatus={() => {
                        updateCard(id, status === 'done' ? 'todo' : 'done')
                    }} 
                />
                    
            )}
            <CardNew />
        </GridContainer>
    )
}