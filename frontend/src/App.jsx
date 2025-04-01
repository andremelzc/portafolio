import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Formation from "./components/Formation";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ButtonGoStart from "./components/ButtonGoStart";

function App() {
  return (
    <>
      <NavBar />
      <ButtonGoStart />
      <Home />
      <Formation />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
