import React from "react";
import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import About from "../component/About";
import Skills from "../component/Skills";
import Projects from "../component/Projects";
import Contactinfo from "../component/Contactinfo";
import Footer from "../component/Footer";

export default function Home() {
  return (
    <div className="bg-pink-200 min-h-screen">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contactinfo />
      </main>

      <Footer />
    </div>
  );
}
