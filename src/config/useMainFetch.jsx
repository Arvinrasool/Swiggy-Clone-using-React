import { useState, useEffect } from "react";

const useMainFetch = () => {
    const[restaurantList, setRestaurantList] = useState([]);
    const[filtered, setFiltered] = useState([]);
    useEffect(() =>{
        const fetchData = async () =>{
        const data = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.9415915&lng=79.8083133&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING") 
          const result = await data.json();
          setRestaurantList(result.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
          setFiltered(result.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        };
        fetchData();
      }, []); 
      return {restaurantList, filtered, setFiltered};
}

export default useMainFetch;

