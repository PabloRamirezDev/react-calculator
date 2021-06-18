import { FC } from "react";
import NumpadButton from "./NumpadButton";

type Props = {
    onInput: React.MouseEventHandler<HTMLButtonElement>;
}

const Numpad: FC<Props> = ({onInput}: Props) => {
  return (
    <div className="numpad">
      <NumpadButton num={1} onClick={onInput} />
      <NumpadButton num={2} onClick={onInput} />
      <NumpadButton num={3} onClick={onInput} />
      <br />
      <NumpadButton num={4} onClick={onInput} />
      <NumpadButton num={5} onClick={onInput} />
      <NumpadButton num={6} onClick={onInput} />
      <br />
      <NumpadButton num={7} onClick={onInput} />
      <NumpadButton num={8} onClick={onInput} />
      <NumpadButton num={9} onClick={onInput} />
    </div>
  );
};

export default Numpad;
