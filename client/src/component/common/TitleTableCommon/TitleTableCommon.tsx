import React from "react";
import { BsPerson } from "react-icons/bs";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../utils/constants/routes";
import Styles from "./TitleTableCommon.module.css";

interface ITitleTableCommon {
  title: string;
  icon: React.ReactElement;
  link: string;
}

const accountTableData = [
  {
    id: 1,
    icon: <BsPerson />,
    title: "My Account",
    link: ROUTES.SIGNUP,
  },
  {
    id: 2,
    icon: <BsPerson />,
    title: "My Orders",
    link: ROUTES.SIGNUP,
  },
];

const TitleTableCommon: React.FC<ITitleTableCommon> = ({
  link,
  icon,
  title,
}) => {
  return (
    <li className={Styles.wrap}>
      <div className={Styles.wrap_icon}>{icon}</div>
      <Link to={link}>
        <div className={Styles.wrap_text}>
          <span className={Styles.text}>{title}</span>
        </div>
      </Link>
    </li>
  );
};

const TitleTableList: React.FC = () => {
  return (
    <ul>
      {accountTableData.map((item) => (
        <TitleTableCommon
          key={item.id}
          link={item.link}
          icon={item.icon}
          title={item.title}
        />
      ))}
    </ul>
  );
};

export default TitleTableList;
