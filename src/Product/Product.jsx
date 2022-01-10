import React from "react";
import { css } from "@emotion/css";

const ProductStyle = css`
  justify-content: center;
  margin: 30px;
`;
const product = () => {
  return (
    <div className="ProductStyle">
      <img src="/Assets/bank-robbery.png" alt="" />
      <h1>hello</h1>
    </div>
  );
};

export default product;
