import {Box} from "@mui/material";
import BookList from "@site/src/components/BookFeatures/View/BookList";
import {Book} from "@site/src/components/BookFeatures/Model/bookModel";
import {useEffect, useState} from "react";
import AddBook from "@site/src/components/BookFeatures/View/AddBook";
import {deleteBookById, getBooks, saveBooks} from "@site/src/components/BookFeatures/Service/bookService";
import _ from "lodash";
import * as React from "react";
import Button from "@mui/material/Button";
import dayjs, {Dayjs} from "dayjs";

const BookFeature = () => {
    const [openAddBookDialog, setOpenAddBookDialog] = React.useState(false);

    const [books, setBooks] = useState<Book[]>( [])
    const [oldBook, setOldBook] = useState<Book>( null)
    const [selectedDate, setSelectedDate] = React.useState<Dayjs | null>(dayjs(new Date()));

    const handleClickOpen = () => {
        setOpenAddBookDialog(true);
    };

    const handleClose = () => {
        setOpenAddBookDialog(false);
        setOldBook(null)
        setSelectedDate(dayjs(new Date()))
    };


    const editBook = (book: Book) => {
        setOldBook(book)
        setSelectedDate(dayjs(new Date(book.publishedDate)))
        handleClickOpen()
        console.log(book)
    }

    const fetchBooks = () => {
        getBooks().then((res) => {
            console.log(res.data);
            setBooks(res.data)
        }).catch((error) => {
            console.log(error);
        })
    };

    const addBook = (newBook: Book) => {
        if(!!newBook.id && !_.isEmpty(newBook)) {
            saveBooks(newBook)
                .then((res) => {
                    fetchBooks();
                    setOpenAddBookDialog(false)
                    setOldBook(null)
                }).catch((error) => {
                console.log(error);
            })
        }
    };

    const removeBook = (id: string) => {
        deleteBookById(id)
            .then((res) => {
                fetchBooks();
            }).catch((error) => {
            console.log(error);
        })
    }
    useEffect(() => {
        fetchBooks()
    }, [])

    return(
        <Box>
            <Button variant="outlined" onClick={handleClickOpen}>
                Add Book
            </Button>
            <AddBook addBook={addBook} open={openAddBookDialog} handleClose={handleClose} oldBook={oldBook} selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
            {!_.isEmpty(books) && <BookList books={books} deleteBook={removeBook} editBook={editBook}/>}
        </Box>)
}
export default BookFeature