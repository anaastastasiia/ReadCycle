import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { SlideUp } from '../../utils/animations';
import { BookBanner } from '../../model/types';
import { booksActions } from '../../store/useBooks';
import { useNavigate } from 'react-router-dom';
import { getPriceWithDiscount } from '../../utils/functions';

const BookItem = ({
    id,
    image,
    name,
    author,
    reverse,
    price,
    discount
}: BookBanner) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { getBookDetails } = booksActions;

    const getDetails = async () => {
        const res = await getBookDetails(id);
        if (res) {
            navigate(`/details/${id}`);
        }
    };

    return (
        <div
            className={`flex justify-start items-center max-w-1/2  content-start py-6 relative gap-2 flex-col  ${
                reverse && 'md:order-last md:justify-end'
            }`}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
                className="min-w-[150px] min-h-[250px] max-h-[250px] max-w-[200px] bg-gray-500 flex 
                            justify-center items-center relative overflow-hidden flex-col"
            >
                <motion.img
                    src={image ? image : ''}
                    alt=""
                    className="w-full h-full object-cover cursor-pointer"
                    onClick={getDetails}
                />
                {discount ? (
                    <div className="absolute m-1 top-0 left-0  bg-red-500 text-white md:text-lg  font-bold rounded-full px-2 py-1">
                        -{discount}%
                    </div>
                ) : null}
            </motion.div>

            <div className="flex flex-col justify-center text-center md:text-left space-y-2 lg:max-w-1/2 px-6">
                <motion.p
                    variants={SlideUp(0.5)}
                    initial="hidden"
                    whileInView={'visible'}
                    className="text-sm text-orange-600 font-semibold capitalize"
                >
                    {author}
                </motion.p>
                <motion.p
                    variants={SlideUp(0.7)}
                    initial="hidden"
                    whileInView={'visible'}
                    className="text-md lg:text-xl capitalize font-semibold"
                >
                    {name}
                </motion.p>
                <motion.p
                    variants={SlideUp(1.0)}
                    initial="hidden"
                    whileInView={'visible'}
                    className="text-xl capitalize font-semibold"
                >
                    {discount ? (
                        <div>
                            <span className="text-red-700">
                                {getPriceWithDiscount(price, discount)} PLN{' '}
                            </span>
                            <span className="line-through">
                                {price.toFixed(2)} PLN
                            </span>
                        </div>
                    ) : (
                        <span>{price} PLN</span>
                    )}
                </motion.p>
                <motion.div
                    variants={SlideUp(1.1)}
                    initial="hidden"
                    whileInView={'visible'}
                    className="flex justify-center md:justify-start"
                >
                    <button className="primary-btn">
                        {t('common:button.addToCart')}
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default BookItem;
