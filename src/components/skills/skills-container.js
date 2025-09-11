import React from "react";
import HtmlImg from "../../assets/images/html.png";
import CssImg from "../../assets/images/css.png";
import BoostrapImg from "../../assets/images/boostrap.png";
import JsImg from "../../assets/images/js.png";
import ReactImg from "../../assets/images/react.png";
import FigmaImg from "../../assets/images/figma.png";
import WordPressImg from "../../assets/images/wordpress.png";
import ShopifyImg from "../../assets/images/shopify.png";
import WixImg from "../../assets/images/wix.png";
import PhotoShopImg from "../../assets/images/photoshop.png";
import IllustratorImg from "../../assets/images/illustrator.png";
import XdImg from "../../assets/images/xd.png";
import "../comp-style.css";

export default function SkillsContainer() {
  const skillData = [
    { name: "HTML", img: HtmlImg },
    { name: "CSS", img: CssImg },
    { name: "Bootstrap", img: BoostrapImg },
    { name: "JavaScript", img: JsImg },
    { name: "React", img: ReactImg },
    { name: "Figma", img: FigmaImg },
    { name: "WordPress", img: WordPressImg },
    { name: "Shopify", img: ShopifyImg },
    { name: "Wix", img: WixImg },
    { name: "Photoshop", img: PhotoShopImg },
    { name: "Illustrator", img: IllustratorImg },
    { name: "Adobe XD", img: XdImg },
    { name: "Shopify", img: ShopifyImg },
    { name: "Wix", img: WixImg },
    { name: "Photoshop", img: PhotoShopImg },
  ];

  return (
    <section className="skill-sec">
      <div className="skill-container">
        <h2 className="heading">My Favourite Tools</h2>
        <div className="skill-box">
          {skillData.map((skills, index) => (
            <div className="skill-item">
              <div key={index} className="skill-item-list">
                <img src={skills.img} alt={skills.name} />
                <span>{skills.name.toUpperCase()}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
