import React from "react";
import { FC } from "react";
import "./ArrowBtnGroup.scss";

interface ArrowBtnGroupProps {
  children: any;
}

export const ArrowBtnGroup: FC<ArrowBtnGroupProps> = ({ children }) => {
  const renderChidren = () => {
    return React.Children.map(children, (child, idx) => {
      const styleObj = {
        marginLeft: idx !== 0 ? "-20px" : 0,
        zIndex: children.length - idx,
        position: "relative",
      };
      console.log("style=====", styleObj);
      return React.cloneElement(child, {
        style: styleObj,
      });
    });
  };
  return <div className="arrow-btn-group">{renderChidren()}</div>;
};
