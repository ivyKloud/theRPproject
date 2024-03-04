
import { createContext } from "react";
import { Card } from "../types";

type ContextProps = {
 cards: Card[]
}

const defaultContext:ContextProps = {
 cards: [{
    title:'title1',
    featuring:'feat1',
    link:'https://google.fr',
    color: '#E3561A',
},
{
    title:'title2',
    featuring:'feat2',
    link:'https://google.fr',
    color: '#468864',
}]
}

export const AppContext = createContext(defaultContext)

