import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    container: {
        display: "flex",
        flexWrap: "wrap"
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200
    }
}));
const Addtraining = ({ addTraining, customer, isCustomerHref }) => {
    const classes = useStyles();
    const emptyTraining = {
        date: "",
        activity: "",
        duration: "",
        customer: customer.links.find(isCustomerHref).href
    };

    const [open, setOpen] = useState(false);
    const [training, setTraining] = useState(emptyTraining);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setTraining(emptyTraining);
    };

    const handleInputChange = e => {
        setTraining({ ...training, [e.target.name]: e.target.value });
    };

    const addNewTraining = () => {
        addTraining(training);
        handleClose();
    };

    console.log(training);
    return (
        <div>
            <Button
                style={{ margin: 10 }}
                variant="outlined"
                color="primary"
                onClick={handleClickOpen}
            >
                Add training
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">
                    Add new training to{" "}
                    {customer.firstname + " " + customer.lastname}
                </DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        id="date"
                        label="Training Date"
                        name="date"
                        type="date"
                        value={training.date}
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true
                        }}
                        onChange={e => handleInputChange(e)}
                    />
                    <TextField
                        margin="dense"
                        name="activity"
                        value={training.activity}
                        onChange={e => handleInputChange(e)}
                        label="Activity"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        name="duration"
                        value={training.duration}
                        onChange={e => handleInputChange(e)}
                        label="Duration"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={addNewTraining} color="primary">
                        Save Training
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default Addtraining;
