import { FC, useState } from "react";
import Numpad from "./Numpad";
import ResultBoxInline from "./ResultBoxInline";

const Arithmetic: FC = () => {
  const [display, setDisplay] = useState("");

  const handleInput: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    setDisplay(display+(e.target as HTMLButtonElement).innerText);
  };

  return (
    <>
      <ResultBoxInline result={display} />
      <Numpad onInput={handleInput} />
    </>
  );
};

export default Arithmetic;
