import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import Skills from "./pages/skills/Skills";
import Contact from "./pages/contact/Contact";
import Navbar from "./components/navbar/Navbar";
import GoToHome from "./components/GoToHome";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Navigate replace to="/portfolio" />} /> */}
          <Route exact path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />

          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="*"
            element={
              <main
                style={{
                  padding: "2rem",
                  textAlign: "center",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
        <GoToHome />
      </BrowserRouter>
    </>
  );
}

export default App;
