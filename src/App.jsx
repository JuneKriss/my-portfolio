import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

import blob from "./assets/blob.png";
import prog1 from "./assets/prog1.svg";
import prog2 from "./assets/prog2.svg";
import prog3 from "./assets/prog3.svg";
import prog4 from "./assets/prog4.svg";
import prog5 from "./assets/prog5.svg";
import prog6 from "./assets/prog6.svg";

function App() {
  const images = [prog1, prog2, prog3, prog4, prog5, prog6];
  const [current, setCurrent] = useState(0);
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isLight) {
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
    }
  }, [isLight]);

  return (
    <>
      <Navbar isLight={isLight} setIsLight={setIsLight} />
      <section className="heroSection">
        <div className="heroContent">
          <div className="heroTexts">
            <div className="group">
              <span>HI THERE, I'M</span>
              <h2>JUNE KRISS</h2>
            </div>
            <h1>DEVELOPER</h1>
            <h3>WEB & MOBILE</h3>
            <p>I build clean, user-friendly applications.</p>
          </div>
          <div className="heroIllustration">
            <img src={blob} alt="Blob" className="blob" />
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                className={`programming ${index === current ? "active" : ""}`}
              />
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="aboutContent">
          <div className="leftContent">
            <h1>About</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
              Phasellus vel pretium erat. Curabitur <br /> suscipit orci in leo
              consequat suscipit. <br /> Maecenas magna nulla, hendrerit eu
              facilisis porttitor, <br /> mollis iaculis ante.
            </p>
          </div>
          <div className="rightContent">
            <div className="educationPart">
              <h2>Education</h2>
              <div className="schoolContainer">
                <div className="school">
                  <h3>School</h3>
                  <p>Address</p>
                </div>
                <p>Bachelor</p>
                <span>Year</span>
              </div>
            </div>
            <div className="experiencePart">
              <h2>Experience</h2>
              <div className="experienceContainer">
                <div className="experience">
                  <div className="company">
                    <div className="companyInfo">
                      <h3>Position</h3>
                      <p>Company</p>
                    </div>
                    <p>Year</p>
                  </div>
                  <ul>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                  </ul>
                </div>
                <div className="experience">
                  <div className="company">
                    <div className="companyInfo">
                      <h3>Position</h3>
                      <p>Company</p>
                    </div>
                    <p>Year</p>
                  </div>
                  <ul>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                  </ul>
                </div>
                <div className="experience">
                  <div className="company">
                    <div className="companyInfo">
                      <h3>Position</h3>
                      <p>Company</p>
                    </div>
                    <p>Year</p>
                  </div>
                  <ul>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="techStackPart">
              <h2>Tech Stack</h2>
              <div className="stackContainer">
                <div className="stack">
                  <i
                    className={`devicon-html5-plain ${isLight ? "colored" : ""}`}
                  ></i>
                  <span>HTML</span>
                </div>
                <div className="stack">
                  <i
                    className={`devicon-css3-plain ${isLight ? "colored" : ""}`}
                  ></i>
                  <span>CSS</span>
                </div>
                <div className="stack">
                  <i
                    className={`devicon-javascript-plain ${isLight ? "colored" : ""}`}
                  ></i>
                  <span>Javascript</span>
                </div>
                <div className="stack">
                  <i
                    className={`devicon-react-plain ${isLight ? "colored" : ""}`}
                  ></i>
                  <span>React</span>
                </div>
                <div className="stack">
                  <i
                    className={`devicon-react-plain ${isLight ? "colored" : ""}`}
                  ></i>
                  <span>React Native</span>
                </div>
                <div className="stack">
                  <i
                    className={`devicon-python-plain ${isLight ? "colored" : ""}`}
                  ></i>
                  <span>Python</span>
                </div>
                <div className="stack">
                  <i
                    className={`devicon-django-plain ${isLight ? "colored" : ""}`}
                  ></i>
                  <span>Django</span>
                </div>
                <div className="stack">
                  <i
                    className={`devicon-php-plain ${isLight ? "colored" : ""}`}
                  ></i>
                  <span>PHP</span>
                </div>
                <div className="stack">
                  <i
                    className={`devicon-mysql-plain ${isLight ? "colored" : ""}`}
                  ></i>
                  <span>MySQL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
