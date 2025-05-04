import { BookDetailsResponse, BookResponse, BookTypeEnum, NewBookRequest, UpdateBookRequest } from "../../api";
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
        image: "",
        edition: book.edition ? book.edition : "",
        pages: book.pages ? book.pages : undefined,
        year: book.year ? book.year : "",
        category: book.category ? Number(book.category) : 8,
        images: book.images ? book.images : []
    }
}

const mapDiscount = (discount: string): UpdateBookRequest => {
    return {
        discount: discount ? Number(discount) : undefined
    }
}
  
export default {mapBooksFromDb, mapBookDetailsFromDb, mapNewBook, mapDiscount}