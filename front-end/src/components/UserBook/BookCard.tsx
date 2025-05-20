import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { BookDetails } from '../../model/types';
import { booksActions } from '../../store/useBooks';
import BooksMapper from '../../model/mapper/BooksMapper';

export const BookCard = ({ book }: { book: BookDetails }) => {
    const { t } = useTranslation();
    const [isDiscountModalOpen, setDiscountModalOpen] = useState(false);
    const [discountValue, setDiscountValue] = useState('');
    const { updateBook, deleteBook } = booksActions;

    const handleAddDiscount = async () => {
        await updateBook(book.id, BooksMapper.mapDiscount(discountValue));
        alert({ message: t('pages:userPage.sell.successfulAdding') }.message);
        setDiscountModalOpen(false);
        setDiscountValue('');
    };

    const closeModal = () => {
        setDiscountModalOpen(false);
        setDiscountValue('');
    };

    const deleteItem = async () => {
        await deleteBook(book.id);
    };

    return (
        <>
            <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition p-8 flex flex-col justify-between">
                <img
                    src={book.image || '/placeholder.png'}
                    alt={book.name}
                    className="w-full h-72 object-cover rounded"
                />
                <div className="mt-2">
                    <h2 className="text-lg font-semibold line-clamp-1">
                        {book.name}
                    </h2>
                    <p className="text-sm text-gray-600 line-clamp-1">
                        {book.author}
                    </p>
                    <p className="text-sm mt-1">
                        {t('pages:userPage.sell.price')}:{' '}
                        <b>{book.price} PLN</b>
                    </p>
                    <button
                        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 mt-3"
                        onClick={() => setDiscountModalOpen(true)}
                    >
                        {t('pages:userPage.sell.addDiscount')}
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
                        <button onClick={deleteItem}>
                            <DeleteIcon />
                        </button>
                    </div>
                </div>
            </div>
            {isDiscountModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                        <h3 className="text-lg font-semibold mb-4">
                            {t('pages:userPage.sell.addDiscount')}
                        </h3>
                        <input
                            type="number"
                            min="0"
                            max="100"
                            value={discountValue}
                            onChange={(e) => setDiscountValue(e.target.value)}
                            placeholder={t('pages:userPage.sell.enter')}
                            className="w-full border p-2 rounded mb-4"
                        />
                        <div className="flex justify-end gap-2">
                            <button
                                onClick={closeModal}
                                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                            >
                                {t('pages:userPage.sell.cancel')}
                            </button>
                            <button
                                onClick={handleAddDiscount}
                                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                            >
                                {t('pages:userPage.sell.confirm')}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
