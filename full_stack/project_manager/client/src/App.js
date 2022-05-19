import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";
import AllUsers from './components/AllUsers';
import Form from './components/Form';
import OneUser from './components/OneUser';
import EditUser from './components/EditUser';

function App() {

    const [formSubmittedToggle, setFormSubmittedToggle] = useState(false);

    return (
        <BrowserRouter>
            <div className="App">
                <Switch>
                    <Route exact path="/">
                        <h1>Create a User</h1>
                        <Form formSubmittedToggle = {formSubmittedToggle} setFormSubmittedToggle = {setFormSubmittedToggle}/>
                        <hr className='width mt'></hr>
                        <h2>Users</h2>
                        <AllUsers formSubmittedToggle = {formSubmittedToggle}/>
                    </Route>
                    <Route exact path="/user/:_id">
                        <OneUser />
                    </Route>
                    <Route exact path="/user/edit/:_id">
                        <EditUser />
                    </Route>
                </Switch>

            </div>
        </BrowserRouter>
    );
}

export default App;
