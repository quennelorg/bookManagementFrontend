import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DateSelected from "@site/src/components/BookFeatures/View/DateSelected";
import {getDateStringFromDayJs, getUUIDString} from "@site/src/components/BookFeatures/Util/util";
import {Book} from "@site/src/components/BookFeatures/Model/bookModel";
import _ from "lodash";

const AddBook = ({addBook, open, handleClose, oldBook, selectedDate, setSelectedDate}) => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const formJson = Object.fromEntries((formData as any).entries());
        const newBook: Book = {
            id: _.get(oldBook, 'id', getUUIDString()),
            title: _.get(formJson, 'title'),
            author: _.get(formJson, 'author'),
            isbn: _.get(formJson, 'isbn'),
            publishedDate: getDateStringFromDayJs(selectedDate)
        }
        addBook(newBook)
        console.log(formJson)
    };

    return (
        <React.Fragment>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: (event: React.FormEvent<HTMLFormElement>) => handleSubmit(event),
                }}
            >
                <DialogTitle>Book Operation</DialogTitle>
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
                        defaultValue={_.get(oldBook, 'title')}
                    />
                    <TextField
                        margin="dense"
                        id="author"
                        name="author"
                        label="Book author"
                        type="author"
                        fullWidth
                        variant="standard"
                        defaultValue={_.get(oldBook, 'author')}
                    />
                    <TextField
                        margin="dense"
                        id="isbn"
                        name="isbn"
                        label="Book ISBN"
                        type="isbn"
                        fullWidth
                        variant="standard"
                        defaultValue={_.get(oldBook, 'isbn')}
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