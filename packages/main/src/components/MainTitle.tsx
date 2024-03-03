import { TitleH1 } from "@repo/ui";
import { CSSProperties, ReactNode } from "react";

const customStyle: CSSProperties = {
    margin: '20px', 
    textAlign:'center'
}

export const MainTitle = ({children}:{children:ReactNode}) => {
   return <TitleH1 style={customStyle}>{children}</TitleH1>
}