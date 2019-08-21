import React, { useState } from "react";
import axios from "axios";

const Login = props => {
    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    });

    const handleChange = e => {
        e.preventDefault();
        setCredentials({...credentials, 
            [e.target.name]: e.target.value
        })
    }

    const routeToFriends = () => {
        props.history.push("/PrivateRoute")
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log("username+pw", credentials.username, credentials.password)
        axios
            .post("http://localhost:5000/api/login", credentials)
            .then(res => {
                localStorage.setItem("token", res.data.payload)
                routeToFriends()
            })
            .catch(err => console.log("Error", err.response.status, err.response.statusText))
    }

    return(
        <div>   
            <form>
                <input 
                    type="text"
                    name="username"
                    value={credentials.username}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                />
                <button onClick={handleSubmit}>Log In</button>
            </form>
        </div>
    );
}

export default Login;