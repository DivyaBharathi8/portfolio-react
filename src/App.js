import Header from "./header";
import BannerSection from "./components/banner-section";
import CardsContainer from "./components/cards/cards-container";
import { AboutUs } from "./components/about-us";
import DetailsContainer from "./components/details-card/details-container";
import SkillsContainer from "./components/skills/skills-container";
import ProjectsSection from "./components/projects/projects-container";
import ContactForm from "./components/form/form";
import Footer from "./footer";

function App() {
  return (
    <main>
      <Header />
      <section>
        <BannerSection id="home" />
        <CardsContainer id="services" />
        <AboutUs id="about" />
        <DetailsContainer id="details" />
        <SkillsContainer id="skills" />
        <ProjectsSection id="projects" />
        <ContactForm id="contact" />
      </section>
      <Footer />
    </main>
  );
}

export default App;
