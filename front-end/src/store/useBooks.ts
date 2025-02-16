import { create } from 'zustand';
// import { produce } from 'immer';
import BooksMapper from '../model/mapper/BooksMapper';
// import { ProduceState } from '../model/types';
import { apiController } from '../controllers/apiController';
import { BookResponse } from '../api';

export interface BookState {
    books: BookResponse[];
}

//STORE
export const booksStore = create<BookState>(() => ({
    books: []
}))

// const map = produce<ProduceState<CategoriesState>>;

//ACTIONS
const getBooksForBanner = async () => {
    try {
        const res = await apiController.callEndpoint((api) => api.apiBookAllGet());
        console.log('data: ', res);
        if(res) {
            const books = res?.data.map((book, index) => BooksMapper.mapBooksFromDb(book, index));
            console.log('ready books: ', books)
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

export const booksActions = {getBooksForBanner}