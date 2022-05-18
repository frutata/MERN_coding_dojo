import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Link
} from "react-router-dom";

const AllUsers = () => {

    const [userList, setUserList] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/user")
            .then(res => {
                console.log("Response:", res);
                setUserList(res.data.results);
            })
            .catch(err => {
                console.log("Error:", err);
            })
    }, [])

    return (
        <>
            {
                userList.map((userObj, idx)=>{
                    return (
                        <div className='outline padding' key={idx}>
                            <h3><Link to={`/user/${userObj._id}`}>{userObj.title}</Link></h3>
                            <p>${userObj.price}</p>
                            <p>Description: {userObj.description}</p>
                        </div>
                    )
                })
            }
        </>
    )
}

export default AllUsers;