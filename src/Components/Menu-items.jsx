import ShimmerUi from "./ShimmerUi";
import { MENU_URL } from "../config/image";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../config/useRestaurantMenu";


const Menuitems = () => {

  const { resId } = useParams();

  const menu = useRestaurantMenu(resId);

  if (menu === null) return <ShimmerUi />;

  const { name, avgRating, totalRatingsString, costForTwoMessage, cuisines, areaName, sla } =
    menu.cards[2]?.card?.card?.info || {};

  const cards = menu.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>
        {avgRating} ({totalRatingsString}) • {costForTwoMessage}
      </h2>
      <h3>{cuisines?.join(", ")}</h3>
      <p>Outlet: {areaName}</p>
      <p>{sla?.slaString}</p>

      {cards.map((section, index) => {
        const title = section.card?.card?.title;
        const items = section.card?.card?.itemCards;
        // const description = section.card?.card?.itemCards;

        if (!items) return null;

        return (
          <ul key={index}>
            <h2>{title}</h2>
            {items.map((item) => (
              <li key={item.card.info.id}>
                {item.card.info.name} - Rs.{item.card.info.price / 100}<br />
                {item.card.info.description}<br /><br />
                <img src= {MENU_URL + item.card.info.imageId} alt="" />
              </li>
            ))}
          </ul>
        );
      })}
    </div>
  );
};

export default Menuitems;
