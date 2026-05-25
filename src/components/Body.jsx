import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { RESTAURANT_LIST } from "../utils/constants";
import { Link } from "react-router-dom";

const Body = () => {

    const [resList, setResList] = useState([]);
    const [filteredResList, setFilteredResList] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const response = await fetch(RESTAURANT_LIST);

            const json = await response.json();
            const restaurants = json?.data?.data?.cards?.[1].card?.card?.gridElements?.infoWithStyle?.restaurants

            setResList(restaurants);
            setFilteredResList(restaurants);

        } catch (error) {
            console.error(error);
        }

    }

    const handleTopRatedRestaurants = () => {
        const filteredList = resList.filter(res => res.info.avgRating > 4.5)
        setFilteredResList(filteredList);
    }

    const handleSearch = () => {
        const searchResult = resList.filter((res) => res.info.name.toLowerCase().includes(search.toLowerCase()));
        setFilteredResList(searchResult);
    }

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