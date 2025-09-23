import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import MvvImg from "../../assets/images/projects/MVV.webp";
import SiImg from "../../assets/images/projects/South-India.webp";
import "../projects/project-style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projectsData = [
  { image: MvvImg, title: "Kims Sunshine", link: "https://example.com" },
  { image: SiImg, title: "Project Alpha", link: "https://site2.com" },
  { image: MvvImg, title: "Kims Sunshine", link: "https://example.com" },
  { image: SiImg, title: "Project Alpha", link: "https://site2.com" },
  { image: MvvImg, title: "Kims Sunshine", link: "https://example.com" },
  { image: SiImg, title: "Project Alpha", link: "https://site2.com" },
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

function ProjectsSection() {
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
    responsive: [
      { breakpoint: 1000, settings: { slidesToShow: 2, arrows: true } },
      { breakpoint: 650, settings: { slidesToShow: 1, arrows: true } },
    ],
  };

  if (isMobile === undefined) return null; // Avoid SSR/client mismatch

  return (
    <div className="projects-section container">
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
              Designing and developing dynamic, responsive websites using custom
              themes, plugins, and optimized layouts in WordPress.
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
