import React from 'react';
import { useParams } from 'react-router-dom';

const Number = ()=>{

    // set our parameters as id and color
    const {id, color1, color2} = useParams();
    console.log("id and color are", id, color1, "and", color2)

    // we use IS NOT A NUMBER to determine whether to show the message "the word is" or "the number is"
    // with in line styling we can determine what we want the background color and text color of our content to be if we so happen to add the color parameters in the url
    return(
        <>
        <div style={{backgroundColor: color2}}>
            {
                isNaN(id)?
                <h1 style={{color: color1}}>The Word Is {id}</h1>:
                <h1>The Number is: {id}</h1>
            }
        </div>
        </>
    )
}

export default Number;