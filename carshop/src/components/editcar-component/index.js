import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

const Editcar = ({ saveCar, carToEdit, updateCar }) => {
    const emptyCar = {
        brand: "",
        model: "",
        color: "",
        fuel: "",
        year: "",
        price: ""
    };
    const [open, setOpen] = useState(false);
    const [car, setCar] = useState(emptyCar);

    const handleClickOpen = () => {
        setCar(carToEdit);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setCar(emptyCar);
    };

    const handleInputChange = e => {
        setCar({ ...car, [e.target.name]: e.target.value });
    };

    const updateCurrentCar = () => {
        updateCar(car, carToEdit._links.car.href);
        handleClose();
        setCar(emptyCar);
    };

    return (
        <div>
            <Button size="small" color="primary" onClick={handleClickOpen}>
                Edit Car
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Edit Car</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="brand"
                        value={car.brand}
                        onChange={e => handleInputChange(e)}
                        label="Brand"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        name="model"
                        value={car.model}
                        onChange={e => handleInputChange(e)}
                        label="Model"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        name="color"
                        value={car.color}
                        onChange={e => handleInputChange(e)}
                        label="Color"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        name="fuel"
                        value={car.fuel}
                        onChange={e => handleInputChange(e)}
                        label="Fuel"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        name="year"
                        value={car.year}
                        onChange={e => handleInputChange(e)}
                        label="Year"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        name="price"
                        value={car.price}
                        onChange={e => handleInputChange(e)}
                        label="Price"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={updateCurrentCar} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default Editcar;
