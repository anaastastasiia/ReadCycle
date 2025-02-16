import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Banner from '../Banner/Banner';
import { booksActions, booksStore } from '../../store/useBooks';

const Sales = () => {
    const { t } = useTranslation();
    const { getBooksForBanner } = booksActions;
    const { books } = booksStore();

    useEffect(() => {
        getBooksForBanner();
    }, []);

    return (
        <div className="bg-[#f9f9f9]">
            <div className="container">
                <div className="space-y-4 px-6 pb-6 text-center max-w-[700px] mx-auto mb-5">
                    <p className="font-semibold text-3xl ">
                        {t('pages:mainPage.sales.title')}{' '}
                        <span className="text-red-600">
                            {t('pages:mainPage.sales.onSale')}
                        </span>
                    </p>
                </div>
                <div className="grid lg:grid-cols-2 space-y-6 md:space-y-0 gap-6">
                    {books.map((item, index) => {
                        return <Banner {...item} key={index} />;
                    })}
                    {/* <Banner {...BannerData} />
                    <Banner {...BannerData2} />
                    <Banner {...BannerData2} />
                    <Banner {...BannerData2} /> */}
                </div>
                <div className="flex justify-center items-center !mt-10 ">
                    <button className="secondary-btn w-[150px] text-lg">
                        {t('pages:mainPage.sales.seeAll')}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Sales;
