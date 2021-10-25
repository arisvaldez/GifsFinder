import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";

import { GiftGridItem } from "./GiftGridItem";

export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className="animate__animated animate__backInLeft">{category}</h3>

      {loading && <p className="animate__animated animate__backInLeft">Loading..</p>}
      <div className="card-grid">
        {images.map((img) => {
          return <GiftGridItem {...img} key={img.id} />;
        })}
      </div>
    </>
  );
};
