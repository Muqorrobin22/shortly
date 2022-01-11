import React, { useState } from "react";
import styled from "styled-components";
import InputGroup from "../Input/Input";
import Brand from "../../assets/images/icon-brand-recognition.svg";
import Detailed from "../../assets/images/icon-detailed-records.svg";
import Fully from "../../assets/images/icon-fully-customizable.svg";
import Card from "../Card/Card";
import Output from "../output/Output";
import Error from "../output/Error";

const StatistikData = [
  {
    title: "Brand Recognition",
    text: "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
    images: Brand,
  },
  {
    title: "Detailed Records",
    text: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    images: Detailed,
  },
  {
    title: "Fully Customizable",
    text: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    images: Fully,
  },
];

function MainSection() {
  const [isShortly, setIsShortly] = useState([]);

  const dataAPI = (shortlyData) => {
    if (typeof shortlyData === "string") {
      setIsShortly(shortlyData);
    } else {
      const data = {
        ...shortlyData,
      };
      const result = [];
      result.push(data);

      setIsShortly(result);
    }
  };

  return (
    <Section role="main" id="main">
      <div className="group">
        <InputGroup onSendData={dataAPI} />
      </div>
      <div className="output">
        {typeof isShortly === "string" ? (
          <Error message={isShortly} />
        ) : (
          isShortly.map((data) => (
            <Output
              key={data.code}
              link={data.original_link}
              newLink={data.short_link}
            />
          ))
        )}
      </div>
      <div className="statistik" role="contentinfo">
        <h1 className="h1">Advanced Statistics</h1>
        <p className="p">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
        <div className="card">
          {StatistikData.map((data) => (
            <Card
              key={data.title}
              images={data.images}
              title={data.title}
              text={data.text}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  background-color: var(--color-secondary-lighter);
  padding: 0 2.4rem 8rem;
  .output {
    margin-top: 3rem;
  }
  .group {
    transform: translateY(-50%);
  }
  .statistik {
    margin: 8rem 2.4rem;
    text-align: center;
    .h1 {
      font-family: Poppins;
      font-style: normal;
      font-weight: bold;
      font-size: 28px;
      line-height: 48px;
      /* identical to box height, or 171% */

      text-align: center;
      letter-spacing: -0.7px;

      color: #34313d;
    }
    .p {
      font-family: Poppins;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 28px;
      /* or 175% */

      text-align: center;
      letter-spacing: 0.109091px;

      color: #9e9aa8;
      margin-top: 2rem;
    }
  }

  @media (min-width: 1440px) {
    padding: 0 10rem 8rem;
    .card {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }
    .statistik {
      .h1 {
        font-size: 40px;
        line-height: 48px;
      }
      .p {
        font-size: 18px;
        line-height: 32px;
      }
    }
  }
`;

export default MainSection;
