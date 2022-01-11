import React from "react";
import styled from "styled-components";

function Error({ message }) {
  return (
    <OutputWrap>
      <div className="link">
        <h1>{message}</h1>
      </div>
    </OutputWrap>
  );
}

const OutputWrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f46363;
  padding: 2.4rem;
  border-radius: 5px;
  text-align: center;
  .garis {
    height: 1px;
    background-color: #9e9aa8;
    width: 100%;
    margin: 1rem auto;
  }
  .link {
    h1 {
      font-family: Poppins;
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 36px;
      /* identical to box height, or 225% */

      letter-spacing: 0.12px;

      color: white;
    }
  }

  @media (min-width: 1440px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 1.8rem 3.2rem;
    .link {
      h1 {
        font-size: 20px;
        line-height: 36px;
        /* identical to box height, or 180% */

        letter-spacing: 0.15px;
      }
    }
  }
`;

export default Error;
