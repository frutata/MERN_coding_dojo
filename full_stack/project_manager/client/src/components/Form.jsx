import React, { useState } from 'react';
import axios from 'axios';

const Form = (props) => {

    let [title, setTitle] = useState("");
    let [price, setPrice] = useState(0);
    let [description, setDescription] = useState("");

    //state variable to store validation errors inside of
    let [ourErrors, setOurErrors] = useState({});

    // submithandler
    const submitForm = (e) => {
        e.preventDefault();

        let formInfo = { title, price, description };

        axios.post("http://localhost:8000/api/user", formInfo)
            .then(res => {
                console.log("Response:", res);

                if (res.data.error) {
                    //this means there are validation ourErrors we need to save
                    setOurErrors(res.data.error.errors);
                }

                else {//clear out the state variables to clear the form if user was successfully created
                    setTitle("");
                    setPrice(0);
                    setDescription("");

                    props.setFormSubmittedToggle(!props.formSubmittedToggle);
                }
            })
            .catch(err => {
                console.log("Error:", err);
            })
    }

    return (
        <>

            <div className='formOutline'>
                <form onSubmit={submitForm}>
                    <div className='flex padding'>
                        <div className='right'>
                            <label htmlFor="title">Title:</label>
                        </div>
                        {/* only shows validation errors if the state variable exists */}
                        <p>{ourErrors.title?.message}</p>
                        <div className='left'>
                            <input type="text" id='title' value={title} onChange={(e) => setTitle(e.target.value)} />
                        </div>
                    </div>
                    <div className='flex padding'>
                        <div className='right'>
                            <label htmlFor="price">Price:</label>
                        </div>
                        {/* only shows validation errors if the state variable exists */}
                        <p>{ourErrors.price?.message}</p>
                        <div className='left'>
                            <input type="number" min={0} id='price' value={price} onChange={(e) => setPrice(e.target.value)} />
                        </div>
                    </div>
                    <div className='flex padding'>
                        <div className='right'>
                            <label htmlFor="description">Description:</label>
                        </div>
                        {/* only shows validation errors if the state variable exists */}
                        <p>{ourErrors.description?.message}</p>
                        <div className='left'>
                            <textarea id="description" cols="21" rows="3" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                        </div>
                    </div>
                    <input type="submit" value="Submit" className='mb' />
                </form>
            </div>

        </>
    )
}

export default Form;