import Stats from "./Stats";
import Textarea from "./Textarea";
import { createContext, useState } from "react";

export const wordStats = createContext("");

const Container = () => {
  const [text, setText] = useState("");
  const numberOfCharacter = text.length;

  return (
    <>
      <wordStats.Provider value={{ text, setText, numberOfCharacter }}>
        <main className="container">
          <Textarea />
          <Stats />
        </main>
      </wordStats.Provider>
    </>
  );
};

export default Container;
