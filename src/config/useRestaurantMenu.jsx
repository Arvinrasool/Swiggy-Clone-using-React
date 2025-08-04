import { useState, useEffect } from "react";
import { RESTAURANT_URL } from "./image";

const useRestaurantMenu = (resId) => {
    const [menu, setMenu] = useState(null);
    
    useEffect(() => {
        const fetchMenu = async () => {
        try {
            const response = await fetch(`${RESTAURANT_URL}${resId}`);
            const data = await response.json();
            setMenu(data.data);
        } catch (error) {
            console.error("Error fetching menu:", error);
        }
        };
        fetchMenu();
    }, []);
    
    return menu;
}
export default useRestaurantMenu;