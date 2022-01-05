import React from "react";
// import { ReactComponent as Logo } from "../../assets/images/illustration-working.svg";
import Logo from "../../assets/images/illustration-working.svg";
import { Box } from "@chakra-ui/react";
import styled from "styled-components";
import { ButtonRounded } from "../Button/Button";

function Header() {
  return (
    <Wrap role="banner">
      <div className="info">
        <h1>More than justshorter links</h1>
        <p>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <div className="button">
          <ButtonRounded href="#">Get Started</ButtonRounded>
        </div>
      </div>
      <div className="img">
        <img src={Logo} alt={Logo} />
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  position: relative;
  .img {
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .info {
    margin: 6rem 2.4rem 18.8rem;
    width: 90%;
    justify-content: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    h1 {
      font-family: Poppins;
      font-style: normal;
      font-weight: bold;
      font-size: 42px;
      line-height: 48px;
      /* or 114% */

      text-align: center;
      letter-spacing: -1.05px;

      color: #34313d;
    }
    p {
      font-family: Poppins;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 30px;
      /* or 167% */

      text-align: center;
      letter-spacing: 0.122727px;

      color: #9e9aa8;
      margin-top: 1.5rem;
    }
    .button {
      margin-top: 4.2rem;
    }
  }
`;

export default Header;
