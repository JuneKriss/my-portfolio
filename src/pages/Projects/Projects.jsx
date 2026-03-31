import { useState, useEffect, useRef } from "react";
import "./Projects.css";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import { FaGithub } from "react-icons/fa";

import { cmmsImages, lawImages } from "../../assets/index.js";

function Projects({ isLight, setIsLight }) {
  const [cmmsIndex, setCmmsIndex] = useState(0);
  const [lawIndex, setLawIndex] = useState(0);
  const [lightbox, setLightbox] = useState({
    open: false,
    images: [],
    index: 0,
  });
  const openLightbox = (images, index) => {
    const slides = images.map((img) =>
      typeof img === "string" ? { src: img } : { src: img.src },
    );
    setLightbox({ open: true, images: slides, index });
  };
  const closeLightbox = () => setLightbox((prev) => ({ ...prev, open: false }));
  const titleRef = useRef(null);
  const cmmsCardRef = useRef(null);
  const lawCardRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCmmsIndex((prev) => (prev + 1) % cmmsImages.length);
      setLawIndex((prev) => (prev + 1) % lawImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          } else {
            entry.target.classList.remove("in-view");
          }
        });
      },
      { threshold: 0.2 },
    );

    [titleRef, cmmsCardRef, lawCardRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar isLight={isLight} setIsLight={setIsLight} />
      <section>
        <div className="projectSection">
          <h1 className="projectsTitle" ref={titleRef}>
            Featured Projects
          </h1>
          <div className="projectCard-container">
            <div className="projectCard-featured" ref={cmmsCardRef}>
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
                <div
                  className="image-overlay"
                  onClick={() => openLightbox(cmmsImages, cmmsIndex)}
                >
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
              <a
                href="https://github.com/JuneKriss/Construction-Management-and-Monitoring-System-2025"
                className="githubButton"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="github-icon" />
                <span>Github</span>
              </a>
            </div>
            <div className="projectCard-featured" ref={lawCardRef}>
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
                <div
                  className="image-overlay"
                  onClick={() => openLightbox(lawImages, lawIndex)}
                >
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
              <a
                href="https://github.com/JuneKriss/Lawyer-Appointment-Mobile-App-2024"
                className="githubButton"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="github-icon" />
                <span>Github</span>
              </a>
            </div>
          </div>
        </div>
        <Lightbox
          open={lightbox.open}
          close={closeLightbox}
          slides={lightbox.images}
          index={lightbox.index}
          plugins={[Thumbnails]}
        />
      </section>
      <Footer />
    </>
  );
}

export default Projects;
