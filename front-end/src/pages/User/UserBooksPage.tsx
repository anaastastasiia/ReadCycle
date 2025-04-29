import { useEffect } from 'react';
import { booksActions, booksStore } from '../../store/useBooks';
import { BookCard } from '../../components/Book/BookCard';
import { authStore } from '../../store/authStore';

export const UserBooksPage = () => {
    const { user } = authStore();
    const { userSellBooks } = booksStore();
    const { getBooksForUser } = booksActions;

    useEffect(() => {
        if (user) {
            getBooksForUser(user?.id);
        }
    }, []);

    return (
        <div className="max-w-6xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Moї книги на продаж</h1>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {userSellBooks.map((book) => (
                    <BookCard key={book.id} book={book} />
                ))}
            </div>
        </div>
    );
};
