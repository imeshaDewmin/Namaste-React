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
        <div className="user-card">
            <img src={avatar_url} />
            <h2>Name: {name}</h2>
            <h2>Location: {location}</h2>
            <h2>Git: {url}</h2>
        </div>
    )
}

export default User;