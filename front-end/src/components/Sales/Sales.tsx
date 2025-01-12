import { useTranslation } from 'react-i18next';
import Banner from '../Banner/Banner';
import Img1 from '../../assets/courtOfThornsAndRoses.jpg';
import Img2 from '../../assets/theMountainIsYou.jpg';

const BannerData = {
    image: Img1,
    author: 'Maas Sarah J.',
    title: 'A Court of Thorns And Roses',
    titlePL: 'PL A Court of Thorns And Roses',
    titleUA: 'UA A Court of Thorns And Roses',
    subtitle:
        'Feyre is a huntress. And when she sees a deer in the forest being pursued by a wolf, she kills the predator and takes its prey to feed herself and her family.',
    subtitlePL:
        'PL Feyre is a huntress. And when she sees a deer in the forest being pursued by a wolf, she kills the predator and takes its prey to feed herself and her family.',
    subtitleUA:
        'UA Feyre is a huntress. And when she sees a deer in the forest being pursued by a wolf, she kills the predator and takes its prey to feed herself and her family.',
    link: '#',
    price: 76,
    discount: 20
};

const BannerData2 = {
    image: Img2,
    author: 'Brianna Wiest',
    title: 'The Mountain Is You',
    titlePL: 'PL The Mountain Is You',
    titleUA: 'UA The Mountain Is You',
    subtitle:
        'This is a book about self-sabotage. Why we do it, when we do it, and how to stop doing it—for good.Coexisting but conflicting needs create self-sabotaging behaviors. This is why we resist efforts to change, often until they feel completely futile. ',
    subtitlePL:
        'PL This is a book about self-sabotage. Why we do it, when we do it, and how to stop doing it—for good.Coexisting but conflicting needs create self-sabotaging behaviors. This is why we resist efforts to change, often until they feel completely futile. ',
    subtitleUA:
        'UA This is a book about self-sabotage. Why we do it, when we do it, and how to stop doing it—for good.Coexisting but conflicting needs create self-sabotaging behaviors. This is why we resist efforts to change, often until they feel completely futile. ',
    link: '#',
    price: 34,
    discount: 30
};

const Sales = () => {
    const { t } = useTranslation();
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
                    <Banner {...BannerData} />
                    <Banner {...BannerData2} />
                    <Banner {...BannerData2} />
                    <Banner {...BannerData2} />
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
