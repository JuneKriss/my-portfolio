import { useState, useEffect, useRef } from "react";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";

import catIcon from "./assets/catIcon.png";
import nyanCatGif from "./assets/nyan-cat.gif";

import blob from "./assets/blob.png";
import prog1 from "./assets/prog1.svg";
import prog2 from "./assets/prog2.svg";
import prog3 from "./assets/prog3.svg";
import prog4 from "./assets/prog4.svg";
import prog5 from "./assets/prog5.svg";
import prog6 from "./assets/prog6.svg";

import sample from "./assets/project-images/sample.jpg";
import proj1 from "./assets/project-images/proj1.jpg";
import proj2 from "./assets/project-images/proj2.jpg";
import proj3 from "./assets/project-images/proj3.jpg";

function App() {
  const nextIndex = (prev, length) => (prev + 1) % length;
  const footerRef = useRef(null);

  const aboutRef = useRef(null);
  const [isAboutVisible, setIsAboutVisible] = useState(false);

  const heroImages = [prog1, prog2, prog3, prog4, prog5, prog6];
  const [currentHeroImage, setCurrentHeroImage] = useState(0);

  const projectImages = [proj1, proj2, proj3];
  const [currentProjectImage, setCurrentProjectImage] = useState(0);

  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prev) => nextIndex(prev, heroImages.length));
    }, 3000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProjectImage((prev) => nextIndex(prev, projectImages.length));
    }, 4000);

    return () => clearInterval(interval);
  }, [projectImages.length]);

  useEffect(() => {
    if (isLight) {
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
    }
  }, [isLight]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // ABOUT SECTION
          if (entry.target === aboutRef.current) {
            setIsAboutVisible(entry.isIntersecting);
          }

          // FOOTER SECTION
          if (entry.target === footerRef.current) {
            if (entry.isIntersecting) {
              footerRef.current.classList.add("animate");
            }
          }
        });
      },
      { threshold: 0.3 },
    );

    if (aboutRef.current) observer.observe(aboutRef.current);
    if (footerRef.current) observer.observe(footerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar isLight={isLight} setIsLight={setIsLight} />
      <section className="heroSection" id="home">
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
            {heroImages.map((img, index) => (
              <img
                key={index}
                src={img}
                className={`programming ${index === currentHeroImage ? "active" : ""}`}
              />
            ))}
          </div>
        </div>
      </section>
      <section
        id="about"
        ref={aboutRef}
        className={isAboutVisible ? "show" : ""}
      >
        <div className="aboutContent">
          <div className="leftContent">
            <h1>About</h1>
            <p>
              I’m a 22 years-old <strong>developer</strong> based in
              <strong> Iligan City, Philippines</strong>, with a strong interest
              in building clean, user-focused web applications. I’m always
              looking for ways to improve how I build—whether that’s refining my
              code, learning new tools, or taking on projects that challenge me.
              I value <strong> problem-solving</strong>,
              <strong> continuous learning</strong>, and creating work that I
              can be proud of.
            </p>
          </div>
          <div className="rightContent">
            <div className="educationPart">
              <h2>Education</h2>
              <div className="schoolContainer">
                <div className="school">
                  <h3>Saint Michael's College</h3>
                  <p>Quezon Ave., Iligan City</p>
                </div>
                <p className="bachelor">
                  Bachelor of Science in Information Technology
                </p>
                <span>2021 - 2025</span>
              </div>
            </div>
            <div className="experiencePart">
              <h2>Experience</h2>
              <div className="experienceContainer">
                <div className="experience">
                  <div className="company">
                    <div className="companyInfo">
                      <h3>Front End Developer</h3>
                      <p>
                        Global Emergency Medical Registry — Contract (Remote)
                      </p>
                    </div>
                    <p>July 2025 - December 2025</p>
                  </div>
                  <ul>
                    <li>
                      Developed the frontend of a mobile AED Simulation app
                      using React Native, creating interactive and responsive UI
                      components
                    </li>
                    <li>
                      Implemented real-time ECG waveform visualization and
                      multi-rhythm support (VFib, VTach, Asystole, Sinus) for
                      training scenarios
                    </li>

                    <li>
                      Designed a modular component architecture for scalability
                      and maintainability, including waveform display, step
                      tracker, and rhythm selection
                    </li>
                    <li>
                      Managed simulation flow and state using React Context and
                      custom hooks for seamless user experience
                    </li>
                  </ul>
                </div>
                <div className="experience">
                  <div className="company">
                    <div className="companyInfo">
                      <h3>Full-Stack Web Developer</h3>
                      <p>Freelance (Thesis Project Client)</p>
                    </div>
                    <p>August 2025 - February 2026</p>
                  </div>
                  <ul>
                    <li>
                      Developed a full-stack missing person reporting system
                      with case reporting, police verification, and sightings
                      management.
                    </li>
                    <li>
                      Built messaging and notification functionality to support
                      interaction between users and authorities
                    </li>
                    <li>
                      Worked with a client and a development partner to build
                      and deliver a complete reporting and monitoring system
                      from concept to deployment
                    </li>
                  </ul>
                </div>
                <div className="experience">
                  <div className="company">
                    <div className="companyInfo">
                      <h3>Web Developer Intern</h3>
                      <p>Iligan Light & Power, Inc. (On-site)</p>
                    </div>
                    <p>February 2025 - June 2025</p>
                  </div>
                  <ul>
                    <li>
                      Contributed to the development of an internal ticketing
                      system using React, Django, and PostgreSQL
                    </li>
                    <li>
                      Built responsive user interfaces with Material-UI,
                      improving usability across devices
                    </li>
                    <li>
                      Applied Redux for state management to handle dynamic data
                      and improve application flow
                    </li>
                    <li>
                      Collaborated with the team using GitLab for version
                      control, issue tracking, and code reviews
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
      <section id="projects">
        <div className="projectsContent">
          <div className="leftContent">
            <h1>Projects</h1>
          </div>
          <div className="rightContent">
            <div className="projectCard">
              <div className="cardLeft">
                {projectImages.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    className={`projects ${index === currentProjectImage ? "active" : ""}`}
                  />
                ))}
              </div>
              <div className="cardRight">
                <div className="smallImagesContainer">
                  <div className="card">
                    <img src={sample} alt="Project Image" />
                    <div className="overlay">
                      <span>View Project</span>
                    </div>
                  </div>
                </div>
                <div className="bottom">
                  <p>Lorem ipsum dolor sit amet, consectetur</p>
                  <button>
                    <i className={`devicon-github-plain`}></i>
                    <span>Github</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="projectCard">
              <div className="cardLeft">
                {projectImages.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    className={`projects ${index === currentProjectImage ? "active" : ""}`}
                  />
                ))}
              </div>
              <div className="cardRight">
                <div className="smallImagesContainer">
                  <div className="card">
                    <img src={sample} alt="Project Image" />
                    <div className="overlay">
                      <span>View Project</span>
                    </div>
                  </div>
                </div>
                <div className="bottom">
                  <p>Lorem ipsum dolor sit amet, consectetur</p>
                  <button>
                    <i className={`devicon-github-plain`}></i>
                    <span>Github</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="footer">
        <div className="footerWrapper" ref={footerRef}>
          <div className="footer">
            <div className="leftGroup">
              <div className="iconCircle">
                <img src={catIcon} alt="Cat Icon" />
              </div>
              <span>June Kriss Avanzado</span>
            </div>

            <div className="rightGroup">
              <a href="#">
                <FaLinkedin />
              </a>
              <a href="#">
                <FaGithub />
              </a>
              <a href="#">
                <MdEmail />
              </a>
              <a href="#">
                <FaFacebook />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="footerCover"></div>
          <img src={nyanCatGif} className="nyanCat" alt="nyan cat" />
        </div>
      </section>
    </>
  );
}

export default App;
