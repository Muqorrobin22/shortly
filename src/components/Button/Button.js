import React from "react";
import styled from "styled-components";

export function ButtonRounded({ href, children, onClick }) {
  return (
    <ButtonCta onClick={onClick} href={href}>
      {children}
    </ButtonCta>
  );
}
export function Button({ href, children, onClick, copied }) {
  return (
    <ButtonCtaNormal copied={copied} onClick={onClick} href={href}>
      {children}
    </ButtonCtaNormal>
  );
}

const ButtonCta = styled.a`
  padding: 1.4rem 4rem;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  /* identical to box height */

  color: #ffffff;
  background-color: var(--color-primary);
  height: 5.6rem;
  width: 19.7rem;
  border-radius: 28px;
  cursor: pointer;
  transition: all 0.4s ease;

  &:hover {
    background-color: #9ae3e3;
  }
`;
const ButtonCtaNormal = styled.a`
  padding: 1.4rem 4rem;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  /* identical to box height */

  color: #ffffff;
  background-color: ${(props) =>
    props.copied ? "var(--color-secondary-dark)" : "var(--color-primary)"};
  height: 4.8rem;
  line-height: 2rem;
  width: 100%;
  border-radius: 5px;
  text-align: center;
  transition: all 0.4s ease;
  cursor: pointer;
  &:hover {
    background-color: #9ae3e3;
  }
`;
