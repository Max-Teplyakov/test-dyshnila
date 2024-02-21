import { FC } from "react";
import { useAppSelector } from "../hooks";
import { IResult } from "../interfaces";

const Result: FC<{ result: IResult }> = ({ result }) => {
  const status = useAppSelector((state) => state.indicator.indicator);

  return (
    <div
      style={{
        width: 1088,
        minHeight: 920,
        border: "1px solid black",
        borderRadius: 20,
        background: status
          ? "linear-gradient(135.00deg, rgba(255, 255, 255, 0) 0%,rgba(0, 255, 87, 0.6) 100%)"
          : "linear-gradient(125.57deg, rgba(255, 255, 255, 0) 0%, rgba(255, 138, 122, 0.6) 100%)",
      }}
    >
      <div style={{ marginTop: 70, marginLeft: 100 }}>
        <p
          style={{
            fontSize: 200,
            fontWeight: 400,
            lineHeight: "100%",
            letterSpacing: -2,
          }}
        >
          {Number(result.temp).toFixed(1)} ℃
        </p>
        <p
          style={{
            fontSize: 40,
            fontWeight: 700,
            lineHeight: "100%",
            letterSpacing: -2,
          }}
        >
          Температура
        </p>
      </div>
      <div style={{ marginTop: 70, marginLeft: 100 }}>
        <p
          style={{
            fontSize: 200,
            fontWeight: 400,
            lineHeight: "100%",
            letterSpacing: -2,
          }}
        >
          {Number(result.co2).toFixed(0)} ppm
        </p>
        <p
          style={{
            fontSize: 40,
            fontWeight: 700,
            lineHeight: "100%",
            letterSpacing: -2,
          }}
        >
          CO2
        </p>
      </div>
    </div>
  );
};

export default Result;
