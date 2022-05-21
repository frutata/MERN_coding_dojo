import logo from "./logo.svg";
import "./App.css";
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";
import AllAuthors from "./components/AllAuthors";
import CreateAuthors from "./components/CreateAuthors";
import EditAuthor from "./components/EditAuthor";

function App() {

    return (
        <BrowserRouter>
            <div className="App">
                <Switch>
                    <Route exact path={"/"}>
                        <AllAuthors/>
                    </Route>

                    <Route exact path={"/new"}>
                        <CreateAuthors/>
                    </Route>

                    <Route exact path={"/edit/:_id"}>
                        <EditAuthor/>
                    </Route>

                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
