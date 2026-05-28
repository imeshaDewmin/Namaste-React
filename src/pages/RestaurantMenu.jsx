import ShimmerUi from "../components/ShimmerUI";
import { useParams } from "react-router-dom";
import useFetchRestaurantInfo from "../utils/useFetchRestaurantInfo";

const RestaurantMenu = () => {

    const { resId } = useParams();

    const { resInfo, menu } = useFetchRestaurantInfo(resId);

    if (!resInfo) return <ShimmerUi />;

    const { name, cuisines, costForTwoMessage, avgRating } = resInfo;

    return (
        <div className="p-6 max-w-4xl mx-auto">

            {/* Restaurant Info */}
            <div className="bg-white shadow-md rounded-xl p-6 mb-6">
                <h1 className="text-2xl font-bold mb-2">{name}</h1>
                <h3 className="text-gray-600 mb-1">
                    {cuisines.join(", ")}
                </h3>
                <h3 className="text-gray-600 mb-1">{costForTwoMessage}</h3>
                <h3 className="text-yellow-600 font-semibold">
                    {avgRating} ⭐ stars
                </h3>
            </div>

            {/* Menu Section */}
            <h2 className="text-xl font-bold mb-4">Menu</h2>

            <div className="space-y-4">
                {menu.length === 0 ? (
                    <p className="text-gray-500">No menu items available.</p>
                ) : (
                    menu.map(({ card }) => {
                        const item = card?.info;
                        const price = item?.price;

                        return (
                            <ul
                                className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition"
                                key={item?.id}
                            >
                                <li className="font-semibold text-lg">
                                    {item?.name}
                                </li>
                                <li className="text-gray-600">
                                    {item?.category}
                                </li>
                                <li className="text-gray-500 text-sm">
                                    {item?.description}
                                </li>
                                <li className="text-green-600 font-medium mt-2">
                                    ₹{price ? price / 100 : "N/A"}
                                </li>
                            </ul>
                        );
                    })
                )}
            </div>
        </div>
    );
};

export default RestaurantMenu;