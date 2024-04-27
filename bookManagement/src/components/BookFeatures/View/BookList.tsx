import React from 'react';
import { Stack, ListItem, List, Typography, ListItemButton, ListItemIcon, IconButton, Paper } from '@mui/material';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';

const BookList = ({ books, deleteBook, editBook }) => {
    return (
        <Paper elevation={6} square={false} sx={{ bgcolor: 'background.paper' }}>
            <List sx={{ p: 1, width: '100%' }}>
                {books.map((book) => {
                    return (
                        <BookListItem
                            book={book}
                            deleteBook={deleteBook}
                            editBook={editBook}
                        />
                    );
                })}
            </List>
        </Paper>
    );
};

const BookListItem = ({ book, deleteBook, editBook }) => {
    return (
        <ListItem
            key={book.id}
            divider={true}
            sx={{ width: '100%', margin: 'auto', display: 'flex', justifyContent: 'space-around', border: '1px solid light-gray' }}
            secondaryAction={
                <Stack direction="row" spacing={2}>
                    <IconButton edge="end" color="primary" aria-label="edit" onClick={() => editBook(book)} >
                        <ModeEditIcon />
                    </IconButton>
                    <IconButton
                        edge="end"
                        aria-label="delete"
                        color="error"
                        onClick={() => deleteBook(book.id)}
                    >
                        <DeleteIcon />
                    </IconButton>
                </Stack>
            }
            disablePadding
        >
            <ListItemButton>
                <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
                    <Typography
                        sx={{ width: '100%' }}
                        style={{ color: 'black' }}
                        key={book.id}
                    >
                        Title: {book.title}
                    </Typography>
                    <Typography
                        sx={{ width: '100%' }}
                        style={{ color: 'black' }}
                        key={book.id}
                    >
                        Author: {book.author}
                    </Typography>
                    <Typography
                        sx={{ width: '100%' }}
                        style={{ color: 'black' }}
                        key={book.id}
                    >
                        ISBN: {book.isbn}
                    </Typography>
                    <Typography
                        sx={{ width: '100%' }}
                        style={{ color: 'black' }}
                        key={book.id}
                    >
                        PublishedDate: {book.publishedDate}
                    </Typography>
                </Stack>

            </ListItemButton>
        </ListItem>
    );
};
export default BookList;