import { createContext } from "react";
import { Card } from "../types";

type ContextProps = {
 cards: Card[]
}

const defaultContext:ContextProps = {
 cards: []
}

export const AppContext = createContext(defaultContext)

