import React, { useState } from "react";
import axios from "axios";

import Styles from "./NavBarLayout.module.css";
import { Col, Row } from "react-bootstrap";

import { FiSearch } from "react-icons/fi";
import { BsBox2, BsPerson, BsQuestionCircle } from "react-icons/bs";
import { TbMessageDots } from "react-icons/tb";
import { AiOutlineHeart, AiTwotoneShopping } from "react-icons/ai";
import { RiShoppingBagLine } from "react-icons/ri";

import "animate.css";

import BarButtonCommon from "../../common/BarButtonCommon/BarButtonCommon";
import InputSearchCommon from "../../common/Input/InputSearchCommon/InputSearchCommon";

import { Link } from "react-router-dom";
import { ROUTES } from "../../../utils/constants/routes";
import { useLocation } from "react-router-dom";

const NavBarLayout: React.FC = () => {
  const location = useLocation();

  const isWomenPage = location.pathname === "/women";
  const isMenPage = location.pathname === "/men";

  // HANDLE BUTTON ICON BsPerson
  const [showTable, setShowTable] = useState(false);
  // HANDLE BUTTON ICON RiShoppingBagLine
  const [isShowBag, setIsShowBag] = useState(true);

  // HANDLE BUTTON TYPE  NAVBAR
  const [buttons, setButtons] = React.useState<Array<IBarButtonCommon>>([]);

  // GET DATA BAR_BUTTON
  React.useEffect(() => {
    axios.get("http://localhost:9000/barbuttons").then((response) => {
      setButtons(response.data);
      // console.log(response.data);
    });
  }, []);

  const handleHover = () => {
    setShowTable(true);
  };
  const handleLeave = () => {
    setShowTable(false);
  };

  const handleClick = () => {
    setIsShowBag(!isShowBag);
  };
  // const listNav = useMemo(
  //   () => [
  //     {
  //       id: 1,
  //       title: "New in",
  //       background: true,
  //     },
  //     {
  //       id: 2,
  //       title: "Clothing",
  //       background: false,
  //     },
  //     {
  //       id: 3,
  //       title: "Sale",
  //       background: false,
  //     },
  //     {
  //       id: 4,
  //       title: "Shoes",
  //       background: false,
  //     },
  //     {
  //       id: 5,
  //       title: "Dresses",
  //       background: false,
  //     },
  //     {
  //       id: 6,
  //       title: "Accessories",
  //       background: false,
  //     },
  //     {
  //       id: 7,
  //       title: "Sportswear",
  //       background: false,
  //     },
  //     {
  //       id: 8,
  //       title: "Topshop",
  //       background: false,
  //     },
  //     {
  //       id: 9,
  //       title: "Outlet",
  //       background: true,
  //     },
  //   ],
  //   []
  // );

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
                <Link to={"/"}>
                  <a href="logo" className={Styles.logo}>
                    asos
                  </a>
                </Link>
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
                <button className={Styles.widgets} onMouseEnter={handleHover}>
                  <BsPerson className={Styles.widgets_icon} />
                </button>
                {showTable && (
                  <div
                    className={`animate__animated animate__fadeIn ${Styles.account_table}`}
                    onMouseEnter={handleHover}
                    onMouseLeave={handleLeave}
                  >
                    {/* <button
                      className={Styles.close_button}
                      onClick={handleCloseTable}
                    >
                      <BsX />
                    </button> */}

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
                <Link to={"/saved"}>
                  <AiOutlineHeart className={Styles.widgets_icon} />
                </Link>
              </button>
              <Link to={"/bag"}>
                <button className={Styles.widgets} onClick={handleClick}>
                  <div>
                    {isShowBag ? (
                      <RiShoppingBagLine className={Styles.widgets_icon} />
                    ) : (
                      <AiTwotoneShopping className={Styles.widgets_icon} />
                    )}
                  </div>
                </button>
              </Link>
              {/* <button className={Styles.widgets} onClick={handleClick}>
                <Link to={"/bag"}>
                  <div>
                    {isShowBag ? (
                      <RiShoppingBagLine className={Styles.widgets_icon} />
                    ) : (
                      <AiTwotoneShopping className={Styles.widgets_icon} />
                    )}
                  </div>
                </Link>
              </button> */}
            </div>
          </div>
        </div>
        <nav className={Styles.bottom_bar}>
          <div className={Styles.bot_nav}>
            {buttons.map((item) => (
              <Row key={`button_${item._id}`}>
                <Col key={item._id}>
                  <BarButtonCommon {...item} />
                </Col>
              </Row>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBarLayout;
