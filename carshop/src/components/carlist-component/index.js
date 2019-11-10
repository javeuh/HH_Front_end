import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import ReactTable from "react-table";
import "react-table/react-table.css";

const useStyles = makeStyles(theme => ({
    close: {
        padding: theme.spacing(0.5)
    }
}));

const Carlist = () => {
    const url = "https://carstockrest.herokuapp.com/cars";
    const classes = useStyles();
    const [cars, setCars] = useState([]);
    const [open, setOpen] = React.useState(false);
    const [confirmMessage, setConfirmMessage] = useState("");

    const fetchData = () => {
        fetch(url)
            .then(res => res.json())
            .then(data => setCars(data._embedded.cars));
    };

    useEffect(() => fetchData(), []);

    const openSnack = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
    };

    const deleteCar = link => {
        if (window.confirm("Are you sure?")) {
            fetch(link, { method: "DELETE" })
                .then(res => fetchData())
                .then(() => {
                    setConfirmMessage("Car Deleted");
                    openSnack();
                })
                .catch(err => {
                    setConfirmMessage("Try again later! Car was not removed!");
                    openSnack();
                    console.log(err);
                });
        }
    };

    const columns = [
        {
            Header: "Brand",
            accessor: "brand"
        },
        {
            Header: "Model",
            accessor: "model"
        },
        {
            Header: "Color",
            accessor: "color"
        },
        {
            Header: "Fuel",
            accessor: "fuel"
        },
        {
            Header: "Year",
            accessor: "year"
        },
        {
            Header: "Price",
            accessor: "price"
        },
        {
            sortable: false,
            filterable: false,
            Header: "Action",
            width: 100,
            accessor: "_links.self.href",
            Cell: row => (
                <Button
                    onClick={() => deleteCar(row.value)}
                    size="small"
                    color="secondary"
                >
                    Delete
                </Button>
            )
        }
    ];

    return (
        <div>
            <ReactTable filterable={true} data={cars} columns={columns} />
            <Snackbar
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left"
                }}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                ContentProps={{
                    "aria-describedby": "message-id"
                }}
                message={<span id="message-id">{confirmMessage}</span>}
                action={[
                    <IconButton
                        key="close"
                        aria-label="close"
                        color="inherit"
                        className={classes.close}
                        onClick={handleClose}
                    >
                        <CloseIcon />
                    </IconButton>
                ]}
            />
        </div>
    );
};

export default Carlist;
