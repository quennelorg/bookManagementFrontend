export interface Book {
    id: string;
    title: string;
    author: string;
    isbn: string;
    publishedDate: string;
}
export enum HTTPMETHOD {
    get = 'GET',
    post = 'POST',
    delete = 'DELETE'
}
export const mockBooks = (): Book[] => {
    return [
        {
            id: '1',
            title: 'book1',
            author: 'book1',
            isbn: 'book1',
            publishedDate: 'book1',
        },{
            id: '2',
            title: 'book2',
            author: 'book2',
            isbn: 'book2',
            publishedDate: 'book2',
        },{
            id: '3',
            title: 'book3',
            author: 'book3',
            isbn: 'book3',
            publishedDate: 'book3',
        },
    ]
}