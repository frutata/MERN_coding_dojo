import React, {useState} from 'react';

const Pokemon = () => {

    const [namesList, setNamesList] = useState([]);

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