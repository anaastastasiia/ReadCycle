import { BookDetailsResponse, BookResponse, BookTypeEnum, NewBookRequest, UpdateBookRequest } from "../../api";
import { UserData } from "../../store/authStore";
import { CreateBookFormData } from "../../store/useBooks";
import { BookBanner, BookDetails } from "../types";

const mapBooksFromDb = (book: BookResponse, index: number): BookBanner => {
    return {
        ...book,
        id: book.id,
        image: book.image ? book.image : "",
        reverse: index % 2 !== 0,
        categoryName: book.categoryName ? book.categoryName : BookTypeEnum.All,
        userId: book.userId
    }
}

const mapBookDetailsFromDb = (book: BookDetailsResponse, userId?: number): BookDetails => {
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
        images: book.images ? book.images : [],
        userId: userId ? userId : 0
    }
}

const mapNewBook = (book: CreateBookFormData, user: UserData): NewBookRequest => {
    return {
        ...book,
        image: "",
        edition: book.edition ? book.edition : "",
        pages: book.pages ? book.pages : undefined,
        year: book.year ? book.year : "",
        category: book.category ? Number(book.category) : 8,
        images: book.images ? book.images : [],
        userId: user.id
    }
}

const mapDiscount = (discount: string): UpdateBookRequest => {
    return {
        discount: discount ? Number(discount) : undefined
    }
}
  
export default {mapBooksFromDb, mapBookDetailsFromDb, mapNewBook, mapDiscount}