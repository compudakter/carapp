import { CSSProperties, FC } from "react";
import "./ArrowButton.scss";

type ArrowButtonVariant = "primary" | "dark" | "light";
interface ArrowButtonProps {
  variant?: ArrowButtonVariant;
  children?: any;
  style?: CSSProperties;
}

export const ArrowButton: FC<ArrowButtonProps> = ({
  variant,
  children,
  style,
}) => {
  console.log("style", style);
  return (
    <div style={style} className={`arrow-button arrow-button_${variant}`}>
      <div className="arrow-button__wrapper">
        <div className="arrow-button__content">{children}</div>
        <div className="arrow-button__arrow"></div>
      </div>
    </div>
  );
};
