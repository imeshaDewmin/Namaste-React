import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props)


        this.state = {
            userInfo: {}
        }

        console.log("Child constructor called");
        
    }

    async componentDidMount() {
        const userData = await fetch("https://api.github.com/users/imeshaDewmin")
        const json = await userData.json()

        this.setState({
            userInfo: json
        })

         console.log("Child componentDidMount called");

    }


    componentDidUpdate(){
           console.log("Child componentDidUpdate called");
    }

    componentWillUnmount(){
         console.log("Child componentWillUnmount called");
    }

    render() {
           console.log("Child render called");


        const { name, location, url, avatar_url } = this.state.userInfo


        return (
            <div className="user-card">
                <img src={avatar_url} />
                <h2>Name: {name}</h2>
                <h2>Location: {location}</h2>
                <h2>Contact:{url}</h2>
            </div>
        )
    }
}


// 1.child constructor
// 2.child render
// 3.child component did mount
// 4.child render
// 5.child component did update
// 6. after leaving child component will unmount

export default UserClass;