import {Box} from "@mui/material";
import BookList from "@site/src/components/BookFeatures/BookList";
import {Book} from "@site/src/components/BookFeatures/BookModel";
import {useState} from "react";
import AddBook from "@site/src/components/BookFeatures/AddBook";

const BookFeature = () => {
    const mockBook: Book = {
        id: '这是id',
        title: '这是一本书',
        author: '这是一个作者',
        isbn: '这是一个isbn',
        publishedDate: '这是一个发布日期',
    }
    const [books, setBooks] = useState<Book[]>( [mockBook, mockBook])
    const deleteBook = (id: string) => {
        console.log(id)
    }
    const editBook = (book: Book) => {
        console.log(book.id)
    }
    return(
        <Box>
            <AddBook />
            <BookList books={books} deleteBook={deleteBook} editBook={editBook}/>
        </Box>)
}
export default BookFeature