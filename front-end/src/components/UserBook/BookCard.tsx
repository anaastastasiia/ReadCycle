import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { BookDetails } from '../../model/types';
import { booksActions } from '../../store/useBooks';
import BooksMapper from '../../model/mapper/BooksMapper';
import { motion } from 'framer-motion';
import { SlideRight, SlideUp } from '../../utils/animations';

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
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
                    className="w-full flex justify-center items-center relative overflow-hidden flex-col bg-gray-100"
                >
                    <motion.img
                        src={book.image || '/placeholder.png'}
                        alt={book.name}
                        className="w-full h-72 object-cover rounded"
                    />
                    {book.discount ? (
                        <div className="absolute m-1 top-0 left-0  bg-red-500 text-white md:text-lg  font-bold rounded-full px-2 py-1">
                            -{book.discount}%
                        </div>
                    ) : null}
                </motion.div>

                <div className="mt-2">
                    <motion.h2
                        variants={SlideUp(0.5)}
                        initial="hidden"
                        whileInView={'visible'}
                        className="text-lg font-semibold line-clamp-1"
                    >
                        {book.name}
                    </motion.h2>
                    <motion.p
                        variants={SlideUp(0.7)}
                        initial="hidden"
                        whileInView={'visible'}
                        className="text-sm text-gray-600 line-clamp-1"
                    >
                        {book.author}
                    </motion.p>
                    <motion.p
                        variants={SlideUp(1.0)}
                        initial="hidden"
                        whileInView={'visible'}
                        className="text-sm mt-1"
                    >
                        {t('pages:userPage.sell.price')}:{' '}
                        <b>{book.price} PLN</b>
                    </motion.p>
                    <motion.button
                        variants={SlideUp(1.1)}
                        initial="hidden"
                        whileInView={'visible'}
                        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 mt-3"
                        onClick={() => setDiscountModalOpen(true)}
                    >
                        {t('pages:userPage.sell.addDiscount')}
                    </motion.button>
                    <div className="flex justify-between items-center my-3">
                        <motion.div
                            variants={SlideRight(0.8)}
                            initial="hidden"
                            animate="visible"
                        >
                            <label>5</label>
                            <RemoveRedEyeIcon />
                        </motion.div>
                        <motion.div
                            variants={SlideRight(0.9)}
                            initial="hidden"
                            animate="visible"
                        >
                            <label>4</label>
                            <FavoriteIcon />
                        </motion.div>
                        <motion.button
                            variants={SlideRight(1.0)}
                            initial="hidden"
                            animate="visible"
                            onClick={deleteItem}
                        >
                            <DeleteIcon />
                        </motion.button>
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
