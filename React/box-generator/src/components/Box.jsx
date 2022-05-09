import React, {useState} from "react";

const Box = ()=>{
    
    let [color, setColor] = useState("");
    let [fav, setFav] = useState(false);

    let [colorList, setColorList] = useState([]);
    console.log("in the box.jsx component")
    const submitColor = (e)=>{

        // prevents form from refreshing the page upon submission
        e.preventDefault();
        console.log("submitted");

        // creating a color object OR another word is hashmap
        let group = {color, fav};
        // console.log(group)

        // use the setColorList to update the colorList array to have the color object inside of it
        setColorList([...colorList, group]);

        // clear the form after submission
        setColor("");
    }

    const toggleFav = (e, idx)=>{
        // console.log("toggling", idx);
        // modify the colorList at the specific index -> idx so that color is show as a fav
        // 1. make a copy of colorList
        let [...copyList] = colorList;
        // 2. change the color at the specific index # property for fav to true/false
        copyList[idx].fav = e.target.checked;
        // 3. update our state variable
        setColorList(copyList);
    }

    const toggleDelete = (e, idx)=>{
        // console.log("delete", idx);
        // make a copy of the list (IN THIS CASE WE DON'T NEED TO because filter automatically makes a new copy)
        // 2. delete element at specific index in list
        let filteredCopy = colorList.filter((group, i)=>{
            // inside the filter func, i represents the index number of each pet
            return i != idx; //gives me new array with all colors minus the current one
        })
        setColorList(filteredCopy);
    }
    
    return (
        <>

        <form onSubmit={submitColor}>
            <label htmlFor="">Color</label>
            <input onChange={(e)=>{setColor(e.target.value)}} type="text" value={color}/>
            <button>Add</button>
        </form>

        <div className="flex">
            {
                colorList.map((colorObj, idx)=>{
                    return (
                            <div key={idx} className="box" style={{backgroundColor: colorObj.color, textDecoration: colorObj.fav? "underline": "none"}}>
                                <p>Fav<input type="checkbox" onChange={(e)=>toggleFav(e, idx)} /></p>
                                <button onClick={(e)=>toggleDelete(e, idx)}>Delete</button>
                            </div>
                    );
                })
            }
        </div>
        
        </>
    )
}




export default Box;