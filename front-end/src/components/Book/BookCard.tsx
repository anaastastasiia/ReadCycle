import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { BookDetails } from '../../model/types';
import { booksActions } from '../../store/useBooks';
import BooksMapper from '../../model/mapper/BooksMapper';

export const BookCard = ({ book }: { book: BookDetails }) => {
    const [isDiscountModalOpen, setDiscountModalOpen] = useState(false);
    const [discountValue, setDiscountValue] = useState('');
    const { updateBook } = booksActions;

    const handleAddDiscount = async () => {
        await updateBook(book.id, BooksMapper.mapDiscount(discountValue));
        alert('Знижку додано успішно');
        setDiscountModalOpen(false);
        setDiscountValue('');
    };

    const closeModal = () => {
        setDiscountModalOpen(false);
        setDiscountValue('');
    };

    return (
        <>
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
                    <button
                        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 mt-3"
                        onClick={() => setDiscountModalOpen(true)}
                    >
                        Додати знижку
                    </button>
                    <div className="flex justify-between items-center my-3">
                        <div>
                            <label>5</label>
                            <RemoveRedEyeIcon />
                        </div>
                        <div>
                            <label>4</label>
                            <FavoriteIcon />
                        </div>

                        <button>
                            <DeleteIcon />
                        </button>
                    </div>
                </div>
            </div>
            {isDiscountModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                        <h3 className="text-lg font-semibold mb-4">
                            Додати знижку
                        </h3>
                        <input
                            type="number"
                            min="0"
                            max="100"
                            value={discountValue}
                            onChange={(e) => setDiscountValue(e.target.value)}
                            placeholder="Введіть знижку (%)"
                            className="w-full border p-2 rounded mb-4"
                        />
                        <div className="flex justify-end gap-2">
                            <button
                                onClick={closeModal}
                                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                            >
                                Скасувати
                            </button>
                            <button
                                onClick={handleAddDiscount}
                                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                            >
                                Підтвердити
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
