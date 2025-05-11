import { useTranslation } from 'react-i18next';
import { booksStore } from '../store/useBooks';
import BookItem from '../components/Book/Book';

export const LibraryPage = () => {
    const { t } = useTranslation();
    const { booksOnSale } = booksStore();

    return (
        <div className="overflow-x-hidden">
            <div>
                {booksOnSale.length ? (
                    <div className="container bg-[#f9f9f9]">
                        <div className="space-y-4 px-6 pb-6 text-center max-w-[700px] mx-auto mb-5">
                            <p className="font-semibold text-3xl ">
                                {t('pages:mainPage.sales.title')}
                                <span className="text-red-600">
                                    {t('pages:mainPage.sales.onSale')}
                                </span>
                            </p>
                        </div>
                        <div className="grid lg:grid-cols-4 space-y-6 md:space-y-0 gap-6">
                            {booksOnSale.map((item, index) => {
                                return <BookItem {...item} key={index} />;
                            })}
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
};
