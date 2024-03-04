
import { createContext } from "react";
import { Card } from "../types";

type ContextProps = {
 cards: Card[]
}

export const defaultContext:ContextProps = {
 cards: [{
    id: 1,
    title:'Chapter 1',
    featuring:'ft. Romeo',
    link:'https://google.fr',
    color: '#E3561A',
    status: 'done'
},
{
    id: 2,
    title:'Chapter 2',
    featuring:'ft. Juliet',
    link:'https://google.fr',
    color: '#468864',
    status: 'todo'
}]
}

export const AppContext = createContext(defaultContext)

