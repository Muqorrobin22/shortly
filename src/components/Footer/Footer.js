import React from "react";
import styled from "styled-components";
import Logo from "../../assets/images/logo2.svg";
import Ig from "../../assets/images/icon-instagram.svg";
import Twitter from "../../assets/images/icon-twitter.svg";

function Footer() {
  return (
    <FooterWrap>
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="info" role="navigation">
        <div className="link">
          <h1>Features</h1>
          <ul>
            <li>
              <p>Link Shortening</p>
            </li>
            <li>
              <p>Branded Links</p>
            </li>
            <li>
              <p>Analytics</p>
            </li>
          </ul>
        </div>
        <div className="link">
          <h1>Resources</h1>
          <ul>
            <li>
              <p>Blog</p>
            </li>
            <li>
              <p>Developers</p>
            </li>
            <li>
              <p>Support</p>
            </li>
          </ul>
        </div>
        <div className="link">
          <h1>Company</h1>
          <ul>
            <li>
              <p>About</p>
            </li>
            <li>
              <p>Our Team</p>
            </li>
            <li>
              <p>Careers</p>
            </li>
            <li>
              <p>Contact</p>
            </li>
          </ul>
        </div>
        <div className="social">
          <a href="https://www.instagram.com/muqorrobinn__/">
            <img src={Ig} alt="instagram" />
          </a>
          <a href="https://twitter.com/AlMuqorrobiin__">
            <img src={Twitter} alt="Twitter" />
          </a>
        </div>
      </div>
    </FooterWrap>
  );
}

const FooterWrap = styled.footer`
  display: flex;
  flex-direction: column;
  background-color: #232127;
  justify-content: center;
  align-items: center;
  padding: 5.4rem auto;

  .logo {
    margin-top: 5.4rem;
    img {
      color: white;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    margin-top: 5rem;
    .link {
      margin-bottom: 4rem;
    }
    h1 {
      font-family: Poppins;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 24px;
      /* identical to box height */

      text-align: center;
      letter-spacing: -0.25px;

      color: #ffffff;
      margin-bottom: 2.2rem;
    }
    li {
      list-style: none;
      margin-bottom: 1rem;
      p {
        font-family: Poppins;
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 22px;
        /* identical to box height */

        text-align: center;
        letter-spacing: -0.234375px;

        color: #bfbfbf;
      }
    }
    .social {
      display: flex;
      width: 100%;
      justify-content: space-around;
      margin-bottom: 6rem;
    }
  }

  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    padding: 7.2rem 10rem;
    align-items: flex-start;
    .logo {
      flex-basis: 20%;
      margin-top: 0;
      justify-content: center;
      display: flex;
    }
    .info {
      flex-direction: row;
      flex-basis: 80%;
      margin-top: 0;
      margin-left: 15%;
      .link {
        margin-bottom: 0;
        flex-basis: 25%;
        h1,
        p {
          text-align: left;
        }
      }
      .social {
        flex-basis: 11%;
        display: flex;
        justify-content: space-around;
        width: 100%;
      }
    }
  }
`;

export default Footer;
