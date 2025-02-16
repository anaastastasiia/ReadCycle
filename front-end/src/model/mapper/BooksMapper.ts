import { BookResponse, BookTypeEnum } from "../../api";
import { BookBanner } from "../types";

const mapBooksFromDb = (book: BookResponse, index: number): BookBanner => {
    console.log(typeof book.price)
    return {
        name: book.name,
        author: book.author, 
        description: book.description,
        discount: book.discount,
        price: book.price,
        image: book.image ? book.image : "",
        reverse: index % 2 !== 0,
        category: book.categoryName ? book.categoryName : BookTypeEnum.All
    }
}
  
export default {mapBooksFromDb}