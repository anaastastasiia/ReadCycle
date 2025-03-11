import { create } from 'zustand';
// import { produce } from 'immer';
import BooksMapper from '../model/mapper/BooksMapper';
// import { ProduceState } from '../model/types';
import { apiController } from '../controllers/apiController';
import { BookResponse } from '../api';
import { BookDetails } from '../model/types';
import { BooksTypeEnum } from '../model/enums';

export interface BookState {
    books: BookResponse[];
    bookDetails: BookDetails;
}

//STORE
export const booksStore = create<BookState>(() => ({
    books: [],
    bookDetails: {
        id: 0,
        author: "",
        categoryName: BooksTypeEnum.ALL,
        description: "",
        name: "",
        price: 0
    }
}))

// const map = produce<ProduceState<CategoriesState>>;

//ACTIONS
const getBooksForBanner = async () => {
    try {
        const res = await apiController.callEndpoint((api) => api.apiBookOnSaleGet());
        if(res && res.data) {
            const books = res.data.map((book, index) => BooksMapper.mapBooksFromDb(book, index));
            booksStore.setState(() => ({
                books: books
            }))
            return books;
        } 
        return null;
    } catch (err) {
        console.error('Error while getting books: ', err)
    }
}

const getBookDetails = async (id: number) => {
    try {
        const res = await apiController.callEndpoint((api) => api.apiBookDetailsIdGet(id));
        if(res && res.data) {
            const details = BooksMapper.mapBookDetailsFromDb(res.data);
            booksStore.setState(() => ({
                bookDetails: details
            }))
            return details;
        } 
        return null;
    } catch (err) {
        console.error('Error while getting books: ', err)
    }
}

export const booksActions = {getBooksForBanner, getBookDetails}