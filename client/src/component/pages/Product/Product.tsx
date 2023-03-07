import React from "react";
import CardCommon from "../../common/CardCommon/CardCommon";
import Styles from "./Product.module.css";
import { Col, Row } from "react-bootstrap";
import productItems from "../../../data/productItems.json";

const Product: React.FC = () => {
  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.productList}>
          {productItems.map((item) => (
            <Row>
              <Col key={item.id}>
                <CardCommon {...item} />
              </Col>
            </Row>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
