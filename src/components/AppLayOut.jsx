import Header from "./Header";
import { Outlet } from "react-router-dom";

const AppLayOut = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
}

export default AppLayOut;