import React, {useState} from "react";

const Box = ()=>{
    
    let [color, setColor] = useState("");

    let [colorList, setColorList] = useState([]);

    const submitColor = (e)=>{

        e.preventDefault();
        console.log("submitted");

        let group = {color};

        setColorList([...colorList, color]);
    }
    
    return (
        <>

        <form onSubmit={submitColor}>
            <label htmlFor="">Color</label>
            <input onChange={(e)=>{setColor(e.target.value)}} type="text"/>
            <button>Add</button>
        </form>

        return(

        )
        
        </>
    )
}




export default Box;