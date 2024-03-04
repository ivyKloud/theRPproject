import { HTMLAttributes, ReactNode } from "react";

type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  variant?: 'primary' | 'secondary'
}

export const Button = ({ children, variant = 'primary', ...props }: ButtonProps) => {
  return (
    <button className={`atom-button ${variant}`} {...props}>
      {children}
    </button>
  );
};
