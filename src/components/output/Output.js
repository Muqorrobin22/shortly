import React from "react";
import styled from "styled-components";
import { Button } from "../Button/Button";
import { useMediaQuery } from "@chakra-ui/react";

function Output({ link, newLink }) {
  const [isLargerThan1440] = useMediaQuery("(min-width: 1440px)");

  return (
    <OutputWrap>
      <div className="link">
        <h1>coba</h1>
      </div>
      {!isLargerThan1440 ? <div className="garis"></div> : null}
      <div className="newLink">
        <h1>newLInk</h1>
        <Button>Copy</Button>
      </div>
    </OutputWrap>
  );
}

const OutputWrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 2.4rem;
  border-radius: 5px;
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
      font-size: 16px;
      line-height: 36px;
      /* identical to box height, or 225% */

      letter-spacing: 0.12px;

      color: #34313d;
    }
  }
  .newLink {
    display: flex;
    flex-direction: column;
    h1 {
      font-family: Poppins;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 36px;
      /* identical to box height, or 225% */

      letter-spacing: 0.12px;

      color: #2bd0d0;
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
    .newLink {
      flex-direction: row;
      align-items: center;
      h1 {
        font-size: 20px;
        line-height: 36px;
        /* identical to box height, or 180% */

        text-align: right;
        letter-spacing: 0.15px;
        margin-right: 4rem;
      }
    }
  }
`;

export default Output;
