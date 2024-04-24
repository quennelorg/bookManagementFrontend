import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import dayjs, {Dayjs} from "dayjs";
import DateSelected from "@site/src/components/BookFeatures/DateSelected";
import {getDateStringFromDayJs} from "@site/src/components/BookFeatures/util";

const AddBook = () => {
    const [open, setOpen] = React.useState(false);
    const [selectedDate, setSelectedDate] = React.useState<Dayjs | null>(dayjs('2022-04-17'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
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
                    onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                        event.preventDefault();
                        const formData = new FormData(event.currentTarget);
                        const formJson = Object.fromEntries((formData as any).entries());
                        const title = formJson.title;
                        console.log(formJson);
                        console.log(getDateStringFromDayJs(selectedDate))
                        handleClose();
                    },
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