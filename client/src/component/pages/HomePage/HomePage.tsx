import { url } from "inspector";
import React, { useEffect } from "react";
import NavBarLayout from "../../layout/NavBarLayout/NavBarLayout";
import FeatureCommon from "../../common/FeatureCommon/FeatureCommon";
import HeroButtonCommon from "../../common/HeroButtonCommon/HeroButtonCommon";
import LogoCommon from "../../common/LogoCommon/LogoCommon";
import Styles from "./HomePage.module.css";
import FooterLayout from "../../layout/FooterLayout/FooterLayout";
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import heromen from "../../../images/heromen.png";
import herowomen from "../../../images/herowomen.png";

const HomePage: React.FC<IHomePage> = (props) => {
  const { type } = props;

  useEffect(() => console.log(type));

  const [feature, setFeature] = React.useState<Array<IFeatureCommon>>([]);
  const [featurew, setFeaturew] = React.useState<Array<IFeatureCommon>>([]);

  const [logo, setLogo] = React.useState<Array<ILogoCommon>>([]);

  const [logow, setLogow] = React.useState<Array<ILogoCommon>>([]);

  React.useEffect(() => {
    axios.get("http://localhost:9000/featurecommons").then((response) => {
      setFeature(response.data);
      // console.log(response.data);
    });
  }, []);

  React.useEffect(() => {
    axios.get("http://localhost:9000/featurewcommons").then((response) => {
      setFeaturew(response.data);
      // console.log(response.data);
    });
  }, []);

  React.useEffect(() => {
    axios.get("http://localhost:9000/logocommons").then((response) => {
      setLogo(response.data);
      // console.log(response.data);
    });
  }, []);

  React.useEffect(() => {
    axios.get("http://localhost:9000/logowcommons").then((response) => {
      setLogow(response.data);
      // console.log(response.data);
    });
  }, []);
  return (
    <div>
      <NavBarLayout />

      <div className={Styles.main}>
        <div
          className={Styles.hero_img}
          style={{
            backgroundImage: `url(${type === "men" ? heromen : herowomen})`,
          }}
        >
          <div className={Styles.bghero_holder}>
            <button className={Styles.hero_holder}>
              <h2 className={Styles.hero_title}>Spring looks</h2>
            </button>
          </div>
          <div className={Styles.bghero_button}>
            <HeroButtonCommon title="SHOP NOW" hideboder={true} height="44px" />
          </div>
        </div>
        {type === "men" ? (
          <div className={Styles.bgfeature}>
            {feature.map((item) => (
              <Row>
                <Col key={item._id}>
                  <FeatureCommon {...item} />
                </Col>
              </Row>
            ))}
          </div>
        ) : (
          <div className={Styles.bgfeature}>
            {featurew.map((item) => (
              <Row>
                <Col key={item._id}>
                  <FeatureCommon {...item} />
                </Col>
              </Row>
            ))}
          </div>
        )}
        <div className={Styles.moment}>
          <div className={Styles.bgmoment}>
            <a href="https://www.asos.com/men/ctas/hp-edit-5/cat/?cid=50610&ctaref=hp|mw|prime|moment|1|edit|startofsummer">
              <img
                className={Styles.moment_img}
                src="https://content.asos-media.com/-/media/homepages/mw/2023/march/13-prime/moments/mw_global_start_of_summer_moment_870x1110.jpg"
              />
            </a>
            <h2 className={Styles.moment_title}>THE HOLIDAY EDIT</h2>
            <p className={Styles.moment_paragraph}>Pack me, plz</p>
            <div className={Styles.moment_btn}>
              <HeroButtonCommon
                title="SHOP NOW"
                hideboder={false}
                height="60px"
              />
            </div>
          </div>
          <div className={Styles.bgmoment}>
            <a href="https://www.asos.com/men/ctas/hp-edit-5/cat/?cid=50610&ctaref=hp|mw|prime|moment|1|edit|startofsummer">
              <img
                className={Styles.moment_img}
                src="https://content.asos-media.com/-/media/homepages/mw/2023/march/13-prime/moments/mw_global_washed_jersey_moment_870x1110.jpg"
              />
            </a>
            <h2 className={Styles.moment_title}>CASUAL COLLECTION</h2>
            <p className={Styles.moment_paragraph}>Work-from-bed essentials</p>
            <div className={Styles.moment_btn}>
              <HeroButtonCommon
                title="SHOP NOW"
                hideboder={false}
                height="60px"
              />
            </div>
          </div>
        </div>
        <h2 className={Styles.logo_title}>TRENDINGS BRANDS</h2>
        {type === "men" ? (
          <div className={Styles.logo}>
            {logo.map((item) => (
              <Row>
                <Col key={item._id}>
                  <LogoCommon {...item} />
                </Col>
              </Row>
            ))}
          </div>
        ) : (
          <div className={Styles.logo}>
            {logow.map((item) => (
              <Row>
                <Col key={item._id}>
                  <LogoCommon {...item} />
                </Col>
              </Row>
            ))}
          </div>
        )}
      </div>
      <FooterLayout />
    </div>
  );
};

export default HomePage;
