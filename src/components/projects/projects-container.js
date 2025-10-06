import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import PartyImg from "../../assets/images/projects/Partynwheels.webp";
import KimsImg from "../../assets/images/projects/Kims.webp";
import KonceptImg from "../../assets/images/projects/Koncept Skin.webp";
import MvvImg from "../../assets/images/projects/MVV.webp";
import SurabhiImg from "../../assets/images/projects/surabhi.webp";
import AyaanshImg from "../../assets/images/projects/ayaansh.webp";
import SKITImg from "../../assets/images/projects/skit-solutions.webp";
import JumboImg from "../../assets/images/projects/jumbo.webp";
import SarvejanaImg from "../../assets/images/projects/sarvejana.webp";
import AdityaImg from "../../assets/images/projects/aditya.webp";
import SnyImg from "../../assets/images/projects/sny.webp";
import SouthIndiaImg from "../../assets/images/projects/South-India.webp";
import fiveamfreshImg from "../../assets/images/projects/5amfresh.webp";
import MarutiImg from "../../assets/images/projects/maruti-drones.webp";
import ValueZoneImg from "../../assets/images/projects/value-zone.webp";
import KavyaImg from "../../assets/images/projects/Kavya Reoofing.webp";
import FloordaddyImg from "../../assets/images/projects/floordaddy.webp";
import RdfImg from "../../assets/images/projects/rdf.webp";
import ResortireImg from "../../assets/images/projects/resortire.webp";
import YudantechImg from "../../assets/images/projects/yudan-tech-dell.webp";
import EscapeImg from "../../assets/images/projects/escape-time.webp";
import ClassicImg from "../../assets/images/projects/clssic.webp";
import TTTImg from "../../assets/images/projects/ttt.webp";
import FlooredNYImg from "../../assets/images/projects/floorednewyork.webp";
import HRappImg from "../../assets/images/projects/hrapplication.webp";
import SoshokuImg from "../../assets/images/projects/soshoku.webp";
import NishangiImg from "../../assets/images/projects/Nishangi.webp";
import KarlaniImg from "../../assets/images/projects/Karlan.webp";
import MVfenceiImg from "../../assets/images/projects/mv-fence.webp";
import GaaptuffImg from "../../assets/images/projects/Gaptuff.webp";
import DiginkImg from "../../assets/images/projects/digink.webp";
import "../projects/project-style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projectsData = [
  {
    image: PartyImg,
    title: "Party N Wheels",
    link: "https://partynwheels.com/",
  },
  { image: KonceptImg, title: "Koncept Skin", link: "http://konceptskin.com/" },
  {
    image: KimsImg,
    title: "KIMS Sun Shine",
    link: "https://www.kimssunshine.co.in/",
  },
  {
    image: MvvImg,
    title: "MVV Builders",
    link: "https://www.mvvbuilders.com/",
  },
  {
    image: AyaanshImg,
    title: "Ayaansh Infra",
    link: "https://www.ayaanshinfra.com/",
  },
  {
    image: JumboImg,
    title: "Jumbo SS Kitchens",
    link: "https://www.jumbosskitchens.com/",
  },
  {
    image: SKITImg,
    title: "SK IT Solutions",
    link: "https://skitsolutions.co/",
  },
  {
    image: SoshokuImg,
    title: "Soshoku",
    link: "https://fnd.243.mytemp.website/soshokunew/",
  },
  {
    image: SurabhiImg,
    title: "Surabhi Infra",
    link: "https://surabhiinfra.com/",
  },
  { image: SnyImg, title: "Sny Cosmos", link: "https://www.snycosmos.com/" },
  {
    image: SarvejanaImg,
    title: "Sarvejana Foundation",
    link: "https://fnd.243.mytemp.website/sarvejana_foundation/",
  },
  {
    image: NishangiImg,
    title: "Nishangi",
    link: "https://nishangiglobalschool.com/",
  },
  {
    image: AdityaImg,
    title: "Aditya Drier",
    link: "https://www.adityadrier.com/",
  },
  {
    image: ValueZoneImg,
    title: "ValueZone",
    link: "http://valuezone.online/",
  },
  {
    image: SouthIndiaImg,
    title: "South India",
    link: "https://www.southindiaeshop.com/",
  },
  { image: fiveamfreshImg, title: "5am Fresh", link: "#" },
  {
    image: MarutiImg,
    title: "Marut Dones",
    link: "https://marutdrones.com/",
  },
  {
    image: FloordaddyImg,
    title: "Floor Daddy",
    link: "https://floordaddy.com/",
  },
  {
    image: KavyaImg,
    title: "Kavya Roofing",
    link: "https://www.kavyaroofing.com/",
  },
  { image: KarlaniImg, title: "Karlan", link: "https://karlan.in/" },
  {
    image: MVfenceiImg,
    title: "MV Fences",
    link: "https://www.mvfences.com/",
  },
  { image: RdfImg, title: "RDF India", link: "https://www.rdfindia.org/" },
  {
    image: ResortireImg,
    title: "Resortire",
    link: "https://resortire.com/",
  },
  {
    image: TTTImg,
    title: "Temple Town",
    link: "https://templetowntirupati.com/",
  },
  {
    image: YudantechImg,
    title: "Youdan Tech",
    link: "https://youdan.net/gitam-dell/",
  },
  {
    image: EscapeImg,
    title: "Escape Time",
    link: "https://www.escapetime.in/",
  },
  {
    image: ClassicImg,
    title: "Classic Interiors",
    link: "https://www.classicinteriors.info/",
  },
  {
    image: FlooredNYImg,
    title: "Floored NY",
    link: "https://floorednewyork.com/",
  },
  {
    image: GaaptuffImg,
    title: "Gaap Tuff",
    link: "https://www.gaaptuff.com/",
  },
  {
    image: HRappImg,
    title: "HR Application",
    link: "https://hr.shiftwave.com/",
  },
  {
    image: DiginkImg,
    title: "Digink Studio",
    link: "https://www.diginkstudio.in/",
  },
];

// Custom Arrow Components
function Arrow(props) {
  const { className, style, onClick, direction } = props;
  return (
    <button
      className={`custom-arrow ${direction}`}
      style={{ ...style }}
      onClick={onClick}
      aria-label={direction === "next" ? "Next slide" : "Previous slide"}
    >
      {direction === "next" ? "→" : "←"}
    </button>
  );
}

function ProjectsSection({ id }) {
  const [isMobile, setIsMobile] = useState(undefined);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 650);
    checkMobile(); // set at mount
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <Arrow direction="next" />,
    prevArrow: <Arrow direction="prev" />,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      { breakpoint: 1000, settings: { slidesToShow: 2, arrows: true } },
      { breakpoint: 650, settings: { slidesToShow: 1, arrows: true } },
    ],
  };

  if (isMobile === undefined) return null; // Avoid SSR/client mismatch

  return (
    <div className="projects-section container" id={id}>
      <div className="projects-section-header">
        <div className="project-header-left">
          <div>
            <p className="project-sub-head">working process</p>
            <h2>
              Latest <span className="emphasis">Projects</span>
            </h2>
          </div>
          <div className="mid-line"></div>
          <div className="projects-desc">
            <p>
              Designing and developing responsive, high-performing websites and
              apps with modern technologies, custom designs, and seamless user
              experiences.
            </p>
          </div>
        </div>
      </div>
      <Slider {...settings}>
        {projectsData.map((project, idx) => (
          <div key={idx}>
            <div className="project-card">
              <img src={project.image} alt={project.title} />
              <a
                className="view-link"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
                <i className="fas fa-arrow-right btn-arrow"></i>
              </a>
              <h3>{project.title}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ProjectsSection;
