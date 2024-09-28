import { useState } from "react";
import { useContext } from "react";
import { wordStats } from "./Container";

const Textarea = () => {
  const [warning, setWarning] = useState("");
  const { text, setText } = useContext(wordStats);




  const handleChange = (e) => {
    let newText = e.target.value;
    if (newText.includes("<script>")) {
      setWarning("No script tag allowed!");
      setTimeout(() => setWarning(""), 1500);
      newText = newText.replace("<script>", "");
    }
    if (newText.includes("@")) {
      setWarning("No @ symbol allowed!");
      setTimeout(() => setWarning(""), 1500);
      newText = newText.replace("@", "");
    }
    setText(newText);
  };

  return (
    <>
      <div className="textarea">
        <textarea
          value={text}
          onChange={handleChange}
          className="textarea"
          placeholder="Enter your text"
          spellCheck="false"
        />

        <p className="warning">{warning}</p>
      </div>
    </>
  );
};

export default Textarea;
