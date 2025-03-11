import { Book } from '../components/Book/Book';
import { BookFilters } from '../components/BookFilters/BookFilters';
import { booksStore } from '../store/useBooks';

export const BookDetailsPage = () => {
    const { bookDetails } = booksStore();

    return (
        <div className="overflow-x-hidden m-0 flex container">
            <div className="w-1/5 p-4 min-h-screen">
                <BookFilters />
            </div>
            <div className="w-4/5 p-6">
                {bookDetails ? <Book {...bookDetails} /> : null}
            </div>
        </div>
    );
};
