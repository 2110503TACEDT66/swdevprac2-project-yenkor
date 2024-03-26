import Link from "next/link";
import React from "react";
import ExploreCard from "./ExploreCard";

const ExplorePanel = async ({ carJson }: { carJson: Promise<CarJson> }) => {
  const carJsonReady = await carJson;
  return (
    <div className="w-[93%] h-2 flex flex-row flex-wrap">
      {carJsonReady.data.map((carItem: CarItem) => (
        <div className="w-[24%] h-[30rem] m-2 rounded-lg relative hover:scale-[102%] transition duration-200 ease-in-out active:scale-100">
              <ExploreCard key={carItem._id} name={carItem.name} telephone={carItem.telephone} price={carItem.price} src="" address={
                carItem.address
               }
              />
           />
        </div>
      ))}
    </div>
  );
};

export default ExplorePanel;