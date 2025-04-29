import { Link } from 'react-router-dom';
import { BookDetails } from '../../model/types';

export const BookCard = ({ book }: { book: BookDetails }) => {
    return (
        <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition p-4 flex flex-col justify-between">
            <img
                src={book.image || '/placeholder.png'}
                alt={book.name}
                className="w-full h-48 object-cover rounded"
            />
            <div className="mt-2">
                <h2 className="text-lg font-semibold line-clamp-1">
                    {book.name}
                </h2>
                <p className="text-sm text-gray-600 line-clamp-1">
                    {book.author}
                </p>
                <p className="text-sm mt-1">
                    Ціна: <b>{book.price} грн</b>
                </p>
                <Link
                    to={`/edit-book/${book.id}`}
                    className="inline-block mt-3 text-blue-600 hover:underline text-sm"
                >
                    Редагувати
                </Link>
            </div>
        </div>
    );
};
