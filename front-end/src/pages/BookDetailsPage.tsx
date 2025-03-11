import { Book } from '../components/Book/Book';
import { booksStore } from '../store/useBooks';

export const BookDetailsPage = () => {
    const { bookDetails } = booksStore();

    return <div>{bookDetails ? <Book {...bookDetails} /> : null}</div>;
};
