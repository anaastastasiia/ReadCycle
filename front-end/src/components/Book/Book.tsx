import { useTranslation } from 'react-i18next';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import { useBookContext } from '../../contexts/BookContext';

export const Book = () => {
    const { t } = useTranslation();
    const book = useBookContext();
    const name = book.name;

    return (
        <div className="w-full flex lg:flex-row flex-col">
            <div className="lg:w-1/2 flex justify-center h-full w-full">
                <img src={book.image} width={'400px'} />
            </div>
            <div className="lg:w-1/2 w-full flex flex-col p-2 gap-y-2 sm:pt-6 lg:pt-0">
                <Breadcrumb paths={[{ name, href: `/details/${book.id}` }]} />

                <div className="text-[28px] text-xl">{name}</div>
                <div className="mt-4 p-4 bg-gray-100 rounded-lg w-full">
                    <h3 className="font-semibold text-lg mb-2">
                        {t('pages:bookDetails.features.header')}
                    </h3>
                    <table className="w-full text-sm">
                        <tbody>
                            <tr className="border-b">
                                <td className="font-medium py-1">
                                    {t('pages:bookDetails.features.author')}:
                                </td>
                                <td className="py-1 text-right">
                                    {book.author}
                                </td>
                            </tr>
                            {book.edition ? (
                                <tr className="border-b">
                                    <td className="font-medium py-1">
                                        {t(
                                            'pages:bookDetails.features.edition'
                                        )}
                                        :
                                    </td>
                                    <td className="py-1 text-right">
                                        {book.edition}
                                    </td>
                                </tr>
                            ) : null}
                            <tr className="border-b">
                                <td className="font-medium py-1">
                                    {t('pages:bookDetails.features.pages')}:
                                </td>
                                <td className="py-1 text-right">
                                    {book.pages}
                                </td>
                            </tr>
                            <tr>
                                <td className="font-medium py-1">
                                    {t('pages:bookDetails.features.year')}:
                                </td>
                                <td className="py-1 text-right">{book.year}</td>
                            </tr>
                        </tbody>
                    </table>
                    <button className="mt-2 text-blue-500 font-medium hover:underline">
                        {t('pages:bookDetails.features.showAll')}
                    </button>
                </div>
            </div>
        </div>
    );
};
