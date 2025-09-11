import React from "react";
import Details from "./details";

export function DetailsContainer() {
  const detailsData = [
    { detailTitle: "Name", detailDes: "Divya Bharathi P" },
    { detailTitle: "Phone", detailDes: "+919014716599" },
    { detailTitle: "Freelance", detailDes: "Available" },
    { detailTitle: "LinkedIn", detailDes: "Linkedin/divyabharathi.p" },
    { detailTitle: "Email", detailDes: "divyabharathi0807@gmail.com" },
  ];
  return (
    <section className="detail-sec">
      <div className="details-container">
        {detailsData.map((values, index) => (
          <Details
            key={index}
            detailTitle={values.detailTitle}
            detailDes={values.detailDes}
          />
        ))}
      </div>
    </section>
  );
}

export default DetailsContainer;
