import { BookDetailsResponse, BookResponse, BookTypeEnum, NewBookRequest } from "../../api";
import { CreateBookFormData } from "../../store/useBooks";
import { BookBanner, BookDetails } from "../types";

const mapBooksFromDb = (book: BookResponse, index: number): BookBanner => {
    return {
        ...book,
        id: book.id,
        image: book.image ? book.image : "",
        reverse: index % 2 !== 0,
        categoryName: book.categoryName ? book.categoryName : BookTypeEnum.All
    }
}

const mapBookDetailsFromDb = (book: BookDetailsResponse): BookDetails => {
    return {
        ...book,
        id: book.id,
        image: book.image ? book.image : "",
        edition: book.edition ? book.edition : "",
        pages: book.pages ? book.pages : undefined,
        year: book.year ? book.year : "",
        dateCreated: book.dateCreated ? book.dateCreated : "",
        numReviews: book.numReviews ? book.numReviews : undefined,
        categoryName: book.categoryName ? book.categoryName : BookTypeEnum.All,
        images: book.images ? book.images : []
    }
}

const mapNewBook = (book: CreateBookFormData): NewBookRequest => {
    return {
        ...book,
        image: book.image ? book.image : "",
        edition: book.edition ? book.edition : "",
        pages: book.pages ? book.pages : undefined,
        year: book.year ? book.year : "",
        categoryName: book.categoryName ? book.categoryName : BookTypeEnum.All,
        images: book.images ? book.images : []
    }
}
  
export default {mapBooksFromDb, mapBookDetailsFromDb, mapNewBook}