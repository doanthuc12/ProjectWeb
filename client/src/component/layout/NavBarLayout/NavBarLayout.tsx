import React, { useMemo } from "react";
import Styles from "./NavBarLayout.module.css";

import { FiSearch } from "react-icons/fi";
import { BsPerson } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { RiShoppingBagLine } from "react-icons/ri";
import ButtonCommon from "../../common/ButtonCommon/ButtonCommon";
import InputCommon from "../../common/Input/InputCommon/InputCommon";
import InputSearchCommon from "../../common/Input/InputSearchCommon/InputSearchCommon";

const NavBarLayout: React.FC = () => {
  const listNav = useMemo(
    () => [
      {
        id: 1,
        title: "New in",
        background: true,
      },
      {
        id: 2,
        title: "Clothing",
        background: false,
      },
      {
        id: 3,
        title: "Sale",
        background: false,
      },
      {
        id: 4,
        title: "Shoes",
        background: false,
      },
      {
        id: 5,
        title: "Dresses",
        background: false,
      },
      {
        id: 6,
        title: "Accessories",
        background: false,
      },
      {
        id: 7,
        title: "Sportswear",
        background: false,
      },
      {
        id: 8,
        title: "Topshop",
        background: false,
      },
      {
        id: 9,
        title: "Outlet",
        background: true,
      },
    ],
    []
  );
  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.top_bar}>
          <ul className={Styles.lang_group}>
            <li className={Styles.lang}>
              <span>Marketplace</span>
            </li>
            <li className={Styles.lang}>
              <span>Help & FAQs</span>
            </li>
            <li
              className={Styles.lang}
              style={{ borderRight: "1px solid #ddd" }}
            >
              <img
                src="https://assets.asosservices.com/storesa/images/flags/vn.png"
                alt="Vietnam"
                className={Styles.img}
              />
            </li>
          </ul>
        </div>
        <div className={Styles.mid_bar}>
          <div className={Styles.mid_bar_group}>
            <div className={Styles.mid_left_group}>
              <span className={Styles.logo_bg}>
                <a href="logo" className={Styles.logo}>
                  asos
                </a>
              </span>
              <ul className={Styles.gender_group}>
                <li className={Styles.gender}>
                  <span>WOMEN</span>
                </li>
                <li className={Styles.gender}>
                  <span>MEN</span>
                </li>
              </ul>
              <div className={Styles.mid_search}>
                <div className={Styles.mid_input}>
                  <InputSearchCommon
                    className={Styles.mid_input_text}
                    placeholder="Search for itmes and brands"
                  />
                  {/* <input
                    className={Styles.mid_input_text}
                    type="text"
                    placeholder="Search for itmes and brands"
                  /> */}
                  <span>
                    <FiSearch />
                  </span>
                </div>
              </div>
            </div>
            <div className={Styles.mid_right_group}>
              <button className={Styles.widgets}>
                <BsPerson className={Styles.widgets_icon} />
              </button>
              <button className={Styles.widgets}>
                <AiOutlineHeart className={Styles.widgets_icon} />
              </button>
              <button className={Styles.widgets}>
                <RiShoppingBagLine className={Styles.widgets_icon} />
              </button>
            </div>
          </div>
        </div>
        <div className={Styles.bottom_bar}>
          {listNav?.map((item) => (
            <ButtonCommon
              title={item?.title}
              background={item?.background}
              key={`item__nav__${item.id}`}
            />
          ))}
          {/* <ButtonCommon title="New in" background={false} />
          <ButtonCommon title="Clothing" background={false} />
           */}
        </div>
      </div>
    </>
  );
};

export default NavBarLayout;
