import { FC } from "react";
import { ArrowBtnGroup } from "../ui/arrowbutton/ArrowBtnGroup";
import { ArrowButton } from "../ui/arrowbutton/ArrowButton";
import "./CarCard.scss";

interface CarProps {
  consume: number;
  charge: number;
  maxSpeed: number;
  time: number;
}

interface CarCardProps {
  title: string;
  gifts: string[];
  price: number;
  credit: number;
  benefit: number;
  carProps: CarProps;
}

export const CarCard: FC<CarCardProps> = ({ title }) => {
  return (
    <div className="car-card">
      <div className="car-card__header">
        <div className="car-card__title">{title}</div>
        <div className="car-card__controls">
          <div className="car-card__controls-item">1</div>
          <div className="car-card__controls-item">2</div>
        </div>
        <div className="car-card__body"></div>
        <div className="car-card__footer">
          <ArrowBtnGroup>
            <ArrowButton variant="primary">Резерв онлайн</ArrowButton>
            <ArrowButton variant="dark">Купить</ArrowButton>
            <ArrowButton variant="light">Подробнее</ArrowButton>
          </ArrowBtnGroup>
        </div>
      </div>
    </div>
  );
};
