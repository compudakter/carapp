import { FC } from "react";
import styles from "./Button.module.scss";
interface ButtonProps {
  onClick?: (e: any) => void;
  children?: any;
}
export const Button: FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button
      className={`${styles.button} ${styles.button_red}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
