import React from "react";
import Styles from "./ButtonCommon.module.css";
import clsx from "clsx";

const ButtonCommon: React.FC<IPropsButtonCommon> = (props) => {
  const { title, background } = props;

  return (
    <div className={clsx(Styles.bot_btn, { [Styles.background]: background })}>
      {title ?? <span className={Styles.bot_textbtn}>{title}</span>}
    </div>
  );
};

export default ButtonCommon;
