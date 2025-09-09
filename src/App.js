import Header from "./header";
import BannerSection from "./components/banner-section";
import CardsContainer from "./components/cards/cards-container";

function App() {
  return (
    <main>
      <Header />
      <section>
        <BannerSection />
        <CardsContainer />
      </section>
    </main>
  );
}

export default App;
