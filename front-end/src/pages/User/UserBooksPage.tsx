import { useEffect, useState } from 'react';
import { booksActions, booksStore } from '../../store/useBooks';
import { BookCard } from '../../components/Book/BookCard';
import { authStore } from '../../store/authStore';
import { BookDetails } from '../../model/types';

export const UserBooksPage = () => {
    const { user } = authStore();
    const { userSellBooks, shouldRefresh } = booksStore();
    const { getBooksForUser, setShouldRefresh } = booksActions;
    const [localBooks, setLocalBooks] = useState<BookDetails[]>([]);

    useEffect(() => {
        if (user) {
            (async () => {
                await getBooksForUser(user.id);
            })();
        }
    }, []);

    useEffect(() => {
        if (shouldRefresh && user) {
            (async () => {
                await getBooksForUser(user.id);
                setShouldRefresh(false);
            })();
        }
    }, [shouldRefresh]);

    useEffect(() => {
        setLocalBooks(userSellBooks);
    }, [userSellBooks]);

    return (
        <div className="overflow-x-hidden flex container flex-col my-8">
            <h1 className="text-2xl font-bold mb-4">Moї книги на продаж</h1>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {localBooks.map((book) => (
                    <BookCard key={book.id} book={book} />
                ))}
            </div>
        </div>
    );
};
