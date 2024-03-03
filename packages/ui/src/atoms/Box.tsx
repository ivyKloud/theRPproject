import { HTMLAttributes, ReactNode } from "react";

export const Box = ({children, ...props}:{children:ReactNode} & HTMLAttributes<HTMLDivElement>) => 
    <div {...props}>{children}</div>