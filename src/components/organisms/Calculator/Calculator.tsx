import { useEffect, useState } from "react";
import { getOperatorIndex } from "../../../utils/functions/helpers";
import { Display } from "../../atoms/Display/Display";
import { Keyboard } from "../../molecules/Keyboard/Keyboard";
import "./styles.css";

export const Calculator = () => {
  const [previou, setPreviou] = useState("");
  const [answer, setAnswer] = useState("0");
  const [equal, setEqual] = useState(false);
  const [, setLastPressed] = useState("");

  useEffect(() => {
    if (equal) {
      setPreviou(`${previou}= ${answer}`);
      setEqual(false);
      return;
    }
    if (answer === "0") setPreviou("");
    else setPreviou(answer);
  }, [answer]);

  const handleNumber = (number: string) => {
    setLastPressed((pre) => {
      if (pre === "=") {
        setAnswer(number);
      }
      return number;
    });
    if (number === ".") {
      const reverseInput = answer.split("").reverse().join("");
      const lastPointIndex = reverseInput.indexOf(".");
      const lastOperatorIndex = getOperatorIndex(reverseInput);
      if (lastPointIndex !== -1 && lastOperatorIndex === -1) return;
      if (lastPointIndex !== -1 && lastPointIndex < lastOperatorIndex) return;
    }
    if (number === "0" && answer === "0") return;
    if (answer === "0") {
      setAnswer(number);
      if (number === ".") {
        setAnswer("0.");
      }
    } else {
      setAnswer(answer + number);
    }
  };

  const handleOperator = (operator: string) => {
    setLastPressed(operator);
    const lastInput = answer.length > 0 ? answer[answer.length - 1] : "";
    const antepenultimateInput =
      answer.length > 1 ? answer[answer.length - 2] : "";

    if (!"+-*/".includes(lastInput)) {
      setAnswer(answer + operator);
      return;
    }
    if (operator === "-") {
      if ("+-*/".includes(antepenultimateInput)) return;
      setAnswer(answer + operator);
    } else {
      if ("/*+-".includes(antepenultimateInput)) {
        setAnswer(answer.substring(0, answer.length - 2) + operator);
        return;
      }
      setAnswer(answer.substring(0, answer.length - 1) + operator);
    }
  };

  const handleEqual = () => {
    setLastPressed("=");
    setAnswer(eval(answer).toString());
    setEqual(true);
  };

  const handleAC = () => {
    setLastPressed("");
    setPreviou("");
    setAnswer("0");
  };

  return (
    <div className='calculator'>
      <Display previou={previou} answer={answer} />
      <Keyboard
        handleNumber={handleNumber}
        handleAC={handleAC}
        handleOperator={handleOperator}
        handleEqual={handleEqual}
      />
    </div>
  );
};
