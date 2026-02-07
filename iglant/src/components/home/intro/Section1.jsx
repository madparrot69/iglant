import { useState, useEffect } from "react";
import { phrases } from "./section1_data";

import "./Section1.scss";

export default function Section1() {
  const [currentDescription, setCurrentDescription] = useState("");

  useEffect(() => {
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    setCurrentDescription(randomPhrase);
  }, []);

  return (
    <section className="section1">
      <h1>welcome to iglant - your personal au.</h1>
      <p>{currentDescription}</p>
    </section>
  );
}
