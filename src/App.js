import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import AppLayOut from "./components/AppLayOut";
import Body from "./components/Body"
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RestaurantMenu from "./pages/RestaurantMenu";
import { Suspense } from "react";
import ShimmerUI from "./components/ShimmerUI";

const Grocery = lazy(() => import("./components/Grocery"))

const appRouter = createBrowserRouter([
    {

        element: <AppLayOut />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<ShimmerUI />}>
                    <Grocery />
                </Suspense>
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error />
    },


])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);