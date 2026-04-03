import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    if (isLight) {
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
    }
  }, [isLight]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home isLight={isLight} setIsLight={setIsLight} />}
        />
        <Route
          path="/projects"
          element={<Projects isLight={isLight} setIsLight={setIsLight} />}
        />
      </Routes>
      <ScrollToTop />
    </Router>
  );
}

export default App;
