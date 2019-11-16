import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Headertext = ({ headerText }) => {
    return (
        <div>
            <div className="row mt-2">
                <div className="col-md-12 mb-4">
                    <h1>{headerText}</h1>
                </div>
            </div>
        </div>
    );
};

export default Headertext;
