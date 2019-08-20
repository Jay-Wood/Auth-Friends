import React, { useState } from "react";

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
                <button>Log In</button>
            </form>
        </div>
    );
}

export default Login;