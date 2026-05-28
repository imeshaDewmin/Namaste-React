import { useEffect, useState } from "react";

const User = () => {

    const [user, setUser] = useState({
        name: "",
        location: "",
        email: ""
    })

    useEffect(() => {
        fetchUser();
    }, [])

    const fetchUser = async () => {
        const data = await fetch("https://api.github.com/users/imeshaDewmin");
        const json = await data.json();

        setUser(json)
    }

    const { name, location, url, avatar_url } = user

    return (
        <div className=" bg-white shadow-md rounded-xl p-5 w-92 text-center">
            <img
                src={avatar_url}
                className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h2 className="text-lg font-semibold">Name: {name}</h2>
            <h2 className="text-gray-600">Location: {location}</h2>
            <h2 className="text-gray-600">Git: {url}</h2>
        </div>
    )
}

export default User;