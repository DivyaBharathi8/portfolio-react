import { Cards, Cards2, Cards3, Cards4 } from "./cards";

import "./style.css";

export function CardsContainer() {
  const cardsContent = [
    {
      number: "01",
      title: "Custom Website Development",
      description:
        "Crafting unique, responsive websites using HTML, CSS, JavaScript & Bootstrap — tailored for performance, design precision, and brand identity. Crafting unique, responsive websites using HTML, CSS, JavaScript",
    },
  ];

  const cardsContent2 = [
    {
      number: "02",
      title: "Custom Website Development",
      description:
        "Designing and developing dynamic, responsive websites using custom themes, plugins, and optimized layouts in WordPress.",
    },
  ];
  const cardsContent3 = [
    {
      number: "04",
      title: "Custom Website Development",
      description:
        "Crafting unique, responsive websites using HTML, CSS, JavaScript & Bootstrap — tailored for performance, design precision, and brand identity. Crafting unique, responsive websites using HTML, CSS, JavaScript",
    },
  ];

  const cardsContent4 = [
    {
      number: "03",
      title: "Custom Website Development",
      description:
        "Designing and developing dynamic, responsive websites using custom themes, plugins, and optimized layouts in WordPress.",
    },
  ];

  return (
    <div>
      <div className="card-section-top">
        <div className="card-left">
          {cardsContent.map((card, idx) => (
            <Cards
              key={idx}
              number={card.number}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
        <div className="card-right">
          {cardsContent2.map((values2, index) => (
            <Cards2
              keys={index}
              number={values2.number}
              title={values2.title}
              description={values2.description}
            />
          ))}
        </div>
      </div>

      <div className="card-section-bottom">
        <div className="card-right">
          {cardsContent4.map((values4, indexes) => (
            <Cards4
              keys={indexes}
              number={values4.number}
              title={values4.title}
              description={values4.description}
            />
          ))}
        </div>
        <div className="card-right">
          {cardsContent3.map((values3, indexs) => (
            <Cards3
              keys={indexs}
              number={values3.number}
              title={values3.title}
              description={values3.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default CardsContainer;
