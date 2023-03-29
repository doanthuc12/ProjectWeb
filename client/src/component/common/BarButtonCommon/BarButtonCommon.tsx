import React from "react";
import Styles from "./BarButtonCommon.module.css";
import clsx from "clsx";
import { Link } from "react-router-dom";

const BarButtonCommon: React.FC<IBarButtonCommon> = (props) => {
  const { title, background, link } = props;

  return (
    <Link to={link}>
      <button
        className={clsx(Styles.bot_btn, {
          [Styles.background]: background,
        })}
      >
        {title ?? <span className={Styles.bot_textbtn}>{title}</span>}
      </button>
    </Link>
  );
};

export default BarButtonCommon;
