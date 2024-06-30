import React, { useState } from "react";

function Card({ tour, removeTour }) {
  const { id, name, image, info, price } = tour;
  const [readMore, setReadMore] = useState(false);
  const description = readMore ? info : `${info.substring(0, 100)}...`;

  function toggleReadMore() {
    setReadMore(!readMore);
  }

  return (
    <div className="border-2 flex justify-center items-center flex-col">
      <img src={image} className="w-40" alt={name} />
      <div>
        <h4>{price}</h4>
        <h4>{name}</h4>
      </div>
      <div>
        <p>{description}</p>
        <span onClick={toggleReadMore}>{readMore ? "Show less" : "Read more"}</span>
      </div>
      <button onClick={() => removeTour(id)}>Not Interested</button>
    </div>
  );
}

export default Card;
