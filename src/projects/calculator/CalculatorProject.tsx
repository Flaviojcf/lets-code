import {
  ButtonsContainer,
  Container,
  Content,
  NumbersInResult,
  ResultContainer,
} from "./styles";
import db from "./database/db.json";
import { Button } from "./components/Button";
import { useEffect, useState } from "react";

interface DataProps {
  id: number;
  backgroundColor: string;
  color: string;
  value?: string;
  image?: string;
  arithmetic?: string;
}

export function CalculatorProject() {
  const [data, setData] = useState<DataProps[]>();
  const [firstNumber, setFirstNumber] = useState("");
  const [number, setNumber] = useState<String[]>([]);
  const [secondNumber, setSecondNumber] = useState("");
  const [arithmetic, setArithmetic] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    setData(db);
  }, []);

  function performOperation(type: string) {
    switch (type) {
      case "addition":
        return "+ ";
      case "subtraction":
        return "- ";
      case "multiplication":
        return "* ";
      case "division":
        return "/ ";
      case "percentage":
        return "% ";
    }
  }

  function handleClickNumber(value: string) {
    if (value === "." && (number.includes(".") || number.length === 0)) {
      return;
    }
    const currentNumber = [...number, value].join("");
    if (!arithmetic) {
      setFirstNumber(currentNumber);
    } else {
      setSecondNumber(currentNumber);
    }
    setNumber((state) => [...state, value]);
  }

  function handleClickArithmetic(type: string) {
    if (firstNumber === "") {
      return;
    } else if (!arithmetic) {
      const typeOperation = performOperation(type);
      setArithmetic(String(typeOperation));
      setNumber([]);
    }
  }

  function handleClickResult() {
    if (firstNumber === "" || secondNumber === "") {
      return;
    }
    const value = handleResolve(arithmetic);
    setResult(String(value));
    setFirstNumber("");
    setSecondNumber("");
    setArithmetic("");
    setNumber([]);
  }

  function handleTransform() {
    if (secondNumber === "") {
      setFirstNumber((prevFirstNumber) => {
        return prevFirstNumber.startsWith("-")
          ? prevFirstNumber.substring(1)
          : `-${prevFirstNumber}`;
      });
    } else {
      setSecondNumber((prevFirstNumber) => {
        return prevFirstNumber.startsWith("-")
          ? prevFirstNumber.substring(1)
          : `-${prevFirstNumber}`;
      });
    }
  }

  function handleResolve(type: string) {
    switch (type) {
      case "+ ":
        return Number(firstNumber) + Number(secondNumber);
      case "- ":
        return String(Number(firstNumber) - Number(secondNumber));
      case "* ":
        return String(Number(firstNumber) * Number(secondNumber));
      case "/ ":
        return Number(firstNumber) / Number(secondNumber);
      case "% ":
        return Number(firstNumber) % Number(secondNumber);
    }
  }

  function handleDeleteAll() {
    setFirstNumber("");
    setSecondNumber("");
    setArithmetic("");
    setNumber([]);
    setResult("");
  }

  function handleDeleteSecondNumber() {
    setSecondNumber("");
    setNumber([]);
  }

  return (
    <Container>
      <Content>
        <ResultContainer>
          <img src="/assets/calculator/images/equals.png" alt="equal-button" />
          <NumbersInResult>
            <span>
              {firstNumber} {arithmetic}
              {secondNumber !== "" && secondNumber}
            </span>
            <p>{result}</p>
          </NumbersInResult>
        </ResultContainer>
        <ButtonsContainer>
          {data?.map((response) => (
            <Button
              key={response.id}
              color={response.color}
              value={response.value}
              image={response.image}
              background={response.backgroundColor}
              arithmetic={response.arithmetic}
              handleClickArithmetic={handleClickArithmetic}
              handleClickNumber={handleClickNumber}
              handleClickResult={handleClickResult}
              handleDeleteAll={handleDeleteAll}
              handleDeleteSecondNumber={handleDeleteSecondNumber}
              handleTransform={handleTransform}
            />
          ))}
        </ButtonsContainer>
      </Content>
    </Container>
  );
}
