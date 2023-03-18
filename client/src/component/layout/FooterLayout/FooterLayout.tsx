import React, { useMemo } from "react";
import NoteCommon from "../../common/NoteCommon/NoteCommon";
import Styles from "./FooterLayout.module.css";

const FooterLayout: React.FC = () => {
  const listInfo = useMemo(
    () => [
      {
        id: 1,
        title: "HELP & INFORMATION",
        list: [
          { id: 1, text: "Help" },
          { id: 2, text: "Track order" },
          { id: 3, text: "Delivery & returns" },
          { id: 4, text: "Sitemap" },
        ],
      },
      {
        id: 2,
        title: "ABOUT ASOS",
        list: [
          { id: 1, text: "About Us" },
          { id: 2, text: "Careers at ASOS" },
          { id: 3, text: "Corporate responsibility" },
          { id: 4, text: "Investors'site" },
        ],
      },
      {
        id: 3,
        title: "MORE ABOUT ASOS",
        list: [
          { id: 1, text: "Mobile and ASOS apps" },
          { id: 2, text: "ASOS Marketplace" },
          { id: 3, text: "Gift vouchers" },
          { id: 4, text: "Gift vouchers" },
          { id: 5, text: "Black Friday" },
          { id: 6, text: "ASOS x Thrifts+" },
        ],
      },
      {
        id: 4,
        title: "SHOPPING FROM",
        list: [{ id: 1, text: "You're in" }],
      },
    ],
    []
  );
  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.foot_top}>
          <div className={Styles.top_social}>
            <ul className={Styles.social_group}>
              <li className={Styles.icon_social}>
                <a href="https://www.facebook.com/ASOS/">
                  <img
                    className={Styles.icon}
                    src="https://www.chsica.org/wp-content/uploads/2020/10/Facebook-Logo-PNG-Transparent-Like-17.png"
                    alt="facebook"
                  />
                </a>
              </li>
              <li className={Styles.icon_social}>
                <a href="https://www.instagram.com/asos/">
                  <img
                    className={Styles.icon}
                    src="https://th.bing.com/th/id/R.1d3bf019927dbe6af973dd3d32db862f?rik=rCTUhmEzwuVFnw&pid=ImgRaw&r=0"
                    alt="instagram"
                  />
                </a>
              </li>
              <li className={Styles.icon_social}>
                <a href="https://www.snapchat.com/add/asosfashion">
                  <img
                    className={Styles.icon}
                    src="https://th.bing.com/th/id/OIP.ryBlLQ-nhSEQmXElbG2SNwHaHa?w=218&h=218&c=7&r=0&o=5&pid=1.7"
                    alt="snapchat"
                  />
                </a>
              </li>
            </ul>
            <ul className={Styles.payment}>
              <li>
                <img
                  className={Styles.payment_icon}
                  src="https://images.asos-media.com/navigation/visa-png"
                  alt="VISA"
                />
              </li>
              <li>
                <img
                  className={Styles.payment_icon}
                  src="https://images.asos-media.com/navigation/mastercard-png"
                  alt="Mastercard"
                />
              </li>
              <li>
                <img
                  className={Styles.payment_icon}
                  src="https://images.asos-media.com/navigation/pay-pal-png"
                  alt="PayPal"
                />
              </li>
              <li>
                <img
                  className={Styles.payment_icon}
                  src="https://images.asos-media.com/navigation/american-express-png"
                  alt="American Express"
                />
              </li>
              <li>
                <img
                  className={Styles.payment_icon}
                  src="https://images.asos-media.com/navigation/visa-electron-png"
                  alt="VISA Electron"
                />
              </li>
            </ul>
          </div>
        </div>
        <div className={Styles.info}>
          <div className={Styles.info_section}>
            {listInfo?.map((item) => (
              <NoteCommon
                title={item.title}
                list={item.list}
                key={`item__nav__${item.id.toString()}`}
              />
            ))}
          </div>
        </div>
        <div className={Styles.foot_bottom}>
          <div className={Styles.bot_border}>
            <p>© 2023 ASOS</p>
            <ul className={Styles.text_group}>
              <li>
                <a
                  href="https://www.asos.com/privacy-policy/"
                  className={Styles.text}
                >
                  Privacy &amp; Cookies
                </a>
              </li>
              <li>
                <a
                  href="https://www.asos.com/terms-and-conditions/"
                  className={Styles.text}
                >
                  Ts&amp;Cs
                </a>
              </li>
              <li>
                <a
                  href="https://www.asos.com/accessibility/"
                  className={Styles.text}
                  style={{ borderRight: "none" }}
                >
                  Accessibility
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterLayout;
