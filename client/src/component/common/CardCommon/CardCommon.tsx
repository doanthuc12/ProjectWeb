import React, { useState } from "react";
import Styles from "./CardCommon.module.css";

const CardCommon: React.FC<IPropsCardCommon> = (props) => {
  const {
    title,
    label,
    oldPirce,
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
                {discount ? <span>{discount}</span> : null}
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
          <span className={Styles.old_price}>
            {oldPirce ?? <span>{oldPirce}</span>}
          </span>
          <span className={Styles.new_price}>
            {newPrice ?? <span>{newPrice}</span>}
          </span>
        </div>
      </div>
    </>
  );
};

export default CardCommon;
