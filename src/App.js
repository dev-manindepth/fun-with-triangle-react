import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AreaOfTriangle } from "./components/AreaOfTriangle";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hypotenuse } from "./components/Hypotenuse";
import { IsTriangle } from "./components/IsTriangle";
import { Quiz } from "./components/Quiz";
export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Quiz />} />
        <Route path="/isTriangle" element={<IsTriangle />} />
        <Route path="/hypotenuse" element={<Hypotenuse />} />
        <Route path="/areaOfTriangle" element={<AreaOfTriangle />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

// import "./styles.css";
// import { useRef, useState } from "react";
// import { data } from "./data";
// import instaLogo from "./assets/instagram.svg";
// import githubLogo from "./assets/github-alt.svg";
// import linkedInLogo from "./assets/linkedin-alt.svg";
// import twitterLogo from "./assets/twitter-alt.svg";

// export default function App() {
//   const formRef = useRef(null);
//   const [result, setResult] = useState();

//   const formSubmitHandler = (e) => {
//     e.preventDefault();

//     const userSubmittedValues = new FormData(formRef.current);
//     let score = 0;
//     for (let val of userSubmittedValues) {
//       const [questionId, answer] = val;
//       data.map((ques) => {
//         if (ques.id === questionId && ques.answer === answer) {
//           score++;
//         }
//         return score;
//       });
//     }
//     setResult(score);
//   };
//   return (
//     <div className="App">
//       <header className="app-header">
//         <h1 className="app-logo">Fun With Traingle</h1>
//         <nav>
//           <ul className="nav-links">
//             <li className="nav-link">
//               <a href="#ds">Is Traingle ?</a>{" "}
//             </li>
//             <li className="nav-link">
//               <a href="#fd">Quiz</a>{" "}
//             </li>
//             <li className="nav-link">
//               <a href="#fd">Hypotenuse</a>{" "}
//             </li>
//             <li className="nav-link">
//               <a href="#fsd">Area of Traingle</a>{" "}
//             </li>
//           </ul>
//         </nav>
//       </header>
//       <main className="container">
//         <h1>Quiz on Triangles</h1>
//         <h3>For each correct answer you will get 1 point</h3>
//         <h4>*All questions are mandatory </h4>
//         <form className="quiz-form" onSubmit={formSubmitHandler} ref={formRef}>
//           <div className="question-container">
//             {data.map((ques) => {
//               return (
//                 <div className="question" key={ques.id}>
//                   <p>{ques.question}</p>
//                   <div className="options-container">
//                     {ques.options.map((option) => {
//                       return (
//                         <div>
//                           <input
//                             type="radio"
//                             name={`${ques.id}`}
//                             value={option}
//                           />
//                           <label>{option}</label>
//                         </div>
//                       );
//                     })}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//           <input
//             type="submit"
//             value="Submit Answers"
//             className="submit-answer"
//           />
//         </form>
//         <div className="result">
//           {result && (
//             <div>
//               You scored <span className="score">{result}</span>
//             </div>
//           )}
//         </div>
//       </main>
//       <footer>
//         <div className="footer-container">
//           <div> &copy; | 2022 | natkhatbalak</div>
//           <div className="social-links">
//             <div>
//               {" "}
//               <a
//                 href="https://github.com/dev-manindepth"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 {" "}
//                 <img src={githubLogo} alt="social link" />
//               </a>
//             </div>
//             <div>
//               {" "}
//               <a
//                 href="https://www.linkedin.com/in/manish-kumar-a7913818a/"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 {" "}
//                 <img src={linkedInLogo} alt="social link" />
//               </a>
//             </div>
//             <div>
//               {" "}
//               <a
//                 href="https://twitter.com/Manishk73087268"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 {" "}
//                 <img src={twitterLogo} alt="social link" />
//               </a>
//             </div>
//             <div>
//               {" "}
//               <a
//                 href="https://www.instagram.com/manishpatedhawala/"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 {" "}
//                 <img src={instaLogo} alt="social link" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }
