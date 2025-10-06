import React from "react";
import Details from "./details";

function DetailsContainer() {
  const detailsData = [
    { detailTitle: "Name", detailDes: "Divya Bharathi P" },
    { detailTitle: "Phone", detailDes: "+919014716599" },
    { detailTitle: "Email", detailDes: "divyabharathi0807@gmail.com" },
    { detailTitle: "Freelance", detailDes: "Available" },
    { detailTitle: "LinkedIn", detailDes: "Linkedin/divyabharathi.p" },
    { detailTitle: "Location", detailDes: "Visakhapatnam" },
  ];
  return (
    <section className="detail-sec container">
      <div className="details-container">
        {detailsData.map((values, index) => (
          <Details
            key={index}
            detailTitle={values.detailTitle}
            detailDes={
              values.detailTitle === "Email" ? (
                <a href={`mailto:${values.detailDes}`}>{values.detailDes}</a>
              ) : values.detailTitle === "LinkedIn" ? (
                <a
                  href={`https://www.linkedin.com/in/divya-bharathi-p/`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {values.detailDes}
                </a>
              ) : values.detailTitle === "Phone" ? (
                <a href={`tel:${values.detailDes}`} target="_self">
                  {values.detailDes}
                </a>
              ) : (
                <p>{values.detailDes}</p>
              )
            }
          />
        ))}
      </div>
    </section>
  );
}

export default DetailsContainer;
