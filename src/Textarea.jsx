import { useState } from "react";

const Textarea = () => {
  const [text, setText] = useState("");
  return (
    <>
      <textarea
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        className="textarea"
        placeholder="Enter your text"
        spellCheck="false"
      />
    </>
  );
};

export default Textarea;
