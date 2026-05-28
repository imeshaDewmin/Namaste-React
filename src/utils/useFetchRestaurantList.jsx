import { useEffect, useState } from "react";
import { RESTAURANT_LIST } from "./constants";

const useFetchRestaurantList = () => {

    const [resList, setResList] = useState([]);
    const [filteredResList, setFilteredResList] = useState([]);

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

    return { resList, filteredResList, setFilteredResList }
}

export default useFetchRestaurantList;