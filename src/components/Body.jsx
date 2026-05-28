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
            <div className="flex">
                <div className="m-4 p-4">
                    <input type="text"
                        className="border border-solid"
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value)
                        }} />
                    <button className="px-6 m-3 cursor-pointer bg-green-100 rounded-b-md"
                        onClick={handleSearch}
                    >🔍︎ Search</button>
                </div>
                <div className="m-4 p-4">
                    <button className="px-6 m-3 bg-gray-100 rounded cursor-pointer "
                        onClick={handleTopRatedRestaurants}>
                        ⭐Top Rated Restaurants</button>
                </div>

            </div>
            <div className="flex flex-wrap">
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