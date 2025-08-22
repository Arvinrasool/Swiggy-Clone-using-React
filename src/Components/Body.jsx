import Cards from "./Restaurant-cards"
import { useState, useContext } from "react";
import ShimmerUi from "./ShimmerUi";
import { Link } from "react-router-dom";
import useOnlineStatus from "../config/useOnlineStatus";
import useMainFetch from "../config/useMainFetch";
import UserContext from "../config/userContext";

const Body = () => {

  const [searchText , setSearchText] = useState('');
  // const RestaurantCardPromoted = WithPromotedLabel(Cards);

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus){
    return <h1>Looks like you are offline check the internet</h1>
  }

  const {restaurantList, filtered, setFiltered} = useMainFetch();
  const {setUserName, defaultUser} = useContext(UserContext);
  // console.log(restaurantList);
  
  return restaurantList.length === 0 ? (
    <ShimmerUi /> 
    ) : (
    <div className="bg-gray-100">
      <div className="flex justify-around p-4 pb-8">
        <div className='flex gap-10'>
          <input className="border-2 p-1" type='text' placeholder='Search for restaurants and food' value={searchText} onChange={
            (e) => {
              setSearchText(e.target.value)
            }
          } />
          <button className='border-2 px-4 py-1 cursor-pointer' onClick = { () => {
            const filteredData = restaurantList.filter((restaurant)=>
              restaurant.info.toLowerCase().includes(searchText.toLowerCase())
            );
            setFiltered(filteredData);
          }}>Search</button>
        
        </div>
        <div>
          <button className='border-2 px-4 py-1 cursor-pointer '
          onClick={() => {
            const filteredList = restaurantList.filter((res) => res.info.avgRating >= 4.5)
            setFiltered(filteredList);}}>
            Top Rated Restaurants</button>
          {/* <button className='filter-btn'>Pure Veg</button> */}
        </div>
        <div>
          <label>Context Value : </label>
          <input className="border border-black p-1.5" value={defaultUser} onChange={(e)=> setUserName(e.target.value)}/>
        </div>
      </div>

        <div className="flex flex-wrap justify-center gap-7 mx-30">
          {filtered?.map((res) => (
            <Link key={res.info.id} to={'/restaurants/'+ res.info.id }><Cards {...res} /></Link>
          ))}
        </div>
      </div>
  )
}

export default Body