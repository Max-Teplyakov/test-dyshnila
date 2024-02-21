import { FC } from "react";
import Content from "./Content";
import Result from "./Result";
import { IResult } from "../interfaces";

const Main: FC<{ result: IResult }> = ({ result }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: 41,
      }}
    >
      <Content result={result} />
      <Result result={result} />
    </div>
  );
};

export default Main;
