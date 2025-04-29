import { useEffect } from 'react';
import { booksActions } from '../../store/useBooks';
// import { BookCard } from '../../components/Book/BookCard';
import { authStore } from '../../store/authStore';

export const UserBooksPage = () => {
    // const { books } = booksStore();
    const { user } = authStore();
    const { getBooksForUser } = booksActions;

    useEffect(() => {
        if (user) {
            getBooksForUser(user?.id);
        }
        console.log('wpada');
        console.log(user);
    }, []);

    return (
        <div className="max-w-6xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Moї книги на продаж</h1>

            {/* <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {books.map((book) => (
                    <BookCard key={book.id} {...book} />
                ))}
            </div> */}
        </div>
    );
};
