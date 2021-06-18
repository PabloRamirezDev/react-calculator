import { FC } from "react";

type Props = {
    num: number;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const NumpadButton: FC<Props> = ({num, onClick}: Props) => {
  return (
      <button onClick={onClick}>{num}</button>
  );
};

export default NumpadButton;
