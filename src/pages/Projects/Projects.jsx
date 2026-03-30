import { useState, useEffect, useRef } from "react";
import "./Projects.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Projects() {
  const [isLight, setIsLight] = useState(false);

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
      <Footer />
    </>
  );
}

export default Projects;
