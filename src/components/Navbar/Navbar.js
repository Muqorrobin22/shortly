import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { ReactComponent as Menu } from "../../assets/images/menu.svg";
import { ReactComponent as Close } from "../../assets/images/close.svg";
import Mobile from "./Mobile";
import { ButtonRounded } from "../Button/Button";

const isActive = ({ isActive }) => {
  return {
    opacity: isActive ? "0.3" : "",
  };
};

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenuOpen = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <NavWrap>
      <Logo />

      {!isMenuOpen ? (
        <Menu onClick={toggleMenuOpen} className="hidden"></Menu>
      ) : (
        <Close onClick={toggleMenuOpen} className="hidden"></Close>
      )}
      {isMenuOpen &&
        ReactDOM.createPortal(
          <Mobile />,
          document.getElementById("overlay_background")
        )}

      <div className="nav">
        <ul>
          <li>
            <a href="#home">Features</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
        </ul>
      </div>
      <div className="nav">
        <div className="button">
          <a href="#">Log in</a>
          <a href="#" className="signin">
            Sign in
          </a>
        </div>
      </div>
    </NavWrap>
  );
}

const NavWrap = styled.nav`
  height: 7.2rem;
  background-color: var(--pure-white);
  display: flex;
  align-items: center;
  padding: 0 2.4rem;
  justify-content: space-between;
  z-index: 110;

  .nav {
    display: none;
  }

  @media (min-width: 768px) {
    .hidden {
      display: none;
    }
    .nav {
      display: block;
      ul {
        padding: 0;
        text-align: center;
        display: flex;
        justify-content: space-around;
        li {
          list-style: none;
          padding-left: 1.7rem;
          a {
            text-decoration: none;
            font-family: Poppins;
            font-style: normal;
            font-weight: bold;
            font-size: 15px;
            line-height: 22px;
            /* identical to box height */

            color: #9e9aa8;

            text-transform: uppercase;
            transition: all 0.2s ease;
            &:hover {
              color: #34313d;
            }
          }
        }
      }
    }
  }

  @media (min-width: 768px) {
    align-items: center;
    padding: 0 10rem;
    .button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      .signin {
        margin: 0;
        padding: 0.9rem 2.3rem;
        font-family: Poppins;
        font-style: normal;
        font-weight: bold;
        font-size: 15px;
        color: #ffffff;
        background-color: var(--color-primary);
        border-radius: 28px;
      }
      a {
        margin: 0;
        text-decoration: none;
        font-family: Poppins;
        font-style: normal;
        font-weight: bold;
        font-size: 15px;
        line-height: 27px;
        /* identical to box height */

        text-align: center;
        margin-right: 2rem;

        color: #9e9aa8;
        transition: all 0.2s ease;
        &:hover {
          color: #34313d;
        }
      }
    }
  }
`;

export default Navbar;
