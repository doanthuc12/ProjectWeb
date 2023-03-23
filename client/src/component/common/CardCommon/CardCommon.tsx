import React, { useState } from "react";
import numeral from "numeral";
import "numeral/locales/en-gb";
import Styles from "./CardCommon.module.css";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

numeral.locale("en-gb");

const CardCommon: React.FC<IPropsCardCommon> = (props) => {
  const {
    title,
    label,
    normalPrice,
    price,
    total,
    discount,
    imgHover,
    imgLeave,
  } = props;
  const [imgUrl, setImageUrl] = useState(true);
  const tradeImgUrl = () => {
    setImageUrl(!imgUrl);
  };
  const [isShowLike, setIsShowLike] = useState(true);

  const handleClick = () => {
    setIsShowLike(!isShowLike);
  };
  // const handleMouseOver = () => {
  //   setImageUrl(hoverImageSrc);
  // };

  // const handleMouseLeave = () => {
  //   setImageUrl(defaultImageSrc);
  // };
  const formattedDiscount = discount
    ? numeral(-discount / parseFloat("100")).format("%")
    : null;

  const formattedoldPrice = price ? numeral(price).format("$0,0") : null;

  const formattednewPrice = total ? numeral(total).format("$0,0") : null;

  return (
    <>
      <div className={Styles.surrounding}>
        <div className={Styles.top}>
          <div className={Styles.bg_image}>
            <div
              className={Styles.image}
              style={{
                backgroundImage: `url(${imgUrl ? imgLeave : imgHover})`,
              }}
              onMouseOver={tradeImgUrl}
              onMouseLeave={tradeImgUrl}
            >
              <div className={Styles.discount}>
                {formattedDiscount ? <span>{formattedDiscount}</span> : null}
              </div>
              <div>
                {label ? <div className={Styles.label_hot}>{label}</div> : null}
              </div>
              <div className={Styles.like}>
                <button className={Styles.btn_like} onClick={handleClick}>
                  {isShowLike ? (
                    <AiOutlineHeart className={Styles.heart} />
                  ) : (
                    <AiFillHeart className={Styles.heart} />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className={Styles.bottom}>
          <div className={Styles.title}>{title ?? <div>{title}</div>}</div>
          <div className={Styles.price}>
            <span className={Styles.normal_price}>
              {normalPrice ? (
                <span>{numeral(normalPrice).format("$0,0.00")}</span>
              ) : null}
            </span>
            {/* <span className={Styles.old_price}>
              {discount ? (
                <span>{numeral(formattedoldPrice).format("$0,0.00")}</span>
              ) : null}
            </span>
            <span className={Styles.new_price}>
              {formattednewPrice ? (
                <span>{numeral(formattednewPrice).format("$0,0.00")}</span>
              ) : null}
            </span> */}
            <span className={Styles.old_price}>
              {discount ? <span>{formattedoldPrice}</span> : null}
            </span>
            <span className={Styles.new_price}>
              {formattednewPrice ?? <span>{formattednewPrice}</span>}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardCommon;
