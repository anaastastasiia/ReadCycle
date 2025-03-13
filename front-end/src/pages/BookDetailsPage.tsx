import { useTranslation } from 'react-i18next';
import { Book } from '../components/Book/Book';
import { BookFilters } from '../components/BookFilters/BookFilters';
import { booksStore } from '../store/useBooks';
import { BookContext } from '../contexts/BookContext';

export const BookDetailsPage = () => {
    const { t } = useTranslation();
    const { bookDetails } = booksStore();

    return (
        <BookContext.Provider value={bookDetails}>
            <div className="overflow-x-hidden flex container flex-col">
                <div className="flex md:flex-row flex-col">
                    <div className="lg:w-1/4 p-4 w-full">
                        <BookFilters />
                    </div>
                    <div className="lg:w-3/4 p-6 w-full">
                        {bookDetails ? <Book /> : null}
                    </div>
                </div>
                <div className="flex bg-[#f9f9f9] flex-col">
                    {t('pages:bookDetails.features.header')}
                    <table className="w-full text-sm lg:w-1/2">
                        <tbody>
                            <tr className="border-b">
                                <td className="font-medium py-1">
                                    {t('pages:bookDetails.features.author')}:
                                </td>
                                <td className="py-1 text-right">
                                    {bookDetails.author}
                                </td>
                            </tr>
                            {bookDetails.edition ? (
                                <tr className="border-b">
                                    <td className="font-medium py-1">
                                        {t(
                                            'pages:bookDetails.features.edition'
                                        )}
                                        :
                                    </td>
                                    <td className="py-1 text-right">
                                        {bookDetails.edition}
                                    </td>
                                </tr>
                            ) : null}
                            <tr className="border-b">
                                <td className="font-medium py-1">
                                    {t('pages:bookDetails.features.pages')}:
                                </td>
                                <td className="py-1 text-right">
                                    {bookDetails.pages}
                                </td>
                            </tr>
                            <tr className="border-b">
                                <td className="font-medium py-1">
                                    {t('pages:bookDetails.features.year')}:
                                </td>
                                <td className="py-1 text-right">
                                    {bookDetails.year}
                                </td>
                            </tr>
                            <tr>
                                <td className="font-medium py-1">
                                    {t('pages:bookDetails.features.category')}:
                                </td>
                                <td className="py-1 text-right">
                                    {bookDetails.categoryName}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    {t('pages:bookDetails.features.description')}:{' '}
                    {bookDetails.description}
                </div>
            </div>
        </BookContext.Provider>
    );
};
