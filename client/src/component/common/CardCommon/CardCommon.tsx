import React, { useState } from "react";
import numeral from "numeral";
import Styles from "./CardCommon.module.css";

const CardCommon: React.FC<IPropsCardCommon> = (props) => {
  const {
    title,
    label,
    normalPrice,
    oldPrice,
    newPrice,
    discount,
    defaultImageSrc,
    hoverImageSrc,
  } = props;
  const [imgUrl, setImageUrl] = useState(defaultImageSrc);
  const handleMouseOver = () => {
    setImageUrl(hoverImageSrc);
  };

  const handleMouseLeave = () => {
    setImageUrl(defaultImageSrc);
  };
  const formattedDiscount = discount
    ? numeral(parseFloat(discount) / 100).format("0%")
    : null;

  return (
    <>
      <div className={Styles.surrounding}>
        <div className={Styles.top}>
          <div className={Styles.bg_image}>
            <div
              className={Styles.image}
              style={{ backgroundImage: `url(${imgUrl})` }}
              onMouseOver={handleMouseOver}
              onMouseLeave={handleMouseLeave}
            >
              <div className={Styles.discount}>
                {formattedDiscount ? <span>{formattedDiscount}</span> : null}
              </div>
              <div>
                {label ? <div className={Styles.label_hot}>{label}</div> : null}
              </div>
            </div>
          </div>
        </div>

        <div className={Styles.bottom}>
          <div className={Styles.title}>
            {title ?? <div className="input-group-text">{title}</div>}
          </div>
          <div className={Styles.price}>
            <span className={Styles.normal_price}>
              {normalPrice ? (
                <span>{numeral(normalPrice).format("$0,0.00")}</span>
              ) : null}
            </span>
            <span className={Styles.old_price}>
              {oldPrice ? (
                <span>{numeral(oldPrice).format("$0,0.00")}</span>
              ) : null}
            </span>
            <span className={Styles.new_price}>
              {newPrice ? (
                <span>{numeral(newPrice).format("$0,0.00")}</span>
              ) : null}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardCommon;
