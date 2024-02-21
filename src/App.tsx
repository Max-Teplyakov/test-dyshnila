import { useEffect, useState } from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import { useAppDispatch } from "./hooks";
import { addIndicator } from "./store/IndicatorsSlice";
import { IResult } from "./interfaces";

const initialState: IResult = {
  co2: "0",
  temp: "0",
};

const App = () => {
  const [result, setResult] = useState<IResult>(initialState);

  const dispatch = useAppDispatch();

  const res = async () => {
    await fetch("http://dushnila.gooddelo.com/data")
      .then((res) => res.json())
      .then((data) => {
        setResult(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    res();
  }, []);

  useEffect(() => {
    setInterval(() => {
      res();
    }, 60000);
  }, []);

  useEffect(() => {
    if (Number(result.temp) > 27 || Number(result.co2) > 800) {
      dispatch(addIndicator(false));
    } else {
      dispatch(addIndicator(true));
    }
  }, [result]);
  return (
    <>
      <Header />
      <Main result={result} />
    </>
  );
};

export default App;
