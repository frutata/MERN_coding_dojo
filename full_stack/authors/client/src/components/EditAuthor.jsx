import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {
    Link
} from "react-router-dom";
import { useHistory } from 'react-router-dom';

const EditAuthor = () => {

    const { _id } = useParams();

    //state variable to store the one author we get back from the api call
    const [authorInfo, setAuthorInfo] = useState({});

    //initialize history so we can redirect using history.push
    const history = useHistory();

    //state variable to store validation errors inside of
    let [ourErrors, setOurErros] = useState({});

    //this axios call helps us prepopulate the form in addition to editing information
    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${_id}`)
            .then(res => {
                console.log("Response:", res);
                    setAuthorInfo(res.data.results);
            })
            .catch(err => {
                console.log("Error:", err);
            })
    }, [])

    const changeHandler = (e) => {
        // console.log(authorInfo);
        if (e.target.type == "checkbox") {

            setAuthorInfo({
                ...authorInfo,
                [e.target.name]: e.target.checked
            })
        }
        else {

            setAuthorInfo({
                ...authorInfo,
                [e.target.name]: e.target.value
            })
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/author/${_id}`, authorInfo)
            .then(res => {
                console.log("Response:", res);

                if(res.data.error){
                    //if there are validation errors we need to save them
                    setOurErros(res.data.error.errors);
                }
                else{
                    history.push("/");
                }
            })
            .catch(err => {
                console.log("Error:", err);
            })
    }

    return (
        <>

            <div className='formOutline'>
                <form onSubmit={submitHandler}>
                    <div className="flex padding">
                        <div className="right">
                            <label htmlFor="name">Name:</label>
                        </div>
                        <p>{ourErrors.name?.message}</p>
                        <div className="left">
                            <input type="text" id='name' value={authorInfo.name} name="name" onChange={changeHandler} />
                        </div>
                    </div>
                    <div className="flex padding">
                        <div className="right">
                            <label htmlFor="bestSeller">Check box if Best Seller:</label>
                        </div>
                        <p>{ourErrors.bestSeller?.message}</p>
                        <div className="left">
                            <input type="checkbox" id='bestSeller' checked={authorInfo.bestSeller} name="bestSeller" onChange={changeHandler} />
                        </div>
                    </div>
                    <button>Update Author</button>
                </form>
            </div>

        </>
    )
}

export default EditAuthor;