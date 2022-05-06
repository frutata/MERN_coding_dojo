import React, {useState} from 'react';

const Tabs = (props) =>{

    let {tabOne, tabTwo, tabThree} = props;

    let [content, setContent] = useState(props.content);

    const maketabs = () =>{
        setContent();
    }
    
    return(
        <>

        <div className='container outline'>
            <div>
                <h1>{tabOne} {tabTwo} {tabThree}</h1>
            </div>
            <div>
                <p>content</p>
            </div>

        </div>
        
        </>
    )

}

export default Tabs;