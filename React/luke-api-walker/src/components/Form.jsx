import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Form = () => {

    const [cat, setCat] = useState("people");
    const [id, setId] = useState(0);
    const history = useHistory();

    const submitForm = (e)=>{
        e.preventDefault();
        // console.log(cat, id);
        history.push(`/${cat}/${id}`)
    }

    return (
        <>
            <form onSubmit={submitForm}>
                <div className='flex container mt'>
                    <div className='flex'>
                        <label className='labels mr'>Search for:</label>
                        <select className='select' value={cat} onChange={ (e) => setCat(e.target.value)}>
                            <option value="films">Films</option>
                            <option value="people">People</option>
                            <option value="planets">Planets</option>
                            <option value="species">Species</option>
                            <option value="starships">Starships</option>
                            <option value="vehicles">Vehicles</option>
                        </select>
                    </div>

                    <div className='flex'>
                        <label className='labels mr'>ID:</label>
                        <input className='select' type="number" min={1} value={id} onChange={(e) => setId(e.target.value)}/>
                    </div>
                    <button className='btn btn-primary'>Search</button>
                </div>
            </form>

            <hr className='line' />
        </>
    )
}

export default Form;