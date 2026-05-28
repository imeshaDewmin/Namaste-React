import RestaurantCard from "./RestaurantCard";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import { useState } from "react";
import useFetchRestaurantList from "../utils/useFetchRestaurantList";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [search, setSearch] = useState("");

    const { resList, filteredResList, setFilteredResList } = useFetchRestaurantList();

    const onlineStatus = useOnlineStatus();

    const handleTopRatedRestaurants = () => {
        const filteredList = resList.filter(res => res.info.avgRating > 4.5)
        setFilteredResList(filteredList);
    }

    const handleSearch = () => {
        const searchResult = resList.filter((res) => res.info.name.toLowerCase().includes(search.toLowerCase()));
        setFilteredResList(searchResult);
    }

    if (onlineStatus === false) return (
        <h1>Looks like you are offline...Check your network connection!!!</h1>
    )

    return resList.length === 0 ? (
        <ShimmerUI />
    ) : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text"
                        className="search-box"
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value)
                        }} />
                    <button className="search-btn"
                        onClick={handleSearch}
                    >Search</button>
                </div>
                <button className="filter-btn" onClick={handleTopRatedRestaurants}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {filteredResList.map(res => (
                    <Link className="res-card-link" key={res.info.id} to={`/restaurants/${res.info.id}`}>
                        <RestaurantCard
                            resData={res}
                        />
                    </Link>
                ))}

            </div>
        </div>
    )
}

export default Body;