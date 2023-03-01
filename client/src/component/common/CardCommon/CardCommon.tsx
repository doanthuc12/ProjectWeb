import React, { useState } from "react";
import Styles from "./CardCommon.module.css";

const CardCommon: React.FC<IPropsCardCommon> = (props) => {
  const { title, price, img, type = "text" } = props;
  return (
    <>
      <div className={Styles.surrounding}>
        {/* <div style={{ width: "238px", height: "317px" }}>
          {img ?? <span>{img}</span>}
        </div> */}
        <img
          src="https://images.asos-media.com/products/tfnc-bridesmaid-draped-satin-maxi-dress-in-sage-green/203769857-1-sagegreen?$n_320w$&wid=317&fit=constrain"
          alt="blue dress"
          style={{ width: "238px", height: "317px" }}
        ></img>
        <div className={Styles.bottom}>
          <span className={Styles.title}>
            {title ?? <span className="input-group-text">{title}</span>}
          </span>

          <span className={Styles.label}>
            <span className={Styles.price}>
              {price ?? <span>{price}</span>}
            </span>

            <div className={Styles.discount}>-10%</div>
            <div className={Styles.label_hot}>
              <span>SELLING FAST</span>
            </div>
          </span>
        </div>
      </div>
    </>
  );
};

export default CardCommon;
