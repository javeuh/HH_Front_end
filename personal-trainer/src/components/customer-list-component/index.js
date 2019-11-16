import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactTable from "react-table";
import "react-table/react-table.css";
import Headertext from "../header-text-component";
import Addcustomer from "../addcustomer-component";
import Editcustomer from "../editcustomer-component";
import Addtraining from "../addtraining-component";
import Button from "@material-ui/core/Button";

const Customers = () => {
    const url = "https://customerrest.herokuapp.com/api/customers";
    const [customers, setCustomers] = useState([]);

    const fetchData = () => {
        axios.get(url).then(res => {
            setCustomers(res.data.content);
        });
    };

    const saveCustomer = customer => {
        axios
            .post(url, customer)
            .then(res => fetchData())
            .catch(err => console.log(err));
    };
    const isCustomerHref = arrayItem => {
        return arrayItem.rel === "customer";
    };

    const addTraining = training => {
        const addTrainingUrl =
            "https://customerrest.herokuapp.com/api/trainings/";
        axios
            .post(addTrainingUrl, training)
            .then(res => fetchData())
            .catch(err => console.log(err));
    };

    const updateCustomer = customer => {
        const updateUrl = customer.links.find(isCustomerHref).href;
        axios
            .put(updateUrl, customer)
            .then(res => fetchData())
            .catch(err => console.log(err));
    };

    const deleteCustomer = links => {
        if (window.confirm("Are you sure?")) {
            const deleteUrl = links.find(isCustomerHref).href;
            axios
                .delete(deleteUrl)
                .then(res => fetchData())
                .catch(err => console.log(err));
        }
    };

    useEffect(() => fetchData(), []);

    const columns = [
        {
            Header: "First Name",
            accessor: "firstname"
        },
        {
            Header: "Last Name",
            accessor: "lastname"
        },
        {
            Header: "Address",
            accessor: "streetaddress"
        },
        {
            Header: "Postcode",
            accessor: "postcode"
        },
        {
            Header: "City",
            accessor: "city"
        },
        {
            Header: "Email",
            accessor: "email"
        },
        {
            Header: "Phone",
            accessor: "phone"
        },
        {
            sortable: false,
            filterable: false,
            Header: "Edit",
            width: 100,
            Cell: row => (
                <Editcustomer
                    customerToEdit={row.original}
                    updateCustomer={updateCustomer}
                />
            )
        },
        {
            sortable: false,
            filterable: false,
            Header: "Add Training",
            width: 200,
            Cell: row => (
                <Addtraining
                    addTraining={addTraining}
                    customer={row.original}
                    isCustomerHref={isCustomerHref}
                >
                    Add Training
                </Addtraining>
            )
        },
        {
            sortable: false,
            filterable: false,
            Header: "Delete",
            width: 100,
            accessor: "links",
            Cell: ({ value }) => (
                <Button
                    onClick={() => deleteCustomer(value)}
                    style={{ margin: 10 }}
                    variant="outlined"
                    color="secondary"
                >
                    Delete
                </Button>
            )
        }
    ];

    if (!!customers.length) {
        return (
            <div>
                <Headertext headerText="Customers listing"></Headertext>
                <Addcustomer saveCustomer={saveCustomer} />
                <ReactTable
                    filterable={true}
                    data={customers}
                    columns={columns}
                />
            </div>
        );
    } else {
        return (
            <div>
                <Headertext headerText="Fetching customers..."></Headertext>
                <div className="row">
                    <div className="lds-dual-ring"></div>
                </div>
            </div>
        );
    }
};

export default Customers;
