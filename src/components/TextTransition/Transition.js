import React from "react";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = [
  "Full Stack Web Developer",
  "Open-Source Enthusiast",
  "Data Science Enthusiast"
];

const Transition = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <h3 style={{ textAlign: "center" }}>
      <TextTransition
        style={{ textAlign: "center" }}
        text={TEXTS[index % TEXTS.length]}
        springConfig={presets.wobbly}
      />
    </h3>
  );
};
export default Transition;
