import Header from "./header";
import BannerSection from "./components/banner-section";
import CardsContainer from "./components/cards/cards-container";
import { AboutUs } from "./components/about-us";

function App() {
  return (
    <main>
      <Header />
      <section>
        <BannerSection />
        <CardsContainer />
        <AboutUs />
      </section>
    </main>
  );
}

export default App;
