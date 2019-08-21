import React, {useState, useEffect} from "react";
import FriendCard from "./FriendCard";
import { axiosWithAuth } from "./axiosWithAuth";

const FriendsList = props => {
    const [friends, setFriends] = useState([])

    useEffect(() => {
        // const getData = () => {
            axiosWithAuth()
            .get("http://localhost:5000/api/friends")
            .then(res => {
                console.log("Friends res", res.data )
                setFriends(res.data)
            })
            .catch(err => console.log("GET request error: ", err))
        // }
    }, []);

    return (
        <div>
            {friends.map(friend => {
                return(
                    <div>
                    <h3>Name: {friend.name}</h3>    
                    <p>Age: {friend.age}</p>
                    <p>Email: {friend.email}</p> 
                    </div>                    
                )
            })}
        </div>

    )
}

export default FriendsList;