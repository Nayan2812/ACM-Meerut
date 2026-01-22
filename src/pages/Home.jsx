import "../styles/style.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Collaborator from "../components/Collaborator";
import About from "../components/About";
import AboutBlocks from "../components/AboutBlocks";
import PressReleases from "../components/PressReleases";


function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Collaborator />
      <PressReleases />
      <About />
      <AboutBlocks />
      <Footer />
    </>
  );
}

export default Home;
