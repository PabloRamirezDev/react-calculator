import { FC } from "react";

type Props = {
    result: string;
}

const ResultBoxInline: FC<Props> = ({result}: Props) => {
  return (
      <input type="text" readOnly value={result} />
  );
};

export default ResultBoxInline;
