import { CSSProperties, FC } from "react";
import { getBlockClass } from "../../../utils/utils";
import "./ArrowButton.scss";

type ArrowButtonVariant = "primary" | "dark" | "light";
interface ArrowButtonProps {
  variant?: ArrowButtonVariant;
  children?: any;
  style?: CSSProperties;
  block?:string
}

export const ArrowButton: FC<ArrowButtonProps> = ({
  variant,
  children,
  style,
  block
}) => {
  const classBlock = getBlockClass('arrow-button',block)
  return (
    <div style={style} className={` ${classBlock} arrow-button arrow-button_${variant}`}>
      <div className="arrow-button__wrapper">
        <div className="arrow-button__content">{children}</div>
        <div className="arrow-button__arrow"></div>
      </div>
    </div>
  );
};
