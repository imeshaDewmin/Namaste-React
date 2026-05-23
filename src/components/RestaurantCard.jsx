import { COMMON_RES_IMG_URL } from "../utils/constants"

const RestaurantCard = (props) => {
    const { resData } = props
    const { name, cuisines, avgRating, sla, costForTwo } = resData.info
    return (
        <div className="res-card" style={{ backgroundColor: "#efe9e9" }}>
            <img className="res-img" src={COMMON_RES_IMG_URL} alt="res-img" />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{sla.deliveryTime} minutes</h4>
            <h4>{costForTwo} </h4>
        </div>
    )
}

export default RestaurantCard;