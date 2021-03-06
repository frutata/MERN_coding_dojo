import React, {useState} from 'react';

const Pokemon = () => {

    // creating a state variable to store the response from the api fetch
    const [namesList, setNamesList] = useState([]);

    // function to grab the names of pokemon from the api
    const getPoke = ()=>{
        fetch("https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0")
        .then(response => {
            return response.json();
        })
        .then(response =>{
            console.log(response);
            setNamesList(response.results);
            // console.log(namesList, response.data);
        })
        .catch(err =>{
            console.log(err);
        })
    }

    return (
        <>

        
        <button onClick={getPoke}>Fetch All Pokemon</button>

        {
            namesList.map((names, idx)=>{
                return(
                    // displaying the information we stored in our state variable by using the map function to loop through the hashmap
                    <div key={idx}>
                        <h4>{names.name}</h4>
                    </div>
                    
                )
            })
        }
        
        </>
    )

}

export default Pokemon;