import React, {useState} from 'react';
import axios from 'axios';

const Pokemon = ()=>{

    // creating a state variable to store the response from the api fetch
    const [namesList, setNamesList] = useState([]);

    // function to grab the names of pokemon from the api
    const getPoke = ()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0")
        .then(response=>{
            console.log(response);
            setNamesList(response.data.results);
        })
        .catch(err=>{
            console.log(err);
        })
    }

    return(
        <>
        
        <button onClick={getPoke}>Get Pokemon Names</button>
        
        {
            namesList.map((names, idx)=>{
                return(
                    // displaying the information we stored in our state variable by using the map function to loop through the hashmap
                    <div key={idx}>
                        <h3>{names.name}</h3>
                    </div>
                )
            })
        }
        
        </>
    )

}

export default Pokemon;