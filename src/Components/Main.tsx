import Content from "./Content";
import Result from "./Result";

export default function Main() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: 41,
      }}
    >
      <Content />
      <Result />
    </div>
  );
}
