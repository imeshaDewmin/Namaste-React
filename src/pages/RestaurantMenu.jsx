import { useEffect, useState } from "react";
import ShimmerUi from "../components/ShimmerUI";
import { useParams } from "react-router-dom";
import { RESTAURANT_MENU_INFO } from "../utils/constants";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);
    const [menu, setMenu] = useState(null);

    const { resId } = useParams();

    useEffect(() => {
        fetchResMenu()
    }, [])

    const fetchResMenu = async () => {
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

    if (!resInfo) return <ShimmerUi />;

    const { name, cuisines, costForTwoMessage, avgRating } = resInfo;

    return (<div className="res-menu">
        <h1>{name}</h1>
        <h3>{cuisines.join(", ")}</h3>
        <h3>{costForTwoMessage}</h3>
        <h3>{avgRating} stars</h3>

        <h2>Menu</h2>
        <div className="menu-items">
            {menu.length === 0 ? (
                <p>No menu items available.</p>
            ) : (
                menu.map(({ card }) => {
                    const item = card?.info;
                    const price = item?.price

                    return (
                        <ul className="menu-item" key={item?.id}>
                            <li>{item?.name}</li>
                            <li>{item?.category}</li>
                            <li>{item?.description}</li>
                            <li>₹{price ? price / 100 : "N/A"}</li>
                        </ul>
                    );
                })
            )}
        </div>
    </div>
    )
}

export default RestaurantMenu;