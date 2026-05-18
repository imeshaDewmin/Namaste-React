const RestaurantCard = (props) => {
    const { resData } = props
    const { imgUrl, resName, categories, rating, delivery } = resData
    return (
        <div className="res-card" style={{ backgroundColor: "#efe9e9" }}>
            <img className="res-img" src={imgUrl} alt="res-img" />
            <h3>{resName}</h3>
            <h4>{categories}</h4>
            <h4>{rating}</h4>
            <h4>{delivery}</h4>
        </div>
    )
}

export default RestaurantCard;