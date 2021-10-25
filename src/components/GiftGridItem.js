import React from "react";

export const GiftGridItem = ({ id, title, url }) => {
  console.log();
  return (
    <div className="card animate__animated animate__bounceIn">
      <img alt={title} src={url} />
      <p> {title}</p>
    </div>
  );
};
