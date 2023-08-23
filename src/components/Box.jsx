import { useState } from "react";

function Box() {
  const [toggle, setToggle] = useState(false);
  return (
    <div
      className={`box ${toggle ? "blue" : ""}`}
      onClick={() => {
        setToggle((prev) => !prev);
      }}
    />
  );
}

export default Box;
