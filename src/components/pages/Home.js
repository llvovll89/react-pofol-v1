import "../../App.css";
// import Cards from "../Cards";
import MainSection from "../MainSection";
import About from "./About";
import Contact from "./Contact";
import Project from "./Project";

function Home() {
  return (
    <>
      <MainSection />
      <About />
      <Project />
      <Contact />
    </>
  );
}

export default Home;
