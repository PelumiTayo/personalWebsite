import React, { Fragment } from "react";
import Home from "../Home/Home";
import Skills from "../Skills/Skills";
import Navbar from "../Navbar/Navbar";
import Projects from "../Projects/Projects";
import About from "../About/About";
import Contact from "../Contact/Contact";

export default function App() {
  return (
    <Fragment>
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <About />
      <Contact />
    </Fragment>
  );
}
