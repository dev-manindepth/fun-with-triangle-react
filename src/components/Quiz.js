import "../styles.css";
import { useRef, useState } from "react";
import { data } from "../data";

export const Quiz = () => {
  const formRef = useRef(null);
  const [result, setResult] = useState();

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const userSubmittedValues = new FormData(formRef.current);
    let score = 0;
    for (let val of userSubmittedValues) {
      const [questionId, answer] = val;
      data.map((ques) => {
        if (ques.id === questionId && ques.answer === answer) {
          score++;
        }
        return score;
      });
    }
    setResult(score);
  };
  return (
    <div className="container">
      <h1>Quiz on Triangles</h1>
      <h3>For each correct answer you will get 1 point</h3>
      <form className="quiz-form" onSubmit={formSubmitHandler} ref={formRef}>
        <div className="question-container">
          {data.map((ques) => {
            return (
              <div className="question" key={ques.id}>
                <p>{ques.question}</p>
                <div className="options-container">
                  {ques.options.map((option) => {
                    return (
                      <div>
                        <input
                          type="radio"
                          name={`${ques.id}`}
                          value={option}
                        />
                        <label>{option}</label>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <input type="submit" value="Submit Answers" className="submit-btn" />
      </form>
      <div className="result quiz-result">
        {result && (
          <div>
            You scored <span className="score">{result}</span>
          </div>
        )}
      </div>
    </div>
  );
};
