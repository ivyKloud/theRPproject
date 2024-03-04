
import { createContext } from "react";
import { Card } from "../types";

type ContextProps = {
 cards: Card[]
}

const defaultContext:ContextProps = {
 cards: [{
    title:'Chapter 1',
    featuring:'ft. Romeo',
    link:'https://google.fr',
    color: '#E3561A',
},
{
    title:'Chapter 2',
    featuring:'ft. Juliet',
    link:'https://google.fr',
    color: '#468864',
}]
}

export const AppContext = createContext(defaultContext)

