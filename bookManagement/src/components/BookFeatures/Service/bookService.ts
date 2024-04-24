import axios from 'axios';
import {Book, HTTPMETHOD} from "@site/src/components/BookFeatures/Model/bookModel";

const URL = 'http://localhost:8080/book'
const getBookUrlOptions = (method: HTTPMETHOD, id?: string) => {
    return {
        method: method,
        url: URL,
        params: {
            id: method === HTTPMETHOD.delete ? id : ''
        },
    };
};

export const localBooks: Book[] = []

export const getBooks = () => {
    return axios.request(getBookUrlOptions(HTTPMETHOD.get))
};

export const saveBooks = (book: Book) => {
    return axios.post(URL, {
        id: book.id,
        title: book.title,
        author: book.author,
        isbn: book.isbn,
        publishedDate: book.publishedDate,
    })
}

export const deleteBookById = (id: string) => {
    return axios.request(getBookUrlOptions(HTTPMETHOD.delete, id))
}