import Stats from "./Stats";
import Textarea from "./Textarea";
import { createContext, useState } from "react";

export const wordStats = createContext("");

const Container = () => {
  const [text, setText] = useState("");
  const numberOfCharacter = text.length;
  const calculateWords = () => {
    const words = text
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0); //filter(word => word.length > 0) removes any empty strings from the array.
    return words.length;
  };
  const calculateRemainWord = (num) => {
    const remainWord = num - text.length;
    return remainWord >= 0 ? remainWord : "Out of limit";
  };

  return (
    <>
      <wordStats.Provider
        value={{
          text,
          setText,
          numberOfCharacter,
          calculateWords,
          calculateRemainWord,
        }}
      >
        <main className="container">
          <Textarea />
          <Stats />
        </main>
      </wordStats.Provider>
    </>
  );
};

export default Container;
