import { HTMLAttributes, ReactNode } from "react";

type BoxProps = HTMLAttributes<HTMLDivElement> & { children:ReactNode }

export const Box = ({children, ...props}:BoxProps) => 
    <div {...props}>{children}</div>