export interface Book {
    title: string;
    author: string;
    read: boolean;
}

export interface ListProp {
    books: Book[]
}