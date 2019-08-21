import React, { useState, useEffect } from "react";
import { Form, Field, withFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { axiosWithAuth } from "./axiosWithAuth";

const NewFriendForm = ( { setFriends }) => {
    const [newFriend, setNewFriend] = useState({
        // name: "",
        // age: "",
        // email: ""
    })

    const handleChanges = e => {
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
            axiosWithAuth()
                .post("http://localhost:5000/api/friends", newFriend)
                .then(res => {
                    console.log("POST req", res.data )
                    setFriends(res.data)
                })
                .catch(err => console.log("POST request error: ", err))
    }

    return(
        <>  
            <h2>Sign up to be my friend space is limited!)</h2>
            <button></button>
            <form>
                <input onChange={handleChanges} type="text" name="name" placeholder="username" />
                <input onChange={handleChanges} type="text" name="age" placeholder="age" />
                <input onChange={handleChanges} type="email" name="email" placeholder="email" />
                <button onClick={handleSubmit} >Add new friend</button>
            </form>
        </>
    )

}

export default NewFriendForm;