import { Cards, Cards2, Cards3, Cards4 } from "./cards";

import "./style.css";

export function CardsContainer({ id }) {
  const cardsContent = [
    {
      number: "01",
      title: "Custom Website Development",
      description:
        "I build responsive, goal-focused websites using HTML, CSS, Bootstrap, and JavaScript, styled with SCSS, Tailwind, and basic React. I create intuitive, user-friendly interfaces with smooth, engaging features.",
    },
  ];

  const cardsContent2 = [
    {
      number: "02",
      title: "Wordpress Developer",
      description:
        "I craft responsive, customized WordPress websites with smooth plugin integration and engaging, user-friendly designs.",
    },
  ];
  const cardsContent3 = [
    {
      number: "04",
      title: "Shopify Developer",
      description:
        "I build and customize Shopify stores with sleek designs, smooth functionality, and optimized user experiences. My focus is on boosting your online sales and enhancing your brand’s digital presence with seamless, high-performing stores.",
    },
  ];

  const cardsContent4 = [
    {
      number: "03",
      title: "Wix Developer",
      description:
        "I design and customize responsive Wix websites that are visually appealing, user-friendly, and aligned with your brand goals.",
    },
  ];

  return (
    <div className="card-sec-container" id={id}>
      <div className="container">
        <h2 className="heading">Services</h2>
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
    </div>
  );
}
export default CardsContainer;
