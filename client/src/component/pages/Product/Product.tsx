import React from "react";
import CardCommon from "../../common/CardCommon/CardCommon";
import Styles from "./Product.module.css";

const Product: React.FC = () => {
  return (
    <div className={Styles.container}>
      <CardCommon
        title=" TFNC Bridesmaid draped satin maxi dress in sage green"
        price="£104.40"
      />
      <CardCommon
        title="Forever New bubble sleeve organza mini dress in apricot floral"
        price="£59.40"
      />
      <CardCommon
        title="ASOS DESIGN tie back pleated sleeve midi dress in pink with red embroidery"
        price="£90.90"
      />
      <CardCommon
        title="ASOS DESIGN Mix & Match tux suit in black"
        price="£84.60"
      />
    </div>
  );
};

export default Product;
