import ShimmerUi from "./ShimmerUi";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../config/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const Menuitems = () => {
  const [openIndex, setOpenIndex] = useState(null); // which section is open
  const { resId } = useParams();

  const menu = useRestaurantMenu(resId);

  if (menu === null) return <ShimmerUi />;

  const { name, avgRating, totalRatingsString, costForTwoMessage, cuisines, areaName, sla } =
    menu.cards[2]?.card?.card?.info || {};

  const cards = menu.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index); // close if already open
  };

  return (
    <div className="menu flex flex-col items-center">
      <h1 className="text-5xl font-bold">{name}</h1>
      <h2 className="text-xl font-semibold">
        {avgRating} ({totalRatingsString}) • {costForTwoMessage}
      </h2>
      <h3>{cuisines?.join(", ")}</h3>
      <p>Outlet: {areaName}</p>
      <p>{sla?.slaString}</p>

      {cards.map((section, index) => {
        const title = section.card?.card?.title;
        const items = section.card?.card?.itemCards;

        if (!items) return null;

        return (  
          <ul className="flex flex-col w-6/12" key={index}>
            <div
              className="flex justify-between p-4 text-xl cursor-pointer"
              onClick={() => toggleSection(index)}
            >
              <h2 className="font-bold text-2xl">
                {title} ({items.length})
              </h2>
              <span>{openIndex === index ? "🔼" : "⏬"}</span>
            </div>
            {openIndex === index && items.map((item) => (
              <RestaurantCategory key={item.card.info.id} item={item} />
            ))}
          </ul>
        );
      })}
    </div>
  );
};

export default Menuitems;
