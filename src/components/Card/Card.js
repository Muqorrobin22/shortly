import React from "react";
import styled from "styled-components";

function Card({ images, title, text }) {
  return (
    <CardWrap>
      <div className="img">
        <img src={images} alt={title} />
      </div>
      <div className="info" role="complementary">
        <h1> {title} </h1>
        <p> {text} </p>
      </div>
    </CardWrap>
  );
}

const CardWrap = styled.div`
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 7.7rem 2.5rem 4.1rem;
  position: relative;
  margin-top: 9.2rem;
  background-color: #fff;
  border-radius: 5px;
  .img {
    position: absolute;
    left: 50%;
    top: -10%;
    transform: translateX(-50%);
    width: 8.8rem;
    height: 8.8rem;
    background-color: var(--color-secondary-dark);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .info {
    h1 {
      font-family: Poppins;
      font-style: normal;
      font-weight: bold;
      font-size: 22px;
      line-height: 33px;
      /* identical to box height */

      text-align: center;

      color: #34313d;
      width: 100%;
    }
    p {
      font-family: Poppins;
      font-style: normal;
      font-weight: 500;
      font-size: 15px;
      line-height: 26px;
      /* or 173% */

      text-align: center;
      width: 100%;

      color: #9e9aa8;
    }
  }
`;

export default Card;
