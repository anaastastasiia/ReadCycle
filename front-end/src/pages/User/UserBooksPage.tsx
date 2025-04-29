import { useEffect } from 'react';
import { booksActions, booksStore } from '../../store/useBooks';
import { BookCard } from '../../components/Book/BookCard';

export const UserBooksPage = () => {
    const { books } = booksStore();
    const { getBookDetails } = booksActions;

    useEffect(() => {
        getBookDetails();
    }, []);

    return (
        <div className="max-w-6xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Moї книги на продаж</h1>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {books.map((book) => (
                    <BookCard key={book.id} {...book} />
                ))}
            </div>
        </div>
    );
};
