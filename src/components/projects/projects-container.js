import React from "react";
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
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <Arrow direction="next" />,
    prevArrow: <Arrow direction="prev" />,
    responsive: [
      { breakpoint: 1000, settings: { slidesToShow: 2 } },
      { breakpoint: 650, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="projects-section">
      <div className="projects-section-header">
        <div className="project-header-left">
          <div>
            <p className="project-sub-head">working process</p>
            <h2>
              Latest <span className="emphasis">Projects</span>
            </h2>
          </div>
          <div className="mid-line"></div>
          <div>
            <p>
              Designing and developing dynamic, responsive websites using custom
              themes, plugins, and optimized layouts in WordPress.
            </p>
          </div>
        </div>

        <div className="carousel-arrows"></div>
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
                <i class="fas fa-arrow-right btn-arrow"></i>
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
