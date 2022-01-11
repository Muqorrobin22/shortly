import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Button } from "../Button/Button";

function InputGroup({ onSendData, onLoading }) {
  const inputRef = useRef();
  const [isLoading, setLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  const fecthData = async (e) => {
    e.preventDefault();
    const InputValue = inputRef.current.value;

    if (InputValue.length === 0 || InputValue.trim() === "") {
      setIsEmpty(true);
      return;
    }
    setIsEmpty(false);
    setLoading(true);
    onLoading(true);
    try {
      const response = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${InputValue}`
      );

      if (!response.ok) {
        throw new Error("Oops... Link is not Valid :(");
      }

      const data = await response.json();

      onSendData(data.result);
    } catch (error) {
      onSendData(error.message);
    }

    setLoading(false);
    onLoading(isLoading);
  };

  return (
    <Section empty={isEmpty}>
      <input placeholder="Shorten a link here..." type="text" ref={inputRef} />
      {isEmpty ? <p className="error">Input Can't Empty</p> : null}

      <Button onClick={fecthData}> Shorten It! </Button>
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
  position: relative;
  .error {
    font-family: Poppins;
    font-style: italic;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    /* identical to box height, or 112% */

    letter-spacing: 0.109091px;

    color: #f46363;
    position: absolute;
    width: 100%;
    height: 18px;
    left: 29px;
    top: 75px;
  }
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
    border: ${(props) => (props.empty ? "3px solid #F46363" : "none")};
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
    .error {
      font-size: 18px;
      left: 70px;
      top: 102px;
    }
  }
`;

export default InputGroup;
