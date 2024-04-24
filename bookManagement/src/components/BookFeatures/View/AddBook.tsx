import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import dayjs, {Dayjs} from "dayjs";
import DateSelected from "@site/src/components/BookFeatures/View/DateSelected";
import {getDateStringFromDayJs} from "@site/src/components/BookFeatures/Util/util";

const AddBook = () => {
    const [open, setOpen] = React.useState(false);
    const [selectedDate, setSelectedDate] = React.useState<Dayjs | null>(dayjs(new Date()));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const formJson = Object.fromEntries((formData as any).entries());
        console.log(formJson)
    };

    return (
        <React.Fragment>
            <Button variant="outlined" onClick={handleClickOpen}>
                Add Book
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: (event: React.FormEvent<HTMLFormElement>) => handleSubmit(event),
                }}
            >
                <DialogTitle>Add Book</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please input book info
                    </DialogContentText>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="title"
                        name="title"
                        label="Book Title"
                        type="title"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        margin="dense"
                        id="author"
                        name="author"
                        label="Book author"
                        type="author"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        margin="dense"
                        id="isbn"
                        name="isbn"
                        label="Book ISBN"
                        type="isbn"
                        fullWidth
                        variant="standard"
                    />
                    <DateSelected value={selectedDate} setValue={setSelectedDate}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit">Submit</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
export default AddBook