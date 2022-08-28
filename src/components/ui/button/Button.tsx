import { FC } from "react";
import  "./Button.scss";

export type ButtonColor = 'red' 
export type ButtonSize = 'md' | 'sm' 

interface ButtonProps {
  onClick?: (e: any) => void;
  color?:ButtonColor
  size?:ButtonSize
  children?: any;
}
export const Button: FC<ButtonProps> = ({ onClick,color,size, children }) => {
  const colorStyle = color ? `button_${color}`:''
  const sizeType = size ? `button_${size}` : ''
  return (
    <button
      className={`button ${colorStyle} ${sizeType}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
