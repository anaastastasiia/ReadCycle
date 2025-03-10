import { BookResponse, BookTypeEnum } from "../../api";
import { BookBanner } from "../types";

const mapBooksFromDb = (book: BookResponse, index: number): BookBanner => {
    return {
        ...book,
        image: book.image ? book.image : "",
        reverse: index % 2 !== 0,
        categoryName: book.categoryName ? book.categoryName : BookTypeEnum.All
    }
}
  
export default {mapBooksFromDb}