import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import ReactTable from "react-table";
import "react-table/react-table.css";
import Headertext from "../header-text-component";
import Button from "@material-ui/core/Button";

const Trainings = () => {
    const url = "https://customerrest.herokuapp.com/gettrainings";
    const [trainings, setTrainings] = useState([]);

    const fetchData = () => {
        axios.get(url).then(res => {
            console.log(res.data);
            setTrainings(res.data);
        });
    };

    const deleteTraining = id => {
        if (window.confirm("Are you sure?")) {
            const deleteUrl =
                "https://customerrest.herokuapp.com/api/trainings/" + id;
            axios
                .delete(deleteUrl)
                .then(res => fetchData())
                .catch(err => console.log(err));
        }
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
        },
        {
            sortable: false,
            filterable: false,
            Header: "Delete",
            width: 200,
            accessor: "id",
            Cell: ({ value }) => (
                <Button
                    onClick={() => deleteTraining(value)}
                    style={{ margin: 10 }}
                    variant="outlined"
                    color="secondary"
                >
                    Delete Training
                </Button>
            )
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
                    <div className="lds-dual-ring"></div>
                </div>
            </div>
        );
    }
};

export default Trainings;
