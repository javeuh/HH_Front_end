import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigator from "./components/navigator-component";

const Home = () => {
    return <h1>This is Home</h1>;
};
const About = () => {
    return <h1>This is About Page</h1>;
};
const Contact = () => {
    return <h1>Contact Page</h1>;
};

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>Welcome to React Router</p>
            </header>

            <div>
                <Navigator />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                </Switch>
            </div>
        </div>
    );
}

export default App;
