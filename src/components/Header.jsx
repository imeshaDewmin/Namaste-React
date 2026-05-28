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
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="logo" />
            </div>
            <div className="nav-items">
                <ul className="nav-items">
                    <li>Online Status: {onlineStatus ? "🟢" : "🔴"} </li>
                    <li><Link to="/" className="nav-link">Home</Link></li>
                    <li ><Link to="/about" className="nav-link">About</Link></li>
                    <li><Link to="/contact" className="nav-link">Contact</Link></li>
                    <li ><Link to="/cart" className="nav-link">Cart</Link></li>
                    <li ><Link to="/grocery" className="nav-link">Grocery</Link></li>
                    <button className="login-btn" onClick={handleButtonClick}>{BtnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;