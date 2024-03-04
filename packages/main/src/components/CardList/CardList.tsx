"use client"

import { Card, GridContainer } from "@repo/ui"
import { useCards } from "../../context/AppProvider"

export const CardList = () => {
    const cards = useCards()
    return (
        <GridContainer>
            {cards.map(({title, featuring, link, color}, index) => 
                <Card title={title} subtitle={featuring} href={link} color={color} key={`card_${index}`} />
            )}
        </GridContainer>
    )
}