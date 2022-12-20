import { useState } from "react";
import "../styles.css";

export const AreaOfTriangle = () => {
  const [side1, setSide1] = useState("");
  const [side2, setSide2] = useState("");
  const [side3, setSide3] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const calculateArea = () => {
    console.log(side1, side2, side3);
    if (!side1 || !side2 || !side3) {
      setResult("");
      return setError("Please fill all three sides value");
    }
    if (
      Number(side1) + Number(side2) < Number(side3) ||
      Number(side2) + Number(side3) < Number(side1) ||
      Number(side3) + Number(side1) < Number(side2)
    ) {
      setResult("");
      return setError(
        `Invalid length 
         Hint: The sum of any two side should always be greater than third side`
      );
    }

    //s-> semiperimeter
    const s = (Number(side1) + Number(side2) + Number(side3)) / 2;
    const area = Math.sqrt(
      s * (s - Number(side1)) * (s - Number(side2)) * (s - Number(side3))
    ).toFixed(2);
    setResult(area);
    setError("");
  };
  return (
    <div className="container">
      <h1>Calculate Hypotenuse of a triangle</h1>
      <div className="error">{error}</div>

      <p className="input-label">Enter first side of a triangle</p>
      <input
        type="number"
        value={side1}
        onChange={(e) => setSide1(e.target.value)}
      />
      <p className="input-label">Enter second side of a triangle</p>
      <input
        type="number"
        value={side2}
        onChange={(e) => setSide2(e.target.value)}
      />
      <p className="input-label">Enter third side of a triangle</p>
      <input
        type="number"
        value={side3}
        onChange={(e) => setSide3(e.target.value)}
      />
      <button className="submit-btn" onClick={calculateArea}>
        Calculate
      </button>
      <div className="hint">
        <h2>Hypotenuse formula</h2>
        <p>√(base² + height²)</p>
      </div>
      <div className="result">
        {result && (
          <div>
            Area of a triangle using heron's formula is{" "}
            <span className="answer">{result}</span>units
          </div>
        )}
      </div>
    </div>
  );
};
