import { HTMLAttributes, ReactNode } from "react";

type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
}

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button className="atom-button" {...props}>
      {children}
    </button>
  );
};
