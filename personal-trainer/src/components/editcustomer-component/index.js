import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

const Editcustomer = ({ customerToEdit, updateCustomer }) => {
    const emptyCustomer = {
        firstname: "",
        lastname: "",
        streetaddress: "",
        postcode: "",
        city: "",
        email: "",
        phone: ""
    };

    const [open, setOpen] = useState(false);
    const [customer, setCustomer] = useState(emptyCustomer);

    const handleClickOpen = () => {
        setOpen(true);
        setCustomer(customerToEdit);
    };

    const handleClose = () => {
        setOpen(false);
        setCustomer(emptyCustomer);
    };

    const handleInputChange = e => {
        setCustomer({ ...customerToEdit, [e.target.name]: e.target.value });
    };

    const updateCurrentCustomer = () => {
        updateCustomer(customer);
        handleClose();
    };
    return (
        <div>
            <Button
                style={{ margin: 10 }}
                variant="outlined"
                color="primary"
                onClick={handleClickOpen}
            >
                Edit
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">
                    Edit customer:{" "}
                    {customerToEdit.firstname + " " + customerToEdit.lastname}
                </DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="firstname"
                        value={customer.firstname}
                        onChange={e => handleInputChange(e)}
                        label="First Name"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        name="lastname"
                        value={customer.lastname}
                        onChange={e => handleInputChange(e)}
                        label="Last Name"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        name="streetaddress"
                        value={customer.streetaddress}
                        onChange={e => handleInputChange(e)}
                        label="Street Address"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        name="postcode"
                        value={customer.postcode}
                        onChange={e => handleInputChange(e)}
                        label="Postal code"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        name="city"
                        value={customer.city}
                        onChange={e => handleInputChange(e)}
                        label="City"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        name="email"
                        value={customer.email}
                        onChange={e => handleInputChange(e)}
                        label="Email"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        name="phone"
                        value={customer.phone}
                        onChange={e => handleInputChange(e)}
                        label="Phone"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={updateCurrentCustomer} color="primary">
                        Save Customer
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default Editcustomer;
