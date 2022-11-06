export type Book = {
    id: string;
    fullSizeCover: string;
    author: string;
    additionalAuthors: string;
    publisher: string;
    dateRead: string;
    dateAdded: string;
    yearPublished: string;
    review: string;
    title: string;
    cover: string;
    heightCm:number;
}

export function emptyBook():Book {
    return {
        id:"", 
        title:"", 
        cover:"", 
        additionalAuthors:"",
        author:"",
        fullSizeCover:"",
        publisher:"",
        review:"",
        dateRead:"",
        dateAdded:"",
        yearPublished:"",
        heightCm:15,
    };
}
export type BookHandler = (book:Book) => Promise<boolean>;
