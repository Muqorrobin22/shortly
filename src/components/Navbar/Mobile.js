import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ButtonRounded } from "../Button/Button";

const isActive = ({ isActive }) => {
  return {
    opacity: isActive ? "0.3" : "",
  };
};

function Mobile() {
  return (
    <Fragment>
      <MenuWrap>
        <ul>
          <li>
            <a href="#home">Features</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#main">Resources</a>
          </li>
        </ul>
        <div className="garis"></div>
        <div className="button">
          <a href="#">Log in</a>
          <ButtonRounded href="#"> Sign up </ButtonRounded>
        </div>
      </MenuWrap>
      <Overlay></Overlay>
    </Fragment>
  );
}

const MenuWrap = styled.div`
  position: absolute;
  padding: 4rem 2.4rem;
  width: 80%;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--color-secondary-dark);
  top: 7.2rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  z-index: 100;
  border-radius: 10px;
  animation: slideIn 0.2s ease-in forwards;
  .button {
    display: flex;
    flex-direction: column;
    a {
      text-decoration: none;
      font-family: Poppins;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 27px;
      /* identical to box height */

      text-align: center;

      color: #ffffff;
      margin-bottom: 2.4rem;
      transition: all 0.2s ease;
      &:hover {
        color: #34313d;
      }
    }
  }
  ul {
    padding: 0;
    text-align: center;
    li {
      list-style: none;
      padding-top: 2rem;
      a {
        text-decoration: none;
        font-family: Poppins;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 27px;
        /* identical to box height */

        text-align: center;

        color: #ffffff;

        transition: all 0.2s ease;
        &:hover {
          color: #34313d;
        }
      }
    }
  }
  .garis {
    height: 2px;
    width: 90%;
    background-color: var(--color-secondary-light);
    margin: 3rem 0;
    opacity: 0.25;
  }
  @keyframes slideIn {
    from {
      opacity: 0;
      left: 0;
    }
    to {
      opacity: 1;

      left: 50%;
    }
  }

  @media (min-width: 768px) {
    & {
      display: none;
      visibility: hidden;
    }
  }
`;

const Overlay = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 7.2rem;
  bottom: 0;
  height: 350rem;
  background-color: black;
  opacity: 0.5;
  z-index: 50;
`;

export default Mobile;
