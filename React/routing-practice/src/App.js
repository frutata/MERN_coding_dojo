import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter, //enables routing for application
    Switch,
    Route
} from "react-router-dom";
import Home from './components/Home';
import Number from './components/Number';

function App() {
    return (
        <BrowserRouter>
        <div className="App">

            <h1>Hello, Welcome to Routing Practice</h1>
            <Switch>
                {/* default homepage */}
                <Route exact path={"/home"}>
                    <Home/>
                </Route>
                {/* if we use a specific id it runs through this path */}
                <Route exact path={"/:id"}>
                    <Number/>
                </Route>
                {/* if we use a specific id and color combo it runs through this path */}
                <Route exact path={"/:id/:color1/:color2"}>
                    <Number/>
                </Route>
            </Switch>
        </div>
        </BrowserRouter>
    );
}

export default App;
