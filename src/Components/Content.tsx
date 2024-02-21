import { FC, useEffect, useState } from "react";
import { useAppSelector } from "../hooks";
import { IResult } from "../interfaces";

const logo = require("../images/logo.png");

const Content: FC<{ result: IResult }> = ({ result }) => {
  const [indicators, setIndicators] = useState("");
  const status = useAppSelector((state) => state.indicator.indicator);

  useEffect(() => {
    if (status === false) {
      if (Number(result.temp) > 27) {
        if (Number(result.co2) > 800) {
          setIndicators("CO2 и Температура превышает норму");
        } else {
          setIndicators("Температура превышает норму");
        }
      }
      if (Number(result.co2) > 800) {
        if (Number(result.temp) > 27) {
          setIndicators("CO2 и Температура превышает норму");
        } else {
          setIndicators("CO2 превышает норму");
        }
      }
    } else {
      setIndicators("Все показатели в норме");
    }
  }, [status, result]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 41 }}>
      <div
        style={{
          maxWidth: 713,
          minHeight: 493,
          borderRadius: 20,
          background: status ? "rgb(122, 255, 167)" : "#FF8A7A",
        }}
      >
        <p
          style={{
            padding: "63px 0 176px 60px",
            maxWidth: 593,
            fontSize: 89,
            fontWeight: 500,
            lineHeight: "100%",
            letterSpacing: -6,
          }}
        >
          Душнила доволен вами
        </p>
        <p
          style={{
            paddingLeft: 63,
            maxWidth: 593,
            fontSize: 34,
            fontWeight: 400,
            lineHeight: "100%",
          }}
        >
          {indicators}
        </p>
      </div>
      <div
        style={{
          display: "flex",
          gap: 41,
        }}
      >
        <div
          style={{
            width: 336,
            minHeight: 383,
            borderRadius: 20,
            background: "rgb(0, 0, 0)",
          }}
        >
          <p
            style={{
              margin: "55px 20px 125px 20px",
              fontSize: 55,
              fontWeight: 500,
              lineHeight: "100%",
              letterSpacing: -2,
              color: "white",
            }}
          >
            Дней без душноты 0
          </p>
          <button
            className="btn__history"
            style={{
              marginLeft: 20,
              padding: "15px 30px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: 296,
              height: 64,
              border: "1px solid #fff",
              borderRadius: 100,
              cursor: "pointer",
            }}
          >
            <p
              style={{
                fontSize: 25,
                fontWeight: 500,
                lineHeight: "100%",
                letterSpacing: -2,
              }}
            >
              История
            </p>
            <p
              style={{
                fontSize: 25,
                fontWeight: 500,
                lineHeight: "100%",
                letterSpacing: -2,
              }}
            >
              →
            </p>
          </button>
        </div>
        <div
          style={{
            width: 336,
            minHeight: 383,
            border: "1px solid black",
            borderRadius: 20,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <img
            style={{ position: "absolute", bottom: -40, right: -50 }}
            src={logo}
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Content;
