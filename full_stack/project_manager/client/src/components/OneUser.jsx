import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
    Link
} from "react-router-dom";

const OneUser = () => {

    const { _id } = useParams();

    //state variable to store the one user we get back from the api call
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/user/${_id}`)
            .then(res => {
                console.log("Response:", res);
                setUserInfo(res.data.results);
            })
            .catch(err => {
                console.log("Error:", err);
            })
    }, [])

    return (
        <>
            <div className="outline">
                <h1>{userInfo.title}</h1>
                <p>${userInfo.price}</p>
                <p>Description: {userInfo.description}</p>
                <Link to={"/"}>Home</Link>
            </div>
        </>
    )
}

export default OneUser;