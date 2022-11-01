import "../styles.css";
import instaLogo from "../assets/instagram.svg";
import githubLogo from "../assets/github-alt.svg";
import linkedInLogo from "../assets/linkedin-alt.svg";
import twitterLogo from "../assets/twitter-alt.svg";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div> &copy; | 2022 | natkhatbalak</div>
        <div className="social-links">
          <div>
            {" "}
            <a
              href="https://github.com/dev-manindepth"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img src={githubLogo} alt="social link" />
            </a>
          </div>
          <div>
            {" "}
            <a
              href="https://www.linkedin.com/in/manish-kumar-a7913818a/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img src={linkedInLogo} alt="social link" />
            </a>
          </div>
          <div>
            {" "}
            <a
              href="https://twitter.com/Manishk73087268"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img src={twitterLogo} alt="social link" />
            </a>
          </div>
          <div>
            {" "}
            <a
              href="https://www.instagram.com/manishpatedhawala/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img src={instaLogo} alt="social link" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
