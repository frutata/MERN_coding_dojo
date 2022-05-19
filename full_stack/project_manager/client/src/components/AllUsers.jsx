import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Link
} from "react-router-dom";

const AllUsers = (props) => {

    const [userList, setUserList] = useState([]);

    const [deleteToggle, setDeleteToggle] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/user")
            .then(res => {
                console.log("Response:", res);
                setUserList(res.data.results);
            })
            .catch(err => {
                console.log("Error:", err);
            })
    }, [deleteToggle, props.formSubmittedToggle])

    const deleteUser = (id)=>{
        console.log("delete user with this id:", id);
        axios.delete(`http://localhost:8000/api/user/${id}`)
            .then(res=>{
                console.log("Response:", res);
                setDeleteToggle(!deleteToggle);
            })
            .catch(err=>{
                console.log("Error:", err);
            })
    }

    return (
        <>
            {
                userList.map((userObj, idx)=>{
                    return (
                        <div className='outline padding' key={idx}>
                            <h3><Link to={`/user/${userObj._id}`}>{userObj.title}</Link></h3>
                            <p>Price: ${userObj.price}</p>
                            <p>Description: {userObj.description}</p>
                            <p><Link to={`/user/edit/${userObj._id}`}>Edit</Link></p>
                            <button onClick={(e)=>{deleteUser(userObj._id)}}>Delete {userList.title}</button>
                        </div>
                    )
                })
            }
        </>
    )
}

export default AllUsers;