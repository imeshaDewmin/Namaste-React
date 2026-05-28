import { COMMON_RES_IMG_URL } from "../utils/constants"

const RestaurantCard = (props) => {
    const { resData } = props
    const { name, cuisines, avgRating, sla, costForTwo } = resData.info
    return (
        <div className="p-4 m-4 w-60 bg-blue-50 rounded-lg">
            <img className="rounded-lg" src={COMMON_RES_IMG_URL} alt="res-img" />
            <h3 className="font-bold py-3 text-lg">{name}</h3>
            <h4 className="py-1">{cuisines.join(", ")}</h4>
            <h4 className="py-1">{avgRating} stars</h4>
            <h4 className="py-1">{sla.deliveryTime} minutes</h4>
            <h4 className="py-1">{costForTwo} </h4>
        </div>
    )
}

export default RestaurantCard;