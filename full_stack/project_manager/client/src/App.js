import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AllUsers from './components/AllUsers';
import Form from './components/Form';
import OneUser from './components/OneUser';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Switch>
                    <Route exact path="/">
                    <h1>Create a User</h1>
                        <Form/>
                        <hr className='width mt'></hr>
                        <h2>Users</h2>
                        <AllUsers/>
                    </Route>
                    <Route exact path="/user/:_id">
                        <OneUser/>
                    </Route>
                </Switch>

            </div>
        </BrowserRouter>
    );
}

export default App;
