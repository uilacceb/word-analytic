import { useState } from "react";

const Textarea = () => {
  const [text, setText] = useState("");
  const [warning, setWarning] = useState("");

  const handleChange = (e) => {
    let newText = e.target.value;
    if (newText.includes("<script>")) {
      setWarning("No script tag allowed!");
      setTimeout(() => setWarning(""), 1500);
      newText = newText.replace("<script>", "");
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
