import { FC, useState } from "react";
import { getBlockClass } from "../../../utils/utils";
import "./CheckBox.scss";
interface CheckBoxProps {
  label?: any;
}

export const CheckBox: FC<CheckBoxProps> = ({ label }) => {
  const [checked, setChecked] = useState(false);
  const activeStyle = checked ? `checkbox__element_active` : "";

  return (
    <label className="checkbox" onChange={() => setChecked(!checked)}>
      <input type="checkbox" id="checkbox-input" className="checkbox__input" />
      <span className={`checkbox__element ${activeStyle}`}>
        {checked ? <CheckSvg blockName="checkbox" /> : null}
      </span>
      <span>{label}</span>
    </label>
  );
};

interface CheckSvgProps {
  blockName?: string;
}

const CheckSvg: FC<CheckSvgProps> = ({ blockName }) => {
  const blockClass = getBlockClass("check-icon", blockName);
  return (
    <svg
      className={`${blockClass} check-icon`}
      width="11"
      height="10"
      viewBox="0 0 11 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_4909_7244)">
        <path
          d="M4.73714 8.38772C4.26267 8.84111 3.4928 8.84111 3.01856 8.38772L0.355852 5.8433C-0.118617 5.39013 -0.118617 4.65446 0.355852 4.20129C0.830092 3.7479 1.59996 3.7479 2.07443 4.20129L3.66088 5.71704C3.78064 5.83127 3.97505 5.83127 4.09505 5.71704L8.39069 1.61223C8.86493 1.15884 9.6348 1.15884 10.1093 1.61223C10.3371 1.82995 10.4651 2.12536 10.4651 2.43324C10.4651 2.74111 10.3371 3.03652 10.1093 3.25424L4.73714 8.38772Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_4909_7244">
          <rect width="10.4651" height="10" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
