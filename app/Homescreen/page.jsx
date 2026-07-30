'use client';

import Landing from "../Components/HomescreenComponents'/Landing";
import About from "../Components/HomescreenComponents'/About";
import Showcase from "../Components/HomescreenComponents'/Showcase";
import Features from "../Components/HomescreenComponents'/Features";
import Contact from "../Components/HomescreenComponents'/Contact";
import Footer from "../Components/HomescreenComponents'/Footer";

export default function Homescreen() {
  return (
    <main>
      <Landing />
      <About />
      <Showcase />
      <Features />
      <Contact />
      <Footer />
    </main>
  );
}
