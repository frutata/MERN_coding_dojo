import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Link
} from "react-router-dom";

const CreateAuthors = () => {

    let [name, setName] = useState("");
    let [bestSeller, setBestSeller] = useState(false);

    //state variable to store validation errors inside of
    let [ourErrors, setOurErros] = useState({});

    const submitForm = (e)=>{
        //prevents page from refreshing everytime we submit
        e.preventDefault();

        let formInfo = {name, bestSeller};
        console.log("Form info -------------", formInfo);

        axios.post("http://localhost:8000/api/author", formInfo)
            .then(res=>{
                console.log("Result:",  res);
                
                if(res.data.error){
                    //if there are validation errors we need to save them
                    setOurErros(res.data.error.errors);
                }
                else{
                    //clear our state variables to clear the form after we successfully submit
                    setName("");
                    setBestSeller(false);
                }
            })
            .catch(err=>{
                console.log("Error:", err);
            })
    }

    return (
        <>
            <h1>Create an Author</h1>
            <Link to={"/"}>Home</Link>
            <div className="formOutline mt">
                <form onSubmit={submitForm}>
                    <div className="flex padding">
                        <div className="right">
                            <label htmlFor="name">Name:</label>
                        </div>
                        <p>{ourErrors.name?.message}</p>
                        <div className="left">
                            <input type="text" id='name' value={name} onChange={(e)=> setName(e.target.value)}/>
                        </div>
                    </div>
                    <div className="flex padding">
                        <div className="right">
                            <label htmlFor="bestSeller">Check box if Best Seller:</label>
                        </div>
                        <p>{ourErrors.bestSeller?.message}</p>
                        <div className="left">
                            <input type="checkbox" id='bestSeller' value={bestSeller} onChange={(e)=> setBestSeller(e.target.checked)}/>
                        </div>
                    </div>
                    <button>Create Author</button>
                </form>
            </div>
        </>
    )
}

export default CreateAuthors;