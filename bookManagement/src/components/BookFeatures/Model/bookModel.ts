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