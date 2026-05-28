import { useEffect, useState } from "react";
import { RESTAURANT_MENU_INFO } from "../utils/constants";

const useFetchRestaurantInfo = (resId) => {

    const [resInfo, setResInfo] = useState(null);
    const [menu, setMenu] = useState(null);

    useEffect(() => {
        fetchResInfo()
    }, [])

    const fetchResInfo = async () => {
        try {
            const response = await fetch(`${RESTAURANT_MENU_INFO}/${resId}`);
            const json = await response.json();


            const info = json.data?.cards[2]?.card?.card?.info
            const menu = json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards

            setResInfo(info)
            setMenu(menu)


        } catch (error) {
            console.error(error);
        }
    }


    return { resInfo, menu };
}
export default useFetchRestaurantInfo