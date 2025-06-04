import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./sections/Home";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Gallery from "./sections/Gallery";
import Contact from "./sections/Contact";

const App: React.FC = () => {
  useEffect(() => {
  }, []);

  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Experience />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
