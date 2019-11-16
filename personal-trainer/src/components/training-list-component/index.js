import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import ReactTable from "react-table";
import "react-table/react-table.css";
import Headertext from "../header-text-component";

const Trainings = () => {
    const url = "https://customerrest.herokuapp.com/gettrainings";
    const [trainings, setTrainings] = useState([]);

    const fetchData = () => {
        axios.get(url).then(res => {
            setTrainings(res.data);
        });
    };

    const columns = [
        {
            Header: "Date and time",
            accessor: "date",
            Cell: ({ value }) => moment(value).format("MMM Do YYYY, h:mm a")
        },
        {
            Header: "First Name",
            accessor: "customer.firstname"
        },
        {
            Header: "Last Name",
            accessor: "customer.lastname"
        },
        {
            Header: "Duration (min)",
            accessor: "duration"
        },
        {
            Header: "Activity",
            accessor: "activity"
        }
    ];

    useEffect(() => fetchData(), []);

    if (!!trainings.length) {
        return (
            <div>
                <Headertext headerText="Training listing"></Headertext>
                <ReactTable
                    filterable={true}
                    data={trainings}
                    columns={columns}
                />
            </div>
        );
    } else {
        return (
            <div>
                <Headertext headerText="Fetching trainings..."></Headertext>
                <div className="row">
                    <div class="lds-dual-ring"></div>
                </div>
            </div>
        );
    }
};

export default Trainings;
