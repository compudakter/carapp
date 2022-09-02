import { FC } from "react";
import { getBlockClass } from "../../utils/utils";
import "./Point.scss";
type PointVariant = "primary" | "light" | "dark";
type PointType = "gift";

interface PointProps {
  variant: PointVariant;
  title: string;
  label: string;
  type: PointType;
  block?:string
}

export const Point: FC<PointProps> = ({ variant, label, title,block, type }) => {
  const renderIcon = () => {
    switch (type) {
      case "gift":
        return <Gift />;
    }
    return null;
  };
  const variantClass = type ? `point__icon_${variant}` : "";
  const blockClass = getBlockClass('point',block)
  return (
    <div className={`${blockClass} point  `}>
      <div className={`point__icon ${variantClass}`}>{renderIcon()}</div>
      <div className="point__content">
        <div className="point__title">{title}</div>
        <div className="point__label">{label}</div>
      </div>
    </div>
  );
};

const Gift = () => {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.9375 7.48193V13.1069C0.9375 13.6244 1.35844 14.0444 1.875 14.0444H6.5625V7.48193H0.9375Z"
        fill="white"
      />
      <path
        d="M14.0625 3.73195H11.0963C11.3091 3.58664 11.4919 3.44227 11.6194 3.31289C12.3759 2.55258 12.3759 1.31508 11.6194 0.554766C10.8844 -0.185859 9.60375 -0.183984 8.86969 0.554766C8.46281 0.962578 7.38469 2.62289 7.53375 3.73195H7.46625C7.61438 2.62289 6.53625 0.962578 6.13031 0.554766C5.39531 -0.183984 4.11469 -0.183984 3.38063 0.554766C2.625 1.31508 2.625 2.55258 3.37969 3.31289C3.50813 3.44227 3.69094 3.58664 3.90375 3.73195H0.9375C0.420938 3.73195 0 4.15289 0 4.66945V6.0757C0 6.33445 0.21 6.54445 0.46875 6.54445H6.5625V4.66945H8.4375V6.54445H14.5312C14.79 6.54445 15 6.33445 15 6.0757V4.66945C15 4.15289 14.58 3.73195 14.0625 3.73195ZM6.50719 3.70102C6.50719 3.70102 6.46781 3.73195 6.33375 3.73195C5.68594 3.73195 4.44938 3.05883 4.04531 2.65195C3.6525 2.25633 3.6525 1.61133 4.04531 1.2157C4.23563 1.02445 4.48781 0.919453 4.75594 0.919453C5.02313 0.919453 5.27531 1.02445 5.46562 1.2157C6.0975 1.85133 6.72563 3.47508 6.50719 3.70102ZM8.66531 3.73195C8.53219 3.73195 8.49281 3.70195 8.49281 3.70102C8.27437 3.47508 8.9025 1.85133 9.53438 1.2157C9.91219 0.834141 10.5731 0.832266 10.9547 1.2157C11.3484 1.61133 11.3484 2.25633 10.9547 2.65195C10.5506 3.05883 9.31406 3.73195 8.66531 3.73195Z"
        fill="white"
      />
      <path
        d="M8.4375 7.48193V14.0444H13.125C13.6425 14.0444 14.0625 13.6244 14.0625 13.1069V7.48193H8.4375Z"
        fill="white"
      />
    </svg>
  );
};
