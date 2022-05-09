import React, {useState} from 'react';

const Todo = () =>{

    // creating state variable for each value
    let [item, setItem] = useState("");
    let [done, setDone] = useState(false);

    let [itemList, setItemList] = useState([]);

    const addItem = (e)=>{
        // prevents form from refreshing page after submission
        e.preventDefault();
        console.log("submit");

        let group = {item, done};

        setItemList([...itemList, group]);

        setItem("");
    }

    const strikeItem = (e, idx)=>{
        // 1. make a copy of the list
        let [...copyList] = itemList;

        // 2. change the item at the specific index # property for done true/false
        copyList[idx].done = e.target.checked;

        // 3. update our state variable
        setItemList(copyList);
    }

    const deleteItem = (e, idx)=>{
        // filter automatically creates copy of array so we don't have to
        let filteredCopy = itemList.filter((group, i)=>{
            // we are returning all values of array minus the one selected
            return i != idx;
        })
        setItemList(filteredCopy);
    }

    return(
        <>
        
        <form onSubmit={addItem}>
            <input onChange={(e)=>{setItem(e.target.value)}} type="text" value={item}/>
            <button>Add</button>
        </form>
        
        {
        itemList.map((itemObj, idx)=>{
            return(
                <div key={idx} style={{textDecoration: itemObj.done? "line-through": "none"}}>
                    <p>{itemObj.item} <input onChange={(e)=>strikeItem(e, idx)} type="checkbox" /> <button onClick={(e)=>deleteItem(e, idx)}>Delete</button></p>
                </div>
            )
        })
        }
        
        </>
    )
}

export default Todo;