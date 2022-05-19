import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {
    Link
} from "react-router-dom";
import { useHistory } from 'react-router-dom';

const EditUser = () => {

    const { _id } = useParams();

    //state variable to store the one user we get back from the api call
    const [userInfo, setUserInfo] = useState({});

    //initialize history so we can redirect using history.push
    const history = useHistory();

    //this axios call helps us prepopulate the form in addition to editing information
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

    const changeHandler = (e)=>{
        console.log(userInfo);
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e)=>{
        e.preventDefault();

        axios.put(`http://localhost:8000/api/user/${_id}`, userInfo)
            .then(res=>{
                console.log("Response:", res);
                history.push("/");
            })
            .catch(err=>{
                console.log("Error:", err);
            })
    }

    return (
        <>

            <div className='formOutline'>
                <form onSubmit={submitHandler}>
                    <Link to={"/"}>Home</Link>
                    <div className='flex padding'>
                        <div className='right'>
                            <label htmlFor="title">Title:</label>
                        </div>
                        <div className='left'>
                            <input type="text" id='title' name='title' value={userInfo.title} onChange={changeHandler}/>
                        </div>
                    </div>
                    <div className='flex padding'>
                        <div className='right'>
                            <label htmlFor="price">Price:</label>
                        </div>
                        <div className='left'>
                            <input type="number" min={0} id='price' name='price' value={userInfo.price} onChange={changeHandler}/>
                        </div>
                    </div>
                    <div className='flex padding'>
                        <div className='right'>
                            <label htmlFor="description">Description:</label>
                        </div>
                        <div className='left'>
                            <textarea id="description" cols="21" rows="3" name='description' value={userInfo.description} onChange={changeHandler}></textarea>
                        </div>
                    </div>
                    <input type="submit" value="Submit" className='mb' />
                </form>
            </div>

        </>
    )
}

export default EditUser;