import React from "react";
import { css } from "@emotion/css";

const product = () => {
  return (
    <div>
      <img
        src="/Assets/bank-robbery.png"
        alt=" logo"
        className={css`
          // display: flex;
          // justify-content: center;
          // text-align: center;
          margin: 10px 30px;
        `}
      />
      <h1>hello</h1>
    </div>
  );
};

export default product;
