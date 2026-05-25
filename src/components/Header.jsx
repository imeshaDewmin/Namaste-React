import { useState } from "react";
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom";

const Header = () => {

    const [BtnName, setBtnName] = useState("Login")

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
                    <li><Link to="/" className="nav-link">Home</Link></li>
                    <li ><Link to="/about" className="nav-link">About</Link></li>
                    <li><Link to="/contact" className="nav-link">Contact</Link></li>
                    <li ><Link to="/cart" className="nav-link">Cart</Link></li>
                    <button className="login-btn" onClick={handleButtonClick}>{BtnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;