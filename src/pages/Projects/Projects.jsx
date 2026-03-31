import { useState, useEffect } from "react";
import "./Projects.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import { FaGithub } from "react-icons/fa";

import { cmmsImages, lawImages } from "../../assets/index.js";

function Projects({ isLight, setIsLight }) {
  const [cmmsIndex, setCmmsIndex] = useState(0);
  const [lawIndex, setLawIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCmmsIndex((prev) => (prev + 1) % cmmsImages.length);
      setLawIndex((prev) => (prev + 1) % lawImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar isLight={isLight} setIsLight={setIsLight} />
      <section>
        <div className="projectSection">
          <h1 className="projectsTitle">Featured Projects</h1>
          <div className="projectCard-container">
            <div className="projectCard-featured">
              <div className="imageContainer">
                {cmmsImages.map((img, i) => (
                  <img
                    key={i}
                    src={img.src}
                    alt="CMMS"
                    className="project-images"
                    data-fit={img.fit}
                    style={{ opacity: cmmsIndex === i ? 1 : 0 }}
                  />
                ))}
                <div className="image-overlay">
                  <span>View all images</span>
                </div>
              </div>
              <div className="projectTexts">
                <h2>Construction Management and Monitoring System</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque porta pharetra facilisis. Mauris suscipit lorem
                  lacinia blandit cursus. Fusce pharetra congue nisi et euismod.
                  Sed posuere, velit a dapibus auctor, tortor mauris tincidunt
                  erat, quis feugiat sem justo eu justo.
                </p>
              </div>
              <a href="#" className="githubButton">
                <FaGithub className="github-icon" />
                <span>Github</span>
              </a>
            </div>
            <div className="projectCard-featured">
              <div className="imageContainer">
                {lawImages.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="Law Office"
                    className="project-images"
                    data-fit="contain"
                    style={{ opacity: lawIndex === i ? 1 : 0 }}
                  />
                ))}
                <div className="image-overlay">
                  <span>View all images</span>
                </div>
              </div>
              <div className="projectTexts">
                <h2>Lawyer Appointment Mobile Application</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque porta pharetra facilisis. Mauris suscipit lorem
                  lacinia blandit cursus. Fusce pharetra congue nisi et euismod.
                  Sed posuere, velit a dapibus auctor, tortor mauris tincidunt
                  erat, quis feugiat sem justo eu justo.
                </p>
              </div>
              <a href="#" className="githubButton">
                <FaGithub className="github-icon" />
                <span>Github</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Projects;
