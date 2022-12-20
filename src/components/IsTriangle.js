import { useState } from "react";
import "../styles.css";
export const IsTriangle = () => {
  const [angle1, setAngle1] = useState("");
  const [angle2, setAngle2] = useState("");
  const [angle3, setAngle3] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const checkIsTriangle = () => {
    if (!angle1 || !angle2 || !angle3) {
      setResult("");
      return setError(
        "Please fill all angles value . Triangles always have three angles"
      );
    }
    if (Number(angle1) > 180 || Number(angle2) > 180 || Number(angle3) > 180) {
      setResult("");
      return setError("Invalid Angles");
    }
    setError("");
    if (Number(angle1) + Number(angle2) + Number(angle3) === 180) {
      setResult("🎉 Yayy!  The given angles form triagles");
    } else {
      setResult(" These angles donot form angles");
    }
  };
  return (
    <div className="container">
      <h1>Angles of Triangles</h1>
      <div className="error">{error}</div>
      <p className="input-label">Angle 1</p>
      <input
        type="number"
        value={angle1}
        onChange={(e) => setAngle1(e.target.value)}
      />
      <p className="input-label">Angle 2</p>
      <input
        type="number"
        value={angle2}
        onChange={(e) => setAngle2(e.target.value)}
      />
      <p className="input-label">Angle 3</p>
      <input
        type="number"
        value={angle3}
        onChange={(e) => setAngle3(e.target.value)}
      />
      <button className="submit-btn" onClick={checkIsTriangle}>
        Is Triangle ?
      </button>
      <div className="result">{result}</div>
    </div>
  );
};
