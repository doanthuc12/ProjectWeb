import React, { useMemo, useState } from "react";
import Styles from "./NavBarLayout.module.css";

import { FiSearch } from "react-icons/fi";
import { BsBox2, BsPerson, BsQuestionCircle, BsX } from "react-icons/bs";
import { TbMessageDots } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { RiShoppingBagLine } from "react-icons/ri";
import "animate.css";
import ButtonCommon from "../../common/ButtonCommon/ButtonCommon";
import InputCommon from "../../common/Input/InputCommon/InputCommon";
import InputSearchCommon from "../../common/Input/InputSearchCommon/InputSearchCommon";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../utils/constants/routes";
import { useLocation } from "react-router-dom";

const NavBarLayout: React.FC = () => {
  const location = useLocation();
  const isWomenPage = location.pathname === "/women";
  const isMenPage = location.pathname === "/men";
  const [showTable, setShowTable] = useState(false);

  const handleHover = () => {
    setShowTable(true);
  };
  const handleCloseTable = () => {
    setShowTable(false);
  };
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
                <Link to={ROUTES.ADMIN_WOMEN}>
                  <div
                    className={`${Styles.gender} ${
                      isWomenPage ? Styles.gender_active : ""
                    }`}
                  >
                    <span>WOMEN</span>
                  </div>
                </Link>
                <Link to={ROUTES.ADMIN_MEN}>
                  <div
                    className={`${Styles.gender} ${
                      isMenPage ? Styles.gender_active : ""
                    }`}
                  >
                    <span>MEN</span>
                  </div>
                </Link>
              </ul>
              <div className={Styles.mid_search}>
                <div className={Styles.mid_input}>
                  <InputSearchCommon
                    className={Styles.mid_input_text}
                    placeholder="Search for itmes and brands"
                  />

                  <span>
                    <FiSearch />
                  </span>
                </div>
              </div>
            </div>
            <div className={Styles.mid_right_group}>
              <div className={Styles.widgets_wrapper}>
                <button
                  className={Styles.widgets}
                  onMouseEnter={handleHover}
                  // onMouseOver={handleHover}
                  // onMouseDownCapture={handleLeave}
                  // onClick={handleIconClick}
                >
                  <BsPerson className={Styles.widgets_icon} />
                </button>
                {showTable && (
                  <div
                    className={`animate__animated animate__fadeIn ${Styles.account_table}`}
                  >
                    <button
                      className={Styles.close_button}
                      onClick={handleCloseTable}
                    >
                      <BsX />
                    </button>
                    <div className={Styles.table_container}>
                      <div className={Styles.table_top}>
                        <Link to={ROUTES.SIGNUP}>
                          <div className={Styles.titleJ}>Join</div>
                        </Link>
                        <Link to={ROUTES.SIGNIN}>
                          <div className={Styles.titleS}>Sign in</div>
                        </Link>
                      </div>

                      <div className={Styles.table_bot}>
                        <ul style={{ padding: "0px", margin: "10px" }}>
                          <li className={Styles.wrap}>
                            <div className={Styles.wrap_icon}>
                              <BsPerson className={Styles.icon} />
                            </div>
                            <Link to={ROUTES.SIGNUP}>
                              <div className={Styles.wrap_text}>
                                <span className={Styles.text}>My Account</span>
                              </div>
                            </Link>
                          </li>
                          <li className={Styles.wrap}>
                            <div className={Styles.wrap_icon}>
                              <BsBox2 className={Styles.icon} />
                            </div>
                            <Link to={ROUTES.SIGNUP}>
                              <div className={Styles.wrap_text}>
                                <span className={Styles.text}>My Orders</span>
                              </div>
                            </Link>
                          </li>
                          <li className={Styles.wrap}>
                            <div className={Styles.wrap_icon}>
                              <BsQuestionCircle className={Styles.icon} />
                            </div>
                            <Link to={ROUTES.SIGNUP}>
                              <div className={Styles.wrap_text}>
                                <span className={Styles.text}>
                                  Returns Information
                                </span>
                              </div>
                            </Link>
                          </li>
                          <li className={Styles.wrap}>
                            <div className={Styles.wrap_icon}>
                              <TbMessageDots className={Styles.icon} />
                            </div>
                            <Link to={ROUTES.SIGNUP}>
                              <div className={Styles.wrap_text}>
                                <span className={Styles.text}>
                                  Contact Preferences
                                </span>
                              </div>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
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
        </div>
      </div>
    </>
  );
};

export default NavBarLayout;
