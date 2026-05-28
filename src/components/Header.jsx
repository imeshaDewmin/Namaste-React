import { useState } from "react";
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

    const [BtnName, setBtnName] = useState("Login")

    const onlineStatus = useOnlineStatus();

    const handleButtonClick = () => {
        BtnName === "Login" ? setBtnName("LogOut") : setBtnName("Login")
    }

    return (
        <div className="flex justify-between border-2 h-32 m-1.5">
            <div className="logo-container">
                <img className="w-30" src={LOGO_URL} alt="logo" />
            </div>
            <div className="flex justify-center p-4 m-4">
                <ul className="flex p-4 m-1">
                    <li className="px-4 ">Online Status: {onlineStatus ? "🟢" : "🔴"} </li>
                    <li ><Link to="/" className="px-4 ">Home</Link></li>
                    <li ><Link to="/about" className="px-4 ">About</Link></li>
                    <li><Link to="/contact" className="px-4 ">Contact</Link></li>
                    <li ><Link to="/cart" className="px-4 ">Cart</Link></li>
                    <li ><Link to="/grocery" className="px-4 ">Grocery</Link></li>
                    <li><button className="px-4 font-semibold hover:text-orange-600 transition-colors cursor-pointer" onClick={handleButtonClick}>{BtnName}</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;