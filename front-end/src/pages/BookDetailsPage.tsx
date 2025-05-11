import { Book } from '../components/UserBook/Book';
import { BookFilters } from '../components/BookFilters/BookFilters';
import { booksStore } from '../store/useBooks';
import { BookContext } from '../contexts/BookContext';
import { BookDetails } from '../components/UserBook/BookDetails';

export const BookDetailsPage = () => {
    const { bookDetails } = booksStore();

    return (
        <BookContext.Provider value={bookDetails}>
            <div className="overflow-x-hidden flex container flex-col my-8">
                <div className="flex md:flex-row flex-col">
                    <div className="lg:w-1/4 p-4 w-full">
                        <BookFilters />
                    </div>
                    <div className="lg:w-3/4 p-6 w-full">
                        {bookDetails ? <Book /> : null}
                    </div>
                </div>
                {bookDetails ? <BookDetails /> : null}
            </div>
        </BookContext.Provider>
    );
};
