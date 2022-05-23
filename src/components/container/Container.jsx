import React from "react";
import { Register } from "../auth/Register";
import Bar from "../images/bar.png";
import "./Container.scss";

export function Container() {
  return (
    <div className="row">
      <div className="row__column">
        <div className="hdr">
          <img src={Bar} alt="bar chart" className="hdr--img" />
          <span className="hdr-text">Choose a data range</span>
          <p className="hdr-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            imperdiet bibendum
          </p>
        </div>
      </div>
      <div className="row__column row__column--mr">
        <Register/>
      </div>
    </div>
  );
}
