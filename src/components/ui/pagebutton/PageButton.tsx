import { FC } from "react";
import "./PageButton.scss";
type PageButtonType = "prev" | "next";

interface PageButtonProps {
  type: PageButtonType;
  onClick: (e: any) => void;
}

export const PageButton: FC<PageButtonProps> = ({ type, onClick }) => {
  const arrowClass =
    type === "next" ? "page-button__arrow_next" : "page-button__arrow_prev";
  return (
    <div className="page-button" onClick={onClick}>
      <svg
        className={`page-button__arrow ${arrowClass}`}
        width="14"
        height="13"
        viewBox="0 0 14 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.99996 10.2053C6.74905 10.2053 6.49818 10.1163 6.30688 9.93878L0.287198 4.34902C-0.0957326 3.99344 -0.0957326 3.41693 0.287198 3.0615C0.669973 2.70606 1.29071 2.70606 1.67367 3.0615L6.99996 8.00762L12.3263 3.06167C12.7092 2.70624 13.3299 2.70624 13.7126 3.06167C14.0957 3.4171 14.0957 3.99361 13.7126 4.34919L7.69304 9.93895C7.50165 10.1165 7.25078 10.2053 6.99996 10.2053Z"
          fill="#262626"
        />
      </svg>
    </div>
  );
};
