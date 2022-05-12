import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";
import Form from './components/Form';
import People from './components/People';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Form/>
                <Switch>
                    <Route exact path="/:cat/:id">
                        <People/>
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
