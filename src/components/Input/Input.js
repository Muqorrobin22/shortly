import React from "react";
import styled from "styled-components";
import { Button } from "../Button/Button";

function InputGroup() {
  return (
    <Section>
      <input placeholder="Shorten a link here..." type="text" />
      <Button href="#"> Shorten It! </Button>
    </Section>
  );
}

const Section = styled.div`
  background-color: var(--color-secondary-dark);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2.5rem;
  border-radius: 10px;
  input {
    margin-bottom: 2.5rem;
    width: 100%;
    height: 4.8rem;
    padding-left: 1.6rem;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 36px;
    /* identical to box height, or 225% */

    letter-spacing: 0.12px;

    color: #34313d;
    border-radius: 5px;
  }
  input:active,
  input:focus {
    outline: none;
    border: none;
  }
  @media (min-width: 1440px) {
    flex-direction: row;
    align-items: center;
    padding: 5.2rem 6.4rem;
    input {
      margin-bottom: 0;
      width: 300%;
      margin-right: 3rem;
      font-size: 20px;
      line-height: 36px;
      /* identical to box height, or 180% */

      letter-spacing: 0.15px;
    }
  }
`;

export default InputGroup;
