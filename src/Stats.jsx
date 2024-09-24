import { useContext } from "react";
import { wordStats } from "./Container";

const Stats = () => {
  const { numberOfCharacter, calculateWords, calculateInstagramWord } =
    useContext(wordStats);

  const validateIns = () => {
    const number = calculateInstagramWord();
    if (number >= 0) {
      return number;
    } else {
      return "Out of limit";
    }
  };
  return (
    <>
      <section className="stats">
        <Stat number={calculateWords()} label="Words" />
        <Stat number={numberOfCharacter} label="Characters" />
        <Stat number={validateIns()} label="Instagram" />
        <Stat number={2200} label="Facebook" />
      </section>
    </>
  );
};

export default Stats;

const Stat = ({ number, label }) => {
  return (
    <section className="stat">
      <span className="stat__number">{number}</span>
      <h2 className="second-heading">{label}</h2>
    </section>
  );
};
