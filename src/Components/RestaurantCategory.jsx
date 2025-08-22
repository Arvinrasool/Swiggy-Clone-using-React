import { MENU_URL } from "../config/image";
const RestaurantCategory = ({item}) => {
    return(
    <li key={item.card.info.id}>
                  <div className="flex items-center py-4 border-b justify-between">
                    <div className="w-[600]">
                      <div className="text-xl font-bold">
                        {item.card.info.name} - Rs.{item.card.info.price / 100}
                      </div>
                      <div>
                        {item.card.info.description}
                        </div>
                    </div>
                    <div className="relative">
                        <button className="bg-amber-900 p-2 text-white rounded-lg cursor-pointer absolute left-1/2 -translate-x-1/2 -translate-y-1/2">
                        Add+
                        </button>
                        {item.card.info.imageId? 
                        <img className="w-24 h-24" src= {MENU_URL + item.card.info.imageId} alt="" />
                        :null}
                    </div>
                  </div>
                </li> 
                )
}
export default RestaurantCategory;