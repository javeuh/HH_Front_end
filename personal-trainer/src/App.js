import React from "react";
import { Switch, Route } from "react-router-dom";
import Navigator from "./components/navigator-component";
import Home from "./components/home-component";
import Customers from "./components/customer-list-component";
import Trainings from "./components/training-list-component";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/app.css";

function App() {
    return (
        <div>
            <Navigator />
            <div className="container-fluid">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/customers" component={Customers} />
                    <Route path="/trainings" component={Trainings} />
                </Switch>
            </div>
        </div>
    );
}

export default App;
