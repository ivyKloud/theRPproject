import { useContext } from "react";
import { AppContext } from "./AppContext";


const useAppContext = () => useContext(AppContext)
export const useCards = () => useAppContext().cards

export const AppProvider = AppContext.Provider