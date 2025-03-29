import React, { useEffect, useState } from "react";
import "./XRandomColor.css";

const XRandomColor = () => {
  const [color, setColor] = useState("#000000");
  const [typeOfColor, setTypeofColor] = useState("");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function randomHexColorGenerator() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
  }

  function randomRGBColorGenerator() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r},${g},${b})`);
  }

  useEffect(() => {
    if (typeOfColor === "hex") {
      randomHexColorGenerator();
    } else {
      randomRGBColorGenerator();
    }
  }, [typeOfColor]);

  return (
    <div
      className="main"
      style={{
        background: color,
        width: "100vw",
        height: "100vh",
      }}
    >
      <div>
        <button onClick={() => setTypeofColor("rgb")}>Create RGB color</button>
        <button onClick={() => setTypeofColor("hex")}>Create HEX color</button>
        <button
          onClick={
            typeOfColor === "hex"
              ? randomHexColorGenerator
              : randomRGBColorGenerator
          }
        >
          Create a Random Color
        </button>
      </div>
      <div>
        <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
};

export default XRandomColor;
