import { useState } from "react";
import "../styles.css";
export const Hypotenuse = () => {
  const [side1, setSide1] = useState("");
  const [side2, setSide2] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const calculateHypotenuse = () => {
    if (!side1 || !side2) {
      setResult("");
      return setError("Please fill both sides value");
    }
    const hypotenuse = Math.sqrt(
      Number(side1) * Number(side1) + Number(side2) * Number(side2)
    ).toFixed(2);
    setResult(hypotenuse);
    setError("");
  };
  return (
    <div className="container">
      <h1>Calculate Hypotenuse of a triangle</h1>
      <div className="error">{error}</div>

      <p className="input-label">Enter base value (a) =</p>
      <input
        type="number"
        value={side1}
        onChange={(e) => setSide1(e.target.value)}
      />
      <p className="input-label">Enter height value (b) =</p>
      <input
        type="number"
        value={side2}
        onChange={(e) => setSide2(e.target.value)}
      />
      <button className="submit-btn" onClick={calculateHypotenuse}>
        Calculate hypotenuse
      </button>
      <div className="hint">
        <h2>Hypotenuse formula</h2>
        <p>√(base² + height²)</p>
      </div>
      <div className="result">
        {result && (
          <div>
            The length of hypotenuse is <span className="answer">{result}</span>
          </div>
        )}
      </div>
    </div>
  );
};
