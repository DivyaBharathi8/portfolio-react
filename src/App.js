import Header from "./header";
import BannerSection from "./components/banner-section";
import CardsContainer from "./components/cards/cards-container";
import { AboutUs } from "./components/about-us";
import DetailsContainer from "./components/details-card/details-container";
import SkillsContainer from "./components/skills/skills-container";

function App() {
  return (
    <main>
      <Header />
      <section>
        <BannerSection />
        <CardsContainer />
        <AboutUs />
        <DetailsContainer />
        <SkillsContainer />
      </section>
    </main>
  );
}

export default App;
