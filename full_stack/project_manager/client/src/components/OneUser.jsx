import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
    Link
} from "react-router-dom";
import { useHistory } from 'react-router-dom';

const OneUser = () => {

    const { _id } = useParams();

    const history = useHistory();

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

    //this function will allow the button to request to delete the user from the backend based on the id
    const deleteUser = ()=>{
        
        axios.delete(`http://localhost:8000/api/user/${_id}`)
            .then(res=>{
                console.log("Response:", res);
                // history.push("/");
            })
            .catch(err=>{
                console.log("Error:", err);
            })
    }

    return (
        <>
            <div className="outline">
                <Link to={"/"}>Home</Link>
                <h1>{userInfo.title}</h1>
                <p>Price: ${userInfo.price}</p>
                <p>Description: {userInfo.description}</p>
                <button onClick={deleteUser}>Delete {userInfo.title}</button>
            </div>
        </>
    )
}

export default OneUser;