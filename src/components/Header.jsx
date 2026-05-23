import { useState } from "react";
import { LOGO_URL } from "../utils/constants"

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
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={handleButtonClick}>{BtnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;