import { FC, useState } from "react";
import "./ReviewCard.scss";

const getBlockClass = (element: string, blockName?: string) =>
  blockName ? `${blockName}__${element}` : "";

interface ReviewCardProps {
  name: string;
  text: string;
}

export const ReviewCard: FC<ReviewCardProps> = ({ name, text }) => {
  const [details, showDetails] = useState(false);
  const textClass = details ? `review-card__text_open` : "";
  return (
    <div className="review-card">
      <div className="review-card__video">
        <Play blockName="review-card" />
      </div>
      <div className="review-card__content">
        <div className="review-card__name">{name}</div>
        <div className={`review-card__text ${textClass}`}>{text}</div>
        <DetailsButton
          blockName="review-card"
          setIsOpen={showDetails}
          isOpen={details}
        />
      </div>
    </div>
  );
};

interface DetailsButton {
  blockName?: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const DetailsButton: FC<DetailsButton> = ({ blockName, isOpen, setIsOpen }) => {
  const isOpenHandler = () => {
    setIsOpen(!isOpen);
  };
  const blockClass = getBlockClass("details", blockName);
  const arrowClass = isOpen ? "details__arrow_open" : "";
  return (
    <div className={`${blockClass} details`} onClick={isOpenHandler}>
      <span className="details__text">Подробнее</span>
      <svg
        className={`details__arrow ${arrowClass}`}
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

interface PlayProps {
  blockName?: string;
}

const Play: FC<PlayProps> = ({ blockName }) => {
  const blockClass = getBlockClass("play", blockName);
  return (
    <div className={`${blockClass} play`}>
      <svg
        className="play__icon"
        width="8"
        height="9"
        viewBox="0 0 8 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.08984 4.60601L0.361169 0.721211L0.361169 8.49082L7.08984 4.60601Z"
          fill="white"
        />
      </svg>
    </div>
  );
};
