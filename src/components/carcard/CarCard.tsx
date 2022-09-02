import { FC } from "react";
import { Point } from "../point/Point";
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
  image?: string
  price: number;
  credit: number;
  benefit: number;
  carProps: CarProps;
}

export const CarCard: FC<CarCardProps> = ({ title, benefit, gifts, price, credit,carProps }) => {
  return (
    <div className="car-card">
      <div className="car-card__bg">
        <img src={require('../../assets/cardbg.png')} alt="" />
      </div>
      <div className="car-card__header">
        <div className="car-card__title">{title}</div>
        <div className="car-card__controls">
          <div className="car-card__controls-item">1</div>
          <div className="car-card__controls-item">2</div>
        </div>
      </div>
      <div className="car-card__body">
        <Benefit value={benefit} />
        <CarImage gifts={gifts} image="" />
        <CarPrice price={price} credit={credit} />
        <div className="car-card__char-list">
          <CarCharacteristic value={carProps.consume.toString()} icon=""/>
          <CarCharacteristic value={carProps.charge.toString()} icon=""/>
          <CarCharacteristic value={carProps.maxSpeed.toString()} icon=""/>
          <CarCharacteristic value={carProps.time.toString()} icon=""/>
        </div>
      </div>
      <div className="car-card__footer">
        <ArrowBtnGroup>
          <ArrowButton variant="primary">Резерв онлайн</ArrowButton>
          <ArrowButton variant="dark">Купить</ArrowButton>
          <ArrowButton variant="light">Подробнее</ArrowButton>
        </ArrowBtnGroup>
      </div>

    </div>
  );
};


interface BenefitProps {
  value: number
}
const Benefit: FC<BenefitProps> = ({ value }) => {

  return (
    <div className="car-card__benefit">
      <ArrowButton block="car-card" variant="primary">
        Предложение дня
      </ArrowButton>
      <div className="car-card__benefit-value">
        <p>Выгода </p>
        <p>до {value}</p>
      </div>
    </div>
  )
}

interface CarImageProps {
  image?: string
  gifts: string[];
}

const CarImage: FC<CarImageProps> = ({ gifts, image }) => {
  return (
    <div className="car-card__image-container">
      <div className="car-card__gift-list">
        {gifts.map(g => (
          <Point block="car-card" variant="dark" type="gift" label="в подарок" title={g} />
        ))}
      </div>
      <div className="car-card__image">
        <img src={require("../../assets/car.png")} alt="" />
      </div>
    </div>
  )
}

interface CarPriceProps {
  price: number
  credit: number
}
const CarPrice: FC<CarPriceProps> = ({ price, credit }) => {
  return <div className="car-card__price">
    <div className="car-card__price-from">от {price} Р</div>
    <div className="car-card__price-credit">Кредит от {credit} Р/мес</div>
  </div>
}

interface CarCharacteristicsProps {
  icon: string
  value: string;
}
const CarCharacteristic: FC<CarCharacteristicsProps> = ({value, icon}) => {

  return <div className="car-card__char">
    <div className="car-card__char-icon">
      <img src="" alt="" />
    </div>
    <div className="car-card__char-value">
      {value}
    </div>
  </div>
}