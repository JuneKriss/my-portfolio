import { useState, useEffect, useRef } from "react";
import "./Footer.css";

import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { cats } from "../../assets/index.js";

function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
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
          <img src={cats.nyanCatGif} className="nyanCat" alt="nyan cat" />
        </div>
      </section>
    </>
  );
}

export default Footer;
