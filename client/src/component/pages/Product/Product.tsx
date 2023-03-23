import React from "react";
import CardCommon from "../../common/CardCommon/CardCommon";
import Styles from "./Product.module.css";
import { Col, Row } from "react-bootstrap";
// import productItems from "../../../data/productItems.json";
import NavBarLayout from "../../layout/NavBarLayout/NavBarLayout";
import FooterLayout from "../../layout/FooterLayout/FooterLayout";
import axios from "axios";

const Product: React.FC = () => {
  const [products, setProducts] = React.useState<Array<IProduct>>([]);

  React.useEffect(() => {
    axios.get("http://localhost:9000/products").then((response) => {
      setProducts(response.data);
      // console.log(response.data);
    });
  }, []);

  return (
    <>
      <div className="navbar">
        <NavBarLayout />
      </div>
      <div className={Styles.container}>
        <div className={Styles.productList}>
          {products.map((item) => (
            <Row key={item.id}>
              <Col key={item.id}>
                <CardCommon {...item} />
              </Col>
            </Row>
          ))}
        </div>
      </div>
      <div className="navbar">
        <FooterLayout />
      </div>
    </>
  );
};

export default Product;
