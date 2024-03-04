"use client"

import { useState } from 'react'
import { CardList } from './components/CardList'
import { MainTitle } from './components/MainTitle'
import { AppProvider } from './context/AppProvider'
import { defaultContext } from './context/AppContext'
import { CardStatus } from './types'
import { setCardStatus } from './helpers/setCardStatus'

export const TheProjectApp = () => {
    const [cards, setCards] = useState(defaultContext.cards)

    return <div>
        <AppProvider value={{cards}}>
            <MainTitle>The RP Project</MainTitle>
            <CardList updateCard={(id:number, status: CardStatus) => {
                setCards(setCardStatus(id, status, cards))
            }} />
        </AppProvider>
    </div>
}
