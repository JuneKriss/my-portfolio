import { useState, useEffect, useRef } from "react";
import "./Projects.css";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
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
  const cmmsTextsRef = useRef(null);
  const lawTextsRef = useRef(null);

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

    [titleRef, cmmsCardRef, lawCardRef, cmmsTextsRef, lawTextsRef].forEach(
      (ref) => {
        if (ref.current) observer.observe(ref.current);
      },
    );

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
              <div className="projectTexts" ref={cmmsTextsRef}>
                <div className="projectDescription">
                  <h2>Construction Management and Monitoring System</h2>
                  <p>
                    A full-featured Construction Management and Monitoring
                    System with four user roles, built to optimize project
                    workflows and workforce coordination across construction
                    projects.
                  </p>
                </div>
                <div className="project-key-features">
                  <h3>Key Features</h3>
                  <ul>
                    <li>
                      Multi-role system with 4 user types for structured access
                      and management
                    </li>
                    <li>
                      QR-based attendance tracking with built-in scanner for
                      workers
                    </li>
                    <li>
                      Task creation and assignment with integrated calendar view
                    </li>
                    <li>
                      Project and workforce management for efficient
                      coordination
                    </li>
                    <li>
                      Resource management with tracking of materials and costs
                    </li>
                    <li>
                      Payroll system with support for bonuses and deductions
                    </li>
                    <li>Mobile-friendly interface for workers</li>
                    <li>Generation of overall and weekly project reports</li>
                  </ul>
                </div>
                <div className="project-tech-stack">
                  <h3>Tech Stack:</h3>
                  <ul>
                    <li>
                      <strong>Frontend:</strong> HTML, CSS, JavaScript
                    </li>
                    <li>
                      <strong>Backend:</strong> Django
                    </li>
                  </ul>
                </div>
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
              <div className="projectTexts" ref={lawTextsRef}>
                <div className="projectDescription">
                  <h2>Lawyer Appointment Mobile Application</h2>
                  <p>
                    A mobile application designed to streamline appointment
                    scheduling and client management for a law office, providing
                    users with an easy and organized way to book and manage
                    legal consultations.
                  </p>
                </div>
                <div className="project-key-features">
                  <h3>Key Features</h3>
                  <ul>
                    <li>
                      Appointment booking system for scheduling consultations
                      with lawyers
                    </li>
                    <li>
                      Viewing of upcoming appointments with detailed information
                    </li>
                    <li>Option to cancel scheduled appointments</li>
                    <li>
                      Access to appointment history for tracking past
                      consultations
                    </li>
                    <li>
                      Display of lawyer profiles, including details and
                      information
                    </li>
                  </ul>
                </div>
                <div className="project-tech-stack">
                  <h3>Tech Stack:</h3>
                  <ul>
                    <li>
                      <strong>Frontend:</strong> React Native
                    </li>
                    <li>
                      <strong>Backend:</strong> PHP, MySQL
                    </li>
                  </ul>
                </div>
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
          plugins={[Thumbnails, Zoom]}
        />
      </section>
      <Footer />
    </>
  );
}

export default Projects;
