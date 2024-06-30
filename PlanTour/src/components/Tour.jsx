import React from "react";
import Card from "./Card";

function Tour({ tours, removeTour }) {
  return (
    <div className="flex flex-col min-h-[100vh] justify-center items-center py-7 my-2">
      <div>
        <h1 className="text-2xl font-bold mb-6">Plan Tour</h1>
      </div>
      <div className=" flex justify-center items-center w-[80vw]">
      <div
        className="grid gap-6 w-[100%]"
        style={{
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 300px))',
          gridTemplateRows: 'repeat(2, 1fr)'
        }}
      >
        {tours.map((tour) => (
          <Card key={tour.id} tour={tour} removeTour={removeTour} />
        ))}
      </div>
    </div>
    </div>
  );
}

export default Tour;
