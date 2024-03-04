import { Card, CardStatus } from "../types";

export const setCardStatus = (id:number, status:CardStatus, cards: Card[]):Card[] =>
    cards.map(card => card.id === id ? {...card, status} : card)
