import React from "react";
import Headertext from "../header-text-component";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
    return (
        <div>
            <Headertext headerText="Welcome to personal trainer platform!" />
            <div className="row">
                <div className="col-md-6">
                    <p>
                        From this app you can search people and trainings!
                        <br></br>Feel free to try it out!
                    </p>
                </div>
                <div className="col-md-6">
                    <h4>Trainings today:</h4>
                </div>
            </div>
        </div>
    );
};

export default Home;
