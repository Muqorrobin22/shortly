import React from "react";
import styled from "styled-components";
import { ButtonRounded } from "../Button/Button";

function FooterInfo() {
  return (
    <FooterInfoWrap>
      <div>
        <h1>Boost your links today</h1>
        <ButtonRounded href="#">Get Started</ButtonRounded>
      </div>
    </FooterInfoWrap>
  );
}

const FooterInfoWrap = styled.div`
  padding: 9rem 3.5rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-secondary-dark);
  h1 {
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 48px;
    /* identical to box height, or 171% */

    text-align: center;
    letter-spacing: -0.7px;

    color: #ffffff;
    margin-bottom: 5rem;
  }
`;

export default FooterInfo;
