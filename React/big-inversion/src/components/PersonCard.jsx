import React, {useState} from 'react';

const PersonCard = (props) => {

    let {firstName, lastName, hairColor} = props;

    let [age, setAge] = useState(props.age);

    const increaseAge = () =>{
        setAge(age + 1);
    }


    return(
        <>
        
        <div>
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={increaseAge}>Increase Age for {firstName}</button>
        </div>

        <hr />
        
        </>
    )

}

export default PersonCard;