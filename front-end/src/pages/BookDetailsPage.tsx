import { Book } from '../components/Book/Book';
import { booksStore } from '../store/useBooks';

export const BookDetailsPage = () => {
    const { bookDetails } = booksStore();

    return (
        <div className="overflow-x-hidden m-0">
            {bookDetails ? <Book {...bookDetails} /> : null}
        </div>
    );
};
