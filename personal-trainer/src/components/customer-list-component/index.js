import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactTable from "react-table";
import "react-table/react-table.css";
import Headertext from "../header-text-component";

const Customers = () => {
    const url = "https://customerrest.herokuapp.com/api/customers";
    const [customers, setCustomers] = useState([]);

    const fetchData = () => {
        axios.get(url).then(res => {
            setCustomers(res.data.content);
        });
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
        }
    ];

    if (!!customers.length) {
        return (
            <div>
                <Headertext headerText="Customers listing"></Headertext>
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
                    <div class="lds-dual-ring"></div>
                </div>
            </div>
        );
    }
};

export default Customers;
