import { useState, useEffect, useRef } from "react";
import "./Footer.css";

import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { cats } from "../../assets/index.js";

function Footer() {
  const footerRef = useRef(null);
  const [copied, setCopied] = useState(false);

  const handleEmailClick = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText("junekriss.avanzado@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === footerRef.current) {
            if (entry.isIntersecting) {
              footerRef.current.classList.add("animate");
              footerRef.current.classList.add("in-view");
            } else {
              footerRef.current.classList.remove("in-view"); // re-triggers every scroll
            }
          }
        });
      },
      { threshold: 0.3 },
    );

    if (footerRef.current) observer.observe(footerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section id="footer">
        <div className="footerWrapper" ref={footerRef}>
          <div className="footer">
            <div className="leftGroup">
              <div className="iconCircle">
                <img src={cats.catIcon} alt="Cat Icon" />
              </div>
              <span>June Kriss Avanzado</span>
            </div>

            <div className="rightGroup">
              <a
                href="https://www.linkedin.com/in/june-kriss-avanzado/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/JuneKriss"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a href="#" onClick={handleEmailClick} className="emailWrapper">
                <MdEmail />
                {copied && <span className="copiedTooltip">Copied!</span>}
              </a>
              <a
                href="https://www.facebook.com/june.avanzado"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/june4kriss/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="footerCover"></div>
          <img src={cats.nyanCatGif} className="nyanCat" alt="nyan cat" />
        </div>
      </section>
    </>
  );
}

export default Footer;
