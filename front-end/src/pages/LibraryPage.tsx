import { booksActions, booksStore } from '../store/useBooks';
import BookItem from '../components/Book/Book';
import { BookFilters } from '../components/BookFilters/BookFilters';
import { useEffect } from 'react';

export const LibraryPage = () => {
    const { filteredBooks } = booksStore();
    const { getFilteredBooks } = booksActions;

    useEffect(() => {
        getFilteredBooks();
    }, []);

    return (
        <div className="overflow-x-hidden">
            <div>
                <div className="container">
                    <div className="flex md:flex-row flex-col">
                        <div className="lg:w-1/4 p-4 w-full">
                            <BookFilters />
                        </div>
                        <div className="lg:w-3/4 p-6 w-full">
                            {filteredBooks.length ? (
                                <div className="grid lg:grid-cols-4 md:grid-cols-2 space-y-6 md:space-y-0">
                                    {filteredBooks.map((item, index) => {
                                        return (
                                            <BookItem {...item} key={index} />
                                        );
                                    })}
                                </div>
                            ) : (
                                'No data'
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
