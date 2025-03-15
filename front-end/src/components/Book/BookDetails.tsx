import { useTranslation } from 'react-i18next';
import { useBookContext } from '../../contexts/BookContext';

export const BookDetails = () => {
    const { t } = useTranslation();
    const book = useBookContext();

    return (
        <div className="flex bg-gray-100 flex-col w-full p-8 rounded-xl">
            {t('pages:bookDetails.characteristics.header')}
            <table className="w-full text-sm lg:w-1/2">
                <tbody>
                    <tr className="border-b">
                        <td className="font-medium py-1">
                            {t('pages:bookDetails.characteristics.author')}:
                        </td>
                        <td className="py-1 text-right">{book.author}</td>
                    </tr>
                    {book.edition ? (
                        <tr className="border-b">
                            <td className="font-medium py-1">
                                {t('pages:bookDetails.characteristics.edition')}
                                :
                            </td>
                            <td className="py-1 text-right">{book.edition}</td>
                        </tr>
                    ) : null}
                    <tr className="border-b">
                        <td className="font-medium py-1">
                            {t('pages:bookDetails.characteristics.pages')}:
                        </td>
                        <td className="py-1 text-right">{book.pages}</td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium py-1">
                            {t('pages:bookDetails.characteristics.year')}:
                        </td>
                        <td className="py-1 text-right">{book.year}</td>
                    </tr>
                    <tr>
                        <td className="font-medium py-1">
                            {t('pages:bookDetails.characteristics.category')}:
                        </td>
                        <td className="py-1 text-right">{book.categoryName}</td>
                    </tr>
                </tbody>
            </table>
            <div className="flex flex-col  py-5">
                <div className="font-medium">
                    {t('pages:bookDetails.characteristics.description')}:
                </div>
                <div className="py-2">{book.description}</div>
            </div>
        </div>
    );
};
