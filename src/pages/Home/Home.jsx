import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import {
  LaptopMinimal,
  ClipboardClock,
  CalendarCheck,
  ClockArrowDown,
} from "lucide-react";
import { images, heroImages } from "../../assets/index.js";

function Home({ isLight, setIsLight }) {
  const [currentHeroImage, setCurrentHeroImage] = useState(0);
  const nextIndex = (prev, length) => (prev + 1) % length;

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const [isAboutVisible, setIsAboutVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prev) => nextIndex(prev, heroImages.length));
    }, 3000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  useEffect(() => {
    // Trigger hero on first load
    if (heroRef.current) {
      heroRef.current.classList.add("animate");
    }
  }, []);

  useEffect(() => {
    const heroObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            heroRef.current.classList.add("animate");
          } else {
            heroRef.current.classList.remove("animate");
          }
        });
      },
      { threshold: 0.3 },
    );

    const aboutObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            aboutRef.current?.classList.add("show");
            setTimeout(() => {
              aboutRef.current?.classList.add("done");
            }, 1200);
          } else {
            aboutRef.current?.classList.remove("show", "done");
          }
        });
      },
      { threshold: 0.2 },
    );

    const projectsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            projectsRef.current.classList.add("animate");
          } else {
            projectsRef.current.classList.remove("animate");
          }
        });
      },
      { threshold: 0.3 },
    );

    if (heroRef.current) heroObserver.observe(heroRef.current);
    if (aboutRef.current) aboutObserver.observe(aboutRef.current);
    if (projectsRef.current) projectsObserver.observe(projectsRef.current);

    return () => {
      heroObserver.disconnect();
      aboutObserver.disconnect();
      projectsObserver.disconnect();
    };
  }, []);

  return (
    <>
      <Navbar isLight={isLight} setIsLight={setIsLight} />
      <section className="heroSection" id="home" ref={heroRef}>
        <div className="heroContent">
          <div className="heroTexts">
            <div className="group">
              <span>HI THERE, I'M</span>
              <h2>JUNE KRISS</h2>
            </div>
            <h1>DEVELOPER</h1>
            <h3>WEB & MOBILE</h3>
            <p>I build clean, user-friendly applications.</p>

            <Link to="/projects" className="hero-projects-button">
              View Projects
            </Link>
          </div>
          <div className="heroIllustration">
            <img src={images.blob} alt="Blob" className="blob" />
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
      <section id="about" ref={aboutRef}>
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
      <section id="projects" ref={projectsRef}>
        <div className="projectsContent">
          <div className="projectHead">
            <div>
              <h1>Projects</h1>
            </div>
            <div>
              <Link to="/projects">View Projects</Link>
            </div>
          </div>
          <div className="projectContainer">
            <div className="marquee-track">
              <div className="marquee-set">
                <div className="projectCard">
                  <LaptopMinimal className="projectIcon" />
                  <h3>Management Systems</h3>
                </div>
                <div className="projectCard">
                  <ClipboardClock className="projectIcon" />
                  <h3>Appointment Systems</h3>
                </div>
                <div className="projectCard">
                  <CalendarCheck className="projectIcon" />
                  <h3>Booking Systems</h3>
                </div>
                <div className="projectCard">
                  <ClockArrowDown className="projectIcon" />
                  <h3>Ordering Systems</h3>
                </div>
              </div>

              {/* duplicate */}
              <div className="marquee-set" aria-hidden="true">
                <div className="projectCard">
                  <LaptopMinimal className="projectIcon" />
                  <h3>Management Systems</h3>
                </div>
                <div className="projectCard">
                  <ClipboardClock className="projectIcon" />
                  <h3>Appointment Systems</h3>
                </div>
                <div className="projectCard">
                  <CalendarCheck className="projectIcon" />
                  <h3>Booking Systems</h3>
                </div>
                <div className="projectCard">
                  <ClockArrowDown className="projectIcon" />
                  <h3>Ordering Systems</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
