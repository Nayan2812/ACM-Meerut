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
      <About />
      <AboutBlocks />
      <PressReleases />
      <Collaborator />
      <Footer />
    </>
  );
}

export default Home;
