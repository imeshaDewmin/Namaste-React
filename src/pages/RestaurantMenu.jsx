import ShimmerUi from "../components/ShimmerUI";
import { useParams } from "react-router-dom";
import useFetchRestaurantInfo from "../utils/useFetchRestaurantInfo";


const RestaurantMenu = () => {

    const { resId } = useParams();

    const { resInfo, menu } = useFetchRestaurantInfo(resId);


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