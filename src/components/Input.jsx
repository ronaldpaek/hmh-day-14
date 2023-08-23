import { useState } from "react";

function Input() {
  const [text, setText] = useState("");
  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
      <p>{text}</p>
    </>
  );
}

export default Input;
