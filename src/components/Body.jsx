import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { useState } from "react";


const Body = () => {

    const [resList, setResList] = useState(restaurantList)

    const handleTopRatedRestaurants = () => {
        const filteredList = resList.filter(res => res.rating > 4.5)
        setResList(filteredList);
    }


    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={handleTopRatedRestaurants}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {resList.map(res =>
                    <RestaurantCard
                        key={res.id}
                        resData={res} />)}
            </div>
        </div>
    )
}

export default Body;