import {Box} from "@mui/material";
import BookList from "@site/src/components/BookFeatures/View/BookList";
import {Book} from "@site/src/components/BookFeatures/Model/bookModel";
import {useEffect, useState} from "react";
import AddBook from "@site/src/components/BookFeatures/View/AddBook";
import {deleteBookById, getBooks, saveBooks} from "@site/src/components/BookFeatures/Service/bookService";
import _ from "lodash";
import * as React from "react";

const BookFeature = () => {
    const [openAddBookDialog, setOpenAddBookDialog] = React.useState(false);

    const [books, setBooks] = useState<Book[]>( [])
    const editBook = (book: Book) => {
        console.log(book.id)
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
            <AddBook addBook={addBook} open={openAddBookDialog} setOpen={setOpenAddBookDialog}/>
            {!_.isEmpty(books) && <BookList books={books} deleteBook={removeBook} editBook={editBook}/>}
        </Box>)
}
export default BookFeature