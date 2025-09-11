import React from "react";
import "../comp-style.css";

export function Details({ detailTitle, detailDes }) {
  return (
    <div>
      <p className="details-name">{detailTitle}</p>
      <p className="details-des">{detailDes}</p>
    </div>
  );
}
export default Details;
