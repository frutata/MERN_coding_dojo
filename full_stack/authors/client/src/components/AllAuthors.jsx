import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Link
} from "react-router-dom";

const AllAuthors = () => {

    const [authorList, setAuthorList] = useState([]);

    const [deleteToggle, setDeleteToggle] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/author")
            .then(res => {
                console.log("Response:", res);
                setAuthorList(res.data.results);
            })
            .catch(err => {
                console.log("Error:", err);
            })
    }, [deleteToggle])

    const deleteAuthor = (id)=>{
        console.log("delete author with this id:", id);
        axios.delete(`http://localhost:8000/api/author/${id}`)
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
            <h1>All Authors</h1>
            <Link to={"/new"}>Create New Author</Link>
            {
                authorList.map((authorObj, idx) => {
                    return (
                        <div key={idx} className='outline padding mt'>
                            <Link to={`/edit/${authorObj._id}`}>Edit</Link>
                            <h2>{authorObj.name}</h2>
                            <h3>{authorObj.bestSeller ? "Best Seller" : null}</h3>
                            <button onClick={(e)=>{deleteAuthor(authorObj._id)}}>Delete {authorList.title}</button>
                        </div>
                    )
                })
            }
        </>
    )
}

export default AllAuthors;