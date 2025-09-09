import Cards from "./cards";
import "./style.css";

export function CardsContainer() {
  const cardsContent = [
    {
      number: "01",
      title: "Custom Website Development",
      description:
        "Crafting unique, responsive websites using HTML, CSS, JavaScript & Bootstrap — tailored for performance, design precision, and brand identity. Crafting unique, responsive websites using HTML, CSS, JavaScript",
    },
    {
      number: "02",
      title: "Custom Website Development",
      description:
        "Designing and developing dynamic, responsive websites using custom themes, plugins, and optimized layouts in WordPress.",
    },
    {
      number: "03",
      title: "Custom Website Development",
      description:
        "Designing and developing dynamic, responsive websites using custom themes, plugins, and optimized layouts in WordPress.",
    },
    {
      number: "04",
      title: "Custom Website Development",
      description:
        "Crafting unique, responsive websites using HTML, CSS, JavaScript & Bootstrap — tailored for performance, design precision, and brand identity. Crafting unique, responsive websites using HTML, CSS, JavaScript",
    },
    {
      number: "04",
      title: "Custom Website Development",
      description:
        "Crafting unique, responsive websites using HTML, CSS, JavaScript & Bootstrap — tailored for performance, design precision, and brand identity. Crafting unique, responsive websites using HTML, CSS, JavaScript",
    },
  ];

  return (
    <div className="card-section">
      {cardsContent.map((card, idx) => (
        <Cards
          key={idx}
          number={card.number}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
}
export default CardsContainer;
