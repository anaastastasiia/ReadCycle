import { booksActions, booksStore } from '../store/useBooks';
import BookItem from '../components/Book/Book';
import { BookFilters } from '../components/BookFilters/BookFilters';
import { useEffect } from 'react';

export const LibraryPage = () => {
    const { books } = booksStore();
    const { getAllBooks } = booksActions;

    useEffect(() => {
        getAllBooks();
    }, []);

    return (
        <div className="overflow-x-hidden">
            <div>
                {books.length ? (
                    <div className="container">
                        <div className="flex md:flex-row flex-col">
                            <div className="lg:w-1/4 p-4 w-full">
                                <BookFilters />
                            </div>
                            <div className="lg:w-3/4 p-6 w-full">
                                <div className="grid lg:grid-cols-4 md:grid-cols-2 space-y-6 md:space-y-0 gap-6">
                                    {books.map((item, index) => {
                                        return (
                                            <BookItem {...item} key={index} />
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
};
