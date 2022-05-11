import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const People = () => {
    const { cat, id } = useParams();
    const [ info, setInfo ] = useState({});
    const [ infoError, setInfoError ] = useState([]);

    useEffect(()=>{
        // console.log(cat)
        axios.get(`https://swapi.dev/api/${cat}/${id}`)
        .then(response => {
            console.log("RESPONSE: -----------", response);
            setInfoError(null);
            setInfo(response.data);
        })
        .catch(err => {
            console.log(err);
            setInfoError(err);
        })
    },[cat, id])

    if (infoError){
        return (
            <>
            <div className="container text">
                <h1>"These aren't the droids you're lookin for!"</h1>
                <img src="https://starwarsblog.starwars.com/wp-content/uploads/2017/06/25-star-wars-quotes-obi-wan-kenobi-identification-tall.jpg" alt="ObiWan" height={"350px"}/>
            </div>
            </>
        )
    }
    if (cat == "people"){
        return (
            <>
                <div className="container">
                    <h1>{info.name}</h1>
                    <p>Height: {info.height}</p>
                    <p>Mass: {info.mass}</p>
                    <p>Hair Color: {info.hair_color}</p>
                    <p>Skin Color: {info.skin_color}</p>
                </div>
            </>
        )
    }
    if (cat == "planets"){
        return (
            <>
                <div className="container">
                    <h1>{info.name}</h1>
                    <p>Climate: {info.climate}</p>
                    <p>Terrain: {info.terrain}</p>
                    <p>Surface Water: {info.surface_water}</p>
                    <p>Population: {info.population}</p>
                </div>
            </>
        )
    }
    if (cat == "films"){
        return (
            <>
                <div className="container">
                    <h1>{info.title}</h1>
                    <p>Episode: {info.episode_id}</p>
                    <p>Director: {info.director}</p>
                    <p>Producer: {info.producer}</p>
                    <p>Realase Date: {info.release_date}</p>
                </div>
            </>
        )
    }
    if (cat == "species"){
        return (
            <>
                <div className="container">
                    <h1>{info.name}</h1>
                    <p>Classification: {info.classification}</p>
                    <p>Average Lifespan: {info.average_lifespan}</p>
                    <p>Homeworld: {info.homeworld}</p>
                    <p>Language: {info.language}</p>
                </div>
            </>
        )
    }
    if (cat == "starships"){
        return (
            <>
                <div className="container">
                    <h1>{info.name}</h1>
                    <p>Model: {info.model}</p>
                    <p>Manufacturer: {info.manufacturer}</p>
                    <p>Cost in Credits: {info.cost_in_credits}</p>
                    <p>Length: {info.length}</p>
                </div>
            </>
        )
    }
    if (cat == "vehicles"){
        return (
            <>
                <div className="container">
                    <h1>{info.name}</h1>
                    <p>Model: {info.model}</p>
                    <p>Manufacturer: {info.manufacturer}</p>
                    <p>Cost in Credits: {info.cost_in_credits}</p>
                    <p>Length: {info.length}</p>
                </div>
            </>
        )
    }
}

export default People;